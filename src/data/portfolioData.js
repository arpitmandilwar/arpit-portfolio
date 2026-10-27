// =====================================================
//  EDIT THIS FILE to update your portfolio content.
//  Leave a URL as "" until you have the real link.
// =====================================================

export const personal = {
  name: "Arpit Mandilwar",
  title: "MERN Stack Developer | Full Stack Developer",
  intro:
    "Computer Science and Engineering graduate passionate about building responsive web applications, developing reliable REST APIs, and creating useful digital experiences with modern web technologies.",
  tagline: "Building practical, responsive web applications with the MERN stack.",

  email: "arpitmandilwar@gmail.com",
  phone: "+91 7321824095",
  phoneHref: "tel:+917321824095",

  // PLACEHOLDERS: replace with your real profile URLs, for example:
  //   github: "https://github.com/your-username"
  //   linkedin: "https://www.linkedin.com/in/your-profile"
  github: "https://github.com/arpitmandilwar",
  linkedin: "https://www.linkedin.com/in/arpit-mandilwar-52b97a445/",

  // Put your PDF at: public/Arpit-Mandilwar-Resume.pdf
  resumePath: "/Arpit-Mandilwar-Resume.pdf",
  resumeFileName: "Arpit-Mandilwar-Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
];

export const about = [
  "I'm a Computer Science and Engineering graduate from Babu Banarasi Das University with a GPA of 8.46. My technical interests include full-stack development, MERN stack applications, REST APIs, authentication, database management, and responsive user interfaces.",
  "During my Full Stack Developer Trainee experience at GRAStech Foundation, I worked with React.js, reusable components, state management, Node.js, and Express.js. I also gained exposure to third-party integrations, payment gateways, cloud services, and application deployment and testing.",
  "I enjoy solving programming problems and building applications that combine clean interfaces with practical functionality.",
];

export const skills = [
  { category: "Programming Languages", items: ["Java", "Python", "SQL"] },
  { category: "Development", items: ["MERN Stack", "Tailwind CSS"] },
  { category: "Frameworks and Libraries", items: ["React.js", "Express.js", "Node.js"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Collaboration"] },
];

export const experience = [
  {
    role: "Full Stack Developer Trainee",
    organization: "GRAStech Foundation",
    location: "Lucknow, Uttar Pradesh",
    duration: "June 24 – July 31, 2025",
    points: [
      "Completed intensive training in full-stack web development using the MERN stack.",
      "Developed responsive web applications using React.js, reusable components, and state management.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Integrated third-party tools, including payment gateways and cloud services.",
      "Worked with environment variables.",
      "Deployed and tested full-stack applications.",
    ],
  },
];

export const projects = [
  {
    id: "grocery-app",
    title: "Grocery App",
    date: "August 2025",
    visual: "grocery", // which illustration the Projects section draws
    description:
      "A full-stack food delivery platform developed using the MERN stack, featuring user authentication, order management, and secure payment workflows.",
    features: [
      "Full-stack application using the MERN stack.",
      "User registration and authentication.",
      "Order management.",
      "Stripe payment gateway integration.",
      "Clerk authentication integration.",
      "Responsive user interface built with React and modern libraries.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Clerk"],
    github: "https://github.com/arpitmandilwar/grocery-apo", // PLACEHOLDER: repository URL
    live: "", // PLACEHOLDER: deployed URL (button stays hidden while empty)
  },
  {
    id: "eventora",
    title: "Eventora",
    date: "January 2026",
    visual: "events",
    description:
      "An event booking platform designed to provide a secure ticket booking workflow, role-based access control, and administrative management features.",
    features: [
      "JWT authentication.",
      "OTP verification.",
      "Role-based access control.",
      "Automated email notifications using Nodemailer.",
      "Ticket booking workflow.",
      "Admin approval system.",
      "Seat validation and overbooking prevention.",
      "Admin dashboard analytics.",
      "Responsive user interface using React and Tailwind CSS.",
    ],
    // MongoDB is intentionally NOT listed until you confirm it was used.
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT", "Nodemailer"],
    github: "https://github.com/arpitmandilwar/Eventora-MERN",
    live: "",
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  university: "Babu Banarasi Das University",
  location: "Lucknow, Uttar Pradesh",
  duration: "September 2022 – June 2026",
  gpa: "8.46",
  coursework: ["Data Structures and Algorithms", "Database Management", "Web Development"],
};

export const certifications = [
  { title: "Data Structures and Algorithms in Java", issuer: "", year: "", verifyUrl: "" },
  { title: "Introduction to Web Development", issuer: "Coursera", year: "2025", verifyUrl: "" },
  { title: "Career Essentials in Software Development", issuer: "LinkedIn", year: "2024", verifyUrl: "" },
];

export const achievements = [
  "Participated in the CodeCraft Olympiad 2024, demonstrating programming and problem-solving skills.",
  "Participated in AINCAT 2025 and 2026, showcasing analytical and aptitude abilities.",
];