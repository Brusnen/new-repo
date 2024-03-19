import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import Galaxy from "../components/galaxy/Galaxy";
import AI from "../components/AI/AI";
import InterestingMedia from "../components/interesting-media/InterestingMedia";
import Cases from "../components/cases/Cases";
import MyformContent from "../components/myform-content/MyformContent";
import Trends from "../components/trends/Trends";

import background from "../static/images/bg18.jpg";
import im1 from "../static/images/bi-bg-1.jpg";
import im2 from "../static/images/bi-bg-2.jpg";
import { useTranslation } from "react-i18next";

const AnalyticsPage = () => {
  const { t } = useTranslation();

  const analyticsPageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: t("Digital and business analytics"),
      mainText:
        t("Integrating American AI technologies into Digital and Business Analytics"),
    },
    InterestingMedia: [
      {
        backgroundImage: im1,
        mainTitle: "BI",
        description: t("AI-enhanced analysis in BI analytics"),
        mainTextLong:
          t("A unified BI platform: We collect data from all sources into a single powerful BI analytics system. We analyze all promotion channels and develop a business scaling strategy."),
        mainTextShort:
          t("Visual visualization: All your data in one report - dozens of charts, diagrams, and reports on all business indicators."),
      },
      {
        backgroundImage: im2,
        mainTitle: t("Digital analytics"),
        description: t("Transforming digital analytics with AI"),
        mainTextLong:
          t("Site heat maps: We create a visualization of activity on the site, improving UX/UI, making your site more attractive and understandable for users."),
        mainTextShort:
          t("Metrics: We create and track all key marketing metrics from your websites, social networks, mobile applications, and other digital platforms."),
      },
    ],
  };
  return (
    <div>
      <Header />
      <FirstPage data={analyticsPageData.FirstPage} />
      <Galaxy />
      {analyticsPageData.InterestingMedia.map((media) => {
        return <InterestingMedia data={media} />;
      })}
      <AI />
      <Cases data={[]} analytics />
      <MyformContent />
      <Trends />
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
