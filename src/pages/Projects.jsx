import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Github, ExternalLink, Sparkles, ArrowUpRight, Figma,
  X, BookOpen, Lightbulb, Layers, MousePointer2, Heart, Map, User,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

/* ================================================================
   PROJECT DATA
================================================================ */
const projectData = [
  {
    title: 'Agay - AI Land Record Assistant',
    img: '/project1.jpeg',
    summary:
      'An AI land record assistant using RAG to make historical land records accessible, accurate, and secure for both government agencies and the general public.',
    date: '01/02/2025',
    figma: 'https://www.figma.com/design/buYJBX7VOg0tdAIT8gDbcc/Agay?node-id=0-1&t=ayYCJDAsrSfpUFP6-1',
    status: 'Completed',
    tech: ['Typescript', 'Tailwind', 'RAG', 'LlamaIndex'],
    caseStudy: {
      problemStatement:
        'Government land records in Bhutan are stored in fragmented, paper-based systems that are difficult to access, prone to errors, and inaccessible to the general public. Citizens often face lengthy bureaucratic processes to verify land ownership, while officials struggle to retrieve accurate historical data quickly.',
      solution:
        'Agay uses Retrieval-Augmented Generation (RAG) powered by LlamaIndex to intelligently query digitised land records. The system allows both citizens and officials to ask natural-language questions and receive accurate, sourced answers — reducing lookup time from days to seconds while maintaining data integrity and access control.',
      uiImplementations: [
        'Clean, minimal chat interface with streamed AI responses for a natural query experience.',
        'Source citations displayed alongside each answer so users can trace information to the original record.',
        'Role-based dashboard views: a simplified interface for citizens and a detailed administrative panel for officials.',
        'Consistent use of Bhutanese colour motifs and typography to ground the product in cultural context.',
      ],
      uxImplementations: [
        'Conversational query model — users ask questions in plain language instead of navigating complex form filters.',
        'Progressive disclosure: basic results shown first, with expandable detail sections for power users.',
        'Trust indicators (source document name, date, confidence score) placed prominently to build user confidence.',
        'Error states written in plain language with suggested follow-up queries to guide users forward.',
      ],
      empathyMap: {
        persona: 'Sonam, 42 — rural farmer verifying land ownership for a property dispute',
        says: [
          '"I just need to know who owns this plot — why is it so complicated?"',
          '"I drove 3 hours to the office and they told me to come back next week."',
          '"My neighbour said the record is wrong but I don\'t know how to challenge it."',
        ],
        thinks: [
          'Worried the process will take months and cost money he doesn\'t have.',
          'Unsure whether to trust a digital system with something this important.',
          'Hopes there\'s a simpler way that doesn\'t require multiple government visits.',
        ],
        does: [
          'Asks family members to help him navigate paper-based government forms.',
          'Travels long distances to district land offices to get physical copies.',
          'Keeps handwritten notes of every conversation with officials as proof.',
        ],
        feels: [
          'Frustrated by bureaucratic delays and lack of clear communication.',
          'Anxious about the accuracy of records that affect his livelihood.',
          'Relieved when given a direct, clear answer with a cited source.',
        ],
      },
      userJourney: {
        scenario: 'Sonam needs to verify his land title before a bank loan application.',
        stages: [
          {
            stage: 'Awareness',
            action: 'Hears from a neighbour that a digital land record tool exists.',
            emotion: '😐 Curious but sceptical',
            painPoint: 'No clear information on what the tool can actually do or who it is for.',
            opportunity: 'Add an onboarding screen that explains the tool in plain language with a worked example.',
          },
          {
            stage: 'First Use',
            action: 'Types his plot number into the chat and asks about ownership history.',
            emotion: '😟 Nervous — unsure if the answer will be accurate',
            painPoint: 'No indication of data freshness — he can\'t tell if records are current.',
            opportunity: 'Display a "last updated" timestamp and the source document name alongside every answer.',
          },
          {
            stage: 'Result Review',
            action: 'Reads the AI-generated ownership summary with a source citation.',
            emotion: '😮 Surprised at how fast and clear the result is',
            painPoint: 'Legal terminology in the original record is hard to understand.',
            opportunity: 'Add a "Explain in simple language" toggle to translate legal text into plain language.',
          },
          {
            stage: 'Verification',
            action: 'Downloads a PDF of the cited source document.',
            emotion: '😊 Relieved — has a document he can present to the bank',
            painPoint: 'PDF is a raw scan; hard to read on a small phone screen.',
            opportunity: 'Offer a formatted, printable summary version alongside the raw scan.',
          },
          {
            stage: 'Return Visit',
            action: 'Returns two weeks later to check if a disputed boundary has been updated.',
            emotion: '😕 Uncertain — no way to track changes over time',
            painPoint: 'No history or notification system for record updates.',
            opportunity: 'Introduce a "Watch this record" feature that notifies users when a plot\'s data changes.',
          },
        ],
      },
    },
  },
  {
    title: 'Smart Sort',
    img: '/project3.jpg',
    summary:
      'Smart Sort App is an AI-powered waste management application that automatically identifies and sorts waste into the correct disposal categories for smarter and cleaner recycling.',
    date: '01/12/2024',
    figma: 'https://www.figma.com/design/rQai0PdPgqUqEQeNx8bR5h/Smart-Sort?node-id=0-1&p=f&t=8QddqrBHc7KUey3k-0',
    status: 'Completed',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    caseStudy: {
      problemStatement:
        'Most people want to recycle correctly but are unsure which bin different items belong in, leading to contaminated recycling streams and increased landfill waste. Existing waste guides are static, text-heavy, and rarely consulted at the point of disposal.',
      solution:
        'Smart Sort lets users photograph any waste item and instantly receive an AI classification — recyclable, compostable, general waste, or hazardous — along with the correct disposal method. The app removes the cognitive burden of waste sorting by making the decision automatic and accessible via a mobile camera.',
      uiImplementations: [
        'Large, full-bleed camera viewfinder as the home screen, making the core action immediately accessible.',
        'Colour-coded result cards (green, brown, grey, red) that map directly to physical bin colours for instant comprehension.',
        'Animated classification result with a confidence indicator to set the right level of user trust.',
        'Minimal bottom navigation with only three tabs: Scan, History, and Learn — reducing cognitive load.',
      ],
      uxImplementations: [
        'Zero-step onboarding: the camera opens on first launch so users can try the core feature before committing.',
        'Scan history stored locally, allowing users to review past classifications without an account.',
        'Haptic feedback on successful scan to confirm action without requiring the user to read the screen.',
        'Localised disposal instructions based on the user\'s region, since recycling rules differ by municipality.',
      ],
      empathyMap: {
        persona: 'Pema, 26 — university student who wants to live sustainably but finds recycling confusing',
        says: [
          '"I genuinely don\'t know if this goes in the blue bin or the grey one."',
          '"I just throw it in general waste to be safe — is that bad?"',
          '"I wish there was a quick way to check without Googling every time."',
        ],
        thinks: [
          'Feels guilty about not recycling correctly but doesn\'t know where to start.',
          'Suspects the recycling rules change depending on where you live.',
          'Wonders if her individual effort even makes a meaningful difference.',
        ],
        does: [
          'Occasionally Googles items but gives up when results are too specific to a different country.',
          'Asks housemates what to do and gets different answers from different people.',
          'Tosses questionable items into general waste rather than risk contaminating recycling.',
        ],
        feels: [
          'Overwhelmed by conflicting information from different sources.',
          'Motivated to do better once she has a clear, reliable tool to rely on.',
          'Satisfied and slightly proud when she gets instant confirmation of a correct sort.',
        ],
      },
      userJourney: {
        scenario: 'Pema wants to dispose of a broken phone charger correctly.',
        stages: [
          {
            stage: 'Discovery',
            action: 'Sees Smart Sort mentioned in a sustainability group chat and downloads it.',
            emotion: '😊 Hopeful — this might finally solve her confusion',
            painPoint: 'Unsure if the app covers electronics or just food packaging.',
            opportunity: 'Show category coverage (electronics, food, paper, hazardous, etc.) on the app store listing.',
          },
          {
            stage: 'First Scan',
            action: 'Opens the app, points at the charger, and taps scan.',
            emotion: '😲 Impressed — result appears in under 2 seconds',
            painPoint: 'The charger cable is tangled and the camera struggles to frame it cleanly.',
            opportunity: 'Add an outline guide overlay to help users frame irregularly shaped objects.',
          },
          {
            stage: 'Reading the Result',
            action: 'Reads that the charger is "Hazardous — e-waste" and needs a special drop-off.',
            emotion: '😯 Surprised — she would have put it in general waste',
            painPoint: 'Doesn\'t know where the nearest e-waste drop-off is.',
            opportunity: 'Add a "Find drop-off near me" button that links to a local e-waste location map.',
          },
          {
            stage: 'Taking Action',
            action: 'Saves the scan to history to remember to drop it off later.',
            emotion: '😌 Calm — she has a clear next step',
            painPoint: 'No reminder system; she might forget the item sitting on her desk.',
            opportunity: 'Offer an optional reminder notification for items saved but not yet disposed of.',
          },
          {
            stage: 'Habit Formation',
            action: 'Returns daily to scan packaging before throwing things away.',
            emotion: '😄 Confident and consistent',
            painPoint: 'No progress tracking — she can\'t see her environmental impact over time.',
            opportunity: 'Add a weekly "impact summary" showing estimated CO₂ and landfill diversion from correct sorting.',
          },
        ],
      },
    },
  },
  {
    title: 'Timeless Tales',
    img: '/project2.jpg',
    summary:
      'Many users feel anxious, insecure, and discouraged from posting on traditional social platforms because of likes, comments, shares, and public visibility. Timeless Tales creates a safer and more private space where users can share stories, images, and moments without fear of being judged, compared, or evaluated.',
    date: '15/11/2024',
    figma: 'https://www.figma.com/design/b4gP74qs6ETKFXBBWcTPFT/Timeless-Tales?t=8QddqrBHc7KUey3k-0',
    status: 'Completed',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    caseStudy: {
      problemStatement:
        'Social media platforms incentivise public validation through likes, comments, and follower counts, creating a culture of comparison and anxiety. Users — especially younger audiences — self-censor meaningful moments because they fear negative judgement or simply don\'t feel their content is "good enough" to be seen.',
      solution:
        'Timeless Tales strips away all public metrics and social-comparison signals. Users post stories that are only visible to a curated close circle, with no like counts, no comment threads, and no algorithmic ranking. The platform is designed around authentic expression over performance.',
      uiImplementations: [
        'Deliberately soft, warm visual palette (cream, warm greys, muted ambers) to evoke a journal aesthetic rather than a social feed.',
        'Full-screen story cards with generous whitespace to let the content breathe — no sidebars or engagement widgets.',
        'Smooth Framer Motion page transitions that feel calm and unhurried, reinforcing the reflective tone of the product.',
        'Typography-first layout — readable serif fonts for story text that prioritise reading over scrolling.',
      ],
      uxImplementations: [
        'Removed all public engagement metrics (likes, share counts, comment threads) to eliminate comparison anxiety.',
        'Private-by-default sharing model: posts are only visible to explicitly invited connections.',
        'Time-locked posts ("tales") that expire after a set period, encouraging in-the-moment sharing without permanence anxiety.',
        'Intentional friction on publishing — a brief reflection prompt before posting to encourage thoughtful sharing.',
      ],
      empathyMap: {
        persona: 'Deki, 20 — design student who stopped posting on Instagram due to anxiety around engagement',
        says: [
          '"I wrote a whole caption, then deleted the post because I was scared nobody would like it."',
          '"I only post when I know it\'ll do well — otherwise what\'s the point?"',
          '"I want to share things but not feel like I\'m being judged all the time."',
        ],
        thinks: [
          'Believes her daily life isn\'t "aesthetic" enough for a public audience.',
          'Compares her engagement to friends\' posts and feels her content isn\'t good enough.',
          'Wishes she could share personal moments with close friends without a public performance.',
        ],
        does: [
          'Screenshots moments she wants to remember but never posts them publicly.',
          'Spends time editing photos to a "safe" standard before even considering posting.',
          'Uses private stories on Instagram but still worries about the 24-hour visibility window.',
        ],
        feels: [
          'Anxious before and after posting anything publicly.',
          'Relieved when she finds a space where performance metrics don\'t exist.',
          'Nostalgic for the early internet when sharing felt genuine and low-stakes.',
        ],
      },
      userJourney: {
        scenario: 'Deki wants to share a personal journal entry and a photo from a hike with her close friends.',
        stages: [
          {
            stage: 'Motivation',
            action: 'Has a meaningful moment on a hike and wants to share it with close friends.',
            emotion: '🥰 Happy but hesitant — unsure which platform feels safe',
            painPoint: 'Instagram feels too public; WhatsApp feels too casual and the message will get buried.',
            opportunity: 'Position Timeless Tales as the intentional middle ground — private, lasting, and personal.',
          },
          {
            stage: 'Creating a Tale',
            action: 'Opens the app, writes her journal entry, and attaches the photo.',
            emotion: '😊 Comfortable — the editor feels like a journal, not a post composer',
            painPoint: 'Unsure how long the post will remain visible and who exactly will see it.',
            opportunity: 'Show a clear, friendly visibility summary before publishing ("Only your 4 close friends · Expires in 7 days").',
          },
          {
            stage: 'Publishing',
            action: 'Taps "Share" — a reflection prompt appears asking "Is this the story you want to tell?"',
            emotion: '🤔 Pauses to think — feels more intentional than a regular post',
            painPoint: 'The prompt could feel annoying if the user is in a quick-share mood.',
            opportunity: 'Make the reflection prompt skippable after the first 3 uses, so it becomes optional habit, not friction.',
          },
          {
            stage: 'Connection',
            action: 'A close friend responds with a voice note rather than a typed comment.',
            emotion: '😭 Deeply touched — feels like a real conversation, not a performance',
            painPoint: 'No way to know if friends have read the tale without read receipts.',
            opportunity: 'Add a subtle, opt-in "seen" indicator (e.g., initials only) that doesn\'t feel like surveillance.',
          },
          {
            stage: 'Looking Back',
            action: 'Revisits the tale a month later in her archive.',
            emotion: '😌 Warm and reflective — the moment is preserved without the anxiety of a live post',
            painPoint: 'Archive has no organisation; hard to find specific memories.',
            opportunity: 'Add auto-generated memory tags (location, mood, people) to make the archive searchable.',
          },
        ],
      },
    },
  },
];

