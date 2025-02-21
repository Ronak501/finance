import {
  Scale,
  Users,  
  HandCoins,
  ArrowRight,
} from "lucide-react";
import NiftySMEEmergeGraph from "./NiftySMEEmergeGraph";
import NiftySMEIpoGraph from "./NiftySMEIpoGraph";

function SmeExchange() {
  const features = [
    {
      icon: HandCoins,
      title: "Fund Objective",
      description:
        "Provide growth capital and strategic support to small and medium enterprises (SMEs) and help investors build wealth",
    },
    {
      icon: Scale,
      title: "Regulatory Status",
      description:
        "SEBI registered investment vehicle SEBI Registration no. –IN/AIF1/24-25/1676",
    },
    {
      icon: Users,
      title: "Key Stakeholders",
      description: "Investors Investee Companies Investment Manager/Sponsor",
    },
  ];

  const listings = [
    {
      name: "Tech Solutions Corp",
      sector: "Software & IT",
      revenue: "$5M - $10M",
      location: "California, USA",
      description: "B2B SaaS platform with strong growth metrics",
    },
    {
      name: "Green Energy Solutions",
      sector: "Renewable Energy",
      revenue: "$2M - $5M",
      location: "Texas, USA",
      description: "Innovative solar technology provider",
    },
    {
      name: "HealthTech Innovations",
      sector: "Healthcare",
      revenue: "$1M - $2M",
      location: "Massachusetts, USA",
      description: "Digital health platform for remote patient monitoring",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1553484771-8bbd4e16c60a?auto=format&fit=crop&q=80"
          alt="SME Exchange"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">SME Exchange</h1>
            <p className="text-xl max-w-2xl">
              Connecting growing businesses with strategic investors
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Overview of INFIPLY SME Growth Fund
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and services to facilitate successful business
              transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <feature.icon className="h-16 w-16 text-[#2C7C41] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graphical Representation */}
      <div className="py-20 m-auto align-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftySMEEmergeGraph />
        </div>
      </div>

      {/* Featured Listings */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore curated opportunities across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map((listing, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2">
                    {listing.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-[#2C7C41]">{listing.sector}</p>
                    <p className="text-gray-600">Revenue: {listing.revenue}</p>
                    <p className="text-gray-600">
                      Location: {listing.location}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-4">{listing.description}</p>
                  <button className="flex items-center bg-[#2C7C41] text-white hover:text-gray-800">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 m-auto align-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftySMEIpoGraph />
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and efficient process for both businesses and investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "List Your Business",
                description:
                  "Create a detailed profile of your business including financials and growth metrics",
              },
              {
                step: "2",
                title: "Connect with Investors",
                description:
                  "Engage with interested investors and evaluate opportunities",
              },
              {
                step: "3",
                title: "Close the Deal",
                description:
                  "Receive support throughout the transaction process",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C7C41] text-gray-800 font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmeExchange;
