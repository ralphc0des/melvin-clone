import React, { ReactNode, FC } from "react";

interface containerProps {
  children: ReactNode;
  className?:string;
}
const Container: FC<containerProps> = ({ children, className }) => {
  return <div className={`px-[2rem] lg:px-[10rem] ${className}`}>{children}</div>;
};

export default Container;
