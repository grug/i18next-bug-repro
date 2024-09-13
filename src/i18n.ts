import express from 'express';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';
import path from 'path';

async function initializeI18n(app: express.Application) {
  await i18next
    .use(i18nextMiddleware.LanguageDetector)
    .use(Backend)
    .init({
      preload: ['en', 'cy'],
      fallbackLng: 'en',
      ns: ['common'],
      initImmediate: false,
      backend: {
        loadPath: `${path.join(__dirname, 'locales')}/{{lng}}/{{ns}}.json`,
      },
    });
  app.use(i18nextMiddleware.handle(i18next));
}

export { initializeI18n };
