export interface FeatureCardProps {
    title: string;
    description?: string;
    linkText?: string;
    linkUrl?: string;
    className: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isHovered?: boolean;
    alwaysShowContent?: boolean; 
  }