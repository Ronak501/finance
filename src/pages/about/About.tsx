import type React from "react";
import {
  Scale,
  Rocket,
  Eye,
  Users,
  BarChart2,
  Search,
  UmbrellaOff,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const IconWrapper = ({
    Icon,
    size = "h-16 w-16",
  }: {
    Icon: React.ElementType;
    size?: string;
  }) => (
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

  const values = [
    {
      icon: Users,
      color: "bg-red-400",
      title: "Investors First",
      description:
        "We feel responsible towards our investors for trusting us with their money",
    },
    {
      icon: Scale,
      color: "bg-blue-400",
      title: "Compliance Orientation",
      description: "We will follow laws both in words and spirit",
    },
    {
      icon: ArrowUpRight,
      color: "bg-green-400",
      title: "Long term Approach",
      description:
        "We will act like part owners of the businesses and not just the external investors",
    },
    {
      icon: UmbrellaOff,
      color: "bg-indigo-400",
      title: "Risk Management",
      description:
        "Appropriate diversification, due diligence on each opportunity and continuous monitoring post investment",
    },
    {
      icon: Search,
      color: "bg-yellow-400",
      title: "Transparency",
      description:
        "We will act with utmost integrity in every aspect of our business and communicate with all stake holders with absolute transparency.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="pt-16">
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl max-w-2xl">
                Cubs become lions, Saplings become tree, and SMEs become large
                companies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">
            Our Purpose & Direction
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-teal-600 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
              <p className="text-teal-50 leading-relaxed mb-0">
                To develop the Alternative Investment Fund ("AIF") industry on
                professional and ethical lines and maintain high standards of
                governance and transparency.
              </p>
            </div>
            <div className="group bg-green-600 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
              <p className="text-amber-50 leading-relaxed mb-0">
                Maintain high professional and ethical standards within the AIF
                industry. Comply with all applicable regulations and co-operate
                with the regulators in all aspects of the AIF activity. Act in a
                fiduciary capacity towards the investors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invest primarily in securities of those companies, which are
              listed or proposed to be listed on SME exchange or SME segment of
              an exchange.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Core Focus Area",
                desc: "Identify the most promising and high-potential investment opportunities based on thorough market analysis, industry trends, and evaluation of growth potential of businesses.",
              },
              {
                icon: Users,
                title: "Capital Deployment",
                desc: "Efficient capital allocation to maximize returns and minimize risks, leveraging a diversified portfolio approach.",
              },
              {
                icon: BarChart2,
                title: "Hands-On Approach",
                desc: "Active engagement with portfolio companies, providing operational guidance, strategic advice, and access to industry networks to drive growth and value creation.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <IconWrapper Icon={item.icon} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-2 bg-grey-150">
        {/* Header Section */}
        <div className="bg-white text-gray-800 p-6 rounded-t-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Target Companies
          </h1>
          <p className="text-lg md:text-xl max-w-4xl text-gray-800 mx-auto">
            Business with potential to grow profitably for long run
          </p>
        </div>
        <div className="w-full px-4 ">
          <div className="max-w-4xl mx-auto">
            <img
              src="/scroll/ok.png"
              alt="Target Companies"
              className="w-full h-auto object-contain rounded-lg shadow-lg mb-0" // Add mb-0 to remove margin-bottom
            />
          </div>
        </div>
      </div>

      <div className="py-16 mid:py-24 px-4 mid:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mid:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Values System
          </h2>
          <p className="text-lg mid:text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide our actions and define who we are as an
            organization
          </p>
        </div>

        <div className="grid grid-cols-2 mid:grid-cols-2x lg:grid-cols-3 gap-6 mid:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`w-16 h-16 mid:w-20 mid:h-20 lg:w-24 lg:h-24 rounded-full ${value.color} flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110`}
              >
                <value.icon className="w-8 h-8 mid:w-10 mid:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg mid:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm mid:text-base text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
