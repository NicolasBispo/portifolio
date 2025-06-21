export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: 'ui' | 'fullstack' | 'mobile' | 'api';
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo-ecommerce.com",
    codeUrl: "https://github.com/nicolasbispo/ecommerce",
    featured: true
  },
  {
    id: "2",
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    demoUrl: "https://task-app-demo.com",
    codeUrl: "https://github.com/nicolasbispo/task-app",
    featured: true
  },
  {
    id: "3",
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    category: "api",
    technologies: ["FastAPI", "Python", "MongoDB", "JWT", "Docker"],
    demoUrl: "https://api-docs.com",
    codeUrl: "https://github.com/nicolasbispo/fastapi-api",
    featured: true
  },
  {
    id: "4",
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
    category: "ui",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio-demo.com",
    codeUrl: "https://github.com/nicolasbispo/portfolio",
    featured: false
  },
  {
    id: "5",
    titleKey: "projects.project5.title",
    descriptionKey: "projects.project5.description",
    category: "ui",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Grid"],
    demoUrl: "https://weather-dashboard.com",
    codeUrl: "https://github.com/nicolasbispo/weather-app",
    featured: false
  },
  {
    id: "6",
    titleKey: "projects.project6.title",
    descriptionKey: "projects.project6.description",
    category: "fullstack",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    demoUrl: "https://social-app-demo.com",
    codeUrl: "https://github.com/nicolasbispo/social-app",
    featured: false
  },
  {
    id: "7",
    titleKey: "projects.project7.title",
    descriptionKey: "projects.project7.description",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Native Base"],
    demoUrl: "https://fitness-app-demo.com",
    codeUrl: "https://github.com/nicolasbispo/fitness-app",
    featured: false
  },
  {
    id: "8",
    titleKey: "projects.project8.title",
    descriptionKey: "projects.project8.description",
    category: "ui",
    technologies: ["Vue.js", "Vuetify", "Chart.js", "Vuex", "Axios"],
    demoUrl: "https://admin-dashboard.com",
    codeUrl: "https://github.com/nicolasbispo/admin-dashboard",
    featured: false
  },
  {
    id: "9",
    titleKey: "projects.project9.title",
    descriptionKey: "projects.project9.description",
    category: "api",
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "MongoDB"],
    demoUrl: "https://microservices-demo.com",
    codeUrl: "https://github.com/nicolasbispo/microservices",
    featured: false
  },
  {
    id: "10",
    titleKey: "projects.project10.title",
    descriptionKey: "projects.project10.description",
    category: "fullstack",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    demoUrl: "https://chat-app-demo.com",
    codeUrl: "https://github.com/nicolasbispo/chat-app",
    featured: false
  },
  {
    id: "11",
    titleKey: "projects.project11.title",
    descriptionKey: "projects.project11.description",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "Stripe"],
    demoUrl: "https://elearning-demo.com",
    codeUrl: "https://github.com/nicolasbispo/elearning",
    featured: false
  },
  {
    id: "12",
    titleKey: "projects.project12.title",
    descriptionKey: "projects.project12.description",
    category: "ui",
    technologies: ["React", "TypeScript", "Storybook", "Styled Components", "Figma"],
    demoUrl: "https://design-system.com",
    codeUrl: "https://github.com/nicolasbispo/design-system",
    featured: false
  }
]; 