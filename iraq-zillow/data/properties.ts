import { Property as PropertyType, Agent, TranslatedProperty } from "@/types/property";
import { translations } from "@/data/translations";
import type { Language } from "@/data/translations";

// Define agents first so we can reference them in properties
export const agents: Agent[] = [
  {
    id: 101,
    name: "Ahmed Al-Rashid",
    image:
      "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i0%2Fhs47d8hgmehm4gyjk6t9r5f590i&option=N&h=760&permitphotoenlargement=false",
    phone: "+964 123 456 789",
    whatsapp: "+964 123 456 789",
    email: "ahmed@iraqrealestate.com",
    location: "Baghdad, Iraq",
    languages: ["Arabic", "English"],
    experience: "10+ years",
    bio: {
      en: "Ahmed is a seasoned real estate professional with extensive knowledge of the Baghdad property market. Specializing in luxury properties and commercial real estate, he has helped countless families find their dream homes.",
      ar: "أحمد هو خبير عقاري متمرس لديه معرفة واسعة بسوق العقارات في بغداد. متخصص في العقارات الفاخرة والعقارات التجارية، وقد ساعد عائلات لا تحصى في العثور على منازل أحلامهم."
    },
    linkedin: "https://www.linkedin.com/in/ahmed-al-rashid",
    instagram: "https://www.instagram.com/ahmed_realtor",
    rating: 4.8,
    reviewCount: 56,
    listings: [], // We'll populate this after defining properties
  },
  {
    id: 102,
    name: "Sara Hussein",
    image:
      "https://www.compass.com/m/13/aab86053-8e39-4fb2-b6bd-590fb1c5b771/origin.jpg",
    phone: "+964 234 567 890",
    whatsapp: "+964 234 567 890",
    email: "sara@iraqrealestate.com",
    location: "Erbil, Iraq",
    languages: ["Arabic", "English", "Kurdish"],
    experience: "7 years",
    bio: {
      en: "Sara is a dynamic real estate agent specializing in residential properties in Erbil. Her deep understanding of the local market and commitment to client satisfaction have earned her a stellar reputation.",
      ar: "سارة وكيلة عقارات نشطة متخصصة في العقارات السكنية في أربيل. فهمها العميق للسوق المحلي والتزامها برضا العملاء أكسبها سمعة متميزة."
    },
    linkedin: "https://www.linkedin.com/in/sara-hussein",
    instagram: "https://www.instagram.com/sara_homes",
    rating: 4.9,
    reviewCount: 42,
    listings: [], // We'll populate this after defining properties
  },
  {
    id: 103,
    name: "Zaid Al-Basri",
    image:
      "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/sjgdm5f4udjhxypnuyp9",
    phone: "+964 345 678 901",
    whatsapp: "+964 345 678 901",
    email: "zaid@iraqrealestate.com",
    location: "Basra, Iraq",
    languages: ["Arabic", "English", "Persian"],
    experience: "5 years",
    bio: {
      en: "Zaid specializes in waterfront properties in Basra, combining his local expertise with a modern approach to real estate. His portfolio includes some of the most prestigious properties in the region.",
      ar: "زيد متخصص في العقارات المطلة على الواجهة البحرية في البصرة، يجمع بين خبرته المحلية ونهجه العصري في العقارات. تتضمن محفظته بعضاً من أرقى العقارات في المنطقة."
    },
    linkedin: "https://www.linkedin.com/in/zaid-al-basri",
    instagram: "https://www.instagram.com/zaid_realty",
    rating: 4.7,
    reviewCount: 38,
    listings: [], // We'll populate this after defining properties
  },
];

