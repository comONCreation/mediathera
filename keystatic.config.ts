import { config, fields, singleton } from '@keystatic/core';

const storage = import.meta.env.PROD
  ? {
      kind: 'github' as const,
      repo: import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO as `${string}/${string}`,
    }
  : { kind: 'local' as const };

export default config({
  storage,

  singletons: {
    site: singleton({
      label: 'Paramètres du site',
      path: 'src/content/site/',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom du site' }),
        phone: fields.text({ label: 'Téléphone (affiché)', description: 'Ex: 06 27 31 39 43' }),
        phoneRaw: fields.text({ label: 'Téléphone (lien)', description: 'Sans espaces, ex: 0627313943' }),
        email: fields.text({ label: 'Email' }),
        calendlyUrl: fields.url({ label: 'URL Calendly' }),
        instagramUrl: fields.url({ label: 'URL Instagram' }),
        facebookUrl: fields.url({ label: 'URL Facebook' }),
        linkedinUrl: fields.url({ label: 'URL LinkedIn' }),
        metaTitle: fields.text({ label: 'Titre SEO (balise title)' }),
        metaDescription: fields.text({
          label: 'Description SEO (balise meta)',
          multiline: true,
        }),
        legalNotice: fields.text({
          label: 'Mentions légales',
          multiline: true,
          description: 'Affichées dans une modale depuis le pied de page.',
        }),
      },
    }),

    hero: singleton({
      label: 'Section Hero',
      path: 'src/content/hero/',
      format: { data: 'json' },
      schema: {
        tagline: fields.text({ label: 'Sous-titre' }),
        motto: fields.text({ label: 'Devise' }),
        ctaText: fields.text({ label: 'Texte du bouton principal' }),
      },
    }),

    about: singleton({
      label: 'Section À propos',
      path: 'src/content/about/',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom' }),
        title: fields.text({ label: 'Titre professionnel' }),
        bio: fields.text({
          label: 'Biographie',
          multiline: true,
          description: 'Séparez les paragraphes par une ligne vide.',
        }),
        photo: fields.image({
          label: 'Photo de profil',
          directory: 'src/assets/images/about',
          publicPath: '/src/assets/images/about/',
        }),
      },
    }),

    forwho: singleton({
      label: 'Section Pour qui',
      path: 'src/content/forwho/',
      format: { data: 'json' },
      schema: {
        heading: fields.text({ label: 'Titre de la section' }),
        intro: fields.text({
          label: 'Texte d\'introduction',
          multiline: true,
        }),
        cards: fields.array(
          fields.object({
            title: fields.text({ label: 'Titre' }),
            description: fields.text({ label: 'Description' }),
          }),
          {
            label: 'Publics cibles',
            itemLabel: (props) => props.fields.title.value || 'Nouveau public',
          },
        ),
      },
    }),

    services: singleton({
      label: 'Section Prestations',
      path: 'src/content/services/',
      format: { data: 'json' },
      schema: {
        heading: fields.text({ label: 'Titre de la section' }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Nom de la prestation' }),
            description: fields.text({
              label: 'Description',
              multiline: true,
            }),
            price: fields.text({ label: 'Tarif', description: 'Ex: 60 €' }),
            duration: fields.text({ label: 'Durée', description: 'Ex: 45 min' }),
            location: fields.text({ label: 'Lieu', description: 'Ex: En cabinet' }),
            packageOffer: fields.text({
              label: 'Forfait (optionnel)',
              description: 'Ex: Forfait 5 séances : 280 €',
            }),
            image: fields.image({
              label: 'Image',
              directory: 'src/assets/images/services',
              publicPath: '/src/assets/images/services/',
            }),
          }),
          {
            label: 'Prestations',
            itemLabel: (props) => props.fields.title.value || 'Nouvelle prestation',
          },
        ),
      },
    }),

    contact: singleton({
      label: 'Section Contact',
      path: 'src/content/contact/',
      format: { data: 'json' },
      schema: {
        heading: fields.text({ label: 'Titre de la section' }),
        mapEmbedUrl: fields.text({
          label: 'URL d\'intégration Google Maps',
          description: 'L\'URL src de l\'iframe Google Maps (optionnel).',
        }),
      },
    }),
  },
});
