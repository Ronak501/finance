import { MapPin, Phone, Mail, Clock, ArrowRight, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

type ContactInfo = {
  icon: typeof Mail | typeof MapPin | typeof Phone;
  title: string;
  details: string[];
};

const contactInformation: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["605, Nathubhai Tower, Udhna Main Road, Surat, Gujrat, 394210"],
  },
  {
    icon: Phone,
    title: "Calling Support",
    details: ["Toll Free: 1800 571 2929", "Mobile: +91 9327508480"],
  },
  {
    icon: Mail,
    title: "Email Information",
    details: ["infiplyadvisors@gmail.com"],
  },
];

function ContactCard({ info }: { info: ContactInfo }) {
  const Icon = info.icon;

  const IconWrapper: React.FC<{ Icon: React.ElementType; size?: string }> = ({
    Icon,
    size = "h-24 w-24",
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

  return (
    <Card className="p-8 relative group overflow-hidden transition-all duration-500 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
      <div className="relative">
        <div className="w-24 h-24 mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
          <IconWrapper Icon={Icon} size="h-24 w-24" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{info.title}</h3>
        <div className="text-center text-gray-600">
          {info.details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </Card>
  );
}

function MeetUs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C7C41] to-green-600 opacity-90 z-10"></div>
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
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41]"
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
                    className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41]"
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
                    className="w-full px-4 bg-white py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41]"
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
                    className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C7C41] text-white py-2 px-4 rounded-md hover:bg-[#15b5d8] transition-colors"
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
                    <MapPin className="h-6 w-6 text-[#2C7C41] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">
                        Office Location
                      </h3>
                      <p className="text-gray-600">
                        606-607, Nathubhai Tower, Udhna Main Road
                      </p>
                      <p className="text-gray-600">Surat, Gujarat, 394210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#2C7C41] mt-1" />
                    <div className="ml-4">
                      <h3 className="text-gray-800 font-semibold ">Phone</h3>
                      <p className="text-gray-600">+91 9327508480</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#2C7C41] mt-1" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">infiplyadvisors@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#2C7C41] mt-1" />
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

      <div className="py-20 bg-gray-50 px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-4">
            <span className="text-[#2C7C41] font-medium">
              SMART STRATEGIES, SMARTER FINANCES
            </span>
            <Trophy className="h-5 w-5 text-[#2C7C41]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Take Your Finances to the Next Level
          </h2>
          <p className="text-xl text-gray-600">Connect with Us Today!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInformation.map((info, index) => (
            <ContactCard key={index} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetUs;
