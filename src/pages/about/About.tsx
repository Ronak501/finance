import { Target, Award, Briefcase, Users, BarChart2 } from "lucide-react";

function About() {
  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({
    Icon,
    size = "h-16 w-16",
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

  return (
    <div className="min-h-screen w-[100%] bg-white">
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
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

      {/* Vision & Mission */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <IconWrapper Icon={Target} />
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To develop the Alternative Investment Fund (“AIF”) industry on
                professional and ethical lines and maintain high standards of
                governance and transparency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <IconWrapper Icon={Award} />
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Maintain high professional and ethical standards within the AIF
                industry.Comply with all applicable regulations and
                co-operate with the regulators in all aspects of the AIF
                activity.Act in a fiduciary capacity towards the investors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Philosophy */}
      <div className="py-20 bg-white">
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
            <div className="text-center">
              <IconWrapper Icon={Briefcase} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Core Focus Area
              </h3>
              <p className="text-gray-600">
                Identify the most promising and high-potential investment
                opportunities based on thorough market analysis, industry
                trends, and evaluation of growth potential of businesses.
              </p>
            </div>
            <div className="text-center">
              <IconWrapper Icon={Users} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Capital Deployment
              </h3>
              <p className="text-gray-600">
                Efficient capital allocation to maximize returns and minimize
                risks, leveraging a diversified portfolio approach.
              </p>
            </div>
            <div className="text-center">
              <IconWrapper Icon={BarChart2} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Hands-On Approach
              </h3>
              <p className="text-gray-600">
                Active engagement with portfolio companies, providing
                operational guidance, strategic advice, and access to industry
                networks to drive growth and value creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Focus */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Target Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses with potential to grow profitably for the long run.
            </p>
          </div>

          <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Owner Managers with skin in the game",
              "Long runway of Growth",
              "Operating in Niche",
              "Economic Moat with some sort of pricing power",
              "Focus on profitability and Return on Capital",
              "Cash generating businesses",
              "Low capital intensive",
              "Ethical Management",
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold text-[#2C7C41]">
                  {sector}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
