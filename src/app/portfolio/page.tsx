'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe,
  ExternalLink,
  Filter,
  Search,
  Calendar,
  User,
  Code
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { portfolioItems } from '@/data';

const PortfolioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Website', 'Mobile App', 'Web App', 'E-commerce'];

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-primary-gray mb-12 max-w-4xl mx-auto">
              Explore our collection of successful projects and see how we've helped businesses transform digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
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
                No projects found
              </h3>
              <p className="text-primary-gray">
                Try adjusting your search or filter criteria.
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
              Project Statistics
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some impressive numbers from our portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 card-gap">
            {[
              { number: '150+', label: 'Projects Completed', icon: '🎯' },
              { number: '50+', label: 'Happy Clients', icon: '😊' },
              { number: '98%', label: 'Success Rate', icon: '✅' },
              { number: '24/7', label: 'Support Available', icon: '🛠️' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="h-full">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2 font-montserrat">
                    {stat.number}
                  </div>
                  <div className="text-primary-gray">{stat.label}</div>
                </Card>
              </motion.div>
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
              Featured Projects
            </h2>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Take a closer look at some of our most successful and innovative projects.
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
                  <Card className="h-full">
                    <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-xl mb-6 flex items-center justify-center">
                      <Globe className="w-16 h-16 text-primary-blue" />
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

                    <h3 className="text-3xl font-bold text-white font-montserrat">
                      {item.title}
                    </h3>

                    <p className="text-lg text-primary-gray leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-slate/50 text-primary-gray text-sm rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Client:</h4>
                        <p className="text-primary-gray">{item.client}</p>
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
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-gray mb-12 max-w-3xl mx-auto">
                Let's work together to create something amazing. Contact us today to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row element-gap justify-center">
                <Button size="lg" className="group">
                  Start Your Project
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
