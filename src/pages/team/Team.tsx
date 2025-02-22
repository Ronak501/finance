import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      bio: ` 20+ years in healthcare innovation and entrepreneurship Ankush Kumar Jain is a seasoned financial professional with a strong background in investment management. As a Chartered Financial Analyst (CFA) and member of the Institute of Chartered Financial Analysts of India (ICFAI), he brings a wealth of expertise to his role as Fund Manager at ACE Shares Private Ltd, which he joined in 2022.Prior to his current position, Ankush worked at Edelweiss Wealth Management in Ahmedabad as part of the Investment Advisory division, where he focused on the Structured Product and AIF segments. He began his career in 2007 as a Research Analyst at Raghunandan Securities, where he honed his skills in commodities and currencies. With 12 years of experience in the Indian equity markets, Ankush has developed a deep understanding of fundamental, technical, and derivative strategies.Ankush holds a B.Com degree from St. John's College, Agra University, which he earned in 2007. He is also a SEBI Registered Investment Advisor (Registration No. INA000012041), having obtained his registration in November 2018. Ankush's expertise and experience make him a valuable asset to the ACE Shares team, where he leverages his extensive knowledge to help clients achieve their investment goals.`,
      linkedin: "https://www.linkedin.com/in/jignesh-lakhani-806550b1/",
    },
    {
      name: "Mr. Manish Bansal",
      position: "Fund Advisor",
      image: "/photos/bansal.jpeg",
      bio:  ` 25+ years of experience in Financial Markets Kresha Gupta is a highly qualified and experienced Chartered Accountant (CA) and a member of the Institute of Chartered Accountants of India (ICAI). She has a distinguished academic record and has gained significant expertise in the field through her management and consulting experience.Kresha's extensive experience spans across both corporate and consulting roles in Finance, Accounts, MIS, Tax Advisory, Investor Relations, Treasury, and other areas. Prior to founding Gupta KK & Associates, Kresha worked with Vodafone Idea Limited, where she held the position of Assistant General Manager and was responsible for Investor Relations and Treasury, reporting directly to the Chief Financial Officer.At Gupta KK & Associates, Kresha spearheads an integrated one-stop service firm that offers end-to-end solutions in Equity & Debt Management, Fund Raising, and other related areas. With her deep understanding of equity and debt instruments, Kresha manages a diversified portfolio of equities and other debt instruments for her clients.`,
      linkedin: "https://www.linkedin.com/in/manish-bansal-bb711117/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-16">
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
      </div>

      {/* Sponsor Section - Moved up for priority */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sponsor of the Fund
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Our experienced Sponsors bring decades of expertise to guide and
              shape the fund's strategic vision.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {advisors.map((advisor, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                      <div className="absolute inset-0 rounded-full p-1">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
                          <img
                            src={advisor.image || "/placeholder.svg"}
                            alt={advisor.name}
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, 256px"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {advisor.name}
                      </h3>
                      <h4 className="text-xl text-muted-foreground mb-4">
                        {advisor.position}
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        {advisor.bio}
                      </p>
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Advisors Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team brings together diverse expertise across technology,
              operations, and investment management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative h-48 sm:h-40">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
