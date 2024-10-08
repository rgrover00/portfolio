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
        If you have a <span className="font-semibold text-stone-100">role or project</span> in mind, I would{' '}
        <span className="font-semibold text-stone-100"> love</span> to discuss it with you
      </p>
    </>
  ),
  actions: [
    {
      href: '/ronniegrover-resume-pic.pdf',
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
        Hey there! I’m Ronnie, a tech enthusiast with over a decade of experience in the telecom and cloud industries. I’m all about making technology work for people, not against them. I specialize in streamlining complex systems, optimizing SaaS applications, and keeping everything secure and running smoothly.
        <br />
        <br />
        <span className="font-bold">My mission is simple:</span> to turn complicated tech into user-friendly solutions that empower teams to be more efficient and productive. Whether it's integrating new platforms, automating workflows, or translating tech-speak into plain English, I love finding creative ways to bridge the gap between technology and people.
        <br />
          <br />
            <span className="font-bold">Career Highlights:</span>
          <br />
             I’m particularly proud of my work in managing and optimizing Google Workspace environments. As a Professional Google Workspace Administrator, I have successfully led several large-scale migrations, streamlined collaboration tools, and implemented robust security measures that protected sensitive data while enhancing productivity across multiple organizations. One of my standout achievements was leading the integration of Google Workspace with legacy systems in a complex hybrid environment, reducing operational costs by 30% and significantly improving cross-departmental communication.
          <br />
          <br />
            <span className="font-bold">Custom Scripts and Automated Workflows:</span>
          <br />
            I’ve also created custom scripts and automated workflows within Google Workspace that have reduced manual tasks by up to 60%, saving valuable time for IT teams and end users. These efforts have contributed to a smoother, more efficient work environment and demonstrated my ability to drive digital transformation initiatives.
          <br />
          <br />
            <span className="font-bold">My Approach to Technology:</span>
          <br />
            I believe that technology should evolve with the needs of the people who use it. I see my role not just as a tech expert but as a bridge between IT and the rest of the organization. I’m known for my ability to translate complex technical concepts into plain English, ensuring that everyone is aligned and working towards a common goal. I believe that luck comes from hard work and a willingness to evolve — both personally and professionally — to meet the ever-changing demands of the tech landscape.
          <br />
          <br />
            <span className="font-bold">Beyond IT: My Personal Passions:</span>
          <br />
            When I’m not optimizing cloud environments or exploring the latest web development trends, you’ll find me in my garage gym, working out as a form of therapy and keeping myself grounded. I’m also passionate about self-hosting and building web apps, constantly experimenting with new frameworks like TypeScript, Next.js, React, and Node.js. I love finding new, creative ways to build efficient, user-friendly applications that solve real-world problems.
          <br />
          <br />
            <span className="font-bold">Let’s Connect!</span>
          <br />
            I’m always open to new opportunities and collaborations. Whether you’re looking for a tech-savvy partner to help drive your digital transformation, need a creative solution for your IT challenges, or just want to chat about web development or fitness, feel free to reach out!
    </>
  ),

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
    name: 'RKG Fitness Development',
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
        level: 5,
      },
      {
        name: 'Believe',
        level: 3,
      },
      {
        name: 'Evolve',
        level: 2,
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
    'Systems Architect | Web Developer | IT Consultant Tech Enthusiast seeking new projects and opportunities Have a project or role in mind? I would love to discuss it with you',
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