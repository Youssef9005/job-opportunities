"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import FeatureCard from "../features-card";
import { ProductFeaturesItems } from "@/public/assets/product-features-items";

export default function FeatureCardSwiper() {
  return (
    <div className="w-4/5 p-5">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper p-5"
      >
        {ProductFeaturesItems.map((card) => (
          <SwiperSlide key={card.title}>
            <FeatureCard
              title={card.title}
              description={card.description}
              linkText={card.linkTitle}
              linkUrl={card.linkUrl}
              className="md:col-span-1 flex-center"
              alwaysShowContent={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
