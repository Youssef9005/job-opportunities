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
            description="Remote work involves performing job duties from home or any location outside the traditional office. You can choose your working hours, with a minimum of 50 and a maximum of 20 hours pre month, while using the current version of Cotopia as your workplace"
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
