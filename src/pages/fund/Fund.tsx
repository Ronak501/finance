import React from 'react';
import { BarChart2, PieChart, Combine as ChartNoAxesCombined, HeartHandshake, BookType, Clock } from "lucide-react";
import { GraduationCap, Users, Heart, Puzzle as PuzzlePiece } from 'lucide-react';

function ImpactCard({ title, icon: Icon, description, isGreen }: {
  title: string;
  icon: React.ElementType;
  description: string;
  isGreen: boolean;
}) {
  return (
    <div 
      className={`p-8 relative group overflow-hidden ${
        isGreen ? 'bg-[#2C7C41] text-white' : 'bg-white text-[#2C7C41]'
      }`}
    >
      {/* Hover corner effects */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isGreen ? 'bg-[#1f5c30]' : 'bg-gray-100'
      }`}>
        <div className="absolute top-0 left-0 w-16 h-16 bg-black/10" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-black/10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/10" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-black/10" />
      </div>
      
      {/* Card content */}
      <div className="text-center space-y-6 relative z-10">
        <div className="relative w-32 h-32 mx-auto">
          <div className={`absolute inset-0 border-2 border-dashed ${isGreen ? 'border-white/30' : 'border-[#2C7C41]/30'} rounded-full`} />
          <div className={`absolute inset-2 ${isGreen ? 'bg-[#2C7C41]' : 'bg-white'} rounded-full flex items-center justify-center`}>
            <Icon className={`w-16 h-16 ${isGreen ? 'text-white' : 'text-[#2C7C41]'}`} strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="text-xl font-bold leading-tight min-h-[60px]">
          {title}
        </h2>
        <p className="text-sm opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}

function Fund() {
  const fundStats = [
    {
      label: "Fund Size",
      value: "Rs. 100 Cr. with a green-shoe option of Rs. 50Cr",
      icon: PieChart,
    },
    {
      label: "Sponsor and Fund Manager",
      value:
        "Infiply Advisors LLP, which is promoted by experienced Capital Market professionals Mr. Jignesh Lakhani and Mr. Manish Bansal",
      icon: ChartNoAxesCombined,
    },
    {
      label: "Sponsor's contribution",
      value:
        "Sponsors to invest minimum 2.5% of the fund size or Rs. 5 Cr., whichever is lower, as prescribed by regulations",
      icon: HeartHandshake,
    },
    { label: "Type of Scheme", value: "Close Ended", icon: BookType },
    {
      label: "Status of Fund",
      value:
        "Contributory Determinate Investment Trust under the Indian Trusts Act",
      icon: BarChart2,
    },
    {
      label: "Tenor",
      value:
        "7 years from the date of Initial closing; Term may be extended for 2 additional periods of 1 year each, subject to approvals as required by law",
      icon: Clock,
    },
  ];

  const riskFactors = [
    {
      title: "INCREASED KNOWLEDGE & SKILLS",
      icon: GraduationCap,
      description: "Lorem ipsum dolor sit dim amet, mea regione diamet principes at."
    },
    {
      title: "COMMUNITY MEMBERS EMPOWERMENT",
      icon: Users,
      description: "Lorem ipsum dolor sit dim amet, mea regione diamet principes at."
    },
    {
      title: "ENHANCED SOCIAL INCLUSION",
      icon: Heart,
      description: "Lorem ipsum dolor sit dim amet, mea regione diamet principes at."
    },
    {
      title: "SOCIAL COHESION",
      icon: PuzzlePiece,
      description: "Lorem ipsum dolor sit dim amet, mea regione diamet principes at."
    }
  ];

  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({ Icon, size = "h-16 w-16" }) => (
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
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Fund Details"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">Fund Details</h1>
            <p className="text-xl max-w-2xl">
              Cubs become lions, Saplings become tree, and SMEs become large
              companies
            </p>
          </div>
        </div>
      </div>

      {/* Fund Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <IconWrapper Icon={stat.icon} size="h-16 w-16"/>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {stat.label}
                </h3>
                <p className="text-1xl text-gray-800 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2C7C41] mb-12">
            Risk Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {riskFactors.map((factor, index) => (
              <ImpactCard
                key={index}
                title={factor.title}
                icon={factor.icon}
                description={factor.description}
                isGreen={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fund;