export default function AboutSection() {
  const stats = [
    { value: "45+", label: "Years Collective Experience" },
    { value: "25-30", label: "Target Companies" },
    { value: "5", label: "Year Fund Horizon" },
    { value: "100 Cr", label: "Fund Corpus" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-[#2C7C41]">
              A Legacy of Strategic Growth
            </h2>
            <p className="text-gray-700 mb-6">
              At Infiply Advisors, we combine decades of collective financial
              expertise with a forward-thinking investment philosophy. We are
              not just a fund; we are partners in growth, dedicated to nurturing
              businesses with the potential to lead their industries.
            </p>
            <p className="text-gray-700 mb-6">
              Our commitment to due diligence, strategic asset allocation, and
              meticulous market analysis positions us as a trusted leader in
              investment management. Your investment deserves a firm that stands
              on a foundation of integrity, innovation, and insight.
            </p>
            <p className="text-gray-700">
              Infiply Advisors LLP is built on these pillars, ensuring that
              every investment decision we make is aimed at achieving long-term
              growth and stability. Our approach is tailored to safeguard your
              interests while maximizing returns, making your financial goals
              achievable and secure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-[#2C7C41] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Mission and Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3 text-[#2C7C41]">Mission</h4>
              <p className="text-gray-700">
                At Infiply Advisors LLP, our mission is to empower small and
                medium enterprises (SMEs) by providing them with the strategic
                resources they need to thrive in competitive markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3 text-[#2C7C41]">Vision</h4>
              <p className="text-gray-700">
                Our vision is to become a leading investment firm known for
                transforming potential into success on a global scale.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-2 text-[#2C7C41]">
                Integrity
              </h4>
              <p className="text-gray-700">
                Upholding the highest standards of honesty and transparency in
                every interaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-2 text-[#2C7C41]">
                Innovation
              </h4>
              <p className="text-gray-700">
                Pioneering new strategies to stay ahead in a rapidly evolving
                financial landscape.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-2 text-[#2C7C41]">
                Commitment
              </h4>
              <p className="text-gray-700">
                Dedicated to the long-term success of our investors and their
                investments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-2 text-[#2C7C41]">
                Resilience
              </h4>
              <p className="text-gray-700">
                Navigating market challenges with a steady hand and a focus on
                sustainable growth.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
