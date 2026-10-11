import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { recapitulatifPage } from '../pages/recapitulatif.page';
import { avecProduit } from '../support/donnees';

Then('le récapitulatif affiche le produit {string}', (libelle) => {
  avecProduit(libelle, (produit) =>
    recapitulatifPage.nomsDesProduits().should('contain.text', produit.nom),
  );
});

When('je confirme la commande', () => {
  recapitulatifPage.confirmerCommande();
});
