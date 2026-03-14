/**
 * MODULE RENDERING - Modul-Darstellung
 */

window.StudienplanModule = {
  escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  renderZhawModules(module) {
    if (!Array.isArray(module.zhawModules) || module.zhawModules.length === 0) {
      return "";
    }

    const items = module.zhawModules
      .map((entry) => {
        const title = this.escapeHtml(entry.name || "Unbenanntes ZHAW-Modul");
        const semester = this.escapeHtml(entry.semester || "Semester offen");
        return `
          <div class="modul-zhaw-item">
            <div class="modul-zhaw-item-name">${title}</div>
            <div class="modul-zhaw-sem">ZHAW: ${semester}</div>
          </div>
        `;
      })
      .join("");

    return `
            <div class="modul-zhaw-block">
                <div class="modul-zhaw-grid">${items}</div>
            </div>
        `;
  },

  // Erstelle HTML für ein einzelnes Modul
  renderModule(module) {
    const ects = module.ects || 0;
    const category = module.standardcategory || "unknown";
    const name = module.name || "Unbekanntes Modul";

    // Berechne Größe basierend auf ECTS (4 ECTS = 120px)
    const baseSize = 120;
    const scale = Math.sqrt(ects / 4);
    const size = baseSize * scale;
    const style = `width: ${size}px; min-height: ${size}px;`;
    const zhawModulesHtml = this.renderZhawModules(module);

    // Platzhalter-Module speziell markieren
    let placeholderClass = "";
    let wahlmodulSourceAttr = "";
    if (module.isPlaceholder && module.wahlmodulSource) {
      placeholderClass = "modul-platzhalter";
      wahlmodulSourceAttr = `data-wahlmodul-source="${module.wahlmodulSource}"`;
    }

    return `
            <div class="modul ${category} ${placeholderClass}" data-ects="${ects}" style="${style}" ${wahlmodulSourceAttr}>
                <div class="modul-titel">${name}</div>
                ${zhawModulesHtml}
                <div class="modul-kp">${ects} KP</div>
            </div>
        `;
  },

  // Erstelle HTML für eine Semester-Liste von Modulen
  renderSemesterModules(modules) {
    return modules.map((module) => this.renderModule(module)).join("");
  },
};

// Markiere als geladen
window.subModulesReady.module = Promise.resolve();
