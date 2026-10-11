class PanierPage {
  selecteurs = {
    // Un élément par article du panier : ce sélecteur renvoie une liste
    nomsDesProduits: '[data-test="inventory-item-name"]',
  };

  nomsDesProduits() {
    return cy.get(this.selecteurs.nomsDesProduits);
  }
}

export const panierPage = new PanierPage();
