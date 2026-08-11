"use client";

export default function ExpenseList() {
  return (
    <div className="font-inter h-fit w-full rounded-2xl bg-white p-3 px-5 outline-1 outline-gray-300">
      <div className="flex h-17 items-center">
        <p className="w-[10%] text-sm font-bold text-gray-500">Employee</p>
        <p className="w-[45%] text-sm font-bold text-gray-500">
          Merchant and Description
        </p>
        <p className="w-[15%] text-sm font-bold text-gray-500">Category</p>
        <p className="w-[15%] text-sm font-bold text-gray-500">Amount</p>
        <p className="w-[10%] text-sm font-bold text-gray-500">Status</p>
        <p className="w-[10%] text-end text-sm font-bold text-gray-500">
          Actions
        </p>
      </div>
    </div>
  );
}
