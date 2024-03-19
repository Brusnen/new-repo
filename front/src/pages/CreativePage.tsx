import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstPage from "../components/first-page/FirstPage";
import ImpressionForm from "../components/impression-form/ImpressionForm";
import CreativeQuote from "../components/creative-quote/CreativeQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import background from "../static/images/brand-1.jpg";
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

//!aqtolqyn
import GxAqtolqyn from "../static/creative/GxA.png";
import aqtolqynMainPhoto from "../static/creative/AG1-1.png";
import aqtolqynLogo from "../static/creative/Mask group.png";
import aqtolqynVideo1 from "../static/creative/Aqtolqyn/AB_group_v2.mp4";
import aqtolqynVideo2 from "../static/creative/Aqtolqyn/urta.mp4";
import aqtolqynPhoto3_1 from "../static/creative/Aqtolqyn/St aq.png";
import aqtolqynPhoto3_2 from "../static/creative/Aqtolqyn/st qa.png";
import aqtolqynPhoto4_1 from "../static/creative/Aqtolqyn/1q1-2.png";
import aqtolqynPhoto4_2 from "../static/creative/Aqtolqyn/aq1-1.png";
import aqtolqynLastPhoto from "../static/creative/Aqtolqyn/aqtolqyn-last-page.png";

//!BMW
import GxBMW from "../static/creative/GxB.png";
import bmwMainPhoto from "../static/creative/BMW/BMW 1-1.png";
import bmwLogo from "../static/creative/BMW/bmw logo.png";
import bmwPhoto1 from "../static/creative/BMW/bmw-first-page.png";
import bmwVideo2 from "../static/creative/BMW/BMW MAIN.mp4";
import bmwVideo3 from "../static/creative/BMW/Gimini_15_Mbps.mp4";

//!Arena SUNSET
import GxSunset from "../static/creative/GxAS.png";
import ASMainPhoto from "../static/creative/AS1-1.png";
import sunsetLogo from "../static/creative/as_logo.png";
import sunsetFirstPage from "../static/creative/Sunset/sunset-first-page.png";
import sunsetSecondPage1 from "../static/creative/Sunset/sunset-second-page1.png";
import sunsetSecondPage2 from "../static/creative/Sunset/sunset-second-page2.png";
import sunsetThirdPage1 from "../static/creative/Sunset/sunset-third-page1.png";
import sunsetThirdPage2 from "../static/creative/Sunset/sunset-third-page2.png";
import sunsetBefore from "../static/creative/Sunset/sunset-before.png";
import sunsetAfter from "../static/creative/Sunset/sunset-after.png";
import strelka from "../static/creative/Sunset/strelka.png";

//!DU
import GxDU from "../static/creative/GxUD.png";
import duMainPhoto from "../static/creative/UD1-1.png";
import udLogo from "../static/creative/ud logo.png";
import udFirstPage from "../static/creative/Ult dami/ud-first-page.png";
import udSecondPage1 from "../static/creative/Ult dami/ud-second-page1.png";
import udSecondPage2 from "../static/creative/Ult dami/ud-second-page2.png";
import udLastVideo from "../static/creative/Ult dami/ud-last-page.mp4";

//!Kids Corp
import GxKids from "../static/creative/GxKC.png";
import kidsMainPhoto from "../static/creative/KC.png";
import kidsLogo from "../static/creative/KC logo.png";
import kidsFirstPage from "../static/creative/Kids/kids-first-page.png";
import kidsSecondPage1 from "../static/creative/Kids/kids-second-page1.png";
import kidsSecondPage2 from "../static/creative/Kids/kids-second-page2.png";
import kidsThirdPage from "../static/creative/Kids/kids-third-page.png";
import kidsVideo1 from "../static/creative/Kids/kids-last-page1.mp4";
import kidsVideo2 from "../static/creative/Kids/kids-last-page2.mp4";

