import type React from "react";
import {
  Flag,
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

  const characteristics = [
    {
      icon: Users,
      title: "Investors First",
      description:
        "We feel responsible towards our investors for trusting us with their money",
    },
    {
      icon: Scale,
      title: "Compliance Orientation",
      description: "We will follow laws both in words and spirit",
    },
    {
      icon: ArrowUpRight,
      title: "Long term Approach",
      description:
        "We will act like part owners of the businesses and not just the external investors",
    },
    {
      icon: UmbrellaOff,
      title: "Risk Management",
      description:
        "Appropriate diversification, due diligence on each opportunity and continuous monitoring post investment",
    },
    {
      icon: Search,
      title: "Transparency",
      description:
        "We will act with utmost integrity in every aspect of our business and communicate with all stake holders with absolute transparency.",
    },
  ];

  const targetProfile = [
    {
      title: "Owner Managers\nwith skin in the game",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
      number: "1",
    },
    {
      title: "Long runway of\nGrowth",
      position: "top-[15%] right-[15%]",
      number: "2",
    },
    {
      title: "Operating in\nNiche",
      position: "right-0 top-1/2 translate-x-2 -translate-y-1/2",
      number: "3",
    },
    {
      title: "Economic Moat\nwith pricing power",
      position: "bottom-[15%] right-[15%]",
      number: "4",
    },
    {
      title: "Focus on profitability\nand Return on Capital",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
      number: "5",
    },
    {
      title: "Cash generating\nbusinesses",
      position: "bottom-[15%] left-[15%]",
      number: "6",
    },
    {
      title: "Low capital\nintensive",
      position: "left-0 top-1/2 -translate-x-2 -translate-y-1/2",
      number: "7",
    },
    {
      title: "Ethical\nManagement",
      position: "top-[15%] left-[15%]",
      number: "8",
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
                Building tomorrow's success stories through strategic
                investments and visionary partnerships.
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

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 flex justify-center items-center overflow-x-auto">
        <div className="max-w-3xl w-full px-4 lg:px-6">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Target Company Profile
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
              Key characteristics we look for in our target companies
            </p>
          </div>

          {/* Diagram Container with Proper Centering & Spacing */}
          <div className="relative h-full w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto aspect-square flex justify-center items-center">
            {targetProfile.map((item, i) => (
              <div
                key={i}
                className={`absolute ${item.position} flex items-center`}
              >
                <div className="relative">
                  {/* Number Circle */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {item.number}
                    </span>
                  </div>

                  {/* Title Text - Prevent Overlapping */}
                  <div
                    className="absolute top-full mt-2 sm:mt-3 text-center text-gray-800 text-[10px] sm:text-xs font-medium"
                    style={{
                      minWidth: "90px",
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}

            {/* SVG Diagram */}
            <svg className="absolute inset-0 w-full h-full">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 35 * Math.cos((angle * Math.PI) / 180)}%`}
                  y2={`${50 + 35 * Math.sin((angle * Math.PI) / 180)}%`}
                  stroke="#059669"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowhead)"
                />
              ))}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="6"
                  markerHeight="4"
                  refX="6"
                  refY="2"
                  orient="auto"
                >
                  <polygon points="0 0, 6 2, 0 4" fill="#059669" />
                </marker>
              </defs>
            </svg>

            {/* Center Flag Icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                <Flag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Value System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We carefully evaluate potential investments against these key
              characteristics to ensure long-term value creation and sustainable
              growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
