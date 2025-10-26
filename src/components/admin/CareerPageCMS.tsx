'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Edit, Eye } from "lucide-react";

export function CareerPageCMS() {
  const [heroContent, setHeroContent] = useState({
    title: 'Join Our Team',
    subtitle: 'Be part of a dynamic team shaping the future of digital transformation.',
    primaryCta: 'View Openings',
    secondaryCta: 'Contact HR'
  });

  const [quickFacts, setQuickFacts] = useState([
    { label: 'Employment', value: 'Full Employment' },
    { label: 'City', value: 'Dubai, UAE' },
    { label: 'Schedule', value: 'Full Time' }
  ]);

  const [whyWorkWithUsSection, setWhyWorkWithUsSection] = useState({
    title: 'Why Work With Us?',
    description: 'We offer a collaborative environment where innovation thrives and your career can flourish.'
  });

  const [progressBarsSection, setProgressBarsSection] = useState({
    title: 'Progress Bars',
    skills: [
      { label: 'Mobile Development', pct: 70 },
      { label: 'Web Development', pct: 90 },
      { label: 'UI/UX Design', pct: 60 }
    ],
    circularSkills: [
      { pct: 50, label: 'Mobile Development' },
      { pct: 70, label: 'Wearable Development' }
    ]
  });

  const [applyNowSection, setApplyNowSection] = useState({
    badge: 'APPLY NOW',
    title: 'Leave Your CV',
    description: 'Leave your resume if you are interested in a vacancy. We will definitely contact you.',
    buttonText: 'Leave a CV',
    checkboxText: 'By signing and clicking Submit, you affirm you have read and agree to the Privacy Policy and Terms of Use and want to receive news.'
  });

  const [checklistSection, setChecklistSection] = useState({
    title: 'We are Right for Your if:',
    items: [
      'Exerci laoreet an vix',
      'Eum cetero pericula cu',
      'Nullam graeco nec ex',
      'Dicant molestie eu sed',
      'Personal branding is valuable',
      'Best possible services',
      'Reachable by everyone',
      'Growth mindset'
    ]
  });

  const [jobOpeningsSection, setJobOpeningsSection] = useState({
    title: 'Current Openings',
    description: 'Find the perfect role that matches your skills and career aspirations.'
  });

  const [companyCultureSection, setCompanyCultureSection] = useState({
    title: 'Our Culture',
    description: 'We foster a culture of innovation, collaboration, and continuous learning. Our team is our greatest asset, and we invest in their growth and success.',
    satisfactionPercentage: '95%',
    satisfactionLabel: 'Employee Satisfaction',
    satisfactionSubtext: 'Based on annual surveys',
    metrics: [
      { label: 'Work Environment', percentage: 98 },
      { label: 'Growth Opportunities', percentage: 92 },
      { label: 'Team Collaboration', percentage: 95 },
      { label: 'Management Support', percentage: 90 }
    ]
  });

  const [ctaSection, setCtaSection] = useState({
    title: 'Don\'t See Your Perfect Role?',
    description: 'We\'re always looking for talented individuals to join our team. Send us your resume and we\'ll keep you in mind for future opportunities.',
    primaryCta: 'Send Your Resume',
    secondaryCta: 'Contact HR Team'
  });

  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Dubai, UAE',
      salary: '$5,000 - $7,000',
      postedDate: '2024-01-15',
      description: 'We are looking for an experienced frontend developer to join our team.',
      requirements: [
        '5+ years of React experience',
        'Strong TypeScript skills',
        'Experience with Next.js',
        'Knowledge of modern CSS frameworks'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Dubai, UAE',
      salary: '$4,000 - $6,000',
      postedDate: '2024-01-10',
      description: 'Creative UI/UX designer to create beautiful and functional designs.',
      requirements: [
        '3+ years of design experience',
        'Proficiency in Figma',
        'Strong portfolio',
        'Understanding of user research'
      ]
    }
  ]);

  const [benefits, setBenefits] = useState([
    {
      id: 1,
      icon: 'Briefcase',
      title: 'Exciting Projects',
      description: 'Work on cutting-edge projects that challenge and inspire you to grow professionally.'
    },
    {
      id: 2,
      icon: 'User',
      title: 'Growth Opportunities',
      description: 'Continuous learning and development opportunities to advance your career.'
    },
    {
      id: 3,
      icon: 'Clock',
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain a healthy balance.'
    }
  ]);

  const [companyCulture, setCompanyCulture] = useState([
    'Open and transparent communication',
    'Flexible work arrangements',
    'Regular team building activities',
    'Professional development opportunities',
    'Innovation and creativity encouraged',
    'Diverse and inclusive environment'
  ]);

  const [applicationForm, setApplicationForm] = useState({
    title: 'Leave Your CV',
    subtitle: 'Leave your resume if you are interested in a vacancy. We will definitely contact you.',
    fields: [
      { name: 'name', label: 'Your Name', required: true },
      { name: 'email', label: 'Your Email', required: true },
      { name: 'phone', label: 'Your Phone', required: true },
      { name: 'skills', label: 'Tell about your skills', required: false, type: 'textarea' }
    ]
  });

  const handleSave = () => {
    console.log('Saving career page content...');
  };

  const addJobPosting = () => {
    const newJob = {
      id: Date.now(),
      title: 'New Position',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Dubai, UAE',
      salary: 'Competitive',
      postedDate: new Date().toISOString().split('T')[0],
      description: 'Job description',
      requirements: ['Requirement 1', 'Requirement 2']
    };
    setJobPostings([...jobPostings, newJob]);
  };

  const updateJobPosting = (id: number, field: string, value: unknown) => {
    setJobPostings(jobPostings.map(job => job.id === id ? { ...job, [field]: value } : job));
  };

  const deleteJobPosting = (id: number) => {
    setJobPostings(jobPostings.filter(job => job.id !== id));
  };

  const addRequirement = (jobId: number) => {
    const job = jobPostings.find(j => j.id === jobId);
    if (job) {
      const updatedRequirements = [...job.requirements, 'New Requirement'];
      updateJobPosting(jobId, 'requirements', updatedRequirements);
    }
  };

  const updateRequirement = (jobId: number, reqIndex: number, value: string) => {
    const job = jobPostings.find(j => j.id === jobId);
    if (job) {
      const updatedRequirements = [...job.requirements];
      updatedRequirements[reqIndex] = value;
      updateJobPosting(jobId, 'requirements', updatedRequirements);
    }
  };

  const deleteRequirement = (jobId: number, reqIndex: number) => {
    const job = jobPostings.find(j => j.id === jobId);
    if (job) {
      const updatedRequirements = job.requirements.filter((_, index) => index !== reqIndex);
      updateJobPosting(jobId, 'requirements', updatedRequirements);
    }
  };

  const addBenefit = () => {
    const newBenefit = {
      id: Date.now(),
      icon: 'Briefcase',
      title: 'New Benefit',
      description: 'Benefit description'
    };
    setBenefits([...benefits, newBenefit]);
  };

  const updateBenefit = (id: number, field: string, value: string) => {
    setBenefits(benefits.map(benefit => benefit.id === id ? { ...benefit, [field]: value } : benefit));
  };

  const deleteBenefit = (id: number) => {
    setBenefits(benefits.filter(benefit => benefit.id !== id));
  };

  const addCultureItem = () => {
    setCompanyCulture([...companyCulture, 'New culture item']);
  };

  const updateCultureItem = (index: number, value: string) => {
    const updated = [...companyCulture];
    updated[index] = value;
    setCompanyCulture(updated);
  };

  const deleteCultureItem = (index: number) => {
    setCompanyCulture(companyCulture.filter((_, i) => i !== index));
  };

  const addQuickFact = () => {
    setQuickFacts([...quickFacts, { label: 'New Fact', value: 'New Value' }]);
  };

  const updateQuickFact = (index: number, field: string, value: string) => {
    const updated = [...quickFacts];
    updated[index] = { ...updated[index], [field]: value };
    setQuickFacts(updated);
  };

  const deleteQuickFact = (index: number) => {
    setQuickFacts(quickFacts.filter((_, i) => i !== index));
  };

  const addProgressSkill = () => {
    setProgressBarsSection({
      ...progressBarsSection,
      skills: [...progressBarsSection.skills, { label: 'New Skill', pct: 50 }]
    });
  };

  const updateProgressSkill = (index: number, field: string, value: unknown) => {
    const updated = [...progressBarsSection.skills];
    updated[index] = { ...updated[index], [field]: value };
    setProgressBarsSection({ ...progressBarsSection, skills: updated });
  };

  const deleteProgressSkill = (index: number) => {
    setProgressBarsSection({
      ...progressBarsSection,
      skills: progressBarsSection.skills.filter((_, i) => i !== index)
    });
  };

  const addCircularSkill = () => {
    setProgressBarsSection({
      ...progressBarsSection,
      circularSkills: [...progressBarsSection.circularSkills, { pct: 50, label: 'New Skill' }]
    });
  };

  const updateCircularSkill = (index: number, field: string, value: unknown) => {
    const updated = [...progressBarsSection.circularSkills];
    updated[index] = { ...updated[index], [field]: value };
    setProgressBarsSection({ ...progressBarsSection, circularSkills: updated });
  };

  const deleteCircularSkill = (index: number) => {
    setProgressBarsSection({
      ...progressBarsSection,
      circularSkills: progressBarsSection.circularSkills.filter((_, i) => i !== index)
    });
  };

  const addChecklistItem = () => {
    setChecklistSection({
      ...checklistSection,
      items: [...checklistSection.items, 'New checklist item']
    });
  };

  const updateChecklistItem = (index: number, value: string) => {
    const updated = [...checklistSection.items];
    updated[index] = value;
    setChecklistSection({ ...checklistSection, items: updated });
  };

  const deleteChecklistItem = (index: number) => {
    setChecklistSection({
      ...checklistSection,
      items: checklistSection.items.filter((_, i) => i !== index)
    });
  };

  const addCultureMetric = () => {
    setCompanyCultureSection({
      ...companyCultureSection,
      metrics: [...companyCultureSection.metrics, { label: 'New Metric', percentage: 50 }]
    });
  };

  const updateCultureMetric = (index: number, field: string, value: unknown) => {
    const updated = [...companyCultureSection.metrics];
    updated[index] = { ...updated[index], [field]: value };
    setCompanyCultureSection({ ...companyCultureSection, metrics: updated });
  };

  const deleteCultureMetric = (index: number) => {
    setCompanyCultureSection({
      ...companyCultureSection,
      metrics: companyCultureSection.metrics.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Career Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-10">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="quick-facts">Quick Facts</TabsTrigger>
          <TabsTrigger value="why-work">Why Work</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="apply">Apply</TabsTrigger>
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="cta">CTA</TabsTrigger>
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

        {/* Quick Facts */}
        <TabsContent value="quick-facts" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Quick Facts</h3>
            <Button onClick={addQuickFact} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Fact
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickFacts.map((fact, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={fact.label}
                      onChange={(e) => updateQuickFact(index, 'label', e.target.value)}
                      placeholder="Fact label"
                    />
                    <Input
                      value={fact.value}
                      onChange={(e) => updateQuickFact(index, 'value', e.target.value)}
                      placeholder="Fact value"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteQuickFact(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Why Work With Us */}
        <TabsContent value="why-work" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Why Work With Us Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={whyWorkWithUsSection.title}
                  onChange={(e) => setWhyWorkWithUsSection({...whyWorkWithUsSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={whyWorkWithUsSection.description}
                  onChange={(e) => setWhyWorkWithUsSection({...whyWorkWithUsSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Employee Benefits</h3>
            <Button onClick={addBenefit} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Benefit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <Card key={benefit.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{benefit.icon}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteBenefit(benefit.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={benefit.title}
                      onChange={(e) => updateBenefit(benefit.id, 'title', e.target.value)}
                      placeholder="Benefit title"
                    />
                    <Textarea
                      value={benefit.description}
                      onChange={(e) => updateBenefit(benefit.id, 'description', e.target.value)}
                      placeholder="Benefit description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Progress Bars */}
        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progress Bars Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={progressBarsSection.title}
                  onChange={(e) => setProgressBarsSection({...progressBarsSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Linear Progress Skills</h3>
            <Button onClick={addProgressSkill} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {progressBarsSection.skills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={skill.label}
                      onChange={(e) => updateProgressSkill(index, 'label', e.target.value)}
                      placeholder="Skill label"
                    />
                    <Input
                      type="number"
                      value={skill.pct}
                      onChange={(e) => updateProgressSkill(index, 'pct', parseInt(e.target.value))}
                      placeholder="Percentage"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteProgressSkill(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Circular Progress Skills</h3>
            <Button onClick={addCircularSkill} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {progressBarsSection.circularSkills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={skill.label}
                      onChange={(e) => updateCircularSkill(index, 'label', e.target.value)}
                      placeholder="Skill label"
                    />
                    <Input
                      type="number"
                      value={skill.pct}
                      onChange={(e) => updateCircularSkill(index, 'pct', parseInt(e.target.value))}
                      placeholder="Percentage"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteCircularSkill(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Apply Now */}
        <TabsContent value="apply" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apply Now Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Badge Text</label>
                <Input
                  value={applyNowSection.badge}
                  onChange={(e) => setApplyNowSection({...applyNowSection, badge: e.target.value})}
                  placeholder="Badge text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={applyNowSection.title}
                  onChange={(e) => setApplyNowSection({...applyNowSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={applyNowSection.description}
                  onChange={(e) => setApplyNowSection({...applyNowSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Button Text</label>
                <Input
                  value={applyNowSection.buttonText}
                  onChange={(e) => setApplyNowSection({...applyNowSection, buttonText: e.target.value})}
                  placeholder="Button text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Checkbox Text</label>
                <Textarea
                  value={applyNowSection.checkboxText}
                  onChange={(e) => setApplyNowSection({...applyNowSection, checkboxText: e.target.value})}
                  placeholder="Checkbox text"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Checklist */}
        <TabsContent value="checklist" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Checklist Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={checklistSection.title}
                  onChange={(e) => setChecklistSection({...checklistSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Checklist Items</h3>
            <Button onClick={addChecklistItem} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
          
          <div className="space-y-2">
            {checklistSection.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={item}
                  onChange={(e) => updateChecklistItem(index, e.target.value)}
                  placeholder="Checklist item"
                />
                <Button size="sm" variant="outline" onClick={() => deleteChecklistItem(index)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Job Postings */}
        <TabsContent value="jobs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Openings Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={jobOpeningsSection.title}
                  onChange={(e) => setJobOpeningsSection({...jobOpeningsSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={jobOpeningsSection.description}
                  onChange={(e) => setJobOpeningsSection({...jobOpeningsSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Job Postings</h3>
            <Button onClick={addJobPosting} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Job Posting
            </Button>
          </div>
          
          <div className="space-y-6">
            {jobPostings.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge>{job.department}</Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deleteJobPosting(job.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={job.title}
                        onChange={(e) => updateJobPosting(job.id, 'title', e.target.value)}
                        placeholder="Job title"
                      />
                      <Input
                        value={job.department}
                        onChange={(e) => updateJobPosting(job.id, 'department', e.target.value)}
                        placeholder="Department"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        value={job.type}
                        onChange={(e) => updateJobPosting(job.id, 'type', e.target.value)}
                        placeholder="Job type"
                      />
                      <Input
                        value={job.location}
                        onChange={(e) => updateJobPosting(job.id, 'location', e.target.value)}
                        placeholder="Location"
                      />
                      <Input
                        value={job.salary}
                        onChange={(e) => updateJobPosting(job.id, 'salary', e.target.value)}
                        placeholder="Salary range"
                      />
                    </div>
                    
                    <Textarea
                      value={job.description}
                      onChange={(e) => updateJobPosting(job.id, 'description', e.target.value)}
                      placeholder="Job description"
                      rows={3}
                    />
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">Requirements</label>
                        <Button size="sm" variant="outline" onClick={() => addRequirement(job.id)}>
                          <Plus className="w-3 h-3 mr-1" />
                          Add Requirement
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {job.requirements.map((requirement, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <Input
                              value={requirement}
                              onChange={(e) => updateRequirement(job.id, reqIndex, e.target.value)}
                              placeholder="Requirement"
                            />
                            <Button size="sm" variant="outline" onClick={() => deleteRequirement(job.id, reqIndex)}>
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

        {/* Applications */}
        <TabsContent value="applications" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Job Applications</h3>
            <Button size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All Applications
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-2">12</div>
                <div className="text-primary-gray">Total Applications</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">8</div>
                <div className="text-primary-gray">Pending Review</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">4</div>
                <div className="text-primary-gray">Shortlisted</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'John Smith', position: 'Senior Frontend Developer', date: '2024-01-15', status: 'Pending' },
                  { name: 'Sarah Johnson', position: 'UI/UX Designer', date: '2024-01-14', status: 'Reviewed' },
                  { name: 'Ahmed Al-Rashid', position: 'Full Stack Developer', date: '2024-01-13', status: 'Shortlisted' }
                ].map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-primary-slate/30 rounded-lg">
                    <div>
                      <h4 className="text-white font-medium">{app.name}</h4>
                      <p className="text-primary-gray text-sm">{app.position}</p>
                      <p className="text-primary-gray text-xs">{app.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={app.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' : 
                                     app.status === 'Reviewed' ? 'bg-blue-500/20 text-blue-500' : 
                                     'bg-green-500/20 text-green-500'}>
                        {app.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Benefits */}
        <TabsContent value="benefits" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Employee Benefits</h3>
            <Button onClick={addBenefit} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Benefit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <Card key={benefit.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{benefit.icon}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteBenefit(benefit.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={benefit.title}
                      onChange={(e) => updateBenefit(benefit.id, 'title', e.target.value)}
                      placeholder="Benefit title"
                    />
                    <Textarea
                      value={benefit.description}
                      onChange={(e) => updateBenefit(benefit.id, 'description', e.target.value)}
                      placeholder="Benefit description"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Company Culture */}
        <TabsContent value="culture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Culture Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={companyCultureSection.title}
                  onChange={(e) => setCompanyCultureSection({...companyCultureSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={companyCultureSection.description}
                  onChange={(e) => setCompanyCultureSection({...companyCultureSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Percentage</label>
                  <Input
                    value={companyCultureSection.satisfactionPercentage}
                    onChange={(e) => setCompanyCultureSection({...companyCultureSection, satisfactionPercentage: e.target.value})}
                    placeholder="95%"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Label</label>
                  <Input
                    value={companyCultureSection.satisfactionLabel}
                    onChange={(e) => setCompanyCultureSection({...companyCultureSection, satisfactionLabel: e.target.value})}
                    placeholder="Employee Satisfaction"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction Subtext</label>
                  <Input
                    value={companyCultureSection.satisfactionSubtext}
                    onChange={(e) => setCompanyCultureSection({...companyCultureSection, satisfactionSubtext: e.target.value})}
                    placeholder="Based on annual surveys"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Culture Items</h3>
            <Button onClick={addCultureItem} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Culture Item
            </Button>
          </div>
          
          <div className="space-y-2">
            {companyCulture.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={item}
                  onChange={(e) => updateCultureItem(index, e.target.value)}
                  placeholder="Culture item"
                />
                <Button size="sm" variant="outline" onClick={() => deleteCultureItem(index)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Culture Metrics</h3>
            <Button onClick={addCultureMetric} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Metric
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {companyCultureSection.metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Input
                      value={metric.label}
                      onChange={(e) => updateCultureMetric(index, 'label', e.target.value)}
                      placeholder="Metric label"
                    />
                    <Input
                      type="number"
                      value={metric.percentage}
                      onChange={(e) => updateCultureMetric(index, 'percentage', parseInt(e.target.value))}
                      placeholder="Percentage"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteCultureMetric(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* CTA Section */}
        <TabsContent value="cta" className="space-y-6">
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

        {/* Application Form */}
        <TabsContent value="form" className="space-y-6">
          <h3 className="text-lg font-semibold">Application Form Settings</h3>
          
          <Card>
            <CardHeader>
              <CardTitle>Form Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Form Title</label>
                <Input
                  value={applicationForm.title}
                  onChange={(e) => setApplicationForm({...applicationForm, title: e.target.value})}
                  placeholder="Form title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Form Subtitle</label>
                <Textarea
                  value={applicationForm.subtitle}
                  onChange={(e) => setApplicationForm({...applicationForm, subtitle: e.target.value})}
                  placeholder="Form subtitle"
                  rows={2}
                />
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
