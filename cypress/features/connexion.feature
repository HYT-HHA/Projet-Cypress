# language: fr
Fonctionnalité: Connexion

  Contexte:
    Étant donné que je suis sur la page de connexion

  @passant
  Scénario: Connexion réussie
    Quand je me connecte avec le profil "standard"
    Alors je suis sur la page des produits

  @non-passant
  Scénario: Connexion refusée - compte bloqué
    Quand je me connecte avec le profil "bloqué"
    Alors un message d'erreur indique "compte bloqué"

  @non-passant
  Scénario: Connexion refusée - mot de passe incorrect
    Quand je me connecte avec le profil "mot de passe incorrect"
    Alors un message d'erreur indique "identifiants invalides"

  @non-passant
  Scénario: Connexion refusée - identifiant manquant
    Quand je me connecte avec le profil "sans identifiant"
    Alors un message d'erreur indique "identifiant obligatoire"
