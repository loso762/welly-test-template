const next = require("next");
const sitemap =  require('nextjs-sitemap-generator');

// const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();

// Without express
const { createServer } = require("http");
const  { parse }  =  require('url');

// sitemap({
//   baseUrl: "https://www.welly.rest",
//   ignoredPaths: ["src/assets", "icons", "meditation", "notsupportie", "oauth", "payment"],
//   pagesDirectory: __dirname + "/pages",
//   targetDirectory : "public/",
//   sitemapFilename: "sitemap_0113.xml",
//   nextConfigPath: __dirname + "/next.config.js"
// });

app.prepare().then(() => {
  createServer(handler).listen(8000);
});
