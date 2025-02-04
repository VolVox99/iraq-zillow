import { useLanguage } from "@/components/LanguageProvider";
import propertyEn from "@/messages/property/en.json";
import propertyAr from "@/messages/property/ar.json";
import mainEn from "@/messages/en.json";
import mainAr from "@/messages/ar.json";

type TranslationsType = typeof propertyEn & typeof mainEn;

const translations = {
  en: { ...propertyEn, ...mainEn },
  ar: { ...propertyAr, ...mainAr }
} as const;

export function useTranslations() {
  const { language } = useLanguage();

  const t = (key: string, params?: { count?: number }) => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value === "string" && params?.count !== undefined) {
      return value.replace("{count}", params.count.toString());
    }

    return value || key;
  };

  return { t };
} 