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
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { companyInfo } from '@/data';
import { defaultContactPageData } from '@/data/contact';
import CubeHero from '@/components/sections/CubeHero';

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get data from CMS
  const contactData = defaultContactPageData;

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

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      MapPin,
      Phone,
      Mail,
      Clock
    };
    return iconMap[iconName as keyof typeof iconMap] || MapPin;
  };


  return (
    <Layout>
      <CubeHero
        variant="contact"
        title={contactData.heroContent.title}
        subtitle={contactData.heroContent.subtitle}
        primaryCta={{ href: '#contact-form', label: contactData.heroContent.primaryCta }}
        secondaryCta={{ href: '/services', label: contactData.heroContent.secondaryCta }}
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {contactData.contactInfo.map((info, index) => {
              const IconComponent = getIconComponent(info.icon);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="text-center h-full group">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-primary-purple transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-primary-blue font-medium mb-2 group-hover:text-primary-purple transition-colors duration-300">
                      {info.details}
                    </p>
                    <p className="text-primary-gray text-sm group-hover:text-white transition-colors duration-300">
                      {info.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
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
              {contactData.contactFormSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {contactData.contactFormSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card hover className="h-full group">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        {contactData.contactFormSection.formLabels.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                        placeholder={contactData.contactFormSection.placeholders.name}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {contactData.contactFormSection.formLabels.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                        placeholder={contactData.contactFormSection.placeholders.email}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {contactData.contactFormSection.formLabels.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                        placeholder={contactData.contactFormSection.placeholders.phone}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {contactData.contactFormSection.formLabels.subject} *
                      </label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                      >
                        <option value="">{contactData.contactFormSection.placeholders.subject}</option>
                        {contactData.subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      {contactData.contactFormSection.formLabels.message} *
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                      placeholder={contactData.contactFormSection.placeholders.message}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? contactData.contactFormSection.submittingButton : contactData.contactFormSection.submitButton}
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
              <Card hover className="h-64 group">
                <div className="h-full bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-xl flex items-center justify-center group-hover:from-primary-blue/30 group-hover:to-primary-purple/30 transition-all duration-300">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-blue mx-auto mb-4 group-hover:text-primary-purple transition-colors duration-300" />
                    <p className="text-primary-gray group-hover:text-white transition-colors duration-300">{contactData.mapSection.title}</p>
                    <p className="text-sm text-primary-gray group-hover:text-primary-blue transition-colors duration-300">{contactData.mapSection.location}</p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card hover className="group">
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                  {contactData.quickContactSection.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-blue group-hover:text-primary-purple transition-colors duration-300" />
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-primary-gray hover:text-primary-blue transition-colors duration-200 group-hover:text-white"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-blue group-hover:text-primary-purple transition-colors duration-300" />
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-primary-gray hover:text-primary-blue transition-colors duration-200 group-hover:text-white"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary-blue group-hover:text-primary-purple transition-colors duration-300" />
                    <span className="text-primary-gray group-hover:text-white transition-colors duration-300">{contactData.quickContactSection.liveChatText}</span>
                  </div>
                </div>
              </Card>

              {/* Response Time */}
              <Card hover className="group">
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                  {contactData.responseTimeSection.title}
                </h3>
                <div className="space-y-3">
                  {contactData.responseTimes.map((responseTime, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue group-hover:text-primary-purple transition-colors duration-300" />
                      <span className="text-primary-gray group-hover:text-white transition-colors duration-300">{responseTime.type}: {responseTime.time}</span>
                    </div>
                  ))}
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
              {contactData.faqSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {contactData.faqSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 card-gap">
            {contactData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full group">
                  <h3 className="text-lg font-semibold text-white mb-3 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-primary-gray group-hover:text-white transition-colors duration-300">
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
            <Card hover className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-2xl p-12 group">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                {contactData.ctaSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                {contactData.ctaSection.description}
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  {contactData.ctaSection.primaryCta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  {contactData.ctaSection.secondaryCta}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
