'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe,
  ExternalLink,
  Filter,
  Search,
  // Calendar,
  User
  // Code
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { portfolioItems } from '@/data';
import { defaultPortfolioPageData } from '@/data/portfolio';
import CubeHero from '@/components/sections/CubeHero';

const PortfolioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get data from CMS
  const portfolioData = defaultPortfolioPageData;
  const categories = portfolioData.categories;

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <CubeHero
        variant="portfolio"
        title={portfolioData.heroContent.title}
        subtitle={portfolioData.heroContent.subtitle}
        primaryCta={{ href: '/contact', label: portfolioData.heroContent.primaryCta }}
        secondaryCta={{ href: '/services', label: portfolioData.heroContent.secondaryCta }}
      />

      {/* Filter and Search Section */}
      <section className="py-8 bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray w-5 h-5" />
              <input
                type="text"
                placeholder={portfolioData.searchSection.placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-slate/50 border border-primary-slate/30 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center section-padding"
            >
              <Filter className="w-16 h-16 text-primary-gray mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 font-montserrat">
                {portfolioData.searchSection.noResultsTitle}
              </h3>
              <p className="text-primary-gray">
                {portfolioData.searchSection.noResultsDescription}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full group">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                      <Globe className="w-12 h-12 text-primary-blue" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="group">
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full">
                          {item.category}
                        </span>
                        {item.featured && (
                          <span className="px-3 py-1 bg-primary-purple/20 text-primary-purple text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-blue transition-colors duration-200 font-montserrat">
                        {item.title}
                      </h3>

                      <p className="text-primary-gray text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-slate/50 text-primary-gray text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-primary-slate/30">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-primary-gray" />
                          <span className="text-sm text-primary-gray">{item.client}</span>
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-blue hover:text-primary-purple transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              {portfolioData.statsSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {portfolioData.statsSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 card-gap">
            {portfolioData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card hover className="h-full group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2 font-montserrat group-hover:text-primary-purple transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-primary-gray group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{portfolioData.relatedProjectsSection.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {portfolioData.relatedProjects.map((p, i) => (
              <Card key={i} hover className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white text-2xl font-semibold">{p.title}</h4>
                    <div className="text-xs text-primary-gray">{p.tag}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Results */}
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">{portfolioData.processSection.title}</h2>
          <div className="space-y-6 text-primary-gray leading-relaxed">
            <p>
              {portfolioData.processSection.description1}
            </p>
            <p>
              {portfolioData.processSection.description2}
            </p>
          </div>
          <div className="mt-8 border-t border-primary-slate/40 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.processFeatures.map((f, i) => (
              <Card key={i} hover className="text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <div className="text-white font-medium group-hover:text-primary-blue transition-colors duration-300">{f.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works + Quote + Dual images */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">{portfolioData.howItWorksSection.title}</h2>
          <p className="text-primary-gray leading-relaxed mb-8">
            {portfolioData.howItWorksSection.description}
          </p>
          <Card hover className="mb-10 group">
            <div className="text-5xl text-primary-purple mb-4 group-hover:text-primary-blue transition-colors duration-300">&ldquo;</div>
            <p className="text-white text-2xl mb-2 font-montserrat group-hover:text-primary-blue transition-colors duration-300">
              {portfolioData.howItWorksSection.quote}
            </p>
            <div className="text-primary-gray text-sm group-hover:text-white transition-colors duration-300">{portfolioData.howItWorksSection.quoteAuthor}</div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover className="overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1573496527892-904f09cd6d1b?auto=format&fit=crop&w=1400&q=60" alt="work-1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </Card>
            <Card hover className="overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=60" alt="work-2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </Card>
          </div>
        </div>
      </section>

      {/* Project Meta strip */}
      <section className="py-10 bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'PUBLISHED:', value: portfolioData.projectMetaSection.published },
            { label: 'CATEGORY:', value: portfolioData.projectMetaSection.category },
            { label: 'CLIENT:', value: portfolioData.projectMetaSection.client },
          ].map((m, i) => (
            <Card key={i} hover className="group">
              <div className="text-primary-gray text-sm tracking-widest group-hover:text-primary-blue transition-colors duration-300">{m.label}</div>
              <div className="text-white text-lg group-hover:text-primary-purple transition-colors duration-300">{m.value}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Case Studies grid with tabs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center mb-3">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">{portfolioData.caseStudiesSection.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">{portfolioData.caseStudiesSection.title}</h2>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mb-10">
            {portfolioData.caseStudiesSection.tabs.map((t, i) => (
              <button key={i} className={`pb-2 text-primary-gray hover:text-white transition-colors ${i===0 ? 'text-white border-b-2 border-primary-purple' : ''}`}>{t}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.caseStudyProjects.map((p, i) => (
              <Card key={i} hover className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-primary-slate/80 rounded p-4 inline-flex items-center">
                      <div>
                        <div className="text-white font-semibold">{p.title}</div>
                        <div className="text-xs text-primary-gray">{p.tag}</div>
                      </div>
                      <div className="ml-4">
                        <Button size="sm" variant="outline">Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
              {portfolioData.featuredProjectsSection.title}
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              {portfolioData.featuredProjectsSection.description}
            </p>
          </motion.div>

          <div className="space-y-12">
            {portfolioItems.filter(item => item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 card-gap items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card hover className="h-full group">
                    <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-xl mb-6 flex items-center justify-center group-hover:from-primary-blue/30 group-hover:to-primary-purple/30 transition-all duration-300">
                      <Globe className="w-16 h-16 text-primary-blue group-hover:text-primary-purple group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-primary-blue/20 text-primary-blue text-sm rounded-full">
                        {item.category}
                      </span>
                      <span className="px-4 py-2 bg-primary-purple/20 text-primary-purple text-sm rounded-full">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white font-montserrat group-hover:text-primary-blue transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-lg text-primary-gray leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2 group-hover:text-primary-blue transition-colors duration-300">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded group-hover:bg-primary-blue/20 group-hover:text-primary-blue transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2 group-hover:text-primary-blue transition-colors duration-300">Client:</h4>
                        <p className="text-primary-gray group-hover:text-white transition-colors duration-300">{item.client}</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="group">
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline">
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>
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
                {portfolioData.ctaSection.title}
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                {portfolioData.ctaSection.description}
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  {portfolioData.ctaSection.primaryCta}
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  {portfolioData.ctaSection.secondaryCta}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
