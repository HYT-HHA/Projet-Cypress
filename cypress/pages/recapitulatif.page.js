class RecapitulatifPage {
  selecteurs = {
    // Même composant que la page panier : ce sélecteur renvoie une liste
    nomsDesProduits: '[data-test="inventory-item-name"]',
    boutonTerminer: '[data-test="finish"]',
  };

  nomsDesProduits() {
    return cy.get(this.selecteurs.nomsDesProduits);
  }

  confirmerCommande() {
    cy.get(this.selecteurs.boutonTerminer).click();
  }
}

export const recapitulatifPage = new RecapitulatifPage();
