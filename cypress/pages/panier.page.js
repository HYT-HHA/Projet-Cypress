class PanierPage {
  selecteurs = {
    // Un élément par article du panier : ce sélecteur renvoie une liste
    nomsDesProduits: '[data-test="inventory-item-name"]',
    boutonValider: '[data-test="checkout"]',
  };

  nomsDesProduits() {
    return cy.get(this.selecteurs.nomsDesProduits);
  }

  validerPanier() {
    cy.get(this.selecteurs.boutonValider).click();
  }
}

export const panierPage = new PanierPage();
