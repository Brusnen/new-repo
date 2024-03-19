import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import MyformContent from "../components/myform-content/MyformContent";
import Cases from "../components/cases/Cases";
import Galaxy from "../components/galaxy/Galaxy";
import Trends from "../components/trends/Trends";

import background from "../static/images/web-bg-laptop.jpg";
import im1 from "../static/images/web-bg-1-laptop.jpg";
import im2 from "../static/images/web-bg-2-laptop.jpg";
import im3 from "../static/images/web-bg-3-laptop.jpg";
import im4 from "../static/images/brand-4.jpg";
import brandCase1 from "../static/media/newcase/brand-case-1.jpg";
import brandCase2 from "../static/media/newcase/brand-case-2.jpg";
import brandCase3 from "../static/media/newcase/brand-case-3.jpg";
import brandCase4 from "../static/media/newcase/brand-case-4.jpg";
import { useTranslation } from "react-i18next";

const WebDesignPage = () => {
  const { t } = useTranslation();

  const webDesignPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: "РАЗРАБОТКА И ДИЗАЙН ВЕБ-САЙТОВ",
      mainText: "От дизайна до интеграции CRM и аналитики",
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: t("modernWebDesignAndDevelopment"),
        mainTextLong: t("fromCorporateWebsites"),
      },
      {
        backgroundImage: im2,
        mainTitle: t("crmAndPaymentIntegration"),
        mainTextLong: t("integratingAutomationSystems"),
      },
      {
        backgroundImage: im3,
        mainTitle: "SEO 4.0",
        mainTextLong: t("improveYourBusiness"),
        mainTextShort: t("withAiMobileOptimization"),
      },
      {
        backgroundImage: im4,
        mainTitle: t("siteAnalytics"),
        mainTextLong: t("implementingAdvancedAnalytics"),
        mainTextShort: t(
          "Это обеспечивает оптимизацию Вашего сайта и маркетинговых стратегий, что приводит к улучшению результатов и ROI"
        ),
      },
    ],
    CaseImages: [
      {
        id: 1,
        imgSrc: brandCase1,
        alt: "case 1",
      },
      {
        id: 2,
        imgSrc: brandCase2,
        alt: "case 2",
      },
      {
        id: 3,
        imgSrc: brandCase3,
        alt: "case 3",
      },
      {
        id: 4,
        imgSrc: brandCase4,
        alt: "case 4",
      },
    ],
  };

  return (
    <div>
      <Header />
      <FirstPage data={webDesignPageData.FirstPage} />
      <Galaxy />
      {webDesignPageData.InterestingMedia.map((media, index) => {
        return <InterestingMedia key={index} data={media} />;
      })}
      <MyformContent />
      <Cases data={webDesignPageData.CaseImages} />
      <Trends />
      <Footer />
    </div>
  );
};

export default WebDesignPage;
