import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TimelineItemCompany,
} from './dataDef';
/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ronnie Grover - Tech Enthusiast and Dad Developer',
  description: 'look for what you cant see',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Ronnie`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        an <strong className="text-stone-100">Tech Enthusiast</strong>, actively seeking
        <strong className="text-stone-100"> new projects and work opportunities</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        If you have a <strong className="text-stone-100">project or role</strong> in mind, I would{' '}
        <strong className="text-stone-100"> love</strong> to discuss it with you
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://storage.googleapis.com/www.ronniegrover.com/rg-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I bring the power of cloud expertise and over a decade of systems administration experience to small and medium sized businesses. Now as an IT Consultant and Web Developer, I bring a dynamic approach to solving IT business challenges with web design, development and automation. I help companies optimize their online presence, streamline SaaS applications, and bridge the gap between IT and business goals.`,

  aboutItems: [
    {label: 'Location', text: 'TX | SC', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Employment', text: 'Open to work opportunities', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Family, Web Development, Working Out', Icon: SparklesIcon},
    {
      label: 'Study',
      text: 'CIT Networking, Google Workspace Admin, AWS Certified Cloud Practitioner',
      Icon: AcademicCapIcon,
    },
    {
      label: 'Nationality',
      text: '50% Indonesian / 20% Italian / 20% French & German / 10% British & Irish',
      Icon: FlagIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML | CSS | Javascript',
        level: 6,
      },
      {
        name: 'Nextjs | Frameworks | Libraries',
        level: 5,
      },
      {
        name: 'Web Design | Responsive Design',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Object-oriented (OOP)',
        level: 4,
      },
      {
        name: 'Functional Programming',
        level: 3,
      },
      {
        name: 'Back-End Frameworks',
        level: 5,
      },
    ],
  },
  {
    name: 'Dad Developer',
    skills: [
      {
        name: 'Luck',
        level: 2,
      },
      {
        name: 'Believe',
        level: 3,
      },
      {
        name: 'Evolve',
        level: 7,
      },
    ],
  },
  {
    name: 'Super Grover Developer',
    skills: [
      {
        name: 'Luck',
        level: 4,
      },
      {
        name: 'Believe',
        level: 1,
      },
      {
        name: 'Evolve',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Solidx IT',
    description: 'Solidx IT and Web Development',
    url: 'https://solidxit.com/',
    image: porfolioImage1,
  },
  {
    title: 'Grover 2D Journey',
    description: 'Follow Grover along his 2D journey',
    url: 'https://2d-grover.pages.dev/',
    image: porfolioImage2,
  },
  {
    title: 'Cookies for Skylar',
    description: 'Website for my amazing niece Skylar',
    url: 'https://sky.solidxit.com/',
    image: porfolioImage3,
  },
  {
    title: 'Soul Good',
    description: 'Cultivate equanimity and live with grace',
    url: 'https://soulgood.pages.dev/',
    image: porfolioImage4,
  },
];

/**
 * export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rgrover00'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ronniegrover/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ronniekgrover/'},
  {label: 'Calendar', Icon: CalendarDaysIcon, href: 'https://cal.com/ronniegrover'},
];

 */
export const education: TimelineItem[] = [
  {
    date: 'September 2023',
    location: 'Google Cloud Platform (GCP)',
    title: 'Professional Google Workspace Administrator',
    badge: 'GCP', // Insert the image here
    content: (
      <p>
        Transforms business objectives into tangible Google Workspace configurations, policies, and security practices
        as they relate to users, content, and integrations. Through their understanding of their organization's
        infrastructure, Google Workspace Administrators let people work together, communicate, and access data in a
        secure and efficient manner.
      </p>
    ),
  },
  {
    date: 'September 2023',
    location: 'Amazon Web Services (AWS)',
    title: 'AWS Certified Cloud Practitioner',
    badge: 'AWS',
    content: (
      <p>
        Technical professional who manages an organization's cloud computing architecture. They design, deploy, and
        maintain cloud-based solutions, and work with other IT professionals to ensure the cloud environment is secure,
        available, and operates as expected.
      </p>
    ),
  },
  {
    date: 'May 2013',
    location: 'Suny Orange (Middletown, NY)',
    title: 'Computer Information Technology - Networking',
    badge: '',
    content: (
      <p>
        Understanding network components (routers, switches, firewalls), different network types (LAN, WAN, wireless),
        and network protocols (TCP/IP). How to protect networks from threats, implement security measures, and perform
        vulnerability assessments. Configuration, troubleshooting, and maintaining networks. Involving hardware and
        software setup, performance optimization, and user support.
      </p>
    ),
  },
];

export const experience: TimelineItemCompany[] = [
  {
    date: 'August 2018 - May 2023',
    company: '11:11 Systems',
    title: 'IT Systems Administrator',
    content: (
      <div>
        • Led the creation and implementation of the IT department for a rapidly growing cloud solution provider.
        Maintained operational excellence across infrastructure, systems, security, and communications.
        <div>
          {' '}
          <br />
        </div>
        • Designed and executed automation workflows using Okta, Jamf, Active Directory, Google Workspace, and other
        tools. Optimized efficiency and accuracy throughout employee lifecycle processes.
        <div>
          {' '}
          <br />
        </div>
        • Collaborated with cross-functional teams to diagnose, troubleshoot, and resolve complex technical issues
        related to systems and integrations.
        <div>
          {' '}
          <br />
        </div>
        • Proactively partnered with IT leadership and security team to enforce security protocols, maintain compliance,
        and safeguard data integrity.
      </div>
    ),
  },
  {
    date: 'May 2016 - May 2018',
    company: 'ConvergeOne',
    title: 'Network Engineer',
    content: (
      <div>
        • Maintained mission-critical network infrastructure for government entities, ensuring uninterrupted
        communication and operational efficiency.
        <div>
          {' '}
          <br />
        </div>
        • Configured and deployed network devices (routers, switches, firewalls, load balancers) to optimize performance
        and reliability.
        <div>
          {' '}
          <br />
        </div>
        • Analyzed business needs and successfully implemented tailored network solutions in collaboration with diverse
        teams.
        <div>
          {' '}
          <br />
        </div>
        • Performed network capacity planning, recommending and executing upgrades to support evolving business demands.
      </div>
    ),
  },
  {
    date: 'May 2012 - May 2016',
    company: 'Charter Communications',
    title: 'Commercial Tech Ops Support',
    content: (
      <div>
        • Improved technical support processes, slashing response times by 20% and boosting customer satisfaction by
        15%.
        <div>
          {' '}
          <br />
        </div>
        • Managed logistical coordination for projects, ensuring timely material delivery and minimizing operational
        downtime.
        <div>
          {' '}
          <br />
        </div>
        • Performed hardware inventory management, ensuring accurate tracking and efficient allocation.
        <div>
          {' '}
          <br />
        </div>
        • Troubleshot software compatibility issues, enhancing end-user experiences.
        <div>
          {' '}
          <br />
        </div>
        • Served as primary escalation point for Tier-1 and Tier-2 support, resolving complex technical problems.
        <div>
          {' '}
          <br />
        </div>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jeff Polczynski',
      text: 'Ronnie is the IT Manager everyone dreams of: can-do attitude, quick to respond, friendly, motivated, and always gets things resolved. There has been multiple times I had to asked Ronnie and team for some oddball request for help with an impossible due date. Time and again, he took my walk-up request, formulated it into a ticket, and solved my problem quicker than should be possible',
      image: 'https://storage.googleapis.com/www.ronniegrover.com/images/linkedin01.png',
    },
    {
      name: 'Andrew Cruz',
      text: 'Ronnie is an excellent leader and mentor. He leads by example and is not above getting in the trenches and working side by side with his team. He is very knowledgeable and is an asset to any organization he is apart of.',
      image: 'https://storage.googleapis.com/www.ronniegrover.com/images/linkedin02.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Send a message or schedule a meeting',
  description:
    'As stay-at-home dad developer I have a deep understanding of the challenges faced by small businesses, entrepreneurs, and individuals, making everything more relatable and better suited to meeting your specific needs.',
  items: [
    {
      type: ContactType.Calendar,
      text: 'Schedule a meeting',
      href: 'https://cal.com/ronniegrover/',
    },
    {
      type: ContactType.Location,
      text: 'OK | NY | TX | SC',
      href: 'https://www.google.ca/maps/place/Mid+Del+Taco+Inc/@35.4494386,-97.4409019,19.5z/data=!4m6!3m5!1s0x87b21620e38f1a41:0xf52603da124d63e6!8m2!3d35.4494486!4d-97.4404811!16s%2Fg%2F1tc_95b_?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@ronniekgrover',
      href: 'https://www.instagram.com/ronniekgrover/',
    },
    {
      type: ContactType.Github,
      text: 'rgrover00',
      href: 'https://github.com/rgrover00',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rgrover00'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ronniegrover/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ronniekgrover/'},
  {label: 'Calendar', Icon: CalendarDaysIcon, href: 'https://cal.com/ronniegrover'},
];
