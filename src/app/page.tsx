import GetStart from "../components/shared/layout/sections/get-start";
import Positions from "../components/shared/layout/sections/position-card";
import StepsStartWork from "../components/shared/layout/sections/steps-start-work";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <GetStart />
      <StepsStartWork/>
      <Positions/>
    </main>
  );
}
