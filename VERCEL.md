# Guide de déploiement sur Vercel

## 🚀 Déploiement rapide

### Méthode 1 : Import depuis GitHub (Recommandé)

#### Étape 1 : Préparer le repository GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - La Forêt Connectée"

# Créer un repository sur GitHub
# Aller sur github.com et créer un nouveau repo : la-foret-connectee

# Ajouter le remote
git remote add origin https://github.com/VOTRE-USERNAME/la-foret-connectee.git

# Push vers GitHub
git branch -M main
git push -u origin main
```

#### Étape 2 : Déployer sur Vercel

1. **Aller sur [vercel.com](https://vercel.com)**
2. **Se connecter** avec votre compte GitHub
3. Cliquer sur **"Add New Project"**
4. **Importer** votre repository `la-foret-connectee`
5. Vercel détecte automatiquement Next.js et configure :
   - **Framework Preset** : Next.js
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next` ou `out` (selon config)
   - **Install Command** : `npm install`

6. Cliquer sur **"Deploy"**

✅ **C'est terminé !** Votre site est en ligne en ~2 minutes.

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer (mode preview)
vercel

# Déployer en production
vercel --prod
```

## 📋 Configuration détaillée

### Configuration automatique

Vercel détecte automatiquement votre projet Next.js grâce au fichier `package.json` et `next.config.js`.

### Settings recommandés sur Vercel

#### Build & Development Settings

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: (leave blank - auto-detected)
Install Command: npm install
Development Command: npm run dev
```

#### Environment Variables

**Aucune variable d'environnement n'est nécessaire** pour ce projet (front-end only).

### Configuration dans next.config.js

Le fichier est déjà configuré pour le déploiement :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'export', // Export statique pour Vercel
};

module.exports = nextConfig;
```

## 🔄 Déploiement automatique

Une fois connecté à GitHub, **chaque push sur la branche `main` déclenche automatiquement un nouveau déploiement**.

### Workflow Git → Vercel

```bash
# Faire des modifications
# ...

# Commit
git add .
git commit -m "Update: description des changements"

# Push vers GitHub
git push origin main

# ✅ Vercel déploie automatiquement !
```

### Branches Preview

Chaque branche GitHub obtient une **URL de preview unique** :

```bash
# Créer une branche de développement
git checkout -b dev/nouvelle-fonctionnalite

# Faire des modifications et commit
git add .
git commit -m "Add: nouvelle fonctionnalité"

# Push la branche
git push origin dev/nouvelle-fonctionnalite
```

Vercel crée automatiquement une URL de preview comme :
```
https://la-foret-connectee-xyz123.vercel.app
```

## 🌐 Domaine personnalisé (Optionnel)

### Ajouter votre propre domaine

1. Aller dans **Settings** > **Domains** sur Vercel
2. Ajouter votre domaine (ex: `foret-connectee.fr`)
3. Suivre les instructions pour configurer le DNS :
   - **Type A** : pointe vers Vercel IP
   - **CNAME** : pointe vers `cname.vercel-dns.com`

### Domaines suggérés

- `foret-connectee.fr`
- `foret-connectee-vosges.fr`
- `tracabilite-bois-vosges.fr`

## 📊 Monitoring & Analytics

### Vercel Analytics (Gratuit)

1. Aller dans l'onglet **Analytics** du projet
2. Activer **Vercel Analytics**
3. Suivez les métriques :
   - Visiteurs
   - Pages vues
   - Core Web Vitals
   - Performance

### Vercel Speed Insights

Pour optimiser les performances :

```bash
npm install @vercel/speed-insights
```

Ajouter dans `app/layout.tsx` :

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🐛 Troubleshooting

### Erreur de build

**Problème** : `Module not found` ou erreur d'import

**Solution** :
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Rebuild localement pour vérifier
npm run build
```

### Erreur avec les images

**Problème** : Images Unsplash bloquées

**Solution** : Ajouter le domaine dans `next.config.js` :
```javascript
images: {
  domains: ['images.unsplash.com', 'autre-domaine.com'],
}
```

### Output directory error

**Problème** : Erreur sur l'output directory

**Solution** : Dans `next.config.js`, vérifier :
```javascript
output: 'export' // Pour export statique
// OU
// Supprimer cette ligne pour un déploiement SSR
```

### Build timeout

**Problème** : Build qui prend trop de temps

**Solution** : 
- Optimiser les images (utiliser WebP)
- Réduire les dépendances inutiles
- Augmenter le timeout dans Vercel settings (Pro plan)

## 📱 URLs de production

Après déploiement, votre site sera accessible via :

### URL principale
```
https://la-foret-connectee.vercel.app
```

### Pages dynamiques (QR codes)
```
https://la-foret-connectee.vercel.app/tree/T-001
https://la-foret-connectee.vercel.app/tree/T-002
https://la-foret-connectee.vercel.app/tree/T-003
```

## ✅ Checklist de déploiement

- [ ] Repository GitHub créé et pushé
- [ ] Projet importé dans Vercel
- [ ] Premier déploiement réussi
- [ ] Tester toutes les pages (/, /tree/T-001, /tree/T-002, /tree/T-003)
- [ ] Vérifier la responsivité (mobile/tablette/desktop)
- [ ] Tester les QR codes
- [ ] Vérifier les animations
- [ ] Lighthouse score >= 90
- [ ] Configurer un domaine personnalisé (optionnel)
- [ ] Activer Vercel Analytics

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## 🆘 Support

En cas de problème :
1. Consulter les [logs de build](https://vercel.com/dashboard) sur Vercel
2. Vérifier la [documentation Vercel](https://vercel.com/docs)
3. Contacter le support Vercel (chat en direct)

---

**Bon déploiement ! 🚀**

