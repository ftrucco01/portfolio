"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { createPortal } from "react-dom";
import { menuItems } from "@/data/menu";

export default function MenuTwo() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const copyToClipboard = () => {
    const pgpKeyText = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG v1.58

mQENBGbecSsBCACgTsBQv2HSvg5mHw61KmDvsWEPoGgQ58Fw+Or7J56ui8AI5IMc
Q065EVvi9GVLYAdWT5X6E3OnVm0l/uMOCoc5/YswZc7ZuSEJfmcxkQBAigjbz1NA
YMECRvfP/8r9PGcs/r/0lYPPNu4fcWxxSvWAJqcEdqIcjSORHX6nfngp5ZX1Nlzx
Hs1hUm+WoLd5UMLm+ePYpakoLeK0OfysOkVRoPvXOoogtcOiZHKzmfgL2ACibdZ5
TpkCr8cqx7TgERMo62HNmXsPG43Z0MQZcTVgGMyMv3GGsVOldhB8nYyNXKS43IM1
LC/l2IB92BBvnfuuJvHw8b5adbxvLtIp6L6vABEBAAG0BkxhbWJlcokBHAQQAQIA
BgUCZt5xKwAKCRDoczTn4lLm3gXDB/4pUpjN4Ye5WHx8KQ15/m8ICcWWMKWUFuWR
ypaPQhADzvgVwFUNFr4ZFIYL0Jo6HpLqqvNiTNpoPJzwdHISY8UZwLoX47lZ7awT
xEzadGTQd7b0Neo8ChSG8Lr6e7Y2NAOfgvKeyPFVz+UasruNVs6gTAqLoLS356sI
JBQiUFrR6HEb+l+BGAE5Dl+npBtCCVBG/qO9OIYQKPRytzLvj5bMKkg591eZnwn9
liOqXAtHm5C3cTXltUwdOwc00xfKJ21Tnp7igb0iQPRZCShJ60gOG0vWEBZQfU/y
ZwwmayiQ9Qmqt6nkWXiOSr9AIMCugcI7XpetjmDBr2+cTmzpRzoE
=hd4d
-----END PGP PUBLIC KEY BLOCK-----`;
    navigator.clipboard.writeText(pgpKeyText);
    alert("PGP Key copied to clipboard!");
  };

  return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="bostami-main-menu-wrap">
        <nav className="bastami-main-menu main_menu">
          <ul>
            {menuItems.map((elm, i) => (
              <li className={`${pathname == elm.href && "active"}  `} key={i}>
                {elm.href ? (
                  <Link href={elm.href}>
                    <span>
                      <i style={{ fontSize: "25px" }} className={elm.icon}></i>
                    </span>
                    {elm.text}
                  </Link>
                ) : (
                  <button
                    onClick={openModal}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      <i style={{ fontSize: "25px" }} className={elm.icon}></i>
                    </span>
                    {elm.text}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isModalOpen &&
        createPortal(
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h3 style={{ marginBottom: "15px", textAlign: "center", fontSize: "18px", color: "#c7c5c5" }}>
                PGP Key
              </h3>

              <pre className="pgp-key">
                {`-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG v1.58

mQENBGbecSsBCACgTsBQv2HSvg5mHw61KmDvsWEPoGgQ58Fw+Or7J56ui8AI5IMc
Q065EVvi9GVLYAdWT5X6E3OnVm0l/uMOCoc5/YswZc7ZuSEJfmcxkQBAigjbz1NA
YMECRvfP/8r9PGcs/r/0lYPPNu4fcWxxSvWAJqcEdqIcjSORHX6nfngp5ZX1Nlzx
Hs1hUm+WoLd5UMLm+ePYpakoLeK0OfysOkVRoPvXOoogtcOiZHKzmfgL2ACibdZ5
TpkCr8cqx7TgERMo62HNmXsPG43Z0MQZcTVgGMyMv3GGsVOldhB8nYyNXKS43IM1
LC/l2IB92BBvnfuuJvHw8b5adbxvLtIp6L6vABEBAAG0BkxhbWJlcokBHAQQAQIA
BgUCZt5xKwAKCRDoczTn4lLm3gXDB/4pUpjN4Ye5WHx8KQ15/m8ICcWWMKWUFuWR
ypaPQhADzvgVwFUNFr4ZFIYL0Jo6HpLqqvNiTNpoPJzwdHISY8UZwLoX47lZ7awT
xEzadGTQd7b0Neo8ChSG8Lr6e7Y2NAOfgvKeyPFVz+UasruNVs6gTAqLoLS356sI
JBQiUFrR6HEb+l+BGAE5Dl+npBtCCVBG/qO9OIYQKPRytzLvj5bMKkg591eZnwn9
liOqXAtHm5C3cTXltUwdOwc00xfKJ21Tnp7igb0iQPRZCShJ60gOG0vWEBZQfU/y
ZwwmayiQ9Qmqt6nkWXiOSr9AIMCugcI7XpetjmDBr2+cTmzpRzoE
=hd4d
-----END PGP PUBLIC KEY BLOCK-----`}
              </pre>
              <button className="copy-button" onClick={copyToClipboard}>
                Copy PGP Key
              </button>
            </div>
          </div>,
          document.body
        )}

      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
        }
        .modal-content {
          background-color: #1f1f1f;
          padding: 15px;
          border: 1px solid #888;
          width: 70%;
          max-width: 450px;
          max-height: 80%;
          border-radius: 8px;
          position: relative;
          color: #fff;
          overflow-y: auto;
        }
        .close {
          color: #fff;
          float: right;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
        }
        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }
        .pgp-key {
          background-color: #333;
          padding: 10px;
          border-radius: 4px;
          white-space: pre-wrap;
          overflow-x: auto;
          font-family: monospace;
          color: #fff;
          font-size: 14px; 
          line-height: 1.4;
        }
        .copy-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          margin-top: 10px;
        }
        .copy-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
