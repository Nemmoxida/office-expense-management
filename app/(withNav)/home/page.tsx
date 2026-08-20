import Policy from "@/components/buttons/policy";
import ExpenseList from "@/components/expense/expenseList";
import { FaMoneyBill } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import dummyDataJson from "@/dummy.json";
import dummyDataJson2 from "@/dummy2.json";
import BudgetAllocation from "@/components/budgetAllocation/allocation";
import Footer from "@/components/footer/footer";

export default async function Home() {
  const totalBugdet = 70;

  const getDummyData = async () => {
    try {
      const data = await fetch("http://localhost:3001/expense");

      return await data.json();
    } catch (error) {
      return dummyDataJson;
    }
  };

  const dummyData = await getDummyData();

  return (
    <div className="font-inter flex h-screen w-full flex-col items-center overflow-y-auto">
      <div className="mt-8 h-fit w-[90%]">
        {/* Header */}
        <div className="flex h-fit w-full rounded-2xl bg-white p-4 outline-2 outline-gray-300">
          <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
            <IoPersonOutline color="white" size={"1.5rem"} />
          </div>
          <div className="ml-3 flex h-full w-fit flex-col justify-center">
            <p className="font-light">Have a good day</p>
            <p className="font-bold">Employee Expense Dashboard</p>
          </div>

          {/* policy button */}
          <div className="mr-3 ml-auto flex h-fit items-center self-center">
            <Policy />
          </div>
        </div>

        {/* Summary card */}
        <div className="mt-6 flex h-fit w-full gap-3">
          {/* Accepted */}
          <div className="h-45 flex-1 rounded-2xl bg-white p-4 pt-6 outline-2 outline-gray-300">
            <div className="flex h-fit items-center justify-between font-medium text-gray-500">
              <p className="text-md">APPROVED SPEND</p>{" "}
              <div className="h-fit w-fit rounded-lg bg-green-200 p-2">
                <FaMoneyBill color="green" size={"1.2rem"} />
              </div>
            </div>
            <div className="font-mozzila mt-5 text-4xl font-bold">
              $2.000,00
            </div>
            <div className="mt-2 flex h-fit w-full items-center gap-4">
              <div className="h-fit w-fit rounded-lg bg-green-100 px-2 py-1 text-sm text-green-700">
                Verified
              </div>
              <p className="text-sm font-light">Accepted by Finance</p>
            </div>
          </div>
          {/* Pending review */}
          <div className="h-45 flex-1 rounded-2xl bg-white p-4 pt-6 outline-2 outline-gray-300">
            <div className="flex h-fit items-center justify-between font-medium text-gray-500">
              <p className="text-md">PENDING APPROVAL</p>{" "}
              <div className="h-fit w-fit rounded-lg bg-yellow-200 p-2">
                <MdAccessTime color="#8a810c" size={"1.2rem"} />
              </div>
            </div>
            <div className="font-mozzila mt-5 text-4xl font-bold">
              $1.221,00
            </div>
            <div className="mt-2 flex h-fit w-full items-center gap-4">
              <div className="h-fit w-fit rounded-lg bg-yellow-100 px-2 py-1 text-sm text-yellow-700">
                Pending
              </div>
              <p className="text-sm font-light">Still in review by finance</p>
            </div>
          </div>

          {/* payout scheduled */}
          <div className="h-45 flex-1 rounded-2xl bg-white p-4 pt-6 outline-2 outline-gray-300">
            <div className="flex h-fit items-center justify-between font-medium text-gray-500">
              <p className="text-md">PAYOUT SCHEDULED</p>{" "}
              <div className="h-fit w-fit rounded-lg bg-blue-200 p-2">
                <MdAccessTime color="#0c128a" size={"1.2rem"} />
              </div>
            </div>
            <div className="font-mozzila mt-5 text-4xl font-bold">$501,00</div>
            <div className="mt-2 flex h-fit w-full items-center gap-4">
              <div className="h-fit w-fit rounded-lg bg-blue-100 px-2 py-1 text-sm text-blue-700">
                Scheduled
              </div>
              <p className="text-sm font-light">
                Accepted and scheduled for payout
              </p>
            </div>
          </div>

          {/* Total Budget Spent */}
          <div className="h-45 flex-1 rounded-2xl bg-white p-4 pt-6 outline-2 outline-gray-300">
            <div className="flex h-fit items-center justify-between font-medium text-gray-500">
              <p className="text-md">Budget Used</p>{" "}
              <div className="h-fit w-fit rounded-lg bg-purple-200 p-2">
                <SlGraph color="#4f39f6" size={"1.2rem"} />
              </div>
            </div>
            <div className="font-mozzila mt-5 text-4xl font-bold">70%</div>
            <div className="mt-2 flex h-fit w-full flex-col justify-center gap-1">
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-300">
                <div
                  style={{
                    width: `${totalBugdet}% `,
                  }}
                  className={`bg-secondary h-full`}
                ></div>
              </div>
              <div className="text-sm font-light">{`$100.000 out of $200.000 has been used`}</div>
            </div>
          </div>
        </div>

        {/* Expense Claim Directory */}
        <div className="mt-6">
          <ExpenseList expenses={dummyData} />
        </div>

        {/* Budget Allocation */}
        <div className="mt-6">
          <BudgetAllocation budgetData={dummyDataJson2} />
        </div>
      </div>

      <div className="h-fit w-full">
        <Footer />
      </div>
    </div>
  );
}
