"use client";

import React, { useState } from "react";
import { generateHtmlPage } from "../utils/generateHtmlPage";
import { generateBloccoHTML } from "../utils/generateBloccoHTML";
import { tabLabels } from "../constants/tabLabels";
import { statusToClass } from "../constants/statusToClass";
import { tooltips } from "../constants/tooltipsAll";

export default function HtmlGenerator() {
  const [jsonData, setJsonData] = useState({});
  const [htmlFinale, setHtmlFinale] = useState("");
  const [textareaValues, setTextareaValues] = useState({});

  const handleJsonTextChange = (event, bloccoKey) => {
    const text = event.target.value;
    setTextareaValues((prev) => ({ ...prev, [bloccoKey]: text }));

    try {
      const parsed = JSON.parse(text);
      setJsonData((prev) => ({ ...prev, [bloccoKey]: parsed }));
    } catch (err) {
      // Errore silenziato per evidenziazione visiva
    }
  };

  const generaReport = async () => {
    const blocchiHtml = await Promise.all(
      tabLabels.slice(1).map(async (label, i) => {
        const index = i + 1;
        const key = `blocco${index}`;
        const json = jsonData[key];
        if (!json) return `<section><p>Manca il JSON per ${label}</p></section>`;
        return await generateBloccoHTML(json, index, label, tooltips[key] || {}, statusToClass);
      })
    );

    const html = generateHtmlPage({
      blocchiHtml,
      tabLabels: tabLabels.slice(1),
      titoloAsset: jsonData.blocco0?.titoloAsset || "Titolo Sconosciuto",
      ticker: jsonData.blocco0?.ticker || "N/A",
      dataReport: jsonData.blocco0?.dataReport || "01/08/2025",
      immagineChart: jsonData.blocco0?.immagineChart || "https://via.placeholder.com/400x200"
    });

    setHtmlFinale(html);
  };

  const scaricaHtml = () => {
    const blob = new Blob([htmlFinale], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "report-tradelia.html";
    link.click();
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-xl font-bold text-slate-800 mb-4">Generatore Report Tradelia AI</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {tabLabels.map((label, index) => {
          const key = `blocco${index}`;
          const erroreJson = textareaValues[key]
            ? (() => {
                try {
                  JSON.parse(textareaValues[key]);
                  return false;
                } catch {
                  return true;
                }
              })()
            : false;

          return (
            <div key={key} className="text-sm">
              <label className="block font-medium text-slate-700 mb-1">{label}</label>
              <textarea
                rows={erroreJson ? 10 : 8}
                className={`w-full text-xs border px-2 py-1 rounded-md font-mono ${
                  erroreJson ? "border-red-500 bg-red-50" : "border-slate-300"
                }`}
                placeholder={`Incolla JSON per ${label}`}
                value={textareaValues[key] || ""}
                onChange={(e) => handleJsonTextChange(e, key)}
              />
              {erroreJson && (
                <p className="text-xs text-red-600 mt-1">❌ JSON non valido</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={generaReport}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded shadow"
        >
          Genera HTML completo
        </button>
        {htmlFinale && (
          <button
            onClick={scaricaHtml}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Scarica HTML
          </button>
        )}
      </div>

      {htmlFinale && (
        <textarea
          className="w-full h-[80vh] p-4 font-mono text-xs bg-slate-100 border border-slate-300 rounded-md"
          value={htmlFinale}
          readOnly
        />
      )}
    </div>
  );
}
