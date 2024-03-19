import { useTranslation } from "react-i18next";
import "./creative-quote.css";

const CreativeQuote = () => {
  const { t } = useTranslation();
  return (
    <section id="creative-quote" className="creative-quote">
      <div className="container">
        <div className="creative-quote__content">
          <p className="creative-quote__text">
            {t("creativeProcessAppreciation")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeQuote;
