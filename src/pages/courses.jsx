"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Award, BookOpen } from "lucide-react";

// Course data - combining all the course information
const ALL_COURSES = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Learn from Beginner to Intermediate level",
    price: "30,000",
    duration: "3 months",
    units: "6 units",
    image: "/images/course-section1-uiux.png",
    bgClass: "bg-courseBgUiUx",
    overview:
      "This course will put you through the basics of UI Design and how to design aesthetically pleasing user interfaces. You will learn the basic tools, layouts, mockups and technique product designers use to come up with amazing interface.",
    path: "/courses/ui-ux-design",
    whyCourse: [
      "High demand skill across various industries",
      "Enhanced User eccentric mindset",
      "Industry-Relevant Tools and Techniques",
      "Adaptability in the digital world",
    ],
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Learn from Beginner to Intermediate level",
    price: "20,000",
    duration: "3 months",
    units: "6 units",
    image: "/images/course-section1-graphics.png",
    bgClass: "bg-courseBgGraphics",
    overview:
      "Our graphics design course gives an opportunity for you to cultivate and polish your design abilities. Through the course, you will gain deep knowledge design principles and other key elements that are vital to the field of graphic design.",
    path: "/courses/graphics-design",
    whyCourse: [
      "Develop and enhance your creative skills",
      "Personal projects and freelancing",
      "Proficiency in high standard tools",
      "Industry insight and networking",
    ],
  },
  {
    id: "digital-arts",
    title: "Digital Arts",
    description: "Learn from Beginner to Intermediate level",
    price: "20,000",
    duration: "3 months",
    units: "6 units",
    image: "/images/course-section1-digital.png",
    bgClass: "bg-courseBgDigitalArts",
    overview:
      "This course will teach you how to make digital art. You'll learn about the various tools and the many features it has to offer. We will provide a basic explanation of the steps involved in creating digital artwork along with simple and understandable examples.",
    path: "/courses/digital-arts",
    whyCourse: [
      "Relevance in the digital space for artists",
      "Professional Software and tools and techniques",
      "Job opportunities in the digital space",
      "Professional teacher",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Learn from Beginner to Intermediate level",
    price: "150,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-video.jpeg",
    bgClass: "bg-courseBgVideo",
    overview:
      "This course is designed to take you from beginner to proficient video editor. You'll learn the fundamentals of editing, transitions, sound design, and motion graphics using industry tools.",
    path: "/courses/video-editing",
    whyCourse: [
      "In-demand skill across content & media industries",
      "Learn both technical and creative editing skills",
      "Practical hands-on learning with real editing tools",
      "Opportunity to build a personal showreel",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-social.jpeg",
    bgClass: "bg-courseBgSocial",
    overview:
      "Learn how to develop and manage brand voice across platforms. You'll understand how to plan calendars, run campaigns, and measure performance like a pro.",
    path: "/courses/social-media-management",
    whyCourse: [
      "High-demand role in every modern brand",
      "Master all major platforms (Instagram, TikTok, X, etc.)",
      "Learn content scheduling, analysis, and engagement",
      "Strategy-focused with real-world case studies",
    ],
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-content.jpeg",
    bgClass: "bg-courseBgContent",
    overview:
      "From ideation to publishing, you'll master content development for digital platforms. Learn to write for people and search engines while maintaining originality and quality",
    path: "/courses/content-writing",
    whyCourse: [
      "Core skill in digital marketing & media",
      "Learn to write blogs, SEO articles, copies & more",
      "Practice editing, tone, and storytelling",
      "Create your own content portfolio",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-creation.jpeg",
    bgClass: "bg-courseBgContentCreation",
    overview:
      "This course teaches you how to ideate, plan, create, and publish professional-level content for digital platforms. Perfect for aspiring influencers, brand creators, and marketers.",
    path: "/courses/content-creation",
    whyCourse: [
      "Master tools like Canva, CapCut, and mobile editing apps",
      "Gain confidence in personal branding and delivery",
      "Build a content portfolio that gets attention",
      "Learn storytelling for all formats: video, audio, text",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Learn from Beginner to Intermediate level",
    price: "150,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-digital.jpeg",
    bgClass: "bg-courseBgDigital",
    overview:
      "This course prepares you for careers in advertising, marketing, and e-commerce by teaching you how to build and run full-funnel digital campaigns across multiple platforms.",
    path: "/courses/digital-marketing",
    whyCourse: [
      "Learn SEO, paid ads, email, content, and social media",
      "Stay ahead with up-to-date tools and strategies",
      "Gain practical skills via campaign simulations",
      "Understand analytics and data-driven marketing",
    ],
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section-virtual.jpeg",
    bgClass: "bg-courseBgVirtual",
    overview:
      "This course equips you with virtual assistant skills for administrative, content, customer support, and scheduling tasks, along with client onboarding and remote communication",
    path: "/courses/virtual-assistant",
    whyCourse: [
      "Learn real-world VA skills for remote work",
      "Master admin tools like Google Workspace and Trello",
      "Build service packages and attract global clients",
      "Start freelancing with confidence",
    ],
  },
  {
    id: "web-design",
    title: "Web Design (WordPress)",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-web-design.jpeg",
    bgClass: "bg-courseBgWebDesign",
    overview:
      "This course introduces you to WordPress website design from setup to launch. You'll learn how to create pages, customize themes, add plugins, and design for user experience",
    path: "/courses/web-design",
    whyCourse: [
      "Build real websites using WordPress and Elementor",
      "Learn design fundamentals and user flow",
      "Gain experience with client-ready projects",
      "Monetize your skills with freelance or agency work",
    ],
  },
  {
    id: "frontend-web-development",
    title: "Frontend Web Development",
    description: "Learn from Beginner to Intermediate level",
    price: "150,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-frontend.jpeg",
    bgClass: "bg-courseBgFrontEnd",
    overview:
      "You'll learn to code websites from scratch, using front-end languages and libraries. This course builds both your logic and creativity for real-world development.",
    path: "/courses/frontend-web-development",
    whyCourse: [
      "Learn HTML, CSS, JavaScript, and React basics",
      "Build responsive websites and web apps",
      "Get hands-on with tools like Git and VS Code",
      "Start your journey into tech or freelancing",
    ],
  },
  {
    id: "backend-web-development",
    title: "Backend Web Development",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-backend.jpeg",
    bgClass: "bg-courseBgBackEnd",
    overview:
      "This course takes you behind the scenes of web applications, teaching you to build databases, APIs, authentication systems, and scalable backend logic.",
    path: "/courses/backend-web-development",
    whyCourse: [
      "Master backend logic, APIs, and databases",
      "Learn Node.js, Express, and MongoDB or SQL",
      "Understand server architecture and deployment",
      "Build scalable and secure systems",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Learn from Beginner to Intermediate level",
    price: "100,000",
    duration: "6 months",
    units: "6 units",
    image: "/images/course-section1-mobile.jpeg",
    bgClass: "bg-courseBgMobile",
    overview:
      "This course teaches mobile development from start to finish. You'll code apps using modern frameworks, learn user interface design, and publish your final product.",
    path: "/courses/mobile-app-development",
    whyCourse: [
      "Build apps using React Native or Flutter",
      "Work with real APIs, authentication, and storage",
      "Learn UI design and native functionality",
      "Publish your app to Play Store or App Store",
    ],
  },
];

const WHATWEOFFER = [
  {
    title: "Hands on learning",
    text: "We enable students to work on practical projects and real-world application. We also ensure interactive tasks in all of the courses to actively include the students in the learning process. These activities may include tests, coding challenges, design simulations, or problem-solving exercises that solidify understanding and foster critical thinking.",
  },
  {
    title: "Comprehensive curriculum",
    text: "Our curriculum is designed to provide students with a well-rounded understanding of their chosen field. We cover the core concepts and fundamental principles and it is designed in a progressive manner, building upon foundational knowledge and gradually introducing more advanced topics to ensure that students develop a strong knowledge.",
  },
  {
    title: "Supportive community",
    text: "Our website has a dedicated community platform that allows for easy communication, relevant discussions, and support for our students. It also serves as interactive venues for these students to reach out with instructors, esquire about course-related issues, share ideas, and benefit from the collective knowledge of their fellow students.",
  },
  {
    title: "Certificate of completion",
    text: "Students who successfully complete our tech courses will earn a Certificate of Completion. This certificate acknowledges their achievement and validates the abilities they learned throughout the course. This can be helpful when showing talents to potential clients or employers and can open doors to new opportunities in the industry.",
  },
];

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lex-course-card dark:shadow-white/10 overflow-hidden group hover:shadow-lex-section3 dark:hover:shadow-white/20 transition-all duration-300"
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="bg-lexPrimary px-3 py-1 rounded-full text-sm font-medium">
            ₦{course.price}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-lexPrimary dark:group-hover:text-lexAccent transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.units}</span>
          </div>
        </div>

        {/* Course Overview */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {course.overview}
        </p>

        {/* Why Choose This Course */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
            Why Choose This Course:
          </h4>
          <ul className="space-y-1">
            {course.whyCourse.slice(0, 2).map((reason, idx) => (
              <li
                key={idx}
                className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-lexAccent rounded-full mt-1.5 flex-shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link href={course.path}>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="w-full bg-lexPrimary hover:bg-lexPrimary/90 dark:bg-lexAccent dark:hover:bg-lexAccent/90 text-white dark:text-black font-medium py-3 px-4 rounded-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const OfferCard = ({ offer, index }) => {
  const icons = [
    <Users key="users1" className="w-8 h-8" />,
    <BookOpen key="bookOpen" className="w-8 h-8" />,
    <Users key="users2" className="w-8 h-8" />,
    <Award key="award" className="w-8 h-8" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lex-course-card dark:shadow-white/10 hover:shadow-lex-section3 dark:hover:shadow-white/20 transition-all duration-300"
    >
      <div className="text-lexPrimary dark:text-lexAccent mb-4">
        {icons[index]}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 capitalize">
        {offer.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {offer.text}
      </p>
    </motion.div>
  );
};

export default function CoursesPage() {
  return (
    <div className=" bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-16 md:py-12 bg-gradient-to-br from-lexPrimary to-lexPrimary/80 dark:from-gray-900 dark:via-lexAccent/30 dark:to-black">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-3xl md:text-2xl font-bold text-white mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl lg:text-lg md:text-base text-white/90 max-w-3xl mx-auto mb-8">
              Discover a wide range of professional courses designed to help you
              master in-demand skills and advance your career in the digital
              world.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Hands-on Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 lg:py-16 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-2xl md:text-xl font-bold text-gray-900 dark:text-white mb-4">
              Our Course Catalog
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive selection of courses, each designed
              to provide you with practical skills and industry-relevant
              knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-3  lg:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-6">
            {ALL_COURSES.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 lg:py-16 md:py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-2xl md:text-xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence ensures you receive the best learning
              experience possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-6">
            {WHATWEOFFER.map((offer, index) => (
              <OfferCard key={index} offer={offer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-16 md:py-12  bg-gradient-to-br from-lexPrimary to-lexPrimary/80 dark:from-gray-900 dark:via-lexAccent/30 dark:to-black">
        <div className="max-w-4xl mx-auto px-6 md:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-2xl md:text-xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-white/90 text-lg lg:text-base mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with
              our expert-led courses. Start learning today and unlock your
              potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="bg-white text-lexPrimary hover:bg-gray-100 dark:bg-lexAccent dark:text-black dark:hover:bg-lexAccent dark:hover:text-black font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-lexPrimary dark:border-lexAccent dark:text-lexAccent dark:hover:bg-lexAccent dark:hover:text-black font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
