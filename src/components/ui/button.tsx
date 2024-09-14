import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; 
}

function Button({ className = "", children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      className={`py-2 px-5 rounded-md font-semibold ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
