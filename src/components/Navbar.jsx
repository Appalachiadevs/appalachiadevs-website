import React, { useState } from "react";
import Icon from "./images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "../hooks/useLocalePath";
import { SUPPORTED_LOCALES } from "../constants/locales";

function pathTailFromLocation(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && SUPPORTED_LOCALES.includes(parts[0])) {
    return parts.slice(1).join("/");
  }
  return parts.join("/");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const p = useLocalePath();
  const location = useLocation();
  const navigate = useNavigate();
  const tail = pathTailFromLocation(location.pathname);
  const hrefForLang = (l) => `/${l}${tail ? `/${tail}` : ""}`;

  return (
    <div className="font-poppins">
      <nav className="bg-white bg-opacity-60 backdrop-blur fixed px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-4 pb-2 pt-2 text-black">
          <Link to={p("/")} className="flex items-start">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px] -mt-1"
            />
            <span className="ml-2 mt-0 sm:mt-0 text-blue-500 font-semibold text-xl you">
              {t("nav.brand")}
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ul className="sm:flex justify-center hidden items-center">
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/")}>{t("nav.home")}</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/about")}>{t("nav.about")}</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/services")}>{t("nav.services")}</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/portfolio")}>{t("nav.portfolio")}</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/blogs")}>{t("nav.blogs")}</Link>
              </li>
              <li className="p-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to={p("/contact")}>{t("nav.contact")}</Link>
              </li>
            </ul>
            <label className="hidden sm:flex items-center gap-1 text-sm text-gray-600">
              <span className="sr-only">{t("lang.label")}</span>
              <select
                className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-800"
                value={SUPPORTED_LOCALES.includes(i18n.language) ? i18n.language : "en"}
                aria-label={t("lang.label")}
                onChange={(e) => {
                  navigate(hrefForLang(e.target.value));
                }}
              >
                {SUPPORTED_LOCALES.map((code) => (
                  <option key={code} value={code}>
                    {t(`lang.${code}`)}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex ">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white hidden sm:block rounded-md mr-2 hover:bg-blue-500"
              onClick={() =>
                (window.location.href = "https://cal.com/appalachiadev/15min")
              }
            >
              {t("nav.getStarted")}
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="sm:hidden "
            >
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-blue-500" />
            </button>
          </div>
        </div>

        <div className={`${open ? "" : "hidden"} h-[20rem]`}>
          <ul>
            <li className="text-blue-500 hover:text-blue-800 font-bold  pl-8 cursor-pointer pb-4 pt-6">
              <Link to={p("/")} onClick={() => setOpen(false)}>
                {t("nav.home")}
              </Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to={p("/about")} onClick={() => setOpen(false)}>
                {t("nav.about")}
              </Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to={p("/services")} onClick={() => setOpen(false)}>
                {t("nav.services")}
              </Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to={p("/portfolio")} onClick={() => setOpen(false)}>
                {t("nav.portfolio")}
              </Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to={p("/blogs")} onClick={() => setOpen(false)}>
                {t("nav.blogs")}
              </Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to={p("/contact")} onClick={() => setOpen(false)}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
          <div className="flex pl-8 flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <span>{t("lang.label")}</span>
              <select
                className="rounded border border-gray-200 bg-white px-2 py-1 text-sm"
                value={SUPPORTED_LOCALES.includes(i18n.language) ? i18n.language : "en"}
                aria-label={t("lang.label")}
                onChange={(e) => {
                  navigate(hrefForLang(e.target.value));
                  setOpen(false);
                }}
              >
                {SUPPORTED_LOCALES.map((code) => (
                  <option key={code} value={code}>
                    {t(`lang.${code}`)}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white  rounded-md mr-2 hover:bg-blue-500 w-fit"
              onClick={() =>
                (window.location.href = "https://cal.com/appalachiadev/15min")
              }
            >
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
