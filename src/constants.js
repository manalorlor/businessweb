import {
  Monitor,
  Database,
  Palette,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  CheckCircle2,
  BarChart3,
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'it-support',
    title: 'IT Support',
    icon: Monitor,
    image: '/images/it-support.png',
    description:
      'Professional technical assistance for network security, hardware setup, and ongoing maintenance.',
    features: [
      'Network Security',
      'Software Updates',
      'Hardware Setup',
      'Data Backup',
    ],
    color: 'manatech-blue',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: Database,
    image: '/images/data-analysis.png',
    description:
      'Turn raw data into actionable insights with professional business intelligence and visualization.',
    features: [
      'Business Reports',
      'Dashboards',
      'Statistical Modeling',
      'Visualization',
    ],
    color: 'manatech-teal',
  },
  {
    id: 'online-tutoring',
    title: 'Online Tutoring',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    description:
      'Empowering students and professionals with essential digital skills through personalized learning.',
    features: [
      'Microsoft Office',
      'BECE Prep (Math/Sci)',
      'Digital Literacy',
      'IT Fundamentals',
    ],
    color: 'manatech-orange',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: Palette,
    image: '/images/graphic-design.png',
    description:
      'Elevate your brand with professional logo design, marketing materials, and social media graphics.',
    features: [
      'Logo & Branding',
      'Flyers & Posters',
      'Brochures',
      'Social Graphics',
    ],
    color: 'manatech-blue',
  },
  {
    id: 'project-assist',
    title: 'Project Work Assist',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    description:
      'Expert guidance for CS & IT academic and professional projects, from concept to execution.',
    features: [
      'CS & IT Support',
      'Documentation',
      'Code Review',
      'Implementation',
    ],
    color: 'manatech-teal',
  },
];


export const WHY_CHOOSE_US = [
  { title: 'Satisfaction Guarantee', icon: CheckCircle2 },
  { title: 'Cost-effective Solutions', icon: Zap },
  { title: 'Reliable Support', icon: ShieldCheck },
  { title: 'Fast Delivery', icon: Zap },
  { title: 'Creative Solutions', icon: Palette },
  { title: 'Flexible Scheduling', icon: Clock },
];

export const CONTACT_INFO = {
  phones: ['+233 54 517 9701', '+233 59 945 5836'],
  email: 'manatechie@gmail.com',
  location: 'Achiaman, Amasaman',
  socials: {
    whatsapp: 'https://wa.me/233599455836',
    linkedin: 'https://www.linkedin.com/in/lorlor',
    facebook: 'https://www.facebook.com/share/18FatTxPND/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/manasseh_lorlor',
  },
};

export const TESTIMONIALS = [
  {
    id: 1,
    content:
      "Manatech transformed our data into clear insights. Their analysis was a game-changer for our planning.",
    author: 'Sarah Mensah',
    role: 'Operations Manager',
    initials: 'SM',
  },
  {
    id: 2,
    content:
      "The IT support team is responsive and fixed our network issues in record time.",
    author: 'David Appiah',
    role: 'CEO, TechStart',
    initials: 'DA',
  },
  {
    id: 3,
    content:
      "Exceptional creative work that perfectly captured our vision. Professional and efficient.",
    author: 'Ama Serwaa',
    role: 'Marketing Director',
    initials: 'AS',
  },
];



export const FAQ_ITEMS = [
  {
    q: 'What is the typical turnaround time for a project?',
    a: 'Turnaround times vary depending on the scope and complexity. A simple graphic design project might take 2-3 days, while a comprehensive data analysis or IT infrastructure setup could take 1-2 weeks. We always provide a clear timeline during the discovery phase.',
  },
  {
    q: 'Do you offer ongoing support after project completion?',
    a: "Yes, we provide 24/7 support for all our IT and data services. We also offer maintenance packages for graphic design and branding to ensure your visual identity stays fresh and relevant.",
  },
  {
    q: 'Can I customize the tutoring sessions?',
    a: "Absolutely. Our online tutoring is highly personalized. We assess the student's current level and goals to create a custom learning plan that focuses on areas needing the most improvement.",
  },
  {
    q: 'What industries do you specialize in?',
    a: 'While we have broad experience across many sectors, we specialize in supporting small to medium-sized businesses, educational institutions, and individual professionals looking to enhance their digital presence and efficiency.',
  },
  {
    q: 'How do I get started with your services?',
    a: 'Simply reach out through our contact form, email, or phone. We will schedule a free consultation to understand your needs and provide a tailored proposal with clear timelines and pricing.',
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery & Analysis',
    desc: 'We start by understanding your vision, goals, and specific challenges through an in-depth consultation.',
  },
  {
    title: 'Strategic Planning',
    desc: 'Our experts develop a tailored roadmap and design concepts for your review and approval.',
  },
  {
    title: 'Execution & Creation',
    desc: 'We bring the vision to life using the latest tools, technologies, and best practices.',
  },
  {
    title: 'Review & Delivery',
    desc: 'Rigorous testing, quality assurance, and final refinements before a successful launch.',
  },
];
