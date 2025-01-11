import { useState, useEffect } from "react";
import {
  Users,
  BarChart2,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="min-h-screen overflow-hidden bg-white">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
                  <button className="bg-white text-[#1ac8ed] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
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
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We bring more than just capital to the table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-[#1ac8ed] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team brings decades of experience in venture capital and
                entrepreneurship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BarChart2 className="h-12 w-12 text-[#1ac8ed] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Growth</h3>
              <p className="text-gray-600">
                We help companies scale through strategic guidance and
                operational support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Globe className="h-12 w-12 text-[#1ac8ed] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Access our vast network of industry leaders, experts, and
                potential partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1ac8ed] py-20">
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

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#1ac8ed]" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#1ac8ed]" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">contact@venturefund.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#1ac8ed]" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-gray-600">123 Investment Ave, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
