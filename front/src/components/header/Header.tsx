import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";
import "./header.css";

import headerLogo from "../../static/images/header-logo.png";
import insta from "../../static/images/insta.png";
import tiktok from "../../static/images/tiktok.png";
import youtube from "../../static/images/youtube.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleSetActive = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={isScrolled ? "header header_fixed" : "header"}
    >
      <div className="container" >
        <nav className="menu-nav desktop">
          <ul className="menu-list">
            <li>
              <a href="/" className="menu__link link-for__header">
                {t("Home page")}
              </a>
            </li>
            <li className="menu__circle"></li>
            <li>
              <a href="#space-services" className="menu__link link-for__header">
                {t("Space services")}
              </a>
            </li>
          </ul>
          <a href="/" className="header-logo link-for__header">
            <div className="logo-icon">
              <img src={headerLogo} alt="logo" />
            </div>
            <p className="logo-text">digital</p>
          </a>
          <ul className="menu-list" style={{width: '410px'}}>
            <li>
              <a href="/creative/" className="menu__link link-for__header">
              {t("Cases")}
              </a>
            </li>
            <li className="menu__circle"></li>
            <li>
              <a href="#footer" className="menu__link link-for__header">
              {t("Coordinates")}
              </a>
            </li>
          </ul>
          <div className="language-switch" style={{marginRight: "-20px"}}>
            <button
              className={`lang-button ${language === "ru" ? "active" : ""}`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`lang-button ${language === "kz" ? "active" : ""}`}
              onClick={() => changeLanguage("kz")}
            >
              KZ
            </button>
          </div>
        </nav>
        <div className="menu-nav mobile">
          <a href="/" className="header-logo link-for__header">
            <div className="logo-icon">
              <img src={headerLogo} alt="logo" />
            </div>
            <p className="logo-text">digital</p>
          </a>
          <div
            onClick={handleSetActive}
            className={isActive ? "menu-burger active" : "menu-burger"}
          >
            <div className="line-burger line__1__burger"></div>
            <div className="line-burger line__2__burger"></div>
            <div className="line-burger line__3__burger"></div>
          </div>
          <ul
            id="menu-list"
            className={isActive ? "menu-list active" : "menu-list"}
          >
            <li>
              <a
                href="/"
                className="menu__link link-for__header"
                onClick={() => setIsActive(false)}
              >
                {t("Home page")}
              </a>
            </li>
            <li>
              <a
                href="#space-services"
                className="menu__link link-for__header"
                onClick={() => setIsActive(false)}
              >
                {t("Space services")}
              </a>
            </li>
            <li>
              <a
                href="/creative/"
                className="menu__link link-for__header"
                onClick={() => setIsActive(false)}
              >
                {t("Cases")}
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="menu__link link-for__header"
                onClick={() => setIsActive(false)}
              >
                {t("Coordinates")}
              </a>
            </li>
            <li className="forsocials">
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
                    href="https://www.tiktok.com/@gimini.x?_t=8jPLpwfKYdR&_r=1"
                    className="social-icon"
                    target="_blank"
                  >
                    <img src={tiktok} alt="icon" />
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
              </ul>
            </li>
            <div className="language-switch" style={{margin: "30px 0", width: "70px"}}>
            <button
              className={`lang-button ${language === "ru" ? "active" : ""}`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`lang-button ${language === "kz" ? "active" : ""}`}
              onClick={() => changeLanguage("kz")}
            >
              KZ
            </button>
          </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
