export const tooltipsBlocco7 = {
  opzioniDisponibili: {
    title: "Opzioni equity disponibili",
    description: "Presenza di opzioni listate sull’asset (es. Cboe, Nasdaq Options, OCC). Verifica abilitazione al trading su mercati regolamentati."
  },
  numeroScadenze: {
    title: "Numero scadenze listate (weekly, 0DTE)",
    description: "Numero totale di scadenze attive sul titolo. Separare le scadenze settimanali da quelle 0DTE (zero-day-to-expiry)."
  },
  strikePerScadenza: {
    title: "Numero medio strike per scadenza & distanza strike",
    description: "Media e range dei livelli strike disponibili su ±10% rispetto al prezzo spot. Rilevante per strategie verticali."
  },
  distribuzioneOiScadenza: {
    title: "Distribuzione OI per scadenza (Top 5)",
    description: "Open interest aggregato per le 5 scadenze principali. Mostrare contratti e notional."
  },
  distribuzioneOiMoneyness: {
    title: "Distribuzione OI per moneyness (ITM/ATM/OTM ±5% e ±10%)",
    description: "Quota di contratti aperti per fascia di moneyness. Essenziale per comprendere il posizionamento implicito."
  },
  concentrazioneVolumiOi: {
    title: "Concentrazione volumi/OI (% top‑5 strike, % top‑3 expiry)",
    description: "Quota di volumi e open interest concentrata su strike o scadenze specifiche. Indicatori di crowding."
  },
  volumeOpzioni5g: {
    title: "Volume medio opzioni (ultimi 5 giorni)",
    description: "Media dei contratti scambiati negli ultimi 5 giorni. Misura la liquidità attuale sul mercato delle opzioni."
  },
  volumeCallPut: {
    title: "Volume medio Call vs Put",
    description: "Distribuzione media tra opzioni call e put. Può segnalare bias direzionali."
  },
  openInterestTotale: {
    title: "Open Interest totale",
    description: "Contratti in essere su tutte le scadenze e strike. Include call e put."
  },
  deltaOi5g: {
    title: "ΔOI 5 giorni (call/put) e ΔOI by‑expiry (Top 3)",
    description: "Variazione dell’open interest su base 5 giorni, separata per tipo di opzione e scadenze principali."
  },
  volumeOiRatio: {
    title: "Rapporto Volume/OI (5 giorni)",
    description: "Rapporto tra volumi e open interest recente. Un valore alto segnala attività speculativa o rollover."
  },
  notionalRatio: {
    title: "Options‑to‑stock notional ratio (5 giorni)",
    description: "Rapporto tra il notional delle opzioni e quello del titolo sottostante. Indica l’importanza relativa del mercato derivato."
  },
  bidAskAtm30d: {
    title: "Bid‑ask mediano (%) – ATM 30d (open/mid‑day/close)",
    description: "Spread mediano tra bid e ask sulle opzioni ATM con scadenza 30 giorni, in diverse fasce orarie."
  },
  bidAskOtm: {
    title: "Bid‑ask mediano (%) – OTM ±10%",
    description: "Spread medio sulle opzioni OTM con ±10% dal prezzo spot. Rilevante per strategie più direzionali."
  },
  prezzoMedioTrade: {
    title: "Prezzo medio trade e median trade size (weekly vs mensili)",
    description: "Prezzo medio delle transazioni e dimensione mediana, separando opzioni settimanali e mensili."
  },
  strikeIlliquidi: {
    title: "% strike illiquidi (bid=0 o size minima)",
    description: "Quota di strike con assenza di bid o size troppo bassa. Segnale di illiquidità o non operatività."
  },
  ivAtm: {
    title: "IV ATM (7d/30d/60d/90d) + slope",
    description: "Volatilità implicita ATM su diverse scadenze, con pendenza della curva. Rilevante per pricing e skew."
  },
  ivRankPercentile: {
    title: "IV Rank & IV Percentile (1y) e IV Rank (90d)",
    description: "Misura relativa dell’attuale IV rispetto ai valori storici. Utile per timing su strategie vendute o acquistate."
  },
  ivRvSpread: {
    title: "IV–RV spread (30d)",
    description: "Differenza tra volatilità implicita e realizzata su base 30 giorni. Indica il livello di premio implicito."
  },
  skewStandardizzato: {
    title: "Skew standardizzato: RR 25Δ & BF 25Δ (30d)",
    description: "Risk Reversal e Butterfly su 25 Delta. Misura la asimmetria della struttura IV e lo skew direzionale."
  },
  impliedMoveEvento: {
    title: "Implied move su evento (earnings)",
    description: "Movimento atteso implicito in % e USD relativo all’evento prossimo (es. earnings), basato su opzione più vicina."
  },
  putCallRatio: {
    title: "Put/Call Ratio (volume & OI) + media 5 giorni",
    description: "Rapporto tra put e call su volumi e open interest. Media 5 giorni utile per identificare inversioni o estremi."
  },
  gammaExposure: {
    title: "Gamma Exposure (GEX) + gamma‑flip level",
    description: "Esposizione gamma aggregata del mercato e livello di inversione. Impatta su stabilità e squeeze."
  },
  dealerPositioning: {
    title: "Dealer positioning (Vanna, Charm — se disponibili)",
    description: "Posizionamento teorico dei dealer sulla base dei greeks secondari. Impatta sulle dinamiche di copertura."
  },
  greeksAggregati: {
    title: "Greeks aggregati (Delta/Gamma/Vega notional)",
    description: "Somma notional dei principali greeks su tutte le scadenze. Rilevante per rischio implicito e sensitività."
  },
  stressLiquidita: {
    title: "Liquidity stress (% strike con bid=0, size minima, segnale illiquidità)",
    description: "Quota di opzioni con liquidità insufficiente. Alto valore può inibire l’operatività."
  },
  weeklyDisponibili: {
    title: "Opzioni settimanali disponibili (% volume su weekly)",
    description: "Verifica della presenza di weekly su orizzonte di 6 mesi e quota di volumi eseguiti su di esse."
  },
  strategieCompatibili: {
    title: "Strategie compatibili (matrix Tradelia AI)",
    description: "Strategie operative suggerite in base a IV, skew e liquidità. Include stima slippage atteso in bps per configurazioni standard."
  },
  singleStockFutures: {
    title: "Single‑Stock Futures (SSF): presenza e caratteristiche",
    description: "Verifica della disponibilità dei SSF, exchange, ticker, moltiplicatore, margini e scadenze."
  },
  proxyFuturesEtf: {
    title: "Proxy futures / ETF futures: correlazione storica",
    description: "Verifica della correlazione rolling (90/252 giorni) con ES, NQ, QQQ o altri. Utile per copertura e pricing."
  },
  etpLevaShort: {
    title: "ETP leva/short (solo se molto liquidi)",
    description: "ETF/ETN con leva o short strategy ad alta liquidità. Riportare ticker e notional medio."
  },
  derivatiOtc: {
    title: "Derivati OTC (warrant, swap, turbo, ecc.)",
    description: "Strumenti OTC documentati o quotati (es. warrant, knock-out, TRS). Verifica su filing o Bloomberg."
  },
  dividendRisk: {
    title: "Nota dividend/early‑exercise risk",
    description: "Avviso sui rischi di assegnazione anticipata in caso di dividendo imminente. Critico per strategie short call/put."
  }
};
