import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "IoT platform",
    description:
      "Connected-device dashboard and monitoring, deployed for production traffic.",
    url: "https://iot.weienwong.online",
  },
  {
    title: "RAG application",
    description:
      "Retrieval-augmented experience for knowledge bases and support workflows.",
    url: "https://rag.weienwong.online",
  },
  {
    title: "AppalachiaDevs",
    description:
      "Marketing and lead-generation site for the agency (this codebase).",
    url: "https://www.appalachiadevs.com",
  },
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "AppalachiaDevs | Portfolio";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-100 pt-24 sm:pt-28 pb-16 font-poppins">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-4">
              Portfolio
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Selected production deployments. Each link opens the live application
              in a new tab.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.url}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col rounded-2xl bg-white/90 backdrop-blur border border-blue-100 shadow-lg shadow-blue-500/5 p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-blue-600 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold text-sm sm:text-base hover:bg-blue-500 transition-colors"
                >
                  Open production site
                  <FiExternalLink className="shrink-0" aria-hidden />
                </a>
                <p className="mt-3 text-xs text-gray-400 break-all">{project.url}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
