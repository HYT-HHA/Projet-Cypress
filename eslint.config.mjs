// Configuration d'ESLint : relecture automatique du code (npm run lint)
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default defineConfig([
  // Dossiers générés : rien à relire
  globalIgnores(['node_modules/', 'allure-results/', 'allure-report/', 'allure-history/']),

  // Règles de base JavaScript pour tous les fichiers (variables inutilisées, fautes de frappe…)
  js.configs.recommended,

  // Code des tests (pages, steps, support) : modules « import/export », règles Cypress recommandées
  {
    files: ['cypress/**/*.js'],
    extends: [pluginCypress.configs.recommended],
    languageOptions: { sourceType: 'module' },
  },

  // Configuration de Cypress : exécutée par Node.js, avec « require »
  {
    files: ['cypress.config.js'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
]);
