/* ==== ITET MODULE DATA - BEREINIGT ==== */
/* Alle Moduldaten für den ITET Studiengang - ohne hart kodierte Praktika */

window.StudiengangModules = [
  // #region 1. Semester
  // Nach Hauptbereichen geordnet: Physik | Elektrotechnik | Informationstechnologie | Mathematik
  // HINWEIS: Farb-Zuordnungen (Themenbereiche & Prüfungsblöcke) befinden sich in color-config.js

  // Physik
  {
    // PFLICHTFELDER
    name: "Technische Mechanik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-a",
    thirdcategory: "physik",
    fourthcategory: "theoretisch",
    // KONTEXT
    year: 1,
    semester: 1,
  },

  // Elektrotechnik
  {
    // PFLICHTFELDER
    name: "Netzwerke und Schaltungen I",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-a",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Grundlagen der Elektrotechnik und Digitaltechnik",
        semester: "2. Sem HS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 1,
  },

  // Informationstechnologie
  {
    // PFLICHTFELDER
    name: "Digitaltechnik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-a",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Information & Codierung",
        semester: "1. Sem HS",
      },
      {
        name: "Grundlagen der Elektrotechnik und Digitaltechnik",
        semester: "2. Sem HS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Digitaltechnik Praktikum",
    ects: 1,
    standardcategory: "Obligatorische Praktikum",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 1,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Vorkurs Informatik",
    ects: 1,
    standardcategory: "Obligatorische Praktikum",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 1,
    semester: 1,
  },

  // Mathematik
  {
    // PFLICHTFELDER
    name: "Analysis 1",
    ects: 8,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    zhawModules: [
      {
        name: "Analysis 1",
        semester: "1. Sem HS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Lineare Algebra",
    ects: 5,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-a",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    zhawModules: [
      {
        name: "Lineare Algebra",
        semester: "1. Sem FS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 1,
  },

  // #endregion 1. Semester

  // #region 2. Semester
  // Nach Hauptbereichen geordnet: Physik | Elektrotechnik | Informationstechnologie | Mathematik

  // Physik
  {
    // PFLICHTFELDER
    name: "Physik I",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "physik",
    fourthcategory: "theoretisch",
    // KONTEXT
    year: 1,
    semester: 2,
  },

  // Elektrotechnik
  {
    // PFLICHTFELDER
    name: "Netzwerke und Schaltungen II",
    ects: 8,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 1,
    semester: 2,
  },
  {
    // PFLICHTFELDER
    name: "Netzwerke und Schaltungen Praktikum",
    ects: 1,
    standardcategory: "Obligatorische Praktikum",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 1,
    semester: 2,
  },

  // Informationstechnologie
  {
    // PFLICHTFELDER
    name: "Informatik I",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Programmieren 1",
        semester: "1. Sem HS",
      },
      {
        name: "Software-Projekt 1",
        semester: "1. Sem HS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 2,
  },

  // Mathematik
  {
    // PFLICHTFELDER
    name: "Analysis 2",
    ects: 8,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    zhawModules: [
      {
        name: "Analysis 2",
        semester: "1. Sem FS",
      },
    ],
    // KONTEXT
    year: 1,
    semester: 2,
  },
  {
    // PFLICHTFELDER
    name: "Mathematische Methoden",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "basisprufungsblock-b",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    // KONTEXT
    year: 1,
    semester: 2,
  },

  // #endregion 2. Semester

  // #region 3. Semester
  // Nach Hauptbereichen geordnet: Physik | Elektrotechnik | Informationstechnologie | Mathematik

  // Physik
  {
    // PFLICHTFELDER
    name: "Physik II",
    ects: 8,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-1",
    thirdcategory: "physik",
    fourthcategory: "theoretisch",
    // KONTEXT
    year: 2,
    semester: 1,
  },

  // Elektrotechnik
  {
    // PFLICHTFELDER
    name: "Signal- und Systemtheorie I",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-1",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Halbleiter-Schaltungstechnik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-2",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Halbleiter-Schaltungstechnik Praktikum",
    ects: 1,
    standardcategory: "Obligatorische Praktikum",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 1,
  },

  // Informationstechnologie
  {
    // PFLICHTFELDER
    name: "Informatik II",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-1",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Programmieren 2",
        semester: "1. Sem FS",
      },
      {
        name: "Software-Projekt 2",
        semester: "1. Sem FS",
      },
      {
        name: "Algorithmen & Datenstrukturen",
        semester: "2. Sem HS",
      },
    ],
    // KONTEXT
    year: 2,
    semester: 1,
  },

  // Mathematik
  {
    // PFLICHTFELDER
    name: "Analysis 3",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-1",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    // KONTEXT
    year: 2,
    semester: 1,
  },
  {
    // PFLICHTFELDER
    name: "Diskrete Mathematik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-2",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    zhawModules: [
      {
        name: "Diskrete Mathematik",
        semester: "1. Sem HS",
      },
    ],
    // KONTEXT
    year: 2,
    semester: 1,
  },

  // #endregion 3. Semester

  // #region 4. Semester
  // Nach Hauptbereichen geordnet: Physik | Elektrotechnik | Informationstechnologie | Mathematik

  // Physik
  {
    // PFLICHTFELDER
    name: "Elektromagnetische Felder und Wellen",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-3",
    thirdcategory: "physik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 2,
  },

  // Elektrotechnik
  {
    // PFLICHTFELDER
    name: "Signal- und Systemtheorie II",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-2",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 2,
  },
  {
    // PFLICHTFELDER
    name: "Halbleiterelemente",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-3",
    thirdcategory: "elektrotechnik",
    fourthcategory: "praktisch",
    // KONTEXT
    year: 2,
    semester: 2,
  },

  // Informationstechnologie
  {
    // PFLICHTFELDER
    name: "Technische Informatik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-2",
    thirdcategory: "it",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Systemnahe Programmierung",
        semester: "2. Sem FS",
      },
      {
        name: "Computertechnik 1",
        semester: "3. Sem HS",
      },
      {
        name: "Computertechnik 2",
        semester: "3. Sem FS",
      },
      {
        name: "Betriebssysteme",
        semester: "3. Sem FS, Grundlagen-Anteil",
      },
    ],
    // KONTEXT
    year: 2,
    semester: 2,
  },

  // Mathematik
  {
    // PFLICHTFELDER
    name: "Numerische Methoden",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-3",
    thirdcategory: "mathematik",
    fourthcategory: "praktisch",
    zhawModules: [
      {
        name: "Höhere Mathematik für Informatiker 1",
        semester: "2. Sem HS",
      },
      {
        name: "Höhere Mathematik für Informatiker 2",
        semester: "2. Sem FS",
      },
      {
        name: "Physik Engines",
        semester: "ohne feste Semesterzuordnung",
      },
    ],
    // KONTEXT
    year: 2,
    semester: 2,
  },
  {
    // PFLICHTFELDER
    name: "Wahrscheinlichkeitstheorie und Statistik",
    ects: 4,
    standardcategory: "Obligatorische Fächer",
    secondcategory: "prufungsblock-3",
    thirdcategory: "mathematik",
    fourthcategory: "theoretisch",
    zhawModules: [
      {
        name: "Stochastik und Statistik",
        semester: "2. Sem HS",
      },
    ],
    // KONTEXT
    year: 2,
    semester: 2,
  },

  // #endregion 4. Semester
];
