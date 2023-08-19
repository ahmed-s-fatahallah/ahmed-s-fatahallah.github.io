/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Saeed",
  title: "Hi all, I'm Ahmed",
  subTitle: emoji(
    `A self-taught front-end web developer with a passion for creating
    beautiful and responsive websites. I have learned vanilla HTML,
    CSS, JavaScript, and React through online courses, tutorials, and
    projects. I enjoy learning new technologies and frameworks, and
    I'm always looking for new challenges and opportunities to improve
    my skills.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/13a351vGM3H4YqZ06HuhutM6ByN4tXO54/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmed-s-fatahallah",
  linkedin: "https://www.linkedin.com/in/ahmed-s-fatahallah/",
  gmail: "ahmed.s.fatahallah@gmail.com",
  facebook: "https://www.facebook.com/ahmed.saeed.245",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONT-END WEB DEVELOPER WHO WANTS TO BUILD AWESOME AND RESPONSIVE WEBSITES AND LEARN ALL NEW TECHNOLOGIES OUT THERE.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of libraries and frameworks to make your website amazing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "devicon:html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "devicon:css3"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "devicon:sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon:javascript"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon:typescript"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "devicon:react"
    },
    {
      skillName: "next.js",
      fontAwesomeClassname: "logos:nextjs-icon"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "devicon:nodejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "devicon:npm-wordmark"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon:git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "icon-park:github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "devicon:mysql"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "skill-icons:aws-dark"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase"
    },
    {
      skillName: "VSCode",
      fontAwesomeClassname: "devicon:vscode"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Zagazig University",
      logo: require("./assets/images/ZagUni.jpg"),
      subHeader: "Premaster in Geophysical exploration",
      duration: "2016 - 2017",
      descBullets: ["Overall grade: very good"]
    },
    {
      schoolName: "Zagazig University",
      logo: require("./assets/images/ZagUni.jpg"),
      subHeader: "Bachelor of Science in Geophysics",
      duration: "2012 - 2016",
      descBullets: ["Overall grade: good", "Project grade: excellent"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "JavaScript Developer",
      company: "Nagwa Co.",
      companylogo: require("./assets/images/Nagwa-Egypt-4718-1511769407.jpg"),
      date: "Aug 2023 - Present",
      desc: "A JavaScript developer working on different company applications and developing new ones with native JavaScript and TypeScript, also with React and Electronjs.",
      descBullets: []
    },
    {
      role: "Front-End Developer - Intern ",
      company: "Robusta Studios",
      companylogo: require("./assets/images/robusta.jpg"),
      date: "July 2023 – Aug 2023",
      desc: "Trained to work with native JavaScript, TypeScript, HTML, CSS, Git, GitHub, GitLab and React. Also,done some small projects and tasks during the internship."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle:
    "SOME OF PROJECTS THAT I BUILT EITHER AS A PRACTICE ON WHAT I LEARN OR DURING COURSES",
  projects: [
    {
      image: require("./assets/images/allbirds-logo.jpg"),
      projectName: "All birds (still under progress)",
      projectDesc:
        "A replica for an e-commerece website called All-Birds which I am building from scratch using nextjs as a personal project to practice what I have learned about react, nextjs and redux.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://all-birds-iota.vercel.app/collections/mens"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/little-lemon.JPG"),
      projectName: "Little Lemon Restaurant",
      projectDesc:
        "A website for a fictional restaurant called Little Lemon which I Built from scratch starting by creating the wireframe and UI/UX design using Figma, then implementing these designs using React, React-router and CSS, and writing the unit tests using Jest. Also I was using Git and GitHub during the project and the project is deployed on gh-pages.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ahmed-s-fatahallah.github.io/little-lemon-restaurant/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/meti-meteor.jpg"),
      projectName: "Meti-Meteor",
      projectDesc:
        "It’s a mini-game built by me from scratch to implement what I have learned about vanilla HTML, CSS, and JavaScript. The game is about dragging and dropping meteors on a board of 9 tiles during 5 turns the goal is not to destroy more than 3 tiles before your turns end.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ahmed-s-fatahallah.github.io/meti-meteor/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "FWD Front-end web development Challenger track",
      subtitle:
        "Finished Udacity and ITIDA challengers track for the front-end web development scholarship",
      image: require("./assets/images/FWD challenger track certificate.jpg"),
      imageAlt: "FWD challenger track certificate",
      footerLink: [
        {
          name: "Certificate Code: P3K9QD64"
        }
      ]
    },
    {
      title: "FWD Front-end web development Professional track",
      subtitle:
        "Finished Udacity and ITIDA Professional track for the front-end web development scholarship",
      image: require("./assets/images/FWD professional Track.jpg"),
      imageAlt: "FWD professional track certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://graduation.udacity.com/confirm/ULDADDLE"
        }
      ]
    },
    {
      title: "FWD full-stack web development Advanced track",
      subtitle:
        "Finished Udacity and ITIDA Advanced track for the full-stack web development scholarship",
      image: require("./assets/images/FWD advanced track certificate.jpg"),
      imageAlt: "FWD Advanced track certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://graduation.udacity.com/confirm/ERC2SXQQ"
        }
      ]
    },
    {
      title:
        "Coursera and Meta Professional front-end web developer certificate",
      subtitle:
        "Completed the 9 courses of Professional front-end web developer certificate from Meta and coursera and build a capstone project at the end.",
      image: require("./assets/images/Coursera X2JBMMLFLHVF.jpg"),
      imageAlt:
        "Coursera and Meta Professional front-end web developer certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/professional-cert/X2JBMMLFLHVF"
        }
      ]
    },
    {
      title:
        "Coursera and Meta Introduction to Front-end web development certificate",
      subtitle:
        "Coursera and Meta introduction to front-end web development course in which I have learned about HTML and CSS, and how to write proper and semantically accurate HTML code.",
      image: require("./assets/images/Coursera WYF3JZ3R784G.jpg"),
      imageAlt:
        "Coursera and Meta introduction to front-end web development certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/WYF3JZ3R784G"
        }
      ]
    },
    {
      title: "Coursera and Meta Programming with JavaScript certificate",
      subtitle:
        "Coursera and Meta programming with JavaScript course in which I have learned about JavaScript variables, built-in functions, primitive types and reference types and how to write clean javascript code.",
      image: require("./assets/images/Coursera 9CWK2KREABHM.jpg"),
      imageAlt: "Coursera and Meta programming with JavaScript certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/9CWK2KREABHM"
        }
      ]
    },
    {
      title: "Coursera and Meta version control certificate",
      subtitle:
        "Coursera and Meta Version Control course in which I have learned about Git and version control systems, also about GitHub and how to use it",
      image: require("./assets/images/Coursera FXE66LXM92RX.jpg"),
      imageAlt: "Coursera and Meta version control certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/FXE66LXM92RX"
        }
      ]
    },
    {
      title: "Coursera and Meta HTML and CSS in depth certificate",
      subtitle:
        "Coursera and Meta HTML and CSS in depth course in which I have learned more about HTML and its meta tags, also more about CSS selectors, variables and properties.",
      image: require("./assets/images/Coursera BPN2RC9S6SQX.jpg"),
      imageAlt: "Coursera and Meta HTML and CSS in depth certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/BPN2RC9S6SQX"
        }
      ]
    },
    {
      title: "Coursera and Meta React basics certificate",
      subtitle:
        "Coursera and Meta React Basics course in which I have learned about react and how to write JSX code.",
      image: require("./assets/images/Coursera 2AQSWW3CR796.jpg"),
      imageAlt: "Coursera and Meta React basics certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/2AQSWW3CR796"
        }
      ]
    },
    {
      title: "Coursera and Meta Advanced React certificate",
      subtitle:
        "Coursera and Meta Advanced React course in which I have learned more about react, react hooks, state and the context api.",
      image: require("./assets/images/Coursera SV5ZGY7DY2QF.jpg"),
      imageAlt: "Coursera and Meta Advanced React certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/SV5ZGY7DY2QF"
        }
      ]
    },
    {
      title: "Coursera and Meta Principles of UX/UI design certificate",
      subtitle:
        "Coursera and Meta Principles of UX/UI design course in which I have learned UX/UI principles and rules.",
      image: require("./assets/images/Coursera 8AY6WMA86TSM.jpg"),
      imageAlt: "Coursera and Meta Principles of UX/UI design certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/8AY6WMA86TSM"
        }
      ]
    },
    {
      title: "Coursera and Meta Front-end developer Capstone certificate",
      subtitle:
        "Coursera and Meta Front-end developer Capstone project in which I built fron scratch a website for a fictional restaurant called Little Lemon starting with creating the wireframes and the UI design using Figma and implement these designs in code using React, React-router-dom, Git and GitHub you can find this project in the projects section and in my GitHub account",
      image: require("./assets/images/Coursera LCK5MAF2YQ5A.jpg"),
      imageAlt: "Coursera and Meta Front-end developer Capstone certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/LCK5MAF2YQ5A"
        }
      ]
    },
    {
      title: "Coursera and Meta Coding interview preparation certificate",
      subtitle:
        "Coursera and Meta Coding interview preparation project in which I have learned about Data Structure and Algorithms and about how to approach interviews.",
      image: require("./assets/images/Coursera 6E78Z4SETNDX.jpg"),
      imageAlt: "Coursera and Meta Coding interview preparation certificate",
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://coursera.org/verify/6E78Z4SETNDX"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20-1098500188",
  email_address: "ahmed.s.fatahallah@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
