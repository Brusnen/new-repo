import "./out-force.css";

import img69 from "../../static/images/69.png";
import img2 from "../../static/images/2.png";
import img049 from "../../static/images/049.png";
import img050 from "../../static/images/050.png";
import img4 from "../../static/images/4.png";
import { useTranslation } from "react-i18next";

const OutForce = () => {
  const { t } = useTranslation();

  return (
    <section id="our-force" className="steps-content">
      <div className="gradient-top"></div>
      <div className="container">
        <div className="steps-section">
          <div className="steps-body desktop">
            <h2 className="steps-title subtitle">
              {t("What is our strength")}
            </h2>
            <div className="circle-steps">
              <div className="circle-block">
                <img src={img69} alt="circle" />
              </div>
              <div className="circle-block">
                <img src={img2} alt="circle" />
              </div>
              <div className="circle-block active">
                <img src={img049} alt="circle" />
              </div>
              <div className="circle-block">
                <img src={img050} alt="circle" />
              </div>
              <div className="circle-block">
                <img src={img4} alt="circle" />
              </div>
              <div className="circle-line"></div>
            </div>
            <div className="circle-info">
              <p className="circle-text">
                {t("Integrate american technologies")}
              </p>
              <p className="circle-text">
                {t("Implement artificial intelligence")}
              </p>
              <p className="circle-text especially active">
                {t("Save your budget and time with AI")}
              </p>
              <p className="circle-text">
                {t("Build predictive analytics based on ML")}
              </p>
              <p className="circle-text">
                {t("Use author's promotion methods")}
              </p>
            </div>
          </div>
          <div className="steps-body mobile">
            <h2 className="steps-title subtitle">
              {t("What is our strength")}
            </h2>
            <div className="circle-steps">
              <div className="circle-wrapper">
                <div className="circle-block">
                  <img src={img69} alt="circle" />
                </div>
                <p className="circle-text">
                  {t("Integrate american technologies")}
                </p>
              </div>
              <div className="circle-wrapper">
                <div className="circle-block">
                  <img src={img2} alt="circle" />
                </div>
                <p className="circle-text">
                  {t("Implement artificial intelligence")}
                </p>
              </div>
              <div className="circle-wrapper">
                <div className="circle-block active">
                  <img src={img049} alt="circle" />
                </div>
                <p className="circle-text especially active">
                  {t("Save your budget and time with AI")}
                </p>
              </div>
              <div className="circle-wrapper">
                <div className="circle-block">
                  <img src={img050} alt="circle" />
                </div>
                <p className="circle-text">
                  {t("Build predictive analytics based on ML")}
                </p>
              </div>
              <div className="circle-wrapper">
                <div className="circle-block">
                  <img src={img4} alt="circle" />
                </div>
                <p className="circle-text">
                  {t("Use author's promotion methods")}
                </p>
              </div>
              <div className="circle-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-bottom"></div>
    </section>
  );
};

export default OutForce;
