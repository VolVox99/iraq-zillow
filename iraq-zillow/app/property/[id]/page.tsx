"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Bed, Bath, Maximize, MapPin, Phone, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { properties, getTranslatedProperty } from "@/data/properties"
import { useLanguage } from "@/components/LanguageProvider"
import { useTranslations } from "@/hooks/useTranslations"

export default function PropertyDetails() {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const { language } = useLanguage()
  const { t } = useTranslations()
  
  const rawProperty = properties.find((p) => p.id === Number(id)) || properties[0]
  const property = getTranslatedProperty(rawProperty, language)

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative h-[400px] mb-4">
              <img
                src={property.images[activeImage] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto mb-6">
              {property.images.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`${property.title} - Image ${index + 1}`}
                  className={`w-[100px] h-[100px] object-cover rounded cursor-pointer ${
                    activeImage === index ? "border-2 border-primary" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <p className="text-2xl font-bold text-primary mb-4">
              ${property.price.toLocaleString()}
            </p>
            <div className="flex items-center text-foreground mb-4">
              <MapPin className="mr-2" />
              {property.location}
            </div>
            <p className="mb-6">{property.description}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Bed className="mr-2 text-foreground" />
                <span>{t("property_details.beds", { count: property.beds })}</span>
              </div>
              <div className="flex items-center">
                <Bath className="mr-2 text-foreground" />
                <span>{t("property_details.baths", { count: property.baths })}</span>
              </div>
              <div className="flex items-center">
                <Maximize className="mr-2 text-foreground" />
                <span>{t("property_details.area", { count: property.area })}</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">{t("property_details.features")}</h2>
              <div className="grid grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">{t("property_details.location")}</h2>
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/map.png"
                  alt="Property Location Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <Card className="mb-6">
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  src={property.agent.image || "/placeholder.svg"}
                  alt={property.agent.name}
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{property.agent.name}</h3>
                  <p className="text-sm text-foreground">{t("property_details.agent")}</p>
                </div>
                <Link href={`/agent/${property.agent.id}`} passHref>
                  <Button variant="outline" className="ml-auto">
                    {t("property_details.viewProfile")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.location.href = `tel:${property.agent.phone}`}
              >
                <Phone className="mr-2" />
                {t("property_details.callAgent")}
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-primary text-primary"
                onClick={() => window.location.href = `mailto:${property.agent.email}`}
              >
                <Mail className="mr-2" />
                {t("property_details.emailAgent")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

