class ConfirmationPage {
  selecteurs = {
    messageConfirmation: '[data-test="complete-header"]',
  };

  messageConfirmation() {
    return cy.get(this.selecteurs.messageConfirmation);
  }
}

export const confirmationPage = new ConfirmationPage();
