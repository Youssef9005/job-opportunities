import Button from "@/src/components/ui/button";
import PositionCard from "./components/position-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Positions() {
  return (
    <section className="flex-center flex-col p-5 gap-y-5">
      <h1 className="text-5xl font-medium text-center">Open Positions</h1>

      <div className="container grid grid-cols-2 gap-5">
        <PositionCard positionName="Front End Developer" techName="React" />
        <PositionCard positionName="Backend Developer" techName="PHP/Laravel" />
      </div>

      <Button className="text-white bg-main-color w-full transition-all hover:bg-second-color flex-center gap-x-2">
        <Link href="/" className="underline">Apply now</Link>
        <ArrowRight />
      </Button>
    </section>
  );
}
