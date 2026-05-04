import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import blog1 from "../images/blogs/image-01.jpg";
import blog2 from "../images/blogs/image-02.jpg";
import blog3 from "../images/blogs/image-03.jpg";
import { motion } from "framer-motion";
import SeoHead from "../SeoHead";

const blogImages = [blog1, blog2, blog3];

const Blogs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postsRaw = t("blogs.posts", { returnObjects: true });
  const posts = Array.isArray(postsRaw) ? postsRaw : [];

  return (
    <>
      <SeoHead
        title={t("seo.blogs.title")}
        description={t("seo.blogs.description")}
      />
      <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div className="container mx-auto">
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -75 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="-mx-4 flex flex-wrap justify-center"
          >
            <div className="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  {t("blogs.title")}
                </h2>
                <p className="text-lg text-gray-500">{t("blogs.lead")}</p>
              </div>
            </div>
          </motion.div>
          <div className="-mx-4 flex flex-wrap">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.2 + index * 0.2 }}
                className="w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div className="mx-auto mb-10 max-w-[370px]">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src={blogImages[index]}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      {post.date}
                    </span>
                    <h3>
                      <span className="text-dark mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                        {post.title}
                      </span>
                    </h3>
                    <p className="text-body-color text-base">{post.excerpt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.8 }}
          className="flex justify-center space-x-1 dark:text-white"
        >
          <button
            title={t("blogs.pagination.prev")}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            title={t("blogs.pagination.page", { n: 1 })}
            className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md dark:bg-blue-700 dark:text-white"
          >
            1
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm  rounded shadow-md dark:bg-blue-500"
            title={t("blogs.pagination.page", { n: 2 })}
          >
            2
          </button>
          <button
            title={t("blogs.pagination.next")}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
export default Blogs;
