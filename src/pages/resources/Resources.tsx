import CAGRBarChart from "./CAGRBarChart";
import { Award, Globe, TrendingUp, Users } from "lucide-react";

function Resources() {
  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({
    Icon,
    size = "h-14 w-14",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
            alt="Resources"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-5xl font-bold mb-6">Records</h1>
              <p className="text-xl max-w-2xl">
                Insights, research, and knowledge to help founders build
                exceptional companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-gray-50 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[#2C7C41]">
              Our Track Record
            </h2>
            <p className="text-2xl font-medium text-black">
              Trusted Expertise. Proven Execution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-black mb-8">
              At Infiply Advisors LLP, our strength lies in our ability to
              identify scalable opportunities, deploy capital strategically, and
              actively support the growth journey of small and medium-sized
              enterprises. With decades of collective experience in investment
              management and capital markets, our leadership team has
              successfully partnered with high-potential businesses across a
              range of sectors.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#2C7C41]">
                What Sets Our Approach Apart:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start text-black">
                  <span className="text-green-400 mr-2">•</span>
                  Extensive experience in SME investing and capital market
                  strategy
                </li>
                <li className="flex items-start text-black">
                  <span className="text-green-400 mr-2">•</span>
                  Robust due diligence and risk management frameworks
                </li>
                <li className="flex items-start text-black">
                  <span className="text-green-400 mr-2">•</span>
                  Strong networks across founders, advisors, and institutional
                  stakeholders
                </li>
                <li className="flex items-start text-black">
                  <span className="text-green-400 mr-2">•</span>
                  Active involvement in unlocking operational and strategic
                  value
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-[#2C7C41]">
              We're not just investors—we're long-term partners committed to
              transforming potential into performance.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <IconWrapper Icon={Users} size="h-12 w-12 text-[#2C7C41]" />
              </div>
              <h3 className="text-xl font-bold mb-2">100+ Combined Years</h3>
              <p className="text-black">Of Investment Experience</p>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <IconWrapper Icon={Globe} size="h-12 w-12 text-[#2C7C41]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pan-India Network</h3>
              <p className="text-black">Across Multiple Industries</p>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <IconWrapper
                  Icon={TrendingUp}
                  size="h-12 w-12 text-[#2C7C41]"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Research-Driven</h3>
              <p className="text-black">Investment Strategy</p>
            </div>
          </div>

          {/* Founder Quote */}
          <div className="bg-slate-100 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Award className="h-10 w-10 text-[#2C7C41]" />
              </div>
              <div>
                <blockquote className="text-xl italic text-black mb-4">
                  "We don't just invest in companies—we walk with founders to
                  build legacy businesses."
                </blockquote>
                <cite className="block text-right text-sm text-[#2C7C41]">
                  – Manish Bansal, Founder
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <div className="py-20 m-auto align-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CAGRBarChart />
        </div>
      </div>
    </div>
  );
}

export default Resources;
