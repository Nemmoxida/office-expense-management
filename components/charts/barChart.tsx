"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BudgetCategory = {
  id: string;
  name: string;
  spent: number;
  remaining: number;
};

type BudgetBarChartProps = {
  data: BudgetCategory[];
};

export default function BudgetBarChart({ data }: BudgetBarChartProps) {
  const chartData = data.map((category) => ({
    ...category,
    budget: category.budget,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{ top: 8, right: 16, left: 8, bottom: 48 }}
        barGap={4}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          interval={0}
          angle={-25}
          textAnchor="end"
          height={64}
          tick={{ fontSize: 11 }}
        />
        <YAxis tick={{ fontSize: 11 }} tickFormatter={(value) => `$${value}`} />
        <Tooltip
          formatter={(value, name) => [
            `$${Number(value).toLocaleString()}`,
            name === "Budget" ? "Budget" : "Spent",
          ]}
        />
        <Legend />
        <Bar
          dataKey="budget"
          name="Budget"
          fill="#94a3b8"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="spent"
          name="Spent"
          fill="#2563eb"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
