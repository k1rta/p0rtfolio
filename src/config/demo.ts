import type { SiteConfig } from './types';

export const config: SiteConfig = {
  personal: {
    name: "Jane Engineer",
    title: "QA Engineer & Test Automation Specialist",
    email: "hello@example.com",
    linkedin: "https://www.linkedin.com/in/example/",
    github: "https://github.com/example",
  },
  
  experiences: [
    {
      company: "Tech Corp",
      role: "Senior QA Engineer",
      period: "2023 - Present",
      achievement: "Leading test automation strategy and mentoring junior QA engineers",
      tools: ["Cypress", "TypeScript", "GitHub Actions", "Azure DevOps"]
    },
    {
      company: "Digital Solutions",
      role: "QA Engineer",
      period: "2021 - 2023",
      achievement: "Built comprehensive E2E testing framework from scratch",
      tools: ["Playwright", "TypeScript", "CircleCI", "Grafana"]
    },
    {
      company: "Software Inc",
      role: "QA Engineer",
      period: "2019 - 2021",
      achievement: "Implemented automated testing for microservices architecture",
      tools: ["Selenium", "Java", "Jenkins", "TestRail"]
    },
    {
      company: "StartUp Co",
      role: "Junior QA Engineer",
      period: "2017 - 2019",
      achievement: "Developed automated test suites for web and mobile applications",
      tools: ["Cypress", "JavaScript", "Karate", "Jenkins"]
    }
  ],
  
  projects: [
    {
      name: "Test Automation Framework",
      description: "Scalable test automation framework with parallel execution and reporting",
      repoUrl: "https://github.com/example/test-framework",
      liveUrl: "https://example.com/demo",
      tools: ["Playwright", "TypeScript", "Docker", "GitHub Actions"]
    },
    {
      name: "API Testing Suite",
      description: "Comprehensive API testing solution with contract and performance testing",
      repoUrl: "https://github.com/example/api-tests",
      tools: ["Karate", "Java", "Grafana"]
    },
    {
      name: "Quality Dashboard",
      description: "Real-time quality metrics and test reporting dashboard",
      repoUrl: "https://github.com/example/qa-dashboard",
      liveUrl: "https://dashboard.example.com",
      tools: ["React", "TypeScript", "Chart.js", "Vercel"]
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
