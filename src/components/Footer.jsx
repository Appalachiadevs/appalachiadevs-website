import React from "react";
import Icon from "./images/logo.svg";
import { Link } from "react-router-dom";
import { ImLinkedin2, ImGithub, ImTwitter } from "react-icons/im";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "../hooks/useLocalePath";

const Footer = () => {
  const { t } = useTranslation();
  const p = useLocalePath();
  return (
    <>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
      <div className="overflow-x-hidden max-w-screen font-poppins">
        <footer className="py-6 bg-gradient-to-br from-blue-100 ">
          <div className="container px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">
            <div className="grid grid-cols-12">
              <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                <Link
                  to={p("/")}
                  className="flex justify-center space-x-3 md:justify-start"
                >
                  <div className="flex items-center justify-center w-12 h-12">
                    <img src={Icon} alt="icon" className="" />
                  </div>
                  <span className="self-center text-2xl font-semibold text-blue-500">
                    {t("nav.brand")}
                  </span>
                </Link>
              </div>
              <div className="col-span-6 text-center md:text-left md:col-span-3">
                <p className="py-2 text-blue-800 font-bold">{t("footer.links")}</p>
                <ul>
                  <li className=" mr-2 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/")}>{t("nav.home")}</Link>
                  </li>
                  <li className=" mr-2 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/about")}>{t("nav.about")}</Link>
                  </li>
                  <li className=" mr-2 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/services")}>{t("nav.services")}</Link>
                  </li>
                  <li className=" mr-2 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/portfolio")}>{t("nav.portfolio")}</Link>
                  </li>
                  <li className=" mr-2 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/blogs")}>{t("nav.blogs")}</Link>
                  </li>
                  <li className=" text-blue-500 hover:text-blue-800 font-semibold cursor-pointer">
                    <Link to={p("/contact")}>{t("nav.contact")}</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 text-center md:text-left md:col-span-3">
                <p className="py-2 text-blue-800 font-bold">{t("footer.company")}</p>
                <ul />
              </div>
            </div>
            <div className="grid justify-center pt-6 lg:justify-between">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span>{t("footer.rights", { brand: t("nav.brand") })}</span>
              </div>
              <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                <a
                  href="https://www.linkedin.com/company/appalachiadevs"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex items-center justify-center  rounded-full"
                >
                  <ImLinkedin2 className="text-blue-500 w-7 h-7" />
                </a>
                <a
                  href="https://github.com/Appalachiadevs"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex items-center justify-center  rounded-full"
                >
                  <ImGithub className="text-blue-500 w-7 h-7" />
                </a>
                <a
                  href="https://x.com/appalachiadevs"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className="flex items-center justify-center  rounded-full "
                >
                  <ImTwitter className="text-blue-500 w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTop showUnder={160}>
        <div className="bg-blue-500 w-10 h-10 text-white rounded-full flex items-center justify-center">
          <span>{t("footer.top")}</span>
        </div>
      </ScrollToTop>
    </>
  );
};

export default Footer;
