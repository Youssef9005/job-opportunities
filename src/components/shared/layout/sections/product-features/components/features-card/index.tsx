import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  className : string;
}

export default function FeatureCard({
  title,
  description,
  linkText,
  linkUrl,
  className,
}: FeatureCardProps) {
  return (
    <div className={`bg-[#EBF0FF] border col-span-4 ${className} rounded-md p-2 flex flex-col gap-y-1`}>
      <h1 className="text-blue-600 font-medium text-lg">{title}</h1>
      {description && (
        <p className="text-sm font-medium text-gray-500">{description}</p>
      )}
      {linkText && linkUrl && (
        <div className="text-blue-600 flex items-center justify-end mt-2">
          <Link href={linkUrl} className="underline">
            {linkText}
          </Link>
          <ArrowRight size={16} />
        </div>
      )}
    </div>
  );
}