import Container from "@/src/component/Container/Container";
import { Title, Text } from "@/src/component/Typhography/Typography";
import Link from "next/link";
import React from "react";
import Header from "@/src/component/Navbar/Header";

const investorLists = [
  {
    src: "",
    text: "How to become a client",
    link: "#",
    bg: "client",
  },
  {
    src: "",
    text: "ukraine government Bonds and brokerage",
    link: "#",
    bg: "bonds",
  },
  {
    src: "",
    text: "Deposits",
    link: "#",
    bg: "deposit",
  },
  {
    src: "",
    text: "Taxation of income of none residence",
    link: "#",
    bg: "tax",
  },
];
const index = () => {
  return (
    <>
      <Header />
      <div className="my-10">
        <Container>
          <Title>For investors</Title>
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-1">
            {investorLists.map((list, index) => (
              <Link href="" key={index}>
                <div
                  className={`flex justify-center items-center align-middle w-full h-[35vh] bg-black px-10 text-center ${list.bg}`}
                >
                  <Text
                    variant="large"
                    className=" text-white capitalize place-content-center relative z-30"
                  >
                    {list.text}
                  </Text>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default index;
