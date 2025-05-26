import React from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  onClick,
  type = "primary",
  children,
  icon,
}: ButtonProps) {
  const baseStyles = "flex gap-2 px-4 py-3 rounded-full text-white outline-none transition duration-300 flex-shrink-0 items-center hover:opacity-90";
  
  const typeStyles = type === "primary"
    ? "bg-gradient-to-b from-blue-500 to-indigo-500"
    : "bg-transparent border border-white hover:border-blue hover:text-blue";

  return (
    <button onClick={onClick} className={`${baseStyles} ${typeStyles}`}>
      {icon && icon}
      {children}
    </button>
  );
}
