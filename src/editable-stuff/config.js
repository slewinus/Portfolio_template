// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Oscar",
  middleName: "",
  lastName: "Robert-Besle",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/slewinus",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/oscar-robert-besle-0b7269171/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/0ckapom/",
    },
  ],
};



const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  message:
    "I was born on April 30, 2003, in Saint-Cloud, a suburb of Paris. At a young age, I started to be interested in cutting-edge technology and how they could revolutionize our world. Thanks to forums and documentation, I learned different programming languages such as Python, HTML/CSS and IoT. I got seriously interested in computer networks and I wanted to understand how it was possible to secure them. Quickly I started to work in this field and at at my 18th birthday I created my own company",
  resume: require("../editable-stuff/resume.pdf"),
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "slewinus",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Solidity", value: 50 },
    { name: "HTML/CSS/JavaScript", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "IoT", value: 90 },
    { name: "Pentest", value: 65 },
    { name: "Sdwan-Solution", value: 55 },
    { name: "Computer Network", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "",
  email: " oscar@dahouse.fr",
  phone : "+33 6 09 71 44 94",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
