import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { connexionPage } from '../pages/connexion.page';

Given('je suis sur la page de connexion', () => {
  connexionPage.visiter();
});

When('je me connecte avec le profil {string}', (profil) => {
  cy.fixture('utilisateurs').then((utilisateurs) => {
    const { identifiant, motDePasse } = utilisateurs[profil];
    cy.env(['motDePasse']).then(({ motDePasse: motDePasseEnv }) => {
      connexionPage.seConnecter(identifiant, motDePasse ?? motDePasseEnv);
    });
  });
});

Then("un message d'erreur indique {string}", (erreur) => {
  cy.fixture('messages').then((messages) => {
    connexionPage.messageErreur().should('have.text', messages[erreur]);
  });
});
