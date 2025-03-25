import { CheckCircle, Award, TrendingUp } from "lucide-react";

export default function TrackRecordSection() {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Trusted Expertise",
      description:
        "Decades of collective experience in investment management and capital markets",
    },
    {
      icon: CheckCircle,
      title: "Proven Execution",
      description:
        "Successfully partnered with high-potential businesses across various sectors",
    },
    {
      icon: Award,
      title: "Strategic Value",
      description:
        "Active involvement in unlocking operational and strategic value for portfolio companies",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#2C7C41]">
            Our Track Record
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted Expertise. Proven Execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-[#2C7C41]/10">
                <achievement.icon className="h-6 w-6 text-[#2C7C41]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">
            What Sets Our Approach Apart:
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#2C7C41] mr-3 flex-shrink-0 mt-0.5" />
              <span>
                Extensive experience in SME investing and capital market
                strategy
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#2C7C41] mr-3 flex-shrink-0 mt-0.5" />
              <span>Robust due diligence and risk management frameworks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#2C7C41] mr-3 flex-shrink-0 mt-0.5" />
              <span>
                Strong networks across founders, advisors, and institutional
                stakeholders
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#2C7C41] mr-3 flex-shrink-0 mt-0.5" />
              <span>
                Active involvement in unlocking operational and strategic value
              </span>
            </li>
          </ul>
          <p className="mt-6 text-center font-medium text-lg">
            We're not just investors—we're long-term partners committed to
            transforming potential into performance.
          </p>
        </div>
      </div>
    </section>
  );
}
