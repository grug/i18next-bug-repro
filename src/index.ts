import express from 'express';
import { initializeI18n } from './i18n';
import i18nMiddleware from './middleware';
import { setupViews } from './views';

const app = express();
const port = 3000;

async function run(app: express.Application) {
  setupViews(app);

  await initializeI18n(app);

  app.use(i18nMiddleware);

  app.get('/', async (req, res) => {
    const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await delay(3000);

    res.render('index.njk', { t: req.t });
  });

  app.get('/another-page', (req, res) => {
    res.render('another-page.njk');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

run(app);
