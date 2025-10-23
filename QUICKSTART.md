# 🚀 Guide de Démarrage Rapide

## Votre projet est prêt ! 🎉

**La Forêt Connectée** est maintenant **déployé et accessible en ligne** !

---

## 🌐 Accès au Site

### 🔗 URL de Production
Votre site est accessible à cette adresse :

```
https://la-foret-connectee-aar2i1dx1-timhub88s-projects.vercel.app
```

**Testez-le immédiatement !** 👆

### 📱 Pages QR Code (Démo)
Les QR codes génèrent des liens vers ces pages :

1. **Sapin des Vosges** : `/tree/T-001`
2. **Épicéa commun** : `/tree/T-002`
3. **Pin sylvestre** : `/tree/T-003`

---

## 📂 Structure du Projet

```
la-foret-connectee/
├── 📄 README.md              → Documentation complète
├── 📄 VERCEL.md              → Guide de déploiement détaillé
├── 📄 DEPLOYMENT-INFO.md     → Infos du déploiement actuel
├── 📄 QUICKSTART.md          → Ce fichier (démarrage rapide)
│
├── 📁 app/                   → Pages Next.js
│   ├── layout.tsx            → Layout principal
│   ├── page.tsx              → Page d'accueil
│   ├── globals.css           → Styles globaux
│   └── tree/[id]/            → Pages dynamiques des arbres
│
├── 📁 components/            → Composants React
│   ├── Hero.tsx              → Section hero avec parallax
│   ├── Timeline.tsx          → Parcours interactif
│   ├── QRDemo.tsx            → Démo QR codes
│   ├── HowItWorks.tsx        → Explications
│   ├── Impact.tsx            → Statistiques d'impact
│   ├── Gallery.tsx           → Galerie photos
│   ├── Partners.tsx          → Partenaires & contact
│   └── Footer.tsx            → Pied de page
│
├── 📁 data/                  → Données
│   └── trees.json            → Liste des arbres tracés
│
└── 📁 public/                → Assets statiques
    └── images/               → Images (à ajouter)
```

---

## 🛠 Commandes Essentielles

### Développement Local

```bash
# Se placer dans le dossier
cd la-foret-connectee

# Installer les dépendances (si nécessaire)
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### Build & Déploiement

```bash
# Tester le build de production
npm run build

# Redéployer sur Vercel
npx vercel --prod

# Voir les logs du dernier déploiement
npx vercel logs
```

---

## 🎨 Personnalisation Rapide

### 1. Modifier les Couleurs

Fichier : `tailwind.config.ts`

```typescript
colors: {
  sapin: "#0B5A33",   // Vert sapin (primary)
  bois: "#7B4B2F",    // Brun bois
  dore: "#D9B65A",    // Doré
  brume: "#9FB3C8",   // Gris-bleu
  casse: "#F6F5F1",   // Blanc cassé
}
```

### 2. Ajouter des Arbres

Fichier : `data/trees.json`

Dupliquer un objet existant et modifier les valeurs :

```json
{
  "id": "T-004",
  "species": "Votre espèce",
  "origin": "Forêt de ...",
  "date_inventory": "2025-10-23",
  "artisan": "Nom artisan",
  "products": ["Produit 1", "Produit 2"],
  "description": "Description...",
  "coordinates": "48.xxx° N, 6.xxx° E"
}
```

Puis rebuild : `npm run build`

### 3. Remplacer les Images

Les images actuelles sont des placeholders Unsplash.

Pour utiliser vos propres photos :
1. Placer les images dans `public/images/`
2. Mettre à jour les URLs dans les composants
3. Format recommandé : **WebP** (meilleure compression)

---

## 🔗 Connecter à GitHub (Recommandé)

Pour activer le **déploiement automatique** :

### Option 1 : Via Interface GitHub

```bash
# 1. Créer un nouveau repo sur github.com
# Nom suggéré : la-foret-connectee

# 2. Connecter votre projet local
git remote add origin https://github.com/VOTRE-USERNAME/la-foret-connectee.git

