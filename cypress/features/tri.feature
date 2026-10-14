# language: fr
@tri
Fonctionnalité: Tri des produits

  Contexte:
    Étant donné que je suis sur la page de connexion
    Et je me connecte avec le profil "standard"

  @passant
  Scénario: Tri des produits par nom de A à Z
    Quand je trie les produits par "nom de A à Z"
    Alors les produits sont triés par "nom de A à Z"

  @passant
  Scénario: Tri des produits par nom de Z à A
    Quand je trie les produits par "nom de Z à A"
    Alors les produits sont triés par "nom de Z à A"

  @passant
  Scénario: Tri des produits par prix croissant
    Quand je trie les produits par "prix croissant"
    Alors les produits sont triés par "prix croissant"

  @passant
  Scénario: Tri des produits par prix décroissant
    Quand je trie les produits par "prix décroissant"
    Alors les produits sont triés par "prix décroissant"
