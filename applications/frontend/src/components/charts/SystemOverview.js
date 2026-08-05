import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Running", value: 80 },
  { name: "Pending", value: 15 },
  { name: "Failed", value: 5 },
];

const COLORS = [
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function SystemOverview() {
  return (
    <div className="status-card">
      <h3>Platform Health</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
