import { BarChart2, PieChart, Combine as ChartNoAxesCombined, HeartHandshake, BookType, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Fund() {
  const fundStats = [
    {
      label: "Fund Size",
      value: "Rs. 100 Cr. with a green-shoe option of Rs. 50Cr",
      icon: PieChart,
    },
    {
      label: "Sponsor and Fund Manager",
      value:
        "Infiply Advisors LLP, which is promoted by experienced Capital Market professionals Mr. Jignesh Lakhani and Mr. Manish Bansal",
      icon: ChartNoAxesCombined,
    },
    {
      label: "Sponsor's contribution",
      value:
        "Sponsors to invest minimum 2.5% of the fund size or Rs. 5 Cr., whichever is lower, as prescribed by regulations",
      icon: HeartHandshake,
    },
    { label: "Type of Scheme", value: "Close Ended", icon: BookType },
    {
      label: "Status of Fund",
      value:
        "Contributory Determinate Investment Trust under the Indian Trusts Act",
      icon: BarChart2,
    },
    {
      label: "Tenor",
      value:
        "7 years from the date of Initial closing; Term may be extended for 2 additional periods of 1 year each, subject to approvals as required by law",
      icon: Clock,
    },
  ];

  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({ Icon, size = "h-16 w-16" }) => (

    <div className="icon-wrapper">
      <div className="icon-inner">
        <div className="icon-front">
          <Icon className={`${size} text-[#2C7C41]`} />
        </div>
        <div className="icon-back">
          <Icon className={`${size} text-[#2C7C41]`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Fund Details"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">Fund Details</h1>
            <p className="text-xl max-w-2xl">
              Cubs become lions, Saplings become tree, and SMEs become large
              companies
            </p>
          </div>
        </div>
      </div>

      {/* Fund Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <IconWrapper Icon={stat.icon} size="h-16 w-16" />
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {stat.label}
                </h3>
                <p className="text-1xl text-gray-800 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Support Partners
          </h2>
          <div className="grid gap-8 md:grid-cols-5">
            {[
              {
                name: "Vistra ITCL",
                role: "Fund Trustee",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20105318-4Smrx4ncqti8paVSljGzkm78uKBTTw.png",
              },
              {
                name: "KVU & Associates",
                role: "Tax Advisor",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20105318-4Smrx4ncqti8paVSljGzkm78uKBTTw.png",
              },
              {
                name: "One Stop Consultants",
                role: "Legal Advisor",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20105318-4Smrx4ncqti8paVSljGzkm78uKBTTw.png",
              },
              {
                name: "HDFC Bank",
                role: "Fund Banker",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20105318-4Smrx4ncqti8paVSljGzkm78uKBTTw.png",
              },
              {
                name: "ICICI Bank",
                role: "Fund Custodian",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20105318-4Smrx4ncqti8paVSljGzkm78uKBTTw.png",
              },
            ].map((partner) => (
              <Card key={partner.name} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={150}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-1">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fund;