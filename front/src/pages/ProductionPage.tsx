import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import MyformContent from "../components/myform-content/MyformContent";
import Cases from "../components/cases/Cases";
import Galaxy from "../components/galaxy/Galaxy";
import Trends from "../components/trends/Trends";

import background from "../static/videos/prod.mp4";
import im1 from "../static/images/i5.jpg";
import im2 from "../static/images/i6.jpg";
import im3 from "../static/images/i7.jpg";
import im4 from "../static/videos/car.mp4";
import im5 from "../static/images/i8.jpg";
import productionCase1 from "../static/media/newcase/production-case-1.mp4";
import productionCase2 from "../static/media/newcase/production-case-2.mp4";
import productionCase3 from "../static/media/newcase/production-case-3.mp4";
import productionCase4 from "../static/media/newcase/production-case-4.mp4";
import { useTranslation } from "react-i18next";

const ProductionPage = () => {
  const { t } = useTranslation();

  const productionPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: "PRODUCTION",
      mainText: t("productionMainText"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: t("photoVideoProduction"),
        mainTextLong:
          t("creativeConceptsAndScripts"),
      },
      {
        backgroundImage: im2,
        mainTitle: t(" outdoorDigitalAdProduction"),
        mainTextLong:
          t("digitalVisualContentProduction"),
      },
      {
        backgroundImage: im3,
        mainTitle: t("tvAdProduction"),
        mainTextLong:
          t("tvAdConceptsAndProduction"),
      },
      {
        backgroundImage: im4,
        mainTitle: t("3dGraphicsAnimationVFX"),
        mainTextLong:
          t("modern3dModeling"),
      },
      {
        backgroundImage: im5,
        mainTitle: t("qualitySMMContent"),
        mainTextLong:
          t("attractiveSocialMediaPosts"),
      },
    ],
    CaseImages: [
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
  };
  return (
    <div>
      <Header />
      <FirstPage data={productionPageData.FirstPage} production video />
      <Galaxy />
      {productionPageData.InterestingMedia.map((media, index) => {
        return (
          <InterestingMedia
            key={index}
            data={media}
            production
            video={index === 3}
          />
        );
      })}
      <MyformContent />
      <Cases data={productionPageData.CaseImages} video />
      <Trends />
      <Footer />
    </div>
  );
};

export default ProductionPage;
