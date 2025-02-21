import { Linkedin } from "lucide-react";

function Team() {
    const teamMembers = [
      {
        name: "Mr. Rohit Arora",
        position: "Advisor",
        image: "/photos/a1.jpeg",
        bio: "Founder of Transganization (Business Growth Strategist)",
        linkedin:
          "https://www.linkedin.com/in/rohit-arora-transganization/?originalSubdomain=in",
      },
      {
        name: "Mr. Nagendra Parakh",
        position: "Advisor",
        image: "/photos/a2.png",
        bio: "Former Executive Director at securities and exchange board of india(SEBI)",
        linkedin:
          "https://www.linkedin.com/in/nagendraa-parakh-31730221/?originalSubdomain=in",
      },
      {
        name: "Dr. A. M. Sherry",
        position: "Advisor",
        image: "photos/a3.jpg",
        bio: "DEA Chair Professor (Financial Markets) AJNIFM, Ministry of Finance, Government of India",
        linkedin:
          "https://www.linkedin.com/in/dr-a-m-sherry-2877834a/?originalSubdomain=in",
      },
      {
        name: "Dr. A. M. Sherry",
        position: "Advisor",
        image: "photos/a3.jpg",
        bio: "DEA Chair Professor (Financial Markets) AJNIFM, Ministry of Finance, Government of India",
        linkedin:
          "https://www.linkedin.com/in/dr-a-m-sherry-2877834a/?originalSubdomain=in",
      },
      {
        name: "Dr. A. M. Sherry",
        position: "Advisor",
        image: "photos/a3.jpg",
        bio: "DEA Chair Professor (Financial Markets) AJNIFM, Ministry of Finance, Government of India",
        linkedin:
          "https://www.linkedin.com/in/dr-a-m-sherry-2877834a/?originalSubdomain=in",
      },
    ];

  const advisors = [
    {
      name: "Mr. Jignesh Lakhani",
      position: "Fund Advisor",
      image: "/photos/lakhani.jpeg",
      bio: ` 20+ years in healthcare innovation and entrepreneurship Ankush Kumar Jain is a seasoned financial professional with a strong background in investment management. As a Chartered Financial Analyst (CFA) and member of the Institute of Chartered Financial Analysts of India (ICFAI), he brings a wealth of expertise to his role as Fund Manager at ACE Shares Private Ltd, which he joined in 2022.
  
  //     Prior to his current position, Ankush worked at Edelweiss Wealth Management in Ahmedabad as part of the Investment Advisory division, where he focused on the Structured Product and AIF segments. He began his career in 2007 as a Research Analyst at Raghunandan Securities, where he honed his skills in commodities and currencies. With 12 years of experience in the Indian equity markets, Ankush has developed a deep understanding of fundamental, technical, and derivative strategies.
  
  //     Ankush holds a B.Com degree from St. John's College, Agra University, which he earned in 2007. He is also a SEBI Registered Investment Advisor (Registration No. INA000012041), having obtained his registration in November 2018. Ankush's expertise and experience make him a valuable asset to the ACE Shares team, where he leverages his extensive knowledge to help clients achieve their investment goals.`,
      linkedin: "https://www.linkedin.com/in/jignesh-lakhani-806550b1/",
    },
    {
      name: "Mr. Manish Bansal",
      position: "Fund Advisor",
      image: "/photos/bansal.jpeg",
      bio: ` 25+ years of experience in Financial Markets Kresha Gupta is a highly qualified and experienced Chartered Accountant (CA) and a member of the Institute of Chartered Accountants of India (ICAI). She has a distinguished academic record and has gained significant expertise in the field through her management and consulting experience.
  
  //     Kresha's extensive experience spans across both corporate and consulting roles in Finance, Accounts, MIS, Tax Advisory, Investor Relations, Treasury, and other areas. Prior to founding Gupta KK & Associates, Kresha worked with Vodafone Idea Limited, where she held the position of Assistant General Manager and was responsible for Investor Relations and Treasury, reporting directly to the Chief Financial Officer.
  
  //     At Gupta KK & Associates, Kresha spearheads an integrated one-stop service firm that offers end-to-end solutions in Equity & Debt Management, Fund Raising, and other related areas. With her deep understanding of equity and debt instruments, Kresha manages a diversified portfolio of equities and other debt instruments for her clients.`,
      linkedin: "https://www.linkedin.com/in/manish-bansal-bb711117/",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl max-w-2xl">
              Experienced professionals dedicated to helping founders build
              exceptional companies
            </p>
          </div>
        </div>
      </div>

      {/* Investment Team */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advisors Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together diverse expertise across technology,
              operations, and investment management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-3/4 aspect-h-3/4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-50 object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#2C7C41] font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-600 hover:text-[#2C7C41]"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisors */}
      <div className="w-full bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2C7C41] mb-6">
            Sponsor of the Fund
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-700">
            Our experienced Sponsor bring decades of expertise to guide and
            shape the fund's strategic vision.
          </p>
        </div>

        <div className="space-y-20">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start px-24"
            >
              {/* Profile Image */}
              <div className="relative w-[350px] h-[350px] mx-auto md:mx-0 shrink-0">
                <div className="absolute inset-0 rounded-full p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-[#2C7C41]">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Advisor Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#2C7C41]">
                  {advisor.name}
                </h3>
                <h4 className="text-gray-600 text-xl mb-4">
                  {advisor.position}
                </h4>
                <p className="text-gray-700 mb-4">{advisor.bio}</p>

                {/* LinkedIn Link as Text */}
                {advisor.linkedin && (
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] text-lg font-semibold"
                  >
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
