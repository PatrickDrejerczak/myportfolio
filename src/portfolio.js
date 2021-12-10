/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  full_name: "Patrick Drejerczak",
  subTitle: "Frontend Developer and React Enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1ztfTreWnQmvR8CThN_BV6VLfEonkOlkF/view?ths=true",
  mail: "patrickdrejerczak@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/PatrickDrejerczak",
  linkedin: "https://www.linkedin.com/in/patrick-drejerczak-59147b95/",
  gmail: "patrickdrejerczak@gmail.com",
  facebook: "https://www.facebook.com/patrick.drejerczak",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Frontend Interfaces for web and mobile applications",
        "⚡ Building responsive websites using ReactJS, Redux and Next",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },

        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are mainly Frontend focused with a high emphasis on React. It fascinates me how different React components come together and form a fully functional masterpiece. Especially the re-usability of components is astounding, I like to say that it is like building a house using the smallest building blocks you can find. In the future you can expect more projects focusing on React, Redux and Next, as my goal is to become an expert in the use of React.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "patrick.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Codercook",
      img: "https://i.ibb.co/5R0Vwbn/codercook.jpg",
      url: "https://codercook.netlify.app/",
      description:
        "MERN application that allows to search for recipes, create recipes and use the unique What´s in your fridge function to get more customized search results.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "SoSmap",
      img: "https://i.ibb.co/pLW739K/sosmap.jpg",
      url: "https://sos-dashboard.netlify.app/",
      description:
        "Fully functional dashboard developed for sosmap.net. The company requested a better way to visualize donations and donations requests for their teams.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "2",
      name: "Codeflix",
      img: "https://i.ibb.co/6wg31cT/codeflix.jpg",
      url: "https://codeflix-jag.netlify.app/",
      description:
        "A Netflix clone that displays all popular movies and series and provides information on which streaming service has them available.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Space BrixX!",
      img: "https://i.ibb.co/VQj1wFp/spacebrixx.png",
      url: "https://patrickdrejerczak.github.io/SpaceBrixX/",
      description:
        "A space themed skill based logic game in which the user has to match falling planets with their corresponding color in order to get points.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Tindog",
      img: "https://i.ibb.co/Tv0cZJJ/tindogg.png",
      url: "https://patrickdrejerczak.github.io/tindoggg/",
      description:
        "Tindog is an simple but elegant example of a startup/product landing page. It clearly displays the company´s product/service with a call to action directed at the user.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
  projects,
};
