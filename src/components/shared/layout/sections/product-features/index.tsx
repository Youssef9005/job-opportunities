import FeatureCard from "./components/features-card";

export default function ProductFeatures() {
  return (
    <div className="relative -top-24 sm:-top-28 w-full grid grid-cols-4 gap-5 p-5">
      <FeatureCard
        title="Open source product"
        description="Cotopia Lite is an open-source product, and its design helps remote teams all around the world contribute better and work more efficiently."
        linkText="Github"
        linkUrl="/"
        className="md:col-span-2"
      />
      <FeatureCard title="Totally Remote" className="md:col-span-1 flex-center"/>
      <FeatureCard title="Crypto Payment" className="md:col-span-1 flex-center"/>
    </div>
  );
}