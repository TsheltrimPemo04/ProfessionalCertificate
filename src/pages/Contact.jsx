import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Tsheltrim,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    // Opens Gmail compose in a new tab (matches existing behaviour)
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=tsheltrimpemo2004@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.div
      className="flex flex-col items-center mb-12 xl:mb-32 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Header */}
      <motion.p
        className="text-gray-400 tracking-widest text-sm"
        variants={itemVariants}
      >
        — GET IN TOUCH
      </motion.p>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-center"
        variants={itemVariants}
      >
        Let’s build something <br className="hidden sm:block" /> meaningful together.
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-[#5F5F5F] opacity-70 mt-4 text-center max-w-2xl"
        variants={itemVariants}
      >
        Whether it’s a collaboration, a freelance project, or just a friendly hello —
        my inbox is always open.
      </motion.p>

      {/* Main grid: info + form */}
      <motion.div
        className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-6xl"
        variants={itemVariants}
      >
        {/* Left: Info card (2/5) */}
        <motion.div
          className="lg:col-span-2 p-[1.5px] rounded-2xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)]"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-sm text-[#5F5F5F] opacity-70 mb-6">
              Reach out through any of these — I usually reply within a day or two.
            </p>

            {/* Availability badge */}
            <motion.div
              className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 w-fit mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-green-700">
                Open to opportunities
              </span>
            </motion.div>

            {/* Info items */}
            <div className="space-y-5 flex-grow">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tsheltrimpemo2004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center group-hover:bg-[#8A6FE8]/20 transition-colors">
                  <img src="/mail.svg" alt="Email" width={20} height={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-[#5F5F5F] opacity-60">Email</p>
                  <p className="text-sm sm:text-base font-medium break-all group-hover:text-[#8A6FE8] transition-colors">
                    tsheltrimpemo2004@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center">
                  <img src="/phone.svg" alt="Phone" width={20} height={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5F5F5F] opacity-60">Phone</p>
                  <p className="text-sm sm:text-base font-medium">+975-17738371</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8A6FE8]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#8A6FE8]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#5F5F5F] opacity-60">Location</p>
                  <p className="text-sm sm:text-base font-medium">Thimphu, Bhutan</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-[#5F5F5F] opacity-60 mb-3">
                Find me online
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/tsheltrim-pemo-a93208259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#8A6FE8] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" width={22} height={22} />
                </motion.a>
                <motion.a
                  href="https://github.com/TsheltrimPemo04"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#8A6FE8] flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <img src="/github.svg" alt="GitHub" width={22} height={22} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form (3/5) */}
        <motion.div
          className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Send me a message</h2>
          <p className="text-sm text-[#5F5F5F] opacity-70 mb-6">
            Fill in the form below — it’ll open in your email client ready to send.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5F5F] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#8A6FE8] focus:outline-none focus:ring-2 focus:ring-[#8A6FE8]/20 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5F5F] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#8A6FE8] focus:outline-none focus:ring-2 focus:ring-[#8A6FE8]/20 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5F5F] mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What’s this about?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#8A6FE8] focus:outline-none focus:ring-2 focus:ring-[#8A6FE8]/20 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5F5F] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you’re working on…"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#8A6FE8] focus:outline-none focus:ring-2 focus:ring-[#8A6FE8]/20 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-sm text-green-600 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Email client opened — finish up and send!
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
