import type { CV } from "@/types/cv";

const cv: CV = {
  name: "Milton Sipho Furusa",
  title: "DevOps / Cloud / Software Engineer",
  location: "Midrand, Gauteng, South Africa",
  email: "msfurusa@gmail.com",
  phone: "+27 78 525 5566",

  summary: `
DevOps and Cloud Engineer with extensive experience in cloud infrastructure,
CI/CD automation, Kubernetes, monitoring, and enterprise systems.
Strong background in AWS, Azure, and GCP, supporting production platforms
and optimizing system reliability, performance, and security.
`,

  skills: {
    Cloud: ["AWS", "Azure", "GCP", "SAP BTP"],
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
      role: "DevOps Engineer (Contract)",
      company: "Imizizi – BMW IT Hub ZA",
      period: "Mar 2024 – Present",
      bullets: [
        "Provided high-quality incident and problem resolution within SLA and OLA targets.",
        "Managed CI/CD pipelines using GitHub Actions and Argo CD.",
        "Monitored and analyzed logs using Elasticsearch, OpenSearch, and Kibana.",
        "Optimized and tuned Apache Kafka topics for performance and reliability.",
        "Investigated API performance, security, and availability issues.",
      ],
      tools:
        "AWS, GitHub Actions, Kubernetes, Kafka, Prometheus, Grafana, Argo CD",
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
      role: "Infrastructure / Systems Engineer",
      company: "BCX",
      period: "Dec 2011 – May 2020",
      bullets: [
        "Built, maintained, and monitored enterprise infrastructure environments.",
        "Automated server provisioning and system maintenance tasks.",
        "Supported business-critical systems in 24/7 production environments.",
      ],
      tools: "Windows Server, Linux, ELK, Bash",
    },
  ],

  certifications: [
    "AWS Certified Cloud Practitioner",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Kubernetes & Cloud Native Associate (CNCF)",
    "Kubernetes & Cloud Native Essentials (Linux Foundation)",
    "Google Cloud Architecting Specialization",
    "Full-Stack Web Development with React",
  ],

  education: [
    {
      qualification:
        "BSc Honours in Information Technology (Software Engineering)",
      institution: "Eduvos",
      year: "2025",
    },
    {
      qualification:
        "BSc in Information Technology (Systems Engineering)",
      institution: "Richfield Graduate Institute of Technology",
      year: "2024",
    },
  ],
};

export default cv;
