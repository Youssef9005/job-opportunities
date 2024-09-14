import Button from "@/src/components/ui/button";

function AuthButtons() {
  return (
    <div className="flex gap-x-2">
      <Button className="border border-main-color text-main-color hover:text-white hover:bg-main-color transition-all">Log in</Button>
      <Button className="bg-main-color text-white transition-all hover:bg-second-color">Sign Up</Button>
    </div>
  );
}

export default AuthButtons;
