import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { produitsPage } from '../pages/produits.page';
import { avecProduit } from '../support/donnees';

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
