import { motion } from "framer-motion";
import useWindowSize from "@/src/hooks/use-window-size";
import HeaderLinks from "../header-link";
import classNames from "classnames";
import AuthButtons from "../auth-buttons";

function HeaderContent() {
  const { windowSize } = useWindowSize();
  const isMobile = windowSize.windowWidth <= 750;

  const containerClasses = classNames("w-full p-2 z-[100]", {
    "absolute left-0 bg-white shadow-md top-full flex flex-col": isMobile,
    "flex-between gap-x-3": !isMobile,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={containerClasses}
    >
      <div></div>
      <HeaderLinks />
      <AuthButtons />
    </motion.div>
  );
}

export default HeaderContent;
