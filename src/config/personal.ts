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
      name: "E2E Test Framework",
      description: "Comprehensive end-to-end testing framework with parallel execution and visual regression testing",
      repoUrl: "https://github.com/k1rta/e2e-framework",
      tools: ["Playwright", "TypeScript", "Docker", "GitHub Actions"]
    },
    {
      name: "API Test Suite",
      description: "RESTful API testing suite with contract testing and performance monitoring",
      repoUrl: "https://github.com/k1rta/api-tests",
      tools: ["Karate", "Java", "Grafana"]
    },
    {
      name: "QA Dashboard",
      description: "Real-time quality metrics dashboard for tracking test coverage and defect trends",
      repoUrl: "https://github.com/k1rta/qa-dashboard",
      tools: ["React", "TypeScript", "Power BI", "Azure"]
    }
  ],
  
  skills: [
    {
      category: "Test Automation",
      items: ["Cypress", "Playwright", "Selenium", "Karate"]
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "Python"]
    },
    {
      category: "CI/CD",
      items: ["GitHub Actions", "Azure DevOps", "CircleCI", "Jenkins", "Vercel"]
    },
    {
      category: "Observability",
      items: ["Grafana", "Power BI", "TestRail", "JIRA"]
    },
    {
      category: "Tools & Platforms",
      items: ["Docker", "Git", "Postman", "Chrome DevTools", "VS Code"]
    }
  ]
};
