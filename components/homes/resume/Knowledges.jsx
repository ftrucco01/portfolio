'use client';
import { knoledges } from "@/data/knoledges";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Knowledges() {
  const { translations } = useLanguage();

  return (
    <div className="col-xl-6 col-lg-5">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">{translations.KNOWLEDGES}</h4>
      </div>

      <div className="knowledeges-item-wrap">
        {knoledges.map((elm, i) => (
          <span key={i} className="gk-item">
            <span>{translations[elm] || elm}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
