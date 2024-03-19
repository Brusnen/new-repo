import { useState } from "react";
import "./footer.css";
import Popup from "../popup/Popup";
import StartButton from "../../elements/start-button/StartButton";

import email from "../../static/images/email.png";
import whatsapp from "../../static/images/whatsapp.png";
import address from "../../static/images/40.png";
import insta from "../../static/images/insta.png";
import tiktok from "../../static/images/tiktok.png";
import youtube from "../../static/images/youtube.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleChangePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section>
        <footer id="footer" className="footer">
          <div className="gradient-top"></div>
          <div className="container">
            <div className="footer-content">
              <div className="footer-top">
                <h2 className="footer-title subtitle desk-block">
                  {t("Start with us")}
                </h2>
                <div className="main-btn desk-block">
                  <StartButton handleClick={handleChangePopup} />
                </div>
                <div className="footer-top__block">
                  <h2 className="footer-title subtitle">
                    {t("Start with us")}
                  </h2>
                  <div className="main-btn">
                    <StartButton handleClick={handleChangePopup} />
                  </div>
                </div>
                <div className="footer-info">
                  <h4 className="footer-info__name">{t("Coordinates")}</h4>
                  <ul className="footer-info__list">
                    <li>
                      <a
                        href="mailto:sales@gimini.kz"
                        target="_blank"
                        className="info-link-icon"
                      >
                        <img src={email} alt="icon" />
                      </a>
                      <a
                        href="mailto:sales@gimini.kz"
                        className="footer-info-link"
                        target="_blank"
                      >
                        sales@gimini.kz
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://wa.me/77775374477"
                        target="_blank"
                        className="info-link-icon"
                      >
                        <img src={whatsapp} alt="icon" />
                      </a>
                      <a
                        href="http://wa.me/77775374477"
                        target="_blank"
                        className="footer-info-link"
                      >
                        +7 777 537 44 77
                      </a>
                    </li>
                    <li>
                      <div className="info-link-icon">
                        <img src={address} alt="icon" />
                      </div>
                      <p className="footer-info-link">
                        {t("Almaty city, TRC Forum")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-body">
                <ul className="footer-list">
                  <li>
                    <a
                      href="#first-page"
                      className="footer-link link-for__header"
                    >
                      {t("Home page")}
                    </a>
                  </li>
                  <li className="footer__circle"></li>

                  <li>
                    <a
                      href="#space-services"
                      className="footer-link link-for__header"
                    >
                      {t("Space services")}
                    </a>
                  </li>

                  <li className="footer__circle"></li>
                  <li>
                    <a href="/creative/" className="footer-link">
                      {t("Cases")}
                    </a>
                  </li>
                  <li className="footer__circle"></li>
                  <li>
                    <a href="#footer" className="footer-link link-for__header">
                      {t("Coordinates")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-bottom">
                <ul className="footer-text__list">
                  <li>&#9400; 2024 | {t("All rights reserved")}</li>
                  <li>{t("User agreement")}</li>
                </ul>
                <div className="social-block">
                  <p className="social-text">OUR SOCIAL</p>
                  <ul className="footer-social__list">
                    <li>
                      <a
                        href="https://www.instagram.com/gimini.digital?igsh=ODA1NTc5OTg5Nw=="
                        target="_blank"
                        className="social-icon"
                      >
                        <img src={insta} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/shorts/0qUgjN1apvY?si=rndBMV0ZIFcB2ARW"
                        className="social-icon"
                        target="_blank"
                      >
                        <img src={youtube} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@gimini.x?_t=8jPLpwfKYdR&_r=1"
                        className="social-icon"
                        target="_blank"
                      >
                        <img src={tiktok} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <Popup isOpen={isOpen} handleChangePopup={handleChangePopup} />
    </>
  );
};

export default Footer;
