# language: fr
@achat
Fonctionnalité: Achat

  @passant
  Scénario: Achat d'un produit de bout en bout
    Étant donné que je suis sur la page de connexion
    Et je me connecte avec le profil "standard"
    Quand j'ajoute le produit "sac à dos" au panier
    Et j'ouvre le panier
    Et je valide le panier
    Et je renseigne les informations du client "client standard"
    Alors le récapitulatif affiche le produit "sac à dos"
    Quand je confirme la commande
    Alors la commande est confirmée
