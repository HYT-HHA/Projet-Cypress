// Configuration du rapport Allure 3
export default {
  name: 'Tests Cypress - Sauce Demo',
  resultsDir: './allure-results',
  output: './allure-report',
  // Chaque génération ajoute une ligne à ce fichier : c'est l'historique des exécutions
  historyPath: './allure-history/history.jsonl',
  plugins: {
    awesome: {
      options: {
        reportLanguage: 'fr',
      },
    },
  },
};
