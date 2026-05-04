import React, { useEffect, useRef } from "react";
import { FcGenealogy } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { FcRadarPlot } from "react-icons/fc";
import image1 from "./images/Features/fb11.jpg";
import image2 from "./images/Features/fb22.jpg";
import { useAnimation, useInView, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { innerWidth: width } = window;
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);
  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
      <div className="max-w-screen overflow-x-hidden font-poppins ">
        {width < 631 ? (
          <>
            <section className=" text-gray-700">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    {t("features.mobile.heroTitle")}
                  </h2>
                  <p className="text-lg text-gray-500">
                    {t("features.mobile.heroSubtitle")}
                  </p>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      {t("features.mobile.block1Title")}
                    </h3>
                    <p className="mt-3 text-lg ">{t("features.mobile.block1Lead")}</p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <FcGenealogy size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.mobile.block1Card1Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.mobile.block1Card1Body")}</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <FcMindMap size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.mobile.block1Card2Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.mobile.block1Card2Body")}</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <FcComboChart size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.mobile.block1Card3Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.mobile.block1Card3Body")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        {t("features.mobile.block2Title")}
                      </h3>
                      <p className="mt-3 text-lg ">{t("features.mobile.block2Lead")}</p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcPositiveDynamic size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              {t("features.mobile.block2Card1Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.mobile.block2Card1Body")}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcLineChart size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6  text-blue-700">
                              {t("features.mobile.block2Card2Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.mobile.block2Card2Body")}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcRadarPlot size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              {t("features.mobile.block2Card3Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.mobile.block2Card3Body")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className=" text-gray-700 gap-8">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto mb-12 text-center lg:mb-20">
                  <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    {t("features.desktop.heroTitle")}
                  </h2>
                  <p className="text-lg text-gray-500">
                    {t("features.desktop.heroSubtitle")}
                  </p>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      {t("features.desktop.block1Title")}
                    </h3>
                    <p className="mt-3 text-lg ">{t("features.desktop.block1Lead")}</p>
                    <div className="mt-12 space-y-12 ">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcGenealogy size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.desktop.block1Card1Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.desktop.block1Card1Body")}</p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcMindMap size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.desktop.block1Card2Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.desktop.block1Card2Body")}</p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcComboChart size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            {t("features.desktop.block1Card3Title")}
                          </h4>
                          <p className="mt-2 ">{t("features.desktop.block1Card3Body")}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div ref={ref}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      aria-hidden="true"
                      className="mt-10 lg:mt-0"
                    >
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        {t("features.desktop.block2Title")}
                      </h3>
                      <p className="mt-3 text-lg ">{t("features.desktop.block2Lead")}</p>
                      <div className="mt-12 space-y-12">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcPositiveDynamic size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              {t("features.desktop.block2Card1Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.desktop.block2Card1Body")}</p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcLineChart size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              {t("features.desktop.block2Card2Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.desktop.block2Card2Body")}</p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.55 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcRadarPlot size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              {t("features.desktop.block2Card3Title")}
                            </h4>
                            <p className="mt-2 ">{t("features.desktop.block2Card3Body")}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                    >
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* end */}
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>
    </>
  );
};

export default Features;
