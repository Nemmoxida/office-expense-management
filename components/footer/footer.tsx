import { MdCorporateFare } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear.toString();

  return (
    <div className="mt-6 flex h-fit w-full items-center">
      <div className="flex h-20 w-full items-center gap-2 bg-white">
        <MdCorporateFare size={"1.5rem"} className="ml-20" />
        <p>Example Corp Expense Management</p>
        <p>•</p>
        <p>2026</p>
      </div>
    </div>
  );
}
