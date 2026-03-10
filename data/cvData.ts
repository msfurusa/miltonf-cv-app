import type { CV } from "@/types/cv";

const cv: CV = {
  name: "Milton Sipho Furusa",
  title: "Software Engineer | Cloud | DevOps",
  location: "Midrand, Gauteng, South Africa",
  email: "msfurusa@gmail.com",
  linkedin: "linkedin.com/in/milton-sipho-furusa",
  phone: "+27 78 525 5566",

  summary: `
Software Engineer Cloud & DevOps and  with extensive experience in cloud infrastructure,
CI/CD automation, Kubernetes, monitoring, and enterprise systems.
Strong background in AWS, Azure, and GCP, supporting production platforms
and optimizing system reliability, performance, and security.
`,

  skills: {
    Cloud: ["AWS", "Azure", "GCP"],
    DevOps: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Argo CD",
    ],
    Monitoring: ["Prometheus", "Grafana", "ELK", "Datadog"],
    Programming: [
      "Java",
      "Python",
      "C#",
      "JavaScript",
      "Bash",
      "PowerShell",
    ],
    Databases: ["PostgreSQL", "MySQL", "MongoDB"],
    Messaging: ["Apache Kafka", "RabbitMQ"],
  },

  experience: [
    {
      role: "Software Engineer (Contract)",
      company: "BMW IT Hub ZA",
      period: "Mar 2024 – Present",
      bullets: [
        "Oversee and support 24/7 operational environment with a strong focus on incident management and resolution.",
        "Develop and manage containerized applications using Docker and EKS.",
        "Design, develop, and maintain Java applications.",
        "Managed CI/CD pipelines using GitHub Actions and Argo CD.",
        "Monitored and analyzed logs using Elasticsearch, OpenSearch, and Kibana.",
        "Optimized and tuned Apache Kafka topics for performance and reliability.",
        "Automation of system infrastructure and deployments.",
        "Investigate and resolve application and infrastructure issues.",
        "Assisting with production support, hyper-care after production deployments.",
      ],
      tools:
        "AWS, Java, GitHub Actions, Kubernetes, Kafka, Prometheus, Grafana, Argo CD, ITSM",
    },
        {
      role: "InfraSecOps Engineer (Contract)",
      company: "International Airlines Group",
      period: "Apr 2023 – Feb 2024",
      bullets: [
        "Overseeing and managing the infrastructure support queue, ensuring all tickets are resolved/fulfilled within SLA.",
        "Assessing security of existing environment.",
        "Creating and managing CI/CD pipelines using Gitlab.",
        "Managing software products running in container registry using technologies such as docker, ECR, EKS.",
      ],
      tools: "AWS, Terraform, Kubernetes, GitLab CI, Jenkins, RabbitMQ, Nexus",
    },
    {
      role: "DevOps Engineer",
      company: "Kuda Technologies",
      period: "Oct 2021 – Mar 2023",
      bullets: [
        "Designed and maintained cloud infrastructure on AWS.",
        "Built CI/CD pipelines using GitLab and Jenkins.",
        "Provisioned infrastructure using Terraform and Kubernetes.",
        "Implemented centralized monitoring and logging using ELK stack.",
      ],
      tools: "AWS, Terraform, Kubernetes, GitLab CI, Jenkins",
    },
        {
      role: "DevOps Engineer",
      company: "Triggerise",
      period: "Apr 2021 – Jul 2021",
      bullets: [
        "Build, configure, and monitor the infrastructure needed by the software to run.",
        "Automate the creation, maintenance, and monitoring of the infrastructure for software application to run.",
        "Responsible for optimizing the flow of work from build to release.",
        "Collaborate with other developers and product owners within the teams, as part of the agile practices and rituals.",
        "Responsible for building and testing tools needed for the development and release of the software.",
        "Follow up with top priority issues and discuss with the team, providing daily updates during the kickoff.",
      ],
      tools: "AWS, Terraform, Kubernetes, GitLab CI, Jenkins",
    },
        {
      role: "DevOps Consulatant",
      company: "Tangent Soltions",
      period: "Jun 2020 – Mar 2021",
      bullets: [
        "Designed and maintained cloud infrastructure on AWS.",
        "Built CI/CD pipelines using GitLab and Jenkins.",
        "Provisioned infrastructure using Terraform and Kubernetes.",
        "Build highly automated development pipelines, with zero touch deployments, allowing both developers and operations to deploy at free will.",
      ],
      tools: "Azure DevOps, C#, .Net, CI/CD, Git, Terraform, Kubernetes, Docker, SonarQube, PowerShell",
    },
    {
      role: "Infrastructure / Systems Engineer",
      company: "BCX",
      period: "Dec 2011 – May 2020",
      bullets: [
        "Built, maintained, and monitored enterprise infrastructure environments.",
        "Automated server provisioning and system maintenance tasks.",
        "Monitoring all services and system performance on servers.",
        "Liaising with vendors and IT personnel in relation to application and infrastructure support.",
        "Raising all new software bugs and applying the fixes to the appropriate platform.",
        "Ensure all knowledge gained is documented for reference.",
      ],
      tools: "Windows Server, Linux",
    },
        {
      role: "Jnr Systems Administrator",
      company: "Hwange Colliery",
      period: "Aug 2007 – Dec 2010",
      bullets: [
        "Resource scheduling and tasking using the windows server operating system.",
        "Responsible for business-critical systems.",
        "Installation, monitoring and maintaining applications in a 24/7 production environment.",
        "Maintaining and implementing servers and devices storage, disk layouts, file system configurations, and OS to specific applications.",
        "Performing weekly backups and restores on the main servers.",
      ],
      tools: "Windows Server, Unix Solaris, Redhat Linux",
    },
  ],

  certifications: [
    "AWS Certified Cloud Practitioner",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Kubernetes & Cloud Native Associate (CNCF)",
    "Kubernetes & Cloud Native Essentials (Linux Foundation)",
    "Google Cloud Architecting Specialization",
    "Full-Stack Web Development with React",
    ""
  ],

  education: [
    {
      qualification:
        "BSc Honours in Information Technology (Software Engineering)",
      institution: "Eduvos",
      year: "2025",
      modules: [
        "Front-end & Backend Technologies and Frameworks",
        "Embedded System Software Development",
        "Service-Oriented & Microservices Architecture",
        "Computer Graphics and Game Development",
        "Hybrid Mobile Application Development (Java & Android)",
        "Data Mining and Database Administration",
        "IT Research Methodologies",
        "Dissertation",
      ],
    },
    {
      qualification:
        "BSc in Information Technology (Systems Engineering)",
      institution: "Richfield Graduate Institute of Technology",
      year: "2024",
      modules: [
        "1st Year: Mathematics, Programming (VB.Net), Web Technology (JavaScript, HTML, CSS), Information Systems, Networking",
        "2nd Year: Programming (C++, Python), Cloud Computing, Databases, Information Systems, Computer Architecture, Big Data and IoT, Machine Learning, Server Technology",
        "3rd Year: Software Engineering, Programming (Java), Cyber Security, Artificial Intelligence, Mobile App Development (Java & Android), Human Computer Interaction, IT Project",
      ],
    },
  ],
};

export default cv;
