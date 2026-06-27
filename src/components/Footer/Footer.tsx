import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-20">

        {/* ========================= */}
        {/* Top Section */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Logo & Description */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-xl">
                S
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  Scholar
                  <span className="text-blue-500">
                    Hub
                  </span>
                </h2>

                <p className="text-sm text-slate-400">
                  Notes • Tests • Success
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Learn smarter with premium courses,
              study materials, quizzes and expert
              faculty. Helping students achieve
              academic excellence through quality
              education.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Courses
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Study Notes
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Faculty
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white cursor-pointer transition">
                Programming
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Engineering
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Medical
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Commerce
              </li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>

              <li className="hover:text-white cursor-pointer transition">
                FAQs
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between">

          <p className="text-slate-400">
            © 2026 ScholarHub. All rights reserved.
          </p>

          <p className="text-slate-400 mt-4 lg:mt-0">
            Made with ❤️ for students.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;