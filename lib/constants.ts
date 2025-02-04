import { CardProps } from "./types";

// Define your website URLs
export const URLs = {
  home: '/',
  aboutus: '/about-us',
  ourservices: '/our-services',
  properties: '/properties',
  agents: '/agent',
  blog: '/blog',
  contactus: '/contact-us',
};// Define the data for the grid tiles
export const gridData: CardProps[] = [
  {
    id: '2',
    title: 'Blog',
    description: 'Read our latest articles',
    icon: 'newspaper-outline',
    route: '/blogs',
  },
  {
    id: '3',
    title: 'About Us',
    description: 'Learn more about Enugus',
    icon: 'planet-outline',
    route: '/about-us',
  },
  {
    id: '4',
    title: 'Our Services',
    description: 'Discover our offerings',
    icon: 'game-controller-outline',
    route: '/services',
  },
  {
    id: '5',
    title: 'Properties',
    description: 'Find your dream property',
    icon: 'business-outline',
    route: '/properties',
  },
  {
    id: '6',
    title: 'Contact Us',
    description: 'Get in touch with us',
    icon: 'phone-portrait-outline',
    route: '/contact-us',
  },
  {
    id: '7',
    title: 'Agents',
    description: 'Meet our agents',
    icon: 'people-outline',
    route: '/agents',
  },
];

