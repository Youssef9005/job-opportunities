"use client";
import useWindowSize from "@/src/hooks/use-window-size";
import Step from "./components/step";
import BackgroundPattern from "./components/bg-pattern";

const steps = [
  { id: 1, time: "3 min" },
  { id: 2, time: "15 min" },
  { id: 3, time: "Start your remote position in Cotopia" },
];

export default function StepsStartWork() {
  const { windowSize } = useWindowSize();

  return (
    <section className="flex-center flex-col p-5 gap-y-4">
      <div className="flex-center flex-col gap-y-4">
        <h1 className="text-5xl font-medium text-center">
          The Fastest onboarding ever
        </h1>
        <p className="text-base text-gray-600 font-medium text-center">
          Start your work journey at Cotopia in under 20 minutes
        </p>
      </div>

      <div className="relative z-50 flex flex-col sm:flex-row items-center justify-evenly w-full bg-gray-100 gap-y-10 p-4 rounded-md border">
        {steps.map((step) => (
          <Step key={step.id} step={step} />
        ))}

        <BackgroundPattern windowWidth={windowSize.windowWidth} />
      </div>
    </section>
  );
}
