export function generateHtmlPage({
  blocchiHtml,
  tabLabels,
  titoloAsset,
  ticker,
  dataReport,
  immagineChart,
  activeIndex = 0
}) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TRADELIA • AI — Report Azionario</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: #f1f5f9 url('https://www.transparenttextures.com/patterns/cubes.png');
      background-size: 280px;
      color: #0f172a;
      margin: 0; padding: 0;
    }
    ::-webkit-scrollbar { height: 8px; width: 10px; background: #e0e7ef; border-radius: 10px; }
    ::-webkit-scrollbar-thumb { background: #70a7e8; border-radius: 10px; }
    .tabs-scroll {
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color: #70a7e8 #e0e7ef;
      padding: 8px 8px 8px 8px;
      margin-bottom: 12px;
      -webkit-overflow-scrolling: touch;
    }
    .tabs-scroll::-webkit-scrollbar { height: 8px; background-color: #e0e7ef; border-radius: 8px; }
    .tabs-scroll::-webkit-scrollbar-thumb { background-color: #70a7e8; border-radius: 8px; }
    .tab-btn {
      display: inline-block;
      transition: background 0.17s, color 0.13s;
      white-space: nowrap;
      font-size: 0.875rem; /* text-sm */
      min-width: 120px;
      padding: 0.25rem 0.75rem; /* py-1 px-3 */
      border-radius: 0.375rem;
      color: #334155;
      background-color: #fff;
      border: 1px solid #cbd5e1;
      cursor: pointer;
      user-select: none;
    }
    .tab-btn:hover:not(.active) {
      background-color: #f1f5f9;
      color: #0284c7;
    }
    .tab-btn.active {
      background-color: #bfdbfe;
      color: #1d4ed8;
      font-weight: 600;
      border-color: #93c5fd;
    }
    .tab-btn:focus-visible {
      outline: 2px solid #2563eb;
      outline-offset: 2px;
    }
    .card-blocco {
      max-width: 768px;
      margin: 1.5rem auto;
      padding: 1.5rem 2rem;
      background-color: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    .card-blocco:hover {
      background-color: #f9fafb;
      box-shadow: 0 4px 12px rgb(50 120 200 / 0.1);
    }
    .card-blocco h3 {
      font-weight: 600;
      font-size: 1.125rem;
      color: #0f172a;
      margin-bottom: 1rem;
    }
    .card-blocco .flex-col > div:not(:last-child) {
      border-bottom: 1px solid #e2e8f0;
    }
    .tooltip {
      position: relative;
      display: inline-block;
      cursor: pointer;
      color: #2563eb;
      font-weight: 700;
      user-select: none;
    }
    .tooltip .tooltip-text {
      display: none;
      position: absolute;
      left: 50%;
      top: 120%;
      transform: translateX(-50%);
      background: #222e3a;
      color: #fff;
      min-width: 210px;
      max-width: 320px;
      font-size: 13px;
      border-radius: 9px;
      padding: 14px 18px;
      box-shadow: 0 4px 24px rgba(35,70,120,0.15);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.17s ease;
      white-space: normal;
      z-index: 1000;
    }
    .tooltip:hover .tooltip-text,
    .tooltip:focus-within .tooltip-text {
      display: block;
      pointer-events: auto;
      opacity: 1;
    }
    .tooltip span {
      cursor: pointer;
      user-select: none;
      font-weight: 700;
      color: #2563eb;
      background: #dbeafe;
      border-radius: 9999px;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      margin-left: 6px;
    }
    @media (max-width: 700px) {
      .card-blocco {
        padding: 1rem 1.5rem;
      }
    }
  </style>
</head>
<body>
  <header class="sticky top-0 z-50 bg-white shadow-md w-full px-4 sm:px-6 py-2 flex justify-between items-center mb-6 border-b border-slate-200">
    <a href="https://tradelia.org/index.html" class="text-xl sm:text-2xl font-extrabold tracking-tight text-sky-900 hover:opacity-90 transition">
      <span class="text-slate-900">TRADELIA</span><span class="text-blue-600 animate-pulse">•AI</span>
    </a>
    <a href="https://tradelia.org/archivio.html" class="text-sm text-blue-700 font-medium hover:underline">Archivio Storico</a>
  </header>

  <main class="px-2 max-w-4xl mx-auto">
    <section class="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-5 mb-4 bg-white rounded-xl shadow-inner border border-slate-200">
      <div class="flex-1 flex flex-col items-start">
        <div class="text-xs uppercase text-slate-400 tracking-wide mb-1">Asset</div>
        <div class="font-bold text-lg sm:text-2xl text-sky-900 mb-1">${titoloAsset} <span class="font-semibold text-slate-500 ml-1">| ${ticker}</span></div>
        <div class="text-xs text-slate-500">Data report: <span class="font-semibold text-slate-700">${dataReport}</span></div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img src="${immagineChart}" alt="Screenshot ${ticker} Chart" class="max-h-32 rounded-lg shadow border border-slate-200" loading="lazy">
      </div>
    </section>

    <nav class="tabs-scroll w-full flex flex-wrap gap-2 px-2 py-2" role="tablist">
      ${tabLabels.map((label, i) => `
        <button
          class="tab-btn ${i === activeIndex ? 'active' : ''}"
          data-tab="blocco${i + 1}"
          role="tab"
          aria-selected="${i === activeIndex}"
          tabindex="${i === activeIndex ? '0' : '-1'}"
        >
          ${label}
        </button>
      `).join('')}
    </nav>

    ${blocchiHtml.join('\n')}

    <section id="cta" class="my-10 text-sm border-t border-slate-200 pt-6 px-4 sm:px-0 space-y-4">
      <h2 class="text-base font-semibold text-slate-800 mb-4">Broker selezionati Tradelia AI</h2>
      <div class="space-y-4">
        <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition">
          <a href="https://www.tradelia.org/Exante.html" class="text-blue-700 font-semibold underline" target="_blank">Exante</a>
          <p class="text-slate-600 mt-1 text-sm">Piattaforma professionale con accesso DMA, futures, azioni e opzioni globali</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition">
          <a href="https://www.tradelia.org/Freedom24.html" class="text-blue-700 font-semibold underline" target="_blank">Freedom24</a>
          <p class="text-slate-600 mt-1 text-sm">Accesso a IPO, ETF, titoli USA e obbligazioni sovrane a lungo termine</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition">
          <a href="https://www.tradelia.org/AvaTrade.html" class="text-blue-700 font-semibold underline" target="_blank">AvaOptions</a>
          <p class="text-slate-600 mt-1 text-sm">Trading su opzioni plain vanilla con interfaccia grafica professionale</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition">
          <a href="https://www.tradelia.org/Pepperstone.html" class="text-blue-700 font-semibold underline" target="_blank">Pepperstone</a>
          <p class="text-slate-600 mt-1 text-sm">CFD a commissioni competitive azioni</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition">
          <a href="https://www.tradelia.org/NAGA.html" class="text-blue-700 font-semibold underline" target="_blank">NAGA</a>
          <p class="text-slate-600 mt-1 text-sm">Social trading, azioni reali frazionate e copytrading integrato multi-asset</p>
        </div>
      </div>
    </section>

    <section id="disclaimer" class="text-xs text-slate-600 bg-white border border-slate-200 rounded-xl mt-16 mb-12 px-5 py-6 leading-relaxed shadow-inner">
      <h2 class="text-base font-semibold text-slate-800 mb-3">Disclaimer legale – Tradelia AI</h2>
      <p class="mb-3">
        Questo report è generato da Tradelia AI, un sistema automatizzato di analisi finanziaria che non opera come consulente abilitato ai sensi della normativa vigente.
        Le informazioni, i dati e i commenti presenti hanno finalità esclusivamente informative e non costituiscono in alcun modo una sollecitazione al pubblico risparmio né una raccomandazione personalizzata di investimento.
      </p>
      <p class="mb-3">
        Sebbene le fonti utilizzate siano ritenute affidabili, Tradelia AI non garantisce l’accuratezza, la completezza o l’attualità dei contenuti riportati. L’utente resta l’unico responsabile delle proprie decisioni operative e finanziarie.
        Prima di intraprendere qualsiasi operazione, si raccomanda di consultare un consulente finanziario indipendente, abilitato e in possesso dei requisiti previsti dalla legge.
      </p>
      <p class="italic text-slate-500">
        Alcuni broker citati nel presente report possono prevedere affiliazione commerciale. La selezione è effettuata in modo autonomo da Tradelia AI, basandosi su criteri tecnici, operativi e di qualità dei servizi offerti, senza influenze dirette da parte degli intermediari.
      </p>
    </section>
  </main>

  <script>
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll("section[id^='blocco']").forEach((sec) => {
          sec.style.display = sec.id === target ? "block" : "none";
        });
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      const blocchi = document.querySelectorAll("section[id^='blocco']");
      blocchi.forEach((b, i) => {
        b.style.display = i === 0 ? "block" : "none";
      });
      const tabs = document.querySelectorAll(".tab-btn");
      tabs.forEach((t, i) => {
        t.classList.toggle("active", i === 0);
      });
    });
  </script>
</body>
</html>
  `;
}
