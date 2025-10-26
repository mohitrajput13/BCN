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
import { Card } from '@/components/ui/Card';
// import { teamMembers, companyInfo } from '@/data';
import { defaultAboutPageData } from '@/data/about';
import CubeHero from '@/components/sections/CubeHero';

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use CMS data
  const aboutData = defaultAboutPageData;
  const milestones = aboutData.milestones;
  const values = aboutData.values.map(value => ({
    icon: value.icon === 'Target' ? Target : value.icon === 'Eye' ? Eye : Heart,
    title: value.title,
    description: value.description,
  }));

  return (
    <Layout>
      <CubeHero
        variant="about"
        title={aboutData.heroContent.title}
        subtitle={aboutData.heroContent.subtitle}
        primaryCta={{ href: '/contact', label: aboutData.heroContent.primaryCta }}
        secondaryCta={{ href: '/services', label: aboutData.heroContent.secondaryCta }}
      />

      {/* Company Stats */}
      <section className="bg-primary-slate/30 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 card-gap text-center">
            {aboutData.companyStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2 font-montserrat">{s.number}</div>
                <div className="text-primary-gray">{s.label}</div>
              </motion.div>
            ))}
          </div>
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
                <Card hover className="h-full text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-primary-gray leading-relaxed group-hover:text-white transition-colors duration-300">
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
              {aboutData.journeySection.title}
            </h2>
            <p className="text-lg md:text-xl text-primary-gray max-w-3xl mx-auto px-4">
              {aboutData.journeySection.subtitle}
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
                    <Card hover className="group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-blue font-montserrat group-hover:text-white transition-colors duration-300">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-primary-gray group-hover:text-white transition-colors duration-300">
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
                  
                  <Card hover className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-bold text-primary-blue font-montserrat mb-1 group-hover:text-white transition-colors duration-300">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-primary-gray text-sm group-hover:text-white transition-colors duration-300">
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

      {/* Clients / Partners */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">{aboutData.clientsSection.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">{aboutData.clientsSection.title}</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {aboutData.clientLogos.map((logo, i) => (
              <Card key={i} hover className="h-full group">
                <div className="h-20 flex items-center justify-center">
                  <img src={logo} alt={`Client ${i + 1}`} className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
              </Card>
            ))}
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
              {aboutData.teamSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {aboutData.teamSection.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {aboutData.teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="text-center h-full group">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-blue mb-4 font-medium group-hover:text-white transition-colors duration-300">
                    {member.position}
                  </p>
                  <p className="text-primary-gray text-sm mb-6 group-hover:text-white transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200 group-hover:scale-110 transform"
                      >
                        <Users className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200 group-hover:scale-110 transform"
                      >
                        <Award className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-gray hover:text-primary-blue transition-colors duration-200 group-hover:scale-110 transform"
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
                {aboutData.whyChooseUsSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12">
                {aboutData.whyChooseUsSection.subtitle}
              </p>
              
              <div className="space-y-6">
                {aboutData.whyChooseUs.map((item, index) => (
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
              <Card hover className="bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 p-8 group">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                    {aboutData.whyChooseUsSection.stats.satisfactionRate}
                  </div>
                  <div className="text-primary-gray mb-4 group-hover:text-white transition-colors duration-300">{aboutData.whyChooseUsSection.stats.satisfactionLabel}</div>
                  <div className="text-sm text-primary-gray mb-6 group-hover:text-white transition-colors duration-300">{aboutData.whyChooseUsSection.stats.satisfactionSubtext}</div>
                  
                  <div className="space-y-4">
                    {aboutData.whyChooseUsSection.stats.metrics.map((item, index) => (
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
              </Card>
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
            <Card hover className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 p-12 group">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                {aboutData.ctaSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                {aboutData.ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  {aboutData.ctaSection.primaryCta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  {aboutData.ctaSection.secondaryCta}
                </Button>
              </div>
              </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
