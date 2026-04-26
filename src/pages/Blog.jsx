import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, BookOpen } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

// To use your own cover image, drop the file into /public (e.g. /public/surrounded-by-idiots.jpg)
// and replace `cover` below with "/surrounded-by-idiots.jpg".
const bookReview = {
  type: 'Book Review',
  title: 'Surrounded by Idiots',
  author: 'Thomas Erikson',
  cover: 'https://covers.openlibrary.org/b/isbn/9781250179944-L.jpg',
  fallbackCover: 'https://covers.openlibrary.org/b/olid/OL26895835M-L.jpg',
  readingDuration: '87 days to finish',
  publishedOn: 'April 2026',
  rating: 4.5,
  tagline:
    'A fascinating dive into the four behavioral colors and what they reveal about how we communicate and connect.',
  colors: [
    {
      name: 'Red',
      emoji: '🔴',
      description: 'Direct, ambitious, bold, and natural leaders.',
      ring: 'ring-red-200',
      dotBg: 'bg-red-500',
      chip: 'bg-red-50 text-red-700 border-red-200',
    },
    {
      name: 'Yellow',
      emoji: '🟡',
      description: 'Talkative, optimistic, enthusiastic, and creative.',
      ring: 'ring-yellow-200',
      dotBg: 'bg-yellow-400',
      chip: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    {
      name: 'Blue',
      emoji: '🔵',
      description: 'Structured, analytical, systematic, and detail-oriented.',
      ring: 'ring-blue-200',
      dotBg: 'bg-blue-500',
      chip: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      name: 'Green',
      emoji: '🟢',
      description: 'Calm, patient, supportive, and good listeners.',
      ring: 'ring-green-200',
      dotBg: 'bg-green-500',
      chip: 'bg-green-50 text-green-700 border-green-200',
    },
  ],
};

const StarRating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    } else if (value >= i - 0.5) {
      stars.push(
        <span key={i} className="relative inline-flex">
          <Star className="w-4 h-4 text-yellow-400" />
          <span
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: '50%' }}
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </span>
        </span>
      );
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
  }
  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="ml-2 text-sm font-semibold text-gray-700">
        {value.toFixed(1)} / 5
      </span>
    </div>
  );
};

