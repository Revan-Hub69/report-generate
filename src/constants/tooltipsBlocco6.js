export const tooltipsBlocco6 = {
  volumeMedioAzioni: {
    title: "Volume medio giornaliero (3M) – Azioni",
    description: "Numero medio di azioni scambiate al giorno negli ultimi 3 mesi. Indica la liquidità operativa."
  },
  volumeMedioUsd: {
    title: "Volume medio giornaliero (3M) – USD",
    description: "Controvalore medio in dollari delle azioni scambiate. Utile per confronti tra titoli con prezzi diversi."
  },
  distribuzioneIntraday: {
    title: "Distribuzione intraday dei volumi (apertura / mid‑day / chiusura)",
    description: "Quota di volumi scambiata nelle diverse fasi della giornata. Rilevante per il timing degli ordini."
  },
  turnoverFlottante: {
    title: "Turnover del flottante (volumi/float)",
    description: "Quoziente tra volume giornaliero e azioni flottanti. Misura l’attività relativa."
  },
  medianTradeSize: {
    title: "Median trade size",
    description: "Taglia mediana delle transazioni. Valori bassi possono suggerire attività retail o elevata frammentazione."
  },
  quotedSpread: {
    title: "Quoted spread – mediano (bps) + p50/p90, open vs close",
    description: "Differenza media tra bid e ask quotati in basis point, con distribuzione percentilica. Indica la tensione."
  },
  effectiveSpread: {
    title: "Effective spread – mediano (bps) + p50/p90",
    description: "Spread effettivamente pagato sulle transazioni reali. Più realistico del quoted spread."
  },
  tickSizeRelativa: {
    title: "Tick size relativa",
    description: "Dimensione del tick rapportata al prezzo. Influisce su spread e precisione degli ordini."
  },
  slippageStimato: {
    title: "Slippage stimato (100k / 1M USD; Market/VWAP/POV 5%–10%)",
    description: "Perdita stimata in esecuzione su ordini simulati di varie dimensioni e strategie."
  },
  priceImprovement: {
    title: "Price improvement % e odd‑lot % (se disponibili)",
    description: "Quota di ordini eseguiti a prezzi migliori dell’atteso e percentuale di transazioni sotto il lotto minimo."
  },
  marketDepth10: {
    title: "Market depth a 10 livelli per lato (azioni & USD) – media/mediana",
    description: "Liquidità disponibile sui primi 10 livelli di book, sia in azioni sia in USD."
  },
  orderBookImbalance: {
    title: "Order book imbalance (bid vs ask)",
    description: "Differenziale tra volumi in acquisto e vendita. Può indicare pressione direzionale imminente."
  },
  volumiAsta: {
    title: "Volumi in asta di apertura/chiusura (partecipazione, % su totale)",
    description: "Quota di volumi eseguita in asta rispetto al totale. Critico per ETF e operatori istituzionali."
  },
  litVsOffExchange: {
    title: "Ripartizione lit vs off‑exchange (ATS/OTC)",
    description: "Quota di scambi su mercati trasparenti (lit) rispetto a quelli oscuri. Impatta sulla visibilità e price discovery."
  },
  venueRipartizione: {
    title: "Ripartizione per venue principali (XNAS, ARCA, EDGX, BYX, IEX…)",
    description: "Distribuzione dei volumi tra i principali mercati. Può influenzare esecuzione e frammentazione."
  },
  shortInterest: {
    title: "Short interest (% float)",
    description: "Quota del flottante attualmente venduta allo scoperto. Può indicare posizionamento speculativo."
  },
  daysToCover: {
    title: "Days‑to‑cover",
    description: "Numero di giorni necessari per ricoprire le posizioni short con il volume medio. Più è alto, maggiore è il rischio di squeeze."
  },
  borrowFee: {
    title: "Borrow fee (%)",
    description: "Costo annuale per prendere a prestito il titolo. Valori alti indicano difficoltà o scarsità."
  },
  utilization: {
    title: "Utilization (%)",
    description: "Percentuale del prestito disponibile effettivamente utilizzata. Sopra l’80% → condizioni tese."
  },
  failsToDeliver: {
    title: "Fails‑to‑deliver recenti",
    description: "Numero di transazioni non regolate. Può indicare stress di mercato o inefficienze operative."
  },
  opzioniAdv: {
    title: "Opzioni – ADV (contratti/giorno)",
    description: "Volume medio giornaliero di contratti scambiati. Indica liquidità sul mercato delle opzioni."
  },
  opzioniOpenInterest: {
    title: "Opzioni – Open Interest (call/put)",
    description: "Numero totale di contratti in essere. Rilevante per valutare interesse e posizionamento."
  },
  opzioniSpreadMedio: {
    title: "Opzioni – bid‑ask medio (%)",
    description: "Spread medio tra domanda e offerta. Più basso → maggiore eseguibilità."
  },
  opzioniStrikeLiquid: {
    title: "Opzioni – maturità/strike più liquidi",
    description: "Scadenze e strike con maggiore attività. Fondamentali per la costruzione di strategie operative."
  },
  dmaAccess: {
    title: "DMA/Depth access (es. TotalView/Depth, FIX, co‑location)",
    description: "Tipo di accesso al mercato disponibile. Rilevante per operatori istituzionali ad alta frequenza."
  },
  futuresSintetici: {
    title: "Futures / prodotti sintetici – Presenza/assenza e mercato",
    description: "Presenza di derivati alternativi (futures, ETC). Utile per coperture o replica dell’asset."
  },
  turnoverIndiceSettore: {
    title: "% di turnover nell’indice/settore",
    description: "Quota dei volumi del titolo rispetto al totale dell’indice o settore di riferimento."
  },
  pesoInEtf: {
    title: "Peso in ETF core (SPY/QQQ) e flussi ETF ultimi 7 giorni",
    description: "Presenza in ETF principali e flussi recenti. Rilevante per pressioni tecniche e direzionali."
  },
  marketQualityIndex: {
    title: "Market Quality Index – Tradelia AI (0–100; classe)",
    description: "Indice sintetico della qualità di mercato basato su tutte le metriche precedenti. Proprietario Tradelia AI."
  }
};
