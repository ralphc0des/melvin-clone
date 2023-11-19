import React, { useState } from "react";
import Image from "next/image";
import { Text } from "../Typhography/Typography";
import { useToggle } from "../Hooks/useToggle/useToggle";
import Link from "next/link";

interface accordionProps {
  header: string[];
  subheader?: string;
  data: {
    title: string;
    link: string;
  }[];
  status: boolean;
  toggleStatus: boolean;
}

const Accordion = ({ header, data, subheader }: accordionProps) => {
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  return (
    <div>
      <div className=" mt-[2rem] cursor-pointer" onClick={toggleExpand}>
        <div className="flex justify-between">
          <div>
            <Text variant="small" textWeight="bold">
              {header}
            </Text>
            <Text variant="small">{subheader}</Text>
          </div>
          <div>
            {expand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {expand && (
        <div>
          {data.map((rowData, index) => (
              <div key={index} className="mt-10 flex justify-between border-b border-slate-200 pb-4">
                <div>
                  <Link href={rowData.link}>
                  <Text variant="extrasmall">{rowData.title}</Text>
                  </Link>
                </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
