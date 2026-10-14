class ProduitsPage {
  selecteurs = {
    titre: '[data-test="title"]',
    compteurPanier: '[data-test="shopping-cart-badge"]',
    lienPanier: '[data-test="shopping-cart-link"]',
    listeTri: '[data-test="product-sort-container"]',
    // Ces deux sélecteurs renvoient une liste : un élément par produit, dans l'ordre affiché
    nomsDesProduits: '[data-test="inventory-item-name"]',
    prixDesProduits: '[data-test="inventory-item-price"]',
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

  // valeur : option de la liste de tri (« az », « za », « lohi », « hilo »)
  trier(valeur) {
    cy.get(this.selecteurs.listeTri).select(valeur);
    // Le site redessine la liste après le choix : on la recherche avant de vérifier
    cy.get(this.selecteurs.listeTri).should('have.value', valeur);
  }

  // Renvoie les noms (textes) ou les prix (nombres, « $29.99 » → 29.99) dans l'ordre affiché
  valeursAffichees(critere) {
    const selecteur = critere === 'prix' ? this.selecteurs.prixDesProduits : this.selecteurs.nomsDesProduits;
    return cy
      .get(selecteur)
      .should('have.length.greaterThan', 1)
      .then((elements) =>
        [...elements].map((element) =>
          critere === 'prix' ? Number(element.innerText.replace('$', '')) : element.innerText,
        ),
      );
  }

  // N'existe sur la page que si le panier contient au moins un article
  compteurPanier() {
    return cy.get(this.selecteurs.compteurPanier);
  }
}

export const produitsPage = new ProduitsPage();
