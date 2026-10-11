// Fonctions communes pour lire les données de test (fixtures), partagées entre les steps.

// Traduit un libellé métier (ex. « sac à dos ») en produit réel du site :
// { nom, identifiant }. Un libellé absent de produits.json arrête le test avec un message clair.
export const avecProduit = (libelle, action) => {
  cy.fixture('produits').then((produits) => {
    if (!produits[libelle]) {
      throw new Error(`Produit inconnu dans produits.json : « ${libelle} »`);
    }
    action(produits[libelle]);
  });
};
