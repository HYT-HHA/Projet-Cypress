# Prompts par étape

Adapter les parties entre `[crochets]`.

## Prompt 1 — Scénario Gherkin

```
Étape 1 uniquement : écris le fichier .feature pour la fonctionnalité [nom de la fonctionnalité] sur [nom du site].

Contexte : [user story ou critères d'acceptation, colle-les ici]

Règles :
- Fichier cypress/features/[fonctionnalité].feature, en français (# language: fr)
- Langage métier uniquement : aucune donnée technique (identifiants, mots de passe, textes exacts)
- Cas passants et non passants dans le même fichier, avec les tags @passant et @non-passant
- Plan du scénario + Exemples seulement si le même scénario change uniquement de données ; valeurs du tableau en libellés métier
- Réutilise les phrases existantes dans cypress/step_definitions/ et signale-moi celles que tu reprends
- Ne crée ni steps ni page. Attends ma validation.
```

## Prompt 2 — Step definitions et données

```
Étape 2 uniquement : écris les step definitions pour cypress/features/[fonctionnalité].feature.

Règles :
- Un fichier par page du site : cypress/step_definitions/[page].steps.js, même nom que la page
- Ne redéfinis pas une phrase qui existe déjà dans un autre fichier de steps
- Chaque step appelle une méthode du Page Object [page]Page (nom en français), qui n'existe pas encore : liste-moi les méthodes nécessaires
- Les libellés métier sont traduits en vraies valeurs via cypress/fixtures/[fichier].json
- Les secrets (mots de passe) sont lus avec Cypress.env(), stockés dans cypress.env.json
- Ne code pas la page. Attends ma validation.
```

## Prompt 3 — Code de la page et sélecteurs

```
Étape 3 : écris le Page Object cypress/pages/[page].page.js avec les méthodes listées à l'étape 2.

Sélecteurs : ne cherche pas toi-même dans le site. Voici le HTML que j'ai inspecté :
[colle le bloc HTML ou le <body>]

Mes choix de sélecteurs : [ta proposition pour chaque élément, ou « propose-moi »]

Règles :
- Noms de méthodes et de variables en français
- Ordre de préférence : data-test > id stable > name/aria-label > texte > classe
- Signale tout sélecteur généré automatiquement, positionnel ou dont l'unicité n'est pas garantie par le HTML fourni
- Commente mes choix et explique tes corrections
```

## Prompt 4 — Exécution

```
Lance le test cypress/features/[fonctionnalité].feature.
En cas d'échec, explique-moi la cause et propose une correction, sans rien modifier avant ma validation.
```
