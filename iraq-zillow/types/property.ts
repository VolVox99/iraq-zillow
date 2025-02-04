export interface TranslatedContent {
  en: string;
  ar: string;
}

export type TranslatedText = {
  en: string;
  ar: string;
};

export type Agent = {
  id: number;
  name: string;
  image: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  languages: string[];
  experience: string;
  bio: TranslatedText;
  linkedin: string;
  instagram: string;
  rating: number;
  reviewCount: number;
  listings: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
};

export interface Property {
  id: number;
  title: TranslatedContent;
  description: TranslatedContent;
  price: number;
  location: TranslatedContent;
  type: string;
  beds: number;
  baths: number;
  area: number;
  images: string[];
  features: string[];
  agent: Agent;
}

export interface TranslatedProperty extends Omit<Property, 'title' | 'description' | 'location'> {
  title: string;
  description: string;
  location: string;
}
