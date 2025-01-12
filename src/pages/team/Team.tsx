import { Linkedin, Mail } from "lucide-react";

function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Managing Partner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "20+ years of investment experience in technology and healthcare sectors",
      linkedin: "#",
      email: "john@venturefund.com",
    },
    {
      name: "Sarah Johnson",
      position: "Investment Partner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Former founder with multiple successful exits in the fintech space",
      linkedin: "#",
      email: "sarah@venturefund.com",
    },
    {
      name: "Michael Chen",
      position: "Principal",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Expertise in SaaS, enterprise software, and deep tech investments",
      linkedin: "#",
      email: "michael@venturefund.com",
    },
    {
      name: "Emily Brown",
      position: "Investment Associate",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Background in strategy consulting and startup operations",
      linkedin: "#",
      email: "emily@venturefund.com",
    },
  ];

  const advisors = [
    {
      name: "Dr. Robert Wilson",
      position: "Technology Advisor",
      image:
        "/photos/bansal.jpeg",
      bio: "Former CTO of Fortune 500 tech company",
      linkedin: "#",
    },
    {
      name: "Lisa Zhang",
      position: "Healthcare Advisor",
      image:
        "/photos/lakhani.jpeg",
      bio: "20+ years in healthcare innovation and entrepreneurship",
      linkedin: "#",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
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
              Investment Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together diverse expertise across technology,
              operations, and investment management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#1ac8ed] font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-600 hover:text-[#1ac8ed]"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-[#1ac8ed]"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisors */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highly skilled industry professionals delivering actionable
              strategic insights and specialized expertise, backed by a track
              record of measurable success in Fund Management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-84 object-fit"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{advisor.name}</h3>
                  <p className="text-[#1ac8ed] font-medium mb-4">
                    {advisor.position}
                  </p>
                  <p className="text-gray-600 mb-4">{advisor.bio}</p>
                  <a
                    href={advisor.linkedin}
                    className="text-gray-600 hover:text-[#1ac8ed]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
