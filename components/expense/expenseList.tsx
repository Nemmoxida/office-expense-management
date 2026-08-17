"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

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
  merchant: string;
  departement: string;
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

function shortenText(text: string, length: number = 60) {
  let result = "";
  if (text.length > length) {
    result = text.slice(0, length - 1) + "...";
    return result;
  }

  return text;
}

export default function ExpenseList({ expenses }: ExpenseProps) {
  const [expenseFilter, setExpenseFilter] = useState<number>(1);
  const [searchFIlter, setSearchFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [departementFilter, setDepartementFiter] = useState<string>("");

  const filteredExpenses = expenses.filter((item) => {
    const statusMatch =
      expenseFilter == 1
        ? true
        : expenseFilter == 2
          ? item.status == "pending"
          : item.employee.toLowerCase() == "kermit";

    const searchMatch = item.employee
      .toLowerCase()
      .includes(searchFIlter.toLowerCase());

    const categoryMatch =
      categoryFilter == ""
        ? true
        : item.category.toLowerCase().includes(categoryFilter.toLowerCase());

    const departementMatch =
      departementFilter == ""
        ? true
        : item.departement
            .toLowerCase()
            .includes(departementFilter.toLowerCase());

    return statusMatch && searchMatch && categoryMatch && departementMatch;
  });

  return (
    <div className="font-inter h-fit w-full rounded-2xl bg-white p-3 px-5 outline-2 outline-gray-300">
      <div className="flex h-fit w-full flex-col gap-2">
        {/* Header and adding new expense */}
        <div className="flex justify-between">
          <div>
            <div className="flex h-fit w-fit items-center gap-2">
              <h1 className="text-2xl font-bold">Expense Claim Directory</h1>
              <p className="outline-primary h-fit w-fit rounded-lg p-1 text-xs font-bold outline-1">
                2 claims
              </p>
            </div>
            <div className="text-xs font-light">
              Make new Expense claim and track claim progress.
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button className="flex h-fit w-fit items-center gap-1 rounded-lg p-2 outline-1 outline-gray-300 hover:cursor-pointer hover:bg-[#f7f4f4]">
              <MdOutlineFileDownload size={"1.2rem"} />
              Export CSV
            </button>
            <button className="bg-secondary h-fit w-fit rounded-lg p-2 text-white hover:cursor-pointer hover:brightness-115">
              +Claim Expense
            </button>
          </div>
        </div>

        {/* Expense selection */}
        <div className="mt-4 flex h-fit w-full flex-col text-sm">
          <div className="flex h-fit w-full items-center justify-start gap-4">
            {/* All submissions */}
            <div
              onClick={() => setExpenseFilter(1)}
              className={`flex ${expenseFilter == 1 ? "text-secondary hover:text-secondary" : "text-gray-500 hover:text-black"} h-10 w-fit flex-col gap-1 transition-colors hover:cursor-pointer`}
            >
              <button className="hover:cursor-pointer">All Submissions</button>
              <div
                className={`${expenseFilter == 1 ? "bg-secondary" : "bg-none"} h-[0.1rem] w-full transition-colors`}
              ></div>{" "}
            </div>
            {/* Pending */}
            <div
              onClick={() => setExpenseFilter(2)}
              className={`flex ${expenseFilter == 2 ? "text-secondary hover:text-secondary" : "text-gray-500 hover:text-black"} h-10 w-fit flex-col gap-1 transition-colors hover:cursor-pointer`}
            >
              <button className="hover:cursor-pointer">
                Pending and Review
              </button>
              <div
                className={`${expenseFilter == 2 ? "bg-secondary" : "bg-none"} h-[0.1rem] w-full transition-colors`}
              ></div>{" "}
            </div>
            {/* My Submissions */}
            <div
              onClick={() => setExpenseFilter(3)}
              className={`flex ${expenseFilter == 3 ? "text-secondary hover:text-secondary" : "text-gray-500 hover:text-black"} h-10 w-fit flex-col gap-1 transition-colors hover:cursor-pointer`}
            >
              <button className="hover:cursor-pointer">My Submissions</button>
              <div
                className={`${expenseFilter == 3 ? "bg-secondary" : "bg-none"} h-[0.1rem] w-full transition-colors`}
              ></div>{" "}
            </div>
          </div>
          <hr className="-mt-4 text-gray-300"></hr>
        </div>

        {/* Expense Search filtering */}
        <div className="flex items-center justify-between gap-3">
          <div className="focus-within:outline-secondary focus-within::outline-1 flex h-7 flex-1 items-center gap-2 rounded-lg bg-gray-100 pl-1 outline-1 outline-gray-300 transition-colors">
            <CiSearch className="text-gray-500" size={"1.3rem"} />
            <input
              type="text"
              placeholder={`${shortenText("Search by Exployee, Claim id, Merchant, Claim title, and Claim Description", 30)}`}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="h-full w-full outline-none"
            />
          </div>
          {/* category type */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}

            className="focus-within:border-secondary rounded-lg border border-gray-300 bg-white px-3 py-1 transition-colors outline-none hover:cursor-pointer"
          >
            <option value="">All Categories</option>
            <option value="Software and tools">Software and tools</option>
            <option value="transport">Transport</option>
            <option value="meal">Meal</option>
            <option value="hotel">Hotel</option>
            <option value="other">Other</option>
          </select>
          {/* departement type */}
          <select
            value={departementFilter}
            onChange={(e) => setDepartementFiter(e.target.value)}

            className="focus-within:border-secondary rounded-lg border border-gray-300 bg-white px-3 py-1 transition-colors outline-none hover:cursor-pointer"
          >
            <option value="">All Departement</option>
            <option value="programmer">Programmer</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div>
      </div>

      {/* claim header */}
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

      {/* claim list */}
      <div className="flex h-fit w-full flex-col gap-3">
        {filteredExpenses.map((e) => (
          <div key={e.claimId} className="flex flex-col">
            <hr className="text-gray-300"></hr>
            <div className="mt-3 flex w-full items-center">
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
          </div>
        ))}
      </div>
    </div>
  );
}
