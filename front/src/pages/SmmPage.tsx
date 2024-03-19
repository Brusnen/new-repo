import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import AncientContent from "../components/ancient-content/AncientContent";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import MyformContent from "../components/myform-content/MyformContent";
import StarCrew from "../components/star-crew/StarCrew";
import Cases from "../components/cases/Cases";
import Trends from "../components/trends/Trends";
import AI from "../components/AI/AI";
import Galaxy from "../components/galaxy/Galaxy";

import background from "../static/images/bg7.png";
import im1 from "../static/images/i1.jpg";
import im2 from "../static/images/i2.jpg";
import im3 from "../static/images/i3.jpg";
import im4 from "../static/images/i4.jpg";
import smmCase1 from "../static/media/newcase/smm-case-1.jpg";
import smmCase2 from "../static/media/newcase/smm-case-2.jpg";
import smmCase3 from "../static/media/newcase/smm-case-3.jpg";
import smmCase4 from "../static/media/newcase/smm-case-4.jpg";
import { useTranslation } from "react-i18next";

const SmmPage = () => {
  const { t } = useTranslation();

  const smmPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: t("Social Media Management"),
      mainText:
        t("americanInnovationsInSM"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: "MEDIA VISION 360",
        mainTextLong:
          t("exclusiveMethodologyBasedOnAI"),
        mainTextShort:
          t("usingAIToAnalyzeTrends"),
      },
      {
        backgroundImage: im2,
        mainTitle: "Multi-Platform & AI-Driven Storytelling",
        mainTextLong: t("creatingMemorableContent"),
        mainTextShort:
          t("makingYouTalkOfTheTown"),
      },
      {
        backgroundImage: im3,
        mainTitle: "Engagement Boosters",
        mainTextLong:
          t("creatingCampaignsThatAttract"),
        mainTextShort:
          t("boostingAudienceEngagement"),
      },
      {
        backgroundImage: im4,
        mainTitle: "Influencer Collaboration",
        mainTextLong:
          t("collaborationWithTopInfluencers"),
      },
    ],
    CaseImages: [
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
  };

  return (
    <>
      <Header />
      <FirstPage data={smmPageData.FirstPage} />
      <Galaxy />
      <AncientContent smm />
      <AI />
      {smmPageData.InterestingMedia.map((media, index) => {
        return (
          <InterestingMedia key={index} data={media} firstPage={index === 0} />
        );
      })}
      <MyformContent />
      <Cases data={smmPageData.CaseImages} />
      <StarCrew />
      <Trends />
      <Footer />
    </>
  );
};

export default SmmPage;
