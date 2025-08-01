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
      margin: 0;
    }
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="text-sm leading-relaxed">
  <header class="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
    <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <div>
        <h1 class="text-lg font-bold text-slate-900">${titoloAsset}</h1>
        <p class="text-xs text-slate-500">${ticker} — Report generato il ${dataReport}</p>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-4 py-6">
    <div class="mb-6">
      <img src="${immagineChart}" alt="Chart ${ticker}" class="w-full rounded-md shadow" />
    </div>

    ${blocchiHtml.join("\n")}

    <section id="cta" class="my-10 space-y-4 text-sm">
      <div class="border-t pt-6">
        <h2 class="text-base font-semibold text-slate-800 mb-2">Broker selezionati Tradelia AI</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><a href="https://www.tradelia.org/Exante.html" class="text-blue-700 underline">Exante</a> – accesso DMA e strumenti istituzionali</li>
          <li><a href="https://www.tradelia.org/Freedom24.html" class="text-blue-700 underline">Freedom24</a> – azioni reali, ETF, T-Bill</li>
          <li><a href="https://www.tradelia.org/AvaTrade.html" class="text-blue-700 underline">AvaOptions</a> – opzioni plain vanilla con margine</li>
          <li><a href="https://www.tradelia.org/Pepperstone.html" class="text-blue-700 underline">Pepperstone</a> – CFD a commissioni basse</li>
          <li><a href="https://www.tradelia.org/NAGA.html" class="text-blue-700 underline">NAGA</a> – copytrading e azioni frazionate</li>
        </ul>
      </div>
    </section>

    <section id="disclaimer" class="text-xs text-slate-600 border-t pt-6 mt-10">
      <p class="mb-2 font-semibold">Disclaimer legale – Tradelia AI</p>
      <p>Le informazioni contenute in questo report sono fornite a solo scopo informativo ed educativo. Tradelia AI non è un intermediario finanziario autorizzato, non fornisce consulenza personalizzata e non garantisce risultati futuri. L’utente è pienamente responsabile delle proprie decisioni d’investimento. Prima di operare si consiglia di consultare un consulente finanziario indipendente.</p>
    </section>
  </main>
</body>
</html>
  `;
}
