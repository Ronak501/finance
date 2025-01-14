import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

function MeetUs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-2xl">
              Get in touch with our team to explore investment opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-[#1ac8ed] focus:border-[#1ac8ed]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1ac8ed] focus:border-[#1ac8ed]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 bg-white py-2 border border-gray-300 rounded-md focus:ring-[#1ac8ed] focus:border-[#1ac8ed]"
                    placeholder="Investment Inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1ac8ed] focus:border-[#1ac8ed]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1ac8ed] text-white py-2 px-4 rounded-md hover:bg-[#15b5d8] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#1ac8ed] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">
                        Office Location
                      </h3>
                      <p className="text-gray-600">
                        06, Nathubhai Tower, Udhna Main Road
                      </p>
                      <p className="text-gray-600">Surat, Gujarat, 394210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#1ac8ed] mt-1" />
                    <div className="ml-4">
                      <h3 className="text-gray-800 font-semibold ">Phone</h3>
                      <p className="text-gray-600">+91 9892486751</p>
                      <p className="text-gray-600">+91 9727201001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#1ac8ed] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">bmanish11@gmail.com</p>
                      <p className="text-gray-600">Jigneshji2005@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#1ac8ed] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <a
                href="https://maps.app.goo.gl/fhczmuYrushFMsBN9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-200 h-64 rounded-xl relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    src="/photos/maps.png"
                    alt="Maps"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center rounded-xl transition duration-300">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our investment process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical investment size?",
                answer:
                  "Our investments typically range from $1M to $10M, depending on the stage and needs of the company.",
              },
              {
                question: "What sectors do you invest in?",
                answer:
                  "We focus on technology, healthcare, fintech, and other innovative sectors with high growth potential.",
              },
              {
                question: "How long does the investment process take?",
                answer:
                  "The typical process takes 8-12 weeks from initial meeting to closing, depending on due diligence requirements.",
              },
              {
                question: "What stage companies do you invest in?",
                answer:
                  "We invest in early to growth-stage companies with proven market traction and strong growth potential.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-gray-800 text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetUs;
