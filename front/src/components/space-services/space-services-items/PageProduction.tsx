import { useTranslation } from "react-i18next";

const PageProduction = () => {
    const {t} = useTranslation();
  return (
    <>
      <a href="/production/" className="page-service__link"></a>
      <div className="container">
        <div className="page-content">
          <div className="page-content__info">
            <h2 className="page-content__title">{t("photo, video content")}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageProduction;
