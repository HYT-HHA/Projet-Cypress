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
      // log: false sur get ET type : sinon le mot de passe apparaît dans le journal Cypress
      // et dans le rapport Allure (le HTML du champ contient sa valeur)
      cy.get(this.selecteurs.motDePasse, { log: false }).type(motDePasse, { log: false });
    }
    cy.get(this.selecteurs.boutonConnexion).click();
  }

  messageErreur() {
    return cy.get(this.selecteurs.messageErreur);
  }
}

export const connexionPage = new ConnexionPage();
