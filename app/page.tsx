"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Briefcase,
  Lightbulb,
  Building2,
  School,
  BookOpen,
  Search,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Video,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"

const courses = [
  {
    id: "course-1",
    title: "Web Development Bootcamp",
    excerpt: "Learn full-stack web development from scratch.",
    duration: "12 weeks",
    level: "Beginner",
    type: "Online",
  },
  {
    id: "course-2",
    title: "Data Science Fundamentals",
    excerpt: "Master the basics of data analysis and machine learning.",
    duration: "8 weeks",
    level: "Intermediate",
    type: "Online",
  },
  {
    id: "course-3",
    title: "Digital Marketing Essentials",
    excerpt: "Discover key strategies for online marketing success.",
    duration: "6 weeks",
    level: "Beginner",
    type: "Online",
  },
  {
    id: "course-4",
    title: "UX/UI Design Principles",
    excerpt: "Learn to create user-friendly and visually appealing interfaces.",
    duration: "10 weeks",
    level: "Intermediate",
    type: "Online",
  },
  {
    id: "course-5",
    title: "Cybersecurity Fundamentals",
    excerpt: "Understand the basics of network security and threat prevention.",
    duration: "8 weeks",
    level: "Beginner",
    type: "Online",
  },
]

const categories = [
  {
    id: "internships",
    label: "Internships",
    icon: GraduationCap,
    description: "Kickstart your career with exciting internship opportunities",
  },
  {
    id: "entry-level",
    label: "Entry-Level Jobs",
    icon: Users,
    description: "Find your first full-time position and begin your professional journey",
  },
  {
    id: "walk-in",
    label: "Walk-In Recruitment",
    icon: Briefcase,
    description: "Attend walk-in interviews and get hired on the spot",
  },
  {
    id: "career-programs",
    label: "Career-Oriented Programs",
    icon: Lightbulb,
    description: "Advance your skills with specialized career development programs",
  },
  {
    id: "government",
    label: "Government Jobs",
    icon: Building2,
    description: "Explore opportunities in the public sector",
  },
]

const workshopsAndWebinars = [
  {
    id: "workshop-1",
    title: "Mastering the Art of Resume Writing",
    excerpt: "Learn how to craft a compelling resume that stands out to employers.",
    date: "2023-06-15",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
  },
  {
    id: "webinar-1",
    title: "Future of AI in the Job Market",
    excerpt: "Explore how AI is shaping career opportunities across industries.",
    date: "2023-06-20",
    time: "1:00 PM - 2:30 PM",
    type: "Webinar",
  },
  {
    id: "workshop-2",
    title: "Effective Networking Strategies",
    excerpt: "Discover techniques to build and leverage your professional network.",
    date: "2023-06-25",
    time: "3:00 PM - 5:00 PM",
    type: "Workshop",
  },
  {
    id: "webinar-2",
    title: "Navigating Career Transitions",
    excerpt: "Expert advice on successfully changing careers or industries.",
    date: "2023-06-30",
    time: "11:00 AM - 12:30 PM",
    type: "Webinar",
  },
  {
    id: "workshop-3",
    title: "Personal Branding for Professionals",
    excerpt: "Build a strong personal brand to enhance your career prospects.",
    date: "2023-07-05",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
  },
]

const admissionCategories = [
  {
    id: "undergraduate",
    label: "Undergraduate Admissions",
    icon: GraduationCap,
    description: "Explore admission opportunities for bachelor's degree programs",
  },
  {
    id: "postgraduate",
    label: "Postgraduate Admissions",
    icon: BookOpen,
    description: "Discover master's degree and diploma program admissions",
  },
  {
    id: "phd",
    label: "PhD Programs",
    icon: School,
    description: "Find doctoral research opportunities across various disciplines",
  },
]

