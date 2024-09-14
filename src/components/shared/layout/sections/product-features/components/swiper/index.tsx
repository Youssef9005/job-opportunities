"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import FeatureCard from "../features-card";

export default function FeatureCardSwiper() {
  return (
    <div className="w-5/6 p-5">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper p-5"
      >
        <SwiperSlide>
          <FeatureCard
            title="Payment"
            description="Payments are made monthly in cryptocurrency (USDT) and are based
              on your flexible working hours. Currently, the average rate ranges
              from $2 to $7 per hour. Therefore, this may not be ideal as a
              full-time job if you live in a country where the average monthly
              salary exceeds $600 (or $7,200 annually)."
            linkText="Country income"
            linkUrl="/"
            className="md:col-span-2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard
            title="Totally Remote"
            description="At Cotopia, we are committed to providing a fully remote and flexible work environment, allowing teams from around the world to collaborate and work efficiently without being tied to a specific location. Whether you’re working from home, a café, or even while traveling, we ensure seamless communication and effective coordination, boosting productivity and giving you the freedom to achieve the perfect work-life balance."
            className="md:col-span-1 flex-center"
          />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard
            title="Open source product"
            description="Cotopia Lite is an open-source product, and its design helps remote teams all around the world contribute better and work more efficiently."
            linkText="Github"
            linkUrl="/"
            className="md:col-span-1 flex-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
