  import { useState, useEffect } from "react";
import {
  Users,
  Scale,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [minorityStake, setMinorityStake] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
      const duration = 2000; // 2 seconds
      const steps = 50;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setDealSize(Math.floor(progress * 100));
        setInvesteeCompanies(Math.floor(progress * 25));
        setMinorityStake(Math.floor(progress * 49));
        setSponsorCommitment(Math.floor(progress * 20));
        setFundManagerCommitment(Math.floor(progress * 15));

        if (step === steps) {
          clearInterval(timer);
          setIsAnimating(false);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  interface StatCardProps {
    value: number;
    unit?: string;
    label: string;
  }

  const StatCard: React.FC<StatCardProps> = ({ value, unit, label }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="stat-card bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300"
    >
      <motion.div
        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent"
        animate={{ rotateY: isAnimating ? 360 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {value}
        {unit && <span className="text-4xl ml-1">{unit}</span>}
      </motion.div>
      <div className="text-lg md:text-xl mt-3 text-gray-700 font-semibold">
        {label}
      </div>
    </motion.div>
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
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      title: "Building Tomorrow's Success Stories",
      description:
        "We invest in innovative startups and growth companies that are shaping the future of technology and business.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      title: "Empowering Visionary Founders",
      description:
        "Partner with us to turn your groundbreaking ideas into market-leading companies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
      title: "Global Impact, Local Presence",
      description:
        "Creating lasting value through strategic investments across markets worldwide.",
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
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
                  className={`h-8 rounded-full transition-all duration-300 ${
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
                <feature.icon className="h-16 w-16 text-[#2C7C41] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#2C7C41] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-lg">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Portfolio Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-emerald-600 text-white p-8 rounded-t-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investment Strategy
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Invest primarily in securities of those companies, which are listed
            or proposed to be listed on SME exchange or SME segment of an
            exchange
          </p>
        </div>

        {/* Strategy Pyramid */}
        <div className="mt-12 space-y-8">
          {/* Core Focus Area */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-emerald-600 text-white p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Core Focus Area
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 text-lg">
                Identify the most promising and high-potential investment
                opportunities based on thorough market analysis, industry
                trends, and evaluation of growth potential of businesses.
              </p>
            </div>
          </div>

          {/* Capital Deployment */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:pl-12">
            <div className="w-full md:w-2/5">
              <div className="bg-lime-500 text-white p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Capital Deployment
                </h2>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-gray-700 text-lg">
                Efficient capital allocation to maximize returns and minimize
                risks, following a diversified portfolio approach.
              </p>
            </div>
          </div>

          {/* Hands-On Approach */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:pl-24">
            <div className="w-full md:w-1/3">
              <div className="bg-emerald-700 text-white p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Hands-On Approach
                </h2>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 text-lg">
                Active engagement with portfolio companies, as and when
                required, providing operational guidance, strategic advice, and
                access to industry networks to drive growth and value creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TPC Section */}
      <div ref={ref} className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent mb-12"
          >
            Target Portfolio Characteristics
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StatCard value={dealSize} unit="CR" label="DEAL SIZE" />
            <StatCard value={investeeCompanies} label="INVESTEE COMPANIES" />
            <StatCard value={minorityStake} unit="%" label="MINORITY STAKE" />
          </div>

          {/* Second Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent mb-12"
          >
            We Have Skin In The Game
          </motion.h2>

          {/* Commitments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard
              value={sponsorCommitment}
              unit="CR"
              label="SPONSOR COMMITMENT"
            />
            <StatCard
              value={fundManagerCommitment}
              unit="CR"
              label="FUND MANAGER COMMITMENT"
            />
          </div>
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
