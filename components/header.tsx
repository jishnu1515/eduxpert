"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Bell,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Users,
  Lightbulb,
  Building2,
  BookOpen,
  School,
  Wrench,
  Search,
  BookMarked,
  HelpCircle,
  Globe,
  Laptop,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const mainNavItems = [
  {
    href: "/#career-opportunities",
    label: "Career Listings",
    icon: Briefcase,
    children: [
      { href: "/internships", label: "Internships", icon: GraduationCap },
      { href: "/entry-level", label: "Entry Level Jobs", icon: Users },
      { href: "/walk-in", label: "Walk-In Recruitment", icon: Users },
      { href: "/career-programs", label: "Career-Oriented Programs", icon: Lightbulb },
      { href: "/government", label: "Government Jobs", icon: Building2 },
    ],
  },
  {
    href: "/courses",
    label: "Courses",
    icon: BookOpen,
    children: [
      { href: "/courses?filter=online", label: "Online Courses", icon: Laptop },
      { href: "/courses?filter=offline", label: "Offline Courses", icon: School },
    ],
  },
  {
    href: "/#admission-services",
    label: "Admission",
    icon: GraduationCap,
    children: [
      { href: "/admission-services/undergraduate", label: "Undergraduate", icon: BookOpen },
      { href: "/admission-services/postgraduate", label: "Postgraduate", icon: BookOpen },
      { href: "/admission-services/phd", label: "PhD Programs", icon: School },
    ],
  },
  { href: "/workshops-webinars", label: "Workshops", icon: Wrench },
  { href: "/find-university", label: "Find University", icon: Search },
  { href: "/blog", label: "Blogs", icon: BookMarked },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label))
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-[#EC4318] to-[#D93A14] text-white px-4 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <p className="text-sm font-medium">New career opportunities available! Check them out now.</p>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:text-white/90 hover:bg-white/10 px-2 py-1 h-auto text-sm font-medium rounded-full transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* About Us Menu */}
      <div className="bg-[#D9D9D9] text-[#000000] px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#EC4318] transition-colors flex items-center"
            >
              <Globe className="w-4 h-4 mr-2" />
              About Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:text-[#E4405F]/80 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/your_whatsapp_number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#25D366]/80 transition-colors"
              aria-label="Join our WhatsApp channel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="https://t.me/your_telegram_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0088cc] hover:text-[#0088cc]/80 transition-colors"
              aria-label="Join our Telegram channel"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_1-bqVETm4Thub0BmPNaKgoJSkf9ucNI1.png"
                  alt="CareerX Logo"
                  width={140}
                  height={45}
                  priority
                  className="h-11 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex space-x-1 xl:space-x-2">
                {mainNavItems.map((item) => (
                  <li key={item.label} className="relative">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`flex items-center space-x-1 text-base font-medium px-3 py-2 rounded-md transition-colors group ${
                            activeDropdown === item.label
                              ? "text-[#EC4318] bg-[#D9D9D9]/10"
                              : "text-[#000000] hover:text-[#EC4318] hover:bg-[#D9D9D9]/10"
                          }`}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup="true"
                        >
                          <item.icon
                            className={`w-5 h-5 mr-1 transition-colors ${
                              activeDropdown === item.label ? "text-[#EC4318]" : "group-hover:text-[#EC4318]"
                            }`}
                          />
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                              activeDropdown === item.label ? "rotate-180 text-[#EC4318]" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby={`${item.label}-menu`}
                            >
                              <div className="py-1" role="none">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#D9D9D9]/10 hover:text-[#EC4318]"
                                    onClick={() => {
                                      closeDropdowns()
                                    }}
                                    role="menuitem"
                                  >
                                    <child.icon className="mr-3 h-5 w-5 text-[#EC4318]" />
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-1 text-base font-medium px-3 py-2 rounded-md transition-colors group ${
                          pathname === item.href
                            ? "text-[#EC4318] bg-[#D9D9D9]/10"
                            : "text-[#000000] hover:text-[#EC4318] hover:bg-[#D9D9D9]/10"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 mr-1 transition-colors ${
                            pathname === item.href ? "text-[#EC4318]" : "group-hover:text-[#EC4318]"
                          }`}
                        />
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <Button
                variant="ghost"
                className="text-[#000000] p-2 hover:bg-[#D9D9D9]/10 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-base text-[#000000] hover:text-[#EC4318] transition-colors flex items-center p-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Globe className="w-5 h-5 mr-2 text-[#EC4318]" />
                    About Us
                  </Link>
                </li>
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="text-base font-semibold text-[#000000] flex items-center justify-between w-full p-2 rounded-md hover:bg-[#D9D9D9]/10"
                          aria-expanded={activeDropdown === item.label}
                        >
                          <span className="flex items-center">
                            <item.icon className="w-5 h-5 mr-2 text-[#EC4318]" />
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-7 space-y-2 border-l-2 border-[#D9D9D9]"
                            >
                              {item.children.map((child) => (
                                <motion.li
                                  key={child.href}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="text-base text-[#000000] hover:text-[#EC4318] transition-colors flex items-center p-2 rounded-md"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false)
                                    }}
                                  >
                                    <child.icon className="w-5 h-5 mr-2 text-[#EC4318]" />
                                    {child.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-base font-medium transition-colors flex items-center p-2 rounded-md ${
                          pathname === item.href
                            ? "text-[#EC4318] bg-[#D9D9D9]/10"
                            : "text-[#000000] hover:text-[#EC4318] hover:bg-[#D9D9D9]/10"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 mr-2 text-[#EC4318]" />
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

