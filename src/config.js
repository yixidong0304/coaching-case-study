/**
 * ============================================================
 * PROJECT CONFIGURATION
 * Replace placeholders below before publishing this portfolio.
 * ============================================================
 */

/** @replace Course module URL — Experience the course / View Course CTAs */
export const COURSE_URL = 'https://coaching-skills-module.vercel.app'

/** @replace Full process report URL — Read the full process report CTA */
export const REPORT_URL = ''

/** @replace Portfolio home URL — Back to portfolio CTA */
export const PORTFOLIO_URL = 'https://cicidong.com/'

/**
 * Gallery & screenshot image paths.
 * Place files in /public/images/ using these exact filenames.
 * Missing files show a polished placeholder with recommended dimensions.
 *
 * Recommended dimensions:
 * - hero-course.png:                 1280 × 800
 * Design decision media (public/images/):
 * - before-oscar-slide.png
 * - after-oscar-meet.mov
 * - before-oscar-example.png
 * - after-oscar-stepthrough.mov
 * - before-grow-slide.png
 * - after-grow-meet.png
 * - after-sam-feedback.mov
 * - after-grow-feedback.mov
 * - before-situations-slide.png
 * - after-situations-practice.mov
 * - before-reference-content.png
 * - after-reference-popups.mov
 * - after-coaching-cards.mov
 *
 * Video: .mov or .mp4 — autoplay, loop, muted, playsInline.
 * Image: static screenshot via ScreenshotImage when present.
 */
export const IMAGES = {
  hero: {
    src: '/images/hero-course.png',
    alt: 'Course interface welcome screen for Coaching Skills for Managers',
    label: 'Course interface screenshot',
    filename: 'hero-course.png',
    dimensions: '1600 × 833',
  },
  /**
   * Content architecture section: ILT source → redesigned flow → knowledge check.
   * @replace Add files to /public/images/ using the filenames below.
   */
  contentArchitecture: {
    sourceSlides: {
      src: '/images/source-slide-sequence.png',
      alt: 'Original instructor-led PowerPoint slides on coaching definitions, attitude, and manager-versus-coach distinction, labeled Original ILT source',
      label: 'Original ILT source collage',
      filename: 'source-slide-sequence.png',
      dimensions: '1280 × 720',
      badge: 'Original ILT source',
    },
    redesignedFlow: {
      src: '/images/redesigned-learning-flow.png',
      alt: 'Redesigned eLearning sequence showing Coaching IS/IS NOT, Two ways to respond, and Same leader two modes screens',
      label: 'Redesigned learning-flow collage',
      filename: 'redesigned-learning-flow.png',
      dimensions: '1280 × 800',
    },
    knowledgeCheck: {
      src: '/images/coaching-directing-check.png',
      alt: 'Redesigned eLearning two-item knowledge check with explanatory feedback on coaching versus directing',
      label: 'Coaching-versus-directing knowledge check',
      filename: 'coaching-directing-check.png',
      dimensions: '1280 × 900',
    },
  },
  decisions: [
    {
      id: 'oscar-step',
      src: '/images/oscar-step-through.png',
      alt: 'OSCAR step-through experience showing framework guidance beside a building coaching conversation',
      label: 'OSCAR step-through screenshot',
      filename: 'oscar-step-through.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'oscar-scenario',
      src: '/images/oscar-scenario.png',
      alt: 'Branching OSCAR practice scenario where the learner coaches Sam',
      label: 'Coach Sam branching scenario screenshot',
      filename: 'oscar-scenario.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'coaching-cards',
      src: '/images/coaching-cards.png',
      alt: 'Downloadable OSCAR, questioning, and GROW coaching job aid cards',
      label: 'Coaching job aids screenshot',
      filename: 'coaching-cards.png',
      dimensions: '1280 × 800',
    },
  ],
  gallery: [
    {
      id: 'welcome',
      src: '/images/hero-course.png',
      alt: 'Welcome screen stating the 30-minute learning commitment',
      caption: 'Welcome and 30-minute commitment',
      filename: 'hero-course.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'directing',
      src: '/images/coaching-directing.png',
      alt: 'Screen comparing coaching and directing approaches',
      caption: 'Coaching versus directing',
      filename: 'coaching-directing.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'oscar-demo',
      src: '/images/oscar-step-through.png',
      alt: 'OSCAR progressive demonstration with stepped conversation',
      caption: 'OSCAR step-through example',
      filename: 'oscar-step-through.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'oscar-practice',
      src: '/images/oscar-scenario.png',
      alt: 'OSCAR multi-turn branching practice scenario',
      caption: 'OSCAR practice scenario',
      filename: 'oscar-scenario.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'grow',
      src: '/images/grow-scenario.png',
      alt: 'GROW four-stage guided coaching conversation',
      caption: 'GROW in action',
      filename: 'grow-scenario.png',
      dimensions: '1280 × 800',
    },
    {
      id: 'cards',
      src: '/images/coaching-cards.png',
      alt: 'Coaching cards download and course completion screen',
      caption: 'Coaching cards and course completion',
      filename: 'coaching-cards.png',
      dimensions: '1280 × 800',
    },
  ],
  storyboard: {
    src: '/images/storyboard-excerpt.png',
    alt: 'Excerpt from the screen-level storyboard documenting learning intent and interactions',
    label: 'Storyboard excerpt screenshot',
    filename: 'storyboard-excerpt.png',
    dimensions: '1280 × 900',
  },
}

