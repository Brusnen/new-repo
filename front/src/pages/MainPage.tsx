import Header from "../components/header/Header";
import OutForce from "../components/out-force/OutForce";
import SpaceServices from "../components/space-services/SpaceServices";
import MyformContent from "../components/myform-content/MyformContent";
import Persentage from "../components/percentage/Percentage";
import StarCrew from "../components/star-crew/StarCrew";
import Rates from "../components/rates/Rates";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import Galaxy from "../components/galaxy/Galaxy";


import background from "../static/images/main-page-background.gif"
import { useTranslation } from "react-i18next";




const MainPage = () => {
  const {t} = useTranslation();

  const mainPageData = {
  FirstPage: {
    backgroundImage: background,
    mainTitle: t("Galaxy results"),
    mainText: "Digital marketing agency",
  },
};

  return (
    <div className="app">
      <Header />
      <FirstPage data={mainPageData.FirstPage}/>
      <Galaxy />
      <OutForce />
      <SpaceServices />
      <MyformContent />
      <Persentage />
      <StarCrew />
      <Rates />
      <Footer />
    </div>
  );
};

export default MainPage;
