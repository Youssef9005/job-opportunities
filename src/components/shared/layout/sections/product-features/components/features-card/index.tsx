import { FeatureCardProps } from "@/src/types/feature-card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeatureCard({
  title,
  description,
  linkText,
  linkUrl,
  className,
  onMouseEnter,
  onMouseLeave,
  isHovered,
  alwaysShowContent = false,
}: FeatureCardProps) {
  return (
    <motion.div
      layout
      className={`bg-[#EBF0FF] border rounded-md p-2 flex flex-col gap-y-1 transition-all ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1
        className={`text-blue-600 font-medium text-lg flex justify-center items-center h-full`}
      >
        {title}
      </h1>

      {(isHovered || alwaysShowContent) && description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium text-gray-500 mt-2"
        >
          {description}
        </motion.p>
      )}

      {(isHovered || alwaysShowContent) && linkText && linkUrl && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 flex items-center justify-end mt-2"
        >
          <Link href={linkUrl} target="_blank" className="underline">
            {linkText}
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}