import { useState, useEffect } from "react";
import {
  Users,
  Scale,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import "./TargetPortfolioCharacteristics.css";
import NiftyIndicesBarGraph from "./NiftyIndicesBarGraph";
import NiftySMEEmergeGraph from "./NiftySMEEmergeGraph";
import NiftySMEIpoGraph from "./NiftySMEIpoGraph";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [dealSize, setDealSize] = useState(0);
  const [investeeCompanies, setInvesteeCompanies] = useState(0);
  const [minorityStakeInvestment, setMinorityStakeInvestment] = useState(0);
  const [sponsorCommitment, setSponsorCommitment] = useState(0);
  const [fundManagerCommitment, setFundManagerCommitment] = useState(0);

  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({
    Icon,
    size = "h-16 w-16",
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dealSize < 10) {
        setDealSize(dealSize + 1);
      }
      if (investeeCompanies < 25) {
        setInvesteeCompanies(investeeCompanies + 1);
      }
      if (minorityStakeInvestment < 49) {
        setMinorityStakeInvestment(minorityStakeInvestment + 1);
      }
      if (sponsorCommitment < 15) {
        setSponsorCommitment(sponsorCommitment + 1);
      }
      if (fundManagerCommitment < 5) {
        setFundManagerCommitment(fundManagerCommitment + 1);
      }
    }, 100); // Adjust interval for counting speed

    return () => clearInterval(intervalId);
  }, [
    dealSize,
    investeeCompanies,
    minorityStakeInvestment,
    sponsorCommitment,
    fundManagerCommitment,
  ]);

  const features = [
    {
      icon: HandCoins,
      title: "Fund Objective",
      description:
        "Provide growth capital and strategic support to small and medium enterprises (SMEs) and help investors build wealth",
    },
    {
      icon: Scale,
      title: "Regulatory Status",
      description:
        "SEBI registered investment vehicle SEBI Registration no. –IN/AIF1/24-25/1676",
    },
    {
      icon: Users,
      title: "Key Stakeholders",
      description: "Investors Investee Companies Investment Manager/Sponsor",
    },
  ];

  const slides = [
    {
      image: "/scroll/s3.jpg",
      title: "Navigating Success Together",
      description:
        "We invest in innovative startups and growth companies that are shaping the future of technology and business.",
    },
    {
      image:
        "/scroll/s2.jpg",
      title: "Building the Future of Finance",
      description:
        "Partner with us to turn your groundbreaking ideas into market-leading companies.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen max-w-full overflow-hidden bg-white">
      {/* Hero Section with Pagination */}
      <div className="pt-16">
        <div className="relative h-[625px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 transform ${
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : currentSlide < index
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-90 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <h1 className="text-5xl text-[#2C7C41] font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 max-w-2xl text-[#2C7C41]">{slide.description}</p>
                  <button className="bg-white text-[#2C7C41] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

      {/* Pagination Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-30">
            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Overview of INFIPLY SME Growth Fund
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and services to facilitate successful business
              transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <IconWrapper Icon={feature.icon} size="h-16 w-16" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
        {/* Header Section */}
        <div className="bg-white text-[#2C7C41] p-8 rounded-t-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investment Strategy
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Invest primarily in securities of those companies, which are listed
            or proposed to be listed on SME exchange or SME segment of an
            exchange
          </p>
        </div>
        <div className="w-full px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <img
              src="/photos/is.jpg"
              alt="Investment Strategy"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center justify-center space-x-3 bg-[#2C7C41] text-white px-8 py-4 rounded-full hover:bg-[#2C7C41]/90 transition-colors hover:text-black duration-300 group"
          >
            <span className="text-lg font-semibold hover:text-black">
              Learn More About Our Strategy
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Graphical Representation */}
      <div className="py-20 m-auto align-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftySMEEmergeGraph />
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftyIndicesBarGraph />
        </div>
      </div>

      <div className="py-20 m-auto align-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NiftySMEIpoGraph />
        </div>
      </div>
    </div>
  );
}

export default App;
