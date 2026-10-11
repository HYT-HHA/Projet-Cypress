class InformationsPage {
  selecteurs = {
    // Attention : ces data-test sont en camelCase sur le site, à recopier à l'identique
    prenom: '[data-test="firstName"]',
    nom: '[data-test="lastName"]',
    codePostal: '[data-test="postalCode"]',
    boutonContinuer: '[data-test="continue"]',
  };

  renseigner({ prenom, nom, codePostal }) {
    cy.get(this.selecteurs.prenom).type(prenom);
    cy.get(this.selecteurs.nom).type(nom);
    cy.get(this.selecteurs.codePostal).type(codePostal);
    cy.get(this.selecteurs.boutonContinuer).click();
  }
}

export const informationsPage = new InformationsPage();
