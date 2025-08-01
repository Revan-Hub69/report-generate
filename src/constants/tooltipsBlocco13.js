export const tooltipsBlocco13 = {
  aggiornamento: {
    title: "Aggiornamento",
    description: "Data e ora in cui è stata generata la sintesi automatica Tradelia AI, calcolata in timezone Europe/Rome. Serve per verificare freschezza e validità operativa."
  },
  biasIntraday: {
    title: "Bias Intraday (1–2 gg)",
    description: "Valutazione AI di direzione e forza attesa nel brevissimo periodo (1–2 giorni). Basata su tecnica MTF, gamma, sentiment e pattern storici simili."
  },
  biasSwing: {
    title: "Bias Swing (2–20 sedute)",
    description: "Sintesi predittiva per operatività multiday. Integra fattori tecnici, flussi, opzioni e macro. Indica tendenza prevalente per operatività da swing trader."
  },
  biasOpzioniOverlay: {
    title: "Bias Opzioni – Overlay",
    description: "Orientamento operativo per strategie opzionali di copertura o rendita (covered call, protective put, spread prudenti). Legato a LT e contesto neutro o laterale."
  },
  biasOpzioniSpeculative: {
    title: "Bias Opzioni – Speculative",
    description: "Indica direzione e struttura preferita per operazioni speculative (long/short put, vertical spread). Include anche tenor ideale e risk premium."
  },
  biasInvestimentoLT: {
    title: "Bias Investimento LT (3–12 mesi)",
    description: "Outlook AI basato su fondamentali, valutazione, contesto macro e sostenibilità. Neutro se manca convergenza multi-blocco positiva."
  },
  biasFutures: {
    title: "Bias Futures / Mini‑Futures",
    description: "Orientamento operativo per strumenti a leva diretta. Include leva consigliata, setup e gestione rischio dinamica (es. su ATR)."
  },
  driverPrevalenti: {
    title: "Driver prevalenti",
    description: "Fattori principali che guidano la decisione AI nel bias operativo. Tipicamente include segnali tecnici, opzioni, news o macro-eventi chiave."
  },
  divergenzeCritiche: {
    title: "Divergenze critiche",
    description: "Disallineamenti rilevanti tra blocchi (es. ETF vs sentiment, timeframe non coerenti). Bloccano segnali operativi forti o generano warning."
  },
  triggerApplicati: {
    title: "Trigger applicati",
    description: "Eventi chiave rilevati dal sistema che attivano segnali o cambiano bias (es. gamma squeeze, earnings, taglio guidance, svolte macro)."
  },
  commentoFinale: {
    title: "Commento Tradelia AI",
    description: "Sintesi multilivello dell’intero report. Descrive coerenza inter-blocchi, bias attivi, opportunità e limiti operativi. È l’output finale di Tradelia AI."
  }
};
