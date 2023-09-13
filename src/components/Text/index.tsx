import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyBold36BlueA700: "font-bold font-gilroy",
  txtGilroyBold36: "font-bold font-gilroy",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray90002: "font-gilroy font-semibold",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtUrbanistItalicThin24: "font-hairline font-urbanist italic",
  txtGilroyRegular12Green600: "font-gilroy font-normal",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtUrbanistRegular2135: "font-normal font-urbanist",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium16Gray90003: "font-gilroy font-medium",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium20BlueA700: "font-gilroy font-medium",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroyRegular15Gray500: "font-gilroy font-normal",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroySemiBold28BlueA700: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16Black900: "font-gilroy font-semibold",
  txtGilroyBold28Gray90003: "font-bold font-gilroy",
  txtGilroyRegular12Bluegray400: "font-gilroy font-normal",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold32Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium24Green600: "font-gilroy font-medium",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtGilroyRegular18Bluegray500: "font-gilroy font-normal",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtMontserratMedium14Black900: "font-medium font-montserrat",
  txtGilroySemiBold16Red700: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray200: "font-gilroy font-semibold",
  txtGilroyMedium24Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray700: "font-gilroy font-semibold",
  txtGilroyMedium24Black90002: "font-gilroy font-medium",
  txtGilroySemiBold24Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray600: "font-gilroy font-medium",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtGilroyMedium14Gray800: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray70002: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray400: "font-gilroy font-normal",
  txtOpenSansMedium24Bluegray900: "font-medium font-opensans",
  txtGilroyBold18Bluegray400: "font-bold font-gilroy",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray70002: "font-gilroy font-semibold",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium14Gray90003: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtGilroyRegular15Gray90001: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroySemiBold15: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtLatoRegular244: "font-lato font-normal",
  txtGilroyBold24BlueA700: "font-bold font-gilroy",
  txtGilroySemiBold16Blue800: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray90003: "font-gilroy font-semibold",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
