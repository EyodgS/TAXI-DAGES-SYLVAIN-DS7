# TAXI DAGES SYLVAIN — DS7 blanche

Site vitrine statique (HTML/CSS/JS) pour un taxi indépendant à Agen. Contact immédiat par téléphone ou WhatsApp, formulaire de réservation sans backend, galerie avec placeholders locaux.

## Fonctionnalités principales
- Boutons d'appel et WhatsApp toujours visibles (hero + barre flottante).
- Formulaire de réservation complet (nom, prénom, téléphone, type de transport, adresses, date, heure, message) qui préremplit un message via `https://wa.me/`.
- Section Services (Transport local, Longue distance, Transport médical conventionné, Gare/Aéroport).
- Galerie avec images placeholders locales (`/images`) prêtes à être remplacées par vos photos.
- Design mobile-first, texte simple et lisible pour tous les publics.

## Structure du projet
```
.
├─ index.html      # Page principale
├─ styles.css      # Styles globaux (mobile-first)
├─ script.js       # Logique du formulaire -> WhatsApp
├─ images/         # Placeholders à remplacer par vos photos
└─ package.json    # Métadonnées du projet
```

## Utilisation locale
1) Cloner le dépôt puis installer les métadonnées npm (aucune dépendance à ajouter) :
```bash
npm install
```
2) Ouvrir `index.html` dans votre navigateur **ou** servir le dossier avec n'importe quel serveur statique :
```bash
npx serve .
```

## Déploiement GitHub Pages
1) Pousser la branche contenant vos fichiers.
2) Dans GitHub : `Settings` → `Pages`.
3) Source : `Deploy from a branch`, Branch : `main` (ou celle du dépôt) → `/ (root)`.
4) Enregistrer. GitHub Pages publiera le site ; l’URL apparaît dans la section Pages.

## Personnalisation
- Remplacez les images placeholders dans `images/` par vos photos (mêmes noms de fichiers pour éviter de modifier le HTML).
- Le numéro de téléphone/WhatsApp est défini dans `index.html` et `script.js` (format international dans les URLs).
- Les couleurs et polices sont configurées au début de `styles.css`.
