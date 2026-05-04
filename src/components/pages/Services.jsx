import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import { FcOrgUnit } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcSerialTasks } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import map from "../images/map.png";
import mapbg from "../images/map-bg.png";
import Features from "../Features";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import SeoHead from "../SeoHead";

const cardIcons = [
  <FcBarChart key="0" style={{ fontSize: "7rem" }} />,
  <FcSerialTasks key="1" style={{ fontSize: "7rem" }} />,
  <FcMindMap key="2" style={{ fontSize: "7rem" }} />,
  <FcBullish key="3" style={{ fontSize: "7rem" }} />,
  <FcOrgUnit key="4" style={{ fontSize: "7rem" }} />,
  <FcFlowChart key="5" style={{ fontSize: "7rem" }} />,
];

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardsRaw = t("servicesPage.cards", { returnObjects: true });
  const cards = Array.isArray(cardsRaw) ? cardsRaw : [];
  const statsRaw = t("servicesPage.stats", { returnObjects: true });
  const stats = Array.isArray(statsRaw) ? statsRaw : [];

  return (
    <>
      <SeoHead
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        ogImage="/portfolio/portfolio-guard.png"
      />
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100">
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container mx-auto px-10">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-wrap -mx-4"
            >
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-gray-500">
                    {t("servicesPage.eyebrow")}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    {t("servicesPage.title")}
                  </h2>
                  <p className="text-lg text-gray-500">{t("servicesPage.intro")}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-wrap -mx-4"
            >
              {cards.slice(0, 3).map((card, i) => (
                <ServiceCard
                  key={card.title}
                  title={card.title}
                  details={card.details}
                  icon={cardIcons[i]}
                />
              ))}
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-wrap -mx-4"
            >
              {cards.slice(3, 6).map((card, i) => (
                <ServiceCard
                  key={card.title}
                  title={card.title}
                  details={card.details}
                  icon={cardIcons[i + 3]}
                />
              ))}
            </motion.div>
          </div>
        </section>
        <Features />
        <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
          <div className="mx-auto mb-12 text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-gray-500"></span>
            <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
              {t("servicesPage.mapTitle1")}
              <br className="md:block hidden" />
              {t("servicesPage.mapTitle2")}
            </h2>
            <p className="text-lg text-gray-500">{t("servicesPage.mapLead")}</p>
          </div>
          <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img
              src={map}
              alt={t("servicesPage.mapAltDesktop")}
              className="w-full xl:h-full h-80 sm:block hidden"
            />
            <img
              src={mapbg}
              alt={t("servicesPage.mapAltMobile")}
              className="sm:hidden -mt-10 block w-full h-96  absolute z-0"
            />
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 1, delay: 0.25 }}
              className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
            >
              <p className="text-3xl font-semibold text-gray-800">{stats[0]?.value}</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                {stats[0]?.label}
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 1, delay: 0.25 }}
              className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 sm:mt-0 mt-4 xl:mt-80  xl:-ml-0 sm:-ml-12"
            >
              <p className="text-3xl font-semibold text-gray-800">{stats[1]?.value}</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                {stats[1]?.label}
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 1, delay: 0.25 }}
              className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
            >
              <p className="text-3xl font-semibold text-gray-800">{stats[2]?.value}</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                {stats[2]?.label}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md cursor-pointer hover:shadow-lg  hover:-translate-y-4 transition ease-in-out duration-300 md:px-7 xl:px-10">
          <div
            className={`mb-8 flex h-[80px] w-[80px] p-0 items-center justify-center`}
          >
            {icon}
          </div>
          <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color max-words">{details}</p>
        </div>
      </div>
    </>
  );
};
