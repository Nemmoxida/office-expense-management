import ExpenseList from "@/components/expense/expenseList";
import dummy from "@/dummy.json";

export default function Expense() {
  return (
    <div className="font-inter flex h-screen w-full justify-center overflow-y-auto">
      {/* card to show like how many approved, pending, etc
          cancel expense claim
          bulk edit 
          
      */}
      <div className="mt-6 w-[90%]">
        <div className="">
          <ExpenseList expenses={dummy} />
        </div>
      </div>
    </div>
  );
}
