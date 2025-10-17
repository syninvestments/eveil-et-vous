# Éveil & Vous - Site Web

## 🎨 Éléments de la marque à intégrer

### Logo
- **Emplacement prévu** : `images/logo.png`
- **Utilisation** : Header de toutes les pages
- **Format recommandé** : PNG avec fond transparent
- **Taille suggérée** : Hauteur 50-60px

### Pictos de la marque ✨ NOUVEAU
À placer dans le dossier `images/pictos/` :

1. **Picto-MonExperience.png** - Fond section Concept/Expérience
2. **ObjectifsSejourPicto.png** - Fond Hero + Ateliers (haut droite)
3. **NotrePhilosophiePictos.png** - Fond Hero + Ateliers (bas gauche)

👉 Voir **GUIDE-PICTOS.md** pour le détail de l'intégration

Les pictos sont utilisés comme **fonds décoratifs subtils** avec :
- Opacité réduite (8-15%)
- Animation flottante douce
- Positionnement stratégique

## 📋 Structure du site

### Pages principales
- **index.html** : Page d'accueil avec sections séjours et ateliers
- **about.html** : À propos d'Éveil & Vous
- **activites.html** : Détail des activités proposées
- **ateliers.html** : ✨ NOUVEAU - Ateliers hebdomadaires (mercredis et samedis)
- **reservation-atelier.html** : ✨ NOUVEAU - Formulaire de réservation d'ateliers
- **reservation.html** : Réservation des séjours
- **contact.html** : Coordonnées et horaires

### Couleurs de la marque (palette pastel)
```css
--primary-color: #FFB5C5;      /* Rose pastel */
--secondary-color: #B5E8E0;    /* Turquoise pastel */
--accent-color: #FFE5B5;       /* Jaune pastel */
--purple: #D5B5E8;             /* Violet pastel */
--orange: #FFCCB5;             /* Orange pastel */
```

### Police
- **Myriad Pro** pour tous les textes (titres et corps de texte)

## 🆕 Nouvelles fonctionnalités ajoutées

### Section Ateliers
Deux types d'ateliers hebdomadaires :

#### Ateliers du Mercredi (Enfants seuls)
- Horaires : 14h-16h30 (2h30)
- Public : Enfants 4-12 ans
- Formule : Cycle de 6 séances
- Activités : Éveil créatif, sensoriel, yoga, gestion émotions

#### Ateliers du Samedi (Duo parent-enfant)
- Horaires : 10h-12h (2h)
- Public : Duo parent-enfant (4-12 ans)
- Formule : À l'unité ou cycle de 4 séances
- Focus : Lien parent-enfant, rituels, communication bienveillante

### Page de réservation d'ateliers
- Formulaire sans paiement en ligne
- Sélection du type d'atelier et de la formule
- Confirmation par email sous 24h

## 📝 À faire

1. **Intégrer le logo officiel** dans `images/logo.png`
2. **Ajouter les pictos de la marque** dans `images/pictos/`
3. **Remplacer les emojis** par les vrais pictos dans :
   - Section ateliers (index.html)
   - Page ateliers (ateliers.html)
   - Cartes d'activités (activites.html)
4. **Configurer le formulaire de réservation** d'ateliers :
   - Option : Intégrer Fillout, Google Forms, ou Typeform
   - Sans paiement en ligne (confirmation manuelle)
5. **Tester sur mobile** : scroll horizontal des ateliers, navigation

## 🚀 Mise en ligne

Le site est hébergé sur GitHub Pages :
- **Dépôt** : https://github.com/syninvestments/eveil-et-vous
- **URL** : https://syninvestments.github.io/eveil-et-vous/

### Pour mettre à jour le site
```bash
git add .
git commit -m "Description des modifications"
git push
```

## 📞 Contact
Pour toute question : contact@eveil-vous.fr
