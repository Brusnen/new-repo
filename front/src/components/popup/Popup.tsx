import "./popup.css";
import SubscribeForm from "../../elements/subscribe-form/SubscribeForm";

import popupLogo from "../../static/images/popup-logo.png"

type PopupPropsType = {
  handleChangePopup: () => void;
  isOpen: boolean;
};

const Popup = ({ handleChangePopup, isOpen }: PopupPropsType) => {
  const handleClose = () => {
    handleChangePopup();
  };

  return (
    <div className={isOpen ? "popup-field opened" : "popup-field"}>
      <div className="popup-from">
        <div className="popup-from__content">
          <p id="popup-shut" className="popup-shut" onClick={handleClose}>
            &#10005;
          </p>
          <div className="popup-logo__box">
            <div className="popup-logo">
              <img
                src={popupLogo}
                alt="logo"
              />
            </div>
          </div>
          <h6 className="popup-title">Наш экипаж на борту. </h6>
          <p className="popup-info">Заполнить форму</p>
          <SubscribeForm isPopup handleChange={handleClose}/>
          <p className="popup-warning">
            Ваше согласие на обработку персональных данных подтверждается при
            отправке заявки, в соответствии с применимыми нормами о
            конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;