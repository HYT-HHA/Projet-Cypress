import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { produitsPage } from '../pages/produits.page';
import { avecProduit, avecTri } from '../support/donnees';

Then('je suis sur la page des produits', () => {
  produitsPage.verifierAffichage();
});

When("j'ajoute le produit {string} au panier", (libelle) => {
  avecProduit(libelle, (produit) => produitsPage.ajouterAuPanier(produit.identifiant));
});

When('je retire le produit {string} du panier', (libelle) => {
  avecProduit(libelle, (produit) => produitsPage.retirerDuPanier(produit.identifiant));
});

When("j'ouvre le panier", () => {
  produitsPage.ouvrirPanier();
});

Then('le panier contient {int} article(s)', (nombre) => {
  produitsPage.compteurPanier().should('have.text', String(nombre));
});

Then('le panier est vide', () => {
  produitsPage.compteurPanier().should('not.exist');
});

When('je trie les produits par {string}', (libelle) => {
  avecTri(libelle, (tri) => produitsPage.trier(tri.valeur));
});

Then('les produits sont triés par {string}', (libelle) => {
  avecTri(libelle, (tri) => {
    produitsPage.valeursAffichees(tri.critere).then((affichees) => {
      // L'ordre attendu est calculé à partir des valeurs affichées, triées par le test lui-même
      const comparer = tri.critere === 'prix' ? (a, b) => a - b : (a, b) => a.localeCompare(b);
      const attendues = [...affichees].sort(comparer);
      if (tri.ordre === 'décroissant') attendues.reverse();
      expect(affichees).to.deep.equal(attendues);
    });
  });
});
