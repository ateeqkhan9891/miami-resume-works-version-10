
import type { ResumePreviewData } from "@/types/resume";

export const SAMPLE_PROFESSIONAL_RESUME_DATA: ResumePreviewData = {
  profile: {
    fullName: "Mahira Khan",
    headline: "Data Engineer | Data Platform Engineer",
    email: "mahira.khan@example.com",
    phone: "+92 300 1234567",
    location: "Islamabad, Pakistan",
    summary:
      "Data Engineer with 5+ years of experience designing scalable data pipelines, analytics platforms, and cloud-based data solutions. Experienced in Python, SQL, Apache Spark, Airflow, AWS, and modern data warehousing, with a strong focus on reliability, performance, and data quality.",
    website: "mairakhan.dev",
    linkedin: "linkedin.com/in/mairakhan",
    github: "github.com/mairakhan",
  },

  experience: [
    {
      id: "professional-experience-1",
      role: "Senior Data Engineer",
      company: "Nexa Analytics",
      period: "2023 - Present",
      location: "Islamabad, Pakistan",
      highlights: [
        "Designed and maintained scalable ETL pipelines processing more than 2 TB of data daily across cloud-based analytics platforms.",
        "Built Apache Spark data processing workflows that reduced large-scale transformation times by 42%.",
        "Developed production Airflow DAGs for automated ingestion, transformation, validation, and downstream delivery.",
        "Implemented data quality monitoring and validation workflows that significantly reduced pipeline-related incidents.",
      ],
    },
    {
      id: "professional-experience-2",
      role: "Data Engineer",
      company: "Vertex Technologies",
      period: "2021 - 2023",
      location: "Lahore, Pakistan",
      highlights: [
        "Built batch and near-real-time data pipelines using Python, SQL, Airflow, and Apache Spark.",
        "Designed dimensional data models and optimized analytical queries for business intelligence workloads.",
        "Migrated legacy reporting workflows to AWS-based data infrastructure, improving reliability and scalability.",
        "Collaborated with analysts, software engineers, and product teams to define data requirements and delivery standards.",
      ],
    },
    {
      id: "professional-experience-3",
      role: "Junior Data Engineer",
      company: "DataCore Solutions",
      period: "2019 - 2021",
      location: "Karachi, Pakistan",
      highlights: [
        "Developed Python-based ingestion scripts for collecting and transforming data from APIs, databases, and external systems.",
        "Created SQL queries and stored procedures supporting operational reporting and analytics.",
        "Assisted with database optimization, data validation, pipeline monitoring, and production troubleshooting.",
      ],
    },
  ],

  education: [
    {
      id: "professional-education-1",
      degree: "B.S. in Computer Science",
      school: "National University of Computer and Emerging Sciences",
      period: "2015 - 2019",
      location: "Islamabad, Pakistan",
      gpa: "3.7 / 4.0",
    },
  ],

  skills: [
    "Python",
    "SQL",
    "Apache Spark",
    "Apache Airflow",
    "AWS",
    "PostgreSQL",
    "Snowflake",
    "dbt",
    "Docker",
    "ETL / ELT",
    "Data Warehousing",
    "Data Modeling",
    "Kafka",
    "Git",
    "Linux",
  ],

  projects: [
    {
      id: "professional-project-1",
      name: "Real-Time Analytics Platform",
      description:
        "Cloud-based analytics platform processing high-volume event data through Kafka and Spark before loading curated datasets into a scalable warehouse.",
      url: "analytics-platform.dev",
      technologies: [
        "Python",
        "Kafka",
        "Apache Spark",
        "AWS",
        "Snowflake",
      ],
    },
    {
      id: "professional-project-2",
      name: "Automated Data Warehouse",
      description:
        "Modern ELT platform transforming operational datasets into analytics-ready models with automated testing, documentation, and scheduled workflows.",
      url: "datawarehouse.dev",
      technologies: [
        "dbt",
        "Airflow",
        "PostgreSQL",
        "Python",
        "Docker",
      ],
    },
  ],

  certifications: [
    {
      id: "professional-certification-1",
      name: "AWS Certified Data Engineer",
      issuer: "Amazon Web Services",
      date: "2025",
    },
    {
      id: "professional-certification-2",
      name: "Databricks Data Engineer Associate",
      issuer: "Databricks",
      date: "2024",
    },
  ],

  languages: [
    {
      id: "professional-language-1",
      name: "English",
      proficiency: "fluent",
    },
    {
      id: "professional-language-2",
      name: "Urdu",
      proficiency: "native",
    },
  ],

  awards: [
    {
      id: "professional-award-1",
      title: "Data Engineering Excellence Award",
      issuer: "Nexa Analytics",
      date: "2025",
      description:
        "Recognized for improving the reliability and performance of the company's core data platform.",
    },
    {
      id: "professional-award-2",
      title: "Outstanding Technical Contributor",
      issuer: "Vertex Technologies",
      date: "2022",
    },
  ],

  achievements: [
    {
      id: "professional-achievement-1",
      title: "Data Platform Migration Lead",
      issuer: "Nexa Analytics",
      date: "2024",
      description:
        "Led the migration of critical analytical workloads to a modern cloud data platform.",
    },
    {
      id: "professional-achievement-2",
      title: "Pipeline Performance Initiative",
      issuer: "Vertex Technologies",
      date: "2023",
      description:
        "Improved processing efficiency across multiple production pipelines through Spark optimization and query tuning.",
    },
  ],
};