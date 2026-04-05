# Portfolio-Webseite – Jonathan Eidam

Persönliche Portfolio-Webseite im Rahmen des Moduls **Projekt: Web-Programmierung (DLBUXPWP01)** an der IU Internationalen Hochschule.
Tutor(in): Jurek Breuninger, Oliver Herrmann

---

## Projektbeschreibung

Konzeption und Umsetzung eines responsiven, statischen Webauftritts mit HTML, CSS und JavaScript. Die Webseite präsentiert mein berufliches Profil als Data Analyst mit Schwerpunkt auf Datenvisualisierung, Dashboard-Entwicklung und UX-Design.

---

## Seitenstruktur

- **index.html** – Startseite mit Hero-Bereich, Projektvorschau, Über-mich-Teaser und Fähigkeiten
- **about.html** – Ausführlicher Werdegang, persönliche Interessen und Social Links
- **projects.html** – Übersicht aller Projekte mit Tags und ausgewählte Projekte
- **cv.html** – Lebenslauf mit Timeline, technische Kenntnisse als Tabelle, Skill-Bars und PDF-Download
- **contact.html** – Kontaktformular mit Validierung, Kontaktinformationen und eingebettete Google Maps Karte
- **impressum.html** – Rechtliche Pflichtangaben gemäß § 5 TMG
- **404.html** – Individuelle Fehlerseite bei ungültigen URLs

---

## Eingesetzte Technologien

- **HTML5** – Semantische Struktur mit header, main, nav, section, article, footer, address, table, form, iframe
- **CSS3** – Styling, Layout, Animationen und Responsive Design
- **JavaScript** – Interaktive Navigation und dynamisches Laden von Komponenten
- **jQuery 3.7.1** – Laden von wiederverwendbaren Komponenten (Navigation, Footer)
- **Lucide Icons** – SVG-Icon-Bibliothek für Skill-Cards
- **Git** – Versionskontrolle mit regelmäßigen, beschreibenden Commits
- **Visual Studio Code** – Editor mit Live Preview

---

## CSS-Features

- **CSS-Variablen (Custom Properties)** – Design-System mit konsistenten Farben über :root-Variablen
- **CSS Grid** – Eingesetzt für Hero-Layout, Projektübersicht, CV-Spalten, Skill-Grid, Kontaktseite, Impressum
- **Flexbox** – Eingesetzt für Navigation, Cards, Footer, Buttons, Formulargruppen
- **Media Queries** – Zwei Breakpoints für responsives Design:
  - 48rem (768px) – Tablet
  - 64rem (1024px) – Desktop
- **Dark Mode** – Automatische Farbanpassung über @media (prefers-color-scheme: dark)
- **CSS-Animationen** – @keyframes fadeInUp für Hero-Bereich mit zeitversetztem Einblenden
- **CSS-Transitions** – Hover-Effekte auf Buttons, Links und Cards
- **Smooth Scrolling** – scroll-behavior: smooth auf html
- **Timeline-Design** – CSS-Pseudo-Elemente (::before) für vertikale Linie und Zeitpunkte im Lebenslauf
- **clamp()** – Fluid Typography für die Hero-Überschrift

---

## HTML-Features

- **Semantisches HTML** – Konsequenter Einsatz von section, article, nav, header, main, footer, address
- **Formulare** – Kontaktformular mit required-Attribut und type="email" für Browser-Validierung
- **Tabelle** – Technische Kenntnisse im Lebenslauf als strukturierte Tabelle mit Tag-Badges
- **iFrame** – Google Maps Karte
- **HTML-Kommentare** – Strukturelle Kommentare in allen HTML-Dateien zur Dokumentation
- **Favicon** – Eigenes Logo als Browser-Tab-Icon auf allen Seiten

---

## Barrierefreiheit (WCAG 2.1 / WAI-ARIA)

- **ARIA-Attribute** – aria-label, aria-expanded, aria-controls auf Burger-Menü-Button
- **aria-current** – Dynamische Markierung der aktiven Seite in der Navigation per JavaScript
- **aria-hidden** – Dekorative Elemente (Icons) für Screenreader ausgeblendet
- **Alt-Texte** – Beschreibende alt-Attribute auf allen Bildern
- **Focus-Styles** – Sichtbare outline-Styles auf allen interaktiven Elementen (focus-visible)
- **Semantische Struktur** – Korrekte Überschriftenhierarchie (h1, h2, h3)
- **Label-Zuordnung** – Alle Formularfelder mit label for verknüpft
- **Farbkontraste** – Ausreichende Kontraste zwischen Text- und Hintergrundfarben
- **Touch-Flächen** – Buttons und Links mit ausreichender Größe für mobile Bedienung

---

## JavaScript-Funktionalität

- **Komponentenladung** – Navigation und Footer werden per jQuery.load() aus separaten .component-Dateien geladen
- **Mobile Navigation** – Burger-Menü mit Overlay, Öffnen/Schließen-Toggle und Scroll-Lock
- **Aktive Seite markieren** – Automatische Erkennung der aktuellen Seite und Setzen von aria-current="page"
- **Lucide Icons** – Initialisierung der Icon-Bibliothek mit lucide.createIcons() und Absicherung mit typeof-Check
- **Code-Kommentare** – Alle JavaScript-Funktionen sind kommentiert

---

## Wiederverwendbare Komponenten

- **nav.component** – Navigation mit Logo, Burger-Menü, Overlay und Navigationslinks
- **footer.component** – Footer mit Branding, Seitenlinks und Back-to-top-Link

---

## Responsive Design

Die Webseite ist für Geräte von **360px bis 1920px Breite** optimiert:

- **Mobile (< 48rem)** – Einspaltige Layouts, Burger-Menü, angepasste Bildgrößen
- **Tablet (ab 48rem)** – Mehrspaltige Grids für Projekte, CV-Spalten und Kontaktseite
- **Desktop (ab 64rem)** – Volle Zwei-Spalten-Layouts, horizontale Navigation, 4-spaltige Skill-Grids

---

## Dark Mode

Automatische Erkennung der Systempräferenz über prefers-color-scheme: dark. Alle Farben werden über CSS-Variablen gesteuert, sodass ein einziger Media Query Block ausreicht, um das gesamte Farbschema umzuschalten.

---

## Ordnerstruktur
 
```
/
├── index.html
├── about.html
├── projects.html
├── cv.html
├── contact.html
├── impressum.html
├── 404.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── components/
│   ├── nav.component
│   └── footer.component
├── images/
│   └── (alle Bilder und das Logo)
└── documents/
    └── lebenslauf.pdf
```
 
---
 
## Cross-Browser-Kompatibilität
 
- CSS wurde ohne native Nesting geschrieben, um Kompatibilität mit älteren Browsern (z.B. Safari < 17.2) sicherzustellen
- Getestet in Google Chrome und Safari
 
---
 
## Git-Workflow
 
- Regelmäßige Commits mit beschreibenden Messages
- Commit-Messages auf Englisch nach Conventional-Commits-Konvention (z.B. `feat:`, `fix:`, `refactor:`, `style:`)
- Entwicklung im `main`-Branch