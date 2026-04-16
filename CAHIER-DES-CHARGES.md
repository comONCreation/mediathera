# Cahier des charges - Site vitrine Médiathéra

**Client :** Émilie Combret  
**Prestataire :** Antoine Bessaou  
**Date de rédaction :** 16 avril 2026  
**Montant de la prestation :** 400 € TTC  

---

## 1. Contexte et objectifs

Émilie Combret est praticienne en bien-être mental. Elle souhaite proposer des accompagnements psychologiques et physiologiques sous l'enseigne **Médiathéra**.

La cliente a transmis des visuels réalisés sur Canva (flyers, publications réseaux sociaux) qui servent de référence graphique pour le site. Ces documents permettent d'extraire une **charte graphique** : palette de couleurs, typographies, ton visuel général. **Le respect de cette charte est un enjeu central du projet** : le site doit s'inscrire dans la continuité des supports de communication existants.

L'objectif de ce projet est de réaliser un **site vitrine monopage (one page)** présentant :
- L'identité et la philosophie de Médiathéra
- Le profil et l'approche d'Émilie
- Les prestations proposées
- Le public concerné
- Les informations de contact et de prise de rendez-vous

Le site doit inspirer confiance, refléter la bienveillance et le professionnalisme de la praticienne, et convertir les visiteurs en prises de rendez-vous.

---

## 2. Périmètre de la prestation

### Inclus

- Développement complet du site one page (6 sections)
- Intégration des textes et images fournis
- Interface d'administration simple (CMS Keystatic) pour modifier les textes en autonomie
- Création de l'adresse email professionnelle `emiliecombret@mediathera.fr` chez o2switch et transmission des identifiants à Émilie
- Mise en ligne sur hébergement Vercel et connexion à o2switch (hébergement existant)
- Configuration du nom de domaine fourni par la cliente `mediathera.fr`
- Version responsive (mobile, tablette, desktop)
- Animations au défilement (scroll)
- Intégration Calendly pour la prise de rendez-vous en ligne
- Intégration Google Maps (localisation du cabinet)
- Liens réseaux sociaux (Instagram, Facebook, ...)
- Optimisation SEO de base (meta title, meta description)

### Non inclus

- Achat du nom de domaine (à la charge de la cliente)
- Hébergement payant
- Blog ou création de contenu rédactionnel
- Système de paiement en ligne
- Formulaire de contact (la prise de RDV passe par Calendly)
- Traduction multilingue
- Maintenance récurrente au-delà de la livraison

---

## 3. Structure du site

Le site est organisé en **6 sections** accessibles par défilement vertical, avec une barre de navigation fixe en haut de page.

| # | Section                        | Contenu                                                                  |
|---|--------------------------------|--------------------------------------------------------------------------|
| 1 | **Hero (haut de page)**        | Nom, accroche, boutons CTA (Calendly + téléphone)                        |
| 2 | **À propos**                   | Photo, présentation d'Émilie, approche thérapeutique                     |
| 3 | **À qui s'adresse Médiathéra** | Court texte + cartes par profil (adultes, couples, adolescents, enfants) |
| 4 | **Les accompagnements**        | Grille des 5 prestations avec description, durée, tarif, lieux, photo    |
| 5 | **Contact**                    | Téléphone, email, réseaux sociaux, CTA Calendly, carte Google Maps       |
| 6 | **Footer (bas de page)**       | Mentions légales, liens                                                  |

---

## 4. Choix techniques

### Astro 6 - plutôt que WordPress

Le site sera développé avec **Astro**, un générateur de sites statiques moderne.

**Avantages par rapport à WordPress :**

| Critère | Astro (ce projet) | WordPress |
|---------|------------------|-----------|
| Performance | Excellent (HTML pur, zéro JS superflu) | Variable, souvent alourdi par plugins |
| Sécurité | Très élevée (pas de base de données, pas de PHP exposé) | Cible fréquente de piratages et spam |
| Hébergement | Gratuit sur Vercel | Hébergement mutualisé payant (~5–15 €/mois) |
| Maintenabilité | Stable dans le temps, peu de mises à jour | Mises à jour fréquentes, risques de conflits plugins |
| Performances SEO | Score Lighthouse élevé nativement | Nécessite des plugins (Yoast, etc.) |
| Sur-mesure | Design 100% personnalisé | Dépend du thème choisi |

**Limite principale d'Astro :** Moins de fonctionnalités "prêtes à l'emploi" qu'un WordPress (pas de plugin de formulaire ou système de blog en 3 clics).

---

### Keystatic - le CMS intégré

**Keystatic** est un CMS headless léger qui s'intègre directement au projet. Il permet à la cliente de **modifier les textes du site depuis une interface web simple**, sans toucher au code.

**Avantages :**
- Interface claire et intuitive, accessible depuis `/keystatic`
- Les modifications sont sauvegardées directement dans le projet (fichiers JSON sur GitHub)
- Aucun abonnement, aucun service tiers payant
- Idéal pour un site dont le contenu change peu

**Limites :**
- Nécessite un compte GitHub (gratuit) et que le dépôt soit connecté
- Pas adapté si la cliente souhaite un blog avec des centaines d'articles

---

### Stack complète

