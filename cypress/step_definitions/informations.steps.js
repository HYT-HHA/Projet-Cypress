import { When } from '@badeball/cypress-cucumber-preprocessor';
import { informationsPage } from '../pages/informations.page';
import { avecClient } from '../support/donnees';

When('je renseigne les informations du client {string}', (libelle) => {
  avecClient(libelle, (client) => informationsPage.renseigner(client));
});
