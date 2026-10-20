// All site content lives here. Edit this file to update the portfolio —
// index.html and main.js should not need changes for content updates.
const PORTFOLIO = {
  name: "Your Name",
  role: "Software Developer",
  tagline: "I build clean, useful web applications and enjoy turning ideas into products.",
  location: "City, Country",
  email: "you@example.com",
  avatar: "", // e.g. "assets/avatar.jpg" — leave empty to show initials
  resumeUrl: "", // e.g. "assets/cv.pdf" — leave empty to hide the button

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
      title: "Project One",
      description: "A one- or two-sentence summary of what the project does and the problem it solves.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "", // e.g. "assets/project-one.png"
      demo: "https://example.com",
      code: "https://github.com/yourname/project-one",
    },
    {
      title: "Project Two",
      description: "Describe your role, the tech you used, and a result worth mentioning.",
      tags: ["React", "Node.js"],
      image: "",
      demo: "",
      code: "https://github.com/yourname/project-two",
    },
    {
      title: "Project Three",
      description: "Another project that shows a different skill or interest.",
      tags: ["Python", "Data"],
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
