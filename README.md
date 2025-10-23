# 🌲 La Forêt Connectée - Transmettons la nature vosgienne

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel)](https://la-foret-connectee-lwx72jus3-timhub88s-projects.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**Une proposition concrète pour tracer, valoriser et transformer chaque arbre de nos forêts vosgiennes en objets artisanaux uniques.**

Site web présentant une initiative innovante de traçabilité et valorisation du bois vosgien, du sapin à l'objet artisanal.

---

## 🌟 Fonctionnalités

### 📱 Interface
- ✅ **Design responsive** : Mobile, tablette, desktop
- ✅ **Animations fluides** : Framer Motion
- ✅ **Palette Vosges** : Vert sapin, brun bois, doré, blanc cassé
- ✅ **Accessibilité** : ARIA, contrastes AA

### 🎯 Sections principales
1. **Hero** - Page d'accueil immersive avec parallax
2. **Timeline interactive** - Les 4 étapes du parcours (Forêt → Traçabilité → Atelier → Produit)
3. **Comment ça fonctionnerait ?** - Système complet expliqué avec cartes interactives
4. **Impact** - Chiffres et bénéfices potentiels pour l'écosystème
5. **Portrait Artisan** - Focus sur Hugo NUNGE-THOUVENIN, jeune menuisier vosgien
6. **Quiz interactif** - Testez vos connaissances sur la forêt vosgienne
7. **Partenaires potentiels** - Réseau d'acteurs locaux

### 🎮 Quiz éducatif
- 5 questions sur la forêt vosgienne avec **vraies statistiques**
- Explications pédagogiques après chaque réponse
- Score final avec message personnalisé
- Partage sur réseaux sociaux

### 🎨 Design
- Photos photo-réalistes des Vosges
- Images d'artisans locaux
- Cartes interactives avec images de fond
- Effets hover et transitions fluides

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/TimHub88/La_foret_connectee.git
cd La_foret_connectee

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### Build de production

```bash
# Build
npm run build

# Lancer en production
npm run start
```

---

## 📦 Technologies utilisées

| Technologie | Version | Usage |
|------------|---------|-------|
| **Next.js** | 14.2.0 | Framework React (App Router) |
| **React** | 18.3.1 | Bibliothèque UI |
| **TypeScript** | 5.0.0 | Typage statique |
| **Tailwind CSS** | 3.4.3 | Styling CSS utilitaire |
| **Framer Motion** | 11.0.0 | Animations |
| **React Icons** | 5.0.0 | Icônes |

---

## 📁 Structure du projet

```
la-foret-connectee/
├── app/
│   ├── layout.tsx          # Layout racine
│   ├── page.tsx            # Page principale
│   └── globals.css         # Styles globaux
├── components/
│   ├── Hero.tsx            # Section hero
│   ├── Timeline.tsx        # Parcours interactif
│   ├── HowItWorks.tsx      # Explications
│   ├── Impact.tsx          # Impact écologique
│   ├── ArtisanProfile.tsx  # Portrait Hugo
│   ├── Quiz.tsx            # Quiz interactif
│   ├── Partners.tsx        # Partenaires potentiels
│   └── Footer.tsx          # Pied de page
├── public/
│   └── images/
│       ├── STEP1.jpg       # Image étape Forêt
│       ├── STEP2.jpg       # Image étape Traçabilité
│       ├── STEP3.png       # Image étape Atelier
│       └── STEP4.jpg       # Image étape Produit
├── tailwind.config.ts      # Config Tailwind
├── package.json
└── README.md
```

---

## 🎨 Palette de couleurs

```css
--sapin: #0B5A33;        /* Vert sapin principal */
--bois: #7B4B2F;         /* Brun bois chaud */
--dore: #D9B65A;         /* Doré doux */
--brume: #9FB3C8;        /* Gris/bleu brume */
--casse: #F6F5F1;        /* Blanc cassé */
```

---

## 🌐 Déploiement

### Vercel (recommandé)

Le projet est configuré pour Vercel. Pour déployer :

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer en production
vercel --prod
```

Ou connectez votre dépôt GitHub directement sur [vercel.com](https://vercel.com) pour un déploiement automatique.

### Autres plateformes

Le projet peut également être déployé sur :
- **Netlify** : `npm run build` puis déployez le dossier `.next`
- **GitHub Pages** : Nécessite export statique
- **Serveur Node.js** : `npm run build && npm run start`

---

## 📊 Statistiques du quiz

Les questions du quiz sont basées sur des **données réelles** :

| Statistique | Valeur | Source |
|------------|--------|--------|
| Surface forestière Vosges | ~350 000 ha | ~59% du territoire |
| Essence dominante | Épicéa commun | ~35% des forêts |
| Bois récolté/an | ~1,2 M m³ | Filière bois locale |
| Propriété privée | ~70% | Forêts privées |
| Emplois directs | ~3 000 | Filière bois Vosges |

---

## 👤 Focus Artisan : Hugo NUNGE-THOUVENIN

Le site met en avant **Hugo NUNGE-THOUVENIN**, jeune menuisier vosgien :
- Apprenti chez Menuiserie Maire (Neufchâteau)
- Étudiant à l'ENSTIB (École du Bois, Épinal)
- Compétences : CAO/FAO/DAO, usinage MOCN 5 axes, menuiserie traditionnelle
- Créations sur mesure pour particuliers

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add: AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 Licence

Ce projet est une proposition/prototype éducatif pour valoriser la forêt vosgienne.

---

## 📧 Contact

**Vosj'innove**
- Email : contact@vosjinnove.fr
- Site web : [https://la-foret-connectee-lwx72jus3-timhub88s-projects.vercel.app](https://la-foret-connectee-lwx72jus3-timhub88s-projects.vercel.app)
- GitHub : [https://github.com/TimHub88/La_foret_connectee](https://github.com/TimHub88/La_foret_connectee)

---

## 🎯 Roadmap future

- [ ] Système de traçabilité réel avec base de données
- [ ] Intégration d'une vraie API artisans
- [ ] Formulaire de contact fonctionnel
- [ ] Plus de témoignages d'artisans
- [ ] Dashboard pour artisans et forestiers
- [ ] Application mobile compagnon

---

## 🌲 À propos de l'initiative

Cette initiative vise à proposer un système complet de **traçabilité et valorisation** du bois vosgien :

1. **Forêt** : Inventaire et identification des arbres
2. **Traçabilité** : Système numérique de suivi
3. **Transformation** : Artisans locaux qualifiés
4. **Produit final** : Objets artisanaux tracés

**Objectif** : Valoriser le patrimoine forestier vosgien, soutenir l'économie locale et sensibiliser à l'origine des produits.

---

**Fait avec ❤️ pour les Vosges** 🌲✨
