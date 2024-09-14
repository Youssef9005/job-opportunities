import Image from "next/image";

export default function GetStartImage() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={`/assets/get-start/earth.png`}
        alt="Home Page"
        width={400}
        height={800}
        className="w-full h-auto sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto"
      />

      <Image
        src={`/assets/get-start/users.png`}
        alt=""
        width={300}
        height={200}
        className="absolute top-1/2 left-1/2 w-4/6 sm:w-2/5 md:w-1/3 h-auto -translate-y-1/2 -translate-x-1/2"
      />
    </div>
  );
}
