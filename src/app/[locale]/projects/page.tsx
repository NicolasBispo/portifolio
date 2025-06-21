"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, ArrowLeft } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import { projects, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTab, setSelectedTab] = useState<string>("all");

  // Filter projects based on selected category and tab
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const tabMatch = selectedTab === "all" || 
                    (selectedTab === "featured" && project.featured) ||
                    (selectedTab === "recent" && !project.featured);
    return categoryMatch && tabMatch;
  });

  const categories = [
    { value: "all", label: t('projectsPage.filters.allCategories') },
    { value: "ui", label: t('projectsPage.filters.uiProjects') },
    { value: "fullstack", label: t('projectsPage.filters.fullstackApps') },
    { value: "mobile", label: t('projectsPage.filters.mobileApps') },
    { value: "api", label: t('projectsPage.filters.apisBackend') }
  ];

  const tabs = [
    { value: "all", label: t('projectsPage.filters.allProjects') },
    { value: "featured", label: t('projectsPage.filters.featured') },
    { value: "recent", label: t('projectsPage.filters.recent') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Navigation Link */}
            <div className="mb-8">
              <Link 
                href="/" 
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('navigation.backToHome')}
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('projectsPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('projectsPage.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder={t('projectsPage.filters.selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full sm:w-auto">
                  <TabsList className="grid w-full grid-cols-3">
                    {tabs.map((tab) => (
                      <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} {filteredProjects.length === 1 ? t('projectsPage.filters.projectFound') : t('projectsPage.filters.projectsFound')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">{t('projectsPage.filters.noProjectsFound')}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTab("all");
                  }}
                >
                  {t('projectsPage.filters.clearFilters')}
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="h-48 bg-muted flex items-center justify-center">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={t(project.titleKey)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full">
                          <Globe className="w-12 h-12 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{t(project.titleKey)}</CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="ml-2">
                            {t('projectsPage.featured')}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">
                        {t(project.descriptionKey)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {t('projects.demo')}
                            </a>
                          </Button>
                        )}
                        {project.codeUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {t('projects.code')}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
} 