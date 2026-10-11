// Fonctions communes pour lire les données de test (fixtures), partagées entre les steps.

// Traduit un libellé métier en donnée réelle lue dans une fixture.
// Un libellé absent de la fixture arrête le test avec un message clair.
const avecDonnee = (fixture, libelle, action) => {
  cy.fixture(fixture).then((donnees) => {
    if (!donnees[libelle]) {
      throw new Error(`Libellé inconnu dans ${fixture}.json : « ${libelle} »`);
    }
    action(donnees[libelle]);
  });
};

// « sac à dos » → { nom, identifiant }
export const avecProduit = (libelle, action) => avecDonnee('produits', libelle, action);

// « client standard » → { prenom, nom, codePostal }
export const avecClient = (libelle, action) => avecDonnee('clients', libelle, action);
