'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Save, Eye, ArrowRight, Cloud, Code, Palette, MessageSquare, RefreshCw, Search, Mic, Target, Layers, User, Calendar, Send } from "lucide-react";

export function HomePageCMS() {
  // Hero Slides Management
  const [heroSlides, setHeroSlides] = useState([
    {
      id: 1,
    titleLine1: 'SOFTWARE IT',
    titleLine2: 'OUTSOURCING',
    subtitle: 'We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.',
      ctaPrimary: 'Learn More',
      ctaSecondary: 'All Services',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 2,
      titleLine1: 'We Deliver Solution',
      titleLine2: 'with Trusting Relationships',
      subtitle: 'Our experienced team stands out with clear and effective processes, on-time delivery and a strong partnership mindset.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'View Projects',
      image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 3,
      titleLine1: 'DEVELOPMENT',
      titleLine2: 'EXPERTS',
      subtitle: 'From web to mobile and cloud – we build scalable, modern solutions tailored to your business goals.',
      ctaPrimary: 'Get a Quote',
      ctaSecondary: 'Our Company',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'
    }
  ]);

  // Statistics Section
  const [stats, setStats] = useState([
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Support Available', value: '24/7' }
  ]);

  // Key Features Section
  const [keyFeatures, setKeyFeatures] = useState([
    {
      id: 1,
      icon: 'MessageSquare',
      title: 'Intelligent Writing Assistance',
      description: 'Our AI writing tool analyzes your content, suggests improvements, and helps you create compelling copy that resonates with your audience.'
    },
    {
      id: 2,
      icon: 'RefreshCw',
      title: 'Grammar and Spell Check',
      description: 'Say goodbye to embarrassing typos and grammar mistakes with our advanced proofreading technology.'
    },
    {
      id: 3,
      icon: 'Search',
      title: 'Plagiarism Detection',
      description: 'Originality is key, and our AI writing tool helps you maintain it with comprehensive plagiarism detection.'
    },
    {
      id: 4,
      icon: 'Mic',
      title: 'Voice to Text Conversion',
      description: 'Transform your spoken words into written content with our accurate voice recognition technology.'
    },
    {
      id: 5,
      icon: 'Target',
      title: 'Style and Tone Adaptation',
      description: 'Adapt your writing style and tone to match your brand voice and target audience preferences.'
    },
    {
      id: 6,
      icon: 'Layers',
      title: 'Content Generation',
      description: 'Generate high-quality content from simple prompts and ideas, saving you time and effort.'
    }
  ]);

  // Services Section
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Software Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      icon: 'Code'
    },
    {
      id: 2,
      title: 'Web Design',
      description: 'Beautiful, responsive designs that engage users and drive conversions.',
      icon: 'Palette'
    },
    {
      id: 3,
      title: 'Cloud Integration',
      description: 'Seamless cloud migration and integration services for scalable solutions.',
      icon: 'Cloud'
    }
  ]);

  // Testimonials Section
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Machel Pildium',
      handle: '@machel',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Abram Lipshutz',
      handle: '@abram',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Cristofer',
      handle: '@cristofer',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
    }
  ]);

  // Blogs/News Section
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Revolution in Content Creation and Communication',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      author: 'Alex Demo',
      date: '25 Mar, 2025'
    },
    {
      id: 2,
      title: 'How AI Writing Tools Empower Writers to Speed up their Writing',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Engineering',
      author: 'Hendary Jonson',
      date: '12 Feb, 2025'
    },
    {
      id: 3,
      title: 'Revolution in Content Creation and Communication',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      author: 'Piter Mecraow',
      date: '10 Jan, 2025'
    }
  ]);

  // CTA Sections
  const [ctaSections, setCtaSections] = useState([
    {
      id: 1,
      title: 'Let\'s Build Your Website!',
      buttonText: 'CONTACT US',
      backgroundImage: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=70'
    },
    {
      id: 2,
      title: 'Ready to Transform Your Business?',
      subtitle: 'Join hundreds of companies that trust us with their digital transformation. Let\'s build something amazing together.',
      primaryButton: 'Get Started Now',
      secondaryButton: 'Contact Us'
    }
  ]);

  // Contact Form Section
  const [contactForm, setContactForm] = useState({
    title: 'Contact With Us',
    subtitle: 'Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.',
    buttonText: 'Send Message'
  });

  // Section Headers and Badges
  const [sectionHeaders, setSectionHeaders] = useState({
    keyFeaturesBadge: 'Some of Main Features',
    keyFeaturesTitle: 'Key Features of Our Tool',
    keyFeaturesDescription: 'Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.',
    servicesTitle: 'Our Services',
    servicesDescription: 'Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.',
    testimonialsBadge: 'Wall of love',
    testimonialsTitle: 'What Our User Says',
    testimonialsDescription: 'Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.',
    blogsBadge: 'Read Our Latest Blogs',
    blogsTitle: 'Latest Portfolio & News',
    blogsDescription: 'Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.',
    whyChooseUsBadge: 'WHY CHOOSE US',
    whyChooseUsTitle: 'Design the Concept of Your Business Idea Now',
    projectsBadge: 'LATEST CASE STUDIES',
    projectsTitle: 'Introduce Our Projects',
    technologyBadge: 'TECHNOLOGY INDEX',
    technologyTitle: 'We Deliver Solution with the Goal of Trusting Relationships',
    contactBadge: 'Need Any Help?',
    newsTitle: 'News & Update',
    newsDescription: 'Keep up to date with everything about our tool.',
    finalCtaTitle: 'Ready to Transform Your Business?',
    finalCtaDescription: 'Join hundreds of companies that trust us with their digital transformation. Let\'s build something amazing together.',
    finalCtaPrimaryButton: 'Get Started Now',
    finalCtaSecondaryButton: 'Contact Us'
  });

  // Why Choose Us Section
  const [whyChooseUs, setWhyChooseUs] = useState([
    {
      id: 1,
      title: 'Product Design',
      description: 'Prototype, test and validate your ideas with our expert product team.'
    },
    {
      id: 2,
      title: 'Development',
      description: 'Reliable web and mobile development using modern stacks and practices.'
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Turn data into decisions with dashboards and predictive analytics.'
    },
    {
      id: 4,
      title: 'Cyber Security',
      description: 'Protect apps and infra with audits, hardening and monitoring.'
    }
  ]);

  // Projects/Case Studies Section
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Media App',
      tag: 'TECHNOLOGY',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'
    },
    {
      id: 2,
      title: 'App for Virtual Reality',
      tag: 'DESIGN / IDEAS',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60'
    },
    {
      id: 3,
      title: 'Analysis of Security',
      tag: 'IDEAS / TECHNOLOGY',
      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=60'
    },
    {
      id: 4,
      title: 'eCommerce Website',
      tag: 'DESIGN / IDEAS',
      image: 'https://images.unsplash.com/photo-1515165562835-c3b8c2e9f6f1?auto=format&fit=crop&w=1200&q=60'
    }
  ]);

  // Technology Index
  const [technologies, setTechnologies] = useState(['WEB', 'ANDROID', 'IOS', 'IOT', 'WEARABLES', 'TV']);

  // Stats Cards Section
  const [statsCards, setStatsCards] = useState([
    {
      id: 1,
      number: '15+',
      label: 'Countries Worldwide',
      image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=60'
    },
    {
      id: 2,
      number: '23k',
      label: 'Happy Customers',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=60'
    }
  ]);

  const handleSave = () => {
    console.log('Saving home page content...');
    // Here you would typically save to your backend
  };

  // Hero Slides Handlers
  const addHeroSlide = () => {
    const newSlide = {
      id: Date.now(),
      titleLine1: 'New Title Line 1',
      titleLine2: 'New Title Line 2',
      subtitle: 'New subtitle text',
      ctaPrimary: 'Primary CTA',
      ctaSecondary: 'Secondary CTA',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'
    };
    setHeroSlides([...heroSlides, newSlide]);
  };

  const updateHeroSlide = (id: number, field: string, value: string) => {
    setHeroSlides(heroSlides.map(slide => slide.id === id ? { ...slide, [field]: value } : slide));
  };

  const deleteHeroSlide = (id: number) => {
    setHeroSlides(heroSlides.filter(slide => slide.id !== id));
  };

  // Key Features Handlers
  const addKeyFeature = () => {
    const newFeature = {
      id: Date.now(),
      icon: 'MessageSquare',
      title: 'New Feature',
      description: 'Feature description'
    };
    setKeyFeatures([...keyFeatures, newFeature]);
  };

  const updateKeyFeature = (id: number, field: string, value: string) => {
    setKeyFeatures(keyFeatures.map(f => f.id === id ? { ...f, [field]: value } : f));
  };

  const deleteKeyFeature = (id: number) => {
    setKeyFeatures(keyFeatures.filter(f => f.id !== id));
  };

  // Services Handlers
  const addService = () => {
    const newService = {
      id: Date.now(),
      title: 'New Service',
      description: 'Service description',
      icon: 'Code'
    };
    setServices([...services, newService]);
  };

  const updateService = (id: number, field: string, value: string) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const deleteService = (id: number) => {
    setServices(services.filter(s => s.id !== id));
  };

  // Testimonials Handlers
  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: 'New Client',
      handle: '@newclient',
      content: 'Testimonial text',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    };
    setTestimonials([...testimonials, newTestimonial]);
  };

  const updateTestimonial = (id: number, field: string, value: string) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  // Blogs Handlers
  const addBlog = () => {
    const newBlog = {
      id: Date.now(),
      title: 'New Blog Post',
      excerpt: 'Blog excerpt',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'General',
      author: 'Author Name',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (id: number, field: string, value: string) => {
    setBlogs(blogs.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  // Stats Handlers
  const updateStat = (index: number, field: string, value: string) => {
    setStats(stats.map((stat, i) => i === index ? { ...stat, [field]: value } : stat));
  };

  // CTA Sections Handlers
  const updateCtaSection = (id: number, field: string, value: string) => {
    setCtaSections(ctaSections.map(cta => cta.id === id ? { ...cta, [field]: value } : cta));
  };

  // Contact Form Handlers
  const updateContactForm = (field: string, value: string) => {
    setContactForm({ ...contactForm, [field]: value });
  };

  // Section Headers Handlers
  const updateSectionHeader = (field: string, value: string) => {
    setSectionHeaders({ ...sectionHeaders, [field]: value });
  };

  // Why Choose Us Handlers
  const addWhyChooseUsItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'New Item',
      description: 'Item description'
    };
    setWhyChooseUs([...whyChooseUs, newItem]);
  };

  const updateWhyChooseUsItem = (id: number, field: string, value: string) => {
    setWhyChooseUs(whyChooseUs.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const deleteWhyChooseUsItem = (id: number) => {
    setWhyChooseUs(whyChooseUs.filter(item => item.id !== id));
  };

  // Projects Handlers
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      tag: 'TAG',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: number, field: string, value: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Technology Handlers
  const addTechnology = () => {
    setTechnologies([...technologies, 'NEW TECH']);
  };

  const updateTechnology = (index: number, value: string) => {
    const newTechs = [...technologies];
    newTechs[index] = value;
    setTechnologies(newTechs);
  };

  const deleteTechnology = (index: number) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  // Stats Cards Handlers
  const addStatsCard = () => {
    const newCard = {
      id: Date.now(),
      number: '0+',
      label: 'New Stat',
      image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=60'
    };
    setStatsCards([...statsCards, newCard]);
  };

  const updateStatsCard = (id: number, field: string, value: string) => {
    setStatsCards(statsCards.map(card => card.id === id ? { ...card, [field]: value } : card));
  };

  const deleteStatsCard = (id: number) => {
    setStatsCards(statsCards.filter(card => card.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Home Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero-slides" className="w-full">
        <div className="max-w-5xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mb-6">
          <TabsList className="inline-flex min-w-max space-x-1  p-1">
            <TabsTrigger value="hero-slides" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Hero Slides</TabsTrigger>
            <TabsTrigger value="section-headers" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Section Headers</TabsTrigger>
            <TabsTrigger value="stats" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Statistics</TabsTrigger>
            <TabsTrigger value="key-features" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Key Features</TabsTrigger>
            <TabsTrigger value="services" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Services</TabsTrigger>
            <TabsTrigger value="testimonials" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Testimonials</TabsTrigger>
            <TabsTrigger value="blogs" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Blogs/News</TabsTrigger>
            <TabsTrigger value="why-choose-us" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Why Choose Us</TabsTrigger>
            <TabsTrigger value="projects" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Projects</TabsTrigger>
            <TabsTrigger value="technology" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Technology</TabsTrigger>
            <TabsTrigger value="stats-cards" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Stats Cards</TabsTrigger>
            <TabsTrigger value="cta" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">CTA Sections</TabsTrigger>
            <TabsTrigger value="contact" className="whitespace-nowrap flex-shrink-0 px-3 py-2 text-xs rounded-md">Contact Form</TabsTrigger>
          </TabsList>
        </div>

        {/* Hero Slides Section */}
        <TabsContent value="hero-slides" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Hero Slides Management</h3>
            <Button onClick={addHeroSlide} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Slide
            </Button>
          </div>
          
          <div className="space-y-4">
            {heroSlides.map((slide) => (
              <Card key={slide.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>Slide #{slide.id}</Badge>
                    <Button size="sm" variant="outline" onClick={() => deleteHeroSlide(slide.id)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title Line 1</label>
                  <Input
                        value={slide.titleLine1}
                        onChange={(e) => updateHeroSlide(slide.id, 'titleLine1', e.target.value)}
                    placeholder="Enter title line 1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Title Line 2</label>
                  <Input
                        value={slide.titleLine2}
                        onChange={(e) => updateHeroSlide(slide.id, 'titleLine2', e.target.value)}
                    placeholder="Enter title line 2"
                  />
                </div>
              </div>
                  <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Subtitle</label>
                <Textarea
                      value={slide.subtitle}
                      onChange={(e) => updateHeroSlide(slide.id, 'subtitle', e.target.value)}
                  placeholder="Enter subtitle"
                  rows={3}
                />
              </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                      <label className="block text-sm font-medium mb-2">Primary CTA</label>
                  <Input
                        value={slide.ctaPrimary}
                        onChange={(e) => updateHeroSlide(slide.id, 'ctaPrimary', e.target.value)}
                    placeholder="Enter primary CTA text"
                  />
                </div>
                <div>
                      <label className="block text-sm font-medium mb-2">Secondary CTA</label>
                  <Input
                        value={slide.ctaSecondary}
                        onChange={(e) => updateHeroSlide(slide.id, 'ctaSecondary', e.target.value)}
                    placeholder="Enter secondary CTA text"
                  />
                </div>
              </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Background Image URL</label>
                    <Input
                      value={slide.image}
                      onChange={(e) => updateHeroSlide(slide.id, 'image', e.target.value)}
                      placeholder="Enter image URL"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Statistics Section */}
        <TabsContent value="stats" className="space-y-6">
          <h3 className="text-lg font-semibold">Statistics Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={stat.label}
                      onChange={(e) => updateStat(index, 'label', e.target.value)}
                      placeholder="Stat label"
                    />
                    <Input
                      value={stat.value}
                      onChange={(e) => updateStat(index, 'value', e.target.value)}
                      placeholder="Stat value"
                    />
                  </div>
            </CardContent>
          </Card>
            ))}
          </div>
        </TabsContent>

        {/* Key Features Section */}
        <TabsContent value="key-features" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Key Features Management</h3>
            <Button onClick={addKeyFeature} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Feature
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyFeatures.map((feature) => (
              <Card key={feature.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{feature.icon}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteKeyFeature(feature.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                    </div>
                    <Input
                      value={feature.title}
                      onChange={(e) => updateKeyFeature(feature.id, 'title', e.target.value)}
                      placeholder="Feature title"
                    />
                    <Textarea
                      value={feature.description}
                      onChange={(e) => updateKeyFeature(feature.id, 'description', e.target.value)}
                      placeholder="Feature description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Services Section */}
        <TabsContent value="services" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Services Management</h3>
            <Button onClick={addService} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{service.icon}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteService(service.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={service.title}
                      onChange={(e) => updateService(service.id, 'title', e.target.value)}
                      placeholder="Service title"
                    />
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(service.id, 'description', e.target.value)}
                      placeholder="Service description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Testimonials Section */}
        <TabsContent value="testimonials" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Testimonials Management</h3>
            <Button onClick={addTestimonial} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </div>
          
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>Testimonial #{testimonial.id}</Badge>
                    <Button size="sm" variant="outline" onClick={() => deleteTestimonial(testimonial.id)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      value={testimonial.name}
                      onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                      placeholder="Client name"
                    />
                    <Input
                      value={testimonial.handle}
                      onChange={(e) => updateTestimonial(testimonial.id, 'handle', e.target.value)}
                      placeholder="Handle (e.g., @username)"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Avatar URL</label>
                    <Input
                      value={testimonial.avatar}
                      onChange={(e) => updateTestimonial(testimonial.id, 'avatar', e.target.value)}
                      placeholder="Avatar image URL"
                    />
                  </div>
                  <Textarea
                    value={testimonial.content}
                    onChange={(e) => updateTestimonial(testimonial.id, 'content', e.target.value)}
                    placeholder="Testimonial content"
                    rows={3}
                    className="mt-4"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Blogs/News Section */}
        <TabsContent value="blogs" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Blogs/News Management</h3>
            <Button onClick={addBlog} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Blog Post
            </Button>
          </div>
          
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Card key={blog.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>Blog #{blog.id}</Badge>
                    <Button size="sm" variant="outline" onClick={() => deleteBlog(blog.id)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      value={blog.title}
                      onChange={(e) => updateBlog(blog.id, 'title', e.target.value)}
                      placeholder="Blog title"
                    />
                    <Input
                      value={blog.category}
                      onChange={(e) => updateBlog(blog.id, 'category', e.target.value)}
                      placeholder="Category"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                      value={blog.author}
                      onChange={(e) => updateBlog(blog.id, 'author', e.target.value)}
                      placeholder="Author name"
                    />
                      <Input
                      value={blog.date}
                      onChange={(e) => updateBlog(blog.id, 'date', e.target.value)}
                      placeholder="Date"
                      />
                    </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Featured Image URL</label>
                    <Input
                      value={blog.image}
                      onChange={(e) => updateBlog(blog.id, 'image', e.target.value)}
                      placeholder="Image URL"
                    />
                  </div>
                  <Textarea
                    value={blog.excerpt}
                    onChange={(e) => updateBlog(blog.id, 'excerpt', e.target.value)}
                    placeholder="Blog excerpt"
                    rows={3}
                    className="mt-4"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* CTA Sections */}
        <TabsContent value="cta" className="space-y-6">
          <h3 className="text-lg font-semibold">Call-to-Action Sections Management</h3>
          
          <div className="space-y-4">
            {ctaSections.map((cta) => (
              <Card key={cta.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>CTA Section #{cta.id}</Badge>
                  </div>
                  <div className="space-y-4">
                    <Input
                      value={cta.title}
                      onChange={(e) => updateCtaSection(cta.id, 'title', e.target.value)}
                      placeholder="CTA title"
                    />
                    {cta.subtitle && (
                      <Textarea
                        value={cta.subtitle}
                        onChange={(e) => updateCtaSection(cta.id, 'subtitle', e.target.value)}
                        placeholder="CTA subtitle"
                        rows={2}
                      />
                    )}
                    {cta.buttonText && (
                      <Input
                        value={cta.buttonText}
                        onChange={(e) => updateCtaSection(cta.id, 'buttonText', e.target.value)}
                        placeholder="Button text"
                      />
                    )}
                    {cta.primaryButton && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          value={cta.primaryButton}
                          onChange={(e) => updateCtaSection(cta.id, 'primaryButton', e.target.value)}
                          placeholder="Primary button text"
                        />
                        <Input
                          value={cta.secondaryButton}
                          onChange={(e) => updateCtaSection(cta.id, 'secondaryButton', e.target.value)}
                          placeholder="Secondary button text"
                        />
                      </div>
                    )}
                    {cta.backgroundImage && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Background Image URL</label>
                        <Input
                          value={cta.backgroundImage}
                          onChange={(e) => updateCtaSection(cta.id, 'backgroundImage', e.target.value)}
                          placeholder="Background image URL"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Section Headers Management */}
        <TabsContent value="section-headers" className="space-y-6">
          <h3 className="text-lg font-semibold">Section Headers & Text Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.keyFeaturesBadge}
                  onChange={(e) => updateSectionHeader('keyFeaturesBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.keyFeaturesTitle}
                  onChange={(e) => updateSectionHeader('keyFeaturesTitle', e.target.value)}
                  placeholder="Section title"
                />
                <Textarea
                  value={sectionHeaders.keyFeaturesDescription}
                  onChange={(e) => updateSectionHeader('keyFeaturesDescription', e.target.value)}
                  placeholder="Section description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.servicesTitle}
                  onChange={(e) => updateSectionHeader('servicesTitle', e.target.value)}
                  placeholder="Section title"
                />
                <Textarea
                  value={sectionHeaders.servicesDescription}
                  onChange={(e) => updateSectionHeader('servicesDescription', e.target.value)}
                  placeholder="Section description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testimonials Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.testimonialsBadge}
                  onChange={(e) => updateSectionHeader('testimonialsBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.testimonialsTitle}
                  onChange={(e) => updateSectionHeader('testimonialsTitle', e.target.value)}
                  placeholder="Section title"
                />
                <Textarea
                  value={sectionHeaders.testimonialsDescription}
                  onChange={(e) => updateSectionHeader('testimonialsDescription', e.target.value)}
                  placeholder="Section description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blogs Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.blogsBadge}
                  onChange={(e) => updateSectionHeader('blogsBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.blogsTitle}
                  onChange={(e) => updateSectionHeader('blogsTitle', e.target.value)}
                  placeholder="Section title"
                />
                <Textarea
                  value={sectionHeaders.blogsDescription}
                  onChange={(e) => updateSectionHeader('blogsDescription', e.target.value)}
                  placeholder="Section description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.whyChooseUsBadge}
                  onChange={(e) => updateSectionHeader('whyChooseUsBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.whyChooseUsTitle}
                  onChange={(e) => updateSectionHeader('whyChooseUsTitle', e.target.value)}
                  placeholder="Section title"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.projectsBadge}
                  onChange={(e) => updateSectionHeader('projectsBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.projectsTitle}
                  onChange={(e) => updateSectionHeader('projectsTitle', e.target.value)}
                  placeholder="Section title"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.technologyBadge}
                  onChange={(e) => updateSectionHeader('technologyBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={sectionHeaders.technologyTitle}
                  onChange={(e) => updateSectionHeader('technologyTitle', e.target.value)}
                  placeholder="Section title"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.contactBadge}
                  onChange={(e) => updateSectionHeader('contactBadge', e.target.value)}
                  placeholder="Badge text"
                />
                <Input
                  value={contactForm.title}
                  onChange={(e) => updateContactForm('title', e.target.value)}
                  placeholder="Contact title"
                />
                <Textarea
                  value={contactForm.subtitle}
                  onChange={(e) => updateContactForm('subtitle', e.target.value)}
                  placeholder="Contact description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>News & Update Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.newsTitle}
                  onChange={(e) => updateSectionHeader('newsTitle', e.target.value)}
                  placeholder="Section title"
                />
                <Textarea
                  value={sectionHeaders.newsDescription}
                  onChange={(e) => updateSectionHeader('newsDescription', e.target.value)}
                  placeholder="Section description"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={sectionHeaders.finalCtaTitle}
                  onChange={(e) => updateSectionHeader('finalCtaTitle', e.target.value)}
                  placeholder="CTA title"
                />
                <Textarea
                  value={sectionHeaders.finalCtaDescription}
                  onChange={(e) => updateSectionHeader('finalCtaDescription', e.target.value)}
                  placeholder="CTA description"
                  rows={3}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={sectionHeaders.finalCtaPrimaryButton}
                    onChange={(e) => updateSectionHeader('finalCtaPrimaryButton', e.target.value)}
                    placeholder="Primary button text"
                  />
                  <Input
                    value={sectionHeaders.finalCtaSecondaryButton}
                    onChange={(e) => updateSectionHeader('finalCtaSecondaryButton', e.target.value)}
                    placeholder="Secondary button text"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Why Choose Us Section */}
        <TabsContent value="why-choose-us" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Why Choose Us Management</h3>
            <Button onClick={addWhyChooseUsItem} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>Item #{item.id}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteWhyChooseUsItem(item.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={item.title}
                      onChange={(e) => updateWhyChooseUsItem(item.id, 'title', e.target.value)}
                      placeholder="Item title"
                    />
                    <Textarea
                      value={item.description}
                      onChange={(e) => updateWhyChooseUsItem(item.id, 'description', e.target.value)}
                      placeholder="Item description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Projects Section */}
        <TabsContent value="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Projects/Case Studies Management</h3>
            <Button onClick={addProject} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>Project #{project.id}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteProject(project.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={project.title}
                      onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                      placeholder="Project title"
                    />
                    <Input
                      value={project.tag}
                      onChange={(e) => updateProject(project.id, 'tag', e.target.value)}
                      placeholder="Project tag"
                    />
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Image URL</label>
                      <Input
                        value={project.image}
                        onChange={(e) => updateProject(project.id, 'image', e.target.value)}
                        placeholder="Image URL"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Technology Index Section */}
        <TabsContent value="technology" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Technology Index Management</h3>
            <Button onClick={addTechnology} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Technology
                    </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <Input
                      value={tech}
                      onChange={(e) => updateTechnology(index, e.target.value)}
                      placeholder="Technology name"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteTechnology(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Stats Cards Section */}
        <TabsContent value="stats-cards" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Stats Cards Management</h3>
            <Button onClick={addStatsCard} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Stats Card
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {statsCards.map((card) => (
              <Card key={card.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>Card #{card.id}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteStatsCard(card.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={card.number}
                      onChange={(e) => updateStatsCard(card.id, 'number', e.target.value)}
                      placeholder="Number/Value"
                    />
                    <Input
                      value={card.label}
                      onChange={(e) => updateStatsCard(card.id, 'label', e.target.value)}
                      placeholder="Label"
                    />
                    <div>
                      <label className="block text-sm font-medium mb-2">Background Image URL</label>
                      <Input
                        value={card.image}
                        onChange={(e) => updateStatsCard(card.id, 'image', e.target.value)}
                        placeholder="Image URL"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
                </div>
        </TabsContent>

        {/* Contact Form Section */}
        <TabsContent value="contact" className="space-y-6">
          <h3 className="text-lg font-semibold">Contact Form Management</h3>
          
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Input
                  value={contactForm.title}
                  onChange={(e) => updateContactForm('title', e.target.value)}
                  placeholder="Contact form title"
                />
                <Textarea
                  value={contactForm.subtitle}
                  onChange={(e) => updateContactForm('subtitle', e.target.value)}
                  placeholder="Contact form subtitle"
                  rows={3}
                />
                <Input
                  value={contactForm.buttonText}
                  onChange={(e) => updateContactForm('buttonText', e.target.value)}
                  placeholder="Submit button text"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