# 3. Pousser vers GitHub
git push -u origin main
```

### Option 2 : Via Vercel Dashboard

1. Aller sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Ouvrir le projet "la-foret-connectee"
3. Settings → Git → Connect Repository
4. Suivre les instructions

Une fois connecté, **chaque push sur GitHub déploiera automatiquement** ! 🚀

---

## 📊 Performance & Qualité

### Tester les Performances

Utiliser **Google Lighthouse** :

```
https://pagespeed.web.dev/
```

**Objectifs :**
- ✅ Performance : >= 90
- ✅ Accessibility : >= 95
- ✅ Best Practices : >= 95
- ✅ SEO : >= 90

### Vérifier le Responsive

Tester sur :
- 📱 Mobile (375px)
- 📱 Tablette (768px)
- 💻 Desktop (1280px+)

Chrome DevTools : `F12` → Toggle Device Toolbar

---

## ✨ Fonctionnalités Principales

### ✅ Déjà Implémenté

- [x] Hero avec effet parallax
- [x] Timeline interactive (4 étapes)
- [x] QR codes fonctionnels (3 arbres)
- [x] Animations Framer Motion
- [x] Modal de détails d'arbre
- [x] Section Impact avec statistiques
- [x] Galerie filtrable
- [x] Formulaire de contact
- [x] Responsive mobile/tablette/desktop
- [x] Accessibilité WCAG 2.1 AA
- [x] Export statique (100% frontend)
- [x] Déployé sur Vercel ✅

### 🔮 Améliorations Futures Possibles

- [ ] Ajouter plus d'arbres dans la base de données
- [ ] Remplacer images placeholder par vraies photos
- [ ] Ajouter un domaine personnalisé (foret-connectee.fr)
- [ ] Activer Vercel Analytics
- [ ] Ajouter une carte interactive (Google Maps / OpenStreetMap)
- [ ] Système de recherche d'arbres
- [ ] Export PDF des fiches arbres
- [ ] Intégration avec un CMS (Contentful, Sanity)

---

## 🆘 Dépannage

### Le site ne charge pas

```bash
# Vérifier le statut du build sur Vercel
npx vercel logs

# Ou consulter le dashboard
https://vercel.com/dashboard
```

### Erreur au build local

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Les animations ne fonctionnent pas

Vérifier que Framer Motion est bien installé :
```bash
npm install framer-motion
```

---

## 📞 Support & Documentation

### 📚 Documentation Complète

- **README.md** → Vue d'ensemble et installation détaillée
- **VERCEL.md** → Guide de déploiement complet
- **DEPLOYMENT-INFO.md** → Infos du déploiement actuel

### 🔗 Ressources Externes

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

### 💬 Communauté

- Next.js Discord : https://nextjs.org/discord
- Vercel Discord : https://vercel.com/discord

---

## 🎯 Checklist Finale

Avant de présenter au salon :

- [x] ✅ Site déployé et accessible
- [ ] Tester sur mobile/tablette/desktop
- [ ] Vérifier tous les liens
- [ ] Tester les 3 QR codes
- [ ] Vérifier les animations (scroll, hover)
- [ ] Tester le formulaire de contact
- [ ] Prendre des screenshots pour présentation
- [ ] Préparer des QR codes imprimés (optionnel)
- [ ] Tester la vitesse de chargement
- [ ] Vérifier l'orthographe des textes

---

## 🎊 Félicitations !

Votre site **"La Forêt Connectée"** est maintenant **100% opérationnel** !

### 🌐 Accès Direct

```
https://la-foret-connectee-aar2i1dx1-timhub88s-projects.vercel.app
```

**Partagez ce lien lors de votre présentation au salon ! 🌲**

---

### 🙏 Besoin d'Aide ?

Consulter les fichiers de documentation :
- `README.md` pour la doc complète
- `VERCEL.md` pour le déploiement
- `DEPLOYMENT-INFO.md` pour les infos techniques

**Bon succès avec votre projet ! 🚀🌲**

---

*Développé avec ❤️ pour les Vosges*

