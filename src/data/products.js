// ─── Product Data ─────────────────────────────────────────────
// All product information lives here. Edit this file to update
// any product displayed on the site.

import nexusAiImg    from '../assets/products/nexus-ai.webp';
import logoTextImg   from '../assets/products/logo-text.png';

export const CATEGORIES = ['All', 'Development', 'UI/UX', 'Branding', 'Social Media', 'Marketing'];

export const products = [
  {
    id: 1,
    slug: 'printrick',
    name: 'Printrick',
    category: 'Development',
    categories: ['Development', 'Branding', 'UI/UX'],
    tagline: 'Intelligence that works behind the scenes.',
    shortDescription:
      `An intelligent platform designed to automate complex workflows and help teams work smarter at scale.`,
    description:
      `Printrick is a next-generation workflow intelligence platform that leverages machine learning to identify bottlenecks, automate repetitive processes, and surface insights that drive smarter decisions. Built for teams that move fast and think bigger.`,
    image: logoTextImg,
    thumbnail: logoTextImg,
    featured: true,
    year: '2026',
    tags: ['AI', 'Automation', 'Analytics', 'SaaS'],
    route: '/products/printrick',
    metrics: [
      { value: '32%',  label: 'Automation Increase' },
      { value: '2.4x', label: 'Faster Processing' },
      { value: '40%',  label: 'Time Saved' },
      { value: '98%',  label: 'Uptime SLA' },
    ],
    overview: [
      `Printrick is an exclusive platform dedicated to delivering premium printing solutions and digital printing services across India. Our diverse product range encompasses business cards, envelopes, letterheads, brochures, flyers, posters, stickers, and custom marketing materials.`,
      `We are committed to providing the fastest, most cost-effective, and consistent printing services with competitive pricing and quick delivery. Our platform connects customers with expert printing professionals who are passionate about quality and attention to detail.`,
      `Printrick stands as a leader in digital printing innovation, bringing cutting-edge technology and traditional craftsmanship together to deliver exceptional results for every project.`
    ],
    objective: 
      `The primary objective of Printrick is to provide high-quality, affordable, and reliable printing solutions through a convenient digital platform. It aims to connect customers with professional printing services across India while ensuring fast delivery, competitive pricing, consistent quality, and easy access to customized printing products.`,
    scopeOfWork: ['Branding', 'UI/UX Design', 'Platform Development'],
    duration: [
      'Total Duration: 2 Months',
      'Branding Phase: 2 Weeks',
      'UI/UX Phase: 3 Weeks',
      'Development Phase: 3 Weeks'
    ],
    client: 'Printrick Inc',
    moodboardDescription: "The moodboards feature vibrant, bold colors like neon pink, yellow, and green, combined with playful typography and modern jewelry designs. The imagery is youthful, energetic, and minimalist, focusing on product details in colorful, abstract settings. Soft gradients and graphic patterns add a trendy feel. This aesthetic appeals to Gen Z, emphasizing individuality, fun, and creativity.",
    moodboards: [
      { title: "Gradient Mesh", image: logoTextImg },
      { title: "Neon Nude", image: nexusAiImg },
      { title: "Gradient Mesh", image: logoTextImg }
    ],
    ideaTitle: "Idea presented to Stakeholders",
    ideaDescription: "The proposed idea focused on creating a modern, sleek brand identity and a user-friendly website that reflects Printrick's premium, trend-forward technology. The website design emphasized elegance and functionality, with a clean aesthetic that showcased the platform effectively. The vision was aligned with the brand's essence while meeting the stakeholder's expectations for a visually appealing, intuitive online presence.",
    ideaImages: [
      logoTextImg,
      nexusAiImg,
      logoTextImg
    ],
    visionTitle: "Aligning Logo Design with Stakeholder and Brand Vision",
    visionImages: [
      logoTextImg,
      nexusAiImg,
      nexusAiImg,
      logoTextImg
    ],
    outcomeDescription: "The newly designed brand identity and website for Printrick successfully capture the brand's elegant and trendy essence. The cohesive design aligns with stakeholder vision and brand goals, offering a seamless, user-friendly experience while beautifully showcasing the platform and enhancing customer engagement.",
    websiteUrl: "https://printrick.com/",
    challenge:
      `Enterprise teams were spending 40-60% of their workweek on tasks that could be systematically automated. Existing tools either required deep technical knowledge or were too rigid to adapt to evolving business logic.`,
    solution:
      `We designed Printrick with an adaptive rule engine that trains on your team's existing patterns. The platform surfaces automation opportunities in real-time, allows no-code configuration of complex workflows, and provides full observability through a real-time analytics layer.`,
    features: [
      { title: 'Adaptive Rule Engine',      description: `Learns from your workflows and suggests automations based on detected patterns.` },
      { title: 'No-Code Workflow Builder',  description: `Drag-and-drop interface for building complex multi-step automations without writing code.` },
      { title: 'Real-Time Analytics',       description: `Full visibility into automation performance, time savings, and exception handling.` },
      { title: 'AI Anomaly Detection',      description: `Automatically flags unusual patterns before they become expensive problems.` },
      { title: 'Team Collaboration Layer',  description: `Shared workspaces, role-based permissions, and audit trails built in from day one.` },
      { title: 'Enterprise Integrations',   description: `Native connectors to 200+ tools including Salesforce, Slack, SAP, and custom APIs.` },
    ],
    results: [
      { metric: '32% reduction',  detail: `in manual process time within the first 90 days of deployment.` },
      { metric: '2.4x faster',    detail: `data processing compared to legacy workflow tools.` },
      { metric: '40% time saved', detail: `reported by teams across departments in post-launch surveys.` },
    ],
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Kubernetes', 'OpenAI API', 'Temporal'],
    gallery: [logoTextImg, logoTextImg, logoTextImg],
  }
];

export default products;
