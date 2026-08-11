"use client";

import { IoBookOutline } from "react-icons/io5";

export default function Policy() {
  return (
    <button className="flex h-fit w-fit items-center justify-center gap-2 rounded-lg bg-[#ececec] px-3 py-2 text-gray-500 outline-1 outline-gray-300 hover:cursor-pointer hover:bg-[#e0e0e0]">
      <span className="text-primary">
        <IoBookOutline size={"1.3rem"} />
      </span>
      <span className="text-[0.9rem] font-bold">Policy</span>
    </button>
  );
}
