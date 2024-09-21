import { useState } from "react";
import FeatureCard from "./components/features-card";
import { motion } from "framer-motion";
import { ProductFeaturesItems } from "@/public/assets/product-features-items";

export default function ProductFeatures() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <motion.div
      className="relative -top-24 sm:-top-28 w-full grid grid-cols-4 gap-5 p-5"
      layout
    >
      {ProductFeaturesItems.map((card, index) => (
        <FeatureCard
          key={card.title}
          title={card.title}
          description={card.description}
          linkText={card.linkTitle}
          linkUrl={card.linkUrl}
          className={`transition-all ${
            index === 0
              ? hoveredCard === null || hoveredCard === index
                ? "md:col-span-2"
                : "md:col-span-1"
              : hoveredCard === index
              ? "md:col-span-2"
              : "md:col-span-1"
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          isHovered={hoveredCard === index}
          alwaysShowContent={index === 0 ? hoveredCard === null : false}
        />
      ))}
    </motion.div>
  );
}
