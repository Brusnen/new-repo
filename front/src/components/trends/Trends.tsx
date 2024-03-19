import "./trends.css"

import rocket from "../../static/images/rocket2.png"
import rode from "../../static/images/road.png" 
import { useTranslation } from "react-i18next";

const Trends = () => {
  const {t} = useTranslation();
  return (
    <section id="trends" className="trend-ahead">
      <div className="gradient-top"></div>
      <div className="container">
        <div className="trend-content">
          <div className="trend-section">
            <h2 className="trend-title subtitle">{t("Our Services")}</h2>
            <div className="trend-race__wrapper">
              <ul className="trend-list__top">
                <li>
                  <a
                    href="/promotion/"
                    className="trend-link trend-link__light-2"
                  >
                    {t("Targeted and contextual advertising")}
                  </a>
                </li>
                <li>
                  <a
                    href="/branding/"
                    className="trend-link trend-link__light-4"
                  >
                    BRANDING & DESIGN
                  </a>
                </li>
                <li>
                  <a
                    href="/analytics/"
                    className="trend-link trend-link__light-6"
                  >
                    {t("Digital & BI Analytics")}
                  </a>
                </li>
              </ul>
              <div className="trend-race">
                <div className="trend-block">
                  <div className="trend-line"></div>
                  <div className="trend-points">
                    <div className="trend-dot fs"></div>
                    <div className="trend-dot"></div>
                    <div className="trend-dot"></div>
                    <div className="trend-dot"></div>
                    <div className="trend-dot"></div>
                    <div className="trend-dot ls"></div>
                  </div>
                  <div className="trend-rocket">
                    <img src={rocket} alt="rocket" />
                  </div>
                </div>
                <div className="trend-background">
                  <img src={rode} alt="bg" />
                </div>
              </div>
              <ul className="trend-list">
                <li className="trend-li">
                  <a href="/smm/" className="trend-link trend-link__light-1">
                   {t("Social Media Management")}
                  </a>
                </li>
                <li className="trend-li">
                  <a
                    href="/production/"
                    className="trend-link trend-link__light-3"
                  >
                    {t("Photo, Video Content, 2D, 3D, VFX")}
                  </a>
                </li>
                <li className="trend-li">
                  <a
                    href="/webdesign/"
                    className="trend-link trend-link__light-5"
                  >
                    {t("Website Development & CRM")}
                  </a>
                </li>
                <li className="trend-li">
                  <a
                    href="/webdesign/"
                    className="trend-link trend-link__light-5"
                  >
                    {t("Outsourced Marketing Department")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-bottom"></div>
    </section>
  );
};

export default Trends;
