export const personalInfo = {
  name: "Ashish Kumar",
  title: "Software Engineer",
  email: "ak503005@example.com",
  phone: "+91-6307465659",
  location: "Chennai, Tamil Nadu, India",
  company: "MedicalMine India Private Limited (Zoho Subsidiary)",
  companyUrl: "https://www.charmhealth.com/in/index.html",
  github: "https://github.com/AK261102",
  linkedin: "https://www.linkedin.com/in/ashish-kumar-137363224/",
  twitter: "https://x.com/kumar_ashi35850?s=21",
  instagram: "https://www.instagram.com/ak261.1/",
  resume: "/resume.pdf"
};

export const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

export const skills = {
  languages: ["Java", "JavaScript", "Python", "C++", "SQL", "HTML/CSS"],
  frameworks: ["Spring Boot", "React", "Node.js", "Express", "Django"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  tools: ["Docker", "Kubernetes", "Apache Kafka", "Git", "Jenkins", "Maven"],
  cloud: ["AWS", "Azure", "GCP"],
  concepts: ["Microservices", "REST APIs", "System Design", "Data Structures", "Algorithms"]
};

export const experience = [
  {
    title: "Member of Technical Staff",
    company: "MedicalMine India Private Limited (Zoho Subsidiary) ",
    companyUrl: "https://www.charmhealth.com/in/index.html",
    location: "Chennai, India",
    duration: "June 2025 - Present",
    points: [
      "Developed and maintained high-throughput microservices using Java Spring Boot handling 100K+ requests per hour",
      "Implemented event-driven architecture using Apache Kafka for real-time data processing",
      "Built multi-agent AI chatbot system for healthcare applications with LLM integration",
      "Achieved 99.95% system uptime through robust error handling and monitoring",
      "Reduced API costs by 40%, saving $15K monthly through optimization"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Interview Tayari",
    companyUrl: "https://interviewtayari.com/",
    location: "Remote",
    duration: "Jan 2025 - June 2025",
    points: [
        "Built a full-stack MERN interview-prep platform with JWT + Google OAuth authentication, role-based access, and secure premium-content gating for 1,000+ active users.",
        "Developed interactive coding features including a Python/SQL execution engine using Docker sandboxing, automated test evaluation, and Monaco Editor integration for real-time coding.",
        "Implemented scalable backend architecture with Cloudinary uploads, optimized MongoDB queries (50% faster dashboard load times), robust API design, error handling, and performance tuning.",
        "Deployed and maintained production infrastructure using Nginx, PM2, HTTPS (Let’s Encrypt), CORS hardening, monitoring, backups, and documentation for a reliable, user-friendly platform."
    ]
  },
  {
    title: "Bachelor of Technology",
    company: "MNNIT Allahabad",
    companyUrl: "https://www.mnnit.ac.in/",
    location: "Allahabad, India",
    duration: "2021 - 2025",
    points: [
      "Branch Rank: 6th/56 ",
      "CGPA: 7.77/10",
      "Active participant in competitive programming contests",
      "Led technical workshops on web development and system design"
    ]
  }
];

export const featuredProjects = [
  {
    title: "Healthcare Multi-Agent Chatbot",
    description: "A sophisticated multi-agent AI chatbot system for healthcare applications using Java Spring Boot. Implements LLM-based parameter extraction, complex session management, and integration with Azure OpenAI APIs for appointment scheduling, medical queries, and billing inquiries.",
    tech: ["Java", "Spring Boot", "Azure OpenAI", "PostgreSQL", "Docker"],
  },
  {
    title: "FAQPilot Documentation System",
    description: "A comprehensive documentation and support query system with web crawler APIs, intelligent chunking logic for release notes, and anchor mapping for better navigation. Handles document processing and intelligent search capabilities.",
    tech: ["React", "Node.js", "Elasticsearch", "Python", "AWS"],
  },
  {
    title: "High-Throughput Microservices",
    description: "Enterprise-grade microservices architecture handling 100K+ requests per hour with 99.95% uptime. Implements event-driven architecture using Apache Kafka for real-time data processing and distributed system coordination.",
    tech: ["Java", "Apache Kafka", "Kubernetes", "Redis", "Prometheus"],
  },
];

export const personalProjects = [
  {
    title: "RAG System with Embeddings",
    description: "Retrieval-Augmented Generation system with embedding clustering for improved search accuracy. Implements vector databases and semantic search.",
    tech: ["Python", "LangChain", "Pinecone", "FastAPI"],
  },
  {
    title: "Competitive Programming Solutions",
    description: "Collection of optimized solutions for algorithmic challenges focusing on number theory, game theory, and advanced data structures.",
    tech: ["C++", "Algorithms", "Data Structures"],
  },
];

export const socialMedia = [
  {
    name: 'GitHub',
    url: '',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Codepen',
    url: 'https://codepen.io/yourusername',
  },
];
