const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  pluginOptions: {
    sitemap: {
      baseURL: "https://mlindustrie.netlify.app",
      routes: [
        {
          path: "/",
          changefreq: "daily",
          priority: 1,
        },
        {
          path: "/programme",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/header",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/footer",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/signup",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/pdf",
          changefreq: "daily",
          priority: 0.9,
        },
        {
          path: "/maintenance",
          changefreq: "daily",
          priority: 0.9,
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
