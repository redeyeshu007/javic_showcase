// ─── Product Data ─────────────────────────────────────────────
// All product information lives here. Edit this file to update
// any product displayed on the site.

import nexusAiImg    from '../assets/products/nexus-ai.webp';
import logoTextImg   from '../assets/products/logo-text.png';
import printrickHeroImg from '../assets/products/printrick-hero.png';
import printrickLogo from '../assets/products/printrick-logo.png';
import printrickCardImg from '../assets/products/printrick-card-new.png';
import printrickLogo1 from '../assets/products/printrick_logo1.png';
import printrickLogo2 from '../assets/products/printrick_logo2.png';
import printrickLogo3 from '../assets/products/printrick_logo_new3.png';
import printrickFullBanner from '../assets/products/printrick-full-banner.png';
import printrickDesignReq1 from '../assets/products/design-req-1.png';
import printrickDesignReq2 from '../assets/products/design-req-2.png';
import printrickDesignReq3 from '../assets/products/design-req-3.jpeg';
import printrickDesignImage from '../assets/products/printrick-design-image.png';
import printrickDesignImage2 from '../assets/products/printrick-design-image-2.png';
import printrickDesignImage3 from '../assets/products/printrick-design-image-3.png';
import printrickConversionsImage from '../assets/products/printrick-conversions-image.png';
import eastGoldLogo from '../assets/products/east-gold-logo.webp';
import eastGoldCard from '../assets/products/east-gold-card.png';
import eastGoldHero from '../assets/products/east-gold-hero.png';
import eastGoldDesign1 from '../assets/products/east-gold-design-1.png';
import eastGoldDesign2 from '../assets/products/east-gold-design-2.png';
import eastGoldFullBanner from '../assets/products/east-gold-full-banner-new.png';
import eastGoldVideo1 from '../assets/products/east-gold-video-1.mp4';
import eastGoldVideo2 from '../assets/products/east-gold-video-2.mp4';

import adhenFoodsCard from '../assets/products/adhen-foods-card.png';
import adhenFoodsLogo from '../assets/products/adhen-foods-logo.png';
import adhenFoodsHero from '../assets/products/adhen-foods-hero.png';
import adhenFoodsMb1 from '../assets/products/adhen-foods-mb-1.png';
import adhenFoodsMb2 from '../assets/products/adhen-foods-mb-2.png';
import adhenFoodsMb3 from '../assets/products/adhen-foods-mb-3.png';
import adhenFoodsMb4 from '../assets/products/adhen-foods-mb-4.png';
import adhenFoodsMb5 from '../assets/products/adhen-foods-mb-5.png';
import adhenFoodsMb6 from '../assets/products/adhen-foods-mb-6.png';
import adhenFoodsDesign from '../assets/products/adhen-foods-design.png';
import adhenFoodsDesign2 from '../assets/products/adhen-foods-design-2.png';
import adhenFoodsDesign3 from '../assets/products/adhen-foods-design-3.png';

import adhenFoodsVideo1 from '../assets/products/adhen-foods-video-1.mp4';
import adhenFoodsVideo2 from '../assets/products/adhen-foods-video-2.mp4';
import adhenFoodsVideo3 from '../assets/products/adhen-foods-video-3.mp4';
import adhenFoodsVideo4 from '../assets/products/adhen-foods-video-4.mp4';
import adhenFoodsConversions from '../assets/products/adhen-foods-conversions-new.png';

import roohaeCardsCard from '../assets/products/roohae-cards-card.png';
import roohaeCardsHero from '../assets/products/roohae-cards-hero.png';
import roohaeCardsPlanImage from '../assets/products/roohae-cards-plan-image.png';
import roohaeCardsDesignImage from '../assets/products/roohae-cards-design-image.png';
import roohaeCardsDesignImage2 from '../assets/products/roohae-cards-design-image-2.png';
import roohaeCardsDesignImage3 from '../assets/products/roohae-cards-design-image-3.png';
import roohaeCardsSecondaryDesign from '../assets/products/roohae-cards-secondary-design-new.png';
import roohaeCardsSecondaryVideo from '../assets/products/roohae-cards-brand-film.mp4';

export const CATEGORIES = ['All', 'Development', 'UI/UX', 'Branding', 'Social Media', 'Marketing'];

