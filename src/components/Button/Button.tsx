"use client";

import type { ReactNode } from "react";

interface Sizes {
  fullLg: string;
  fullMd: string;
  fullSm: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}
interface Classes {
  [key: string]: {
    [key: string]: string;
  };
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: "blue" | "gray" | "orange" | "lightGray" | "white" | "facebookBlue";
  loading?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "fullLg" | "fullMd" | "fullSm";
  variant?: "contained" | "text" | "outlined";
  id?: string;
}

const sizes: Sizes = {
  fullLg: "text-lg w-full md:w-[20.5rem] h-[52px]",
  fullMd: "text-xs md:text-base w-full md:w-[20.5rem] h-8 md:h-10",
  fullSm: "text-xs md:text-sm w-full md:w-[20.5rem] h-7 md:h-9",
  lg: "text-sm md:text-lg h-9 md:h-11",
  md: "text-xs md:text-base h-8 md:h-10",
  sm: "text-xs md:text-sm h-7 md:h-9",
  xs: "text-xs md:text-sm h-6 md:h-8",
};

const classes: Classes = {
  contained: {
    blue: "bg-primary-600 text-white border border-primary-600 hover:bg-primary-800 hover:border-primary-800 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500",
    orange:
      "bg-secondary-500 text-white border border-secondary-500 hover:bg-secondary-700 hover:border-secondary-600 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500",
    white:
      "bg-white text-gray-800 border border-white disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500",
  },
  outlined: {
    gray: "bg-white text-gray-700 border border-gray-400 hover:bg-primary-100 hover:border-primary-400 disabled:border-gray-300 disabled:text-gray-400",
    white:
      "text-white border border-white hover:bg-primary-100 hover:border-primary-400 hover:text-primary-400 disabled:border-gray-300 disabled:text-gray-400",
  },
  text: {
    gray: "bg-white text-gray-700 border border-white hover:bg-primary-100 disabled:text-gray-400",
  },
};

function Button({
  children,
  className = "",
  color = "blue",
  id = undefined,
  loading = false,
  size = "lg",
  type = "button",
  variant = "contained",
  ...rest
}: ButtonProps) {
  const sizeClass = sizes[size];
  const buttonClass = `px-4 py-1 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2 truncate ${sizeClass} ${classes[variant][color]}${className}`;
  return (
    <button
      className={buttonClass}
      disabled={loading || rest.disabled}
      id={id}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
