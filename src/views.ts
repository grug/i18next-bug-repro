import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';

function setupViews(app: express.Application) {
  nunjucks.configure([path.join(__dirname, 'views')], {
    autoescape: true,
    noCache: process.env.NODE_ENV !== 'production',
    express: app,
  });
  app.engine('njk', nunjucks.render);
  app.set('view engine', 'njk');
}

export { setupViews };
