"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWallet } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdAnalytics, MdDashboard } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="font-inter flex h-screen w-[17%] flex-col items-center justify-start bg-[#0f172b]">
      <div className="mt-8 h-full w-[90%]">
        {/* Logo */}
        <div className="font-blackops flex w-full justify-start bg-none text-3xl font-extrabold text-white">
          <h1>
            Example Corp<span className="text-primary">.</span>
          </h1>
        </div>

        {/* Menu Selection */}
        <div className="mt-3 flex h-fit w-full flex-col gap-1 text-gray-400">
          <Link
            href={"/home"}
            className={`flex ${pathname == "/home" ? "bg-secondary hover:bg-secondary text-white" : "bg-none"} items-center gap-4 rounded-xl py-2 hover:bg-[#091124] hover:text-white`}
          >
            <span className="ml-2">
              <MdDashboard size={"1.3rem"} />
            </span>
            Home
          </Link>
          <Link
            href={"/expense"}
            className={`flex ${pathname == "/expense" ? "bg-secondary hover:bg-secondary text-white" : "bg-none"} items-center gap-4 rounded-xl py-2 hover:bg-[#091124] hover:text-white`}
          >
            <span className="ml-2">
              <GoFileDirectoryFill size={"1.3rem"} />
            </span>
            Expense Directory
          </Link>
          <Link
            href={"/budgets"}
            className={`flex ${pathname == "/budgets" ? "bg-secondary hover:bg-secondary text-white" : "bg-none"} items-center gap-4 rounded-xl py-2 hover:bg-[#091124] hover:text-white`}
          >
            <span className="ml-2">
              <FaWallet size={"1.2rem"} />
            </span>
            Budgets
          </Link>
          <Link
            href={"/analytics"}
            className={`flex ${pathname == "/analytics" ? "bg-secondary hover:bg-secondary text-white" : "bg-none"} items-center gap-4 rounded-xl py-2 hover:bg-[#091124] hover:text-white`}
          >
            <span className="ml-2">
              <MdAnalytics size={"1.3rem"} />
            </span>
            Analitics
          </Link>
        </div>

        {/* profile */}
      </div>
      <div className="mb-4 flex h-fit w-[90%] items-center justify-center gap-3 justify-self-end rounded-2xl py-3 text-white hover:cursor-pointer hover:bg-[#091124]">
        <div className="h-13 w-13 rounded-full bg-gray-300"></div>
        <div className="h-fit w-[60%]">
          <h1 className="font-bold">Username</h1>
          <p className="text-sm font-thin">Guest</p>
        </div>
      </div>
    </div>
  );
}
