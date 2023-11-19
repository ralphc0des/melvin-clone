import Container from "@/src/component/Container/Container";
import Header from "@/src/component/Navbar/Header";
import { Title, Text } from "@/src/component/Typhography/Typography";
import Link from "next/link";
import React from "react";

const investorLists = [
  {
    src: "",
    text: "How to become a user",
    link: "#",
    bg: "client",
  },
  {
    src: "",
    text: "excrow account",
    link: "#",
    bg: "bonds",
  },
];
const index = () => {
  return (
    <>
      <Header />
      <div className="my-10">
        <Container>
          <Title>For grantors</Title>
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
