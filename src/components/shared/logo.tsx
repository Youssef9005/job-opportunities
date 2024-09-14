import Image from "next/image";
import { CotopiaLogoProps } from "@/src/types/cotopia-logo";

function CotopiaLogo({ width = 50, height = 50, logoTitle }: CotopiaLogoProps) {
  return (
    <div className="flex-center gap-x-2">
      <Image src={`/logo.png`} alt="Cotopia Lite Logo" width={width} height={height} />
      {logoTitle && <span className="font-medium text-lg">Cotopia</span>}
    </div>
  );
}

export default CotopiaLogo;
