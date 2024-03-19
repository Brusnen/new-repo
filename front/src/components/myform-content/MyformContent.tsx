import { useTranslation } from "react-i18next";
import SubscribeForm from "../../elements/subscribe-form/SubscribeForm";
import "./myform-content.css";

const MyformContent = () => {
  const {t} = useTranslation();
  return (
    <section className="myform-content">
      <div className="gradient-top" style={{ background: "linear-gradient(to top, #221462, transparent)"}}></div>
      <div className="container">
        <div className="myform-section">
          <div className="myform-flex">
            <div className="myform-info">
              <h2 className="myform-title">{t("Start with us")}</h2>
              <p className="myform-text">{t("Our crew is on board")}</p>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="gradient-bottom" style={{ background: "linear-gradient(to top, transparent, #221462"}}></div>
    </section>
  );
};

export default MyformContent;
