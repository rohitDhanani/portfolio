import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/resume2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/candyCrush3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, HTML and JavaScript as well as back-end technologies like Node.js, Flask, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Flask, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Supervisory Control and Code Review",
    company: "AVRL",
    description: `Led a team in developing and maintaining web applications using JavaScript and Node.js. Implemented RESTful APIs. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript","Python","Flask"],
  },
  {
    year: "2022 - 2023",
    role: "Intern-Developer",
    company: "Newton School",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript","React", "mongoDB","Java","Node.js"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "I created a mobile-friendly online store using HTML, CSS, and JavaScript. I incorporated responsive design to ensure the website displayed well on different devices, and added interactive features like hover effects and a shopping cart using CSS and JavaScript. I also incorporated a search feature and product filters. Through this project, I was able to improve my web development, user experience design, and project management skills.",
    technologies: ["HTML", "CSS", "JS"],
    link:"https://poetic-torte-075802.netlify.app/",
  },
  {
    title: "Resume Builder",
    image: project2,
    description:
      "A web-based solution that makes resume creation simple for users. an intuitive user interface that enables adding and removing parts from a resume simple. As they edit their resume, users can view a real-time preview of it. There are options for changing the fonts and colours, as well as printing.",
    technologies: ["HTML", "CSS", "React-JS"],
    link:"https://chipper-meerkat-4e40b6.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"#",
  },
  {
    title: "Candy Crush Game",
    image: project4,
    description:
      "I developed and implemented a Candy Crush game in React, utilizing the JSX syntax to create a dynamic and interactive user interface. I implemented game logic to match and crush candies, as well as incorporated features such as level progression.",
    technologies: ["HTML", "CSS", "React-JS"],
    link:"https://heroic-flan-c9b0f1.netlify.app/",
  },
];

export const CONTACT = {
  address: "Ranavav, Gujarat ",
  phoneNo: "+919099963682 ",
  email: "dhanani51@gmail.com",
};
