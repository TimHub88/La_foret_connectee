# La Forêt Connectée 🌲

## Transmettons la nature vosgienne

Site web vitrine présentant l'initiative de traçabilité et valorisation du bois vosgien. Du sapin à l'objet artisanal, suivez le parcours complet de nos ressources forestières.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Développement](#développement)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Accessibilité](#accessibilité)

## 🎯 Aperçu

Ce projet est une **single page application** responsive qui présente le concept de traçabilité du bois vosgien. L'interface permet aux visiteurs de :

- Découvrir le parcours complet d'un arbre (forêt → traçabilité → atelier → produit)
- Scanner des QR codes pour accéder à l'historique détaillé de chaque arbre
- Explorer l'impact écologique et social du projet
- Contacter les partenaires et participer à l'initiative

## ✨ Fonctionnalités

### Page principale
- **Hero avec parallax** : Introduction immersive avec effet de profondeur
- **Timeline interactive** : 4 étapes du parcours avec animations au survol
- **Démonstration QR** : 3 arbres exemples avec QR codes cliquables
- **Explications détaillées** : Sections "Comment ça marche" et "Impact"
- **Galerie photo** : Images filtrables (Forêt / Atelier / Produit)
- **Témoignages** : Citations d'artisans partenaires
- **Formulaire de contact** : Modal pour participer au projet

### Pages dynamiques
- **`/tree/[id]`** : Page de détail pour chaque arbre avec toutes ses informations
- Génération statique de toutes les pages arbres au build
- Pages 404 personnalisées

### Animations
- Transitions fluides avec **Framer Motion**
- Effets parallax sur le hero
- Animations au scroll (fade-in, slide-in)
- Micro-interactions sur les boutons et cartes

### Responsive
- Mobile-first design
- Breakpoints : mobile / tablette / desktop
- Navigation adaptée selon la taille d'écran

## 🛠 Technologies

- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[qrcode.react](https://www.npmjs.com/package/qrcode.react)** - Génération de QR codes
- **[React Icons](https://react-icons.github.io/react-icons/)** - Bibliothèque d'icônes

## 📦 Installation

### Prérequis

- Node.js 18+ ou 20+ (recommandé)
- npm ou yarn ou pnpm

### Étapes

```bash
# Cloner le repository
git clone https://github.com/votre-compte/la-foret-connectee.git
cd la-foret-connectee

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

## 🚀 Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Le projet utilise le **hot reloading** : toute modification sera visible immédiatement.

### Scripts disponibles

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run start     # Serveur de production
npm run lint      # Linter ESLint
```

## 🌐 Déploiement

### Déploiement sur Vercel (Recommandé)

#### Option 1 : Via l'interface Vercel

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Cliquer sur "Add New Project"
3. Importer votre repository GitHub
4. Vercel détecte automatiquement Next.js
5. Cliquer sur "Deploy"

✅ C'est tout ! Vercel build et déploie automatiquement.

#### Option 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration Vercel

Le fichier `next.config.js` est déjà configuré pour l'export statique :

```js
output: 'export'
```

Vercel détecte automatiquement cette configuration et génère un site statique.

### Variables d'environnement

Aucune variable d'environnement n'est requise pour ce projet (100% frontend).

### URL de démo

Une fois déployé, vous obtiendrez une URL du type :
```
https://la-foret-connectee.vercel.app
```

Les QR codes pointeront vers :
```
https://la-foret-connectee.vercel.app/tree/T-001
https://la-foret-connectee.vercel.app/tree/T-002
https://la-foret-connectee.vercel.app/tree/T-003
```

## 📁 Structure du projet

```
la-foret-connectee/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux
│   └── tree/[id]/           # Pages dynamiques arbres
│       ├── page.tsx
│       └── not-found.tsx
├── components/              # Composants React
│   ├── Hero.tsx
│   ├── Timeline.tsx
│   ├── QRDemo.tsx
│   ├── HowItWorks.tsx
│   ├── Impact.tsx
│   ├── Gallery.tsx
│   ├── Partners.tsx
│   └── Footer.tsx
├── data/                    # Données statiques
│   └── trees.json          # Liste des arbres
├── public/                  # Assets statiques
│   └── images/             # Images (à ajouter)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## ⚙️ Configuration

### Palette de couleurs

Les couleurs du thème sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  sapin: "#0B5A33",   // Vert sapin (primary)
  bois: "#7B4B2F",    // Brun bois
  dore: "#D9B65A",    // Doré
  brume: "#9FB3C8",   // Gris-bleu brume
  casse: "#F6F5F1",   // Blanc cassé
}
```

### Données des arbres

Les données sont dans `data/trees.json`. Pour ajouter un arbre :

```json
{
  "id": "T-004",
  "species": "Nom de l'espèce",
  "origin": "Forêt de ...",
  "date_inventory": "2025-10-15",
  "artisan": "Nom de l'artisan",
  "products": ["Produit 1", "Produit 2"],
  "photos": ["/images/tree4-forest.jpg", "/images/tree4-product.jpg"],
  "description": "Description détaillée...",
  "coordinates": "48.xxxx° N, 6.xxxx° E"
}
```

### Images

Les images sont actuellement des placeholders Unsplash. Pour utiliser vos propres images :

1. Placer les images dans `public/images/`
2. Mettre à jour les URLs dans les composants
3. Optimiser les images (format WebP recommandé)

## ♿ Accessibilité

Le site respecte les standards **WCAG 2.1 niveau AA** :

- ✅ Contrastes de couleurs conformes
- ✅ Textes alternatifs sur les images
- ✅ Navigation au clavier
- ✅ Attributs ARIA sur les modals
- ✅ Structure sémantique HTML5
- ✅ Focus visible sur les éléments interactifs

### Tests d'accessibilité

```bash
# Utiliser Lighthouse dans Chrome DevTools
# Performance / Accessibility / Best Practices / SEO
```

Objectif : **Score Lighthouse >= 90** sur toutes les métriques.

## 🎨 Personnalisation

### Modifier les textes

Tous les textes sont directement dans les composants pour faciliter l'édition. Chercher et remplacer selon vos besoins.

### Ajouter une section

1. Créer un nouveau composant dans `components/`
2. L'importer dans `app/page.tsx`
3. L'ajouter dans le render

### Modifier les animations

Les animations sont configurées dans chaque composant avec Framer Motion. Exemple :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenu */}
</motion.div>
```

## 📄 Licence

Ce projet est un prototype de démonstration. Tous droits réservés.

## 🤝 Contribution

Ce projet est actuellement un prototype. Pour toute suggestion ou amélioration, veuillez contacter l'équipe via le formulaire de contact sur le site.

## 📧 Contact

- Email : contact@foret-connectee.fr
- GitHub : [github.com/votre-compte/la-foret-connectee](https://github.com/votre-compte/la-foret-connectee)

## 🙏 Crédits

- Photos : [Unsplash](https://unsplash.com)
- Icônes : [React Icons](https://react-icons.github.io/react-icons/)
- Typographie : [Inter](https://fonts.google.com/specimen/Inter)

---

**Développé avec ❤️ pour les Vosges**

