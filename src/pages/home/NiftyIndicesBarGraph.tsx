import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const data = [
  { name: "Nifty 50", return: 16 },
  { name: "Nifty 100", return: 16 },
  { name: "Nifty Midcap 150", return: 28 },
  { name: "Nifty Smallcap 250", return: 30 },
  { name: "Nifty Microcap 250", return: 43 },
  { name: "Nifty SME Emerge", return: 66 },
];

export default function NiftyIndicesBarGraph() {
  return (
    <Card className="w-[1000px] max-w-6xl mx-auto bg-white">
      <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          Return Profile (CAGR) - 5 Years
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" interval={0} />
            <YAxis domain={[10, 70]} stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="return" fill="#22c55e" barSize={50}>
              {data.map((entry, index) => (
                <text
                  key={`label-${index}`}
                  x={entry.return < 35 ? 50 : 20}
                  y={400 - (entry.return - 10) * (400 / 60) - 25}
                  fill="#fff"
                  textAnchor={entry.return < 35 ? "start" : "end"}
                  fontSize={12}
                >
                  {entry.return}%
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="p-4 text-right text-sm text-black">
        Nifty Indices as on 31/12/2024
      </div>
    </Card>
  );
}
