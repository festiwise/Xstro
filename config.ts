import dotenv from 'dotenv';
dotenv.config();

export const environment = {
  SESSION: process.env.SESSION ?? 'XSTRO_2114_C943_8D5F',
  SESSION_URL: process.env.SESSION_URL ?? 'XSTRO_2114_C943_8D5F',
  DATABASE_URI: process.env.DATABASE_URI ?? 'database.db',
  HUGGING_FACE_KEY: process.env.HUGGING_FACE_KEY ?? '',
  META_DATA: process.env.META_DATA ?? 'AstroX11;Xstro',
  TIME_ZONE: process.env.TIME_ZONE || process.env.TZ || '',
  WARN_COUNT: Number(process.env.WARN_COUNT ?? 3),
  DEBUG: process.env.DEBUG || false,
};