export const properties: PropertyType[] = [
  {
    id: 1,
    title: {
      en: "Royal Palace Villa in Basra",
      ar: "فيلا قصر ملكي في البصرة"
    },
    description: {
      en: "Welcome to this magnificent villa designed like a royal palace, located in the prestigious Al-Jazair district of Basra. This luxurious property features 11 bedrooms, each with its own bathroom, making it perfect for large families or those who appreciate grand living. The property includes a swimming pool, electronic gate system, fully furnished interiors, complete fitted kitchens, large living and dining areas, and a separate annex with additional rooms. Modern amenities include central air conditioning, smart home features, and comprehensive security systems.",
      ar: "مرحباً بكم في هذه الفيلا الرائعة المصممة كقصر ملكي، تقع في حي الجزائر الراقي في البصرة..."
    },
    price: 1200000, // $1.2M USD equivalent
    location: {
      en: "Al-Jazair District, Basra",
      ar: "حي الجزائر، البصرة"
    },
    type: "villa",
    beds: 11,
    baths: 10,
    area: 2512,
    images: [
      "https://images.bayut.sa/thumbnails/4287327-800x600.webp",
      "https://images.bayut.sa/thumbnails/4287328-800x600.webp",
      "https://images.bayut.sa/thumbnails/4287329-800x600.webp",
      "https://images.bayut.sa/thumbnails/4287330-800x600.webp",
      "https://images.bayut.sa/thumbnails/4287331-800x600.webp"
    ],
    features: [
      "swimming_pool",
      "maid_room",
      "electronic_gates",
      "smart_home",
      "Furnished",
      "Central AC",
      "multiple_kitchens",
      "separate_annex",
      "storage"
    ],
    agent: agents[2], // Zaid (Basra specialist)
  },
  {
    id: 5,
    title: {
      en: "Spacious Modern Villa in Baghdad",
      ar: "فيلا عصرية مكونة في بغداد"
    },
    description: {
      en: "Impressive modern villa in the upscale Al-Mansour district of Baghdad. This expansive property offers 2,450 square meters of luxurious living space with northern exposure for optimal natural lighting. The villa features 6 bedrooms, 5 bathrooms, and sits on a perfectly proportioned lot (70m x 35m). Recently constructed with high-end finishes and ready for immediate occupancy. The property comes with all essential utilities and represents an exceptional opportunity in one of Baghdad's most sought-after neighborhoods.",
      ar: "فيلا عصرية مكونة في بغداد، المنصور، تقع على حجم مثالي من الأرض (70 مترًا × 35 مترًا)، وتم بناؤها مؤخرًا بتشطيبات عالية المستوى وجاهزة للاستلام الفوري..."
    },
    price: 1100000, // $1.1M USD equivalent
    location: {
      en: "Al-Mansour, Baghdad",
      ar: "المنصور، بغداد"
    },
    type: "villa",
    beds: 6,
    baths: 5,
    area: 2450,
    images: [
      "https://images.bayut.sa/thumbnails/4019747-800x600.webp",
      "https://images.bayut.sa/thumbnails/4019748-800x600.webp",
      "https://images.bayut.sa/thumbnails/4019749-800x600.webp",
      "https://images.bayut.sa/thumbnails/4019750-800x600.webp",
      "https://images.bayut.sa/thumbnails/4032216-800x600.webp"
    ],
    features: [
      "modern_design",
      "high_end_finishes",
      "all_utilities",
      "large_garden",
      "security_system"
    ],
    agent: agents[0], // Ahmed (Baghdad specialist)
  },
  {
    id: 6,
    title: {
      en: "Grand Family Villa in Erbil",
      ar: "فيلا عائلية كبيرة في أربيل"
    },
    description: {
      en: "Expansive family villa located in the prestigious Dream City district of Erbil. This remarkable property spans 2,250 square meters of living space and features an impressive 15 bedrooms and 5 bathrooms, making it ideal for large extended families or those requiring abundant space. The villa offers modern amenities throughout and represents one of the largest residential properties available in the area. Recently renovated and ready for immediate occupancy.",
      ar: "فيلا عائلية كبيرة في مدينة دريم سيتي، أربيل، تمتد على مساحة 2,250 متر مربع من المساحة المعيشية وتتميز بما يلي: 15 غرفة نوم و5 حمامات، مما يجعلها مثالية للعائلات الموسعة أو الأفراد الذين يحتاجون إلى مساحة كبيرة..."
    },
    price: 950000, // $950K USD equivalent
    location: {
      en: "Dream City, Erbil",
      ar: "دريم سيتي، أربيل"
    },
    type: "villa",
    beds: 15,
    baths: 5,
    area: 2250,
    images: [
      "https://images.bayut.sa/thumbnails/3819200-800x600.webp",
      "https://images.bayut.sa/thumbnails/3819201-800x600.webp",
      "https://images.bayut.sa/thumbnails/3819202-800x600.webp",
      "https://images.bayut.sa/thumbnails/3819203-800x600.webp",
      "https://images.bayut.sa/thumbnails/3819204-800x600.webp"
    ],
    features: [
      "multiple_living_areas",
      "modern_kitchen",
      "family_living",
      "spacious_layout",
      "private_garden",
      "security_system",
      "parking_space"
    ],
    agent: agents[1], // Sara (Erbil specialist)
  },
  {
    id: 7,
    title: {
      en: "Luxury Palace Villa in Al-Mansour",
      ar: "فيلا قصر ملكية في المنصور، بغداد"
    },
    description: {
      en: `Magnificent palace-style villa in Baghdad's prestigious Al-Mansour district, adjacent to the diplomatic zone. This extraordinary property spans 2,500 square meters of built area on a 1,500 square meter corner plot.

Key Features:
- Corner plot with 30m western facade and 50m southern facade
- Four levels including basement and roof
- Basement features a grand hall with entertainment system, cinema room, indoor pool with garden
- Ground floor includes formal reception halls, 30-person dining room, and professional kitchens
- First floor houses 6 master bedroom suites with luxury bathrooms and dressing rooms
- Roof level includes service quarters, winter lounge, and additional facilities
- Premium finishes throughout including marble flooring, crystal chandeliers, and classic detailing
- Separate entrances for family and guests
- Staff quarters and driver accommodations
- Professional landscaping with automated irrigation
- Full smart home integration and security systems`,
      ar: `فيلا قصر ملكية في بغداد، المنصور، تقع على حجم 2,500 متر مربع من المساحة المبنية على حجم 1,500 متر مربع من الأرض، وتتميز بما يلي:

الميزات الرئيسية:
- حجم الأرض مع جانب غربي بارتفاع 30 مترًا وجانب جنوبي بارتفاع 50 مترًا
- أربعة طوابق تشمل المستوى السفلي والأعلى
- المستوى السفلي يحتوي على صالة كبيرة مع نظام الترفيه، غرفة سينما، مسبح داخلي مع حديقة
- المستوى الأرضي يحتوي على صالات استقبال رسمية، غرفة جلوس لـ 30 شخصًا ومطابخ محترفة
- المستوى الأول يحتوي على 6 غرف نوم علوية مع حمامات عالية الجودة وغرف التزيين
- المستوى العلوي يحتوي على سكن الخدمات، غرفة جلوس الشتاء، ومميزات إضافية
- تشطيبات كاملة من الرخام وثريات الكريستال والتفصيل الكلاسيكي
- مداخل منفصلة للعائلة والضيوف
- سكن الخدمات والمواصلات
- إنارة الحدائق المنسقة مع الري
- الدمج الكامل لنظام المنزل الذكي ونظام الأمن
- أنظمة الأمن الكاملة`
    },
    price: 2500000, // $2.5M USD equivalent
    location: {
      en: "Diplomatic Zone, Al-Mansour, Baghdad",
      ar: "منطقة الدبلوماسية، المنصور، بغداد"
    },
    type: "palace",
    beds: 8,
    baths: 12,
    area: 2500,
    images: [
      "https://images.bayut.sa/thumbnails/4156646-800x600.webp",
      "https://images.bayut.sa/thumbnails/4156647-800x600.webp",
      "https://images.bayut.sa/thumbnails/4156648-800x600.webp",
      "https://images.bayut.sa/thumbnails/4156649-800x600.webp",
      "https://images.bayut.sa/thumbnails/4156650-800x600.webp"
    ],
    features: [
      "indoor_swimming_pool",
      "cinema",
      "smart_home",
      "elevator",
      "professional_kitchen",
      "staff_quarters",
      "multiple_entrances",
      "landscaped_gardens",
      "premium_finishes",
      "security_system",
      "drivers_quarters",
      "entertainment_hall",
      "marble_flooring",
      "crystal_chandeliers"
    ],
    agent: agents[0], // Ahmed (Baghdad specialist)
  },
  {
    id: 8,
    title: {
      en: "Modern Family Villa in Erbil",
      ar: "فيلا عائلية عصرية في أربيل"
    },
    description: {
      en: "Elegant contemporary villa in Erbil's prestigious Dream City district. This well-proportioned property offers 839 square meters of refined living space, featuring 6 bedrooms and 5 bathrooms. The villa combines modern architectural design with practical family living, making it an ideal choice for those seeking a sophisticated yet comfortable home. Recently completed with high-quality finishes throughout and ready for immediate occupancy.",
      ar: "فيلا عائلية عصرية في مدينة دريم سيتي، أربيل، تتميز بتصميم معماري عصري مع الحياة العائلية المميزة، مما يجعلها اختيارًا مثاليًا للأفراد الذين يبحثون عن منزل سهل الاستخدام والراحة المريحة..."
    },
    price: 750000, // $750K USD equivalent
    location: {
      en: "Dream City, Erbil",
      ar: "دريم سيتي، أربيل"
    },
    type: "villa",
    beds: 6,
    baths: 5,
    area: 839,
    images: [
      "https://images.bayut.sa/thumbnails/4035250-800x600.webp",
      "https://images.bayut.sa/thumbnails/4010028-800x600.webp",
      "https://images.bayut.sa/thumbnails/3833325-800x600.webp",
      "https://images.bayut.sa/thumbnails/4010029-800x600.webp",
      "https://images.bayut.sa/thumbnails/4010030-800x600.webp"
    ],
    features: [
      "modern_design",
      "high_end_finishes",
      "family_living",
      "private_garden",
      "security_system",
      "spacious_layout",
      "multiple_living_areas"
    ],
    agent: agents[1], // Sara (Erbil specialist)
  },
  {
    id: 9,
    title: {
      en: "Established Family Villa in Baghdad",
      ar: "فيلا عائلية محترمة في بغداد"
    },
    description: {
      en: "Well-maintained villa in Baghdad's prestigious Yarmouk district, offering 1,960 square meters of refined living space. Built 9 years ago with excellent attention to detail, this southwest-facing property features 7 bedrooms and 5 bathrooms. The villa comes complete with modern infrastructure including fiber optic connectivity, comprehensive drainage systems, and all essential utilities. Perfect for families seeking an established home in one of Baghdad's most desirable neighborhoods.",
      ar: "فيلا عائلية محترمة في مدينة بغداد، حي اليرموك، توفر مساحة معيشية محترمة قدرها 1,960 متر مربع، تم بناؤها قبل 9 سنوات بالتركيز الجيد على التفصيل، وتتميز بما يلي: 7 غرف نوم و5 حمامات، وتأتي مع البنية التحتية الحديثة التي تشمل الاتصالات الضوئية الأليا، التصريف المياه، وكل الخدمات الأساسية اللازمة..."
    },
    price: 850000, // $850K USD equivalent
    location: {
      en: "Yarmouk, Baghdad",
      ar: "اليرموك، بغداد"
    },
    type: "villa",
    beds: 7,
    baths: 5,
    area: 1960,
    images: [
      "https://images.bayut.sa/thumbnails/4019569-800x600.webp",
      "https://images.bayut.sa/thumbnails/4019570-800x600.webp",
      "https://images.bayut.sa/thumbnails/4019571-800x600.webp"
    ],
    features: [
      "fiber_optic",
      "modern_utilities",
      "flood_drainage",
      "southwest_exposure",
      "established_property",
      "family_living",
      "spacious_layout",
      "multiple_living_areas"
    ],
    agent: agents[0], // Ahmed (Baghdad specialist)
  }
];

