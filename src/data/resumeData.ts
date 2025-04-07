export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  details: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
  bio: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  achievements: string[];
}

const resumeData: ResumeData = {
  name: "Avichal Verma",
  title: "Chemical Engineer",
  email: "avichal.2404verma@gmail.com",
  phone: "+91 7470649490",
  linkedin: "https://www.linkedin.com/in/avichal-verma-ln/",
  github: "https://github.com/AVICII-24",
  instagram: "https://www.instagram.com/_aviichii_/",
  bio: "Chemical Engineering graduate with a minor in Physics from BITS Pilani KK Birla Goa Campus. Passionate about space technology and AI-ML enthusiast. Experienced in developing machine learning models for exoplanet detection.",
  
  education: [
    {
      degree: "B.E. Chemical Engineering with minor in Physics",
      institution: "BITS Pilani KK Birla Goa Campus",
      period: "2023 - 2027",
      details: [
        "CGPA: 6.25/10"
      ]
    }
  ],
  
  experience: [
    {
      title: "Team Lead - Orbital Mechanics and Satellite Trajectory Simulation",
      company: "Space Research Lab",
      period: "Jan 2022 - May 2022",
      description: [
        "Led a team of 4 in simulating orbit-raising maneuvers for satellites",
        "Developed algorithms to optimize fuel consumption during orbital transfers",
        "Presented findings at the International Space Conference 2022"
      ]
    },
    {
      title: "Intern",
      company: "India Space Lab",
      period: "May 2021 - Jul 2021",
      description: [
        "Worked on CubeSat systems and space entrepreneurship",
        "Assisted in developing power management systems for small satellites",
        "Participated in weekly design reviews and technical discussions"
      ]
    }
  ],
  
  projects: [
    {
      id: "exoplanet-inclination",
      title: "Exoplanet Inclination Classification",
      description: "Developed machine learning model to classify exoplanets based on their orbit inclination",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Python", "TensorFlow", "CNN", "NASA TESS Data", "Keras"],
      details: [
        "Designed CNN model architecture for orbit inclination classification",
        "Used NASA exoplanet dataset imaged by TESS (Transiting Exoplanet Survey Satellite)",
        "Improved classification accuracy for exoplanet orbital characteristics"
      ]
    },
    {
      id: "exoplanet-detection",
      title: "Exo-Planet Detection",
      description: "Developed machine learning models to detect exoplanets from stellar light curve data",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "Matplotlib"],
      details: [
        "Implemented convolutional neural networks to analyze light curve data",
        "Achieved 92% accuracy in identifying potential exoplanets",
        "Processed over 5,000 stellar datasets from the Kepler mission"
      ]
    },
    {
      id: "telescope-webportal",
      title: "Telescope Webportal",
      description: "Designed a user interface for controlling and accessing data from remote telescopes",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Three.js"],
      details: [
        "Created an intuitive interface for telescope control and image acquisition",
        "Implemented real-time data visualization of celestial objects",
        "Developed a scheduling system for multiple users to access the telescope"
      ]
    },
    {
      id: "nasa-herc",
      title: "HERC – NASA Competition",
      description: "Participated in NASA's Human Exploration Rover Challenge, designing and building a rover",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["CAD", "Fusion360", "Mechanical Design", "3D Printing", "Electronics"],
      details: [
        "Designed the power distribution system for the rover",
        "Implemented a lightweight, energy-efficient drive mechanism",
        "Collaborated with an international team of 10 engineers"
      ]
    },
    {
      id: "surferbot",
      title: "SurferBot",
      description: "Autonomous robot designed to navigate and collect data in coastal environments",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Arduino", "C++", "Sensors", "GPS", "Machine Learning"],
      details: [
        "Developed navigation algorithms for wave prediction and avoidance",
        "Implemented water quality sensors for environmental monitoring",
        "Created a waterproof, solar-powered design for extended missions"
      ]
    },
    {
      id: "sustainable-aviation",
      title: "Sustainable Aviation Fuels",
      description: "Research project on developing and testing sustainable aviation fuels from biomass",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Chemical Engineering", "Process Design", "Catalysis", "Thermodynamics"],
      details: [
        "Investigated novel catalytic pathways for converting agricultural waste to jet fuel",
        "Conducted laboratory-scale synthesis and testing of fuel samples",
        "Performed lifecycle analysis to quantify carbon footprint reduction"
      ]
    },
    {
      id: "fuel-cells",
      title: "Solid Oxide Fuel Cells",
      description: "Research on improving the efficiency and durability of solid oxide fuel cells",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Electrochemistry", "Materials Science", "Data Analysis", "MATLAB"],
      details: [
        "Studied novel electrode materials to enhance catalytic activity",
        "Modeled electrochemical reactions using finite element analysis",
        "Published findings in the Journal of Power Sources"
      ]
    }

  ],
  
  skills: [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "Rust", "JavaScript", "MATLAB"]
    },
    {
      category: "Software & Tools",
      items: ["TensorFlow", "Keras", "React", "Node.js", "Fusion360", "ANSYS", "Aspen Plus"]
    },
    {
      category: "Space Technology",
      items: ["Orbital Mechanics", "Satellite Systems", "Telescope Operation", "Astrophysics"]
    },
    {
      category: "Chemical Engineering",
      items: ["Process Design", "Reaction Engineering", "Thermodynamics", "Fluid Mechanics"]
    }
  ],
  
  achievements: [
    "Published research paper on 'Machine Learning Approaches for Exoplanet Detection' in the International Journal of Astronomy",
    "Winner, National Space Challenge 2022",
    "Recipient of the BITS Merit Scholarship for academic excellence",
    "Selected for the International Space University's Summer Program"
  ]
};

export default resumeData;
