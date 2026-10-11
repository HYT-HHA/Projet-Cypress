import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { confirmationPage } from '../pages/confirmation.page';

Then('la commande est confirmée', () => {
  cy.fixture('messages').then((messages) => {
    confirmationPage.messageConfirmation().should('have.text', messages['commande confirmée']);
  });
});
