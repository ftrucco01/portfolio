"use client";
import { education } from "@/data/education";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { translations } = useLanguage();

  return (
    <div className="col-xl-6 col-lg-7">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={38}
            height={23}
            src="/assets/img/icon/edu-icon.png"
            alt="icon"
          />
          {translations.EDUCATION}
        </h4>
      </div>

      <div className="bostami-card-wrap">
        {education.map((elm, i) => (
          <div
            key={i}
            className={`bostami-card-item ${elm.bgClass} ${
              i + 1 !== education.length && "mb-20"
            } `}
          >
            <span className="card-subtitle">{translations[elm.session] || elm.session}</span>
            <h6 className="card-title">
              {translations[elm.cardTitle] || elm.cardTitle} <span> {translations[elm.cardSubtitleSecondary] || elm.cardSubtitleSecondary}</span>
            </h6>
            <p className="card-text">{translations[elm.location] || elm.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}