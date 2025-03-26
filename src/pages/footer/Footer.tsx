import {
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  BookCheck,
  ChevronsRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-[#2C7C41]" />
              <span className="ml-2 text-xl font-bold">Infiply</span>
            </div>
            <p className="text-gray-400">
              Building tomorrow's success stories through strategic investments
              and partnerships.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link
                  to="/records"
                  className="text-gray-400 hover:text-white"
                >
                  Records
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/funddetails" className="text-gray-400 hover:text-white">
                  Fund Details
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-400 text-sm">
              &apos;SME Growth Fund – Series Alpha&apos; is suitable only for
              sophisticated investors. This document is confidential and
              intended solely for select potential investors considering an
              investment in the fund. Investments involve significant risks,
              including lack of liquidity. Please refer to the “Risk Factors”
              section of this memorandum before investing. Unauthorized
              reproduction or distribution of this document is prohibited. This
              is not a public offering, and neither this document nor the
              fund&apos;s units have been registered under applicable laws.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#2C7C41]" />
              <div>
                <p className="text-gray-400 hover:text-white">+91 9327508480</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-y-2">
              <Mail className="h-6 w-6 text-[#2C7C41] mt-3" />
              <div>
                <p className="text-gray-400 hover:text-white">
                  infiplyadvisors@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-y-2">
              <BookCheck className="h-6 w-6 text-[#2C7C41] mt-3" />
              <div>
                <p className="text-gray-400 hover:text-white">
                  SEBI Registration no. –IN/AIF1/24-25/1676
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-y-2">
              <MapPin className="h-6 w-6 text-[#2C7C41]" />
              <div>
                <p className="text-gray-400 hover:text-white">
                  606-607, Nathubhai Tower, Udhna Main
                </p>
                <p className="text-gray-400 hover:text-white">
                  Road, Surat, Gujrat, 394210
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InfiplyFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer