class ConnexionPage {
  selecteurs = {
    identifiant: '[data-test="username"]',
    motDePasse: '[data-test="password"]',
    boutonConnexion: '[data-test="login-button"]',
    messageErreur: '[data-test="error"]',
  };

  visiter() {
    cy.visit('/');
  }

  seConnecter(identifiant, motDePasse) {
    // cy.type() refuse une chaîne vide : on ne tape que si une valeur est fournie
    if (identifiant) {
      cy.get(this.selecteurs.identifiant).type(identifiant);
    }
    if (motDePasse) {
      cy.get(this.selecteurs.motDePasse).type(motDePasse, { log: false });
    }
    cy.get(this.selecteurs.boutonConnexion).click();
  }

  messageErreur() {
    return cy.get(this.selecteurs.messageErreur);
  }
}

export const connexionPage = new ConnexionPage();
