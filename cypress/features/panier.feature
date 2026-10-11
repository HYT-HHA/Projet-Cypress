# language: fr
@panier
Fonctionnalité: Panier

  Contexte:
    Étant donné que je suis sur la page de connexion
    Et je me connecte avec le profil "standard"

  @smoke @passant
  Scénario: Ajout d'un produit au panier
    Quand j'ajoute le produit "sac à dos" au panier
    Alors le panier contient 1 article

  @passant
  Scénario: Affichage du produit dans le panier
    Quand j'ajoute le produit "sac à dos" au panier
    Et j'ouvre le panier
    Alors le panier affiche le produit "sac à dos"

  @passant
  Scénario: Retrait d'un produit du panier
    Quand j'ajoute le produit "sac à dos" au panier
    Et je retire le produit "sac à dos" du panier
    Alors le panier est vide
