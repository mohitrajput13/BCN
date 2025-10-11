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
  Phone,
  Calendar
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { jobPostings, companyInfo } from '@/data';

const CareerPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-purple/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-gray mb-12 max-w-4xl mx-auto">
              Be part of a dynamic team that's shaping the future of digital transformation. 
              Explore exciting career opportunities with us.
            </p>
          </motion.div>
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              We offer a collaborative environment where innovation thrives and your career can flourish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {[
              {
                icon: Briefcase,
                title: 'Exciting Projects',
                description: 'Work on cutting-edge projects that challenge and inspire you to grow professionally.'
              },
              {
                icon: User,
                title: 'Growth Opportunities',
                description: 'Continuous learning and development opportunities to advance your career.'
              },
              {
                icon: CheckCircle,
                title: 'Work-Life Balance',
                description: 'Flexible working hours and remote work options to maintain a healthy balance.'
              },
              {
                icon: DollarSign,
                title: 'Competitive Benefits',
                description: 'Attractive salary packages and comprehensive benefits for all employees.'
              },
              {
                icon: Calendar,
                title: 'Team Events',
                description: 'Regular team building activities and company events to foster collaboration.'
              },
              {
                icon: Mail,
                title: 'Mentorship',
                description: 'Learn from experienced professionals and get guidance for your career growth.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-gray">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
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
              Current Openings
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career aspirations.
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
                <Card hover className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center element-gap mb-4">
                        <h3 className="text-2xl font-bold text-white font-montserrat">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-sm rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-primary-purple/20 text-primary-purple text-sm rounded-full">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-8 mb-4 text-primary-gray">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                        </div>
                        {job.salary && (
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-primary-gray mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.slice(0, 3).map((requirement, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded"
                          >
                            {requirement}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded">
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a1f2e] border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white font-montserrat">
                Job Application
              </h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-primary-gray hover:text-white transition-colors duration-200"
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
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                  className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                  className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-primary-blue file:text-white hover:file:bg-primary-blue/90"
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
                  className="w-full px-4 py-3 bg-primary-black/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                Our Culture
              </h2>
              <p className="text-xl text-primary-gray mb-12">
                We foster a culture of innovation, collaboration, and continuous learning. 
                Our team is our greatest asset, and we invest in their growth and success.
              </p>
              
              <div className="space-y-6">
                {[
                  'Open and transparent communication',
                  'Flexible work arrangements',
                  'Regular team building activities',
                  'Professional development opportunities',
                  'Innovation and creativity encouraged',
                  'Diverse and inclusive environment'
                ].map((item, index) => (
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
              <div className="bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                    95%
                  </div>
                  <div className="text-primary-gray mb-4">Employee Satisfaction</div>
                  <div className="text-sm text-primary-gray mb-6">Based on annual surveys</div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Work Environment', percentage: 98 },
                      { label: 'Growth Opportunities', percentage: 92 },
                      { label: 'Team Collaboration', percentage: 95 },
                      { label: 'Management Support', percentage: 90 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm text-primary-gray mb-1">
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
              </div>
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
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  Send Your Resume
                  <FileText className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact HR Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
