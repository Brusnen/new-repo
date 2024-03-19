import logo1 from "../../../static/media/f2.png"
import logo2 from "../../../static/media/f6.png"
import logo3 from "../../../static/media/f5.png"
import logo4 from "../../../static/media/icons/pinterest.svg"
import { useTranslation } from "react-i18next";

const PageSmm = () => {
  const {t} = useTranslation();
  return (
    <>
      <a href="/smm/" className="page-service__link"></a>
      <div className="container">
        <div className="page-content">
          <div className="page-content__info">
            <h2 className="page-content__title">{t("Social Media Management")}</h2>
            <ul className="page-content__socials">
              <li className="page-content__socials-item">
                <div
                  className="page-content__socials-link"
                >
                  <img src={logo1} alt="logo" />
                </div>
              </li>
              <li className="page-content__socials-item">
                <div
                  className="page-content__socials-link"
                >
                  <img src={logo2} alt="logo" />
                </div>
              </li>
              <li className="page-content__socials-item">
                <div
                  className="page-content__socials-link"
                >
                  <img src={logo3} alt="logo" />
                </div>
              </li>
              <li className="page-content__socials-item">
                <div
                  className="page-content__socials-link"
                >
                  <img
                    src={logo4}
                    alt="logo"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSmm;
