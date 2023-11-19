import React from "react";

// Header component
interface HeadingProps {
  variant: "small" | "medium" | "large" | "xlarge";
  children: React.ReactNode;
  className?:string
}

const baseStyles = `
font-style:normal;
text-[#191C2D]
`;

const Heading: React.FC<HeadingProps> = ({ variant, children, className }) => {
  let fontSize = "text-[36px]";
  let lineHeight = "leading-[36px]";
  let letterSpacing = `tracking[-1.125px]`;
  let fontWeight = "font-extabold";

  if (variant === "small") {
    fontSize = "text-[18px]";
    lineHeight = "leading-[27px]";
    fontWeight = "font-semibold";
    letterSpacing = "tracking-normal";
  } else if (variant === "medium") {
    fontSize = "text-[20px] lg:text-[30px]";
    lineHeight = "leading-[30px] lg:leading-[46px]";
    letterSpacing = "tracking-normal";
    fontWeight = "font-bold";
  } else if (variant === "large") {
    fontSize = "text-[25px] lg:text-[46px]";
    lineHeight = "leading-[30px] lg:leading-[67px]";
    letterSpacing = "tracking-normal";
    fontWeight = "font-bold";
  } else if (variant === "xlarge") {
    fontSize = "text-[31px] lg:text-[55px]";
    lineHeight = "leading-[46px] lg:leading-[83]";
    fontWeight = "font-bold";
  }

  return (
    <h1
      className={`${baseStyles} ${fontSize} ${lineHeight} ${letterSpacing} ${fontWeight} ${className}`}
    >
      {children}
    </h1>
  );
};

// Title component

interface Titleprops {
  children: React.ReactNode;
  small?: boolean;
}

const Title: React.FC<Titleprops> = ({ children, small }) => {
  let fontSize = "text-[45px]";
  let lineHeight = "leading-[67px]";
  let letterSpacing = "tracking[-1.125px]";

  if (small) {
    fontSize = "text-[24px]";
  }

  return (
    <h2
      className={`font-semibold ${baseStyles} ${fontSize} ${letterSpacing} ${lineHeight}`}
    >
      {children}
    </h2>
  );
};

// Text component
interface TextProps {
  children: React.ReactNode;
  variant?: "tiny" | "extrasmall" | "small" | "base" | "medium" | "large";
  textWeight?: "medium" | "semi-bold" | "bold";
  hover?: boolean;
  textCenter?: boolean;
  textLink?: boolean;
  className?:string;
  textColor?:String;
  // font?: string
}

const Text: React.FC<TextProps> = ({
  children,
  textWeight,
  variant = "medium",
  hover = false,
  textCenter = false,
  textColor = "#576266",
  textLink = false,
  className,
}) => {
  let fontSize = "text-[20px]";
  let lineHeight = "leading-[30px]";
  let fontWeight = "font-normal";
  let color = `text-[${textColor}]`;
  let textAlign = "text-start";
  if (variant === "tiny"){
    fontSize = "text-[12px]";
  }
  else if (variant === "extrasmall") {
    fontSize = "text-[14px]";
    lineHeight = "leading-[21px]";
    color = "text-[#4E5058]";
  } 
  else if (variant === "small") {
    fontSize = "text-[16px]";
    lineHeight = "leading-[21px]";
    color = "text-[#4E5058]";
  } else if (variant === "medium") {
    fontSize = "text-[18px] lg:text-[20px]";
    lineHeight = "leading-[24px] lg:leading-[30px]";
  } else if (variant === "base") {
    fontSize = "text-[18px]";
    lineHeight = "leading-[20px]";
  } else if (variant === "large") {
    fontSize = "lg:text-[30px] text-[18px]";
    lineHeight = "lg:leading-[46px] leading-[30px]";
  }

  if (textWeight === "semi-bold") {
    fontWeight = "font-semibold";
    color = "text-[#191C2D]";
  } else if (textWeight === "bold") {
    fontWeight = "font-bold";
  } else if (textWeight === "medium") {
    fontWeight = "font-medium";
  }
  if (hover) {
    color = "group-hover:text-green-400";
  }
  if (textCenter) {
    textAlign = "text-center";
  }
  if (textLink) {
    color = "text-green-400";
  }

  return (
    <p
      className={`${baseStyles} ${fontWeight} ${color} ${lineHeight} ${fontSize} ${className}`}
    >
      {children}
    </p>
  );
};

export { Heading, Title, Text };