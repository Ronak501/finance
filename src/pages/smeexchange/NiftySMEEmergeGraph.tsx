import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  { date: "2016-12-01", value: 1000 },
  { date: "2016-12-31", value: 1075 },
  { date: "2017-12-31", value: 1819 },
  { date: "2018-12-31", value: 1542 },
  { date: "2019-12-31", value: 1346 },
  { date: "2020-12-31", value: 1688 },
  { date: "2021-12-31", value: 3825 },
  { date: "2022-12-31", value: 6529 },
  { date: "2023-12-31", value: 10786 },
  { date: "2024-12-01", value: 16606 },
];

export default function NiftySMEEmergeGraph() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="p-4 flex items-center">
          <h1 className="p-4 text-2xl font-bold text-[#2C7C41]">
            Nifty SME Emerge
          </h1>
        </div>
        <div className="text-right mr-2">
          <p className="text-sm text-[#2C7C41]">Source: Nifty Indices</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis
            stroke="#2C7C41"
            dataKey="date"
            interval="preserveStartEnd"
            tickFormatter={(date) => new Date(date).getFullYear().toString()}
          />
          <YAxis domain={[0, 17500]} stroke="#2C7C41" tickCount={8} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2C7C41"
            activeDot={{ r: 8 }}
            dot={({ cx, cy, payload }) => (
              <g>
                fill="#2C7C41"
                <Dot cx={cx} cy={cy} r={4} stroke="#2C7C41" fill="#2C7C41" />
                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  fill="#2C7C41"
                  fontSize="10"
                >
                  {payload.value}
                </text>
              </g>
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
