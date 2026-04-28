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

const bookReviews = [
  {
    id: 'surrounded-by-idiots',
    type: 'Book Review',
    title: 'Surrounded by Idiots',
    author: 'Thomas Erikson',
    cover: '/public/Book1.jpeg',
    fallbackCover: 'https://covers.openlibrary.org/b/olid/OL26895835M-L.jpg',
    readingDuration: '87 days to finish',
    publishedOn: 'April 2026',
    rating: 4.5,
    tagline:
      'A fascinating dive into the four behavioral colors and what they reveal about how we communicate and connect.',
    introParagraphs: [
      <>
        I recently finished reading{' '}
        <span className="italic font-medium text-gray-900">
          Surrounded by Idiots
        </span>{' '}
        by Thomas Erikson. It took me{' '}
        <span className="font-semibold text-[#8A6FE8]">87 days</span> to
        complete, and it was a very interesting read about understanding
        human behavior and communication.
      </>,
      'The book explains that people generally fall into four behavior types, represented by different colors:',
    ],
    highlights: [
      {
        name: 'Red',
        description: 'Direct, ambitious, bold, and natural leaders.',
        ring: 'ring-red-200',
        dotBg: 'bg-red-500',
        chip: 'bg-red-50 text-red-700 border-red-200',
      },
      {
        name: 'Yellow',
        description: 'Talkative, optimistic, enthusiastic, and creative.',
        ring: 'ring-yellow-200',
        dotBg: 'bg-yellow-400',
        chip: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      },
      {
        name: 'Blue',
        description: 'Structured, analytical, systematic, and detail-oriented.',
        ring: 'ring-blue-200',
        dotBg: 'bg-blue-500',
        chip: 'bg-blue-50 text-blue-700 border-blue-200',
      },
      {
        name: 'Green',
        description: 'Calm, patient, supportive, and good listeners.',
        ring: 'ring-green-200',
        dotBg: 'bg-green-500',
        chip: 'bg-green-50 text-green-700 border-green-200',
      },
    ],
    paragraphsAfterHighlights: [
      'According to the book, most people are not just one color. Many people are a combination of two colors, which is completely normal. However, having all four colors seems impossible.',
      <>
        While reading the book, I started reflecting on my own behavior. At
        first, I thought I was mostly{' '}
        <span className="inline-flex items-center gap-1 align-baseline">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
          <span className="font-semibold text-yellow-700">Yellow</span>
        </span>{' '}
        because I tend to talk a lot during conversations and often bring many
        ideas when discussing projects. Yellows are known for being creative
        and idea-driven, even if they don’t always think about how practical
        the ideas are.
      </>,
      <>
        But as I kept reading, I realized that I also have many{' '}
        <span className="inline-flex items-center gap-1 align-baseline">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
          <span className="font-semibold text-blue-700">Blue</span>
        </span>{' '}
        traits. Blues like structure and clear steps. For example, when solving
        a math problem, I prefer to follow every step carefully without
        skipping anything. I also like to know things in advance so I can
        prepare mentally — unexpected changes can sometimes make me feel
        stressed.
      </>,
    ],
    pullQuote:
      'This book helped me better understand why people behave differently and how personality differences influence communication and teamwork. It also helped me understand my own behavior better.',
    recommendation:
      'Would recommend for: anyone curious about people, teamwork, and self-awareness.',
  },

  {
    id: 'Atomic Habits',
    type: 'Book Review',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: '/public/Book2.jpeg',
    fallbackCover: 'https://covers.openlibrary.org/b/title/book-L.jpg',
    readingDuration: '28 days to finish',
    publishedOn: 'April 2026',
    rating: 5,

    tagline:
      'Small daily improvements compound into life-changing results.',

    introParagraphs: [
      'I read Atomic Habits by James Clear over the span of a month, and it completely shifted how I think about discipline and self-improvement. Instead of focusing on big, dramatic changes, the book emphasizes the power of small, consistent actions that build up over time.',
      
      'The book is structured around four simple laws of behavior change, which provide a practical framework for both building good habits and breaking bad ones. What stood out to me is how actionable these ideas are—you can apply them immediately in your daily life.'
    ],

    highlights: [
      {
        title: 'Clarity drives action',
        content:
          'People are far more likely to follow through on their goals when they clearly define when and where they will take action. Vague intentions often lead to inaction.'
      },
      {
        title: '1st Law: Make it Obvious',
        content:
          'I started keeping my water bottle in visible places so I am constantly reminded to drink water throughout the day.'
      },
      {
        title: '2nd Law: Make it Attractive',
        content:
          'I am not naturally a runner, but wearing a nice running outfit actually motivates me to go out and run. It works surprisingly well.'
      },
      {
        title: '3rd Law: Make it Easy',
        content:
          'I organize my study materials the night before, so the next day it feels effortless to start studying and get ready for class.'
      },
      {
        title: '4th Law: Make it Satisfying',
        content:
          'After every run, I track it on Strava. Seeing my progress—even small runs—gives me a sense of satisfaction and keeps me consistent.'
      },
      {
        title: 'Breaking bad habits',
        content:
          'To break bad habits, you simply invert the four laws. For example, I keep my phone out of sight (invisible) and place it somewhere inconvenient (hard to reach) to reduce usage.'
      }
    ],

    paragraphsAfterHighlights: [
      'One thing that really surprised me is how much environment matters. I used to think motivation was the key, but this book shows that designing your surroundings properly can make good habits almost automatic.',
      
      'Another powerful takeaway is that consistency matters more than intensity. Even small actions, when repeated daily, can lead to massive long-term results. This completely changed how I approach productivity and personal growth.'
    ],

    pullQuote:
      'You do not rise to the level of your goals. You fall to the level of your systems.',

    recommendation:
      'Would recommend for: anyone trying to break bad habits, build better routines, or improve consistency in their daily life.'
  },
  {
    id: 'Tuesday with Morrie',
    type: 'Book Review',
    title: 'Tuesday with Morrie',
    author: 'Mitch Albom',
    cover: '/public/Book3.jpeg',
    fallbackCover: 'https://covers.openlibrary.org/b/title/book-L.jpg',
    readingDuration: '5 days to finish',
    publishedOn: 'April 2026',
    rating: 5,

    tagline:
      'A touching reminder of what truly matters in life.',

    introParagraphs: [
      'I read Tuesday with Morrie by Mitch Albom in just a few days, and it left a deep emotional impact on me. The book is a memoir of the author reconnecting with his old professor, Morrie, who is dying from ALS.',
      
      'Through their weekly Tuesday conversations, Morrie shares life lessons about love, work, family, and death. The simplicity of these conversations makes the message even more powerful and real.'
    ],

    highlights: [
      {
        title: 'Value human connection',
        content:
          'The book emphasizes that relationships and love are far more important than material success.'
      },
      {
        title: 'Accept death to understand life',
        content:
          'Morrie teaches that once you accept that you will die, you start living more meaningfully.'
      },
      {
        title: 'Don’t chase society’s expectations',
        content:
          'Instead of blindly following what society defines as success, focus on what truly makes you happy.'
      }
    ],

    paragraphsAfterHighlights: [
      'What stood out to me most is how simple yet powerful the lessons are. Morrie does not give complex advice—he speaks from experience, which makes every word feel genuine.',
      
      'This book made me reflect on my own priorities and reminded me to appreciate the people around me more.'
    ],

    pullQuote:
      'Love each other or perish.',

    recommendation:
      'Would recommend for: anyone looking for a meaningful, emotional read about life, relationships, and purpose.'
  }
];

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

