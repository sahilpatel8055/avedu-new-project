import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import {
  GraduationCap,
  Clock,
  Users,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  TrendingUp,
  Building,
  Code,
  Laptop,
  Briefcase,
  Layers,
  Search,
} from "lucide-react";
import techIcon from "@/assets/icons/tech-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png"; // NEW IMPORT
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalyatanLogo from "@/assets/mangalyatan-logo.png";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";

const OnlineTech = () => {
  
  const [activeTab, setActiveTab] = useState("bca");

  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹60,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹30,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹45,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹55,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹40,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹35,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const programs = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      fees: "₹30,000 - ₹75,000/year",
      description:
        "Comprehensive computer applications program covering programming, databases, and software development",
      specializations: [
        "Web Development",
        "Mobile App Development",
        "Data Analytics",
        "Cyber Security",
      ],
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹40,000 - ₹85,000/year",
      description:
        "Advanced computer applications program for software development and IT management careers",
      specializations: [
        "Software Engineering",
        "AI & Machine Learning",
        "Cloud Computing",
        "Data Science",
      ],
    },
  ];

  const keyFeatures = [
    "Industry-Relevant Curriculum",
    "Virtual Labs & Projects",
    "Expert Faculty from Tech Industry",
    "Flexible Learning Schedule",
    "Live Coding Sessions",
    "Hands-on Programming Practice",
    "Industry Internships",
    "Career Placement Support",
  ];

  const faqs = [
    {
      question: "Are Online BCA/MCA degrees valid for jobs?",
      answer:
        "Yes, Online BCA/MCA from UGC-recognized universities are valid and accepted by employers in IT industry and for higher studies.",
    },
    {
      question: "What programming languages are covered?",
      answer:
        "Courses cover popular languages like Java, Python, C++, JavaScript, PHP, and emerging technologies like AI/ML frameworks.",
    },
    {
      question: "Do I get hands-on coding experience in online programs?",
      answer:
        "Yes, programs include virtual labs, coding assignments, live programming sessions, and industry projects for practical experience.",
    },
    {
      question: "What are the career opportunities after BCA/MCA?",
      answer:
        "Graduates can work as Software Developer, Web Developer, System Analyst, Database Administrator, IT Consultant, and many more tech roles.",
    },
    {
      question: "Is work experience required for MCA admission?",
      answer:
        "Work experience is not mandatory for MCA admission. However, having some exposure to programming concepts is beneficial.",
    },
  ];

  const bcaSyllabus = [
    {
      title: "Semester 1",
      subjects: [
        "Fundamentals of IT and Programming",
        "Programming in C",
        "Basic Mathematics",
        "Computer Organization",
        "Business Communication",
      ],
    },
    {
      title: "Semester 2",
      subjects: [
        "Operating Systems",
        "Data Structures and Algorithms",
        "Object-Oriented Programming (C++)",
        "Digital Logic",
        "Relational Database Management Systems",
      ],
    },
    {
      title: "Semester 3",
      subjects: [
        "Java Programming",
        "System Software",
        "Computer Networking",
        "Web Design",
        "Database Management Systems",
      ],
    },
    {
      title: "Semester 4",
      subjects: [
        "Python Programming",
        "Software Engineering",
        "Visual Programming",
        "Cybersecurity",
        "E-commerce",
      ],
    },
    {
      title: "Semester 5 & 6",
      subjects: [
        "AI & Machine Learning",
        "Mobile Application Development",
        "Cloud Computing",
        "Project Work",
        "Industrial Training",
      ],
    },
  ];

  const mcaSyllabus = [
    {
      title: "Semester 1",
      subjects: [
        "Advanced Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems",
        "Mathematical Foundations for Computer Applications",
      ],
    },
    {
      title: "Semester 2",
      subjects: [
        "Java Programming",
        "Web Technologies",
        "Cloud Computing",
        "AI & Machine Learning",
        "Computer Networks",
      ],
    },
    {
      title: "Semester 3",
      subjects: [
        "Python Programming for Data Science",
        "Cyber Security",
        "Mobile Computing",
        "Design & Analysis of Algorithms",
        "Distributed Systems",
      ],
    },
    {
      title: "Semester 4",
      subjects: [
        "Big Data Analytics",
        "Internet of Things (IoT)",
        "Advanced Software Project Management",
        "Elective Specialization",
        "Major Project/Dissertation",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Programming Languages",
      icon: "Code",
      description:
        "Mastery of languages like C++, Java, Python, and JavaScript for software development.",
    },
    {
      skill: "Data Structures & Algorithms",
      icon: "Layers",
      description:
        "Ability to write efficient and optimized code to solve complex problems.",
    },
    {
      skill: "Database Management",
      icon: "Search",
      description:
        "Expertise in managing and querying databases using technologies like SQL and MongoDB.",
    },
    {
      skill: "Web & Mobile Development",
      icon: "Laptop",
      description:
        "Skills in building and deploying dynamic websites and mobile applications.",
    },
    {
      skill: "Cloud Computing",
      icon: "Building",
      description:
        "Understanding of cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      skill: "Cybersecurity",
      icon: "Award",
      description:
        "Knowledge of network security, ethical hacking, and data protection.",
    },
    {
      skill: "Data Science & Analytics",
      icon: "TrendingUp",
      description:
        "Skills in analyzing large datasets to extract insights and drive decisions.",
    },
    {
      skill: "Problem-Solving & Critical Thinking",
      icon: "CheckCircle",
      description:
        "Developing a logical approach to debug and solve technical challenges.",
    },
  ];

  const careerScope = {
    bca: [
      {
        role: "Software Developer",
        salary: "₹4 - 8 LPA",
      },
      {
        role: "Web Developer",
        salary: "₹3 - 6 LPA",
      },
      {
        role: "System Analyst",
        salary: "₹5 - 9 LPA",
      },
      {
        role: "Database Administrator",
        salary: "₹4 - 7 LPA",
      },
      {
        role: "Network Engineer",
        salary: "₹3 - 6 LPA",
      },
      {
        role: "IT Consultant",
        salary: "₹5 - 10 LPA",
      },
    ],
    mca: [
      {
        role: "Software Architect",
        salary: "₹12 - 20 LPA",
      },
      {
        role: "Data Scientist",
        salary: "₹10 - 18 LPA",
      },
      {
        role: "Cloud Architect",
        salary: "₹15 - 25 LPA",
      },
      {
        role: "Cybersecurity Expert",
        salary: "₹10 - 16 LPA",
      },
      {
        role: "IT Project Manager",
        salary: "₹10 - 20 LPA",
      },
      {
        role: "Machine Learning Engineer",
        salary: "₹11 - 22 LPA",
      },
    ],
  };

  const topRecruiters = [
    "TCS",
    "Wipro",
    "Infosys",
    "Accenture",
    "HCL",
    "IBM",
    "Cognizant",
    "Microsoft",
    "Samsung",
    "Amazon",
    "Capgemini",
    "Dell",
    "HP",
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img
                src={techIcon}
                alt="Technology"
                className="h-16 w-16 mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Engineering & Technology Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Launch your tech career with Online BCA & MCA programs from
              India's top universities. Get industry-relevant curriculum and
              hands-on coding experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Industry Curriculum
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Laptop className="h-4 w-4 mr-2" />
                Virtual Labs
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Top IT Companies
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#0052CC] hover:bg-[#003d99]">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">45+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">150+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">500+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Engineering & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              online technology programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="Technology" />
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Technology Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to meet industry demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-gray-200/60"
              >
                <CardHeader>
                  <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {program.fees}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">
                      Popular Specializations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-[#0052CC] hover:bg-[#003d99]">
                    View Program Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online Engineering & Technology?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get industry-ready skills with modern learning methods and
              practical experience
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Course Subjects/Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Online BCA & MCA Subjects/Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the comprehensive curriculum designed to build a strong
              foundation in computer applications and technology.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs
              defaultValue="bca"
              onValueChange={setActiveTab}
              className="w-full md:w-3/4 lg:w-1/2"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bca" className="text-lg">
                  BCA Subjects
                </TabsTrigger>
                <TabsTrigger value="mca" className="text-lg">
                  MCA Subjects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bca" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bcaSyllabus.map((semester, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="bg-gray-100 border-b">
                        <h3 className="font-bold text-lg">
                          {semester.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="list-none space-y-2">
                          {semester.subjects.map((subject, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="mca" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mcaSyllabus.map((semester, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="bg-gray-100 border-b">
                        <h3 className="font-bold text-lg">
                          {semester.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="list-none space-y-2">
                          {semester.subjects.map((subject, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Skills Obtained in Online BCA/MCA Course */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Obtained in Online BCA/MCA Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build a strong foundation and acquire in-demand skills for a
              successful tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsObtained.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                {item.icon === "Code" && (
                  <Code className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Layers" && (
                  <Layers className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Search" && (
                  <Search className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Laptop" && (
                  <Laptop className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Building" && (
                  <Building className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Award" && (
                  <Award className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "TrendingUp" && (
                  <TrendingUp className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "CheckCircle" && (
                  <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                <h3 className="font-bold mb-2">{item.skill}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Scope & Top Recruiters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore lucrative career opportunities and top companies hiring
              BCA and MCA graduates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
              <CardHeader>
                <h3 className="font-bold text-xl mb-2">
                  <Briefcase className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                  Career Opportunities after BCA
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerScope.bca.map((career, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-md"
                    >
                      <h4 className="font-medium">{career.role}</h4>
                      <Badge variant="secondary" className="text-sm">
                        {career.salary}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
              <CardHeader>
                <h3 className="font-bold text-xl mb-2">
                  <Briefcase className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                  Career Opportunities after MCA
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerScope.mca.map((career, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-md"
                    >
                      <h4 className="font-medium">{career.role}</h4>
                      <Badge variant="secondary" className="text-sm">
                        {career.salary}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Students Are Working At */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Students Are Working At
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our graduates are employed by leading companies across the globe.
            </p>
          </div>
          {/* New recruiter image section */}
          <div className="mt-8">
            <img
              src={hiringPartnersImg}
              alt="Our Hiring Partners"
              className="mx-auto w-full max-w-6xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online Engineering &
              Technology programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200/60">
                <CardHeader>
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the technology revolution with industry-relevant online
            programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0052CC] hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Counselling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0052CC]"
              
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default OnlineTech;
