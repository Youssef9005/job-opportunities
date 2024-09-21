"use client";
import React, { useRef, useState } from "react";
import Button from "@/src/components/ui/button";
import PositionCard from "./components/position-card";
import JobModal from "./modal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Position {
  name: string;
  tech: string;
}

interface JobModalHandle {
  open: () => void;
  close: () => void;
}

const positions: Position[] = [
  { name: "Front End Developer", tech: "React" },
  { name: "Backend Developer", tech: "PHP/Laravel" },
];

export default function Positions() {
  const modalRef = useRef<JobModalHandle | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null
  );

  function handleOpen(position: Position) {
    setSelectedPosition(position);
    modalRef.current?.open();
  }

  function handleClose() {
    setSelectedPosition(null);
    modalRef.current?.close();
  }

  return (
    <section className="flex-center flex-col p-5 gap-y-5">
      <h1 className="text-5xl font-medium text-center">Open Positions</h1>

      <div className="container grid grid-cols-2 gap-5">
        {positions.map((position) => (
          <PositionCard
            key={position.name}
            positionName={position.name}
            techName={position.tech}
            onClick={() => handleOpen(position)} 
          />
        ))}
      </div>

      <JobModal
        ref={modalRef}
        onClose={handleClose}
        jobTitle={selectedPosition?.name || ""}
      />

      <Button className="text-white bg-main-color w-full transition-all hover:bg-second-color flex-center gap-x-2">
        <Link
          href="https://survey.porsline.ir/s/sa6zHflT"
          target="_blank"
          className="underline"
        >
          Apply now
        </Link>
        <ArrowRight />
      </Button>
    </section>
  );
}
