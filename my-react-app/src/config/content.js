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

export const ABOUT = {
    headline: 'Software Developer II @ Eliassen Group (Remote) | BS | Mountain View, CA',
    summary:
        'Full Stack Developer with 5+ years building and maintaining production web applications ' +
        'in Angular (v11–v22) and Java 17 (Spring Boot). Owned a two-year migration across eleven ' +
        'major Angular releases; built RESTful APIs, Jenkins CI/CD pipelines, and automated test ' +
        'suites with JUnit 5, Selenium, and Cucumber. Mentors junior developers through code ' +
        'review and introduced AI-assisted development tooling to the team\'s workflow.',
    highlights: [
        'Led Angular v11→v22 modernization across eleven major releases with zero user-facing downtime',
        'Architected reusable Angular components and shared services that accelerated enterprise feature delivery',
        'Designed and built Java 17 / Spring Boot REST APIs and Jenkins CI/CD pipelines',
        'Automated testing with JUnit 5, Selenium, and Cucumber; Google UX Design certified',
        'Mentored juniors and introduced AI-assisted tooling (Cursor, Claude Code) into the team workflow'
    ],
    skills: [
        'Angular (v11–v22)',
        'TypeScript',
        'Java 17',
        'Spring Boot',
        'RxJS',
        'Jenkins',
        'Docker',
        'MySQL',
        'JUnit 5',
        'Selenium',
        'Cucumber',
        'Git'
    ]
};

export const PORTFOLIO_PROJECTS = [
    {
        date: 'Web Development',
        title: 'JustShare\nFile Sharing Platform',
        image: 'images/just-share.jpg',
        description:
            'A modern file sharing application built with React, TypeScript, and Vite. ' +
            'Demonstrates growth engineering principles, monetization strategies, and full-stack ' +
            'development skills. Features include sign-up flow, trial conversion, dashboard with ' +
            'file management, storage tracking, and premium upsell flow.',
        tags: ['React', 'TypeScript', 'Vite'],
        repoUrl: 'https://github.com/jsowden2015/JustShare'
    },
    {
        date: 'UI/UX Design',
        title: 'ParkPay\nParking Payment App',
        image: 'images/parkpay-mobile-app.jpg',
        description:
            'A comprehensive UX/UI design project for Google UX Certification. Multi-platform ' +
            'parking ticket payment application with iOS mobile app and responsive desktop web app. ' +
            'Features streamlined four-step process (lookup, review, payment, confirmation) with ' +
            'progress indicators, plus complete design system and design documentation.',
        tags: ['Figma', 'UX Research', 'Design System'],
        repoUrl: 'https://github.com/jsowden2015/Parkingticketpaymentdesign'
    },
    {
        date: 'Frontend Development',
        title: 'JustStream\nWebApp',
        image: 'images/just-stream.jpg',
        description:
            'A modern, full-featured streaming service dashboard built with React, TypeScript, ' +
            'and Redux Toolkit. Features infinite scrolling, lazy loading, video player ' +
            'integration, code splitting, error handling, and CI/CD pipeline setup.',
        tags: ['React', 'TypeScript', 'Redux Toolkit'],
        repoUrl: 'https://github.com/jsowden2015/JustStream'
    },
    {
        date: 'Full Stack Development',
        title: 'JustChat\nApplication',
        image: 'images/just-chat.jpg',
        description:
            'A modern, real-time chat application built with React, Firebase, and Redux. ' +
            'Features real-time messaging with typing indicators and reactions, Google ' +
            'authentication, rich messaging (images, emojis, mentions, message editing), ' +
            'voice channels with mic controls, member presence tracking, and browser ' +
            'notifications. Discord-inspired UI built for learning and portfolio demonstration.',
        tags: ['React', 'Firebase', 'Redux'],
        repoUrl: 'https://github.com/jsowden2015/react-firebase-chat-demo'
    }
];
