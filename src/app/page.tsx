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
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

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
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
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
}
