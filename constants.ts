import { Layout, Smartphone, Camera, Video, PenTool, BarChart3 } from 'lucide-react';
import { Project, Service, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Brand Identity",
    image: "https://picsum.photos/id/237/800/600",
    description: "A futuristic brand identity for a tech startup focusing on AI solutions."
  },
  {
    id: 2,
    title: "Eco Fintech",
    category: "Web Development",
    image: "https://picsum.photos/id/20/800/600",
    description: "Sustainable financial dashboard design and development for green investments."
  },
  {
    id: 3,
    title: "Urban Fashion",
    category: "Photography",
    image: "https://picsum.photos/id/338/800/600",
    description: "High-contrast street photography campaign for a new clothing line."
  },
  {
    id: 4,
    title: "Tech Summit",
    category: "Event Branding",
    image: "https://picsum.photos/id/180/800/600",
    description: "Complete visual overhaul for an international technology conference."
  },
  {
    id: 5,
    title: "Minimalist Living",
    category: "Interior Design",
    image: "https://picsum.photos/id/250/800/600",
    description: "Website and catalog design for a boutique furniture store."
  },
  {
    id: 6,
    title: "Ocean Blue",
    category: "Motion Graphics",
    image: "https://picsum.photos/id/30/800/600",
    description: "Animated promotional video series for ocean conservation."
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web & App Design',
    description: 'User-centric UI/UX design that blends aesthetics with seamless functionality. We build digital products that users love to interact with.',
    features: ['UI/UX Design', 'Website Prototyping', 'Mobile App Interfaces', 'Design Systems'],
    icon: Layout,
    image: "https://picsum.photos/id/1/800/600"
  },
  {
    id: 'dev',
    title: 'Development',
    description: 'Robust frontend and backend development ensuring your website is fast, secure, and scalable across all devices.',
    features: ['React & Next.js', 'API Integration', 'Performance Optimization', 'CMS Development'],
    icon: Smartphone,
    image: "https://picsum.photos/id/60/800/600"
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'Creating memorable brand experiences through logo design, color theory, and visual storytelling that resonates with your audience.',
    features: ['Logo Design', 'Brand Strategy', 'Visual Guidelines', 'Packaging'],
    icon: PenTool,
    image: "https://picsum.photos/id/112/800/600"
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase your reach, engagement, and conversion through targeted campaigns.',
    features: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
    icon: BarChart3,
    image: "https://picsum.photos/id/201/800/600"
  }
];

export const TEAM: TeamMember = {
  name: "Alex Morgan",
  role: "Lead Designer & Developer",
  bio: "Founded in 2018, I began as a freelance creative frustrated by the disconnect between 'pretty' design and actual functionality. Over the last decade, I've grown into a full-service creative partner for brands worldwide.",
  image: "https://picsum.photos/id/64/400/400"
};
