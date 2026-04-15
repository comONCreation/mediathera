# Mediathera

Site vitrine one-page pour un cabinet de psychologie & physiothérapie, construit avec Astro 6, React 19 et Tailwind CSS 4. Le contenu est géré via Keystatic CMS.

## Prérequis

- Node.js >= 22.12.0
- npm

## Commandes

| Commande         | Action                                     |
| :--------------- | :----------------------------------------- |
| `npm install`    | Installer les dépendances                  |
| `npm run dev`    | Lancer le serveur de dev (`localhost:4321`) |
| `npm run build`  | Build de production dans `./dist/`         |
| `npm run preview`| Prévisualiser le build localement          |

## Gestion du contenu avec Keystatic

Le contenu du site (textes, images, coordonnées) est éditable via une interface d'administration web fournie par [Keystatic](https://keystatic.com/).

### En local (développement)

1. Lancer le serveur de dev : `npm run dev`
2. Ouvrir `http://localhost:4321/keystatic`
3. Modifier le contenu directement. Les changements sont sauvegardés dans les fichiers JSON sous `src/content/`.

### En production (Vercel + GitHub)

En production, Keystatic écrit directement dans le repo GitHub. Chaque sauvegarde dans l'admin crée un commit, ce qui déclenche un redéploiement automatique sur Vercel.

L'admin est accessible à `https://votre-domaine.fr/keystatic`.

#### 1. Créer une GitHub OAuth App

1. Aller sur **GitHub > Settings > Developer settings > OAuth Apps > New OAuth App**
2. Remplir :
   - **Application name** : `Mediathera CMS`
   - **Homepage URL** : `https://votre-domaine.fr`
   - **Authorization callback URL** : `https://votre-domaine.fr/api/keystatic/github/oauth/callback`
3. Cliquer sur **Register application**
4. Noter le **Client ID**
5. Cliquer sur **Generate a new client secret** et noter le **Client Secret**

#### 2. Configurer les variables d'environnement sur Vercel

Dans **Vercel > Project > Settings > Environment Variables**, ajouter :

| Variable                         | Valeur                                       |
| :------------------------------- | :------------------------------------------- |
| `KEYSTATIC_GITHUB_CLIENT_ID`     | Le Client ID de l'OAuth App GitHub           |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Le Client Secret de l'OAuth App GitHub       |
| `KEYSTATIC_SECRET`               | Une chaîne aléatoire (voir commande ci-dessous) |
| `KEYSTATIC_GITHUB_REPO`          | `owner/repo` (ex: `mon-user/mediathera`)     |

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

## Stack technique

- **Astro 6** - Framework web statique avec SSR partiel
- **React 19** - Composants interactifs + admin Keystatic
- **Tailwind CSS 4** - Styles utilitaires (thème dans `src/styles/global.css`)
- **Keystatic** - CMS Git-based (admin à `/keystatic`)
- **Vercel** - Hébergement avec adapter `@astrojs/vercel`
