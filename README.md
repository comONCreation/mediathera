# Médiathéra

Site vitrine one-page de **Médiathéra**, cabinet d'**Émilie Combret**, praticienne psycho-sociale et art-thérapeute. Le site présente son parcours et ses accompagnements (séances thérapeutiques, art-thérapie, Dream Machine, Méthode JMV, ateliers) autour du bien-être psychologique et physiologique. Construit avec Astro 6, React 19 et Tailwind CSS 4 ; contenu géré via Keystatic CMS.

## Prérequis

- Node.js 24.x
- npm

## Stack technique

- **Astro 6** : `output: 'server'` avec prerender sélectif (la home page est prerenderée, l'admin Keystatic est SSR)
- **React 19** : Composants interactifs + admin Keystatic
- **Tailwind CSS 4** : Styles utilitaires (thème dans `src/styles/global.css` via `@theme`)
- **Keystatic** : CMS Git-based (admin à `/keystatic`)
- **Vercel** : Hébergement via l'adapter `@astrojs/vercel` (Web Analytics activé)

## Commandes

| Commande          | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installer les dépendances                       |
| `npm run dev`     | Lancer le serveur de dev (`localhost:4321`)     |
| `npm run build`   | Build de production dans `./dist/`              |
| `npm run preview` | Prévisualiser le build localement               |
| `npm run check`   | Vérification TypeScript / Astro (`astro check`) |

## Gestion du contenu avec Keystatic

Le contenu du site (textes, images, coordonnées) est éditable via une interface d'administration web fournie par [Keystatic](https://keystatic.com/).

### En local (développement)

1. Lancer le serveur de dev : `npm run dev`
2. Ouvrir `http://localhost:4321/keystatic`
3. Modifier le contenu directement. Les changements sont sauvegardés dans les fichiers JSON sous `src/content/`.

### En production (Vercel + GitHub)

En production, Keystatic écrit directement dans le repo GitHub. Chaque sauvegarde dans l'admin crée un commit, ce qui déclenche un redéploiement automatique sur Vercel.

L'admin est accessible à `https://votre-domaine.fr/keystatic`.

#### 1. Créer une GitHub App

1. Aller sur **GitHub > Settings > Developer settings > GitHub Apps > New GitHub App**
2. Remplir :
   - **GitHub App name** : `Mediathera CMS`
   - **Homepage URL** : `https://votre-domaine.fr`
   - **Callback URL** : `https://votre-domaine.fr/api/keystatic/github/oauth/callback`
   - **Webhook** : décocher "Active"
   - **Permissions** > Repository > **Contents** : Read & write
   - **Where can this GitHub App be installed** : Only on this account
3. Cliquer sur **Create GitHub App**
4. Noter le **Client ID** (pas l'App ID)
5. Cliquer sur **Generate a new client secret** et noter le **Client Secret**
6. Dans le menu latéral, cliquer sur **Install App** et l'installer sur le repo du site

#### 2. Configurer les variables d'environnement sur Vercel

Dans **Vercel > Project > Settings > Environment Variables**, ajouter :

| Variable                         | Valeur                                       |
| :------------------------------- | :------------------------------------------- |
| `KEYSTATIC_GITHUB_CLIENT_ID`     | Le Client ID de l'OAuth App GitHub           |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Le Client Secret de l'OAuth App GitHub       |
| `KEYSTATIC_SECRET`               | Une chaîne aléatoire (voir commande ci-dessous) |
| `PUBLIC_KEYSTATIC_GITHUB_REPO`   | `owner/repo` (ex: `mon-user/mediathera`)     |

Pour générer `KEYSTATIC_SECRET` :

```sh
openssl rand -hex 32
```

#### 3. Déployer

Pusher le code sur GitHub. Vercel build et déploie automatiquement.

#### 4. Donner l'accès à l'utilisateur

L'utilisateur qui gère le contenu doit :
- Avoir un compte GitHub
- Avoir accès en écriture au repo (collaborateur ou membre de l'organisation)
- Se connecter via `https://votre-domaine.fr/keystatic` avec son compte GitHub

## Structure du contenu

Le contenu est organisé en 6 sections éditables :

| Section              | Fichier                          | Champs                                              |
| :------------------- | :------------------------------- | :-------------------------------------------------- |
| Paramètres du site   | `src/content/site/index.json`    | Nom, téléphone, email, URLs Calendly/réseaux, SEO   |
| Hero                 | `src/content/hero/index.json`    | Sous-titre, devise, texte du bouton                 |
| A propos             | `src/content/about/index.json`   | Nom, titre pro, biographie, photo                   |
| Pour qui             | `src/content/forwho/index.json`  | Titre, intro, cartes publics cibles                 |
| Prestations          | `src/content/services/index.json`| Titre, liste des prestations (tarif, durée, image)  |
| Contact              | `src/content/contact/index.json` | Titre, URL Google Maps                              |