const latestBlogs = [
  {
    id: "blog-1",
    title: "Top 10 In-Demand Skills for 2025",
    excerpt: "Discover the skills that will be most valuable in the job market over the next few years.",
    date: "2023-05-15",
    author: "Career Expert",
    readTime: "5 min read",
  },
  {
    id: "blog-2",
    title: "How to Ace Your College Application",
    excerpt: "Expert tips on crafting a standout college application that gets you noticed by admissions officers.",
    date: "2023-05-10",
    author: "Admissions Advisor",
    readTime: "7 min read",
  },
  {
    id: "blog-3",
    title: "Navigating Your First Job: A Guide for New Graduates",
    excerpt: "Essential advice for recent graduates entering the workforce for the first time.",
    date: "2023-05-05",
    author: "HR Professional",
    readTime: "6 min read",
  },
  {
    id: "blog-4",
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt: "Explore how remote work is shaping the future of employment and what it means for job seekers.",
    date: "2023-05-01",
    author: "Workplace Analyst",
    readTime: "8 min read",
  },
  {
    id: "blog-5",
    title: "Mastering the Art of Networking in the Digital Age",
    excerpt: "Learn effective strategies for building professional relationships online and advancing your career.",
    date: "2023-04-28",
    author: "Networking Specialist",
    readTime: "6 min read",
  },
]

const faqs = [
  {
    question: "How do I apply for internships through your platform?",
    answer:
      "To apply for internships, navigate to the 'Internships' section, browse available opportunities, and follow the application instructions provided for each listing. Make sure to prepare your resume and any required documents before applying.",
  },
  {
    question: "What types of career programs do you offer?",
    answer:
      "We offer a variety of career-oriented programs including leadership development, technical skills training, and industry-specific certifications. Check our 'Career-Oriented Programs' section for the latest offerings and details on how to enroll.",
  },
  {
    question: "How can I improve my chances of getting admitted to my chosen university?",
    answer:
      "To improve your admission chances, focus on maintaining a strong academic record, participate in extracurricular activities, prepare well for standardized tests, and craft a compelling personal statement. Our blog also offers tips and advice on the admission process.",
  },
  {
    question: "Are the government job listings on your site official?",
    answer:
      "Yes, all government job listings on our platform are sourced directly from official government recruitment boards and websites. We ensure the information is up-to-date and accurate.",
  },
  {
    question: "How often are new job and internship opportunities posted?",
    answer:
      "We update our job and internship listings daily. New opportunities are added as soon as they become available, so we recommend checking back regularly or setting up job alerts for the most relevant positions.",
  },
]

const MotionCard = motion(Card)

