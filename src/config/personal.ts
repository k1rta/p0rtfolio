import type { SiteConfig } from './types';

export const config: SiteConfig = {
  personal: {
    name: "Kirta-Linda Karits",
    title: "QA Engineer & Test Automation Specialist",
    email: "kirtalindakarits@icloud.com",
    linkedin: "https://www.linkedin.com/in/kirta-linda-karits/",
    github: "https://github.com/k1rta",
  },
  
  experiences: [
    {
      company: "Helmes",
      role: "Software QA Tester",
      period: "02/2024 – 09/2024",
      achievement: "Led quality strategy across FE, BE, iOS; built E2E coverage with Karate and Cypress; monitored with Grafana and Power BI",
      tools: ["Cypress", "Karate", "TypeScript", "Grafana", "Power BI"]
    },
    {
      company: "Klaus",
      role: "QA Engineer",
      period: "06/2023 – 10/2023",
      achievement: "Authored TypeScript/Cypress tests eliminating manual regression overhead",
      tools: ["Cypress", "TypeScript", "CircleCI"]
    },
    {
      company: "Cybernetica",
      role: "QA Engineer",
      period: "08/2022 – 05/2023",
      achievement: "Developed automated testing solutions for critical government systems",
      tools: ["Selenium", "Java", "Jenkins", "TestRail"]
    },
    {
      company: "Nekmit / Kindred Group",
      role: "Test Automation Developer",
      period: "01/2018 – 07/2022",
      achievement: "Reduced regression failures by 70% via Java/Selenium → Cypress migration; mentored QA teams on modern automation patterns",
      tools: ["Cypress", "Selenium", "JavaScript", "Java", "Karate", "Jenkins", "Power BI"]
    },
    {
      company: "iGame",
      role: "QA Tester",
      period: "07/2016 – 12/2017",
      achievement: "Performed manual and automated testing for online gaming applications",
      tools: ["Selenium", "JavaScript", "JIRA"]
    }
  ],
  
  projects: [
    {
      name: "p0rtfolio",
      description: "This portfolio site — Astro, TypeScript, GitHub Actions CI, deployed on Vercel. E2E tested with Playwright.",
      repoUrl: "https://github.com/k1rta/p0rtfolio",
      liveUrl: "https://nekmit.vercel.app",
      tools: ["Astro", "TypeScript 5", "GitHub Actions", "Playwright", "Vercel"]
    },
    {
      name: "Cypress E2E Suite",
      description: "End-to-end test suite from Helmes project — UI and API coverage with TypeScript and Grafana monitoring.",
      repoUrl: "https://github.com/k1rta",
      tools: ["Cypress E2E", "TypeScript 5", "Grafana OSS", "Karate", "CI/CD"]
    },
    {
      name: "ML / TalTech",
      description: "Machine learning coursework at TalTech — data analysis and model training in Python. Coming soon.",
      repoUrl: "https://github.com/k1rta",
      tools: ["Python 3", "Jupyter", "TensorFlow", "Colab", "Data Analysis"]
    }
  ],
  
  skills: [
    {
      category: "Test Automation",
      items: ["Cypress E2E", "Playwright TS", "Selenium Grid", "Karate"]
    },
    {
      category: "Languages",
      items: ["TypeScript 5", "JavaScript ES6", "Java 17", "Python 3"]
    },
    {
      category: "CI/CD",
      items: ["GitHub Actions", "Azure DevOps", "CircleCI", "Jenkins CI", "Vercel"]
    },
    {
      category: "Observability",
      items: ["Grafana OSS", "Power BI", "TestRail", "Jira Software"]
    },
    {
      category: "Tools & Platforms",
      items: ["Docker CLI", "Git Flow", "Postman API", "Chrome DevTools", "VS Code"]
    }
  ]
};