const Blog = () => {
  const handleImgError = (e) => {
    if (e.target.src !== bookReview.fallbackCover) {
      e.target.src = bookReview.fallbackCover;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white py-20 flex flex-col items-center px-5 md:px-16 lg:px-20">
      {/* Section header */}
      <motion.p
        className="text-gray-400 tracking-widest text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true, amount: 0.2 }}
      >
        — MY BLOG
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mt-3 text-black"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true, amount: 0.2 }}
      >
        Reads, reviews, and <br className="hidden sm:block" /> reflections.
      </motion.h2>

      <motion.p
        className="text-center text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true, amount: 0.2 }}
      >
        Honest takes on the books I’m reading and the lessons they leave behind.
      </motion.p>

      {/* Featured Book Review */}
      <motion.article
        className="mt-14 w-full max-w-5xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="p-[1.5px] rounded-3xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-lg">
          <div className="bg-white rounded-3xl overflow-hidden">
            {/* Hero row: cover + meta */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Book cover */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#8A6FE8]/10 via-[#B388EB]/10 to-[#7C5FE9]/10 flex items-center justify-center p-8 md:p-10">
                <motion.img
                  src={bookReview.cover}
                  onError={handleImgError}
                  alt={`Cover of ${bookReview.title}`}
                  className="w-full max-w-[220px] md:max-w-[260px] rounded-lg shadow-2xl"
                  whileHover={{ rotate: -2, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              </div>

              {/* Meta */}
              <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4 w-fit">
                  <BookOpen className="w-4 h-4 text-[#8A6FE8]" />
                  <span className="text-xs uppercase tracking-widest text-[#8A6FE8] font-semibold">
                    {bookReview.type}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {bookReview.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mt-2">
                  by{' '}
                  <span className="font-semibold text-gray-800">
                    {bookReview.author}
                  </span>
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-500 mt-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {bookReview.publishedOn}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {bookReview.readingDuration}
                  </div>
                </div>

                <div className="mt-5">
                  <StarRating value={bookReview.rating} />
                </div>

                <p className="mt-5 text-sm md:text-base text-gray-700 leading-relaxed italic border-l-2 border-[#8A6FE8] pl-4">
                  {bookReview.tagline}
                </p>
              </div>
            </div>

            {/* Article body */}
            <div className="px-6 md:px-12 py-10 md:py-12 border-t border-gray-100 space-y-8 text-gray-700 leading-relaxed text-[15px] md:text-base">
              {/* Intro */}
              <div className="space-y-4">
                <p>
                  I recently finished reading{' '}
                  <span className="italic font-medium text-gray-900">
                    Surrounded by Idiots
                  </span>{' '}
                  by Thomas Erikson. It took me{' '}
                  <span className="font-semibold text-[#8A6FE8]">87 days</span> to
                  complete, and it was a very interesting read about
                  understanding human behavior and communication.
                </p>
                <p>
                  The book explains that people generally fall into four behavior
                  types, represented by different colors:
                </p>
              </div>

              {/* Four Colors grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bookReview.colors.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`relative bg-white rounded-2xl border border-gray-200 p-5 ring-1 ${c.ring} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-3 h-3 rounded-full ${c.dotBg}`}></span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.chip}`}
                      >
                        {c.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {c.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Body continued */}
              <div className="space-y-4">
                <p>
                  According to the book, most people are not just one color. Many
                  people are a combination of two colors, which is completely
                  normal. However, having all four colors seems impossible.
                </p>
                <p>
                  While reading the book, I started reflecting on my own
                  behavior. At first, I thought I was mostly{' '}
                  <span className="inline-flex items-center gap-1 align-baseline">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="font-semibold text-yellow-700">Yellow</span>
                  </span>{' '}
                  because I tend to talk a lot during conversations and often
                  bring many ideas when discussing projects. Yellows are known
                  for being creative and idea-driven, even if they don’t always
                  think about how practical the ideas are.
                </p>
                <p>
                  But as I kept reading, I realized that I also have many{' '}
                  <span className="inline-flex items-center gap-1 align-baseline">
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                    <span className="font-semibold text-blue-700">Blue</span>
                  </span>{' '}
                  traits. Blues like structure and clear steps. For example,
                  when solving a math problem, I prefer to follow every step
                  carefully without skipping anything. I also like to know
                  things in advance so I can prepare mentally — unexpected
                  changes can sometimes make me feel stressed.
                </p>
              </div>

              {/* Pull quote */}
              <div className="my-8 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-[#8A6FE8]/8 via-[#B388EB]/8 to-[#7C5FE9]/8 border border-[#8A6FE8]/20">
                <p className="text-sm md:text-base text-gray-800 italic leading-relaxed">
                  “This book helped me better understand why people behave
                  differently and how personality differences influence
                  communication and teamwork. It also helped me understand my
                  own behavior better.”
                </p>
              </div>

              {/* Final rating */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#5F5F5F] opacity-70">
                    Final Rating
                  </p>
                  <div className="mt-2">
                    <StarRating value={bookReview.rating} />
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Would recommend for: anyone curious about people, teamwork,
                  and self-awareness.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* CTA */}
      <motion.div
        className="mt-16 w-full max-w-3xl text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="p-[1.5px] rounded-2xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block w-full">
          <div className="bg-white rounded-2xl px-6 py-8 md:px-10 md:py-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              More reviews on the way
            </h3>
            <p className="text-[#5F5F5F] opacity-70 text-sm md:text-base">
              I share what I learn from books — from psychology to design to
              tech. Stay tuned for the next one.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
