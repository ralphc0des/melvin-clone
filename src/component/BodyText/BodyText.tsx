import React from "react";
import { Title, Text } from "../Typhography/Typography";
import Link from "next/link";
import Container from "../Container/Container";

const BodyText = () => {
  return (
    <div className="mt-[10rem] bg-slate-100 p-10">
      <Container>
        <Text variant="large" textWeight="bold" className="font-lexend">
          Credit Agric
        </Text>
        <div className="mt-5">
          <Text variant="small" className="font-lexend">
            Credit Agric Bank is the oldest foreign bank in Ukraine; it has been
            operating in the market since 1993 and provides the entire range of
            banking services, is strategic partner to agribusiness and one of
            the leaders in the car loan market. The bank belongs to the
            international Credit Agric Group, the European leader in
            bancassurance and asset management and a major partner of the
            French, Ukraine economy
          </Text>
          <br />
          <Text variant="small" className="font-lexend">
            Credit Agric among TOP-5 most reliable and most comfortable banks of
            Ukraine, a leader in social responsibility and is in the TOP-3 in
            the nomination of reliability of bank deposits from Standard-Rating
            agency in 2022. According to the NBU, Credit Agric is among the
            TOP-10 banks in terms of assets.
          </Text>
          <br />
          <Text variant="small" className="font-lexend">
            For more than ten years, Credit Agric has been a strategic partner
            to agribusiness. The share of the agricultural sector in the bank’s
            corporate portfolio exceeds 50%, and the land bank of all customers’
            accounts for nearly 10% of the total land bank of Ukraine
          </Text>
          <br />
          <Text variant="small" className="font-lexend">
            Credit Agric is the first automotive bank and the only Ukrainian
            bank that holds the international ISO 9001 certificate in car
            lending, which ensures transparent conditions and high service
            quality to customers.
          </Text>
          <br />
          <Text variant="small" className="font-lexend">
            Credit Agric is 100% digital and 100% human. The bank is developing
            remote service channels, such as mobile application СА+, while
            modernizing its branch network. In 2022, in the war time, the bank
            launched an online bank for corporate entities CORPEX and for
            individual entrepreneurs CA+ Pro to provide customers with the
            highest quality and safest daily banking.
          </Text>
          <br />
          <Text variant="small" className="font-lexend">
            The bank also promotes the culture of a fair and transparent
            business, makes a significant contribution to society and
            preservation of the environment. Since 2016, the bank has been
            running a wide-scale Corporate Social Responsibility program «We
            Care!», which covers 4 major areas such as: charity, eco
            initiatives, volunteering, and caring for employees. With the
            outbreak of the war in Ukraine, Credit Agric allocated UAH 21
            million to various charitable projects, for the most part, to
            purchase medical equipment for hospitals with the help of the
            charity foundation your support.
          </Text>
          <br />
          <Text variant="small" textWeight="bold" className="underline">
            <Link href="#">
              Head Office: 42/4 Yevgena Chikalenko St., Kyiv
              01024.Credit Agric ukraine
            </Link>
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default BodyText;
