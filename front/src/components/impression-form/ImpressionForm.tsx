import { useTranslation } from "react-i18next";
import SubscribeForm from "../../elements/subscribe-form/SubscribeForm";
import "./impression-form.css";
import "../myform-content/myform-content.css"

const ImpressionForm = () => {
  const { t } = useTranslation();
  return (
    <section id="myform-content" className="myform-content">
      <div className="container">
        <div className="myform-section">
          <div className="creative-flex">
            <div className="myform-info creative">
              <h2 className="myform-title creative">{t("impressed")}</h2>
              <p className="myform-text creative">{t("suggestToDiscuss")}</p>
            </div>
            <div className="myform-forma creative">
                <SubscribeForm />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressionForm;
