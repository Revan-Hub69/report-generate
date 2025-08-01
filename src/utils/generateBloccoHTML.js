export async function generateBloccoHTML(json, bloccoIndex, label, tooltipMap, statusToClass) {
  const chiavi = Object.keys(json).filter((key) => key !== "commentoFinale");

  const righe = chiavi
    .map((key) => {
      const valore = json[key].valore;
      const stato = json[key].stato;
      const classe = statusToClass[stato] || "text-slate-700 font-bold";
      const labelTooltip = tooltipMap?.[key]?.title || key;

      return `
        <div class="grid grid-cols-2 gap-2 border-b py-2">
          <div class="text-slate-600 font-medium text-xs sm:text-sm">${labelTooltip}</div>
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
