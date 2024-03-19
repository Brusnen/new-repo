import { useTranslation } from 'react-i18next';

const PageAnalytics = () => {
  const {t} = useTranslation();
  return (
    <>
      <a href="/analytics/" className="page-service__link"></a>
      <div className="container">
        <div className="page-content">
          <div className="page-content__info">
            <h2 className="page-content__title">{t("Digital and business analytics")}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAnalytics;
