import React from "react";
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
      name: "Bhavesh Dholiya",
      position: "Advisor",
      image: "photos/a4.jpg",
      bio: "Bhavesh Dholiya is a self-made entrepreneur who started in 2008 with cosmetics, expanded into perfumes with L’Amont.",
      linkedin:
        "https://www.linkedin.com/in/dr-a-m-sherry-2877834a/?originalSubdomain=in",
    },
  ];

  const advisors = [
    {
      name: "Mr. Jignesh Lakhani",
      position: "Fund Advisor",
      image: "/photos/lakhani.jpeg",
      bio : `Jignesh Jasmatbhai Lakhani is a seasoned professional in the capital markets industry, bringing over 20 years of extensive experience to the table. His career trajectory highlights a wealth of knowledge and hands-on expertise across various segments of the stock broking business.
• 2002 – 2005: Began his career as a dealer in Surat, working with a sub-broker of Religare Broking.
• 2006 – 2009: Transitioned to becoming a sub-broker for Master Trust under his own name.
• 2009 – 2014: Founded Aashar Capital Pvt. Ltd., operating as a sub-broker for Master Capital Services under the name Aashar Capital Services Pvt. Ltd.
• 2014 – 2024: Aashar Capital continued to operate as an Authorized Person of 
Master Capital Services, handling stockbroking operations.
In recent times, Aashar Capital has ceased all broking and sub-broking activities. As of the date of this application, the company is no longer involved in stockbroking operations.Mr. Jignesh Lakhani has served as the Promoter and Managing Director of Aashar Capital Services Private Limited since its inception in 2009. Throughout his career, he has successfully managed the full spectrum of broking operations, including client acquisition and retention, market research and analysis, and regulatory compliance.His extensive experience also extends to providing tailored investment advice, assessing clients' risk profiles, and conducting educational seminars to enhance investor knowledge on market trends and strategies.Currently, Aashar Capital is shifting its focus towards advisory, and growth consulting services aimed at small and medium-sized enterprises (SMEs).In addition to his professional accomplishments, Mr. Lakhani holds an NISM certification in Equity Derivatives and has completed his Higher Secondary Certificate (H.S.C.) from the Gujarat State Board.`,
      linkedin: "https://www.linkedin.com/in/jignesh-lakhani-806550b1/",
    },
    {
      name: "Mr. Manish Bansal",
      position: "Fund Advisor",
      image: "/photos/bansal.jpeg",
      bio: ` Manish Kumar Bansal is a finance professional with over 28 years of experience across various roles in equity research, regulatory bodies, banking, investment banking, and consulting.
Manish is serving as a part-time consultant for the Department of Economic Affairs, Ministry of Finance, India, where he contributes to research aimed at enhancing the efficiency of Indian financial markets. Additionally, he has held senior roles at Citibank, where he was instrumental in establishing the commodity derivatives business in India, and at the Securities and Exchange Board of India (SEBI), where he contributed to the development of equity derivatives markets and other key financial innovations.Manish holds an M.S. in Finance from the Robert H. Smith School of Business, University of Maryland, a Chartered Financial Analyst (CFA) designation from the Institute of Chartered Financial Analysts of India, and an MBA from Faculty of Management Studies, Saugar University`,
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
                        {advisor.bio.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative w-48 h-48 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden">
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