export default function HomePage() {
  const [currentBlogPage, setCurrentBlogPage] = useState(0)
  const [currentWorkshopPage, setCurrentWorkshopPage] = useState(0)
  const [currentCoursePage, setCurrentCoursePage] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Career Opportunities Section */}
        <section id="career-opportunities">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#EC4318]">Career</span> Opportunities
          </motion.h1>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover a wide range of career opportunities tailored to your aspirations. Whether you're a fresh graduate
            or an experienced professional, we have the perfect match for you.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {categories.map((category, index) => (
              <MotionCard
                key={category.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CardHeader className="bg-gray-100 text-gray-800">
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <category.icon className="w-6 h-6 mr-2 text-[#EC4318]" />
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link href={`/${category.id}`} className="w-full">
                    <Button className="w-full bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">
                      View Listings
                    </Button>
                  </Link>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="mb-24">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enhance Your <span className="text-[#EC4318]">Skills</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Boost your career with our curated selection of online and offline courses.
          </motion.p>
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {courses.slice(currentCoursePage * 3, currentCoursePage * 3 + 3).map((course, index) => (
                <MotionCard
                  key={course.id}
                  className="overflow-hidden transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CardHeader className="bg-gray-100 text-gray-800">
                    <CardTitle className="text-xl font-semibold flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-[#EC4318]" />
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{course.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{course.level}</span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-[#EC4318] text-white text-xs px-2 py-1 rounded">
                        {course.type}
                      </span>
                    </div>
                    <Link href={`/courses/${course.id}`} passHref>
                      <Button
                        variant="outline"
                        className="w-full border-[#EC4318] text-[#EC4318] hover:bg-[#EC4318] hover:text-white transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
            {isClient && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Previous courses"
                  onClick={() => setCurrentCoursePage((prev) => (prev > 0 ? prev - 1 : prev))}
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                <div className="flex space-x-2">
                  {[0, 1].map((index) => (
                    <Button
                      key={`course-page-${index}`}
                      variant="outline"
                      className={`w-3 h-3 rounded-full p-0 ${
                        index === currentCoursePage ? "bg-[#EC4318]" : "bg-gray-300"
                      } hover:bg-[#EC4318] transition-colors`}
                      aria-label={`Go to courses page ${index + 1}`}
                      onClick={() => setCurrentCoursePage(index)}
                    >
                      <span className="sr-only">Page {index + 1}</span>
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Next courses"
                  onClick={() => setCurrentCoursePage((prev) => (prev < 1 ? prev + 1 : prev))}
                >
                  <ChevronRight className="w-6 h-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            )}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" passHref>
              <Button className="bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">View All Courses</Button>
            </Link>
          </div>
        </section>

        {/* Workshops and Webinars Section */}
        <section id="workshops-webinars">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Workshops and <span className="text-[#EC4318]">Webinars</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enhance your skills and knowledge with our interactive workshops and informative webinars.
          </motion.p>
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {workshopsAndWebinars.slice(currentWorkshopPage * 3, currentWorkshopPage * 3 + 3).map((item, index) => (
                <MotionCard
                  key={item.id}
                  className="overflow-hidden transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CardHeader className="bg-gray-100 text-gray-800">
                    <CardTitle className="text-xl font-semibold flex items-center">
                      <Video className="w-5 h-5 mr-2 text-[#EC4318]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-[#EC4318] text-white text-xs px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                    <Link href={`/workshops-webinars/${item.id}`} passHref>
                      <Button
                        variant="outline"
                        className="w-full border-[#EC4318] text-[#EC4318] hover:bg-[#EC4318] hover:text-white transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
            {isClient && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Previous workshops and webinars"
                  onClick={() => setCurrentWorkshopPage((prev) => (prev > 0 ? prev - 1 : prev))}
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                <div className="flex space-x-2">
                  {[0, 1].map((index) => (
                    <Button
                      key={`workshop-page-${index}`}
                      variant="outline"
                      className={`w-3 h-3 rounded-full p-0 ${
                        index === currentWorkshopPage ? "bg-[#EC4318]" : "bg-gray-300"
                      } hover:bg-[#EC4318] transition-colors`}
                      aria-label={`Go to workshops and webinars page ${index + 1}`}
                      onClick={() => setCurrentWorkshopPage(index)}
                    >
                      <span className="sr-only">Page {index + 1}</span>
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Next workshops and webinars"
                  onClick={() => setCurrentWorkshopPage((prev) => (prev < 1 ? prev + 1 : prev))}
                >
                  <ChevronRight className="w-6 h-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            )}
          </div>
          <div className="text-center mt-8 mb-24">
            <Link href="/workshops-webinars" passHref>
              <Button className="bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">
                View All Workshops and Webinars
              </Button>
            </Link>
          </div>
        </section>

        {/* Admission Services Section */}
        <section id="admission-services">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#EC4318]">Admission</span> Services
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore admission opportunities for various educational programs. Whether you're looking for undergraduate,
            postgraduate, or PhD programs, we have the information you need.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {admissionCategories.map((category, index) => (
              <MotionCard
                key={category.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CardHeader className="bg-gray-100 text-gray-800">
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <category.icon className="w-6 h-6 mr-2 text-[#EC4318]" />
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link href={`/admission-services/${category.id}`} passHref>
                    <Button className="w-full bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">
                      View Opportunities
                    </Button>
                  </Link>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </section>

        {/* Find University Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#EC4318]">Find</span> University
        </motion.h2>
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the perfect university for your academic and career goals. Our comprehensive database and expert
            guidance help you make informed decisions about your education.
          </p>
          <div className="flex justify-center">
            <Link href="/find-university" passHref>
              <Button className="bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Start Your University Search
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Latest Blogs Section */}
        <section id="latest-blogs">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest <span className="text-[#EC4318]">Blogs</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay informed with our latest articles on career advice, admission tips, and industry insights.
          </motion.p>
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {latestBlogs.slice(currentBlogPage * 3, currentBlogPage * 3 + 3).map((blog, index) => (
                <MotionCard
                  key={blog.id}
                  className="overflow-hidden transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CardHeader className="bg-gray-100 text-gray-800">
                    <CardTitle className="text-xl font-semibold">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <Link href={`/blog/${blog.id}`} passHref>
                      <Button
                        variant="outline"
                        className="w-full border-[#EC4318] text-[#EC4318] hover:bg-[#EC4318] hover:text-white transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
            {isClient && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Previous blogs"
                  onClick={() => setCurrentBlogPage((prev) => (prev > 0 ? prev - 1 : prev))}
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                <div className="flex space-x-2">
                  {[0, 1].map((index) => (
                    <Button
                      key={`page-${index}`}
                      variant="outline"
                      className={`w-3 h-3 rounded-full p-0 ${
                        index === currentBlogPage ? "bg-[#EC4318]" : "bg-gray-300"
                      } hover:bg-[#EC4318] transition-colors`}
                      aria-label={`Go to blog page ${index + 1}`}
                      onClick={() => setCurrentBlogPage(index)}
                    >
                      <span className="sr-only">Page {index + 1}</span>
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="rounded-full p-2 hover:bg-[#EC4318] hover:text-white transition-colors"
                  aria-label="Next blogs"
                  onClick={() => setCurrentBlogPage((prev) => (prev < 1 ? prev + 1 : prev))}
                >
                  <ChevronRight className="w-6 h-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            )}
          </div>
          <div className="text-center mt-8 mb-24">
            <Link href="/blog" passHref>
              <Button className="bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </section>

        {/* Join Our Community Section */}
        <section id="join-community" className="mb-24">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our <span className="text-[#EC4318]">Community</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with like-minded professionals, share experiences, and grow your network. Our community is a vibrant
            hub for career development and support.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <MotionCard
              className="overflow-hidden transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <CardHeader className="bg-gray-100 text-gray-800">
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Users className="w-6 h-6 mr-2 text-[#EC4318]" />
                  Networking Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Connect with professionals from various industries, expand your network, and discover new career
                  opportunities.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="overflow-hidden transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <CardHeader className="bg-gray-100 text-gray-800">
                <CardTitle className="flex items-center text-xl font-semibold">
                  <MessageCircle className="w-6 h-6 mr-2 text-[#EC4318]" />
                  Discussion Forums
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Engage in meaningful discussions, seek advice, and share your expertise on various career-related
                  topics.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="overflow-hidden transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <CardHeader className="bg-gray-100 text-gray-800">
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Calendar className="w-6 h-6 mr-2 text-[#EC4318]" />
                  Exclusive Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Get access to members-only webinars, workshops, and networking events to boost your career growth.
                </p>
              </CardContent>
            </MotionCard>
          </div>
          <div className="text-center">
            <Link href="/community" passHref>
              <Button className="bg-[#EC4318] text-white hover:bg-[#D93A14] transition-colors">
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 mt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="text-[#EC4318]">Questions</span>
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden">
                  <AccordionTrigger
                    className="flex items-center justify-between w-full px-6 py-4 text-left text-lg font-semibold bg-white hover:bg-gray-50 transition-colors"
                    aria-label={`Toggle answer for: ${faq.question}`}
                  >
                    <span className="flex items-center">
                      <MessageCircle className="w-6 h-6 mr-3 text-[#EC4318]" />
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-[#EC4318] transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

