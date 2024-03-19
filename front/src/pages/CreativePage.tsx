import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import Cases from "../components/cases/Cases";
import ImpressionForm from "../components/impression-form/ImpressionForm";
import CreativeQuote from "../components/creative-quote/CreativeQuote";

import background from "../static/images/brand-1.jpg";
import im1 from "../static/images/web-bg-1-laptop.jpg";
import im2 from "../static/images/web-bg-2-laptop.jpg";
import im3 from "../static/images/web-bg-3-laptop.jpg";
import im4 from "../static/images/brand-4.jpg";
import smmCase1 from "../static/media/newcase/smm-case-1.jpg";
import smmCase2 from "../static/media/newcase/smm-case-2.jpg";
import smmCase3 from "../static/media/newcase/smm-case-3.jpg";
import smmCase4 from "../static/media/newcase/smm-case-4.jpg";
import productionCase1 from "../static/media/newcase/production-case-1.mp4";
import productionCase2 from "../static/media/newcase/production-case-2.mp4";
import productionCase3 from "../static/media/newcase/production-case-3.mp4";
import productionCase4 from "../static/media/newcase/production-case-4.mp4";
import targetCase1 from "../static/media/newcase/target-case-1.png";
import targetCase2 from "../static/media/newcase/target-case-2.png";
import targetCase3 from "../static/media/newcase/target-case-3.png";
import targetCase4 from "../static/media/newcase/target-case-4.png";
import { useTranslation } from "react-i18next";

const CreativePage = () => {
  const { t } = useTranslation();

  const creativePageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: t("challengeTheUsual"),
      mainText:
        t("challengeText"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: t("modernWebDesignAndDevelopment"),
        mainTextLong:
          t("fromCorporateWebsites"),
      },
      {
        backgroundImage: im2,
        mainTitle: t("crmAndPaymentIntegration"),
        mainTextLong:
          t("integratingAutomationSystems"),
      },
      {
        backgroundImage: im3,
        mainTitle: "SEO 4.0",
        mainTextLong: t("improveYourBusiness"),
        mainTextShort:
          t("withAiMobileOptimization"),
      },
      {
        backgroundImage: im4,
        mainTitle: t("siteAnalytics"),
        mainTextLong:
          t("implementingAdvancedAnalytics"),
        mainTextShort:
          t("optimizingYourSite"),
      },
    ],
    CaseImages: {
      smm: [
        {
          id: 1,
          imgSrc: smmCase1,
          alt: "case 1",
        },
        {
          id: 2,
          imgSrc: smmCase2,
          alt: "case 2",
        },
        {
          id: 3,
          imgSrc: smmCase3,
          alt: "case 3",
        },
        {
          id: 4,
          imgSrc: smmCase4,
          alt: "case 4",
        },
      ],
      production: [
        {
          id: 1,
          imgSrc: productionCase1,
          alt: "case 1",
        },
        {
          id: 2,
          imgSrc: productionCase2,
          alt: "case 2",
        },
        {
          id: 3,
          imgSrc: productionCase3,
          alt: "case 3",
        },
        {
          id: 4,
          imgSrc: productionCase4,
          alt: "case 4",
        },
      ],
      promotion: [
        {
          id: 1,
          imgSrc: targetCase1,
          alt: "case 1",
        },
        {
          id: 2,
          imgSrc: targetCase2,
          alt: "case 2",
        },
        {
          id: 3,
          imgSrc: targetCase3,
          alt: "case 3",
        },
        {
          id: 4,
          imgSrc: targetCase4,
          alt: "case 4",
        },
      ],
    },
  };

  return (
    <div>
      <Header />
      <FirstPage data={creativePageData.FirstPage} />
      <CreativeQuote />
      <Cases data={creativePageData.CaseImages["smm"]} isFirst name="SMM" />
      <Cases
        data={creativePageData.CaseImages["production"]}
        video
        name="PRODUCTION"
      />
      <Cases data={creativePageData.CaseImages["promotion"]} name="PROMOTION" />
      <ImpressionForm />
      <Footer />
    </div>
  );
};

export default CreativePage;