/** Learning objectives and alignment — Define Success section */
export const OBJECTIVES = [
  {
    id: 1,
    objective: 'Distinguish coaching from directing.',
    bloom: ['Understand', 'Analyze'],
    evidence: 'Scenario-based coaching-or-directing knowledge check.',
    icon: 'check',
  },
  {
    id: 2,
    objective: 'Apply OSCAR framework to structure feedback',
    bloom: ['Apply'],
    evidence:
      'Progressive worked example and multi-turn branching practice conversation.',
    icon: 'branch',
  },
  {
    id: 3,
    objective: 'Formulate powerful questions',
    bloom: ['Apply'],
    evidence:
      'Question-type matching practice and a reusable question library.',
    icon: 'question',
  },
  {
    id: 4,
    objective: 'Use GROW framework to run conversation.',
    bloom: ['Apply'],
    evidence:
      'Four-stage guided coaching conversation with feedback on every selection.',
    icon: 'stages',
  },
  {
    id: 5,
    objective: 'Select the right coaching approach.',
    bloom: ['Analyze', 'Evaluate'],
    evidence:
      'Real-situation scenario selector and comparison with a model response.',
    icon: 'compare',
  },
]

/** Module blueprint — from content-source.md */
export const JOURNEY = [
  {
    stage: 'Introduction',
    summary:
      'Reframe coaching as a different way of communicating rather than an additional task. Establish the approximately 30-minute commitment.',
    items: [],
  },
  {
    stage: 'Part 1: What is coaching?',
    summary: '',
    items: [
      'Coaching versus directing',
      'What coaching is and is not',
      'Manager and coach as two roles',
      'Coaching-or-directing knowledge check',
    ],
  },
  {
    stage: 'Part 2: How to coach',
    summary: '',
    subsections: [
      {
        title: 'Feedback through OSCAR',
        items: [
          'Introduce feedback as a conversation',
          'Reveal OSCAR progressively',
          'Demonstrate a full worked conversation',
          'Practice through a multi-turn scenario',
          'Download the OSCAR card',
        ],
      },
      {
        title: 'Listening and powerful questions',
        items: [
          'Connect listening and questioning',
          'Introduce four active-listening habits',
          'Introduce four families of questions',
          'Match questions to their purposes',
          'Explore and download the question library',
        ],
      },
    ],
  },
  {
    stage: 'Part 3: Coaching in real life',
    summary: '',
    items: [
      'Introduce GROW',
      'Complete a guided GROW conversation',
      'Choose an approach for realistic scenarios',
      'Clarify when coaching should not be used',
    ],
  },
  {
    stage: 'Wrap-up',
    summary: '',
    items: [
      'Reinforce three central takeaways',
      'Download OSCAR, questioning, and GROW cards',
      'Encourage use during the next real conversation',
    ],
  },
]
