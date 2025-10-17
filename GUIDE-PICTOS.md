# 🎨 Guide d'intégration des Pictos Éveil & Vous

## 📍 Où placer les fichiers

Placez les 3 fichiers images dans ce dossier :
```
Eveil & Vous/
└── images/
    └── pictos/
        ├── Picto-MonExperience.png
        ├── ObjectifsSejourPicto.png
        └── NotrePhilosophiePictos.png
```

## 🎯 Utilisation des pictos

### 1. **Picto-MonExperience.png**
- **Emplacement** : Section "Concept" / "Notre expérience"
- **Position** : Côté droit, en arrière-plan
- **Opacité** : 8% pour effet subtil
- **Animation** : Flottement doux (8 secondes)

### 2. **ObjectifsSejourPicto.png**
- **Emplacement** : Hero (haut de page) + Section Ateliers
- **Position** : Haut droite (hero), bas droite (ateliers)
- **Opacité** : 10-15%
- **Animation** : Flottement doux (6 secondes)

### 3. **NotrePhilosophiePictos.png**
- **Emplacement** : Hero (bas gauche) + Section Ateliers (haut gauche)
- **Position** : Multiple pour équilibrer la page
- **Opacité** : 10-12%
- **Animation** : Flottement doux (6 secondes)

## 🎨 Palette de couleurs extraite

Les couleurs du site sont harmonisées avec les pictos :

| Couleur | Code Hex | Utilisation |
|---------|----------|-------------|
| Rose pastel | `#FFB5C5` | Ateliers Mercredi, Boutons primaires |
| Turquoise pastel | `#B5E8E0` | Ateliers Samedi, Accents |
| Jaune pastel | `#FFE5B5` | Highlights, Call-to-action |
| Violet pastel | `#D5B5E8` | Éléments secondaires |
| Orange pastel | `#FFCCB5` | Détails, icônes |

## 🌈 Bulles décoratives

En plus des pictos, des bulles colorées sont ajoutées pour un effet "joyeux et léger" :
- **Bulles roses** : Haut droite
- **Bulles turquoises** : Gauche milieu
- **Bulles jaunes** : Bas droite
- **Bulles violettes** : Bas gauche

## ✅ Activation

Les fonds décoratifs sont **déjà activés** sur :
- ✅ Page d'accueil (index.html)
- ✅ Section Hero
- ✅ Section Concept
- ✅ Section Ateliers

## 📱 Responsive

Sur mobile (< 768px) :
- Les pictos en arrière-plan sont masqués
- Les bulles sont réduites à 150px
- Optimisation pour la lisibilité

## 🔧 Personnalisation

Pour ajuster l'opacité des pictos, modifiez dans `css/decorative-backgrounds.css` :
```css
opacity: 0.15; /* Valeur entre 0.05 et 0.20 */
```

Pour désactiver l'animation :
```css
/* Commentez ou supprimez */
animation: float 6s ease-in-out infinite;
```

## 📊 Impact visuel

Les pictos apportent :
- ✨ Identité visuelle de la marque renforcée
- 🎨 Cohérence graphique sur tout le site
- 💫 Dynamisme subtil sans surcharger
- 🌈 Rappel des couleurs de la charte graphique
