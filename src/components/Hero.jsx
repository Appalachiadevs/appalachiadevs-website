import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "../hooks/useLocalePath";
import heroImage from "./images/heroImage.jpg";
import ayroui from "./images/brands/ayroui.svg";
import graygrids from "./images/brands/graygrids.svg";
import uideck from "./images/brands/uideck.svg";

function Hero() {
  const { t } = useTranslation();
  const p = useLocalePath();
  return (
    <div className="font-poppins overflow-x-hidden bg-gradient-to-br from-blue-100">
      <div className="relative pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto max-sm:px-2">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className=""
                >
                  <h1
                    className="sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  xl:mt-20
                            font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                  >
                    {t("hero.welcome")} <br />
                    <br />
                    <span className="sm:text-7xl text-6xl xl:my-40 ">
                      <span className="text-blue-500 cursor-pointer my-40">
                        {t("nav.brand")}
                      </span>{" "}
                      <br />
                    </span>
                    <br />
                    <span className="sm:text-3xl text-6xl mt-10">
                      {t("hero.tagline")}
                    </span>
                  </h1>
                  <p className="text-gray-500 text-sm my-8 max-w-[480px] sm:text-base">
                    {t("hero.lead")}
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                >
                  <ul className="flex flex-wrap items-center">
                    <li>
                      <a
                        href="https://cal.com/appalachiadev/15min"
                        className="bg-blue-500 border-solid border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition ease-in-out delay-100
                                    inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white  sm:px-10 lg:px-8 xl:px-10"
                      >
                        {t("hero.bookCall")}
                      </a>
                    </li>
                    <li>
                      <Link
                        to={p("/services")}
                        className="border-solid border-2 border-blue-500   text-black font-normal hover:bg-blue-500 hover:text-white transition ease-in-out delay-100
                                    ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-centersm:px-10 lg:px-8 xl:px-10"
                      >
                        {t("hero.takeLook")}
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="clients pt-16"
                >
                  <h6 className="text-body-color mb-2 flex items-center text-xs font-normal text-gray-500">
                    {t("hero.clients")}
                    <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                  </h6>
                  <div className="flex items-center">
                    <div className="mr-4 w-full py-3">
                      <img src={ayroui} alt="ayroui" />
                    </div>
                    <div className="mr-4 w-full py-3">
                      <img src={graygrids} alt="graygrids" />
                    </div>
                    <div className="mr-4 w-full py-3">
                      <img src={uideck} alt="uideck" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hidden px-4 lg:block lg:w-1/12 "></div>

            <div className="w-full px-4 lg:w-5/12 ">
              <div className="lg:ml-auto lg:text-right">
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                >
                  <img
                    src={heroImage}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-l-[20%] "
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
