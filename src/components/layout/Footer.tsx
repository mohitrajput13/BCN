'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { companyInfo } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'UI/UX Design', href: '/services#ui-ux-design' },
    { name: 'Digital Marketing', href: '/services#digital-marketing' },
    { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
    { name: 'E-commerce', href: '/services#ecommerce' },
  ];

  return (
    <footer className="bg-primary-slate border-t border-primary-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BC</span>
              </div>
              <span className="text-xl font-bold text-white font-montserrat">
                Black Cube
              </span>
            </div>
            <p className="text-primary-gray text-sm leading-relaxed">
              Empowering digital transformation through innovative technology solutions. 
              We help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {companyInfo.social.linkedin && (
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {companyInfo.social.twitter && (
                <a
                  href={companyInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              )}
              {companyInfo.social.facebook && (
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
              )}
              {companyInfo.social.instagram && (
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-montserrat">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-montserrat">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-blue mt-1 flex-shrink-0" />
                <span className="text-primary-gray text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-blue flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-blue flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-slate/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-gray text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-gray hover:text-primary-blue transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