- **Astro 6** - framework principal, génération statique
- **React 19** - pour les composants interactifs si nécessaire
- **Tailwind CSS 4** - styles utilitaires, design cohérent
- **Keystatic** - CMS pour l'édition des contenus
- **Vercel + o2switch** - hébergement et déploiement continu
- **Calendly** - prise de rendez-vous en ligne

---

## 5. Limites de la solution

- **Pas de formulaire de contact natif** : la prise de RDV passe par Calendly. Si la cliente veut un formulaire email, cela nécessiterait un service tiers (Formspree, etc.) et est hors périmètre.
- **Pas de blog** : si Émilie souhaite publier des articles régulièrement, une évolution du projet serait à prévoir ultérieurement.
- **CMS limité** : Keystatic permet de modifier les textes et de changer les images, mais pas de restructurer le site (ajouter une section, changer la mise en page). Toute évolution structurelle requiert l'intervention du développeur.

---

## 6. Contenu à fournir par la cliente

**C'est la partie critique du projet.** Le site ne pourra être finalisé et mis en ligne qu'une fois tous les éléments ci-dessous transmis.

### 6.1 Textes

| Élément | Statut | Notes |
|---------|--------|-------|
| Nom du cabinet | ✅ Médiathéra | Confirmé |
| Tagline | ✅ "Accompagnement psychologique & physiologique" | À valider |
| Devise (motto) | ✅ "Comprendre, Apaiser, Rééquilibrer" | À valider |
| Titre d'Émilie | ✅ "Praticienne en bien-être mental" | À valider |
| **Bio d'Émilie** (section À propos) | ⚠️ Provisoire | Texte de présentation à valider ou réécrire par Émilie |
| **Description de chaque prestation** | ⚠️ Provisoire | Textes à valider ou corriger pour chaque soin |
| **Tarifs des prestations** | ❌ Manquant | Prix pour chaque prestation (Dream Machine, JMV, Art Thérapie, Séance psy, Ateliers) |
| **Adresse du cabinet** | ❌ Manquant | Adresse complète pour l'intégration Google Maps |
| **Mentions légales** | ❌ Manquant | Statut juridique, SIRET si applicable |

### 6.2 Images

| Élément | Format recommandé | Usage |
|---------|------------------|-------|
| **Photo d'Émilie** | JPG/PNG, min. 800×800 px, fond neutre ou extérieur | Section "À propos" |
| **Photo pour Dream Machine** | JPG, format paysage (16/9 ou 4/3), min. 1200×800 px | Carte prestation |
| **Photo pour Méthode JMV** | JPG, format paysage, min. 1200×800 px | Carte prestation |
| **Photo pour Art Thérapie** | JPG, format paysage, min. 1200×800 px | Carte prestation |
| **Photo pour Séance psy** | JPG, format paysage, min. 1200×800 px | Carte prestation |
| **Photo pour Ateliers** | JPG, format paysage, min. 1200×800 px | Carte prestation |

> **Conseils photos :**
> - Privilégier des photos lumineuses, chaleureuses, qui évoquent le soin et la sérénité
> - Les banques d'images libres de droits (Unsplash, Pexels) peuvent être utilisées
> - Éviter les photos trop "médicales" ou froides, le ton du site est bienveillant et chaleureux

### 6.3 Informations pratiques

| Élément | Statut | Notes                                            |
|---------|--------|--------------------------------------------------|
| **Numéro de téléphone** | ❌ Manquant | À transmettre                                    |
| Adresse email | ✅ emiliecombret@mediathera.fr | Créée par le prestataire chez o2switch           |
| **Lien Calendly** | ❌ Manquant | URL du compte Calendly de Médiathéra             |
| **Adresse du cabinet** | ❌ Manquant | Obligatoire pour la carte Google Maps            |
| **Horaires d'ouverture** | ❌ Optionnel | Si souhaité dans le footer ou la section contact |
| Instagram | ✅ @mediathera_et_vous | Confirmé                                         |
| **Facebook / LinkedIn** | ❌ Optionnel | À transmettre si ces comptes existent            |

---

## 7. Planning indicatif

| Étape | Condition | Délai estimé |
|-------|-----------|-------------|
| Recueil du contenu (textes + images) | Fichiers transmis par Émilie | - |
| Intégration du contenu | Après réception des éléments | 2–3 jours ouvrés |
| Recettage et corrections | Retours d'Émilie (1 cycle inclus) | 2–3 jours ouvrés |
| Mise en ligne | Validation finale | 1 jour |

> Le délai total est directement conditionné par la rapidité de transmission du contenu.

---

## 8. Conditions financières

**Montant total : 400 € TTC**

- Solde de 100 % (400 €) à la livraison

---

## 9. Révisions incluses

La prestation comprend **un cycle de corrections** après la livraison du site complet (modifications de textes, ajustements visuels mineurs). Toute modification structurelle (nouvelle section, nouvelle fonctionnalité) fera l'objet d'un devis complémentaire.

---

## 10. Propriété et transfert

À la livraison et après règlement complet :
- Le code source est hébergé sur un dépôt GitHub partagé avec la cliente
- Le nom de domaine est (déjà) enregistré au nom d'Émilie Combret
- La cliente dispose d'un accès complet à son hébergement o2switch

---

*Document établi par Antoine Bessaou pour com'ON Création*
