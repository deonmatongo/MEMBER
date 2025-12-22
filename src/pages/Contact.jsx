import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden mt-40 md:mt-44">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop"
            alt="Contact"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-widest font-light text-white"
          >
            CONTACT
          </motion.h1>
        </div>
      </section>

      <div className="py-16 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gray-600 tracking-wide font-light max-w-2xl mx-auto">
              Have questions about our products, collaborations, or want to connect? 
              We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm tracking-widest text-gray-700 mb-2">
                    NAME
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-widest text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-widest text-gray-700 mb-2">
                    SUBJECT
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-widest text-gray-700 mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 tracking-widest py-6"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="bg-gray-50 p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm tracking-widest text-gray-900 mb-2">EMAIL</h3>
                    <a 
                      href="mailto:hello@member.com" 
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      hello@member.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm tracking-widest text-gray-900 mb-2">SOCIAL</h3>
                    <a 
                      href="https://instagram.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      @member
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm tracking-widest text-gray-900 mb-2">LOCATION</h3>
                    <p className="text-gray-600">
                      Based worldwide,<br />
                      Creating globally
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                <h3 className="text-xl tracking-widest font-light text-gray-900">
                  QUICK ANSWERS
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Shipping</p>
                    <p className="text-gray-600 font-light">Worldwide shipping available. 5-7 business days.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Returns</p>
                    <p className="text-gray-600 font-light">30-day return policy on unworn items.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Collaborations</p>
                    <p className="text-gray-600 font-light">Open to partnerships. Email us your proposal.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop"
                  alt="MEMBER Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-sm tracking-widest text-gray-400 mb-2">
              RESPONSE TIME
            </p>
            <p className="text-gray-600 font-light">
              We typically respond within 24-48 hours
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest text-gray-400">
            © 2025 MEMBER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}