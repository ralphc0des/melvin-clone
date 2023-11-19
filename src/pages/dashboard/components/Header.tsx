import React, { FC, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <div className="h-[80px] border border-slate-200 flex justify-between items-center px-10 bg-blue-900 text-white">
      {children}
    </div>
  );
};

export default Header;
