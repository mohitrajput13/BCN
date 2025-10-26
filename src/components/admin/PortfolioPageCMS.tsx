'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Edit, Eye } from "lucide-react";

export function PortfolioPageCMS() {
  const [heroContent, setHeroContent] = useState({
    title: 'Our Portfolio',
    subtitle: 'Explore successful projects and see how we\'ve transformed businesses digitally.',
    primaryCta: 'Start Your Project',
    secondaryCta: 'Our Services'
  });

  const [searchSection, setSearchSection] = useState({
    placeholder: 'Search projects...',
    noResultsTitle: 'No projects found',
    noResultsDescription: 'Try adjusting your search or filter criteria.'
  });

  const [statsSection, setStatsSection] = useState({
    title: 'Project Statistics',
    description: 'Our track record speaks for itself. Here are some impressive numbers from our portfolio.'
  });

  // const [relatedProjectsSection] = useState({
  //   title: 'Related Projects'
  // });

  const [processSection, setProcessSection] = useState({
    title: 'Process & Results',
    description1: 'While DevOps remained uncontested, bringing security into the SDLC ushered in DevSecOps. This shift significantly reduces vulnerabilities by embedding security practices into every stage of delivery.',
    description2: 'Our approach prioritizes collaborative planning, automated testing, observability and incremental releases. With clear milestones and ownership, teams deliver reliably without sacrificing speed.'
  });

  const [howItWorksSection, setHowItWorksSection] = useState({
    title: 'How it Works',
    description: 'Front-end development focuses on the visual perception and interactions of your product. We combine thoughtful UX, performant engineering and accessible design to deliver delightful experiences.',
    quote: 'I cannot give you the formula for success, but I can give you the formula for failure. It is: Try to please everybody.',
    quoteAuthor: '— Herbert Bayard Swope'
  });

  const [projectMetaSection, setProjectMetaSection] = useState({
    published: 'April 20, 2024',
    category: 'Design / Ideas',
    client: 'Black Cube Solutions'
  });

  const [caseStudiesSection, setCaseStudiesSection] = useState({
    badge: 'LATEST CASE STUDIES',
    title: 'Introduce Our Projects',
    tabs: ['All', 'Design', 'Development', 'Ideas', 'Technology']
  });

  const [featuredProjectsSection, setFeaturedProjectsSection] = useState({
    title: 'Featured Projects',
    description: 'Take a closer look at some of our most successful and innovative projects.'
  });

  const [ctaSection, setCtaSection] = useState({
    title: 'Ready to Start Your Project?',
    description: 'Let\'s work together to create something amazing. Contact us today to discuss your project requirements.',
    primaryCta: 'Start Your Project',
    secondaryCta: 'View All Services'
  });

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features and modern design',
      category: 'Website',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechCorp',
      link: 'https://example.com',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=60'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking application for iOS and Android',
      category: 'Mobile App',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      client: 'BankCorp',
      link: 'https://example.com',
      featured: false,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=60'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for SaaS companies with real-time data visualization',
      category: 'Web App',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'AWS'],
      client: 'DataCorp',
      link: 'https://example.com',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60'
    }
  ]);

  const [categories, setCategories] = useState(['All', 'Website', 'Mobile App', 'Web App', 'E-commerce']);

  const [stats, setStats] = useState([
    { number: '150+', label: 'Projects Completed', icon: '🎯' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '98%', label: 'Success Rate', icon: '✅' },
    { number: '24/7', label: 'Support Available', icon: '🛠️' }
  ]);

  const [processFeatures, setProcessFeatures] = useState([
    { label: 'Responsive Design', icon: '💡' },
    { label: 'Strong Performance', icon: '⚡' },
    { label: 'Analysis of Security', icon: '🔒' }
  ]);

  const [caseStudyProjects, setCaseStudyProjects] = useState([
    { title: 'Virtual Reality', tag: 'IDEAS', image: 'https://images.unsplash.com/photo-1518365050014-70fe7232897f?auto=format&fit=crop&w=1200&q=60' },
    { title: 'Analysis of Security', tag: 'IDEAS / TECHNOLOGY', image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=60' },
    { title: 'eCommerce Website', tag: 'DESIGN / IDEAS', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60' },
    { title: 'Responsive Design', tag: 'DEVELOPMENT / IDEAS', image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=60' },
    { title: 'Basics Project', tag: 'DESIGN / DEVELOPMENT', image: 'https://images.unsplash.com/photo-1472068996216-3b7b3f7e0c03?auto=format&fit=crop&w=1200&q=60' },
    { title: 'Mobile Coin View App', tag: 'DEVELOPMENT', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=60' }
  ]);

  // const [relatedProjects, setRelatedProjects] = useState([
  //   { title: 'Wearable Companion', tag: 'TECHNOLOGY', image: 'https://images.unsplash.com/photo-1518449007433-60624f49b629?auto=format&fit=crop&w=1200&q=60' },
  //   { title: 'Social Media App', tag: 'DESIGN / TECHNOLOGY', image: 'https://images.unsplash.com/photo-1475738972911-5b44ce984c42?auto=format&fit=crop&w=1200&q=60' },
  //   { title: 'VR Experience', tag: 'IDEAS', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=60' }
  // ]);

  const handleSave = () => {
    console.log('Saving portfolio page content...');
  };

  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description',
      category: 'Website',
      technologies: ['React'],
      client: 'Client Name',
      link: 'https://example.com',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=60'
    };
    setPortfolioItems([...portfolioItems, newItem]);
  };

  const updatePortfolioItem = (id: number, field: string, value: unknown) => {
    setPortfolioItems(portfolioItems.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const deletePortfolioItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  const addTechnology = (itemId: number) => {
    const item = portfolioItems.find(i => i.id === itemId);
    if (item) {
      const updatedTechnologies = [...item.technologies, 'New Tech'];
      updatePortfolioItem(itemId, 'technologies', updatedTechnologies);
    }
  };

  const updateTechnology = (itemId: number, techIndex: number, value: string) => {
    const item = portfolioItems.find(i => i.id === itemId);
    if (item) {
      const updatedTechnologies = [...item.technologies];
      updatedTechnologies[techIndex] = value;
      updatePortfolioItem(itemId, 'technologies', updatedTechnologies);
    }
  };

  const deleteTechnology = (itemId: number, techIndex: number) => {
    const item = portfolioItems.find(i => i.id === itemId);
    if (item) {
      const updatedTechnologies = item.technologies.filter((_, index) => index !== techIndex);
      updatePortfolioItem(itemId, 'technologies', updatedTechnologies);
    }
  };

  const addCategory = () => {
    setCategories([...categories, 'New Category']);
  };

  const updateCategory = (index: number, value: string) => {
    const updated = [...categories];
    updated[index] = value;
    setCategories(updated);
  };

  const deleteCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const updateStat = (index: number, field: string, value: string) => {
    setStats(stats.map((stat, i) => i === index ? { ...stat, [field]: value } : stat));
  };

  // const updateRelatedProject = (index: number, field: string, value: string) => {
  //   setRelatedProjects(relatedProjects.map((project, i) => i === index ? { ...project, [field]: value } : project));
  // };

  const addProcessFeature = () => {
    setProcessFeatures([...processFeatures, { label: 'New Feature', icon: '✨' }]);
  };

  const updateProcessFeature = (index: number, field: string, value: string) => {
    setProcessFeatures(processFeatures.map((feature, i) => i === index ? { ...feature, [field]: value } : feature));
  };

  const deleteProcessFeature = (index: number) => {
    setProcessFeatures(processFeatures.filter((_, i) => i !== index));
  };

  const addCaseStudyProject = () => {
    setCaseStudyProjects([...caseStudyProjects, { title: 'New Project', tag: 'TAG', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=60' }]);
  };

  const updateCaseStudyProject = (index: number, field: string, value: string) => {
    setCaseStudyProjects(caseStudyProjects.map((project, i) => i === index ? { ...project, [field]: value } : project));
  };

  const deleteCaseStudyProject = (index: number) => {
    setCaseStudyProjects(caseStudyProjects.filter((_, i) => i !== index));
  };

  const updateCaseStudyTab = (index: number, value: string) => {
    const updated = [...caseStudiesSection.tabs];
    updated[index] = value;
    setCaseStudiesSection({...caseStudiesSection, tabs: updated});
  };

  const addCaseStudyTab = () => {
    setCaseStudiesSection({...caseStudiesSection, tabs: [...caseStudiesSection.tabs, 'New Tab']});
  };

  const deleteCaseStudyTab = (index: number) => {
    setCaseStudiesSection({...caseStudiesSection, tabs: caseStudiesSection.tabs.filter((_, i) => i !== index)});
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Portfolio Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        {/* Hero Section */}
        <TabsContent value="hero" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={heroContent.title}
                  onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subtitle</label>
                <Textarea
                  value={heroContent.subtitle}
                  onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                  placeholder="Enter subtitle"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary CTA</label>
                  <Input
                    value={heroContent.primaryCta}
                    onChange={(e) => setHeroContent({...heroContent, primaryCta: e.target.value})}
                    placeholder="Primary CTA text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary CTA</label>
                  <Input
                    value={heroContent.secondaryCta}
                    onChange={(e) => setHeroContent({...heroContent, secondaryCta: e.target.value})}
                    placeholder="Secondary CTA text"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Search Section */}
        <TabsContent value="search" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search Placeholder</label>
                <Input
                  value={searchSection.placeholder}
                  onChange={(e) => setSearchSection({...searchSection, placeholder: e.target.value})}
                  placeholder="Search placeholder text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">No Results Title</label>
                <Input
                  value={searchSection.noResultsTitle}
                  onChange={(e) => setSearchSection({...searchSection, noResultsTitle: e.target.value})}
                  placeholder="No results title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">No Results Description</label>
                <Textarea
                  value={searchSection.noResultsDescription}
                  onChange={(e) => setSearchSection({...searchSection, noResultsDescription: e.target.value})}
                  placeholder="No results description"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Portfolio Projects */}
        <TabsContent value="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Portfolio Projects</h3>
            <Button onClick={addPortfolioItem} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
          
          <div className="space-y-6">
            {portfolioItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge>
                          {item.featured ? "Featured" : "Project"}
                        </Badge>
                        <Badge>{item.category}</Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deletePortfolioItem(item.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={item.title}
                        onChange={(e) => updatePortfolioItem(item.id, 'title', e.target.value)}
                        placeholder="Project title"
                      />
                      <Input
                        value={item.category}
                        onChange={(e) => updatePortfolioItem(item.id, 'category', e.target.value)}
                        placeholder="Category"
                      />
                    </div>
                    
                    <Textarea
                      value={item.description}
                      onChange={(e) => updatePortfolioItem(item.id, 'description', e.target.value)}
                      placeholder="Project description"
                      rows={2}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={item.client}
                        onChange={(e) => updatePortfolioItem(item.id, 'client', e.target.value)}
                        placeholder="Client name"
                      />
                      <Input
                        value={item.link}
                        onChange={(e) => updatePortfolioItem(item.id, 'link', e.target.value)}
                        placeholder="Project URL"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">Technologies</label>
                        <Button size="sm" variant="outline" onClick={() => addTechnology(item.id)}>
                          <Plus className="w-3 h-3 mr-1" />
                          Add Tech
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center space-x-1">
                            <Input
                              value={tech}
                              onChange={(e) => updateTechnology(item.id, techIndex, e.target.value)}
                              placeholder="Technology"
                              className="w-24"
                            />
                            <Button size="sm" variant="outline" onClick={() => deleteTechnology(item.id, techIndex)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={item.featured}
                        onChange={(e) => updatePortfolioItem(item.id, 'featured', e.target.checked)}
                        className="rounded"
                      />
                      <label className="text-sm">Featured Project</label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Categories */}
        <TabsContent value="categories" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Project Categories</h3>
            <Button onClick={addCategory} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </div>
          
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={category}
                  onChange={(e) => updateCategory(index, e.target.value)}
                  placeholder="Category name"
                />
                <Button size="sm" variant="outline" onClick={() => deleteCategory(index)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Statistics */}
        <TabsContent value="stats" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistics Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={statsSection.title}
                  onChange={(e) => setStatsSection({...statsSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={statsSection.description}
                  onChange={(e) => setStatsSection({...statsSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
          
          <h3 className="text-lg font-semibold">Statistics Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={stat.icon}
                      onChange={(e) => updateStat(index, 'icon', e.target.value)}
                      placeholder="Icon emoji"
                    />
                    <Input
                      value={stat.number}
                      onChange={(e) => updateStat(index, 'number', e.target.value)}
                      placeholder="Number"
                    />
                    <Input
                      value={stat.label}
                      onChange={(e) => updateStat(index, 'label', e.target.value)}
                      placeholder="Label"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Process & Results */}
        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Process & Results Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={processSection.title}
                  onChange={(e) => setProcessSection({...processSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description 1</label>
                <Textarea
                  value={processSection.description1}
                  onChange={(e) => setProcessSection({...processSection, description1: e.target.value})}
                  placeholder="First description paragraph"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description 2</label>
                <Textarea
                  value={processSection.description2}
                  onChange={(e) => setProcessSection({...processSection, description2: e.target.value})}
                  placeholder="Second description paragraph"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Process Features</h3>
            <Button onClick={addProcessFeature} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Feature
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {processFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={feature.icon}
                      onChange={(e) => updateProcessFeature(index, 'icon', e.target.value)}
                      placeholder="Icon emoji"
                    />
                    <Input
                      value={feature.label}
                      onChange={(e) => updateProcessFeature(index, 'label', e.target.value)}
                      placeholder="Feature label"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteProcessFeature(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Case Studies */}
        <TabsContent value="case-studies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Case Studies Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Badge Text</label>
                <Input
                  value={caseStudiesSection.badge}
                  onChange={(e) => setCaseStudiesSection({...caseStudiesSection, badge: e.target.value})}
                  placeholder="Badge text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={caseStudiesSection.title}
                  onChange={(e) => setCaseStudiesSection({...caseStudiesSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filter Tabs</h3>
            <Button onClick={addCaseStudyTab} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Tab
            </Button>
          </div>
          
          <div className="space-y-2">
            {caseStudiesSection.tabs.map((tab, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={tab}
                  onChange={(e) => updateCaseStudyTab(index, e.target.value)}
                  placeholder="Tab name"
                />
                <Button size="sm" variant="outline" onClick={() => deleteCaseStudyTab(index)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Case Study Projects</h3>
            <Button onClick={addCaseStudyProject} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudyProjects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={project.title}
                      onChange={(e) => updateCaseStudyProject(index, 'title', e.target.value)}
                      placeholder="Project title"
                    />
                    <Input
                      value={project.tag}
                      onChange={(e) => updateCaseStudyProject(index, 'tag', e.target.value)}
                      placeholder="Project tag"
                    />
                    <Input
                      value={project.image}
                      onChange={(e) => updateCaseStudyProject(index, 'image', e.target.value)}
                      placeholder="Image URL"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteCaseStudyProject(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Featured Projects */}
        <TabsContent value="featured" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={featuredProjectsSection.title}
                  onChange={(e) => setFeaturedProjectsSection({...featuredProjectsSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={featuredProjectsSection.description}
                  onChange={(e) => setFeaturedProjectsSection({...featuredProjectsSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={howItWorksSection.title}
                  onChange={(e) => setHowItWorksSection({...howItWorksSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={howItWorksSection.description}
                  onChange={(e) => setHowItWorksSection({...howItWorksSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quote</label>
                <Textarea
                  value={howItWorksSection.quote}
                  onChange={(e) => setHowItWorksSection({...howItWorksSection, quote: e.target.value})}
                  placeholder="Quote text"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quote Author</label>
                <Input
                  value={howItWorksSection.quoteAuthor}
                  onChange={(e) => setHowItWorksSection({...howItWorksSection, quoteAuthor: e.target.value})}
                  placeholder="Quote author"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Meta Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Published Date</label>
                <Input
                  value={projectMetaSection.published}
                  onChange={(e) => setProjectMetaSection({...projectMetaSection, published: e.target.value})}
                  placeholder="Published date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Input
                  value={projectMetaSection.category}
                  onChange={(e) => setProjectMetaSection({...projectMetaSection, category: e.target.value})}
                  placeholder="Category"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Client</label>
                <Input
                  value={projectMetaSection.client}
                  onChange={(e) => setProjectMetaSection({...projectMetaSection, client: e.target.value})}
                  placeholder="Client name"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CTA Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={ctaSection.title}
                  onChange={(e) => setCtaSection({...ctaSection, title: e.target.value})}
                  placeholder="CTA title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={ctaSection.description}
                  onChange={(e) => setCtaSection({...ctaSection, description: e.target.value})}
                  placeholder="CTA description"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary CTA</label>
                  <Input
                    value={ctaSection.primaryCta}
                    onChange={(e) => setCtaSection({...ctaSection, primaryCta: e.target.value})}
                    placeholder="Primary CTA text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary CTA</label>
                  <Input
                    value={ctaSection.secondaryCta}
                    onChange={(e) => setCtaSection({...ctaSection, secondaryCta: e.target.value})}
                    placeholder="Secondary CTA text"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preview Section */}
        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-primary-black/50 rounded-lg p-6 border border-primary-slate/30">
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold text-white">
                    {heroContent.title}
                  </h1>
                  <p className="text-primary-gray text-lg max-w-2xl mx-auto">
                    {heroContent.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>
                      {heroContent.primaryCta}
                    </Button>
                    <Button variant="outline">
                      {heroContent.secondaryCta}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