const CreativePage = () => {
  const { t } = useTranslation();

  const creativePageData = {
    FirstPage: {
      backgroundImage: background,
      mainTitle: t("challengeTheUsual"),
      mainText: t("challengeText"),
    },
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
    <div className="creative-page">
      <Header />
      <div className="page">
        <FirstPage data={creativePageData.FirstPage} />
        <CreativeQuote />
        <section className="aqtolqyn-section">
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="creative"
          >
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn main-block">
                <div className="main-block-container">
                  <img src={aqtolqynMainPhoto} alt="" />
                  <img src={GxAqtolqyn} alt="" className="logo-photo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn one">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img src={aqtolqynLogo} alt="" />
                    <p
                      className="creative-main-text"
                      style={{ textAlign: "center" }}
                    >
                      Жилой комплекс бизнес-класса, расположенный в самом сердце
                      Алматы
                    </p>
                  </div>
                  <video controls className="default-media">
                    <source src={aqtolqynVideo1} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn two">
                <div className="main-block-container" style={{ margin: "0" }}>
                  <video className="default-media" controls>
                    <source src={aqtolqynVideo2} />
                    Your browser does not support the video tag.
                  </video>
                  <p className="creative-main-text">
                    Наша команда создала видеоролик о трансформации домов в
                    Казахстане, используя Искусственный Интеллект. <br />
                    <br />
                    Видео показывает эволюцию жилого комплекса "Aqtolqyn",
                    воссоздавая атмосферу перемен региона. Каждый кадр наполнен
                    теплом и уютом, позволяя зрителю погрузиться в атмосферу
                    обновлений
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn three">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img
                      src={aqtolqynPhoto3_1}
                      alt=""
                      className="default-media"
                    />
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px", width: "370px" }}
                    >
                      Страница в Instagram показала значительный рост охвата и
                      вовлеченности
                    </p>
                  </div>
                  <div className="flex-column">
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px", width: "450px" }}
                    >
                      Охват увеличился на 109%, а количество вовлеченных
                      аккаунтов выросло на 66,6%, что указывает на успешное
                      привлечение и интерес аудитории к контенту
                    </p>
                    <img
                      src={aqtolqynPhoto3_2}
                      alt=""
                      className="default-media"
                      style={{ width: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn four">
                <div className="main-block-container">
                  <p className="creative-main-text">
                    Создание имиджевого видео с использованием рендеров жилого
                    комплекса с добавлением 3D анимации
                  </p>
                  <video controls className="default-media">
                    <source src={aqtolqynVideo1} />
                  </video>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn five">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img
                      src={aqtolqynPhoto4_1}
                      alt=""
                      className="default-media"
                    />
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px" }}
                    >
                      Мы активно внедряем Искусственный Интеллект в разработке
                      визуала, что позволяет нам обходиться без затратных
                      фотосессий
                    </p>
                  </div>
                  <div className="flex-column">
                    <img
                      src={aqtolqynPhoto4_2}
                      alt=""
                      className="default-media"
                      style={{ width: "300px" }}
                    />
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px" }}
                    >
                      Фото сгенерировано с помощью Искусственного Интеллекта,
                      все персонажи не являются реальными людьми
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block aqtolqyn six">
                <div className="main-block-container">
                  <img src={aqtolqynLastPhoto} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="bmw-section">
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="creative"
          >
            <SwiperSlide className="creative-slide">
              <div className="creative-block main-block">
                <div className="main-block-container">
                  <img src={bmwMainPhoto} alt="" />
                  <img src={GxBMW} alt="" className="logo-photo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block bmw one">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img
                      src={bmwLogo}
                      alt=""
                      style={{ width: "170px", marginBottom: "20px" }}
                    />
                    <p
                      className="creative-main-text"
                      style={{ textAlign: "center" }}
                    >
                      Автоцентр Бавария - официальный дилер BMW, MINI и BMW
                      Motorrad
                    </p>
                  </div>
                  <img src={bmwPhoto1} style={{ width: "550px" }} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block bmw two">
                <div className="main-block-container">
                  <video controls className="default-media">
                    <source src={bmwVideo2} />
                    Your browser does not support the video tag.
                  </video>
                  <p className="creative-main-text">
                    Video Production для автоцентра-Bavaria
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block bmw three">
                <div className="main-block-container">
                  <p className="creative-main-text">
                    Видео с использованием 3D motion-design со сверхточной
                    детализацией автомобиля
                  </p>
                  <video controls className="default-media">
                    <source src={bmwVideo3} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="sunset-section">
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="creative"
          >
            <SwiperSlide className="creative-slide">
              <div className="creative-block main-block">
                <div className="main-block-container">
                  <img src={ASMainPhoto} alt="" />
                  <img src={GxSunset} alt="" className="logo-photo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block sunset one">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img
                      src={sunsetLogo}
                      alt=""
                      style={{ width: "170px", marginBottom: "20px" }}
                    />
                    <p
                      className="creative-main-text"
                      style={{ textAlign: "center" }}
                    >
                      Жилой комплекс для людей, которые ведут активный образ
                      жизни и ценят собственный комфорт
                    </p>
                  </div>
                  <img
                    src={sunsetFirstPage}
                    style={{ width: "550px" }}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block sunset two">
                <div className="main-block-container">
                  <div className="flex-column">
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px", width: "450px" }}
                    >
                      Мистер Sunset – это не просто кот, а частичка души Arena
                      Sunset, где царит атмосфера тепла и гостеприимства
                    </p>
                    <img
                      src={sunsetSecondPage1}
                      alt=""
                      className="default-media"
                      style={{ width: "450px" }}
                    />
                  </div>
                  <div className="flex-column">
                    <img
                      src={sunsetSecondPage2}
                      alt=""
                      className="default-media"
                    />
                    <p
                      className="creative-main-text"
                      style={{ fontSize: "20px", width: "370px" }}
                    >
                      Создание очаровательного персонажа стало настоящим
                      событием для подписчиков Arena Sunset. Мистер Sunset,
                      созданный с помощью Искусственного Интеллекта, мгновенно
                      завоевал их сердца, значительно увеличив показатели ER
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block sunset three">
                <div className="main-block-container" style={{ gap: "200px" }}>
                  <img src={sunsetThirdPage1} alt="" />
                  <div className="flex-column" style={{ alignItems: "start" }}>
                    <img src={sunsetThirdPage2} alt="" />
                    <div
                      className="creative-main-text"
                      style={{ width: "600px", fontSize: "16px" }}
                    >
                      Статистика аккаунта в разрезе 1 месяца <br />
                      <br />
                      -Охвачено 364 тыс. аккаунтов, что на{" "}
                      <span className="green-span">69,5%</span> больше, чем в
                      предыдущем периоде <br />
                      -Вовлечено 3 010 аккаунтов, что на{" "}
                      <span className="green-span">43,4%</span> больше <br />
                      -Количество подписчиков выросло на{" "}
                      <span className="green-span">16,4%</span> Выбранная
                      стратегия продвижения в Instagram демонстрирует высокую
                      эффективность, отражая значительный рост уровня
                      вовлеченности, охватов и количества подписчиков
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block sunset four">
                <div className="main-block-container" style={{ gap: "30px" }}>
                  <div className="flex-column">
                    <p className="creative-main-text before-text">До</p>
                    <img src={sunsetBefore} alt="" />
                  </div>
                  <img src={strelka} alt="" />
                  <div className="flex-column">
                    <p className="creative-main-text before-text">После</p>
                    <img src={sunsetAfter} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="ud-section">
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="creative"
          >
            <SwiperSlide className="creative-slide">
              <div className="creative-block main-block">
                <div className="main-block-container">
                  <img src={duMainPhoto} alt="" />
                  <img src={GxDU} alt="" className="logo-photo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block du one">
                <div className="main-block-container">
                  <div className="flex-column" style={{ flexDirection: "row" }}>
                    <img
                      src={udLogo}
                      alt=""
                      style={{ width: "170px", marginBottom: "20px" }}
                    />
                    <p className="creative-main-text">
                      Национальный бренд, возрождающий казахские традиции, где
                      национальные сладости обретают новое звучание
                    </p>
                  </div>
                  <img src={udFirstPage} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block du two">
                <div className="main-block-container">
                  <img src={udSecondPage1} alt="" />
                  <p className="creative-main-text">
                    Использование передовых технологий Искусственного Интеллекта
                    в сочетании с колоритом национального бренда
                  </p>
                  <img src={udSecondPage2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block du three">
                <div className="main-block-container">
                  <video controls className="default-media">
                    <source src={udLastVideo} />
                  </video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="kids-section">
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="creative"
          >
            <SwiperSlide className="creative-slide">
              <div className="creative-block main-block">
                <div className="main-block-container">
                  <img src={kidsMainPhoto} alt="" />
                  <img src={GxKids} alt="" className="logo-photo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block kids one">
                <div className="main-block-container">
                  <div className="flex-column">
                    <img
                      src={kidsLogo}
                      alt=""
                      style={{ width: "170px", marginBottom: "20px" }}
                    />
                    <p
                      className="creative-main-text"
                      style={{ textAlign: "center" }}
                    >
                      Сеть бутиков эксклюзивной детской одежды, представляющая
                      мировые бренды Boss, Kenzo, Karl Lagerfeld, Marc Jacobs и
                      многие другие бренды
                    </p>
                  </div>
                  <img src={kidsFirstPage} style={{ width: "550px" }} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block kids two">
                <div className="main-block-container">
                  <img src={kidsSecondPage1} alt="" />
                  <p className="creative-main-text">
                    {" "}
                    • проведен анализ целевой аудитории <br /> • создана
                    стратегия контент-маркетинга <br /> • подобраны инфлюенсеры
                    для эффективной коллаборации <br /> • отснят
                    профессиональный фотоматериал для использования в рекламных
                    кампаниях
                  </p>
                  <img src={kidsSecondPage2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block kids three">
                <div className="main-block-container">
                  <p
                    className="creative-main-text"
                    style={{ fontSize: "25px" }}
                  >
                    Статистика аккаунта в разрезе 1 месяца Выбранная стратегия
                    продвижения в Instagram демонстрирует высокую эффективность.{" "}
                    <br />
                    Наблюдается значительный рост ключевых показателей: <br />
                    <br /> • Уровень вовлеченности увеличился на 43,4% <br /> •
                    Охват аудитории вырос на 69,5% <br /> • Количество
                    подписчиков увеличилось на 16,4%
                  </p>
                  <img src={kidsThirdPage} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="creative-slide">
              <div className="creative-block kids four">
                <div className="main-block-container" style={{ gap: "150px" }}>
                  <video controls className="default-media">
                    <source src={kidsVideo1} />
                  </video>
                  <video controls className="default-media">
                    <source src={kidsVideo2} />
                  </video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <ImpressionForm />
        <Footer />
      </div>
    </div>
  );
};

export default CreativePage;