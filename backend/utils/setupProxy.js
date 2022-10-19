const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/api/**", { // http://192.168.239.171:4000    
    target: "http://localhost:3000",
    secure: false
  }));
};
