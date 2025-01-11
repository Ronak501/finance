import {
  Target,
  Award,
  Briefcase,
  Users,
  BarChart2,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen w-[100%] bg-white">
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[400px]">
          <div className="absolute z-1inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
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
              <Target className="h-12 w-12 text-[#1ac8ed] mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the catalyst for transformative innovation in the venture
                capital ecosystem, empowering visionary entrepreneurs to build
                world-changing companies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-[#1ac8ed] mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide strategic capital, operational expertise, and
                invaluable networks to ambitious founders, helping them
                transform their innovative ideas into market-leading
                enterprises.
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
              Investment Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in backing exceptional founders who are building
              innovative solutions to meaningful problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="h-12 w-12 text-[#1ac8ed] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Long-term Partnership
              </h3>
              <p className="text-gray-600">
                We're committed to supporting our portfolio companies throughout
                their growth journey.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#1ac8ed] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Founder-First Approach
              </h3>
              <p className="text-gray-600">
                We prioritize strong relationships with founders and support
                their vision for growth.
              </p>
            </div>
            <div className="text-center">
              <BarChart2 className="h-12 w-12 text-[#1ac8ed] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Value Creation</h3>
              <p className="text-gray-600">
                Beyond capital, we provide strategic guidance and access to our
                global network.
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
              Investment Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on high-growth sectors with transformative potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Enterprise SaaS",
              "FinTech",
              "HealthTech",
              "AI/ML",
              "Consumer Tech",
              "Deep Tech",
              "Clean Tech",
              "Web3/Blockchain",
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold text-[#1ac8ed]">
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
