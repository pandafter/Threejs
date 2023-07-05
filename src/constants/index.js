import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ai_sum,
    threejs,
    IT,
    native,
    dashboard,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Developer",
      company_name: "Self Production",
      icon: creator,
      iconBg: "#EBEBEB",
      date: "SINCE 2019",
      points: [
        "I started as a developer when i was on HighSchool, with HTML 5, CSS and JS.",
        "Then, when i went to University i studied C++ and then i went to Graphics Designer University, both of these were in Colombia.",
        "In 2021 i started with the use of frameworks like: React.js, ReactNative, Django, Next.js.",
        "Now,in 2023, i started my way thru three.js and tailwindcss to improve my web development skills.",
      ],
    },
    {
      title: "API developer",
      company_name: "IT CLOUD SERVICES",
      icon: IT,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
   
    /*{
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "David Serna",
      designation: "COO",
      company: "SAT col",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },*/
   
  ];
  
  const projects = [
    {
      name: "AI Summarizer",
      description:
        "Web-based platform tool, that uses new GTP-4 AI to read information from Articles and different web pages that returns a Summarize of it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
      ],
      image: ai_sum,
      source_code_link: "https://github.com/pandafter/ai_sum",
    },
    
    {
      name: "Native Job",
      description:
        "React Native app, with the power of API's this is an app for IOS and Android that helps you to find the dream Job for a Developer.",
      tags: [
        {
          name: "React native",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "purple-text-gradient",
        },
      ],
      image: native,
      source_code_link: "https://github.com/pandafter/Native_app_jobs",
    },

    {
      name: "Admin Dashboard",
      description:
        "ReactJS app, for little or big company's, here you can view absolutely all your company data, personal, clients, sales, etc... It's the best app for your startups company.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "SyncfusionJs",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/pandafter/dashboard",
    },
    /*
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };