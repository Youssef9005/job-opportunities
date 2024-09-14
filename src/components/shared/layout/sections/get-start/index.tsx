"use client";

import useWindowSize from "@/src/hooks/use-window-size";
import GetStartImage from "./components/get-start-image";
import GetStartTitle from "./components/get-start-title";
import ProductFeatures from "../product-features";
import FeatureCardSwiper from "../product-features/components/swiper";

export default function GetStart() {
  const { windowSize } = useWindowSize();

  return (
    <section className="relative">
      <div className="w-full my-8 flex-center flex-col gap-y-7">
        <div className="grid-overlay w-3/4 sm:w-1/2 -z-50"></div>
        <GetStartTitle />
        <GetStartImage />

        {windowSize.windowWidth < 740 ? (
          <FeatureCardSwiper />
        ) : (
          <ProductFeatures />
        )}
        
      </div>
    </section>
  );
}
