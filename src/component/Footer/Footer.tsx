import Link from "next/link"
import { Facebook, Instagram,  Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>Products</Link></li>
            <li><Link href={"/contact"}>Contact US</Link></li>
            <li><Link href={"/terms"}>Online Bank</Link></li>
            <li><Link href={"/terms"}>Terms & Condition</Link></li>

          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={""}>
            <Facebook />
          </Link>
          <Link href={""}>
            <Twitter />
          </Link>
          <Link href={""}>
            <Instagram />
          </Link>
          
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2019 All rights reserved.
        </p>
      </div>
    </footer>
  )
}