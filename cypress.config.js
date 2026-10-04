const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    // URL de l'application testée (Sauce Demo)
    baseUrl: 'https://www.saucedemo.com',
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
    async setupNodeEvents(on, config) {
      // Doit être appelé avant l'enregistrement du preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
});
