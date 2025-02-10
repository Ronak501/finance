import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const data = [
  { name: "Aditya Vision Ltd.", cagr: 202 },
  { name: "RMC Switchgears Ltd.", cagr: 135 },
  { name: "Aayush Art and Bullion Ltd.", cagr: 125 },
  { name: "City Pulse Multiventures Ltd.", cagr: 117 },
  { name: "Kwality Pharmaceuticals Ltd.", cagr: 105 },
];

const colors = [
  "#2C7C41",
  "#2C7C41",
  "#2C7C41",
  "#2C7C41",
  "#2C7C41",
];

export default function CAGRBarChart() {
  return (
    <Card className="w-full max-w-5xl mx-auto bg-white">
      <CardHeader className="bg-[#2C7C41] text-white p-4 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">5 Years CAGR</CardTitle>
      </CardHeader>
      <CardContent className="p-1 mt-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#2C7C41"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10 }}
            />
            <YAxis stroke="#2C7C41" />
            <Tooltip />
            <Bar dataKey="cagr" fill="#10B981" barSize={40}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