const BookReviewArticle = ({ review, featuredRef }) => {
  const handleImgError = (e) => {
    if (review.fallbackCover && e.target.src !== review.fallbackCover) {
      e.target.src = review.fallbackCover;
    }
  };

  return (
    <motion.article
      ref={featuredRef}
      className="w-full max-w-5xl"
      key={review.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="p-[1.5px] rounded-3xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-lg">
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Hero row: cover + meta */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Book cover */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#8A6FE8]/10 via-[#B388EB]/10 to-[#7C5FE9]/10 flex items-center justify-center p-8 md:p-10">
              <motion.img
                src={review.cover}
                onError={handleImgError}
                alt={`Cover of ${review.title}`}
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
                  {review.type}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {review.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                by{' '}
                <span className="font-semibold text-gray-800">
                  {review.author}
                </span>
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-500 mt-5">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {review.publishedOn}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {review.readingDuration}
                </div>
              </div>

              <div className="mt-5">
                <StarRating value={review.rating} />
              </div>

              <p className="mt-5 text-sm md:text-base text-gray-700 leading-relaxed italic border-l-2 border-[#8A6FE8] pl-4">
                {review.tagline}
              </p>
            </div>
          </div>

          {/* Article body */}
          <div className="px-6 md:px-12 py-10 md:py-12 border-t border-gray-100 space-y-8 text-gray-700 leading-relaxed text-[15px] md:text-base">
            {/* Intro paragraphs */}
            {review.introParagraphs && review.introParagraphs.length > 0 && (
              <div className="space-y-4">
                {review.introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {review.highlights && review.highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {review.highlights.map((h, i) => {
                  const heading = h.name || h.title || '';
                  const body = h.description || h.content || '';
                  const isChip = !!h.chip; 
                  const ring = h.ring || 'ring-[#8A6FE8]/20';
                  const dotBg = h.dotBg || 'bg-[#8A6FE8]';

                  return (
                    <motion.div
                      key={`${heading}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -3 }}
                      className={`relative bg-white rounded-2xl border border-gray-200 p-5 ring-1 ${ring} hover:shadow-md transition-shadow`}
                    >
                      {isChip ? (
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`w-3 h-3 rounded-full ${dotBg}`}></span>
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${h.chip}`}
                          >
                            {heading}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2.5 mb-2">
                          <span
                            className={`mt-1.5 w-2 h-2 rounded-full ${dotBg} flex-shrink-0`}
                          ></span>
                          <h4 className="font-bold text-sm md:text-base text-gray-900 leading-snug">
                            {heading}
                          </h4>
                        </div>
                      )}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Paragraphs after highlights */}
            {review.paragraphsAfterHighlights &&
              review.paragraphsAfterHighlights.length > 0 && (
                <div className="space-y-4">
                  {review.paragraphsAfterHighlights.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

            {/* Pull quote */}
            {review.pullQuote && (
              <div className="my-8 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-[#8A6FE8]/8 via-[#B388EB]/8 to-[#7C5FE9]/8 border border-[#8A6FE8]/20">
                <p className="text-sm md:text-base text-gray-800 italic leading-relaxed">
                  “{review.pullQuote}”
                </p>
              </div>
            )}

            {/* Final rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#5F5F5F] opacity-70">
                  Final Rating
                </p>
                <div className="mt-2">
                  <StarRating value={review.rating} />
                </div>
              </div>
              {review.recommendation && (
                <div className="text-sm text-gray-500">
                  {review.recommendation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* Compact archive card — used for older reviews in the grid below the featured slot. */
const ArchiveCard = ({ review, isActive, onSelect, index }) => {
  const handleImgError = (e) => {
    if (review.fallbackCover && e.target.src !== review.fallbackCover) {
      e.target.src = review.fallbackCover;
    }
  };

  return (
    <motion.button
      onClick={() => onSelect(review.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group text-left w-full"
      aria-pressed={isActive}
    >
      <div
        className={`p-[1.5px] rounded-2xl transition-all duration-500 h-full ${
          isActive
            ? 'bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-lg'
            : 'bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] shadow-sm group-hover:shadow-xl'
        }`}
      >
        <div className="bg-white rounded-2xl p-4 h-full flex gap-4 items-center">
          {/* Thumbnail */}
          <div className="flex-shrink-0 w-20 h-28 rounded-md overflow-hidden bg-gradient-to-br from-[#8A6FE8]/10 via-[#B388EB]/10 to-[#7C5FE9]/10 flex items-center justify-center">
            <img
              src={review.cover}
              onError={handleImgError}
              alt={`Cover of ${review.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-widest text-[#8A6FE8] font-semibold mb-1">
              {review.type}
            </p>
            <h4 className="font-bold text-sm text-gray-900 leading-snug line-clamp-2 group-hover:text-[#8A6FE8] transition-colors">
              {review.title}
            </h4>
            <p className="text-xs text-gray-500 mt-0.5 truncate">
              {review.author}
            </p>
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    review.rating >= i
                      ? 'fill-yellow-400 text-yellow-400'
                      : review.rating >= i - 0.5
                      ? 'fill-yellow-400/50 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-1 text-[11px] text-gray-500">
                {review.rating.toFixed(1)}
              </span>
            </div>
            {isActive && (
              <p className="text-[10px] uppercase tracking-widest text-[#8A6FE8] font-semibold mt-2">
                ● Now reading
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.button>
  );
};

const Blog = () => {
  const [featuredId, setFeaturedId] = React.useState(bookReviews[0].id);
  const featuredRef = React.useRef(null);

  const featuredReview =
    bookReviews.find((r) => r.id === featuredId) || bookReviews[0];
  const archiveReviews = bookReviews; // show all in archive — active one is highlighted

  const handleSelect = (id) => {
    setFeaturedId(id);
    // Smooth-scroll the featured article into view
    setTimeout(() => {
      featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
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

      {/* Featured review — always one per row */}
      <div className="mt-14 w-full flex justify-center scroll-mt-24" id="featured-review">
        <BookReviewArticle review={featuredReview} featuredRef={featuredRef} />
      </div>

      {/* Archive — compact grid of all reviews. Click one to feature it. */}
      {bookReviews.length > 1 && (
        <div className="mt-16 w-full max-w-6xl">
          <div className="flex items-baseline justify-between mb-6 px-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              All reviews
            </h3>
            <span className="text-xs text-gray-500">
              {bookReviews.length} {bookReviews.length === 1 ? 'review' : 'reviews'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {archiveReviews.map((review, i) => (
              <ArchiveCard
                key={review.id}
                review={review}
                isActive={review.id === featuredId}
                onSelect={handleSelect}
                index={i}
              />
            ))}
          </div>
        </div>
      )}

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
