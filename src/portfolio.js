/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Saurav Mittal",
  title: "Hey! I'm Saurav",
  subTitle: emoji("Enthusiastic Programmer 😃 eager to contribute to team success. Clear understanding of Data Structures & Algorithms and CS concepts in general. Motivated to learn, grow and excel in Software Development."),
  resumeLink: "https://drive.google.com/file/d/1JAWsHptrVgqKfk-605A2RFyM4WQY9RJo/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sauravmittal001",
  linkedin: "https://www.linkedin.com/in/saurav-mittal-2a7a0b16b/",
  gmail: "sauravmittal001@gmail.com",
  gitlab: "https://gitlab.com/sairavmittal001",
  facebook: "https://www.facebook.com/saurav.mittal.9275",
  medium: "https://medium.com/@sauravmittal001",
  stackoverflow: "https://stackoverflow.com/users/10277038/pseudo-001"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "PASSIONATE SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY SDE ASPECT",
  skills: [
    emoji("✔️  Develop web and mobile applications"),
    emoji("✔️  Proficient in languages like Python, C++ and Java"),
    emoji("✔️  Deep understanding of Data structures and Algorithms")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Indian Institute of Technology Delhi",
      logo: require("./assets/images/iitdLogo.png"),
      subHeader: "Bachelor of Technology",
      duration: "July 2018 - Present",
      desc: "Overall GPA 4.0/5",
      descBullets: [
        "Member of the National Social Service and contributed to various projects and events",
        "Executive of the IITD Economics Club and a member of the KM pillar"
      ]
    },
    {
      schoolName: "Saupin's School",
      logo: require("./assets/images/Saupins_logo.png"),
      subHeader: "High School",
      duration: "April 2014 - April 2016",
      desc: "Scored overall perfect GPA (10/10)",
      descBullets: [
        "Received a merit certificate on the basis of academic excellence from the Human Resource Department of India",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Problem solving",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming Languages",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Atom Inc.",
      companylogo: require("./assets/images/atomLogo.png"),
      date: "May 2020 – July 2020",
      desc: "Behavioural Science, Gamification & AI to help people achieve their goals",
      descBullets: [
        "Designed new features like reward tokens on completion of meditation session and media streaming using IFrame Player API",
        "Assessed app performance and code efficiency through benchmarking and optimization tests and significantly reduced app's cold startup time and the app size by ~60%",
        "Built scripts to upload unstructured media content as structured and managed JSON data in Cloud database"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sauravmittal001", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON IN THE PAST (click for details)",
  projects: [
    {
      image: require("./assets/images/voxcoLogo.png"),
      link: "https://github.com/sauravmittal001/VoxCo"
    },
    {
      image: require("./assets/images/rdvLogo.webp"),
      link: "http://www.rdv-iitd.com/"
    },
    {
      image: require("./assets/images/karaLogo.webp"),
      link: "https://github.com/sauravmittal001/Karakoram"
    }

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {


  title: emoji(""),
  subtitle: "",

  achievementsCards: []

  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  //
  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     footerLink: [
  //       { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
  //       { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
  //       { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
  //   },
  //
  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     footerLink: [
  //       { name: "Certification", url: "" },
  //       { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
  //     ]
  //   }
  // ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://github.com/sauravmittal001/voxco",
      title: "How I built my first android application in Java",
      description: "Details about the project and which free online resources I used to learn android dev"
    },
    {
      url: "https://github.com/jwasham/coding-interview-university",
      title: "A guide for competitive programming",
      description: "Amoung many online platforms to practice and learn about programming, data structures and algorithms, how to choose which one is right for you?"
    }
  ]
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  //
  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ]
  title: "",
  subtitle: emoji(""),
  talks: [
  ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  //
  // // Please Provide with Your Podcast embeded Link
  // podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all!",
  email_address: "sauravmittal001gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "SauravM47373955"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
