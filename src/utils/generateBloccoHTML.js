export async function generateBloccoHTML(json, bloccoIndex, label, tooltipMap, statusToClass) {
  const chiavi = Object.keys(json).filter((key) => key !== "commentoFinale");

  const righe = chiavi
    .map((key) => {
      const voce = json[key] || {};
      const valore = voce.valore || "—";
      const stato = voce.stato || "neutro";
      const classe = statusToClass[stato] || "text-slate-700 font-bold";
      const tooltipKey = voce.tooltipKey || key;
      const labelTooltip = tooltipMap?.[tooltipKey]?.title || voce.etichetta || key;
      const fonte = tooltipMap?.[tooltipKey]?.fonti || "";
      const descrizione = tooltipMap?.[tooltipKey]?.descrizione || "";

      return `
        <div class="grid grid-cols-2 gap-2 border-b py-2 items-center">
          <div class="text-slate-600 font-medium text-xs sm:text-sm flex items-center gap-1">
            ${voce.etichetta || key}
            <span class="tooltip cursor-pointer text-blue-500 font-bold select-none rounded-full w-4 h-4 flex items-center justify-center bg-blue-100 hover:bg-blue-200">
              i
              <div class="tooltip-text">
                ${descrizione ? `<div class='tooltip-title'>${labelTooltip}</div><div>${descrizione}</div>` : labelTooltip}
                ${fonte ? `<div class='tooltip-fonti'>Fonti: ${fonte}</div>` : ""}
              </div>
            </span>
          </div>
          <div class="${classe} text-xs sm:text-sm">${valore}</div>
        </div>`;
    })
    .join("\n");

  return `
    <section id="blocco${bloccoIndex}" class="max-w-4xl mx-auto my-6 px-3 sm:px-6 py-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h3 class="text-base sm:text-lg font-semibold text-slate-800 mb-4">Blocco ${bloccoIndex} – ${label}</h3>
      <div class="flex flex-col divide-y divide-slate-200">
        ${righe}
      </div>
      ${
        json.commentoFinale
          ? `<div class="mt-4 text-slate-700 text-sm"><strong>Commento Tradelia AI:</strong> ${json.commentoFinale}</div>`
          : ""
      }
    </section>
  `;
}
