const express = require('express');
const authRoute = require('./auth.route');
const headerRoute = require('./header.route');
const portfolioRoute = require('./portfolio.route');
const aboutmeRoute = require('./aboutme.route');
const contactRoute = require('./contact.route');
const webRoute = require('./web.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/website',
    route: headerRoute,
  },
  {
    path: '/website/portfolio',
    route: portfolioRoute,
  },
  {
    path: '/website/aboutme',
    route: aboutmeRoute,
  },
  {
    path: '/website/contact',
    route: contactRoute,
  },
  {
    path: '/web',
    route: webRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
