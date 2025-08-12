import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: "ri-facebook-fill", href: "#", label: "Facebook" },
    { icon: "ri-twitter-fill", href: "#", label: "Twitter" },
    { icon: "ri-instagram-fill", href: "#", label: "Instagram" },
    { icon: "ri-linkedin-fill", href: "#", label: "LinkedIn" }
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Facilities", label: "Facilities" },
    { to: "/Contact-Us", label: "Contact Us" },
    { to: "/About", label: "About Us" }
  ];

  const contactInfo = [
    {
      icon: "ri-phone-fill",
      content: (
        <a 
          href="tel:9646548046" 
          className="hover:text-orange-400 transition-colors duration-200"
          aria-label="Call us"
        >
          +91-9646548046
        </a>
      )
    },
    {
      icon: "ri-mail-fill",
      content: (
        <a 
          href="mailto:ksharshadiagnostic@gmail.com" 
          className="hover:text-orange-400 transition-colors duration-200"
          aria-label="Email us"
        >
          ksharshadiagnostic@gmail.com
        </a>
      )
    },
    {
      icon: "ri-map-pin-fill",
      content: "Location"
    },
    {
      icon: "ri-time-fill",
      content: "Timings"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start flex-wrap gap-8 sm:gap-6 lg:gap-12">
          
          {/* About Us Section */}
          <div className="flex-1 min-w-[280px] max-w-sm space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                About Us
              </h2>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed text-center">
              Harsh Lab & Diagnostic, located in Ludhiana, Punjab, is a trusted name among 
              diagnostic centers in the region. Known for its accurate and timely services, 
              we have quickly earned a strong reputation for excellence in healthcare diagnostics.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-xl sm:text-2xl text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex-1 min-w-[240px] max-w-sm space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                Quick Links
              </h2>
            </div>
            <nav>
              <ul className="space-y-2 sm:space-y-3 text-center">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm lg:text-base inline-block relative ${
                          isActive ? 'text-orange-500' : ''
                        }`
                      }
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 hover:w-full"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex-1 min-w-[280px] max-w-sm space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                Contact Info
              </h2>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <i className={`${contact.icon} text-orange-500 text-base sm:text-lg flex-shrink-0`}></i>
                  <span className="text-gray-300 text-xs sm:text-sm lg:text-base text-center break-words">
                    {contact.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Harsh Lab and Diagnostic Centre. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs lg:text-sm">
              <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;