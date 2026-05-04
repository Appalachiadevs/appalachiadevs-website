import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import SeoHead from "./SeoHead";

function Homepage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SeoHead
        title={t("seo.home.title")}
        description={t("seo.home.description")}
      />
      <Navbar />
      <Hero />

      <div className="bg-gradient-to-tr from-blue-100">
        <Features />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
