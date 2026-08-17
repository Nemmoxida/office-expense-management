import BudgetAllocation from "@/components/budgetAllocation/allocation";
import dummy from "@/dummy2.json";

export default function Budgets() {
  return (
    <div className="font-inter flex h-screen w-full justify-center overflow-y-auto">
      <div className="mt-6 w-[90%]">
        <div className="">
          <BudgetAllocation budgetData={dummy} />
        </div>
      </div>
    </div>
  );
}
