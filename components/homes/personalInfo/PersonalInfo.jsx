'use client';
import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PersonalInfo() {
  const { translations } = useLanguage();
  
  return (
    <div className="col-xxl-3 col-xl-3">
      <div className="bostami-parsonal-info-area">
        <div className="bostami-parsonal-info-wrap">
          <div className="bostami-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={profileInfo.imageSrcOne}
              alt="avatar"
            />
          </div>
          <h4 className="bostami-parsonal-info-name">
            <a href="#">{profileInfo.name}</a>
          </h4>
          <span className="bostami-parsonal-info-bio mb-15">{translations.SOFTWARE_ENGINEER}</span>
          <ul className="bostami-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a 
                  style={{ color: elm.color }} 
                  href={elm.href} 
                  title={elm.tooltip}
                  target="_blank"
                >
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>
          <div className="bostami-parsonal-info-contact mb-30">
            {contactData.map((elm, i) => (
              <div key={i} className="bostami-parsonal-info-contact-item">
                <div style={{ color: elm.color, fontSize: elm.fontSize }} className="icon">
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{translations[elm.text.label] || elm.text.label}</span>
                  <span>{translations[elm.text.value] || elm.text.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bostami-parsonal-info-btn">
            <a className="btn-1" href={translations.CV_LINK} download >
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              {translations.DOWNLOAD_CV}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}