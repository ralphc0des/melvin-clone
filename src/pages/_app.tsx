import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="fixed z-50 top-[50%] right-[40px] bg-slate-300 p-3 rounded-full w-[17.5%] lg:w-[5%]">
        <div className=" btn-anime">
          <button
            className="p-4 bg-green-800 rounded-full"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src="/assets/whatsapp.png"
              alt=""
              className="w-full h-auto"
            />
          </button>
        </div>
        {toggle && (
          <>
           <div className="my-2 btn-anime">
            <button className="p-4 bg-black rounded-full">
              <img
                src="/assets/call.png"
                alt=""
                className="w-full h-auto  "
              />
            </button>
          </div>
          <div className="my-2 btn-anime">
            <button className="p-4 bg-blue-800 rounded-full">
              <img
                src="/assets/fb.png"
                alt=""
                className="w-full h-auto  "
              />
            </button>
          </div>
          </>
        )}
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
