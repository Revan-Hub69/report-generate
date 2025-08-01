export function generateHtmlPage({
  blocchiHtml,
  tabLabels,
  titoloAsset,
  ticker,
  dataReport,
  immagineChart
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
    ::-webkit-scrollbar { height: 8px; width: 10px; background: #e0e7ef; border-radius: 10px;}
    ::-webkit-scrollbar-thumb { background: #70a7e8; border-radius: 10px;}
    .tabs-scroll {
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color: #70a7e8 #e0e7ef;
      padding: 6px 0 4px 0;
      margin-bottom: 8px;
    }
    .tabs-scroll::-webkit-scrollbar { height: 8px; background-color: #e0e7ef; border-radius: 8px; }
    .tabs-scroll::-webkit-scrollbar-thumb { background-color: #70a7e8; border-radius: 8px; }
    .tab-btn {
      transition: background 0.17s, color 0.13s;
      white-space: nowrap;
      font-size: 13px;
    }
    .tab-btn:hover, .tab-btn.active {
      background: #e0e7ef;
      color: #0369a1;
      font-weight: 600;
    }
    .card-blocco:hover {
      background: #f7fafc;
      box-shadow: 0 2px 16px 0 rgba(50,120,200,0.07);
    }
    .tooltip { position: relative; display: inline-block; cursor: pointer; z-index: 2; }
    .tooltip .tooltip-text {
      display: none;
      position: fixed;
      left: 50%; top: 53vh;
      transform: translate(-50%, -50%);
      background: #222e3a;
      color: #fff;
      min-width: 210px;
      max-width: 340px;
      font-size: 13px;
      border-radius: 9px;
      padding: 14px 18px;
      box-shadow: 0 4px 24px 0 rgba(35,70,120,0.15);
      z-index: 90;
      line-height: 1.55;
      pointer-events: none;
      opacity: 0; transition: opacity 0.17s;
    }
    .tooltip:hover .tooltip-text,
    .tooltip:focus-within .tooltip-text {
      display: block;
      pointer-events: all;
      opacity: 1;
    }
    .tooltip .tooltip-title { font-weight: 700; color: #60a5fa; margin-bottom: 5px; }
    .tooltip .tooltip-fonti { color: #dbeafe; font-size: 12px; margin-top: 10px; }
    @media (max-width: 700px) {
      .tab-btn { min-width: 170px; }
      .card-blocco { padding: 1.1rem 0.7rem; }
      .tooltip .tooltip-text { min-width: 160px; max-width: 90vw; font-size: 13px; padding: 10px 9px; }
    }
    @media (min-width: 640px) {
      .card-blocco { padding: 2.2rem 2.5rem; }
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

    <nav class="w-full flex tabs-scroll space-x-2 px-2 pb-1">
      ${tabLabels.map((label, i) => `
        <button class="tab-btn ${i === 0 ? 'active' : ''} px-4 py-2 rounded-md font-medium text-slate-800 bg-white border border-slate-200"
          data-tab="blocco${i + 1}">${label}</button>
      `).join('')}
    </nav>

    ${blocchiHtml.join("\n")}

  <section id="cta" class="my-10 text-sm">
  <div class="border-t border-slate-200 pt-6 px-4 sm:px-0">
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
          sec.style.display = (sec.id === target) ? 'block' : 'none';
        });
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      const blocchi = document.querySelectorAll("section[id^='blocco']");
      blocchi.forEach((b, i) => {
        b.style.display = (i === 0) ? 'block' : 'none';
      });
    });
  </script>
</body>
</html>
`;
}
