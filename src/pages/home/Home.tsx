import { useState, useEffect } from "react";
import {
  Users,
  Scale,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import "./TargetPortfolioCharacteristics.css";
import NiftyIndicesBarGraph from "./NiftyIndicesBarGraph";
import NiftySMEEmergeGraph from "./NiftySMEEmergeGraph";
import NiftySMEIpoGraph from "./NiftySMEIpoGraph";
import QuoteStrip from "./QuoteStrip";
import AboutSection from "./AboutSection";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [dealSize, setDealSize] = useState(0);
  const [investeeCompanies, setInvesteeCompanies] = useState(0);
  const [minorityStakeInvestment, setMinorityStakeInvestment] = useState(0);
  const [sponsorCommitment, setSponsorCommitment] = useState(0);
  const [fundManagerCommitment, setFundManagerCommitment] = useState(0);
  const navigate = useNavigate();

  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({
    Icon,
    size = "h-8 w-8",
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
      image: "/scroll/s1.png",
    },
    {
      image: "/scroll/s2.png",
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
      <div className="max-w-full  mx-auto">
        <div className="pt-16 mid:pt-24 ml-2">
          <div className="relative h-[250px] xs:h-[300px] mid:h-[500px] lg:h-[700px] xl:h-[800px]">
            {/* Slides */}
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
                <div className="absolute inset-0 bg-gradient-to-r z-10"></div>
                <img
                  src={slide.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7C41]/10">
                  <IconWrapper Icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote/Philosophy Strip */}
      <QuoteStrip />

      {/* Intro Section: Who We Are */}
      <AboutSection />

      {/* Market Insights Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C7C41] mb-4">
              Market Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the growth potential of the SME sector
            </p>
          </div>

          <div className="space-y-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <NiftyIndicesBarGraph />
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <NiftySMEEmergeGraph />
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <NiftySMEIpoGraph />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-[#2C7C41] hover:bg-[#2C7C41]/90 text-white group"
              size="lg"
              onClick={() => navigate("/about")}
            >
              <span>Learn More About Our Strategy</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
