import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import MyformContent from "../components/myform-content/MyformContent";
import Cases from "../components/cases/Cases";
import Galaxy from "../components/galaxy/Galaxy";
import Trends from "../components/trends/Trends";

import background from "../static/images/brand-bg.jpg"
import im1 from "../static/images/brand-1.jpg"
import im2 from "../static/images/brand-2.jpg"
import im3 from "../static/images/brand-3.jpg"
import im4 from "../static/images/brand-4.jpg"
import im5 from "../static/images/brand-5.jpg"
import case1 from "../static/media/newcase/brand-case-1.jpg"
import case2 from "../static/media/newcase/brand-case-2.jpg"
import case3 from "../static/media/newcase/brand-case-3.jpg"
import case4 from "../static/media/newcase/brand-case-4.jpg"
import { useTranslation } from "react-i18next";


const BrandingPage = () => {
  const {t} = useTranslation();

  const brandingPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: "BRANDING & DESIGN",
      mainText: t("brandingMainText"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: t("developmentOfCorporateStyle"),
        mainTextLong: "Neo-Futuristic Branding",
        mainTextShort:
          t("brandBecomesSymbol"),
      },
      {
        backgroundImage: im2,
        mainTitle: t("brandBookDevelopment"),
        mainTextLong: "Brand Book Creation",
        mainTextShort:
          t("brandBookManifest"),
      },
      {
        backgroundImage: im3,
        mainTitle: t("webAndInterfaceDesign"),
        mainTextLong: "Minimalist Chic Web Design",
        mainTextShort:
          t("minimalismAndChic"),
      },
      {
        backgroundImage: im4,
        mainTitle: t("packagingAndLabelDesign"),
        mainTextLong: "Eco-Chic Packaging",
        mainTextShort:
          t("ecoFriendlyAndChicPackaging"),
      },
      {
        backgroundImage: im5,
        mainTitle: t("advertisingMaterialsDesign"),
        mainTextLong: "Advertising Materials Design",
        mainTextShort:
          t("creativityAndInnovationInAds"),
      },
      
    ],
    CaseImages: [
      {
        id: 1,
        imgSrc: case1,
        alt: "case 1",
      },
      {
        id: 2,
        imgSrc:case2,
        alt: "case 2",
      },
      {
        id: 3,
        imgSrc: case3,
        alt: "case 3",
      },
      {
        id: 4,
        imgSrc: case4,
        alt: "case 4",
      },
    ],
  };
  return (
    <div>
      <Header />
      <FirstPage data={brandingPageData.FirstPage} />
      <Galaxy />
      {brandingPageData.InterestingMedia.map((media, index) => {
        return (
          <InterestingMedia key={index} data={media} />
        );
      })}
      <MyformContent />
      <Cases data={brandingPageData.CaseImages}/>
      <Trends />
      <Footer />
    </div>
  );
};

export default BrandingPage;
