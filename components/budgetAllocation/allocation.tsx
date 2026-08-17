"use client";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

type BudgetData = {
  id: string;
  name: string;
  description: string;
  spent: number;
  remaining: number;
};

type BudgetProps = {
  budgetData: BudgetData[];
};

export default function BudgetAllocation({ budgetData }: BudgetProps) {
  return (
    <div className="font-inter h-fit w-full rounded-2xl bg-white p-5 outline-2 outline-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <IoPerson size={"1.3rem"} className="text-primary" />
            <h1 className="text-xl font-bold">
              Personal Budget Allocation (month name)
            </h1>
          </div>
          <p className="text-sm font-light text-gray-500">
            Monthly report for personal budget. cap are soft cap from the
            company, usage may exceed the cap.<br></br> it will determine the
            process of claiming an expense
          </p>
        </div>
        <div className="flex h-fit w-fit items-center gap-3 rounded-lg bg-purple-200 p-2">
          <FaChartPie size={"1.3rem"} className="text-secondary" />
          <p className="text-sm">
            Total Allocated: <b>$2.000 </b>
          </p>
        </div>
      </div>

      <div className="mt-5 flex h-fit w-full flex-wrap gap-3">
        {budgetData.map((e) => (
          <div
            key={e.id}
            className={`flex ${Math.floor((e.spent / e.remaining) * 100) < 80 ? "h-50" : "h-60"} w-[32.5%] flex-col rounded-lg p-3 outline-1 ${Math.floor((e.spent / e.remaining) * 100) < 80 ? "outline-gray-300" : "bg-[#fffefa] outline-yellow-300"} `}
          >
            <h1 className="text-sm font-bold">{e.name} </h1>
            <p className="text-xs font-light">{e.description} </p>

            {/* spent and remaining cards */}
            <div className="mt-3 flex gap-3">
              <div className="flex h-fit w-[50%] flex-col gap-1 rounded-lg bg-[#ececec] p-3">
                <p className="text-xs">SPENT</p>
                <p className="font-bold">${e.spent}</p>
              </div>
              <div className="flex h-fit w-[50%] flex-col gap-1 rounded-lg bg-[#ececec] p-3">
                <p className="text-xs">REMAINING</p>
                <p className="font-bold text-green-500">${e.remaining} </p>
              </div>
            </div>
            <div className="mt-3 flex justify-between text-xs">
              <p>
                Budget Used (${e.spent}/{e.remaining})
              </p>
              <p className="">{Math.floor((e.spent / e.remaining) * 100)}%</p>
            </div>
            <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-[#ececec]">
              <div
                style={{
                  width: `${(e.spent / e.remaining) * 100}%`,
                }}
                className={`${Math.floor((e.spent / e.remaining) * 100) < 80 ? "bg-secondary" : Math.floor((e.spent / e.remaining) * 100) < 100 ? "bg-orange-400" : "bg-red-400"} h-full`}
              ></div>
            </div>
            <div
              className={`mt-2 ${Math.floor((e.spent / e.remaining) * 100) < 80 ? "hidden" : "flex"} items-center gap-1 rounded-lg bg-[#fef8dd] p-1 text-xs`}
            >
              <AiOutlineExclamationCircle color="orange" size={"1.2rem"} />
              <p>Approacing this month usage limit.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
