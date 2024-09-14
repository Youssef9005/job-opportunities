import { Grid2X2, MoveDown } from "lucide-react";

export default function GetStartTitle() {
  return (
    <div className="flex flex-col items-center gap-y-4 z-50 text-center">
      <span className="text-xs sm:text-sm flex items-center gap-x-3 p-2 shadow-xl rounded-xl bg-white w-fit font-medium">
        <Grid2X2 /> Cotopia Jobs
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
        Working has no limitation
      </h1>

      <p className="text-sm sm:text-base font-medium text-gray-500 max-w-md">
        Your job helps people gather and work with each other round the world
      </p>

      <h1 className="flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-400">
        Job Position <MoveDown className="mt-1 sm:mt-3" />
      </h1>
    </div>
  );
}
