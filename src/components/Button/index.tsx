import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded" } as const;
const variants = {
  fill: {
    blue_gray_300_87: "bg-blue_gray-300_87",
    white_A700: "bg-white-A700 text-blue_gray-400",
    blue_A700: "bg-blue-A700 text-white-A700",
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    black_900: "bg-black-900",
    blue_50: "bg-blue-50 text-gray-900_04",
    gray_50_04: "bg-gray-50_04 text-amber-500",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
  },
  outline: {
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_01",
    blue_gray_100: "border border-blue_gray-100 border-solid",
  },
  gradient: { white_A700_white_A700_66: "bg-gradient " },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
