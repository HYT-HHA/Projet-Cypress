import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { panierPage } from '../pages/panier.page';
import { avecProduit } from '../support/donnees';

Then('le panier affiche le produit {string}', (libelle) => {
  avecProduit(libelle, (produit) => panierPage.nomsDesProduits().should('contain.text', produit.nom));
});