const filters = ['All', 'Completed', 'In Progress'];

const statusStyles = {
  Completed: 'bg-green-50 text-green-700 border-green-200',
  'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
};

/* ================================================================
   EMPATHY MAP COMPONENT
================================================================ */
const empathyQuadrants = [
  { key: 'says',   label: 'Says',   color: 'border-blue-200 bg-blue-50',   dot: 'bg-blue-400',   head: 'text-blue-700' },
  { key: 'thinks', label: 'Thinks', color: 'border-purple-200 bg-purple-50', dot: 'bg-purple-400', head: 'text-purple-700' },
  { key: 'does',   label: 'Does',   color: 'border-amber-200 bg-amber-50',  dot: 'bg-amber-400',  head: 'text-amber-700' },
  { key: 'feels',  label: 'Feels',  color: 'border-rose-200 bg-rose-50',    dot: 'bg-rose-400',   head: 'text-rose-700' },
];

const EmpathyMapSection = ({ data }) => (
  <div className="rounded-2xl border border-pink-100 bg-pink-50 p-5">
    <div className="flex items-center gap-2 mb-1 font-semibold text-sm text-pink-600">
      <Heart className="w-5 h-5" />
      Empathy Map
    </div>
    <p className="text-xs text-gray-500 mb-4 italic">Persona: {data.persona}</p>
    <div className="grid grid-cols-2 gap-3">
      {empathyQuadrants.map(({ key, label, color, dot, head }) => (
        <div key={key} className={`rounded-xl border p-3 ${color}`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${head}`}>{label}</p>
          <ul className="space-y-1.5">
            {data[key].map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 leading-snug">
                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${dot}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

/* ================================================================
   USER JOURNEY MAP COMPONENT
================================================================ */
const emotionColors = {
  '😐': 'text-gray-500',
  '😟': 'text-orange-500',
  '😮': 'text-blue-500',
  '😊': 'text-green-600',
  '😕': 'text-orange-400',
  '😲': 'text-blue-500',
  '😯': 'text-purple-500',
  '😌': 'text-teal-600',
  '😄': 'text-green-600',
  '🥰': 'text-pink-500',
  '🤔': 'text-amber-600',
  '😭': 'text-indigo-500',
  '😐': 'text-gray-500',
};

const UserJourneySection = ({ data }) => (
  <div className="rounded-2xl border border-teal-100 bg-teal-50 p-5">
    <div className="flex items-center gap-2 mb-1 font-semibold text-sm text-teal-700">
      <Map className="w-5 h-5" />
      User Journey Map
    </div>
    <p className="text-xs text-gray-500 mb-4 italic">Scenario: {data.scenario}</p>

    <div className="space-y-3">
      {data.stages.map((s, i) => (
        <div key={i} className="bg-white rounded-xl border border-teal-100 overflow-hidden">
          {/* Stage header */}
          <div className="flex items-center gap-3 px-4 py-2 bg-teal-600">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              {i + 1}. {s.stage}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* Left: action + emotion */}
            <div className="px-4 py-3 space-y-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Action</p>
                <p className="text-xs text-gray-700 leading-snug">{s.action}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Emotion</p>
                <p className="text-xs text-gray-700 leading-snug">{s.emotion}</p>
              </div>
            </div>

            {/* Right: pain point + opportunity */}
            <div className="px-4 py-3 space-y-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-rose-400 mb-0.5">Pain Point</p>
                <p className="text-xs text-gray-700 leading-snug">{s.painPoint}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-600 mb-0.5">Opportunity</p>
                <p className="text-xs text-gray-700 leading-snug">{s.opportunity}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ================================================================
   CASE STUDY MODAL
================================================================ */
const CaseStudyModal = ({ project, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const cs = project.caseStudy;

  const textSections = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: 'Problem Statement',
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-100',
      dot: 'bg-rose-400',
      content: cs.problemStatement,
      type: 'text',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      label: 'Solution',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-100',
      dot: 'bg-amber-400',
      content: cs.solution,
      type: 'text',
    },
    {
      icon: <Layers className="w-5 h-5" />,
      label: 'UI Implementations',
      color: 'text-[#8A6FE8]',
      bg: 'bg-purple-50 border-purple-100',
      dot: 'bg-purple-400',
      content: cs.uiImplementations,
      type: 'list',
    },
    {
      icon: <MousePointer2 className="w-5 h-5" />,
      label: 'UX Implementations',
      color: 'text-teal-600',
      bg: 'bg-teal-50 border-teal-100',
      dot: 'bg-teal-400',
      content: cs.uxImplementations,
      type: 'list',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
        />

        {/* Panel */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3 pr-8">
              <div className="p-[1.5px] rounded-xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)]">
                <div className="bg-white rounded-[10px] px-2 py-1">
                  <span className="text-xs font-semibold text-[#8A6FE8] tracking-wide uppercase">Case Study</span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-900 leading-snug">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto p-6 flex flex-col gap-5">

            {/* Problem Statement & Solution & UI/UX */}
            {textSections.map((sec) => (
              <div key={sec.label} className={`rounded-2xl border p-5 ${sec.bg}`}>
                <div className={`flex items-center gap-2 mb-3 font-semibold text-sm ${sec.color}`}>
                  {sec.icon}
                  {sec.label}
                </div>
                {sec.type === 'text' ? (
                  <p className="text-gray-700 text-sm leading-relaxed">{sec.content}</p>
                ) : (
                  <ul className="space-y-2">
                    {sec.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${sec.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Empathy Map */}
            {cs.empathyMap && <EmpathyMapSection data={cs.empathyMap} />}

            {/* User Journey */}
            {cs.userJourney && <UserJourneySection data={cs.userJourney} />}

            {/* Footer links */}
            <div className="flex flex-wrap gap-3 pt-1 pb-2">
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-gray-800 text-xs font-medium hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors"
                >
                  <Figma className="w-3.5 h-3.5" />
                  View in Figma
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-[#8A6FE8] to-[#B388EB] hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ================================================================
   FEATURED PROJECT
================================================================ */
const FeaturedProject = ({ project, onCaseStudy }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={0}
    className="w-full max-w-6xl mb-16"
  >
    <div className="flex items-center gap-2 mb-5 justify-center lg:justify-start">
      <Sparkles className="w-4 h-4 text-[#8A6FE8]" />
      <span className="text-xs uppercase tracking-widest text-[#8A6FE8] font-semibold">Featured project</span>
    </div>

    <div className="p-[1.5px] rounded-3xl bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-lg">
      <div className="bg-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-[360px]">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyles[project.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {project.date}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{project.title}</h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">{project.summary}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.caseStudy && (
              <button
                onClick={() => onCaseStudy(project)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] hover:opacity-90 transition-opacity shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                Case Study
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="p-[1.5px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-flex">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-sm font-medium hover:bg-transparent hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </span>
              </a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors">
                <Figma className="w-4 h-4" /> Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ================================================================
   PROJECT CARD
================================================================ */
const ProjectCard = ({ project, index, onCaseStudy }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
    whileHover={{ y: -6 }}
    className="group"
  >
    <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-200 group-hover:from-[#8A6FE8] group-hover:via-[#B388EB] group-hover:to-[#7C5FE9] transition-all duration-500 h-full">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <div className="relative h-48 w-full overflow-hidden">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${statusStyles[project.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
            {project.status}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {project.date}
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#8A6FE8] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full border border-gray-200">{t}</span>
            ))}
          </div>

          <div className="flex-grow" />

          <div className="mt-5 flex flex-wrap gap-2">
            {project.caseStudy && (
              <button
                onClick={() => onCaseStudy(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-[#8A6FE8] to-[#B388EB] hover:opacity-90 transition-opacity shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Case Study
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors">
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-gray-700 border border-gray-300 hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors">
                Demo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-gray-900 text-xs font-medium hover:border-[#8A6FE8] hover:text-[#8A6FE8] transition-colors">
                <Figma className="w-3.5 h-3.5" /> Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ================================================================
   PAGE
================================================================ */
const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [caseStudyProject, setCaseStudyProject] = React.useState(null);

  const featured = projectData.find((p) => p.featured);
  const rest = projectData.filter((p) => !p.featured);
  const filtered = activeFilter === 'All' ? rest : rest.filter((p) => p.status === activeFilter);

  return (
    <div className="flex flex-col items-center my-20 px-4 md:px-10 lg:px-16">
      {caseStudyProject && (
        <CaseStudyModal project={caseStudyProject} onClose={() => setCaseStudyProject(null)} />
      )}

      <motion.p className="text-gray-400 tracking-widest text-sm" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        — MY PROJECTS
      </motion.p>

      <motion.h2 className="text-4xl md:text-5xl font-bold text-center mt-3 text-black" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}>
        A glimpse into what <br className="hidden sm:block" /> I've built over the years.
      </motion.h2>

      <motion.p className="text-center text-[#5F5F5F] opacity-70 max-w-2xl mt-4 text-base md:text-lg" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={2}>
        A mix of shipped products, experiments, and ongoing work — from AI assistants to full-stack platforms.
      </motion.p>

      <div className="mt-14 w-full flex justify-center">
        {featured && <FeaturedProject project={featured} onCaseStudy={setCaseStudyProject} />}
      </div>

      <motion.div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {filters.map((f) => {
          const count = f === 'All' ? rest.length : rest.filter((p) => p.status === f).length;
          const isActive = activeFilter === f;
          return (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all ${isActive ? 'text-white border-transparent bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] shadow-md' : 'text-gray-700 border-gray-200 hover:border-[#8A6FE8] hover:text-[#8A6FE8]'}`}>
              {f}
              <span className={`ml-2 text-xs ${isActive ? 'opacity-90' : 'opacity-60'}`}>{count}</span>
            </button>
          );
        })}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onCaseStudy={setCaseStudyProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No projects in this category yet.</p>
      )}
    </div>
  );
};

export default Projects;
