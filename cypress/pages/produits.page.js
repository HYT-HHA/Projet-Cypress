class ProduitsPage {
  selecteurs = {
    titre: '[data-test="title"]',
  };

  verifierAffichage() {
    // data-test="title" existe sur plusieurs pages : on vérifie aussi le texte
    cy.get(this.selecteurs.titre).should('have.text', 'Products');
  }
}

export const produitsPage = new ProduitsPage();
