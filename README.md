# ATOS AMPLIFY GERMANY – German Consulting

Landingpage für **GER CON (German Consulting)** – die deutsche Consulting-Sparte von Atos Amplify. Die Website präsentiert die Kernbereiche, Leistungen und Ansprechpartner auf einer einseitigen, responsiven Webseite.

---

## Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Technologien](#technologien)
- [Projektstruktur](#projektstruktur)
- [Installation](#installation)
- [Skripte](#skripte)
- [Seitenbereiche](#seitenbereiche)
- [Anpassung der Inhalte](#anpassung-der-inhalte)
- [Lizenz](#lizenz)

---

## Über das Projekt

Die Website dient als zentrale Präsentationsplattform für German Consulting und umfasst:

- **Opener** – Begrüßungsbereich mit Logo, Titel und Kennzahlen
- **Vision** – Unternehmensvision und strategische Ausrichtung
- **Portfolio** – Dreistufige Darstellung der Leistungsbereiche (Business Transformation, AI, Platforms)
- **Abteilungsstruktur** – Darstellung der Bereiche OCM, SIE und BT
- **Kontakt** – Ansprechpartner und Kontaktmöglichkeiten
- **Footer** – Rechtliche und ergänzende Informationen

---

## Technologien

| Technologie | Version | Verwendung                |
| ----------- | ------- | ------------------------- |
| **React**   | 19.x    | UI-Framework              |
| **Vite**    | 7.x     | Build-Tool und Dev-Server |
| **GSAP**    | 3.14    | Animationen (optional)    |
| **ESLint**  | 9.x     | Code-Qualität             |

**Externe Schriftarten:**

- Orbitron (Google Fonts)
- Playfair Display (Google Fonts)
- Material Symbols Outlined (Icons)
- Biennale (projektspezifisch, als Fallback: Helvetica/Arial)

---

## Projektstruktur

```
GERCON/
├── public/                    # Statische Assets
│   └── logo_blue.svg
├── src/
│   ├── App.jsx                # Haupt-App mit Routing der Sektionen
│   ├── App.css
│   ├── main.jsx               # Einstiegspunkt
│   ├── index.css              # Globale Styles (z. B. Font, box-sizing)
│   ├── ressources/            # Logos und Bilder
│   │   ├── Logo_Atos_Amplify_Coul_CMJN_page-0001.jpg
│   │   └── Logo_Atos_Amplify_Reserve_RVB-removebg-preview.png
│   └── components/
│       ├── Opener/            # Startbereich
│       │   ├── Opener.jsx     # Overlay-Menü, Logo
│       │   ├── Opener.css
│       │   ├── Header.jsx     # Logo, Claim
│       │   ├── Header.css
│       │   ├── Main.jsx      # Titel „ATOS AMPLIFY GERMANY“
│       │   ├── Main.css
│       │   ├── Numbers.jsx    # Kennzahlen
│       │   ├── Numbers.css
│       │   ├── Explore.jsx    # Pfeil zum Scrollen
│       │   └── Explore.css
│       ├── Vision/            # Vision-Sektion
│       │   ├── Vision.jsx
│       │   └── Vision.css
│       ├── Portfolio/         # Portfolio mit 3 Hauptkarten
│       │   ├── Portfolio.jsx
│       │   ├── Portfolio.css
│       │   ├── DriveBusinessTransformation.jsx  # Hierarchie der Karten
│       │   └── icons/
│       │       ├── transformation.svg
│       │       ├── ai.svg
│       │       └── platforms.svg
│       ├── Abteilungsstruktur/
│       │   ├── Abteilungsstruktur.jsx
│       │   ├── Abteilungsstruktur.css
│       │   ├── data/
│       │   │   ├── gercon.json   # German Consulting
│       │   │   ├── ocm.json      # OCM-Abteilung
│       │   │   ├── sie.json      # SIE-Abteilung
│       │   │   └── bt.json       # BT-Abteilung
│       │   └── popups/
│       │       ├── DeptPopup.jsx   # Wiederverwendbare Popup-Basis
│       │       ├── DeptPopup.css
│       │       ├── OcmPopup.jsx
│       │       ├── SiePopup.jsx
│       │       └── BtPopup.jsx
│       ├── Kontakt/           # Kontaktkarte
│       │   ├── Kontakt.jsx
│       │   └── Kontakt.css
│       ├── Footer/
│       │   ├── Footer.jsx
│       │   └── Footer.css
│       └── ScrollToTopButton/
│           ├── ScrollToTopButton.jsx
│           └── ScrollToTopButton.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Installation

### Voraussetzungen

- **Node.js** (empfohlen: v18 oder höher)
- **npm** oder **pnpm**

### Ablauf

1. Repository klonen:

   ```bash
   git clone https://github.com/etienneauert/GER_CON_NEW.git
   cd GER_CON_NEW/GERCON
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

3. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

   Die Anwendung läuft anschließend unter `http://localhost:5173` (oder dem angezeigten Port).

---

## Skripte

| Befehl            | Beschreibung                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Startet den Vite-Entwicklungsserver                |
| `npm run build`   | Erstellt einen Produktions-Build                   |
| `npm run preview` | Startet einen lokalen Preview-Server für den Build |
| `npm run lint`    | Führt ESLint aus                                   |

---

## Seitenbereiche

### 1. Opener

- Hero-Bereich mit dem Titel **„ATOS AMPLIFY GERMANY“**
- Logo und Header mit optionalem Claim
- Kennzahlen (Numbers)
- Animierter Pfeil nach unten (Explore)
- Overlay-Menü mit Links zu Vision, Portfolio, Abteilungsstruktur, Kontakt

### 2. Vision

- Kurze Darstellung der Vision und strategischen Ziele
- Blauer Hintergrund, zentrierter Text

### 3. Portfolio

- Drei Hauptkategorien, jeweils mit Icon:
  - **Drive business transformation** (Gelb)
  - **Unlock the value of AI** (Blau)
  - **Maximize the potential of platforms & hyperscalers** (Grau)
- Ausklappbare Unterebenen mit weiteren Leistungen
- Scroll-Animation beim Erscheinen im Viewport
- Responsives Layout; Icons werden auf Mobilgeräten ausgeblendet

### 4. Abteilungsstruktur

- **German Consulting** als übergeordneter Bereich (weißer Hintergrund)
- Drei Bereiche: **OCM**, **SIE**, **BT** (dunkelblauer Hintergrund)
- Jede Karte:
  - Abteilungstitel
  - Trennlinie
  - Beschreibungstext
  - **„Mehr“**-Button zum Öffnen eines detaillierten Popups
- Popup-Inhalte für OCM, SIE und BT in separaten Komponenten

### 5. Kontakt

- Ansprechpartner (z. B. Harry Müller)
- Rolle, Abteilung, E-Mail
- Karte mit Avatar und modernem Layout
- Scroll-Animation beim Erscheinen

### 6. Footer

- Rechtliche Hinweise und Impressum-Links

### 7. Scroll-to-Top-Button

- Fixierter Button unten rechts
- Scrollt beim Klick sanft zum Seitenanfang

---

## Anpassung der Inhalte

### Texte

- **German Consulting / Abteilungen:**  
  Anpassungen in `src/components/Abteilungsstruktur/data/gercon.json`, `ocm.json`, `sie.json`, `bt.json`.

- **Vision:**  
  In `src/components/Vision/Vision.jsx`.

- **Portfolio:**  
  In `src/components/Portfolio/DriveBusinessTransformation.jsx` (Titel, Hierarchie).

- **Kontakt:**  
  In `src/components/Kontakt/Kontakt.jsx`.

### Styling

- **Globale Schriftart:**  
  `src/index.css` – `font-family: "Biennale", Helvetica, Arial, sans-serif`.

- **Farben (Auszug):**
  - Dunkelblau: `hsl(240deg 100% 18%)`
  - Blau (Vision/Opener): `hsl(203deg 92% 39%)`

### Popups (Abteilungsstruktur)

- Grundaufbau: `src/components/Abteilungsstruktur/popups/DeptPopup.jsx`
- Spezifische Inhalte: `OcmPopup.jsx`, `SiePopup.jsx`, `BtPopup.jsx`

---

## Responsives Verhalten

Die Seite ist für verschiedene Bildschirmgrößen optimiert:

- **Desktop:** Volles Layout
- **Tablet (z. B. ~900px):** Vereinfachte Grids, angepasste Font-Größen
- **Mobile (<768px):** Einspaltiges Layout, kleinere Header-Elemente, reduzierte Abstände

---

## Lizenz

Proprietär – Atos Amplify / German Consulting.
