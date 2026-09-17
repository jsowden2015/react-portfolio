/**
 * Static content: contact info, about copy, and portfolio projects.
 */

export const CONTACT_EMAIL = 'justinpsowden@gmail.com';

export const CONTACT_INFO = [
    {
        title: 'Location',
        content: 'Mountain View, CA'
    },
    {
        title: 'Email',
        content: CONTACT_EMAIL,
        isLink: true
    }
];

export const HERO = {
    kicker: 'Software Developer II · Mountain View, CA',
    name: 'Justin Sowden',
    role: 'Interface-minded full-stack developer',
    lead:
        'I design and ship production UI in Angular and React. Google UX certified, ' +
        'with a two-year Angular v11→v22 migration that landed with zero user-facing downtime.',
    cta: 'Get in touch'
};

export const ABOUT = {
    kicker: 'Software Developer II · Mountain View, CA',
    title: 'About',
    lede: 'I care about how interfaces feel in production — clarity, consistency, and systems that age well.',
    summary:
        'Full-stack developer with 5+ years shipping Angular and Java web apps. I own long-lived ' +
        'UI surfaces end to end: component systems, accessibility, and the APIs and pipelines ' +
        'behind them. Google UX Design certified.',
    experience: {
        role: 'Software Developer II',
        org: 'Eliassen Group',
        detail: 'Remote · Angular (v11–v22), TypeScript, Java 17 / Spring Boot'
    },
    highlights: [
        {
            title: 'Angular modernization',
            detail:
                'Led a two-year v11→v22 migration across eleven major releases with zero user-facing downtime.'
        },
        {
            title: 'Shared UI systems',
            detail:
                'Built reusable Angular components and services that sped up enterprise feature delivery.'
        },
        {
            title: 'Platform & quality',
            detail:
                'Designed Spring Boot REST APIs, Jenkins CI/CD, and automated suites with JUnit 5, Selenium, and Cucumber.'
        },
        {
            title: 'Mentorship & tooling',
            detail:
                'Mentored juniors through code review and introduced AI-assisted development into the team workflow.'
        }
    ],
    skillGroups: [
        {
            label: 'Interface',
            skills: ['Angular (v11–v22)', 'React', 'TypeScript', 'RxJS', 'Figma', 'UX research']
        },
        {
            label: 'Platform',
            skills: ['Java 17', 'Spring Boot', 'MySQL', 'Docker', 'Jenkins', 'Git']
        },
        {
            label: 'Quality',
            skills: ['JUnit 5', 'Selenium', 'Cucumber', 'Accessibility', 'Design systems']
        }
    ]
};

export const CONTACT = {
    title: 'Get in touch',
    lede: 'Available for remote roles and selected freelance. I read every message.'
};

export const PORTFOLIO_PROJECTS = [
    {
        date: 'Web Development',
        title: 'JustShare\nFile Sharing Platform',
        image: 'images/just-share.jpg',
        imageAlt:
            'JustShare dashboard showing file management, storage usage, and premium upsell UI',
        description:
            'React + TypeScript file sharing product with signup, storage tracking, and a premium upsell path.',
        tags: ['React', 'TypeScript', 'Vite'],
        repoUrl: 'https://github.com/jsowden2015/JustShare'
    },
    {
        date: 'UI/UX Design',
        title: 'ParkPay\nParking Payment App',
        image: 'images/parkpay-mobile-app.jpg',
        imageAlt:
            'ParkPay mobile and desktop mockups for a four-step parking ticket payment flow',
        outcome:
            'Google UX Certification project — a four-step parking ticket payment flow across iOS and responsive web.',
        description:
            'Research through high-fidelity UI: ticket lookup, review, payment, and confirmation, with progress ' +
            'indicators and a documented design system for mobile and desktop.',
        tags: ['Figma', 'UX Research', 'Design System'],
        featured: true,
        repoUrl: 'https://github.com/jsowden2015/Parkingticketpaymentdesign'
    },
    {
        date: 'Frontend Development',
        title: 'JustStream\nWebApp',
        image: 'images/just-stream.jpg',
        imageAlt:
            'JustStream streaming dashboard with content rows and video browsing UI',
        description:
            'Streaming dashboard with infinite scroll, lazy loading, video playback, and code-split routes.',
        tags: ['React', 'TypeScript', 'Redux Toolkit'],
        repoUrl: 'https://github.com/jsowden2015/JustStream'
    },
    {
        date: 'Full Stack Development',
        title: 'JustChat\nApplication',
        image: 'images/just-chat.jpg',
        imageAlt:
            'JustChat Discord-style interface with channels, messages, and member presence',
        description:
            'Real-time chat with channels, presence, reactions, and Google auth — built on React and Firebase.',
        tags: ['React', 'Firebase', 'Redux'],
        repoUrl: 'https://github.com/jsowden2015/react-firebase-chat-demo'
    }
];
