'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { services } from '@/data';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedService, setExpandedService] = useState<string | null>(null);

  const iconMap = {
    Globe,
    Smartphone,
    Palette,
    TrendingUp,
    Cloud,
    ShoppingCart,
  };

  const serviceCategories = [
    'All',
    'Development',
    'Design',
    'Marketing',
    'Infrastructure',
    'E-commerce'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <Layout>
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-gray mb-12 max-w-4xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the modern world.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-8 bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center element-gap">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-blue text-white'
                    : 'bg-primary-slate/50 text-primary-gray hover:bg-primary-blue/20 hover:text-primary-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const isExpanded = expandedService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">
                        {service.title}
                      </h3>
                      <p className="text-primary-gray mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-primary-gray">
                            <CheckCircle className="w-4 h-4 text-primary-blue mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {service.features.length > 3 && (
                        <button
                          onClick={() => setExpandedService(isExpanded ? null : service.id)}
                          className="flex items-center justify-center w-full text-primary-blue hover:text-primary-purple transition-colors duration-200 mb-4"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronUp className="w-4 h-4 ml-1" />
                            </>
                          ) : (
                            <>
                              Show More
                              <ChevronDown className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </button>
                      )}

                      <Button variant="outline" size="sm" className="w-full group">
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Our Process
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {[
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
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="h-full">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-2xl font-bold text-primary-blue mb-2 font-montserrat">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">
                    {process.title}
                  </h3>
                  <p className="text-primary-gray text-sm">
                    {process.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Technology Stack
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build robust, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 element-gap lg:gap-8">
            {[
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
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center group"
              >
                <Card hover className="p-6">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors duration-200">
                    {tech.name}
                  </div>
                  <div className="text-sm text-primary-gray">
                    {tech.category}
                  </div>
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
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              Service Packages
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Choose the package that best fits your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 card-gap">
            {[
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
            ].map((package_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {package_.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${package_.popular ? 'border-primary-blue border-2' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                      {package_.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary-blue mb-2 font-montserrat">
                      {package_.price}
                    </div>
                    <p className="text-primary-gray mb-6">
                      {package_.description}
                    </p>
                    
                    <ul className="space-y-3 mb-12">
                      {package_.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-primary-gray">
                          <CheckCircle className="w-4 h-4 text-primary-blue mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={package_.popular ? 'primary' : 'outline'} 
                      size="lg" 
                      className="w-full group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto">
                Let's discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
