'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Send,
  FileText,
  User,
  Mail,
  // Phone,
  Calendar
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { jobPostings } from '@/data';
import { defaultCareerPageData } from '@/data/career';
import CubeHero from '@/components/sections/CubeHero';

const CareerPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get data from CMS
  const careerData = defaultCareerPageData;

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationForm(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', applicationForm);
    alert('Application submitted successfully! We will get back to you soon.');
    setShowApplicationForm(false);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  const openApplicationForm = (jobId: string) => {
    setSelectedJob(jobId);
    setApplicationForm(prev => ({
      ...prev,
      position: jobPostings.find(job => job.id === jobId)?.title || ''
    }));
    setShowApplicationForm(true);
  };

  const openGeneralApplication = () => {
    setSelectedJob(null);
    setApplicationForm(prev => ({
      ...prev,
      position: ''
    }));
    setShowApplicationForm(true);
  };

  return (
    <Layout>
      <CubeHero
        variant="career"
        title={careerData.heroContent.title}
        subtitle={careerData.heroContent.subtitle}
        primaryCta={{ href: '#openings', label: careerData.heroContent.primaryCta }}
        secondaryCta={{ href: '/contact', label: careerData.heroContent.secondaryCta }}
      />

      {/* Quick Facts */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 card-gap">
            {careerData.quickFacts.map((fact, i) => (
              <Card key={i} hover className="h-full group">
                <div className="text-primary-gray mb-2 group-hover:text-primary-blue transition-colors duration-300">{fact.label}:</div>
                <div className="text-white text-xl font-semibold group-hover:text-primary-purple transition-colors duration-300">{fact.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              {careerData.whyWorkWithUsSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {careerData.whyWorkWithUsSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {careerData.benefits.map((benefit, index) => {
              let IconComponent = Briefcase; // Default icon
              
              switch (benefit.icon) {
                case 'User':
                  IconComponent = User;
                  break;
                case 'CheckCircle':
                  IconComponent = CheckCircle;
                  break;
                case 'DollarSign':
                  IconComponent = DollarSign;
                  break;
                case 'Calendar':
                  IconComponent = Calendar;
                  break;
                case 'Mail':
                  IconComponent = Mail;
                  break;
                default:
                  IconComponent = Briefcase;
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-primary-purple transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-primary-gray group-hover:text-white transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-montserrat">{careerData.progressBarsSection.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {careerData.progressBarsSection.skills.map((row, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-primary-gray mb-2">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="w-full bg-primary-slate/50 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-blue to-primary-purple h-2 rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {careerData.progressBarsSection.circularSkills.map((ring, i) => (
                <Card key={i} hover className="h-full flex items-center justify-center p-8 group">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" className="text-primary-slate" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="45" stroke="url(#grad)" strokeWidth="10" strokeDasharray={`${2 * Math.PI * 45}`} strokeDashoffset={`${(1 - ring.pct / 100) * 2 * Math.PI * 45}`} strokeLinecap="round" fill="none" />
                        <defs>
                          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#00D4FF" />
                            <stop offset="100%" stopColor="#7A5AF8" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold group-hover:text-primary-blue transition-colors duration-300">{ring.pct}%</div>
                    </div>
                    <div className="text-primary-gray group-hover:text-white transition-colors duration-300">{ring.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Form */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-10">
          <div className="inline-flex items-center mb-3">
            <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
            <span className="text-primary-blue text-sm tracking-wider">{careerData.applyNowSection.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{careerData.applyNowSection.title}</h2>
          <p className="text-primary-gray mt-3">{careerData.applyNowSection.description}</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card hover className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-primary-blue/30 to-primary-purple/40 group">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-primary-gray focus:outline-none" placeholder="Your Name *" />
              <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-primary-gray focus:outline-none" placeholder="Your Email *" />
              <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-primary-gray focus:outline-none md:col-span-2" placeholder="Your Phone *" />
              <textarea className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-primary-gray focus:outline-none md:col-span-2" placeholder="Tell about your skills" rows={6} />
              <div className="md:col-span-2">
                <label className="block text-white text-left mb-2">Upload Your Portfolio Here</label>
                <input type="file" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-primary-blue file:text-white hover:file:bg-primary-blue/90" />
              </div>
              <div className="md:col-span-2 text-left text-primary-gray text-sm">
                <input type="checkbox" className="mr-2 align-middle" />{careerData.applyNowSection.checkboxText}
              </div>
              <div className="md:col-span-2">
                <Button className="group" onClick={(e) => { e.preventDefault(); openGeneralApplication(); }}>
                  {careerData.applyNowSection.buttonText}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Checklist */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">{careerData.checklistSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {careerData.checklistSection.items.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-gray">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {careerData.checklistSection.items.slice(4).map((item, i) => (
                <div key={i + 4} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-primary-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section ref={ref} className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              {careerData.jobOpeningsSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {careerData.jobOpeningsSection.description}
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobPostings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="p-8 group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center element-gap mb-4">
                        <h3 className="text-2xl font-bold text-white font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-sm rounded-full group-hover:bg-primary-blue/30 transition-colors duration-300">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-primary-purple/20 text-primary-purple text-sm rounded-full group-hover:bg-primary-purple/30 transition-colors duration-300">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-8 mb-4 text-primary-gray">
                        <div className="flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                          <MapPin className="w-4 h-4 group-hover:text-primary-blue transition-colors duration-300" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                          <Clock className="w-4 h-4 group-hover:text-primary-blue transition-colors duration-300" />
                          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                        </div>
                        {job.salary && (
                          <div className="flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                            <DollarSign className="w-4 h-4 group-hover:text-primary-blue transition-colors duration-300" />
                            <span>{job.salary}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-primary-gray mb-4 group-hover:text-white transition-colors duration-300">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.slice(0, 3).map((requirement, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded group-hover:bg-primary-blue/20 group-hover:text-primary-blue transition-all duration-300"
                          >
                            {requirement}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded group-hover:bg-primary-blue/20 group-hover:text-primary-blue transition-all duration-300">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => openApplicationForm(job.id)}
                        className="group"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-primary-black border border-primary-slate/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white font-montserrat">
                Job Application
              </h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-slate/50 hover:bg-primary-slate/70 text-primary-gray hover:text-white transition-all duration-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
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
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                    placeholder="Position you're applying for"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-primary-blue file:text-white hover:file:bg-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <div className="flex flex-col sm:flex-row element-gap pt-6">
                <Button type="submit" size="lg" className="group flex-1">
                  Submit Application
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Company Culture */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                {careerData.companyCultureSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12">
                {careerData.companyCultureSection.description}
              </p>
              
              <div className="space-y-6">
                {careerData.companyCulture.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                    <span className="text-primary-gray text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card hover className="bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 rounded-2xl p-8 group">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                      {careerData.companyCultureSection.satisfactionPercentage}
                    </div>
                    <div className="text-primary-gray mb-4 group-hover:text-white transition-colors duration-300">{careerData.companyCultureSection.satisfactionLabel}</div>
                    <div className="text-sm text-primary-gray mb-6 group-hover:text-primary-blue transition-colors duration-300">{careerData.companyCultureSection.satisfactionSubtext}</div>
                  
                  <div className="space-y-4">
                    {careerData.companyCultureSection.metrics.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm text-primary-gray mb-1 group-hover:text-white transition-colors duration-300">
                          <span>{item.label}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-primary-slate/50 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-blue to-primary-purple h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
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
                {careerData.ctaSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                {careerData.ctaSection.description}
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group" onClick={openGeneralApplication}>
                  {careerData.ctaSection.primaryCta}
                  <FileText className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  {careerData.ctaSection.secondaryCta}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
