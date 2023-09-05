import {
  mobile,
  backend,
  creator,
  ai,
  cloud,
  pytorch,
  blockchain,
  web,
  javascript,
  typescript,
  tensorflow,
  python,
  opencv,
  ethereum,
  solidity,
  aws,
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
  meta,
  strawhat,
  meebuddy,
  starbucks,
  IITK,
  ghluih,
  tesla,
  shopify,
  Cyclone,
  Musicnft,
  Voting,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    icon: ai,
  },
  {
    title: "MERN Stack",
    icon: mobile,
  },
  {
    title: "BLockchain",
    icon: blockchain,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "AWS",
    icon: cloud,
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
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern,",
    company_name: " Global Innovation Hub",
    icon: ghluih,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Worked on AI model using BNN for voice-based Dialysis Efficacy Detection and integrated it with IONIC and deployed on AWS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on unity to develop WEB-based Augmented Reality using c#."],
  },
  {
    title: "AI Engineer Internship",
    company_name: "StrawHat XYZ",
    icon: strawhat,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - March 2023",
    points: [
      "Built a web app using Whisper and GPT-3 to convert audio files into interactive blog posts with chapters and summaries.",
      "Created a powerful Recommender System API on GCP's Vertex AI, delivering personalized web3 product recommendations via a Chrome extension.",
      "Automated NFT art collection creation, reducing manual work by 90%."
    ],
  },
  {
    title: "App/Web Developer Intern",
    company_name: "MeeBuddy Pvt.Ltd",
    icon: meebuddy,
    iconBg: "#383E56",
    date: "Sept 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Intern - M.L and Deep learning",
    company_name: "IIT Kanpur",
    icon: IITK,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - July 2021",
    points: [
      "Developed a neural network using Resnet50 and histogram oriented gradient features for the classification of fingerprints as part of a research project. Trained the model from scratch using TensorFlow, which resulted in classification accuracy on par with state-of-the-art networks."
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Cyclone detection and alerting system — (Hackathon)",
    description:
      "Developed a disaster alert application using deep learning to identify natural disasters such as cyclones from satellite monitoring videos and send alerts to users.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: Cyclone,
    source_code_link: "https://github.com/jokrhub/Cyclone-monitor",
  },
  {
    name: "Blockchain Voting Decentralized Application",
    description:
      "Developed a decentralized voting application where user can cast votes using a meta mask wallet. the smart contract is deployed in ganche application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: Voting,
    source_code_link: "https://github.com/",
  },
  {
    name: "Music NFT's Recomendation",
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
    image: Musicnft,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