export const products = [
  {
    id: 1,
    slug: 'printrick',
    name: 'Printrick',
    category: 'Development',
    categories: ['Development', 'Branding', 'UI/UX'],
    tagline: 'Intelligence that works behind the scenes for Printrick.',
    shortDescription:
      `An intelligent platform designed to automate complex workflows and help teams work smarter at scale.`,
    description:
      `Printrick is a next-generation workflow intelligence platform that leverages machine learning to identify bottlenecks, automate repetitive processes, and surface insights that drive smarter decisions. Built for teams that move fast and think bigger.`,
    image: printrickHeroImg,
    thumbnail: printrickCardImg,
    featured: true,
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
    logos: [
      { image: printrickLogo1 },
      { image: printrickLogo2 },
      { image: printrickLogo3 }
    ],
    fullBanner: printrickFullBanner,
    designTitle: "Modern & Sleek\nDesign",
    designDescription: "The modern and sleek design of the Printrick platform aligns with the brand's sophisticated style, providing a seamless and intuitive user experience. The design effectively highlights the printing solutions while maintaining a clean, elegant aesthetic that resonates with both the brand vision and stakeholder expectations.",
    designImages: [printrickDesignImage, printrickDesignImage2, printrickDesignImage3],
    conversionsTitle: "Focusing on more\nConversions Tactics",
    conversionsSubtitle: "Check Out More on the website",
    conversionsDescription: "The moodboards feature vibrant, bold colors and clean typography tailored for modern printing solutions. The imagery is professional, energetic, and minimalist, focusing on product details in clean settings. Soft gradients and graphic patterns add a premium feel. This aesthetic emphasizes quality, speed, and creative flexibility.",
    conversionsImage: printrickConversionsImage,
    designRequirementsImages: [
      printrickDesignReq1,
      printrickDesignReq2,
      printrickDesignReq3
    ],
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
    challenge: [
      `Printrick is an exclusive platform dedicated to delivering premium printing solutions. When we began analyzing their process, the workflow was purely functional but creating significant bottlenecks for enterprise teams.`,
      `With <strong>40-60% of workweeks</strong> spent on manual tasks, the existing tools were either requiring deep technical knowledge or were too rigid. We needed to transform the experience from a basic system to an adaptive, intelligent platform that scales.`
    ],
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
  },
  {
    id: 2,
    slug: 'east-gold',
    name: 'East Gold',
    category: 'Finance',
    categories: ['Finance', 'Services', 'Retail'],
    tagline: 'Professional gold valuation and buying services.',
    shortDescription: 'East Gold provides professional gold valuation and gold-buying services in Coimbatore, with a focus on transparent purity testing and a clear evaluation process.',
    description: 'East Gold provides professional gold valuation and gold-buying services in Coimbatore, with a focus on transparent purity testing and a clear evaluation process. We aim to make every gold-selling experience simple, secure, and easy to understand, with prompt payment after the required verification and valuation are completed.',
    image: eastGoldHero,
    thumbnail: eastGoldCard,
    featured: true,
    tags: ['Gold Valuation', 'Secure', 'Transparent'],
    route: '/products/east-gold',
    metrics: [
      { value: '100%', label: 'Transparency' },
      { value: '24/7', label: 'Support' }
    ],
    overview: [
      'East Gold provides professional gold valuation and gold-buying services in Coimbatore, with a focus on transparent purity testing and a clear evaluation process.',
      'We aim to make every gold-selling experience simple, secure, and easy to understand, with prompt payment after the required verification and valuation are completed.'
    ],
    objective: 'The primary objective of East Gold is to establish a trustworthy and transparent gold valuation and buying service in Coimbatore. The project aims to create a secure, seamless, and customer-friendly experience for individuals looking to sell their gold, ensuring clear evaluation processes and prompt payments.',
    client: 'Founder, East Gold',
    planOfAction: 'The project for East Gold involved understanding the nuances of the gold valuation market through rapid knowledge transfer, creating trust-building visual mockups for mobile and desktop, and developing a secure, customer-centric website. Following the launch, we seamlessly integrated a continuous, robust digital marketing strategy—spanning Meta and Google Ads—to drive immediate visibility and conversions, successfully showcasing East Gold\'s transparent evaluation process to the Coimbatore market.',
    scopeOfWork: ['Meta Ads', 'Google Ads', 'Branding', 'Website Development'],
    duration: [
      'Website Development',
      'Ads: Continuous'
    ],
    fullBanner: eastGoldFullBanner,
    designTitle: 'Brand Colors & Typo',
    designDescription: 'With stakeholders’ approval, we introduced refined typography and a sophisticated color palette that align with East Gold’s premium and trustworthy brand voice, creating a modern yet authentic visual identity.',
    designImages: [eastGoldDesign1],
    preVideoImage: eastGoldDesign2,
    videos: [eastGoldVideo1, eastGoldVideo2],
    outcomeDescription: "The newly developed website and continuous marketing strategy for East Gold successfully established their digital presence. By aligning the platform with their trustworthy evaluation process, the design enhances customer confidence, streamlines lead generation, and significantly improves their visibility across the Coimbatore market.",
    websiteUrl: "https://eastgold.co.in/"
  },
  {
    id: 3,
    slug: 'adhen-foods',
    name: 'Adhen Foods',
    category: 'FMCG',
    categories: ['FMCG', 'Snacks', 'Food'],
    tagline: 'Crunchy Makhana. Cheesy Goodness. Herby Twist.',
    shortDescription: 'A deliciously crispy snack made for every cheerful snacking moment.',
    description: 'SMACKOZ Makhana – Cheese & Herbs is a crunchy and delicious fox-nut snack packed with rich cheesy flavour and a touch of herbs. Light, crispy, and irresistibly tasty, it’s made for guilt-free snacking anytime, anywhere. With gluten-free, no palm oil, and no palmolein oil, it’s a flavourful snack that brings together taste and convenience.',
    image: adhenFoodsHero,
    thumbnail: adhenFoodsCard,
    client: 'Adhen Foods',
    route: '/products/adhen-foods',
    metrics: [
      { value: '45%', label: 'Sales Increase' },
      { value: '3x', label: 'Brand Reach' },
      { value: '12k+', label: 'Monthly Orders' },
      { value: '99%', label: 'Positive Feedback' }
    ],
    overview: [
      'SMACKOZ by Adhen Foods is revolutionizing the healthy snacking industry with their premium Makhana (fox-nut) products. Their signature Cheese & Herbs flavor combines traditional superfoods with modern, irresistible taste profiles.',
      'Our goal was to position SMACKOZ as the go-to guilt-free snack for health-conscious consumers without compromising on the joy of eating, emphasizing their zero palm oil and gluten-free commitments.'
    ],
    objective: 'The primary objective for SMACKOZ was to build a vibrant, engaging brand identity and a robust e-commerce presence that appeals to both millennial snackers and health-conscious parents. We aimed to highlight the crunch, flavor, and health benefits of their Makhana products.',
    challengeTitle: 'Key Challenges',
    challengeSubtitle: 'Faced by Adhen Foods',
    challenge: true,
    challengesList: [
      'Outdated and generic website with poor user experience',
      'Weak online representation of brand legacy and USPs',
      'Poor mobile optimization & Low engagement with distributors',
      'Need for a strong digital marketing launch to establish brand legacy'
    ],
    scopeOfWork: ['Brand Strategy', 'E-commerce Website', 'Social Media Marketing', 'Ad Campaigns'],
    duration: [
      'Branding & Web: 6 Weeks',
      'Marketing: Ongoing'
    ],
    designTitle: 'Mood boards for\nthe Brand',
    designDescription: "The mood boards reflect SMACKOZ's vibrant energy, premium quality, and guilt-free snacking promise. Using electric yellows, deep blacks, and earthy accents, combined with bold typography and imagery of crispy makhana, the visuals create a fun, approachable, and exciting brand identity that guided the e-commerce platform and overall design.",
    designGridImages: [adhenFoodsMb1, adhenFoodsMb2, adhenFoodsMb3, adhenFoodsMb4, adhenFoodsMb5, adhenFoodsMb6],
    secondaryDesignTitle: 'Modern & Sleek\nDesign',
    secondaryDesignDescription: "The modern and sleek design of the SMACKOZ platform aligns with the brand's energetic style, providing a seamless and intuitive user experience. The design effectively highlights the vibrant packaging and product benefits while maintaining a bold, premium aesthetic that resonates with both the brand vision and consumer expectations.",
    secondaryDesignImages: [adhenFoodsDesign, adhenFoodsDesign2, adhenFoodsDesign3],
    videosTitle: 'Dynamic Product Campaigns',
    videos: [adhenFoodsVideo1, adhenFoodsVideo2, adhenFoodsVideo3, adhenFoodsVideo4],
    conversionsTitle: 'Focusing on more\nConversions Tactics',
    conversionsSubtitle: 'Check Out More on the website',
    conversionsDescription: "The campaigns feature vibrant, bold colors and clean typography tailored for modern FMCG snacking. The imagery is energetic and appetizing, focusing on product details in premium settings. Rich tones and dynamic graphic patterns add a high-end feel. This aesthetic emphasizes quality, taste, and the joy of guilt-free snacking.",
    conversionsImage: adhenFoodsConversions,
    outcomeDescription: "The brand launch for SMACKOZ was a resounding success. The striking new visual identity and seamless e-commerce experience led to an immediate surge in online orders. Through targeted social media campaigns, we successfully positioned SMACKOZ as a top-tier, guilt-free snacking choice.",
    websiteUrl: "https://adhenfoods.com/"
  },
  {
    id: 4,
    slug: 'roohae-cards',
    route: '/products/roohae-cards',
    name: 'Roohae Cards',
    category: 'Development',
    categories: ['Development', 'B2B', 'Infrastructure'],
    tagline: 'An embedded Canva-like B2B design customization platform.',
    shortDescription: 'Roohae Cards is a Canva-like B2B design customization platform where companies can provide their customers with ready-made product designs that customers can personalize themselves.',
    thumbnail: roohaeCardsCard,
    image: roohaeCardsHero,
    overview: [
      'Roohae Cards is a paradigm shift from traditional B2C card-design websites. It was built from the ground up to act as an embedded, highly customizable design infrastructure that third-party companies can leverage within their own digital ecosystems.',
      'Instead of forcing companies to build complex browser-based rendering tools, Roohae Cards provides a drop-in Canvas-based UI editor that lets end-customers effortlessly personalize products before checkout. By utilizing deep API hooks and a robust white-labeling engine, the entire journey feels like a native extension of the partner brand, while Roohae handles the heavy lifting of backend PDF generation and secure asset handoffs.'
    ],
    objective: 'To build a highly scalable, white-labeled design infrastructure that allows B2B partners to embed a robust, Canva-like product personalization editor seamlessly into their own e-commerce flows.',
    scopeOfWork: [
      'Infrastructure Architecture',
      'API & SDK Development',
      'Canvas-based UI Editor',
      'Backend Rendering'
    ],
    duration: [
      'Total Duration: 6 Months',
      'Architecture Phase: 4 Weeks',
      'Development Phase: 16 Weeks',
      'Testing & QA Phase: 4 Weeks'
    ],
    client: 'Internal SaaS Initiative',
    metrics: [
      { value: '500+', label: 'B2B Partners Onboarded' }
    ],
    planOfAction: "The project for Roohae Cards involved architectural planning to build a scalable B2B infrastructure. We began by establishing API integration blueprints and creating modular, white-labeled UI components for the Canvas editor. Next, we optimized the backend rendering engine to generate print-ready assets in real-time. The final phase involved deploying secure data hand-off pipelines, allowing partners to seamlessly embed the platform while retaining full control over their customer data.",
    planOfActionImage: roohaeCardsPlanImage,
    challengeTitle: 'Key Challenges',
    challengeSubtitle: 'Faced by Roohae Cards',
    challenge: true,
    challengesList: [
      'Lack of native, white-labeled design tools for seamless e-commerce integration',
      'Complex rendering bottlenecks when exporting high-quality, print-ready PDFs and PNGs',
      'High user drop-off caused by friction between product selection and external design apps',
      'Securely syncing customized design assets and user data with disparate B2B backend APIs'
    ],
    designTitle: 'Intuitive &\nModular Design',
    designDescription: "The Roohae Cards editor was engineered with a modular, highly intuitive design philosophy. Prioritizing frictionless customization, the interface utilizes sleek, unopinionated UI components that seamlessly adopt the partner brand's visual identity. The result is a premium, distraction-free environment that empowers end-users to confidently personalize their designs without ever feeling like they've left the original e-commerce platform.",
    designImages: [roohaeCardsDesignImage],
    secondaryDesignTitle: "Aligning Design with Stakeholder and Brand Vision",
    secondaryDesignDescription: "Roohae Cards seamlessly adapts to any partner's visual identity. Through customizable themes and smart layout constraints, users can easily personalize their products while remaining perfectly within the brand's aesthetic boundaries.",
    secondaryDesignImages: [roohaeCardsSecondaryDesign],
    secondaryDesignVideo: roohaeCardsSecondaryVideo,
    outcomeDescription: "Since launching the embedded infrastructure, Roohae Cards has been successfully integrated into dozens of e-commerce platforms. The robust API handoff ensures that partner companies retain full control over their customer data, while offloading the complex rendering and editing logic entirely to Roohae.",
    websiteUrl: "#"
  }
];

export default products;
