"use client";
import { useState } from "react";
import useWindowSize from "@/src/hooks/use-window-size";
import CotopiaLogo from "../../logo";
import { Menu, X } from "lucide-react";
import HeaderContent from "./header-content";

function Header() {
  const { windowSize } = useWindowSize();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(function(prev) {
      return !prev;
    });
  }

  return (
    <header className="relative w-full flex-between p-2">
      <CotopiaLogo logoTitle={true} />
      {windowSize.windowWidth <= 750 ? (
        <>
          <button
            onClick={toggleNavbar}
            className="h-8 w-8 rounded-full bg-slate-50 flex-center"
            aria-label={isNavbarOpen ? "Close navigation" : "Open navigation"}
          >
            {isNavbarOpen ? <X /> : <Menu />}
          </button>
          {isNavbarOpen && <HeaderContent />}
        </>
      ) : (
        <HeaderContent />
      )}
    </header>
  );
}

export default Header;
