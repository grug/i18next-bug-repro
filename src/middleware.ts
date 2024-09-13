import { NextFunction, Request, Response } from 'express';
import i18next from 'i18next';

export default async function i18nMiddleware(req: Request, res: Response, next: NextFunction) {
  const queryLocale = req.query?.lng as string;
  const cookieLocale = req.cookies?.i18next as string;
  const headerLocale = req.headers['accept-language']?.split(',')[0] as string;

  let currentLanguage = queryLocale || cookieLocale || headerLocale;

  res.cookie('i18next', currentLanguage);

  await i18next.changeLanguage(currentLanguage);

  return next();
}
