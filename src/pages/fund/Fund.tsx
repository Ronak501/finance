import React from 'react';
import { useState, useEffect } from "react";
import { BarChart2, BarChart, TrendingUp, Target, PieChart, Combine as ChartNoAxesCombined, HeartHandshake, BookType, Clock, CheckCircle } from "lucide-react";
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

  const [dealSize, setDealSize] = useState(0);
  const [investeeCompanies, setInvesteeCompanies] = useState(0);
  const [minorityStake, setMinorityStake] = useState(0);
  const [sponsorCommitment, setSponsorCommitment] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dealSize < 10) setDealSize((prev) => Math.min(prev + 1, 10));
      if (investeeCompanies < 25)
        setInvesteeCompanies((prev) => Math.min(prev + 1, 25));
      if (minorityStake < 49)
        setMinorityStake((prev) => Math.min(prev + 1, 49));
      if (sponsorCommitment < 15)
        setSponsorCommitment((prev) => Math.min(prev + 1, 15));
    }, 100);

    return () => clearInterval(intervalId);
  }, [dealSize, investeeCompanies, minorityStake, sponsorCommitment]);

  const metrics = [
    {
      icon: BarChart,
      value: `₹${dealSize}-15 Cr`,
      label: "Average Deal Size",
    },
    {
      icon: Target,
      value: `${investeeCompanies}-30`,
      label: "Target Investee Companies",
    },
    {
      icon: TrendingUp,
      value: `${minorityStake}%`,
      label: "Minority Stake Investment",
    },
    {
      icon: PieChart,
      value: `${sponsorCommitment}%`,
      label: "Sponsor Commitment",
    },
  ];

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

  const highlights = [
    "Launch Date: April 2025",
    "Structure: Close-ended Category I AIF, registered under SEBI guidelines",
    "Fund Corpus: INR 100 Crore, with an additional INR 50 Crore green shoe option",
    "Investor Entry Point: Minimum capital commitment of INR 1 Crore",
    "Portfolio Breadth: Investments in approximately 25 to 30 carefully selected companies",
    "Investment Tenure: 5-year term, focused on growth and value unlocking",
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
            <h1 className="text-5xl font-bold mb-6">
              SME Growth Fund – Series Alpha
            </h1>
            <p className="text-xl max-w-2xl">
              An offering of &apos;INFIPLY SME Growth Fund&apos;, a SEBI
              registered Cat. 1, Alternative Investment Fund
            </p>
            <p className="text-xl max-w-2xl">
              Designed to support the growth and expansion of small and medium
              enterprises and help investors build wealth
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#2C7C41] text-center">
              Fund Overview
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-6">
                Infiply Advisors LLP manages a Category I Alternative Investment
                Fund (AIF) with a dedicated focus on India's thriving small and
                medium enterprise (SME) sector. Designed for investors seeking
                long-term value creation, our flagship fund – Series Alpha –
                invests in high-potential businesses that are poised for growth
                and scalability.
              </p>

              <p className="text-gray-700">
                Step into the world of Infiply Advisors LLP, where expertise
                meets opportunity in the landscape of strategic investment. Our
                flagship SME Growth Fund – Series Alpha is just the beginning of
                a robust portfolio of targeted investment solutions designed to
                harness the untapped potential of small and medium enterprises
                destined for greatness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#2C7C41] text-center">
              Fund Highlights
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#2C7C41] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#2C7C41] text-center">
              Our Investment Approach
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#2C7C41]">
                  Purpose-Driven and Sector-Agnostic
                </h3>
                <p className="text-gray-700">
                  While we remain sector-agnostic, our investment thesis is
                  built around scalable, capital-efficient, founder-led
                  businesses with strong fundamentals. We invest in unlisted
                  SMEs as well as those listed or to be listed on SME platforms,
                  with an approach tailored to the unique lifecycle of each
                  company.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#2C7C41]">
                  Strategic Capital. Operational Insight. Sustainable Returns.
                </h3>
                <p className="text-gray-700">
                  Our role extends beyond capital—we provide strategic
                  direction, business mentorship, and access to networks that
                  empower entrepreneurs to scale. Through disciplined research,
                  a structured investment process, and risk-managed
                  diversification, we strive to deliver stable and superior
                  returns.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#2C7C41]">
                  What Sets Infiply Apart
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Strong leadership with 20+ years of capital markets
                    expertise
                  </li>
                  <li>
                    Clear investment processes and governance-driven
                    decision-making
                  </li>
                  <li>
                    Flexibility in deal structuring and sector preferences
                  </li>
                  <li>
                    Focus on long-term partnerships, not just short-term returns
                  </li>
                  <li>
                    Transparent communication and robust investor reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-10 text-[#2C7C41] text-center">
              Fund Snapshot
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 rounded-full bg-[#2C7C41]/10">
                    <metric.icon className="h-6 w-6 text-[#2C7C41]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2C7C41] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fund Stats */}
      <div className="py-12 bg-white">
        <h1 className="text-4xl font-bold text-center text-[#2C7C41] mb-12">
          Fund Details
        </h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <IconWrapper Icon={stat.icon} size="h-16 w-16" />
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