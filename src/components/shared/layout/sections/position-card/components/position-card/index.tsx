import React from "react";
import Button from "@/src/components/ui/button";
import { Share2 } from "lucide-react";

interface PositionCardProps {
  positionName: string;
  techName: string;
  onClick: () => void; 
}

export default function PositionCard({
  positionName,
  techName,
  onClick, 
}: PositionCardProps) {
  return (
    <div className="bg-gray-100 col-span-2 md:col-span-1 p-4 border rounded-md flex-1 flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-4 bg-white border rounded-md p-2">
        <div className="flex-between w-full">
          <span className="bg-gray-100 p-1 rounded-md">23 May, 2023</span>
          <Share2 />
        </div>
        <h1>
          {positionName} <span className="text-gray-400">({techName})</span>
        </h1>
      </div>

      <div className="w-full flex-between">
        $2-7/hr
        <Button
          onClick={onClick}
          className="border border-main-color text-main-color transition-all hover:bg-main-color hover:text-white"
        >
          Details
        </Button>
      </div>
    </div>
  );
}
