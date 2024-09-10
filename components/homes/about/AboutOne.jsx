"use client";

import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { items } from "@/data/jobFeatures";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutOne() {
  const { translations } = useLanguage();
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">{translations.ABOUT_ME}</h2>
            <p>{translations.ABOUT_ME_TEXT_1}</p>
          </div>
        </div>

        <div className="section-wrapper pl-60 pr-60">
          <div className="bostami-section-title-wrap mb-30">
            <h3 className="section-title">{translations.WHAT_I_DO}</h3>
          </div>

          <div className="bostami-what-do-wrap mb-30">
            <div className="row">
              {items.slice(0, 4).map((elm, i) => (
                <div key={i} className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className={`bostami-what-do-item ${elm.bg} `}>
                    <div className="icon" style={{ margin: "0 auto" }}>
                      <Image
                        height={40}
                        width={130}
                        style={{ margin: "0 auto" }}
                        src={elm.icon}
                        alt="feature"
                      />
                    </div>
                    <div className="text">
                      <h4 className="title">{translations[elm.title]}</h4>
                      <p>{translations[elm.description]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} Francisco Trucco. {translations.FOOTER_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}
