import { CheckCircle, Award, TrendingUp } from "lucide-react";

export default function TrackRecordAchievements() {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Extensive Experience",
      description:
        "Decades of collective experience in investment management and capital markets",
    },
    {
      icon: CheckCircle,
      title: "Strategic Partnerships",
      description:
        "Successfully partnered with high-potential businesses across various sectors",
    },
    {
      icon: Award,
      title: "Value Creation",
      description:
        "Proven track record of unlocking operational and strategic value for portfolio companies",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-center mb-12 text-lg">
            At Infiply Advisors LLP, our strength lies in our ability to
            identify scalable opportunities, deploy capital strategically, and
            actively support the growth journey of small and medium-sized
            enterprises. With decades of collective experience in investment
            management and capital markets, our leadership team has successfully
            partnered with high-potential businesses across a range of sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-[#2C7C41]/10">
                  <achievement.icon className="h-6 w-6 text-[#2C7C41]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
