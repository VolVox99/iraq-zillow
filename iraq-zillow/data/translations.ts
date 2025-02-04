import propertyEn from '@/messages/property/en.json';
import propertyAr from '@/messages/property/ar.json';

export const translations = {
  en: propertyEn,
  ar: propertyAr
} as const;

export type Language = 'en' | 'ar'; 