'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { teamMembers, companyInfo } from '@/data';

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform businesses digitally' },
    { year: '2020', title: 'First Major Project', description: 'Delivered our first enterprise-level web application' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to 15+ skilled professionals' },
    { year: '2022', title: 'Award Recognition', description: 'Received Best IT Solutions Provider award' },
    { year: '2023', title: 'Global Reach', description: 'Expanded services to international markets' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered solutions for clients' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses through innovative technology solutions that drive growth and success in the digital age.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading digital transformation partner for businesses worldwide, recognized for excellence and innovation.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'We believe in integrity, innovation, collaboration, and delivering exceptional value to our clients.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-purple/10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold  inline-block">
                Black Cube Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-gray mb-12 max-w-4xl mx-auto">
              We are a leading IT solutions provider based in Dubai, UAE, dedicated to empowering 
              businesses through innovative technology and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 card-gap">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-montserrat">
                    {value.title}
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-montserrat">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-primary-gray max-w-3xl mx-auto px-4">
              From humble beginnings to becoming a trusted partner for businesses worldwide.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-purple"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-blue font-montserrat">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                            {milestone.title}
                          </h3>
                          <p className="text-primary-gray">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-blue rounded-full border-4 border-primary-black flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="relative md:hidden">
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-purple"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3 w-6 h-6 bg-primary-blue rounded-full border-4 border-primary-black flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <Card>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-bold text-primary-blue font-montserrat mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                          {milestone.title}
                        </h3>
                        <p className="text-primary-gray text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Meet Our Team
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-primary-blue mb-4 font-medium">
                    {member.position}
                  </p>
                  <p className="text-primary-gray text-sm mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                      >
                        <Users className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                      >
                        <Award className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Why Choose Black Cube Solutions?
              </h2>
              <p className="text-xl text-primary-gray mb-12">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              
              <div className="space-y-6">
                {[
                  '15+ Years of Combined Experience',
                  '50+ Successful Projects Delivered',
                  '24/7 Customer Support',
                  'Cutting-edge Technology Stack',
                  'Agile Development Methodology',
                  'Competitive Pricing'
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

              <div className="mt-8">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
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
                    98%
                  </div>
                  <div className="text-primary-gray mb-4">Client Satisfaction Rate</div>
                  <div className="text-sm text-primary-gray mb-6">Based on 50+ completed projects</div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Project Delivery', percentage: 100 },
                      { label: 'Code Quality', percentage: 98 },
                      { label: 'Client Communication', percentage: 95 },
                      { label: 'Support Response', percentage: 100 },
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto">
                Let's discuss your project and see how we can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
