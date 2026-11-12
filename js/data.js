// All site content lives here. Edit this file to update the portfolio —
// index.html and main.js should not need changes for content updates.
const PORTFOLIO = {
  name: "Hanna Truong",
  role: "Software Developer",
  tagline: "I enjoy building applications that deliver real value to users and making innovative ideas a reality.",
  location: "Canberra, Australia",
  email: "hanna.truongg@gmail.com",
  avatar: "", // e.g. "assets/avatar.jpg" — leave empty to show initials
  resumeUrl: "", // e.g. "assets/cv.pdf" — leave empty to hide the button

  // Background photo for each section, e.g. "assets/backgrounds/home.jpg" — leave empty for none.
  backgrounds: {
    home: "assets/backgrounds/home.jpg",
    about: "assets/backgrounds/about.jpg",
    projects: "assets/backgrounds/projects.jpg",
    skills: "assets/backgrounds/skills.jpg",
    experience: "assets/backgrounds/experience.jpg",
    education: "assets/backgrounds/education.jpg",
    contact: "assets/backgrounds/contact.jpg",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  ],

  about: [
    "Write a short introduction about yourself here: who you are, what you do, and what you care about.",
    "Add a second paragraph about your interests, how you like to work, or what you're looking for next.",
  ],

  projects: [
    {
      title: "OrthoVis 2.0",
      description: "Medical imaging software for working with CT-based 3D imaging data, built in an Agile team.",
      points: [
        "Developed interactive GUI components using PyQt.",
        "Implemented interactive 3D object manipulation features.",
        "Supported CT image and data processing workflows, including validation of imported imaging files.",
      ],
      tags: ["Python", "PyQt", "Image Processing"],
      image: "", // e.g. "assets/orthovis.png"
      demo: "",
      code: "",
    },
    {
      title: "IRRI Soil Data Visualization App",
      description: "Android app built during a software development internship at IRRI that turns external soil datasets into map-based insights.",
      points: [
        "Gathered and analysed requirements and designed a structured development plan.",
        "Integrated external APIs and datasets, converting raw JSON responses into map views.",
        "Processed and mapped coordinate data, validating outputs against known soil maps.",
      ],
      tags: ["Android", "Google Maps API", "JSON", "Geospatial Data"],
      image: "",
      demo: "",
      code: "",
    },
    {
      title: "EatInTime",
      description: "Team-built Android app for managing user and restaurant data with real-time sync.",
      points: [
        "Designed the data structure for user and restaurant data.",
        "Implemented backend logic using Firebase Realtime Database.",
        "Collaborated on user-facing features using Git and Android Studio.",
      ],
      tags: ["Android", "Firebase", "Realtime Database"],
      image: "",
      demo: "",
      code: "",
    },
    {
      title: "Stock Watchlist Desktop App",
      description: "IB high school project: a desktop app for monitoring live stock data, built for a client.",
      points: [
        "Gathered and analysed requirements with the client.",
        "Scraped and parsed live stock data from HTML sources using JSoup.",
        "Built a clean interface that lets users group stocks by industry and trend.",
      ],
      tags: ["Java", "HTML", "JSoup"],
      image: "",
      demo: "",
      code: "",
    },
  ],

  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
    { category: "Frameworks", items: ["React", "Node.js", "Express"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
  ],

  experience: [
    {
      role: "Job Title",
      company: "Company Name",
      period: "2024 — Present",
      location: "City / Remote",
      points: [
        "Key achievement or responsibility, ideally with a measurable result.",
        "Another highlight from this role.",
      ],
    },
    {
      role: "Previous Job Title",
      company: "Previous Company",
      period: "2022 — 2024",
      location: "City",
      points: ["What you worked on and what you learned."],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2018 — 2022",
      details: "Relevant coursework, honours, or thesis topic.",
    },
  ],

  contactBlurb: "Have a question or want to work together? Send me a message and I'll get back to you.",
};