// Populate agent listings
agents.forEach(agent => {
  agent.listings = properties
    .filter(property => property.agent.id === agent.id)
    .map(property => ({
      id: property.id,
      title: property.title.en,
      price: property.price,
      image: property.images[0],
    }));
});

export function getRandomFeaturedProperties(count: number = 3): PropertyType[] {
  const shuffled = [...properties].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function searchProperties(
  query: string,
  filters: {
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    beds?: number;
  }
): PropertyType[] {
  return properties.filter((property) => {
    const matchesQuery =
      !query ||
      property.title.en.toLowerCase().includes(query.toLowerCase()) ||
      property.location.en.toLowerCase().includes(query.toLowerCase());

    const matchesType =
      !filters.type ||
      filters.type === "all" ||
      property.type === filters.type;

    const matchesPrice =
      (!filters.minPrice || property.price >= filters.minPrice) &&
      (!filters.maxPrice || property.price <= filters.maxPrice);

    const matchesBeds = !filters.beds || property.beds >= filters.beds;

    return matchesQuery && matchesType && matchesPrice && matchesBeds;
  });
}

export function getAgent(id: number): Agent | undefined {
  return agents.find(agent => agent.id === id);
}

export function getTranslatedProperty(property: PropertyType, language: Language): TranslatedProperty {
  return {
    ...property,
    title: property.title[language],
    description: property.description[language],
    location: property.location[language],
    features: property.features.map(feature => 
      translations[language].features[feature as keyof typeof translations.en.features] || feature
    )
  };
}

export function getTranslatedAgent(agent: Agent, language: Language): Agent & { bio: string } {
  return {
    ...agent,
    bio: agent.bio[language]
  };
}