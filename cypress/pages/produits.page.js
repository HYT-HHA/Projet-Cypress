class ProduitsPage {
  selecteurs = {
    titre: '[data-test="title"]',
    compteurPanier: '[data-test="shopping-cart-badge"]',
    lienPanier: '[data-test="shopping-cart-link"]',
    // Le site suit le schéma « action-identifiant du produit » : un sélecteur par produit
    boutonAjouter: (identifiant) => `[data-test="add-to-cart-${identifiant}"]`,
    boutonRetirer: (identifiant) => `[data-test="remove-${identifiant}"]`,
  };

  verifierAffichage() {
    // data-test="title" existe sur plusieurs pages : on vérifie aussi le texte
    cy.get(this.selecteurs.titre).should('have.text', 'Products');
  }

  ajouterAuPanier(identifiant) {
    cy.get(this.selecteurs.boutonAjouter(identifiant)).click();
  }

  retirerDuPanier(identifiant) {
    cy.get(this.selecteurs.boutonRetirer(identifiant)).click();
  }

  ouvrirPanier() {
    cy.get(this.selecteurs.lienPanier).click();
  }

  // N'existe sur la page que si le panier contient au moins un article
  compteurPanier() {
    return cy.get(this.selecteurs.compteurPanier);
  }
}

export const produitsPage = new ProduitsPage();
