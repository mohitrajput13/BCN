'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Eye } from "lucide-react";

export function ContactPageCMS() {
  const [heroContent, setHeroContent] = useState({
    title: 'Get in Touch',
    subtitle: 'Ready to start your next project? Let\'s discuss how we can help.',
    primaryCta: 'Send a Message',
    secondaryCta: 'Explore Services'
  });

  const [contactInfo, setContactInfo] = useState([
    {
      id: 1,
      icon: 'MapPin',
      title: 'Address',
      details: 'Business Bay, Dubai, UAE',
      description: 'Visit our office'
    },
    {
      id: 2,
      icon: 'Phone',
      title: 'Phone',
      details: '+971 50 123 4567',
      description: 'Call us anytime'
    },
    {
      id: 3,
      icon: 'Mail',
      title: 'Email',
      details: 'info@blackcubesolutions.com',
      description: 'Send us an email'
    },
    {
      id: 4,
      icon: 'Clock',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'GMT+4 (UAE Time)'
    }
  ]);

  const [subjects, setSubjects] = useState([
    'General Inquiry',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'E-commerce Development',
    'Other'
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      id: 2,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical support. Our support plans are tailored to your specific needs.'
    },
    {
      id: 3,
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Next.js, Node.js, Python, MongoDB, AWS, and more. We choose the best stack for each project\'s requirements.'
    },
    {
      id: 4,
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and can accommodate different time zones.'
    }
  ]);

  const [responseTimes, setResponseTimes] = useState([
    { type: 'Email', time: 'Within 24 hours' },
    { type: 'Phone', time: 'Immediate' },
    { type: 'Live Chat', time: 'Instant' }
  ]);

  const [contactFormSection, setContactFormSection] = useState({
    title: 'Send Us a Message',
    description: 'Have a project in mind? Fill out the form below and we\'ll get back to you within 24 hours.',
    formLabels: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message'
    },
    placeholders: {
      name: 'Enter your full name',
      email: 'Enter your email',
      phone: 'Enter your phone number',
      subject: 'Select a subject',
      message: 'Tell us about your project or inquiry...'
    },
    submitButton: 'Send Message',
    submittingButton: 'Sending...'
  });

  const [mapSection, setMapSection] = useState({
    title: 'Interactive Map',
    location: 'Business Bay, Dubai, UAE'
  });

  const [quickContactSection, setQuickContactSection] = useState({
    title: 'Quick Contact',
    liveChatText: 'Live Chat Available'
  });

  const [responseTimeSection, setResponseTimeSection] = useState({
    title: 'Response Time'
  });

  const [faqSection, setFaqSection] = useState({
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our services and process.'
  });

  const [ctaSection, setCtaSection] = useState({
    title: 'Ready to Start Your Project?',
    description: 'Don\'t wait! Get in touch with us today and let\'s discuss how we can help bring your digital vision to life.',
    primaryCta: 'Start Your Project',
    secondaryCta: 'Schedule a Call'
  });

  const handleSave = () => {
    console.log('Saving contact page content...');
  };

  const addContactInfo = () => {
    const newInfo = {
      id: Date.now(),
      icon: 'MapPin',
      title: 'New Contact',
      details: 'Details',
      description: 'Description'
    };
    setContactInfo([...contactInfo, newInfo]);
  };

  const updateContactInfo = (id: number, field: string, value: string) => {
    setContactInfo(contactInfo.map(info => info.id === id ? { ...info, [field]: value } : info));
  };

  const deleteContactInfo = (id: number) => {
    setContactInfo(contactInfo.filter(info => info.id !== id));
  };

  const addSubject = () => {
    setSubjects([...subjects, 'New Subject']);
  };

  const updateSubject = (index: number, value: string) => {
    const updated = [...subjects];
    updated[index] = value;
    setSubjects(updated);
  };

  const deleteSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const addFaq = () => {
    const newFaq = {
      id: Date.now(),
      question: 'New Question',
      answer: 'New Answer'
    };
    setFaqs([...faqs, newFaq]);
  };

  const updateFaq = (id: number, field: string, value: string) => {
    setFaqs(faqs.map(faq => faq.id === id ? { ...faq, [field]: value } : faq));
  };

  const deleteFaq = (id: number) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const addResponseTime = () => {
    setResponseTimes([...responseTimes, { type: 'New Type', time: 'New Time' }]);
  };

  const updateResponseTime = (index: number, field: string, value: string) => {
    const updated = [...responseTimes];
    updated[index] = { ...updated[index], [field]: value };
    setResponseTimes(updated);
  };

  const deleteResponseTime = (index: number) => {
    setResponseTimes(responseTimes.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Contact Page CMS</h2>
        <Button onClick={handleSave} className="group">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="form">Form</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
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

        {/* Contact Information */}
        <TabsContent value="contact" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <Button onClick={addContactInfo} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Contact Info
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <Card key={info.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>{info.icon}</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteContactInfo(info.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={info.title}
                      onChange={(e) => updateContactInfo(info.id, 'title', e.target.value)}
                      placeholder="Title"
                    />
                    <Input
                      value={info.details}
                      onChange={(e) => updateContactInfo(info.id, 'details', e.target.value)}
                      placeholder="Details"
                    />
                    <Input
                      value={info.description}
                      onChange={(e) => updateContactInfo(info.id, 'description', e.target.value)}
                      placeholder="Description"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Contact Form */}
        <TabsContent value="form" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={contactFormSection.title}
                  onChange={(e) => setContactFormSection({...contactFormSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={contactFormSection.description}
                  onChange={(e) => setContactFormSection({...contactFormSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name Label</label>
                  <Input
                    value={contactFormSection.formLabels.name}
                    onChange={(e) => setContactFormSection({
                      ...contactFormSection, 
                      formLabels: {...contactFormSection.formLabels, name: e.target.value}
                    })}
                    placeholder="Name label"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Label</label>
                  <Input
                    value={contactFormSection.formLabels.email}
                    onChange={(e) => setContactFormSection({
                      ...contactFormSection, 
                      formLabels: {...contactFormSection.formLabels, email: e.target.value}
                    })}
                    placeholder="Email label"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Label</label>
                  <Input
                    value={contactFormSection.formLabels.phone}
                    onChange={(e) => setContactFormSection({
                      ...contactFormSection, 
                      formLabels: {...contactFormSection.formLabels, phone: e.target.value}
                    })}
                    placeholder="Phone label"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject Label</label>
                  <Input
                    value={contactFormSection.formLabels.subject}
                    onChange={(e) => setContactFormSection({
                      ...contactFormSection, 
                      formLabels: {...contactFormSection.formLabels, subject: e.target.value}
                    })}
                    placeholder="Subject label"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message Label</label>
                  <Input
                    value={contactFormSection.formLabels.message}
                    onChange={(e) => setContactFormSection({
                      ...contactFormSection, 
                      formLabels: {...contactFormSection.formLabels, message: e.target.value}
                    })}
                    placeholder="Message label"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Submit Button Text</label>
                  <Input
                    value={contactFormSection.submitButton}
                    onChange={(e) => setContactFormSection({...contactFormSection, submitButton: e.target.value})}
                    placeholder="Submit button text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Submitting Button Text</label>
                  <Input
                    value={contactFormSection.submittingButton}
                    onChange={(e) => setContactFormSection({...contactFormSection, submittingButton: e.target.value})}
                    placeholder="Submitting button text"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Map Section */}
        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Map Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Map Title</label>
                <Input
                  value={mapSection.title}
                  onChange={(e) => setMapSection({...mapSection, title: e.target.value})}
                  placeholder="Map title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Input
                  value={mapSection.location}
                  onChange={(e) => setMapSection({...mapSection, location: e.target.value})}
                  placeholder="Location text"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Contact Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={quickContactSection.title}
                  onChange={(e) => setQuickContactSection({...quickContactSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Live Chat Text</label>
                <Input
                  value={quickContactSection.liveChatText}
                  onChange={(e) => setQuickContactSection({...quickContactSection, liveChatText: e.target.value})}
                  placeholder="Live chat text"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={responseTimeSection.title}
                  onChange={(e) => setResponseTimeSection({...responseTimeSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Response Times</h3>
                <Button onClick={addResponseTime} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Response Time
                </Button>
              </div>
              
              <div className="space-y-2">
                {responseTimes.map((responseTime, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={responseTime.type}
                      onChange={(e) => updateResponseTime(index, 'type', e.target.value)}
                      placeholder="Response type"
                    />
                    <Input
                      value={responseTime.time}
                      onChange={(e) => updateResponseTime(index, 'time', e.target.value)}
                      placeholder="Response time"
                    />
                    <Button size="sm" variant="outline" onClick={() => deleteResponseTime(index)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Form Subjects */}
        <TabsContent value="subjects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Contact Form Subjects</h3>
            <Button onClick={addSubject} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </div>
          
          <div className="space-y-2">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={subject}
                  onChange={(e) => updateSubject(index, e.target.value)}
                  placeholder="Subject"
                />
                <Button size="sm" variant="outline" onClick={() => deleteSubject(index)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
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
                <label className="block text-sm font-medium mb-2">Section Title</label>
                <Input
                  value={faqSection.title}
                  onChange={(e) => setFaqSection({...faqSection, title: e.target.value})}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Section Description</label>
                <Textarea
                  value={faqSection.description}
                  onChange={(e) => setFaqSection({...faqSection, description: e.target.value})}
                  placeholder="Section description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
            <Button onClick={addFaq} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add FAQ
            </Button>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge>FAQ</Badge>
                      <Button size="sm" variant="outline" onClick={() => deleteFaq(faq.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <Input
                      value={faq.question}
                      onChange={(e) => updateFaq(faq.id, 'question', e.target.value)}
                      placeholder="Question"
                    />
                    <Textarea
                      value={faq.answer}
                      onChange={(e) => updateFaq(faq.id, 'answer', e.target.value)}
                      placeholder="Answer"
                      rows={3}
                    />
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
