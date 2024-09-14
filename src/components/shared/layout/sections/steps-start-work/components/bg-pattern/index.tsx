import Image from "next/image";

interface BackgroundPatternProps {
  windowWidth: number;
}

export default function BackgroundPattern({ windowWidth }: BackgroundPatternProps) {
  return (
    <>
      {windowWidth < 800 ? (
        <div className="absolute top-7 w-full h-64">
          <Image
            src={`/assets/patterns/pattern-responsive.png`}
            alt="Pattern"
            layout="fill"
            objectFit="contain"
            className="absolute -z-50"
          />
        </div>
      ) : (
        <Image
          src={`/assets/patterns/pattern.png`}
          alt="Pattern"
          layout="fill"
          objectFit="contain"
          className="absolute -z-50 w-full h-full"
        />
      )}
    </>
  );
}
