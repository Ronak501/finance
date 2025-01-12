import {
  Target,
  BarChart2,
  PieChart,
  Briefcase,
} from "lucide-react";

function Fund() {
  const fundStats = [
    { label: "Fund Size", value: "$100M", icon: PieChart },
    { label: "Investment Range", value: "$1M - $10M", icon: BarChart2 },
    { label: "Portfolio Companies", value: "25+", icon: Briefcase },
    { label: "Sectors", value: "Tech, Healthcare, Fintech", icon: Target },
  ];

  const investmentCriteria = [
    {
      title: "Market Opportunity",
      description: "Large addressable market with significant growth potential",
    },
    {
      title: "Team",
      description: "Experienced founders with deep domain expertise",
    },
    {
      title: "Product",
      description: "Innovative solution addressing clear market need",
    },
    {
      title: "Traction",
      description: "Demonstrated market validation and growth metrics",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Fund Details"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">Fund Details</h1>
            <p className="text-xl max-w-2xl">
              Strategic investments in transformative technology companies
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
                <stat.icon className="h-10 w-10 text-[#1ac8ed] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {stat.label}
                </h3>
                <p className="text-2xl font-bold text-[#1ac8ed] mt-2">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on early and growth-stage companies that are building
              innovative solutions in technology and technology-enabled sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {investmentCriteria.map((criteria, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{criteria.title}</h3>
                <p className="text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures thorough evaluation and efficient
              decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Screening",
                description:
                  "Review of business plan and initial assessment of fit with investment criteria",
                duration: "1-2 weeks",
              },
              {
                title: "Due Diligence",
                description:
                  "Detailed analysis of business model, market, team, and financials",
                duration: "4-6 weeks",
              },
              {
                title: "Investment Decision",
                description: "Final evaluation and terms negotiation",
                duration: "2-3 weeks",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1ac8ed] text-white font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-[#1ac8ed] font-semibold">
                  {step.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fund;
