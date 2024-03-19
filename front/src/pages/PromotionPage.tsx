import { useTranslation } from "react-i18next";
import AI from "../components/AI/AI";
import AncientContent from "../components/ancient-content/AncientContent";
import Cases from "../components/cases/Cases";
import FirstPage from "../components/first-page/FirstPage";
import Footer from "../components/footer/Footer";
import Galaxy from "../components/galaxy/Galaxy";
import Header from "../components/header/Header";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import MyformContent from "../components/myform-content/MyformContent";
import Persentage from "../components/percentage/Percentage";
import StarCrew from "../components/star-crew/StarCrew";
import Trends from "../components/trends/Trends";

import background from "../static/images/bg11.png"
import im1 from "../static/images/target-bg-2.jpg"
import im2 from "../static/images/target-bg-3.jpg"
import im3 from "../static/images/target-bg-4.jpg"
import targetCase1 from "../static/media/newcase/target-case-1.png"
import targetCase2 from "../static/media/newcase/target-case-2.png";
import targetCase3 from "../static/media/newcase/target-case-3.png";
import targetCase4 from "../static/media/newcase/target-case-4.png";


const PromotionPage = () => {
  const { t } = useTranslation();

  const promotionPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle:t("Targeted and context-media advertising"),
      mainText: t("breakthroughAmericanTechnologies"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: t("targetedAdsWithRocketPower"),
        mainTextLong:
          t("rocketPowerMethodology"),
        mainTextShort:
          t("expectSignificantTrafficIncrease"),
      },
      {
        backgroundImage: im2,
        mainTitle: t("contextualAdvertisingWithRocketPower"),
        mainTextLong:
          t("enhancingYourContextualAdvertising"),
        mainTextShort:
          t("expectHigherBrandRecognition"),
      },
      {
        backgroundImage: im3,
        mainTitle: 'SEO 4.0',
        mainTextLong:
          t("aiPoweredSeo"),
        mainTextShort:
          t("beReadyForTrafficSurge"),
      },
    ],
    CaseImages: [
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
  };

  return (
    <div>
      <Header />
      <FirstPage data={promotionPageData.FirstPage} />
      <Galaxy />
      <AncientContent promotion />
      {promotionPageData.InterestingMedia.map((media, index) => {
        return (
          <InterestingMedia key={index} data={media}/>
        );
      })}
      <AI />
      <Cases data={promotionPageData.CaseImages}/>
      <Persentage />
      <MyformContent />
      <StarCrew />
      <Trends />
      <Footer />
    </div>
  );
};

export default PromotionPage;
