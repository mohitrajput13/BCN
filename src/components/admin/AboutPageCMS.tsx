'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Save, Eye, Target, Eye as EyeIcon, Heart, Users, Award, Calendar } from "lucide-react";

export function AboutPageCMS() {
  const [heroContent, setHeroContent] = useState({
    title: 'About Black Cube Solutions',
    subtitle: 'We are a leading IT solutions provider in Dubai, empowering businesses through innovative technology and digital transformation.',
    primaryCta: "Let's Talk",
    secondaryCta: 'View Services'
  });

  const [companyStats, setCompanyStats] = useState([
    { number: '100+', label: 'Projects Delivered' },
    { number: '30+', label: 'Active Clients' },
    { number: '10+', label: 'Industries Served' },
    { number: '24/7', label: 'Support' }
  ]);

  const [values, setValues] = useState([
    {
      id: 1,
      icon: 'Target',
      title: 'Mission',
      description: 'To empower businesses through innovative technology solutions that drive growth and success in the digital age.'
    },
    {
      id: 2,
      icon: 'Eye',
      title: 'Vision',
      description: 'To be the leading digital transformation partner for businesses worldwide, recognized for excellence and innovation.'
    },
    {
      id: 3,
      icon: 'Heart',
      title: 'Values',
      description: 'We believe in integrity, innovation, collaboration, and delivering exceptional value to our clients.'
    }
  ]);

  const [milestones, setMilestones] = useState([
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform businesses digitally' },
    { year: '2020', title: 'First Major Project', description: 'Delivered our first enterprise-level web application' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to 15+ skilled professionals' },
    { year: '2022', title: 'Award Recognition', description: 'Received Best IT Solutions Provider award' },
    { year: '2023', title: 'Global Reach', description: 'Expanded services to international markets' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered solutions for clients' }
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Technical expert specializing in cloud solutions',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ]);

  const [whyChooseUs, setWhyChooseUs] = useState([
    '15+ Years of Combined Experience',
    '50+ Successful Projects Delivered',
    '24/7 Customer Support',
    'Cutting-edge Technology Stack',
    'Agile Development Methodology',
    'Competitive Pricing'
  ]);

  const [journeySection, setJourneySection] = useState({
    title: 'Our Journey',
    subtitle: 'From humble beginnings to becoming a trusted partner for businesses worldwide.'
  });

  const [clientsSection, setClientsSection] = useState({
    title: 'Trusted by Leading Brands',
    subtitle: 'OUR CLIENTS'
  });

  const [teamSection, setTeamSection] = useState({
    title: 'Meet Our Team',
    subtitle: 'Our talented team of professionals is dedicated to delivering exceptional results for our clients.'
  });

  const [whyChooseUsSection, setWhyChooseUsSection] = useState({
    title: 'Why Choose Black Cube Solutions?',
    subtitle: 'We combine technical expertise with business acumen to deliver solutions that drive real results.',
    stats: {
      satisfactionRate: '98%',
      satisfactionLabel: 'Client Satisfaction Rate',
      satisfactionSubtext: 'Based on 50+ completed projects',
      metrics: [
        { label: 'Project Delivery', percentage: 100 },
        { label: 'Code Quality', percentage: 98 },
        { label: 'Client Communication', percentage: 95 },
        { label: 'Support Response', percentage: 100 }
      ]
    }
  });

  const [ctaSection, setCtaSection] = useState({
    title: 'Ready to Work With Us?',
    subtitle: "Let's discuss your project and see how we can help you achieve your digital transformation goals.",
    primaryCta: 'Start Your Project',
    secondaryCta: 'View Our Services'
  });

  const [clientLogos, setClientLogos] = useState([
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+1',
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+2',
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+3',
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+4',
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+5',
    'https://dummyimage.com/160x60/0b1220/ffffff&text=Brand+6'
  ]);

  const handleSave = () => {
    console.log('Saving about page content...');
  };

  const addMilestone = () => {
    const newMilestone = {
      year: '2024',
      title: 'New Milestone',
      description: 'Milestone description'
    };
    setMilestones([...milestones, newMilestone]);
  };

  const updateMilestone = (index: number, field: string, value: string) => {
    const updated = [...milestones];
    updated[index] = { ...updated[index], [field]: value };
    setMilestones(updated);
  };

  const deleteMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  const addTeamMember = () => {
    const newMember = {
      id: Date.now(),
      name: 'New Member',
      position: 'Position',
      bio: 'Bio description',
      social: { linkedin: '#', twitter: '#', github: '#' }
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const updateTeamMember = (id: number, field: string, value: string) => {
    setTeamMembers(teamMembers.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const deleteTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  const updateCompanyStat = (index: number, field: string, value: string) => {
    setCompanyStats(companyStats.map((stat, i) => i === index ? { ...stat, [field]: value } : stat));
  };

  const updateValue = (id: number, field: string, value: string) => {
    setValues(values.map(v => v.id === id ? { ...v, [field]: value } : v));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">About Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="values">Values</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="why-choose">Why Choose Us</TabsTrigger>
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

        {/* Company Stats */}
        <TabsContent value="stats" className="space-y-6">
          <h3 className="text-lg font-semibold">Company Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={stat.number}
                      onChange={(e) => updateCompanyStat(index, 'number', e.target.value)}
                      placeholder="Number"
                    />
                    <Input
                      value={stat.label}
                      onChange={(e) => updateCompanyStat(index, 'label', e.target.value)}
                      placeholder="Label"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Values Section */}
        <TabsContent value="values" className="space-y-6">
          <h3 className="text-lg font-semibold">Mission, Vision & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <Card key={value.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{value.icon}</Badge>
                    </div>
                    <Input
                      value={value.title}
                      onChange={(e) => updateValue(value.id, 'title', e.target.value)}
                      placeholder="Title"
                    />
                    <Textarea
                      value={value.description}
                      onChange={(e) => updateValue(value.id, 'description', e.target.value)}
                      placeholder="Description"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Timeline Section */}
        <TabsContent value="timeline" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Company Timeline</h3>
            <Button onClick={addMilestone} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Milestone
            </Button>
          </div>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      value={milestone.year}
                      onChange={(e) => updateMilestone(index, 'year', e.target.value)}
                      placeholder="Year"
                    />
                    <Input
                      value={milestone.title}
                      onChange={(e) => updateMilestone(index, 'title', e.target.value)}
                      placeholder="Title"
                    />
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => deleteMilestone(index)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={milestone.description}
                    onChange={(e) => updateMilestone(index, 'description', e.target.value)}
                    placeholder="Description"
                    rows={2}
                    className="mt-4"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Team Section */}
        <TabsContent value="team" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Team Members</h3>
            <Button onClick={addTeamMember} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>Team Member</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteTeamMember(member.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={member.name}
                      onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                      placeholder="Name"
                    />
                    <Input
                      value={member.position}
                      onChange={(e) => updateTeamMember(member.id, 'position', e.target.value)}
                      placeholder="Position"
                    />
                    <Textarea
                      value={member.bio}
                      onChange={(e) => updateTeamMember(member.id, 'bio', e.target.value)}
                      placeholder="Bio"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Clients Section */}
        <TabsContent value="clients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Clients Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={clientsSection.title}
                  onChange={(e) => setClientsSection({...clientsSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Input
                  value={clientsSection.subtitle}
                  onChange={(e) => setClientsSection({...clientsSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Logos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={logo}
                      onChange={(e) => {
                        const updated = [...clientLogos];
                        updated[index] = e.target.value;
                        setClientLogos(updated);
                      }}
                      placeholder="Logo URL"
                    />
                    <Button size="sm" variant="outline" onClick={() => setClientLogos(clientLogos.filter((_, i) => i !== index))}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button onClick={() => setClientLogos([...clientLogos, ''])} size="sm" className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Logo
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Why Choose Us Section */}
        <TabsContent value="why-choose" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={whyChooseUsSection.title}
                  onChange={(e) => setWhyChooseUsSection({...whyChooseUsSection, title: e.target.value})}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Subtitle</label>
                <Textarea
                  value={whyChooseUsSection.subtitle}
                  onChange={(e) => setWhyChooseUsSection({...whyChooseUsSection, subtitle: e.target.value})}
                  placeholder="Enter section subtitle"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={point}
                      onChange={(e) => {
                        const updated = [...whyChooseUs];
                        updated[index] = e.target.value;
                        setWhyChooseUs(updated);
                      }}
                      placeholder="Why choose us point"
                    />
                    <Button size="sm" variant="outline" onClick={() => setWhyChooseUs(whyChooseUs.filter((_, i) => i !== index))}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button onClick={() => setWhyChooseUs([...whyChooseUs, ''])} size="sm" className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Point
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Rate</label>
                  <Input
                    value={whyChooseUsSection.stats.satisfactionRate}
                    onChange={(e) => setWhyChooseUsSection({
                      ...whyChooseUsSection,
                      stats: {...whyChooseUsSection.stats, satisfactionRate: e.target.value}
                    })}
                    placeholder="98%"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Label</label>
                  <Input
                    value={whyChooseUsSection.stats.satisfactionLabel}
                    onChange={(e) => setWhyChooseUsSection({
                      ...whyChooseUsSection,
                      stats: {...whyChooseUsSection.stats, satisfactionLabel: e.target.value}
                    })}
                    placeholder="Client Satisfaction Rate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Subtext</label>
                  <Input
                    value={whyChooseUsSection.stats.satisfactionSubtext}
                    onChange={(e) => setWhyChooseUsSection({
                      ...whyChooseUsSection,
                      stats: {...whyChooseUsSection.stats, satisfactionSubtext: e.target.value}
                    })}
                    placeholder="Based on 50+ completed projects"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Metrics</label>
                <div className="space-y-4">
                  {whyChooseUsSection.stats.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={metric.label}
                        onChange={(e) => {
                          const updated = [...whyChooseUsSection.stats.metrics];
                          updated[index] = {...updated[index], label: e.target.value};
                          setWhyChooseUsSection({
                            ...whyChooseUsSection,
                            stats: {...whyChooseUsSection.stats, metrics: updated}
                          });
                        }}
                        placeholder="Metric label"
                        className="flex-1"
                      />
                      <Input
                        value={metric.percentage}
                        onChange={(e) => {
                          const updated = [...whyChooseUsSection.stats.metrics];
                          updated[index] = {...updated[index], percentage: parseInt(e.target.value) || 0};
                          setWhyChooseUsSection({
                            ...whyChooseUsSection,
                            stats: {...whyChooseUsSection.stats, metrics: updated}
                          });
                        }}
                        placeholder="Percentage"
                        type="number"
                        className="w-24"
                      />
                      <Button size="sm" variant="outline" onClick={() => {
                        const updated = whyChooseUsSection.stats.metrics.filter((_, i) => i !== index);
                        setWhyChooseUsSection({
                          ...whyChooseUsSection,
                          stats: {...whyChooseUsSection.stats, metrics: updated}
                        });
                      }}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setWhyChooseUsSection({
                  ...whyChooseUsSection,
                  stats: {
                    ...whyChooseUsSection.stats,
                    metrics: [...whyChooseUsSection.stats.metrics, { label: 'New Metric', percentage: 0 }]
                  }
                })} size="sm" className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Metric
                </Button>
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
            <CardContent className="space-y-8">
              {/* Hero Preview */}
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

              {/* Stats Preview */}
              <div className="bg-primary-slate/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Company Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {companyStats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-primary-blue mb-1">{stat.number}</div>
                      <div className="text-primary-gray text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values Preview */}
              <div className="bg-primary-black/50 rounded-lg p-6 border border-primary-slate/30">
                <h3 className="text-lg font-semibold mb-4">Mission, Vision & Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {values.map((value) => (
                    <div key={value.id} className="text-center p-4 bg-primary-slate/20 rounded-lg">
                      <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-sm">{value.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-primary-gray text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey Preview */}
              <div className="bg-primary-slate/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{journeySection.title}</h3>
                <p className="text-primary-gray mb-4">{journeySection.subtitle}</p>
                <div className="space-y-2">
                  {milestones.slice(0, 3).map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-primary-black/30 rounded">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{milestone.year}</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{milestone.title}</div>
                        <div className="text-primary-gray text-sm">{milestone.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clients Preview */}
              <div className="bg-primary-black/50 rounded-lg p-6 border border-primary-slate/30">
                <div className="text-center mb-4">
                  <div className="text-primary-blue text-sm mb-2">{clientsSection.subtitle}</div>
                  <h3 className="text-lg font-semibold text-white">{clientsSection.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {clientLogos.slice(0, 6).map((logo, index) => (
                    <div key={index} className="h-12 bg-primary-slate/20 rounded flex items-center justify-center">
                      <span className="text-primary-gray text-xs">Logo {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Preview */}
              <div className="bg-primary-slate/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{teamSection.title}</h3>
                <p className="text-primary-gray mb-4">{teamSection.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.slice(0, 2).map((member) => (
                    <div key={member.id} className="text-center p-4 bg-primary-black/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="text-white font-medium">{member.name}</h4>
                      <p className="text-primary-blue text-sm">{member.position}</p>
                      <p className="text-primary-gray text-xs mt-1">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Preview */}
              <div className="bg-primary-black/50 rounded-lg p-6 border border-primary-slate/30">
                <h3 className="text-lg font-semibold mb-4">{whyChooseUsSection.title}</h3>
                <p className="text-primary-gray mb-4">{whyChooseUsSection.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-2">
                      {whyChooseUs.slice(0, 3).map((point, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-primary-blue rounded-full"></div>
                          <span className="text-primary-gray text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {whyChooseUsSection.stats.satisfactionRate}
                    </div>
                    <div className="text-primary-gray text-sm mb-2">
                      {whyChooseUsSection.stats.satisfactionLabel}
                    </div>
                    <div className="text-primary-gray text-xs">
                      {whyChooseUsSection.stats.satisfactionSubtext}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Preview */}
              <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{ctaSection.title}</h3>
                <p className="text-primary-gray mb-4">{ctaSection.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="sm">{ctaSection.primaryCta}</Button>
                  <Button variant="outline" size="sm">{ctaSection.secondaryCta}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
