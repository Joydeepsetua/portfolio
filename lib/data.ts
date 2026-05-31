export interface Experience {
  title: string
  company: string
  website: string
  logo: string
  period: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  logo: string
  period: string
  description: string
}

export interface Achievement {
  title: string
  organization: string
  year: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export const experiences: Experience[] = [
  {
    title: "Senior App Developer",
    company: "Graeon Ventures Pvt Ltd",
    website: "https://graeon.ai/",
    logo: "/company/graeontech.png",
    period: "Jan 2026 - Present",
    description:
      "Developing a multi-tenant mobile application using React Native (Expo) for Android and iOS. The application includes modules such as HRMS, CMS, and Inventory Management, with advanced features like live location tracking and face-based attendance (Face Punch). Focused on building scalable architecture, performance optimization, and seamless user experience.",
  },
  {
    title: "Software Developer",
    company: "Sthanave Technologies",
    website: "https://sthanave.com/",
    logo: "/company/sthanave.png",
    period: "Dec 2022 - Jan 2026",
    description:
      "Experienced in building cross-platform apps using React Native with Redux Toolkit, Zoom SDK integration, and performance optimization. Skilled in deploying apps to the Play Store and App Store. On the backend, I develop scalable APIs using Node.js with MongoDB/MySQL, implement clustering, and enable real-time features with Socket.IO.",
  },
  {
    title: "Staff Software Engineer",
    company: "iDeliver Technologies LLC",
    website: "https://www.ideliver-inc.com/",
    logo: "/company/ideliver.png",
    period: "Sep 2022 - Nov 2022",
    description:
      "Worked on automating websites using scripting with LoadRunner and UFT tools. Automated over 4 websites for performance testing using LoadRunner. Automated more than 2 websites using UFT for functional testing.",
  },
]

export const education: Education[] = [
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "UPU Govt. Polytechnic collage, Durg (CSVTU)",
    logo: "/upu_govt_poly.png",
    period: "2019 - 2022",
    description:
      "Completed a Diploma in Computer Science Engineering with 9.08 CPI (Cumulative Performance Index) in Apr-May 2022. Built strong CS fundamentals and worked on projects using various technologies.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Govt. Higher Secondary School Jarway",
    logo: "/cgbse_logo.png",
    period: "MAR 2019",
    description:
      "Completed higher secondary education with science and mathematics. Participated in various extracurricular activities and competitions.",
  },
]

export const achievements: Achievement[] = [
  {
    title: "Excellence in Leadership",
    organization: "Sthanave Technologies",
    year: "2023",
    description:
      "Honored to be awarded the Excellence in Leadership Award by Sthanave Technologies for outstanding leadership and impact.",
  },
  {
    title: "Campus Ambassador",
    organization: "IIT Kharagpur",
    year: "2022",
    description: "Certified as a Campus Ambassador at UPU Govt. Polytechnic Durg by IIT Kharagpur.",
  },
]

export const projects: Project[] = [
  {
    title: "Shree Pathology Laboratory",
    description:
      "It is a web application for generating medical reports. This front-end application can generate over 52 types of test reports instantly without storing any data.",
    image: "/projects/shree-pathology-lab.jpeg",
    tags: ["Next.js", "React-Bootstrap", "TypeScript"],
    liveUrl: "https://shree-pathology-lab.netlify.app/",
    githubUrl: "https://github.com/Joydeepsetua/Shree-Pathology-Laboratory-Web",
  },
  {
    title: "Google-Sheet-API",
    description:
      "Built a cost-effective CRUD application using Google Sheets as a free database alternative, deployed entirely on Vercel with zero infrastructure cost. Demonstrated basic CRUD operations and REST API integration using Node.js.",
    image: "/projects/google-sheet-api.jpg",
    tags: ["Node.js", "Express", "Spreadsheet", "Googleapis", "JWT"],
    liveUrl:
      "https://medium.com/@joydeepsetua/how-to-insert-data-in-google-sheets-spreadsheet-in-node-js-a5e3a1886069",
    githubUrl: "https://github.com/Joydeepsetua/Google-Sheet-Api",
  },
  {
    title: "Get Attendance",
    description:
      "This Android application is developed for daily student attendance tracking and generates monthly reports for teachers.",
    image: "/projects/getattendance.png",
    tags: ["Android Studio", "Java", "SQLite"],
    liveUrl: "https://drive.google.com/file/d/1DrEHjBNrHaxEjBjN5bd3vIvgwGr9Vbs6/view?usp=sharing",
    githubUrl: "https://github.com/Joydeepsetua/Get-Attendance",
  },
]
