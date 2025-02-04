"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Home, Building2, Landmark, ArrowRight, Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { properties, getTranslatedProperty } from "@/data/properties"
import { useLanguage } from "@/components/LanguageProvider"
import { useTranslations } from "@/hooks/useTranslations"
import { PropertyCard } from "@/components/PropertyCard"

export default function LandingPage() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("location");
    const type = formData.get("type");
    
    router.push(`/search?q=${query}&type=${type}`);
  };

  // Get translated properties for the featured section
  const featuredProperties = properties.slice(0, 3).map(property => 
    getTranslatedProperty(property, language)
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 z-10 bg-transparent py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Iraq Real Estate</div>
          <nav className="space-x-6">
            <a href="#" className="text-white hover:text-primary">
              {t("nav.home")}
            </a>
            <a href="#" className="text-white hover:text-primary">
              {t("nav.properties")}
            </a>
            <a href="#" className="text-white hover:text-primary">
              {t("nav.agents")}
            </a>
            <a href="#" className="text-white hover:text-primary">
              {t("nav.about")}
            </a>
            <select 
              className="bg-transparent text-white border-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "ar")}
            >
              <option value="en" className="text-foreground">
                English
              </option>
              <option value="ar" className="text-foreground">
                العربية
              </option>
            </select>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-screen">
          <img
            src="/saad-salim-8eJTLS3lIiw-unsplash.jpg"
            alt="Luxurious Iraqi cityscape"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="w-full max-w-4xl">
              <Card className="bg-white/10 backdrop-blur-md border-none shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSearch}>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-grow">
                        <Input
                          name="location"
                          type="text"
                          placeholder={t("hero.search.location")}
                          className="w-full bg-white/80 border-none text-foreground placeholder-muted-foreground"
                        />
                      </div>
                      <Select name="type">
                        <SelectTrigger className="w-full md:w-[200px] bg-white/80 border-none text-foreground">
                          <SelectValue placeholder={t("hero.search.propertyType")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t("hero.search.types.all")}</SelectItem>
                          <SelectItem value="villa">{t("hero.search.types.villa")}</SelectItem>
                          <SelectItem value="apartment">{t("hero.search.types.apartment")}</SelectItem>
                          <SelectItem value="house">{t("hero.search.types.house")}</SelectItem>
                          <SelectItem value="land">{t("hero.search.types.land")}</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8">
                        <Search className="mr-2" />
                        {t("hero.search.button")}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-2 text-foreground text-center">
            {t("featured.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            {t("featured.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2 text-foreground text-center">
              {t("categories.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              {t("categories.subtitle")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Home, label: t("categories.types.villas"), count: 150, type: "villa" },
                { icon: Building2, label: t("categories.types.apartments"), count: 320, type: "apartment" },
                { icon: Landmark, label: t("categories.types.commercial"), count: 80, type: "commercial" },
                { icon: MapPin, label: t("categories.types.land"), count: 95, type: "land" },
              ].map(({ icon: Icon, label, count, type }, i) => (
                <Link key={i} href={`/search`}>
                  <Card
                    className="group cursor-pointer transition-all duration-300 hover:shadow-xl"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-gray-200 rounded-full group-hover:bg-primary transition-colors">
                        <Icon
                          size={40}
                          className="text-primary group-hover:text-white transition-colors"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{label}</h3>
                      <p className="text-muted-foreground">{t("categories.properties", { count })}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-2 text-foreground text-center">
            {t("cities.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            {t("cities.subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: t("cities.baghdad"),
                nameEn: "Baghdad",
                image: "/baghdad.png",
                count: 523,
              },
              {
                name: t("cities.erbil"),
                nameEn: "Erbil",
                image: "/erbil.png",
                count: 248,
              },
              {
                name: t("cities.basra"),
                nameEn: "Basra",
                image: "/basra.png",
                count: 185,
              },
              {
                name: t("cities.mosul"),
                nameEn: "Mosul",
                image: "/mosul.png",
                count: 137,
              },
            ].map((city, index) => (
              <Link
                key={index}
                href={`/search?q=${city.nameEn}`}
                className="block"
              >
                <Card
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64">
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={`${city.nameEn} cityscape`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60 flex items-end justify-start p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                        <p className="text-sm">{t("cities.properties", { count: city.count })}</p>
                      </div>
                    </div>
                  </div>
                  <CardFooter className="p-4 bg-white">
                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:bg-primary/10 transition-colors"
                    >
                      {t("cities.explore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("footer.company")}</h3>
              <p className="text-muted">{t("footer.tagline")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("nav.properties")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("nav.agents")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h4>
              <p>Email: info@iraqrealestate.com</p>
              <p>Phone: +964 123 456 789</p>
              <p>Address: Baghdad, Iraq</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2025 Iraq Real Estate. {t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

