import {
  BookOpen,
  FileText,
  Newspaper,
  Video,
  Podcast,
  ExternalLink,
} from "lucide-react";
import CAGRBarChart from "./CAGRBarChart";
import TrackRecordSection from "./track-record-section";

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

  const resources = [
    {
      category: "Research Reports",
      icon: <IconWrapper Icon={FileText} />,
      items: [
        {
          title: "State of SaaS in 2024",
          description:
            "Comprehensive analysis of the SaaS landscape and emerging trends",
          date: "March 2024",
        },
        {
          title: "FinTech Market Overview",
          description:
            "Deep dive into the evolving financial technology sector",
          date: "February 2024",
        },
      ],
    },
    {
      category: "Blog Posts",
      icon: <IconWrapper Icon={BookOpen} />,
      items: [
        {
          title: "Building Resilient Startups",
          description: "Key strategies for startup success in uncertain times",
          date: "March 15, 2024",
        },
        {
          title: "Fundraising Best Practices",
          description: "Essential tips for early-stage fundraising",
          date: "March 1, 2024",
        },
      ],
    },
    {
      category: "News & Updates",
      icon: <IconWrapper Icon={Newspaper} />,
      items: [
        {
          title: "Q1 2024 Investment Highlights",
          description:
            "Overview of our recent investments and portfolio updates",
          date: "March 2024",
        },
      ],
    },
    {
      category: "Video Content",
      icon: <IconWrapper Icon={Video} />,
      items: [
        {
          title: "Founder Stories Series",
          description: "Interviews with successful startup founders",
          date: "Ongoing",
        },
      ],
    },
    {
      category: "Podcasts",
      icon: <IconWrapper Icon={Podcast} />,
      items: [
        {
          title: "VentureFund Insights",
          description: "Weekly discussions on venture capital and startups",
          date: "Weekly",
        },
      ],
    },
  ];

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
              <h1 className="text-5xl font-bold mb-6">Resources</h1>
              <p className="text-xl max-w-2xl">
                Insights, research, and knowledge to help founders build
                exceptional companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CAGR Bar Chart */}
      <div className="py-20 flex min-h-screen flex-col">
        <div className="mx-auto sm:px-6 lg:px-8">
          <TrackRecordSection />
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                {category.icon}
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <a href="#" className="block hover:text-[#2C7C41]">
                        <h3 className="text-lg font-semibold text-[#2C7C41] mb-2 group-hover:text-[#04be20] flex items-center">
                          {item.title}
                          <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
