import ExpenseList from "@/components/expense/expenseList";
import Footer from "@/components/footer/footer";
import dummy from "@/dummy.json";

export default function Expense() {
  return (
    <div className="font-inter flex h-screen w-full flex-col items-center overflow-y-auto">
      {/* card to show like how many approved, pending, etc
          cancel expense claim
          bulk edit 
          
      */}
      <div className="mt-6 w-[90%]">
        <div className="">
          <ExpenseList expenses={dummy} />
        </div>
      </div>

      <div className="h-fit w-full self-end">
        <Footer />
      </div>
    </div>
  );
}
