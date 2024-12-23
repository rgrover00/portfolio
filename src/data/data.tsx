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
import DreamSolidx from '../images/portfolio/dream-solidx.png';
import GroverJourney from '../images/portfolio/groverjourney.png';
import Margo from '../images/portfolio/margo.png';
import Skylar from '../images/portfolio/skylar.png';
import Solidx from '../images/portfolio/solidx.png';
import SoulGood from '../images/portfolio/soulgood.png';
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
  title: 'Ronnie Grover ',
  description: 'Tech Enthusiast and Dad Developer',
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
        <a className="hover:text-stone-300" 
           href="https://www.credly.com/users/ronniegrover" 
           rel="noopener noreferrer" 
           target="_blank">Bridging Technology and Life</a>
      </p>
    </>
  ),
  actions: [
    {
      href: '/#resume',
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
  description: (
    <>
        Hey there! I’m Ronnie — a tech enthusiast, network engineer, and proud dad of three. With over a decade of experience in the telecom and cloud industries, I specialize in streamlining complex systems, optimizing SaaS applications, and keeping everything secure and running smoothly. Currently, I work in the BCSD as a member of the NOC team, ensuring the network is secure and systems stay connected and efficient.
        <br />
        <br />
            <span className="font-bold">My Approach to Technology:</span>
          <br />
        I believe technology should evolve with its users. My goal is to bridge the gap between IT and everyone else, translating complex concepts into plain English so teams can work better together. I’m passionate about solving problems with creativity, hard work, and adaptability, both on the job and in my personal projects.
          <br />
          <br />
            <span className="font-bold">Beyond IT: My Personal Passions:</span>
          <br />
          Outside of work, I’m a family guy through and through. My wife and I have been married for 10 years, and we’re raising three amazing kids: Ayla (4), Bryson (2), and our newest addition, baby Everly. Life is a bit chaotic, but it’s also full of joy (and a few dad jokes).
          <br />
          <br />
          When I’m not with my family, you’ll find me in my garage gym or tinkering with self-hosted setups and web apps. I love experimenting with frameworks like TypeScript, Next.js, and React to build user-friendly solutions that make life easier.
          <br />
          <br />
            <span className="font-bold">Let’s Connect!</span>
          <br />
            If you're looking for a tech-savvy problem-solver who's passionate about IT (and maybe has a dad joke or two), feel free to reach out! 
          <br />
          <br />
            Check out my <a className="text-blue-400 hover:text-blue-300" href="https://www.credly.com/users/ronniegrover" rel="noopener noreferrer" target="_blank">certifications on Credly</a>
    </>
  ),

  aboutItems: [
    {label: 'Location', text: 'South Carolina', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Employment', text: 'BCSD', Icon: BuildingOffice2Icon},
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
        level: 5,
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
    name: 'Fitness Development',
    skills: [
      {
        name: 'Bench',
        level: 5,
      },
      {
        name: 'Squat',
        level: 4,
      },
      {
        name: 'Deadlift',
        level: 3,
      },
    ],
  },
  {
    name: 'Super Grover Developer',
    skills: [
      {
        name: 'Luck',
        level: 7,
      },
      {
        name: 'Believe',
        level: 6,
      },
      {
        name: 'Evolve',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Solidx',
    description: 'Solidx - Web Development',
    url: 'https://solidxit.com/',
    image: Solidx,
  },
  {
    title: 'Solidx',
    description: 'Demo Solidx Website',
    url: 'https://dream.solidxit.com/',
    image: DreamSolidx,
  },
  {
    title: 'Grover 2D Journey',
    description: 'Follow Grover along his 2D journey',
    url: 'https://2d-grover.pages.dev/',
    image: GroverJourney,
  },
  {
    title: 'Soul Good',
    description: 'Demo Soul Good Website',
    url: 'https://soulgood.pages.dev/',
    image: SoulGood,
  },
  {
    title: 'Softball with Margo',
    description: 'Coaching with Margo',
    url: 'https://softballwithmargo.solidxit.com/',
    image: Margo,
  },
  {
    title: 'Skylar Rose Foundation',
    description: 'Website for the Skylar Rose Foundation',
    url: 'https://skylar.solidxit.com/',
    image: Skylar,
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
    title: <a href="https://www.credly.com/badges/9326752a-fa71-4847-b389-6f6ba2c2d55a">Professional Google Workspace Administrator</a>,
    badge: 'GCP',
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
    title: <a href="https://www.credly.com/badges/7d158fba-78dd-4017-a737-21b676a6cf62">AWS Certified Cloud Practitioner</a>,
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
    title: <a href="https://sunyorange.edu/computerscience/citnet/index.html">Computer Information Technology - Networking</a>,
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
    title: 'IT Manager',
    content: (
      <div>
        • Spearheaded the successful integration of acquired companies into the existing Google Workspace and Okta environment, ensuring data integrity, minimal downtime, and a seamless user experience for all employees.
        <div>
          {' '}
          <br />
        </div>
        • Leveraged deep Google Workspace product knowledge to troubleshoot complex technical issues, including account management, policy configurations, and integration challenges with Okta and other SaaS applications.
        <div>
          {' '}
          <br />
        </div>
        • Integrated various SaaS cloud applications into Okta with Google SSO, simplifying user access and authentication while maintaining robust security measures.
        <div>
          {' '}
          <br />
        </div>
        • Collaborated with HR to design and implement a streamlined onboarding and offboarding process within Google Workspace, automating user account provisioning, access permissions, and resource allocation.
        <div>
          {' '}
          <br />
        </div>
        • Acted as the primary Google Workspace administrator, managing user accounts, permissions, and security settings while maintaining 99.9% uptime for critical services.
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
    'Web Developer | Tech Enthusiast',
  items: [
    {
      type: ContactType.Calendar,
      text: 'Schedule a meeting',
      href: 'https://cal.com/ronniegrover/',
    },
    {
      type: ContactType.Location,
      text: 'South Carolina',
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