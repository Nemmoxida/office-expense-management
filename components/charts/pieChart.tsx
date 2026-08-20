"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type ExpenseCategory = {
  id: string;
  name: string;
  spent: number;
};

type ExpensePieChartProps = {
  data: ExpenseCategory[];
};

const colors = [
  "#2563eb",
  "#16a34a",
  "#f97316",
  "#dc2626",
  "#9333ea",
  "#0891b2",
];

export default function ExpensePieChart({ data }: ExpensePieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="spent"
          nameKey="name"
          cx="50%"
          cy="45%"
          innerRadius="42%"
          outerRadius="72%"
          paddingAngle={2}
          isAnimationActive
        >
          {data.map((category, index) => (
            <Cell key={category.id} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`$${Number(value).toLocaleString()}`, "Spent"]}
        />
        <Legend wrapperStyle={{ fontSize: "12px" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
