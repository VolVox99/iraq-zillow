"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useTranslations } from "@/hooks/useTranslations";
import { Property } from "@/types/property";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { language } = useLanguage();
  const { t } = useTranslations();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title[language]}
          className="w-full h-[300px] object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-white">
          {t("featured.badge")}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {property.title[language]}
        </h3>
        <p className="text-2xl font-bold text-primary mb-4">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex justify-between text-muted-foreground">
          <div className="flex items-center">
            <Bed className="mr-2" size={18} />
            <span>{t("property_details.beds", { count: property.beds })}</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-2" size={18} />
            <span>{t("property_details.baths", { count: property.baths })}</span>
          </div>
          <div className="flex items-center">
            <Square className="mr-2" size={18} />
            <span>{t("property_details.area", { count: property.area })}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}