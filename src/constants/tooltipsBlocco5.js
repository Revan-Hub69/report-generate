// /constants/tooltips/blocco5.js

export const tooltipsBlocco5 = {
  performanceYtd: {
    title: "Performance YTD (%)",
    description: "Rendimento da inizio anno fino alla data corrente, utile per valutare l’andamento recente dell’asset."
  },
  performance1m: {
    title: "Performance 1M (%)",
    description: "Rendimento nell’ultimo mese. Rilevante per il monitoraggio a breve termine."
  },
  performance6m: {
    title: "Performance 6M (%)",
    description: "Rendimento degli ultimi sei mesi. Aiuta a identificare trend intermedi."
  },
  performance12m: {
    title: "Performance 12M (%)",
    description: "Rendimento a un anno. Offre un quadro più completo del comportamento dell’asset."
  },
  performance3y: {
    title: "Performance 3 anni (%)",
    description: "Rendimento medio annualizzato su base triennale. Include eventuali cicli di mercato."
  },
  drawdown1y: {
    title: "Drawdown massimo 1 anno (%)",
    description: "La peggior perdita massima registrata in un anno rispetto ai massimi precedenti."
  },
  drawdown3y: {
    title: "Drawdown massimo 3 anni (%)",
    description: "La peggior perdita massima registrata negli ultimi 3 anni. Metrica obbligatoria per la valutazione del rischio storico."
  },
  volatility30d: {
    title: "Volatilità 30 giorni (ann.) (%)",
    description: "Volatilità annualizzata calcolata sui movimenti giornalieri degli ultimi 30 giorni. Misura la variabilità dei rendimenti."
  },
  beta1y: {
    title: "Beta 1 anno vs benchmark",
    description: "Sensibilità dell’asset rispetto ai movimenti del benchmark. Un beta > 1 indica maggiore volatilità relativa."
  },
  alpha1y: {
    title: "Alpha 1 anno vs benchmark",
    description: "Rendimento extra dell’asset rispetto a quanto previsto dal rischio sistematico. Obbligatorio per confronto attivo."
  },
  trackingError1y: {
    title: "Tracking Error 1 anno (%)",
    description: "Deviazione standard della differenza tra i rendimenti dell’asset e del benchmark. Misura la coerenza dell’asset rispetto al benchmark."
  },
  informationRatio1y: {
    title: "Information Ratio 1 anno",
    description: "Alpha diviso per il Tracking Error. Indica l’efficienza del rendimento extra rispetto al rischio assunto."
  },
  sharpeRatio1y: {
    title: "Sharpe Ratio (1 anno)",
    description: "Rendimento medio dell’asset al netto del tasso risk-free, diviso per la sua deviazione standard. Misura il rendimento corretto per il rischio."
  },
  sortinoRatio1y: {
    title: "Sortino Ratio (1 anno)",
    description: "Come lo Sharpe, ma penalizza solo la volatilità negativa. Più adatto per misurare rischio asimmetrico."
  },
  var95: {
    title: "VaR 95% (1d)",
    description: "Valore a Rischio con confidenza 95% su un giorno. Indica la perdita massima attesa in condizioni normali."
  },
  riskLevel: {
    title: "Risk Level – Tradelia AI",
    description: "Classificazione sintetica (Basso, Medio, Alto, Estremo) basata su analisi combinata di volatilità, drawdown, ratio e VaR. Metodo visibile nel commento tecnico."
  }
};
