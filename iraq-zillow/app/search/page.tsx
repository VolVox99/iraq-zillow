"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { searchProperties, getTranslatedProperty } from "@/data/properties";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslations } from "@/hooks/useTranslations";
import { PropertyCard } from "@/components/PropertyCard";
import type { Property } from "@/types/property";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "all",
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    beds: searchParams.get("beds") ? Number(searchParams.get("beds")) : undefined,
  });

  useEffect(() => {
    const query = searchParams.get("q") || "";
    const results = searchProperties(query, filters);
    setProperties(results);
  }, [searchParams, filters]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              {t("nav.home")}
            </Link>
            <div className="flex items-center gap-4">
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="w-[180px]">
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
              <Input
                type="number"
                placeholder={t("property_details.minPrice")}
                className="w-[150px]"
                value={filters.minPrice || ""}
                onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) || undefined })}
              />
              <Input
                type="number"
                placeholder={t("property_details.maxPrice")}
                className="w-[150px]"
                value={filters.maxPrice || ""}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) || undefined })}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link href={`/property/${property.id}`} key={property.id}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              {t("search.noResults")}
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 