import StartButton from "../../elements/start-button/StartButton";
import "./ancient-content.css";

import icon1 from "../../static/media/f1.png";
import icon2 from "../../static/media/f2.png";
import icon3 from "../../static/media/f3.png";
import icon4 from "../../static/media/f4.png";
import icon5 from "../../static/media/f5.png";
import icon6 from "../../static/media/f6.png";
import Popup from "../popup/Popup";
import { useState } from "react";

type AncientContentPropsType = {
  smm?: boolean;
  promotion?: boolean;
};

const AncientContent = (props: AncientContentPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePopup = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="ancient-content">
      <div className="big-container">
        <div className="ancient-section">
          <div className="ancient-grid">
            {props.smm && (
              <>
                <div className="ancient-box ancient-1__bl">
                  <h3 className="ancient-bl__title">SMM</h3>
                  <div className="ancient-bl__btn">
                    <StartButton handleClick={handleChangePopup}/>
                  </div>
                </div>
                <div className="ancient-box ancient-2__bl">
                  <h3 className="ancient-bl__title">Content Marketing</h3>
                  <div className="ancient-bl__btn">
                    <StartButton handleClick={handleChangePopup}/>
                  </div>
                </div>
                <div className="ancient-box ancient-3__bl">
                  <h3 className="ancient-bl__title">Influence Marketing</h3>
                  <div className="ancient-bl__btn">
                    <StartButton handleClick={handleChangePopup}/>
                  </div>
                </div>
              </>
            )}
            {props.promotion && (
              <>
                <div className="ancient-box ancient-4__bl dark">
                  <ul className="seo-ancient__list">
                    <li className="fs">
                      <div className="seo-ancient-icons">
                        <img src={icon1} alt="" />
                      </div>
                      <p className="seo-ancient-prph">facebook</p>
                    </li>
                    <li>
                      <div className="seo-ancient-icons">
                        <img src={icon2} alt="" />
                      </div>
                      <p className="seo-ancient-prph">instagram</p>
                    </li>
                  </ul>
                  <ul className="seo-ancient__info">
                    <li>Таргетированная реклама</li>
                    <li>Лидогенерация</li>
                  </ul>
                </div>
                <div className="ancient-box ancient-5__bl dark">
                  <ul className="seo-ancient__list">
                    <li className="fs">
                      <div className="seo-ancient-icons">
                        <img src={icon3} alt="" />
                      </div>
                      <p className="seo-ancient-prph">google</p>
                    </li>
                    <li>
                      <div className="seo-ancient-icons">
                        <img src={icon4} alt="" />
                      </div>
                      <p className="seo-ancient-prph">yandex</p>
                    </li>
                  </ul>
                  <ul className="seo-ancient__info">
                    <li>Поисковая реклама</li>
                    <li>Google реклама</li>
                    <li>Контекстно-медийная реклама</li>
                    <li>Баннерная реклама</li>
                    <li>Яндекс реклама</li>
                    <li className="ls">
                      <div className="seo-info-icon">
                        <img src={icon6} alt="" />
                      </div>
                      <p className="seo-info-p">видеореклама</p>
                    </li>
                  </ul>
                </div>
                <div className="ancient-box ancient-6__bl dark">
                  <ul className="seo-ancient__list last">
                    <li>
                      <div className="seo-ancient-icons">
                        <img src={icon5} alt="" />
                      </div>
                      <p className="seo-ancient-prph">TikTok</p>
                    </li>
                  </ul>
                  <ul className="seo-ancient__info">
                    <li>TikTok Ads</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Popup isOpen={isOpen} handleChangePopup={handleChangePopup} />
    </section>
  );
};

export default AncientContent;
