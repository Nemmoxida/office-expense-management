"use client";

import Image from "next/image";
import { GoHistory } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";

type UserRole = "employee" | "manager" | "finance" | "admin";
type ClaimStatus = "pending" | "approved" | "rejected" | "paid";
type ExpenseCategory = "saas" | "transport" | "meal" | "hotel" | "other";

type AuditHistoryItem = {
  status: ClaimStatus;
  username: string;
  role: UserRole;
  dateTime: string; // ISO 8601
  action: string;
  message: string;
};

type ExpenseClaim = {
  employee: string;
  employeeId: string;
  profilePicId: string;
  claimId: string;
  expenseTitle: string;
  expenseDesc: string;
  creationDate: string; // ISO 8601
  category: ExpenseCategory;
  amount: number;
  status: ClaimStatus;
  imageId: string;
  auditHistory: AuditHistoryItem[];
};

type ExpenseProps = {
  expenses: ExpenseClaim[];
};

function shortenText(text: string) {
  let result = "";
  if (text.length > 60) {
    result = text.slice(0, 59) + "...";
    return result;
  }

  return text;
}

export default function ExpenseList({ expenses }: ExpenseProps) {
  return (
    <div className="font-inter h-fit w-full rounded-2xl bg-white p-3 px-5 outline-1 outline-gray-300">
      <div className="flex h-17 items-center">
        <p className="w-[15%] text-sm font-bold text-gray-500">Employee</p>
        <p className="w-[40%] text-sm font-bold text-gray-500">
          Merchant and Description
        </p>
        <p className="w-[15%] text-sm font-bold text-gray-500">Category</p>
        <p className="w-[15%] text-sm font-bold text-gray-500">Amount</p>
        <p className="w-[10%] text-sm font-bold text-gray-500">Status</p>
        <p className="w-[10%] text-end text-sm font-bold text-gray-500">
          Actions
        </p>
      </div>
      <hr className="mb-3 w-full"></hr>

      {/* claim list */}
      <div className="flex h-fit w-full flex-col gap-3">
        {expenses.map((e) => (
          <div className="flex w-full items-center" key={e.claimId}>
            <div className="flex w-[15%] gap-5 text-sm font-bold text-gray-500">
              <div>
                <Image
                  alt="Pfp"
                  src={e.profilePicId}
                  width={10}
                  height={10}
                  className="w-auto rounded-full"
                />
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[1rem] font-bold text-black">
                  {e.employee}{" "}
                </p>
                <p className="text-xs font-light">{e.departement} </p>
                <p className="text-primary text-xs font-bold">{e.claimId} </p>
              </div>
            </div>
            <div className="flex w-[40%] flex-col text-sm font-bold text-gray-500">
              <div className="text-[1rem] font-bold text-black">
                {e.expenseTitle}{" "}
              </div>
              <div className="flex gap-1 text-xs font-light">
                <p className="font-bold">{e.merchant} </p>
                <p className="">•</p>
                <p>{e.creationDate} </p>
              </div>
              <div className="text-sm font-light">
                {shortenText(e.expenseDesc)}{" "}
              </div>
            </div>
            <div className="w-[15%] text-sm font-bold text-gray-500">
              <div className="h-fit w-[70%] rounded-lg bg-[#ececec] p-1 text-sm font-medium outline-1 outline-gray-200">
                {e.category}{" "}
              </div>
            </div>
            <div className="font-mozzila w-[15%] text-lg font-bold text-black">
              $ {e.amount}
            </div>
            <div className="w-[10%] text-sm font-bold text-gray-500">
              <div className="h-fit w-[70%] rounded-lg bg-[#ececec] p-1 text-sm font-medium outline-1 outline-gray-200">
                {e.status}{" "}
              </div>
            </div>
            <div className="flex w-[10%] justify-end gap-2 text-end text-sm font-bold text-gray-500">
              <div className="h-fit w-fit rounded-lg p-1 outline-1 outline-gray-300 hover:cursor-pointer hover:bg-[#ececec]">
                <IoReceiptOutline color="black" size={"1.3rem"} />{" "}
              </div>
              <div className="h-fit w-fit rounded-lg p-1 outline-1 outline-gray-300 hover:cursor-pointer hover:bg-[#ececec]">
                <GoHistory color="black" size={"1.3rem"} />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
