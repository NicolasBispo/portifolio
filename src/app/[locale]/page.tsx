"use client";
import {
  ArrowDown,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Download,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  console.log("hero subtitle", t("hero.subtitle"));
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t("hero.cta.contact")}
              </a>
              <a
                href="#projects"
                className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                {t("hero.cta.projects")}
              </a>
            </div>
          </div>
          <div className="mt-20 animate-bounce">
            <a href="#about">
              <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("about.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("about.description1")}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("about.description2")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="/resume.pdf"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {t("about.downloadCV")}
                  </a>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {t("about.personalInfo.title")}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("about.personalInfo.name")}:
                    </span>
                    <span className="font-medium">{t("personal.name")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("about.personalInfo.age")}:
                    </span>
                    <span className="font-medium">{t("personal.age")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("about.personalInfo.experience")}:
                    </span>
                    <span className="font-medium">
                      {t("personal.experience")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("about.personalInfo.specialty")}:
                    </span>
                    <span className="font-medium">
                      {t("personal.specialty")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("skills.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {t("skills.frontend")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>React Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {t("skills.backend")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Ruby on Rails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Django</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>FastAPI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>NestJS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Express.js</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {t("skills.database")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Prisma ORM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("projects.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">
                    {t("projects.imagePlaceholder")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("projects.project1.title")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t("projects.project1.description")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      Next.js
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      TypeScript
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      Prisma
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.demo")}
                    </a>
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">
                    {t("projects.imagePlaceholder")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("projects.project2.title")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t("projects.project2.description")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      Rails
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      React
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.demo")}
                    </a>
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">
                    {t("projects.imagePlaceholder")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("projects.project3.title")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t("projects.project3.description")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      FastAPI
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      Python
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.demo")}
                    </a>
                    <a href="#" className="text-primary hover:underline">
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:nicolas@example.com"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t("contact.sendEmail")}
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nicolasbispo"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nicolasbispo"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/nicolasbispo"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
