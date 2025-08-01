export const tooltipsBlocco8 = {
  vwapDaily: {
    title: "VWAP daily + σ1/σ2",
    description: "Punto medio ponderato per il volume nella sessione daily, con bande ±1σ e ±2σ. Fondamentale per identificare livelli istituzionali di equilibrio."
  },
  vwapWeeklyStack: {
    title: "VWAP weekly (stack)",
    description: "Posizionamento dei VWAP settimanali rispetto al prezzo. Indica contesto di compressione o espansione multi‑settimanale."
  },
  emaTriple: {
    title: "EMA21 / EMA55 / EMA200",
    description: "Medie mobili esponenziali di breve, medio e lungo termine. Utili per riconoscere trend strutturali e supporti dinamici."
  },
  bollingerBands: {
    title: "Bollinger Bands (BBW %ile)",
    description: "Bande di Bollinger e percentuale del BB Width rispetto all’anno. Valuta la compressione o esplosione di volatilità."
  },
  atrPercentile: {
    title: "ATR %ile",
    description: "Percentile dell’Average True Range rispetto al suo storico annuale. Misura lo stato della volatilità assoluta."
  },
  deltaVwap: {
    title: "ΔVWAP % e ΔVWAPσ",
    description: "Variazione percentuale e in deviazioni standard tra VWAP e prezzo. Essenziale per segnali di mean reversion o breakout."
  },
  rvolFastSlow: {
    title: "RVOL Fast (10) e Slow (20)",
    description: "Relative Volume a 10 e 20 periodi. Confronta i volumi recenti con la media storica per misurare partecipazione."
  },
  dryVolume: {
    title: "Dry Volume regime (ON/OFF)",
    description: "Indica presenza di volume estremamente basso. Segnale di inattività istituzionale o pre-movimento."
  },
  volumeProfile: {
    title: "Volume Profile (POC, VAH, VAL, VA Width%, POC shift)",
    description: "Dati chiave del profilo volumetrico: Point of Control, High/Low della Value Area, ampiezza % della VA e shift del POC rispetto alla sessione precedente."
  },
  adx: {
    title: "ADX (trend strength)",
    description: "Average Directional Index. Valuta la forza del trend corrente, indipendentemente dalla direzione."
  },
  rsiMacd: {
    title: "RSI e MACD (divergenze direzionali)",
    description: "Segnali di divergenza tra prezzo e RSI/MACD. Rilevanti per inversioni o indebolimenti di trend."
  },
  obvPvt: {
    title: "OBV / PVT (slope + divergenze)",
    description: "On-Balance Volume e Price-Volume Trend. Indicatori di accumulazione/distribuzione e possibili divergenze nascosti."
  },
  ah1r: {
    title: "AH1R % (Average H1 range)",
    description: "Range medio percentuale orario su base mobile. Indica se il mercato è in fase di espansione o compressione."
  },
  squeezeFlag: {
    title: "Squeeze flag (ON/OFF)",
    description: "Segnale sintetico di compressione di volatilità multi‑indicatore (es. BBW+ATR). ON = pronto per breakout."
  },
  structure: {
    title: "Structure: BOS, CHOCH, FBO",
    description: "Break of Structure, Change of Character e Failed Breakout. Identificano transizioni chiave nella struttura di prezzo."
  },
  deltaPrezzoLivelli: {
    title: "Δ prezzo da POC / VWAP / EMA55 / EMA200",
    description: "Distanza percentuale tra il prezzo attuale e i principali livelli dinamici. Rilevante per ingresso in pullback o breakout."
  },
  openingRange: {
    title: "OR30 / OR60 (solo M15)",
    description: "Opening Range 30 e 60 minuti nella sessione attuale. Utilizzati per breakout intraday e bias direzionale."
  }
};
