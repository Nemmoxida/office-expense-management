import AreaChartAnalitic from "@/components/charts/areaChart";
import BudgetBarChart from "@/components/charts/barChart";
import ExpensePieChart from "@/components/charts/pieChart";
import dummy from "@/dummy3.json";
import dummy2 from "@/dummy2.json";
import { FaChartBar, FaChartPie } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import Footer from "@/components/footer/footer";

export default function Analitics() {
  return (
    <div className="font-inter flex h-screen w-full flex-col items-center overflow-y-auto">
      <div className="mt-6 w-[90%]">
        <div className="flex items-center gap-3">
          {/* Persona spend */}
          <div className="flex h-100 flex-1 flex-col items-center justify-center rounded-2xl bg-white p-2 px-4 outline-2 outline-gray-300">
            <div className="flex h-fit w-full justify-between">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <IoMdTrendingUp size={"1.2rem"} className="text-secondary" />
                  <h1 className="font-bold">Personal Monthly Spend Trend</h1>
                </div>
                <p className="text-xs font-light">
                  Historical quarterly expenditure timeline
                </p>
              </div>
              <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-green-100 p-1 text-xs font-light text-green-600 outline-1 outline-green-500">
                <p>12% Montly Growth</p>
              </div>
            </div>
            <div className="mt-4 h-[80%] w-full">
              <AreaChartAnalitic data={dummy} />
            </div>
          </div>
          {/* spend by category */}
          <div className="flex h-100 flex-1 flex-col justify-start rounded-2xl bg-white p-2 px-4 outline-2 outline-gray-300">
            <div className="mt-2 flex h-fit w-full justify-between">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <FaChartPie size={"1.2rem"} className="text-secondary" />
                  <h1 className="font-bold">Spend by Category</h1>
                </div>
                <p className="text-xs font-light">
                  Distribution across expense types
                </p>
              </div>
            </div>
            <div className="mt-11 h-[60%] min-h-64 w-full">
              <ExpensePieChart data={dummy2} />
            </div>
          </div>
        </div>

        {/* spend and remaining comparison */}
        <div className="mt-6 h-fit w-full rounded-2xl bg-white p-4 outline-2 outline-gray-300">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <FaChartBar
                size={"1.2rem"}
                className="text-secondary -rotate-90"
              />
              <h1 className="font-bold">Budget and spend comparison</h1>
            </div>
            <p className="text-xs font-light">
              Comparing Allocated Budget against actual line category
              expenditure
            </p>
          </div>
          <div className="mt-11 h-96 min-h-64 w-full">
            <BudgetBarChart data={dummy2} />
          </div>
        </div>
      </div>

      <div className="h-fit w-full">
        <Footer />
      </div>
    </div>
  );
}
