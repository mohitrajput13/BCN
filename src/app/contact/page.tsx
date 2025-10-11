'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { companyInfo } from '@/data';

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: companyInfo.address,
      description: 'Visit our office'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: companyInfo.phone,
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      details: companyInfo.email,
      description: 'Send us an email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'GMT+4 (UAE Time)'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'E-commerce Development',
    'Other'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-purple/10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-primary-gray mb-12 max-w-4xl mx-auto">
              Ready to start your next project? We'd love to hear from you. 
              Get in touch with us today and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                    {info.title}
                  </h3>
                  <p className="text-primary-blue font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-primary-gray text-sm">
                    {info.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section ref={ref} className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Send Us a Message
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="h-64">
                <div className="h-full bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                    <p className="text-primary-gray">Interactive Map</p>
                    <p className="text-sm text-primary-gray">Business Bay, Dubai, UAE</p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card>
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-blue" />
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-blue" />
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary-blue" />
                    <span className="text-primary-gray">Live Chat Available</span>
                  </div>
                </div>
              </Card>

              {/* Response Time */}
              <Card>
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                  Response Time
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue" />
                    <span className="text-primary-gray">Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue" />
                    <span className="text-primary-gray">Phone: Immediate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue" />
                    <span className="text-primary-gray">Live Chat: Instant</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 card-gap">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical support. Our support plans are tailored to your specific needs.'
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern technologies including React, Next.js, Node.js, Python, MongoDB, AWS, and more. We choose the best stack for each project\'s requirements.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and can accommodate different time zones.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after understanding your requirements.'
              },
              {
                question: 'Do you offer maintenance services?',
                answer: 'Yes, we provide ongoing maintenance, updates, security patches, and performance optimization to keep your project running smoothly.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-white mb-3 font-montserrat">
                    {faq.question}
                  </h3>
                  <p className="text-primary-gray">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto">
                Don't wait! Get in touch with us today and let's discuss how we can help 
                bring your digital vision to life.
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
