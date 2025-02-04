"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Instagram, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAgent, getTranslatedAgent } from "@/data/properties"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/components/LanguageProvider"

export default function AgentProfile() {
  const { id } = useParams()
  const rawAgent = getAgent(Number(id))
  const { t } = useTranslations()
  const { language } = useLanguage()
  
  // Get the translated version of the agent
  const agent = rawAgent ? getTranslatedAgent(rawAgent, language) : undefined

  if (!agent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("agent.notFound")}</h1>
          <Link href="/" className="text-primary hover:underline">
            {t("common.returnHome")}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-cream py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            {t("nav.home")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-[200px] h-[200px] rounded-full mx-auto mb-4 object-cover"
                />
                <h1 className="text-2xl font-bold text-center mb-2">{agent.name}</h1>
                <div className="flex items-center justify-center text-foreground mb-4">
                  <MapPin className="mr-2" size={16} />
                  {agent.location}
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span className="font-bold mr-1">{agent.rating}</span>
                  <span className="text-foreground">
                    ({agent.reviewCount} {t("agent.reviews")})
                  </span>
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#20BD5B] text-white"
                    onClick={() => window.open(`https://wa.me/${agent.whatsapp.replace(/\D/g, '')}`, '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t("property_details.whatsappAgent")}
                  </Button>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = `tel:${agent.phone}`}
                  >
                    <Phone className="mr-2" size={16} />
                    {t("property_details.callAgent")}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary"
                    onClick={() => window.location.href = `mailto:${agent.email}`}
                  >
                    <Mail className="mr-2" size={16} />
                    {t("property_details.emailAgent")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{t("agent.about")} {agent.name}</h2>
                <p className="mb-4">{agent.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold">{t("agent.experience")}</h3>
                    <p>{agent.experience}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{t("agent.languages")}</h3>
                    <p>{agent.languages.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-4">{t("agent.currentListings")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agent.listings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="p-4">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-32 object-cover mb-2 rounded"
                    />
                    <h3 className="font-bold mb-1">{listing.title}</h3>
                    <p className="text-primary font-bold">${listing.price.toLocaleString()}</p>
                    <Link href={`/property/${listing.id}`} passHref>
                      <Button variant="outline" className="w-full mt-2">
                        {t("common.viewDetails")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#5D6D7E] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">{t("footer.company")}</h3>
              <p>{t("footer.tagline")}</p>
            </div>
            <div className="flex space-x-4">
              <a href={agent.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-primary" />
              </a>
              <a href={agent.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="text-white hover:text-primary" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

