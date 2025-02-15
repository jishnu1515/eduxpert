import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#EC4318]">About Us</h3>
            <p className="text-sm text-[#D9D9D9]">
              CareerX is your one-stop platform for career opportunities, educational resources, and professional
              development. We're committed to helping you achieve your career goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#EC4318]">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Career Listings", "Admission Services", "Workshops", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-[#D9D9D9] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#EC4318]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-[#D9D9D9]">
                <Mail className="w-4 h-4 mr-2 text-[#EC4318]" />
                <a href="mailto:info@careerx.com" className="hover:text-white transition-colors">
                  info@careerx.com
                </a>
              </li>
              <li className="flex items-center text-sm text-[#D9D9D9]">
                <Phone className="w-4 h-4 mr-2 text-[#EC4318]" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#EC4318]">Stay Updated</h3>
            <p className="text-sm text-[#D9D9D9] mb-4">
              Subscribe to our newsletter for the latest career insights and opportunities.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#EC4318]"
                required
              />
              <button
                type="submit"
                className="bg-[#EC4318] text-white px-4 py-2 rounded-md hover:bg-[#D93A14] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-[#D9D9D9] flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:text-[#E1306C]/80 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-[#0077B5]/80 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-[#D9D9D9] mt-4 sm:mt-0">© 2023 CareerX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

