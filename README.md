# realEstate
A project made using MERN stack for property buying and selling platform
dependencies
{
  "name": "everythingrealestate",
  "version": "1.0.0",
  "description": "Real Estate Project",
  "main": "backend/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node backend/server.js --ignore client",
    "dev": "nodemon backend/server.js --ignore client",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false && npm install --prefix frontend && npm run build --prefix frontend"
  },
  "author": "Pinak Thakar",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.2",
    "cloudinary": "^1.28.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.1",
    "express": "^4.17.2",
    "express-fileupload": "^1.3.1",
    "http-proxy-middleware": "^2.0.6",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.5",
    "nodemailer": "^6.7.2",
    "nodemon": "^2.0.19",
    "react-responsive-carousel": "^3.2.23",
    "react-router": "^6.2.2",
    "stripe": "^8.214.0",
    "validator": "^13.7.0"
  }
}
