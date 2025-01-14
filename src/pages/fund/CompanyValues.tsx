import { Handshake, Umbrella, Shield, Search, Turtle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function CompanyValues() {
  const values = [
    {
      title: "Investor First",
      description:
        "Prioritizing investors' interests and ensuring their trust in the company's financial management.",
      icon: <Handshake className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Risk Management",
      description:
        "Commitment to prudent risk management practices, including diversification, due diligence, and continuous monitoring of investments.",
      icon: <Umbrella className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Strict Compliance Orientation",
      description:
        "Adherence to strict compliance standards, ensuring all actions are guided by the law and ethical principles.",
      icon: <Shield className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Transparency",
      description:
        "Commitment to transparency in all aspects of its business operations, including communication with stakeholders and absolute transparency.",
      icon: <Search className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Long-term Approach",
      description: "Focus on long-term success, rather than short-term gains.",
      icon: <Turtle className="w-10 h-10 text-purple-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {values.map((value, index) => (
        <Card key={index} className="bg-white shadow-md rounded-lg">
          <CardHeader className="flex items-center space-x-4">
            {value.icon}
            <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700">
              {value.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
