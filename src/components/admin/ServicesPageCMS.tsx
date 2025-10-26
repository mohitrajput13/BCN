'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Edit, Eye } from "lucide-react";

export function ServicesPageCMS() {
  const [heroContent, setHeroContent] = useState({
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions to help your business grow and succeed.',
    primaryCta: 'Start a Project',
    secondaryCta: 'View Work'
  });

  const [services, setServices] = useState([
    {
      id: 1,
      icon: 'Globe',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      category: 'Development',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility'
      ]
    },
    {
      id: 2,
      icon: 'Smartphone',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      category: 'Development',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Development'
      ]
    },
    {
      id: 3,
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that engage and convert',
      category: 'Design',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design'
      ]
    }
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Moonkle LTD',
      role: 'Client of Company',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      text: 'Very well thought out and articulate communication. Clear milestones, deadlines and fast work.'
    },
    {
      id: 2,
      name: 'SoftTech',
      role: 'Manager of Company',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      text: 'Patience. Infinite patience. Clear and articulate communication. Great milestones and a very effective design process.'
    }
  ]);

  const [industries, setIndustries] = useState([
    { title: 'FinTech', desc: 'Payments, wallets, trading dashboards and KYC onboarding.' },
    { title: 'Healthcare', desc: 'HIPAA-conscious apps, patient portals and telemedicine.' },
    { title: 'E‑commerce', desc: 'Headless storefronts, integrations and analytics.' },
    { title: 'Education', desc: 'LMS, live classes and assessment tooling.' }
  ]);

  const [packages, setPackages] = useState([
    {
      name: 'Basic',
      price: 'Starting at $2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        '3 months support',
        'Content management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'Starting at $5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        '6 months support',
        'E-commerce integration',
        'Analytics setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      description: 'For large organizations',
      features: [
        'Unlimited pages',
        'Custom development',
        'Full SEO optimization',
        '12 months support',
        'Advanced integrations',
        'Dedicated support'
      ],
      popular: false
    }
  ]);

  const [clientsSection, setClientsSection] = useState({
    subtitle: 'OUR CLIENTS',
    title: 'We are Trusted 15+ Countries Worldwide'
  });

  const [industriesSection, setIndustriesSection] = useState({
    subtitle: 'INDUSTRIES',
    title: 'Industries We Serve'
  });

  const [consultationBanner, setConsultationBanner] = useState({
    subtitle: 'DROP US A LINE',
    title: 'NEED A CONSULTATION?',
    buttonText: 'CONTACT US',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=60'
  });

  const [faqSection, setFaqSection] = useState({
    subtitle: 'FAQ',
    title: 'Frequently Asked Questions'
  });

  const [faqs, setFaqs] = useState([
    { q: 'How do you estimate project timelines?', a: 'We break work into milestones and provide a clear timeline after discovery and planning.' },
    { q: 'Do you provide post‑launch support?', a: 'Yes, we include post‑launch support SLAs and flexible maintenance retainers.' },
    { q: 'What technologies do you use?', a: 'We use React/Next.js, Node/Python, modern databases, cloud (AWS) and CI/CD best practices.' },
    { q: 'Can you work with existing systems?', a: 'Absolutely. We integrate with legacy systems and plan phased modernization where needed.' }
  ]);

  const [processSection, setProcessSection] = useState({
    title: 'Our Process',
    subtitle: 'We follow a proven methodology to ensure successful project delivery and client satisfaction.'
  });

  const [processSteps, setProcessSteps] = useState([
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business goals, requirements, and challenges through detailed consultation.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines, milestones, and resource allocation.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using cutting-edge technologies and best practices.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure optimal performance.',
      icon: '🚀'
    }
  ]);

  const [techStackSection, setTechStackSection] = useState({
    title: 'Technology Stack',
    subtitle: 'We use the latest technologies and frameworks to build robust, scalable, and secure solutions.'
  });

  const [technologies, setTechnologies] = useState([
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Figma', category: 'Design' },
    { name: 'Git', category: 'Version Control' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind', category: 'Styling' }
  ]);

  const [ctaSection, setCtaSection] = useState({
    title: 'Ready to Get Started?',
    subtitle: "Let's discuss your project requirements and find the perfect solution for your business needs.",
    primaryCta: 'Start Your Project',
    secondaryCta: 'Schedule Consultation'
  });

  const handleSave = () => {
    console.log('Saving services page content...');
  };

  const addService = () => {
    const newService = {
      id: Date.now(),
      icon: 'Globe',
      title: 'New Service',
      description: 'Service description',
      category: 'Development',
      features: ['Feature 1', 'Feature 2']
    };
    setServices([...services, newService]);
  };

  const updateService = (id: number, field: string, value: unknown) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const deleteService = (id: number) => {
    setServices(services.filter(s => s.id !== id));
  };

  const addFeature = (serviceId: number) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const updatedFeatures = [...service.features, 'New Feature'];
      updateService(serviceId, 'features', updatedFeatures);
    }
  };

  const updateFeature = (serviceId: number, featureIndex: number, value: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const updatedFeatures = [...service.features];
      updatedFeatures[featureIndex] = value;
      updateService(serviceId, 'features', updatedFeatures);
    }
  };

  const deleteFeature = (serviceId: number, featureIndex: number) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const updatedFeatures = service.features.filter((_, index) => index !== featureIndex);
      updateService(serviceId, 'features', updatedFeatures);
    }
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: 'New Client',
      role: 'Client of Company',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      text: 'Testimonial text'
    };
    setTestimonials([...testimonials, newTestimonial]);
  };

  const updateTestimonial = (id: number, field: string, value: string) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const updateIndustry = (index: number, field: string, value: string) => {
    setIndustries(industries.map((industry, i) => i === index ? { ...industry, [field]: value } : industry));
  };

  const updatePackage = (index: number, field: string, value: string) => {
    setPackages(packages.map((pkg, i) => i === index ? { ...pkg, [field]: value } : pkg));
  };

  const updatePackageFeature = (packageIndex: number, featureIndex: number, value: string) => {
    setPackages(packages.map((pkg, i) => i === packageIndex ? { ...pkg, features: pkg.features.map((feature, fi) => fi === featureIndex ? value : feature) } : pkg));
  };

  const addFaq = () => {
    setFaqs([...faqs, { q: 'New Question', a: 'New Answer' }]);
  };

  const updateFaq = (index: number, field: string, value: string) => {
    setFaqs(faqs.map((faq, i) => i === index ? { ...faq, [field]: value } : faq));
  };

  const deleteFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const addProcessStep = () => {
    setProcessSteps([...processSteps, { step: '05', title: 'New Step', description: 'Step description', icon: '⭐' }]);
  };

  const updateProcessStep = (index: number, field: string, value: string) => {
    setProcessSteps(processSteps.map((step, i) => i === index ? { ...step, [field]: value } : step));
  };

  const deleteProcessStep = (index: number) => {
    setProcessSteps(processSteps.filter((_, i) => i !== index));
  };

  const addTechnology = () => {
    setTechnologies([...technologies, { name: 'New Tech', category: 'Category' }]);
  };

  const updateTechnology = (index: number, field: string, value: string) => {
    setTechnologies(technologies.map((tech, i) => i === index ? { ...tech, [field]: value } : tech));
  };

  const deleteTechnology = (index: number) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Services Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="industries">Industries</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
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

        {/* Services Section */}
        <TabsContent value="services" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Services Management</h3>
            <Button onClick={addService} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </div>
          
          <div className="space-y-6">
            {services.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge>{service.icon}</Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deleteService(service.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={service.title}
                        onChange={(e) => updateService(service.id, 'title', e.target.value)}
                        placeholder="Service title"
                      />
                      <Input
                        value={service.category}
                        onChange={(e) => updateService(service.id, 'category', e.target.value)}
                        placeholder="Category"
                      />
                    </div>
                    
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(service.id, 'description', e.target.value)}
                      placeholder="Service description"
                      rows={2}
                    />
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">Features</label>
                        <Button size="sm" variant="outline" onClick={() => addFeature(service.id)}>
                          <Plus className="w-3 h-3 mr-1" />
                          Add Feature
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Input
                              value={feature}
                              onChange={(e) => updateFeature(service.id, index, e.target.value)}
                              placeholder="Feature"
                            />
                            <Button size="sm" variant="outline" onClick={() => deleteFeature(service.id, index)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Testimonials Section */}
        <TabsContent value="testimonials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Clients Section Header</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Input
                  value={clientsSection.subtitle}
                  onChange={(e) => setClientsSection({...clientsSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={clientsSection.title}
                  onChange={(e) => setClientsSection({...clientsSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Client Testimonials</h3>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      value={testimonial.name}
                      onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                      placeholder="Client name"
                    />
                    <Input
                      value={testimonial.role}
                      onChange={(e) => updateTestimonial(testimonial.id, 'role', e.target.value)}
                      placeholder="Role/Company"
                    />
                    <Input
                      value={testimonial.avatar}
                      onChange={(e) => updateTestimonial(testimonial.id, 'avatar', e.target.value)}
                      placeholder="Avatar URL"
                    />
                  </div>
                  <Textarea
                    value={testimonial.text}
                    onChange={(e) => updateTestimonial(testimonial.id, 'text', e.target.value)}
                    placeholder="Testimonial text"
                    rows={2}
                    className="mt-4"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Industries Section */}
        <TabsContent value="industries" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Industries Section Header</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Input
                  value={industriesSection.subtitle}
                  onChange={(e) => setIndustriesSection({...industriesSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={industriesSection.title}
                  onChange={(e) => setIndustriesSection({...industriesSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={industry.title}
                      onChange={(e) => updateIndustry(index, 'title', e.target.value)}
                      placeholder="Industry title"
                    />
                    <Textarea
                      value={industry.desc}
                      onChange={(e) => updateIndustry(index, 'desc', e.target.value)}
                      placeholder="Industry description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* FAQ Section */}
        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>FAQ Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Input
                  value={faqSection.subtitle}
                  onChange={(e) => setFaqSection({...faqSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={faqSection.title}
                  onChange={(e) => setFaqSection({...faqSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>FAQ Items</CardTitle>
                <Button onClick={addFaq} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add FAQ
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge>FAQ #{index + 1}</Badge>
                          <Button size="sm" variant="outline" onClick={() => deleteFaq(index)}>
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <Input
                          value={faq.q}
                          onChange={(e) => updateFaq(index, 'q', e.target.value)}
                          placeholder="Question"
                        />
                        <Textarea
                          value={faq.a}
                          onChange={(e) => updateFaq(index, 'a', e.target.value)}
                          placeholder="Answer"
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Process Section */}
        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Process Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={processSection.title}
                  onChange={(e) => setProcessSection({...processSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Textarea
                  value={processSection.subtitle}
                  onChange={(e) => setProcessSection({...processSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Process Steps</CardTitle>
                <Button onClick={addProcessStep} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Step
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge>Step {step.step}</Badge>
                          <Button size="sm" variant="outline" onClick={() => deleteProcessStep(index)}>
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            value={step.step}
                            onChange={(e) => updateProcessStep(index, 'step', e.target.value)}
                            placeholder="Step number"
                          />
                          <Input
                            value={step.icon}
                            onChange={(e) => updateProcessStep(index, 'icon', e.target.value)}
                            placeholder="Icon (emoji)"
                          />
                        </div>
                        <Input
                          value={step.title}
                          onChange={(e) => updateProcessStep(index, 'title', e.target.value)}
                          placeholder="Step title"
                        />
                        <Textarea
                          value={step.description}
                          onChange={(e) => updateProcessStep(index, 'description', e.target.value)}
                          placeholder="Step description"
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Stack Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={techStackSection.title}
                  onChange={(e) => setTechStackSection({...techStackSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Textarea
                  value={techStackSection.subtitle}
                  onChange={(e) => setTechStackSection({...techStackSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Technologies</CardTitle>
                <Button onClick={addTechnology} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Technology
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge>Tech #{index + 1}</Badge>
                          <Button size="sm" variant="outline" onClick={() => deleteTechnology(index)}>
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            value={tech.name}
                            onChange={(e) => updateTechnology(index, 'name', e.target.value)}
                            placeholder="Technology name"
                          />
                          <Input
                            value={tech.category}
                            onChange={(e) => updateTechnology(index, 'category', e.target.value)}
                            placeholder="Category"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Packages Section */}
        <TabsContent value="packages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Banner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Banner Subtitle</label>
                <Input
                  value={consultationBanner.subtitle}
                  onChange={(e) => setConsultationBanner({...consultationBanner, subtitle: e.target.value})}
                  placeholder="Enter banner subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Banner Title</label>
                <Input
                  value={consultationBanner.title}
                  onChange={(e) => setConsultationBanner({...consultationBanner, title: e.target.value})}
                  placeholder="Enter banner title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Button Text</label>
                <Input
                  value={consultationBanner.buttonText}
                  onChange={(e) => setConsultationBanner({...consultationBanner, buttonText: e.target.value})}
                  placeholder="Enter button text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Background Image URL</label>
                <Input
                  value={consultationBanner.image}
                  onChange={(e) => setConsultationBanner({...consultationBanner, image: e.target.value})}
                  placeholder="Enter image URL"
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
                <label className="block text-sm font-medium mb-2">CTA Title</label>
                <Input
                  value={ctaSection.title}
                  onChange={(e) => setCtaSection({...ctaSection, title: e.target.value})}
                  placeholder="Enter CTA title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CTA Subtitle</label>
                <Textarea
                  value={ctaSection.subtitle}
                  onChange={(e) => setCtaSection({...ctaSection, subtitle: e.target.value})}
                  placeholder="Enter CTA subtitle"
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

          <h3 className="text-lg font-semibold">Service Packages</h3>
          <div className="space-y-6">
            {packages.map((package_, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge>
                        {package_.popular ? "Most Popular" : "Package"}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        value={package_.name}
                        onChange={(e) => updatePackage(index, 'name', e.target.value)}
                        placeholder="Package name"
                      />
                      <Input
                        value={package_.price}
                        onChange={(e) => updatePackage(index, 'price', e.target.value)}
                        placeholder="Price"
                      />
                      <Input
                        value={package_.description}
                        onChange={(e) => updatePackage(index, 'description', e.target.value)}
                        placeholder="Description"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Features</label>
                      <div className="space-y-2">
                        {package_.features.map((feature, featureIndex) => (
                          <Input
                            key={featureIndex}
                            value={feature}
                            onChange={(e) => updatePackageFeature(index, featureIndex, e.target.value)}
                            placeholder="Feature"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
