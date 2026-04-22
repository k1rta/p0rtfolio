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
      role: "QA Engineer",
      period: "2024 - Present",
      achievement: "Leading test automation initiatives and quality assurance processes for enterprise clients",
      tools: ["Cypress", "TypeScript", "GitHub Actions", "Azure DevOps"]
    },
    {
      company: "Klaus",
      role: "QA Engineer",
      period: "2023 - 2024",
      achievement: "Implemented comprehensive E2E testing framework, reducing production bugs by 40%",
      tools: ["Playwright", "TypeScript", "CircleCI", "Grafana"]
    },
    {
      company: "Cybernetica",
      role: "QA Engineer",
      period: "2022 - 2023",
      achievement: "Developed automated testing solutions for critical government systems",
      tools: ["Selenium", "Java", "Jenkins", "TestRail"]
    },
    {
      company: "Nekmit / Kindred Group",
      role: "QA Engineer",
      period: "2018 - 2022",
      achievement: "Built and maintained test automation framework for high-traffic gaming platform",
      tools: ["Cypress", "JavaScript", "Karate", "Jenkins", "Power BI"]
    },
    {
      company: "iGame",
      role: "QA Tester",
      period: "2016 - 2017",
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
      items: ["Cypress", "Playwright", "Selenium", "Karate", "WebdriverIO"]
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
