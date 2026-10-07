const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');
const cypressOnFix = require('cypress-on-fix');
const environnements = require('./cypress/config/environnements.json');

const ENVIRONNEMENT_PAR_DEFAUT = 'recette';

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,
    // En mode run, un test échoué est relancé une fois : surveiller dans les rapports
    // les tests qui ne passent qu'au 2e essai (tests instables à corriger)
    retries: {
      runMode: 1,
      openMode: 0,
    },
    async setupNodeEvents(cypressOn, config) {
      // Choix de l'environnement : --expose environnement=preprod (recette par défaut).
      // Un nom inconnu arrête tout, pour ne jamais tester le mauvais site sans le savoir.
      const nomEnvironnement = config.expose?.environnement ?? ENVIRONNEMENT_PAR_DEFAUT;
      const environnement = environnements[nomEnvironnement];
      if (!environnement) {
        throw new Error(
          `Environnement inconnu : « ${nomEnvironnement} ». ` +
            `Environnements disponibles : ${Object.keys(environnements).join(', ')}.`,
        );
      }
      config.baseUrl = environnement.baseUrl;

      // Permet à Cucumber et Allure d'écouter les mêmes événements sans s'écraser
      const on = cypressOnFix(cypressOn);

      // Doit être appelé avant l'enregistrement du preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      allureCypress(on, config, {
        resultsDir: 'allure-results',
        // Affiché dans le rapport : on sait toujours sur quel environnement les tests ont tourné
        environmentInfo: {
          environnement: nomEnvironnement,
          url: environnement.baseUrl,
        },
      });

      return config;
    },
  },
});
