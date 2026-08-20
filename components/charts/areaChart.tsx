"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type AreaData = {
  Month: string;
  Amount: number | string;
};

type AreaDataProps = {
  data: AreaData[];
};

export default function AreaChartAnalitic({ data }: AreaDataProps) {
  const chartData = data.map((item) => ({
    ...item,
    Amount: Number(item.Amount),
  }));

  return (
    <AreaChart
      style={{
        // width: "100%",
        height: "100%",
        // maxWidth: "700px",
        // maxHeight: "70vh",
        // aspectRatio: 4,
        fontSize: 12,
      }}
      width={"100%"}
      //   height={1000}
      data={chartData}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="Month" />
      <YAxis width={40} />
      <Tooltip
        formatter={(value: number | string) => [`$${value}`, "Amount"]}
      />
      <Area
        type="monotone"
        dataKey="Amount"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={true}
        animationBegin={200}
        animationDuration={1300}
      />
    </AreaChart>
  );
}
