import BudgetAllocation from "@/components/budgetAllocation/allocation";
import Footer from "@/components/footer/footer";
import dummy from "@/dummy2.json";

export default function Budgets() {
  return (
    <div className="font-inter flex min-h-screen w-full flex-col items-center overflow-y-auto">
      <div className="mt-6 w-[90%] flex-1">
        <div className="">
          <BudgetAllocation budgetData={dummy} />
        </div>
      </div>

      <div className="mt-auto h-fit w-full">
        <Footer />
      </div>
    </div>
  );
}
