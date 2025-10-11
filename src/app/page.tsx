"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
  ShoppingCart,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { services, testimonials, portfolioItems } from "@/data";

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Globe,
    Smartphone,
    Palette,
    TrendingUp,
    Cloud,
    ShoppingCart,
  };

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: any) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const hoverElements = document.querySelectorAll(
      "a, button, .hover-glow, .btn-glow, .hover-glow-card"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-purple/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-montserrat text-white">
              Empowering{" "}
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold  inline-block">
                Digital Transformation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-gray mb-8 max-w-3xl mx-auto">
              Boost customer engagement to strengthen relationships and drive
              loyalty, resulting in improved business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-primary-slate/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 card-gap">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Our Solutions
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive digital solutions to help your business
              grow and succeed in the modern world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card hover className="h-full w-full">
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
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-primary-gray"
                          >
                            <CheckCircle className="w-4 h-4 text-primary-blue mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
                Why Choose Us
              </h2>
              <p className="text-xl text-primary-gray mb-8">
                We combine technical expertise with business acumen to deliver
                solutions that drive real results.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Best Performance",
                    description:
                      "Optimized solutions for maximum efficiency and performance.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description:
                      "Experienced professionals with proven track records.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description:
                      "Serving clients worldwide with local expertise.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                        {item.title}
                      </h3>
                      <p className="text-primary-gray">{item.description}</p>
                    </div>
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
                    $569.29
                  </div>
                  <div className="text-primary-gray mb-4">Our Main Support</div>
                  <div className="text-sm text-primary-gray mb-6">
                    10014 Total page
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Flexi Template 450+ Component", progress: 85 },
                      { label: "UI Kit 245+ Asset", progress: 70 },
                      { label: "Dashboard 350+ Aspect", progress: 90 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm text-primary-gray mb-1">
                          <span>{item.label}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-primary-slate/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary-blue to-primary-purple h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary-slate/30">
                    <div className="text-2xl font-bold text-white mb-1 font-montserrat">
                      $6785
                    </div>
                    <div className="text-sm text-primary-gray">
                      Daily Support 89%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Explore some of our recent projects and see how we've helped
              businesses transform digitally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {portfolioItems
              .filter((item) => item.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card hover className="h-full w-full">
                    <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-lg mb-4 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-primary-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-primary-gray mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                    </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              What Our Clients Say
            </h2>
            <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="h-full w-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="text-primary-gray mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-primary-gray">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
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
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-3xl p-16 hover-glow">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-primary-gray mb-8 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology?
                Get in touch with us today and let's discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Call
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
