import React from "react";
import Container from "@/src/component/Container/Container";
import { Title, Text } from "@/src/component/Typhography/Typography";
import Header from "@/src/component/Navbar/Header";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="mt-[5rem] mb-[3rem]">
      <Container>
        <Title>Contacts</Title>
        <div className="my-[3rem]">
          <Text variant="medium">
            Joint Stock Company The State Export-Import Bank of Ukraine
          </Text>
          <Text variant="medium">127 Antonovycha Street</Text>
          <Text variant="medium">03150 Kyiv</Text>
          <Text variant="medium">Ukraine</Text>
        </div>
        <div className="mb-[3rem]">
          <Text variant="medium">Tel.: +38 044 247 38 38</Text>
          <Text variant="medium">Fax: +38 044 247 80 82</Text>
          <Link href="">
            <Text variant="medium" className="undeline">
              bank@eximb.com
            </Text>
          </Link>
          <Text variant="medium">S.W.I.F.T.: EXBSUAUX</Text>
        </div>
        <div className="mb-[3rem]">
          <Text variant="medium" textWeight="bold">
            International Business
          </Text>
          <Link href="">
            <Text variant="medium" className="underline">
              bank@eximb.com
            </Text>
          </Link>
        </div>
        <div className="mb-[3rem]">
          <Text variant="medium" textWeight="bold">
            Financial Business
          </Text>
          <Link href="">
            <Text variant="medium" className="underline">
              bank@eximb.com
            </Text>
          </Link>
        </div>
        <div className="mb-[3rem]">
          <Text variant="medium" textWeight="bold">
            Investor Relations
          </Text>
          <Link href="">
            <Text variant="medium" className="underline">
              bank@eximb.com
            </Text>
          </Link>
        </div>
      </Container>
    </div>
    </>
   
  );
};

export default Contact;
