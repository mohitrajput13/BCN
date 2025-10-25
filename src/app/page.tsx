'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  Cloud,
  Code,
  Palette,
  ChevronLeft,
  ChevronRight,
  Send,
  Calendar,
  User,
  Target,
  RefreshCw,
  Search,
  Mic,
  MessageSquare,
  Layers,
  Sparkles
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HomePage = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroTimerRef = useRef<number | null>(null);

  const [heroSlides, setHeroSlides] = useState([
    {
      titleLine1: 'SOFTWARE IT',
      titleLine2: 'OUTSOURCING',
      subtitle:
        'We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.',
      ctaPrimary: 'Learn More',
      ctaSecondary: 'All Services',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    },
    {
      titleLine1: 'We Deliver Solution',
      titleLine2: 'with Trusting Relationships',
      subtitle:
        'Our experienced team stands out with clear and effective processes, on-time delivery and a strong partnership mindset.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'View Projects',
      image:
        'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?auto=format&fit=crop&w=1400&q=80',
    },
    {
      titleLine1: 'DEVELOPMENT',
      titleLine2: 'EXPERTS',
      subtitle:
        'From web to mobile and cloud – we build scalable, modern solutions tailored to your business goals.',
      ctaPrimary: 'Get a Quote',
      ctaSecondary: 'Our Company',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    },
  ]);

  const [servicesData, setServicesData] = useState([
    {
      id: 'development',
      title: 'Software Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      icon: 'Code',
    },
    {
      id: 'design',
      title: 'Web Design',
      description: 'Beautiful, responsive designs that engage users and drive conversions.',
      icon: 'Palette',
    },
    {
      id: 'cloud',
      title: 'Cloud Integration',
      description: 'Seamless cloud migration and integration services for scalable solutions.',
      icon: 'Cloud',
    },
  ]);

  const [testimonialsData, setTestimonialsData] = useState([
    {
      name: 'Machel Pildium',
      handle: '@machel',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Abram Lipshutz',
      handle: '@abram',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Cristofer',
      handle: '@cristofer',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    },
  ]);

  const [blogsData, setBlogsData] = useState([
    {
      title: 'Revolution in Content Creation and Communication',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      author: 'Alex Demo',
      date: '25 Mar, 2025',
    },
    {
      title: 'How AI Writing Tools Empower Writers to Speed up their Writing',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Engineering',
      author: 'Hendary Jonson',
      date: '12 Feb, 2025',
    },
    {
      title: 'Revolution in Content Creation and Communication',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      author: 'Piter Mecraow',
      date: '10 Jan, 2025',
    },
  ]);

  useEffect(() => {
    fetch('/api/cms/hero').then(async (r) => {
      if (r.ok) {
        const j = await r.json();
        if (j?.data?.slides) setHeroSlides(j.data.slides);
      }
    }).catch(() => {});

    fetch('/api/cms/services').then(async (r) => {
      if (r.ok) {
        const j = await r.json();
        if (j?.data?.services) setServicesData(j.data.services);
      }
    }).catch(() => {});

    fetch('/api/cms/testimonials').then(async (r) => {
      if (r.ok) {
        const j = await r.json();
        if (j?.data?.testimonials) setTestimonialsData(j.data.testimonials);
      }
    }).catch(() => {});

    fetch('/api/cms/blogs').then(async (r) => {
      if (r.ok) {
        const j = await r.json();
        if (j?.data?.blogs) setBlogsData(j.data.blogs);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isHovered) return;
    heroTimerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (heroTimerRef.current) window.clearInterval(heroTimerRef.current);
    };
  }, [heroSlides.length, isHovered, prefersReducedMotion]);

  const tiltRef = useRef<HTMLDivElement | null>(null);
  const handleCubeMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = tiltRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = -((y / rect.height) - 0.5) * 18; 
    target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleCubeMouseLeave = () => {
    const target = tiltRef.current;
    if (target) target.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <motion.line
              x1="100" y1="200" x2="900" y2="200"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.line
              x1="100" y1="400" x2="900" y2="400"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.line
              x1="100" y1="600" x2="900" y2="600"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.line
              x1="100" y1="800" x2="900" y2="800"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />
            <motion.line
              x1="200" y1="100" x2="200" y2="900"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.line
              x1="500" y1="100" x2="500" y2="900"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <motion.line
              x1="800" y1="100" x2="800" y2="900"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.7 }}
            />
            {[
              { x: 200, y: 200 }, { x: 500, y: 200 }, { x: 800, y: 200 },
              { x: 200, y: 400 }, { x: 500, y: 400 }, { x: 800, y: 400 },
              { x: 200, y: 600 }, { x: 500, y: 600 }, { x: 800, y: 600 },
              { x: 200, y: 800 }, { x: 500, y: 800 }, { x: 800, y: 800 }
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x} cy={node.y} r="4"
                fill="url(#gradient2)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#00A8CC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                      <motion.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="inline-flex items-center mb-6"
                        >
                          <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
                          <span className="text-primary-blue text-sm font-medium tracking-wider">KEY FEATURES</span>
                        </motion.div>

                        <motion.h1
                          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat leading-tight"
                        >
                          {slide.titleLine1}
                          <span className="text-white block bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                            {slide.titleLine2}
                          </span>
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-xl text-primary-gray mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                          {slide.subtitle}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                          <Button size="lg" className="group bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-primary-blue">
                            <Sparkles className="mr-2 w-5 h-5" />
                            {slide.ctaPrimary}
                          </Button>
                          <Button variant="outline" size="lg" className="border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10">
                            {slide.ctaSecondary}
                          </Button>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-96 lg:h-[500px] flex items-center justify-center"
                      >
                        <div className="[perspective:1000px]">
                          <div
                            ref={tiltRef}
                            onMouseMove={handleCubeMouseMove}
                            onMouseLeave={handleCubeMouseLeave}
                            className="relative [transform-style:preserve-3d] transition-transform duration-75"
                            style={{ width: 220, height: 220 }}
                          >
                            <motion.div
                              className="absolute inset-0 [transform-style:preserve-3d]"
                              animate={prefersReducedMotion ? {} : { rotateX: 360, rotateY: 360, rotateZ: 360 }}
                              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                            >
                              {['front','back','right','left','top','bottom'].map((face) => {
                                const transforms: Record<string, string> = {
                                  front: 'rotateY(0deg) translateZ(110px)',
                                  back: 'rotateY(180deg) translateZ(110px)',
                                  right: 'rotateY(90deg) translateZ(110px)',
                                  left: 'rotateY(-90deg) translateZ(110px)',
                                  top: 'rotateX(90deg) translateZ(110px)',
                                  bottom: 'rotateX(-90deg) translateZ(110px)'
                                };
                                return (
                                  <div
                                    key={face}
                                    className="absolute flex items-center justify-center text-sm sm:text-base lg:text-2xl font-semibold text-primary-blue border-2 border-primary-blue bg-primary-blue/5"
                                    style={{
                                      width: 220,
                                      height: 220,
                                      transform: transforms[face],
                                      backfaceVisibility: 'visible'
                                    }}
                                  >
                                    Black Cube
                                  </div>
                                );
                              })}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                    </div>
                  </div>
                ))}
              </motion.div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-slate/60 hover:bg-primary-slate/80 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-slate/60 hover:bg-primary-slate/80 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary-blue' : 'bg-primary-slate/60'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 card-gap">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2 font-montserrat">
                  {stat.number}
                </div>
                <div className="text-primary-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-blue mr-2" />
              <span className="text-sm font-medium text-primary-blue">Some of Main Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Key Features of Our Tool
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Intelligent Writing Assistance',
                description: 'Our AI writing tool analyzes your content, suggests improvements, and helps you create compelling copy that resonates with your audience.'
              },
              {
                icon: RefreshCw,
                title: 'Grammar and Spell Check',
                description: 'Say goodbye to embarrassing typos and grammar mistakes with our advanced proofreading technology.'
              },
              {
                icon: Search,
                title: 'Plagiarism Detection',
                description: 'Originality is key, and our AI writing tool helps you maintain it with comprehensive plagiarism detection.'
              },
              {
                icon: Mic,
                title: 'Voice to Text Conversion',
                description: 'Transform your spoken words into written content with our accurate voice recognition technology.'
              },
              {
                icon: Target,
                title: 'Style and Tone Adaptation',
                description: 'Adapt your writing style and tone to match your brand voice and target audience preferences.'
              },
              {
                icon: Layers,
                title: 'Content Generation',
                description: 'Generate high-quality content from simple prompts and ideas, saving you time and effort.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">
                      {feature.title}
                    </h3>
                    <p className="text-primary-gray">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Our Services
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className="flex"
              >
                <Card hover className="h-full w-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const iconComponents: Record<string, any> = { Code, Palette, Cloud };
                        const IconComp = iconComponents[service.icon as string] || Code;
                        return <IconComp className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-primary-gray mb-4">
                      {service.description}
                    </p>
                    <button className="text-primary-blue hover:underline text-sm">Learn More →</button>
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
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-blue mr-2" />
              <span className="text-sm font-medium text-primary-blue">Wall of love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              What Our User Says
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <span className="text-primary-gray text-sm">{testimonial.handle}</span>
                      </div>
                      <p className="text-primary-gray text-sm leading-relaxed">{testimonial.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10">
              Show more...
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-blue mr-2" />
              <span className="text-sm font-medium text-primary-blue">Read Our Latest Blogs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Latest Portfolio & News
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-t-xl mb-4 relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 font-montserrat line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-primary-gray mb-4 text-sm line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-primary-gray/60">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">Design the Concept of Your Business Idea Now</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-gap">
            {[
              { title: 'Product Design', desc: 'Prototype, test and validate your ideas with our expert product team.' },
              { title: 'Development', desc: 'Reliable web and mobile development using modern stacks and practices.' },
              { title: 'Data Analytics', desc: 'Turn data into decisions with dashboards and predictive analytics.' },
              { title: 'Cyber Security', desc: 'Protect apps and infra with audits, hardening and monitoring.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : i * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-3 font-montserrat">{item.title}</h3>
                    <p className="text-primary-gray flex-1">{item.desc}</p>
                    <button className="mt-6 inline-flex items-center text-primary-blue hover:underline text-sm">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary-slate/30 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { num: '15+', label: 'Countries Worldwide', image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=60' },
            { num: '23k', label: 'Happy Customers', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=60' },
          ].map((card, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl">
              <img src={card.image} alt={card.label} className="w-full h-[260px] object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-4xl md:text-5xl font-extrabold text-white font-montserrat">{card.num}</div>
                <div className="text-white text-xl mt-2">{card.label}</div>
                <button className="mt-4 inline-flex items-center text-primary-blue text-sm">Learn More <ArrowRight className="ml-2 w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=70" alt="contact" className="w-full h-[320px] object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-between px-10">
              <h3 className="text-3xl md:text-5xl font-bold text-white font-montserrat">Let's Build Your Website!</h3>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black">CONTACT US</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center mb-3">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">LATEST CASE STUDIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">Introduce Our Projects</h2>
          </motion.div>

          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 min-w-[800px]">
              {[
                { title: 'Media App', tag: 'TECHNOLOGY', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60' },
                { title: 'App for Virtual Reality', tag: 'DESIGN / IDEAS', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60' },
                { title: 'Analysis of Security', tag: 'IDEAS / TECHNOLOGY', image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=60' },
                { title: 'eCommerce Website', tag: 'DESIGN / IDEAS', image: 'https://images.unsplash.com/photo-1515165562835-c3b8c2e9f6f1?auto=format&fit=crop&w=1200&q=60' },
              ].map((p, i) => (
                <Card key={i} hover className="w-[320px] overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                    <div className="text-primary-gray text-xs">{p.tag}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center mb-3">
              <div className="w-8 h-0.5 bg-primary-blue mr-3"></div>
              <span className="text-primary-blue text-sm tracking-wider">TECHNOLOGY INDEX</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">We Deliver Solution with the Goal of Trusting Relationships</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {['WEB', 'ANDROID', 'IOS', 'IOT', 'WEARABLES', 'TV'].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : i * 0.1 }}
              >
                <Card hover className="h-full group">
                  <div className="text-center p-6">
                    <div className="text-white font-medium tracking-wide group-hover:text-primary-blue transition-colors duration-300">{label}</div>
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
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-blue mr-2" />
              <span className="text-sm font-medium text-primary-blue">Need Any Help?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Contact With Us
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card hover className="p-8 group">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 group-hover:text-primary-blue transition-colors duration-300">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 group-hover:text-primary-blue transition-colors duration-300">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 group-hover:bg-primary-slate/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 group-hover:text-primary-blue transition-colors duration-300">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full px-4 py-3 bg-primary-slate/30 border border-primary-slate/50 rounded-xl text-white placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue resize-none transition-all duration-200 group-hover:bg-primary-slate/40"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-primary-blue group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-3xl p-16 hover-glow">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-gray mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust us with their digital transformation. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-primary-blue">
                  Get Started Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;