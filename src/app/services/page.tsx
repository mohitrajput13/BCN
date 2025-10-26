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
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { services } from '@/data';
import { defaultServicesPageData } from '@/data/services';
import CubeHero from '@/components/sections/CubeHero';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Use CMS data
  const servicesData = defaultServicesPageData;

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
      <CubeHero
        variant="services"
        title={servicesData.heroContent.title}
        subtitle={servicesData.heroContent.subtitle}
        primaryCta={{ href: '/contact', label: servicesData.heroContent.primaryCta }}
        secondaryCta={{ href: '/portfolio', label: servicesData.heroContent.secondaryCta }}
      />
      {/* Our Clients - Testimonials */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">{servicesData.clientsSection.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{servicesData.clientsSection.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 card-gap">
            {servicesData.testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Card hover className="h-full group">
                  <div className="flex items-start element-gap">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-primary-blue transition-colors duration-300">{t.name}</div>
                      <div className="text-sm text-primary-gray mb-3 group-hover:text-white transition-colors duration-300">{t.role}</div>
                      <p className="text-primary-gray text-sm leading-relaxed group-hover:text-white transition-colors duration-300">&ldquo;{t.text}&rdquo;</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              <span className="text-primary-blue text-sm tracking-wider">{servicesData.industriesSection.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{servicesData.industriesSection.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 card-gap">
            {servicesData.industries.map((it, i) => (
              <Card key={i} hover className="h-full group">
                <h3 className="text-xl font-semibold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">{it.title}</h3>
                <p className="text-primary-gray text-sm group-hover:text-white transition-colors duration-300">{it.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={servicesData.consultationBanner.image} alt="consult" className="w-full h-[340px] object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="text-sm tracking-widest text-primary-blue mb-2">{servicesData.consultationBanner.subtitle}</div>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white font-montserrat mb-6">{servicesData.consultationBanner.title}</h3>
              <Button className="bg-primary-blue hover:bg-primary-purple">{servicesData.consultationBanner.buttonText}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">{servicesData.faqSection.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{servicesData.faqSection.title}</h2>
          </motion.div>

          <div className="space-y-4">
            {servicesData.faqs.map((f, i) => (
              <div key={i} className="rounded-lg bg-card text-card-foreground shadow-sm hover-glow-card group" style={{ border: 'none', outline: 'none' }}>
                <details className="group" style={{ border: 'none', outline: 'none' }}>
                  <summary 
                    className="cursor-pointer list-none px-6 py-4 flex items-center justify-between hover:bg-primary-slate/20 transition-colors duration-200" 
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                  >
                    <span className="text-white font-medium group-hover:text-primary-blue transition-colors duration-300">{f.q}</span>
                    <ChevronDown className="w-4 h-4 text-primary-gray group-open:rotate-180 transition-transform group-hover:text-primary-blue" />
                  </summary>
                  <div className="px-6 pb-6 text-primary-gray text-sm group-hover:text-white transition-colors duration-300">{f.a}</div>
                </details>
              </div>
            ))}
          </div>
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
                  <Card hover className="h-full group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary-gray mb-4 group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-primary-gray group-hover:text-white transition-colors duration-300">
                            <CheckCircle className="w-4 h-4 text-primary-blue mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
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
              {servicesData.processSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {servicesData.processSection.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {servicesData.processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card hover className="h-full group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{process.icon}</div>
                  <div className="text-2xl font-bold text-primary-blue mb-2 font-montserrat group-hover:text-white transition-colors duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-primary-gray text-sm group-hover:text-white transition-colors duration-300">
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
              {servicesData.techStackSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {servicesData.techStackSection.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 element-gap lg:gap-8">
            {servicesData.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center group"
              >
                <Card hover className="p-6 group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-sm text-primary-gray group-hover:text-white transition-colors duration-300">
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
            {servicesData.packages.map((package_, index) => (
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
                <Card hover className={`h-full group ${package_.popular ? 'border-primary-blue border-2' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                      {package_.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary-blue mb-2 font-montserrat group-hover:text-white transition-colors duration-300">
                      {package_.price}
                    </div>
                    <p className="text-primary-gray mb-6 group-hover:text-white transition-colors duration-300">
                      {package_.description}
                    </p>
                    
                    <ul className="space-y-3 mb-12">
                      {package_.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-primary-gray group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-primary-blue mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
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
            <Card hover className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 p-12 group">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                {servicesData.ctaSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                {servicesData.ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  {servicesData.ctaSection.primaryCta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  {servicesData.ctaSection.secondaryCta}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
