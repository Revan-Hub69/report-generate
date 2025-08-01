export const tooltipsBlocco10 = {
  etfFlowsWeekly: {
    title: "Flussi netti ETF settimanali (equity / bond)",
    description: "Indica la raccolta netta in ETF azionari e obbligazionari nell’ultima settimana. Misura il sentiment di breve periodo degli investitori."
  },
  etfFlowsMonthly: {
    title: "Flussi netti ETF mensili",
    description: "Rileva la variazione complessiva dei flussi in ETF sul periodo mensile. Utile per identificare trend macro o settoriali più duraturi."
  },
  aumCoreEtf: {
    title: "AUM ETF core (vs peer)",
    description: "Dimensione in termini di asset under management degli ETF principali su un certo segmento rispetto ai peer. Rilevante per valutare dominanza e rischio di concentrazione."
  },
  sectorRotation: {
    title: "Rotazioni settoriali / tematiche",
    description: "Cambiamenti significativi nei flussi tra settori (es. tecnologia → energia) o tra ETF tematici. Indica rotazioni del posizionamento istituzionale."
  },
  topHolderConcentration: {
    title: "Concentrazione ETF top holder sul titolo",
    description: "Quota aggregata delle azioni detenute dai principali ETF. Una forte concentrazione può amplificare volatilità e rischio meccanico nei rebalance."
  },
  retailVsInstitutionalFlows: {
    title: "Flussi ETF retail vs istituzionali",
    description: "Stima della composizione dei flussi in ETF tra investitori retail e istituzionali. Utile per comprendere chi guida il movimento."
  },
  etfPriceCorrelation: {
    title: "Correlazione tra flussi ETF e prezzo titolo",
    description: "Analizza la relazione statistica tra i flussi negli ETF e il prezzo del titolo. Una correlazione forte può implicare movimenti meccanici."
  },
  shortEtfPositioning: {
    title: "Posizionamento su ETF short / inversi (es. PSQ, SARK)",
    description: "Monitoraggio dei flussi e dell’open interest su ETF short e inversi. Segnala posizionamento difensivo o speculativo ribassista."
  },
  deltaWeightEtf: {
    title: "Δ Peso % del titolo nei principali ETF core (es. QQQ, SPY, XLY)",
    description: "Variazione della ponderazione del titolo all’interno degli ETF principali. Un aumento implica potenziale domanda aggiuntiva, una riduzione può generare vendite."
  },
  mechanicalFlowPressure: {
    title: "Pressione meccanica dei flussi (peso ETF × volumi × direzione)",
    description: "Stima quantitativa della pressione esercitata dai flussi passivi in base al peso del titolo e ai volumi di trading sugli ETF."
  },
  illiquidEtfConcentration: {
    title: "Concentrazione su ETF illiquidi (AUM < 100M)",
    description: "Quota detenuta dal titolo all’interno di ETF poco liquidi. Un eccesso di concentrazione può aumentare la vulnerabilità nei rebalance o in fasi di stress."
  },
  leveragedEtfFlows: {
    title: "Flussi su ETF leveraged / ultra (es. TQQQ, SOXL, SARK)",
    description: "Rileva l’interesse su ETF a leva. Può indicare eccessi speculativi o fasi di rotazione ad alta convinzione del mercato retail."
  }
};
