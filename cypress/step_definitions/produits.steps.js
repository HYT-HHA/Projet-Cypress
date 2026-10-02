import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { produitsPage } from '../pages/produits.page';

Then('je suis sur la page des produits', () => {
  produitsPage.verifierAffichage();
});
