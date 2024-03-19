import { useTranslation } from "react-i18next";

const PageWebdesign = () => {
  const {t} = useTranslation();
  return (
    <>
      <a href="/webdesign/" className="page-service__link"></a>
      <div className="container">
        <div className="page-content">
          <div className="page-content__info">
            <h2 className="page-content__title">
              {t("website development and design integration with CRM")}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageWebdesign;
