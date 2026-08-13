/* ==========================================================================
   Saimun Sabit Portfolio — Master Application & 2026 Interaction Engine (app.js)
   ========================================================================== */

const SKILL_MAP_DATA = {
    frontend: {
        title: "Frontend Engineering",
        desc: "Pixel-perfect, responsive component engineering focusing on semantic HTML5, modern CSS3, React, and Next.js.",
        tools: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Core Web Vitals"],
        cert: "🏆 Google Professional Developer Standard"
    },
    backend: {
        title: "Backend & Database Architecture",
        desc: "High-speed server architecture, REST API design, custom PHP WordPress engines, and database indexing.",
        tools: ["Node.js", "Express", "Custom PHP", "MySQL / PostgreSQL", "REST APIs"],
        cert: "🏆 Technical Performance & Architecture Standard"
    },
    fullstack: {
        title: "Fullstack Web Systems",
        desc: "End-to-end web applications combining dynamic reactive frontends with robust backend data pipelines.",
        tools: ["React / Node", "WordPress Custom Themes", "Vercel", "Git / GitHub"],
        cert: "🏆 Full-Stack Systems Specialist"
    },
    localseo: {
        title: "Local SEO & Google Maps",
        desc: "Dominating local search results and Google Map Pack rankings for regional counseling & therapy practices.",
        tools: ["Google Business Profile", "Local Schema (JSON-LD)", "BrightLocal", "Geo-Targeted Landing Pages"],
        cert: "🏆 Local Search Optimization Specialist"
    },
    techseo: {
        title: "Technical SEO Audits",
        desc: "Resolving crawl budget bottlenecks, indexation flags, canonical tags, and Core Web Vitals speed optimization.",
        tools: ["Screaming Frog", "Ahrefs", "Google Search Console", "Schema.org", "PageSpeed Insights"],
        cert: "🏆 HubSpot Technical SEO Certified"
    },
    ecomseo: {
        title: "E-commerce & Shopify SEO",
        desc: "Optimizing store category hierarchies, product schema, collection internal linking, and conversion funnels.",
        tools: ["Shopify Liquid", "WooCommerce", "Product Schema", "GA4 E-commerce Tracking"],
        cert: "🏆 Shopify SEO & Analytics Certified"
    }
};

/* Master Case Studies Data Store */
const PROJECTS_DATA = [
    {
        id: "healthcare-practice",
        title: "Healthcare Practice Digital Platform",
        industry: "Healthcare & Medical",
        type: "Full-Stack Web Dev + SEO",
        platform: "WordPress & Custom React",
        coverIcon: "fa-solid fa-hospital-user",
        description: "Designed and engineered a high-performance healthcare platform focused on patient appointment scheduling, rapid page speed, and local map pack dominance.",
        services: [
            "Frontend Development",
            "Responsive Web Development",
            "UI/UX Implementation",
            "API Integration",
            "Technical SEO",
            "Local SEO",
            "Google Business Profile Optimization",
            "WordPress Development"
        ],
        technologies: ["React.js", "WordPress", "JavaScript (ES6+)", "HTML5 & CSS3", "Google Maps API", "LocalBusiness Schema"],
        challenge: "The medical practice suffered from a slow, non-responsive legacy site with zero local map pack presence, leading to lost patient booking inquiries.",
        approach: "Rebuilt the client interface from scratch with mobile-first UI components, integrated online booking APIs, and executed a 360° Technical & Local SEO campaign.",
        deliverables: [
            "Mobile-first patient portal UI & booking flow",
            "Online appointment & API booking integration",
            "Core Web Vitals 98/100 speed optimization",
            "LocalBusiness JSON-LD Schema integration",
            "Google Maps 3-Pack rank optimization"
        ],
        results: [
            { label: "Organic Search Traffic", value: "+210%" },
            { label: "Core Web Vitals Speed", value: "98/100" },
            { label: "Google Maps Ranking", value: "Top 3 Pack" },
            { label: "Patient Booking Conversion", value: "+85%" }
        ],
        relatedIds: ["luxury-ecommerce", "enterprise-saas"]
    },
    {
        id: "luxury-ecommerce",
        title: "Luxury E-commerce Storefront & SEO",
        industry: "E-commerce & Retail",
        type: "Custom Storefront + SEO Growth",
        platform: "Shopify & Next.js",
        coverIcon: "fa-solid fa-bag-shopping",
        description: "Rebuilt a high-volume fashion e-commerce storefront with custom Liquid templates, Product JSON-LD schema, and faceted navigation SEO.",
        services: [
            "Frontend Development",
            "Responsive Web Development",
            "UI/UX Implementation",
            "E-commerce SEO",
            "On-Page SEO",
            "Technical SEO",
            "Analytics & Reporting",
            "Website Performance Optimization",
            "Shopify Development"
        ],
        technologies: ["Shopify Liquid", "Next.js", "React", "GraphQL API", "Google Search Console", "GA4 Telemetry"],
        challenge: "High product catalog size caused indexation bloat, slow mobile page loads, and duplicate collection canonical issues that hindered organic sales.",
        approach: "Restructured collection hierarchy, injected dynamic Product JSON-LD schema, optimized image pipelines, and fixed faceted filter canonical URLs.",
        deliverables: [
            "Custom Liquid & Next.js responsive storefront",
            "Product & Offer JSON-LD schema markup",
            "Faceted navigation canonical resolution",
            "GA4 E-commerce revenue telemetry"
        ],
        results: [
            { label: "Organic Sales Revenue", value: "+175%" },
            { label: "Mobile Page Load Speed", value: "0.6s LCP" },
            { label: "Rich Snippet Impressions", value: "+340%" },
            { label: "Product Indexation Rate", value: "99.4%" }
        ],
        relatedIds: ["healthcare-practice", "legal-firm-seo"]
    },
    {
        id: "enterprise-saas",
        title: "Enterprise SaaS Platform & API Hub",
        industry: "SaaS & Cloud Software",
        type: "Custom Web App + Backend Architecture",
        platform: "React, Node.js & PostgreSQL",
        coverIcon: "fa-solid fa-cloud-gear",
        description: "Engineered an enterprise cloud analytics web platform with REST/GraphQL APIs, OAuth authentication, Docker deployments, and 99/100 PageSpeed.",
        services: [
            "Frontend Development",
            "Backend Development",
            "API Integration",
            "Database Management",
            "DevOps & Deployment",
            "Custom Web Development",
            "Technical SEO",
            "Website Performance Optimization"
        ],
        technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "Docker", "AWS EC2/S3", "Redis"],
        challenge: "Legacy backend monolith was crashing during high-concurrency client reporting, and dashboard interfaces lacked mobile responsiveness.",
        approach: "Architected microservice Node.js API endpoints, created normalized PostgreSQL schemas with Redis caching, and built responsive React dashboards.",
        deliverables: [
            "Responsive React client-side portal",
            "RESTful API engine with JWT/OAuth 2.0",
            "PostgreSQL query optimization & Redis cache",
            "Docker & AWS EC2 auto-scaling deployment"
        ],
        results: [
            { label: "API Response Time", value: "< 45ms" },
            { label: "Concurrent User Scale", value: "50,000+" },
            { label: "Server Uptime SLA", value: "99.99%" },
            { label: "Database Speed Gain", value: "4.5x" }
        ],
        relatedIds: ["healthcare-practice", "real-estate-marketplace"]
    },
    {
        id: "legal-firm-seo",
        title: "Legal Practice Portal & Organic Growth",
        industry: "Legal & Professional Services",
        type: "WordPress Web Dev + Search Strategy",
        platform: "WordPress Custom Theme",
        coverIcon: "fa-solid fa-scale-balanced",
        description: "Complete web redesign and 360° search engine optimization campaign for a corporate legal firm targeting competitive high-ticket queries.",
        services: [
            "WordPress Development",
            "On-Page SEO",
            "Technical SEO",
            "Keyword Strategy",
            "Content Optimization",
            "Local SEO",
            "Analytics & Reporting",
            "Responsive Web Development",
            "Custom Web Development"
        ],
        technologies: ["WordPress", "PHP", "SCSS", "Google Search Console", "Screaming Frog", "Ahrefs"],
        challenge: "The legal firm was completely invisible for high-intent corporate litigation queries in their city, relying entirely on expensive paid ads.",
        approach: "Designed a clean, authoritative custom WordPress theme, mapped transactional search intent, structured internal linking silos, and optimized local citation consistency.",
        deliverables: [
            "Custom editorial WordPress theme",
            "High-intent legal service content silos",
            "Google Business Profile optimization",
            "Monthly ranking & client inquiry reporting"
        ],
        results: [
            { label: "Page #1 Google Keywords", value: "42 Terms" },
            { label: "Organic Consultation Leads", value: "+145%" },
            { label: "Cost Per Acquisition", value: "-60%" },
            { label: "Domain Authority Rating", value: "+18 DR" }
        ],
        relatedIds: ["luxury-ecommerce", "fitness-performance"]
    },
    {
        id: "real-estate-marketplace",
        title: "Real Estate Portal & Local Geo-Engine",
        industry: "Real Estate & Property",
        type: "Custom Web App + Local Geo SEO",
        platform: "Custom Web Dev (Next.js & Node)",
        coverIcon: "fa-solid fa-building-user",
        description: "Built a custom property marketplace featuring Google Maps Platform integration, sub-second search filters, local district landing pages, and lead funnels.",
        services: [
            "Custom Web Development",
            "Frontend Development",
            "Backend Development",
            "API Integration",
            "Database Management",
            "Local SEO",
            "Google Business Profile Optimization",
            "Technical SEO",
            "Responsive Web Development"
        ],
        technologies: ["Next.js", "Node.js", "MongoDB", "Google Maps Platform", "Tailwind CSS", "GeoJSON Schema"],
        challenge: "Slow third-party real estate scripts degraded mobile performance and failed to rank for neighborhood-specific real estate searches.",
        approach: "Built a headless Next.js portal powered by MongoDB spatial queries, custom Google Maps markers, and dynamically generated neighborhood local landing pages.",
        deliverables: [
            "Interactive Google Maps property discovery",
            "Sub-second MongoDB spatial search query pipeline",
            "Neighborhood geo-targeted landing page engine",
            "Lead generation & agent inquiry forms"
        ],
        results: [
            { label: "Local Neighborhood Traffic", value: "+320%" },
            { label: "Property Search Latency", value: "< 120ms" },
            { label: "Mobile Bounce Rate", value: "-40%" },
            { label: "Agent Lead Volume", value: "+110%" }
        ],
        relatedIds: ["enterprise-saas", "healthcare-practice"]
    },
    {
        id: "fitness-performance",
        title: "Fitness Web Landing & Core Web Vitals",
        industry: "Health & Fitness",
        type: "Frontend Engineering + Performance Audit",
        platform: "React & Vercel",
        coverIcon: "fa-solid fa-dumbbell",
        description: "Executed a comprehensive technical SEO audit and speed optimization campaign, lowering LCP from 4.2s to 0.5s and boosting search indexation.",
        services: [
            "Website Performance Optimization",
            "SEO Audit",
            "Technical SEO",
            "Frontend Development",
            "UI/UX Implementation",
            "DevOps & Deployment",
            "Responsive Web Development"
        ],
        technologies: ["React.js", "Vercel", "PageSpeed Insights", "WebPageTest", "Core Web Vitals", "Git"],
        challenge: "Large video backgrounds and unoptimized JavaScript bundles caused a abysmal 24/100 mobile PageSpeed score, harming organic search rank.",
        approach: "Refactored React code bundles into dynamic lazy-loaded modules, converted media assets to AVIF/WebP, and deployed to Vercel global CDN edge servers.",
        deliverables: [
            "Complete Core Web Vitals diagnostic audit",
            "Image & video asset compression pipeline",
            "Code splitting & critical inline CSS rendering",
            "Vercel Edge Network deployment"
        ],
        results: [
            { label: "Mobile PageSpeed Score", value: "99/100" },
            { label: "Largest Contentful Paint", value: "0.5s" },
            { label: "Google Indexation Speed", value: "3x Faster" },
            { label: "Mobile User Conversions", value: "+65%" }
        ],
        relatedIds: ["legal-firm-seo", "luxury-ecommerce"]
    }
];

/* Master Certifications & Credentials Library Store */
const CERTIFICATIONS_DATA = [
    {
        id: "hubspot-tech-seo",
        title: "HubSpot Technical SEO Certification",
        organization: "HubSpot Academy",
        category: "SEO",
        skillTag: "Technical SEO",
        skills: ["Technical SEO", "Crawl Budget", "Indexation", "Site Architecture", "Core Web Vitals"],
        issueDate: "2026",
        credentialId: "HS-TECH-98241",
        credentialUrl: "https://academy.hubspot.com/certificates",
        imageIcon: "fa-solid fa-gears",
        verified: true,
        description: "Validates technical crawling, sitemap optimization, canonical tags, HTTP status codes, and Core Web Vitals performance."
    },
    {
        id: "semrush-seo-toolkit",
        title: "Semrush SEO Toolkit Certification",
        organization: "Semrush",
        category: "SEO",
        skillTag: "SEO Auditing",
        skills: ["SEO Auditing", "Keyword Research", "Competitive Analysis", "Rank Tracking"],
        issueDate: "2025",
        credentialId: "SR-SEO-77312",
        credentialUrl: "https://www.semrush.com/academy/certificates",
        imageIcon: "fa-solid fa-magnifying-glass-chart",
        verified: true,
        description: "Validates site audit diagnostics, competitor gap analysis, backlink audits, and position tracking telemetry."
    },
    {
        id: "brightlocal-local-seo",
        title: "BrightLocal Local SEO Academy Certification",
        organization: "BrightLocal",
        category: "SEO",
        skillTag: "Local SEO",
        skills: ["Local SEO", "Google Business Profile", "NAP Citations", "Local Schema"],
        issueDate: "2025",
        credentialId: "BL-LOCAL-44910",
        credentialUrl: "https://www.brightlocal.com/academy/",
        imageIcon: "fa-solid fa-location-dot",
        verified: true,
        description: "Validates Google Business Profile 3-Pack optimization, NAP directory citation consistency, and geo-targeted landing page structure."
    },
    {
        id: "freecodecamp-responsive-web",
        title: "Responsive Web Design Certification",
        organization: "freeCodeCamp",
        category: "Development",
        skillTag: "HTML & CSS",
        skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Layouts", "Web Accessibility"],
        issueDate: "2024",
        credentialId: "FCC-RWD-33918",
        credentialUrl: "https://www.freecodecamp.org/certification/saimunsabit/responsive-web-design",
        imageIcon: "fa-solid fa-laptop-code",
        verified: true,
        description: "Validates semantic HTML5 markup, CSS Flexbox & Grid layouts, media queries, accessibility (a11y), and fluid responsiveness."
    },
    {
        id: "meta-frontend-dev",
        title: "Meta Frontend Developer Certification",
        organization: "Meta / Coursera",
        category: "Development",
        skillTag: "React",
        skills: ["React.js", "JavaScript (ES6+)", "UI Components", "State Management", "Git & GitHub"],
        issueDate: "2025",
        credentialId: "META-FED-88192",
        credentialUrl: "https://www.coursera.org/verify/professional-cert/meta-frontend-developer",
        imageIcon: "fa-brands fa-react",
        verified: true,
        description: "Validates component-driven React application development, custom hooks, DOM event handling, and single-page app architecture."
    },
    {
        id: "google-analytics-4",
        title: "Google Analytics 4 Certification",
        organization: "Google",
        category: "SEO",
        skillTag: "Analytics & Reporting",
        skills: ["Analytics & Reporting", "GA4 Event Tracking", "Conversion Funnels", "Google Search Console"],
        issueDate: "2026",
        credentialId: "GOOG-GA4-10293",
        credentialUrl: "https://skillshop.exceedlms.com/student/award/ga4-certification",
        imageIcon: "fa-solid fa-chart-pie",
        verified: true,
        description: "Validates Google Analytics 4 custom event tracking, e-commerce conversion funnel analytics, and Google Search Console telemetry."
    },
    {
        id: "hubspot-content-marketing",
        title: "HubSpot Content Marketing & On-Page SEO",
        organization: "HubSpot Academy",
        category: "SEO",
        skillTag: "On-Page SEO",
        skills: ["On-Page SEO", "Content Optimization", "Keyword Strategy", "Search Intent"],
        issueDate: "2024",
        credentialId: "HS-CONT-11928",
        credentialUrl: "https://academy.hubspot.com/certificates",
        imageIcon: "fa-solid fa-file-pen",
        verified: true,
        description: "Validates buyer intent keyword mapping, content cluster structuring, heading tag hierarchy, and organic content optimization."
    },
    {
        id: "javascript-algorithms-fcc",
        title: "JavaScript Algorithms & Data Structures",
        organization: "freeCodeCamp",
        category: "Development",
        skillTag: "JavaScript",
        skills: ["JavaScript (ES6+)", "DOM Manipulation", "Async/Await", "REST APIs", "Algorithm Logic"],
        issueDate: "2025",
        credentialId: "FCC-JS-55019",
        credentialUrl: "https://www.freecodecamp.org/certification/saimunsabit/javascript-algorithms-and-data-structures",
        imageIcon: "fa-brands fa-js",
        verified: true,
        description: "Validates ES6+ JavaScript syntax, asynchronous promises/fetch API, array methods, DOM manipulation, and problem-solving logic."
    }
];

/* Master Digital Journal Articles Data Store */
const BLOG_ARTICLES_DATA = [
    {
        id: "core-web-vitals-react-nextjs",
        title: "Optimizing Core Web Vitals in Modern React & Next.js Applications",
        category: "Web Development",
        world: "BUILD",
        tags: ["React.js", "Next.js", "Core Web Vitals", "Performance"],
        featured: true,
        readingTime: "8 min read",
        publishDate: "August 10, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-brands fa-react",
        excerpt: "A deep technical dive into LCP image optimization, INP event queue tuning, and critical inline CSS strategies for Next.js 15 apps.",
        content: `
            <h2>Introduction to Core Web Vitals in Next.js</h2>
            <p>Core Web Vitals are no longer just performance metrics—they are primary Google search ranking factors. In modern single-page applications and server-side rendered frameworks like Next.js 15, component hydration, dynamic imports, and image loading pipelines dictate your site's PageSpeed score.</p>
            
            <div class="article-code-block">
                <code>// Next.js Image Component Optimization
import Image from 'next/image';

export default function HeroBanner() {
    return (
        &lt;Image 
            src="/hero.webp" 
            alt="Hero Banner" 
            width={1200} 
            height={600} 
            priority={true} 
            quality={90} 
        /&gt;
    );
}</code>
            </div>

            <h2>1. Largest Contentful Paint (LCP) Fixes</h2>
            <p>Preloading LCP image assets, eliminating render-blocking web fonts, and deferring non-critical JavaScript execution is the first step towards achieving a 99/100 Google PageSpeed score.</p>

            <div class="article-callout-box">
                <h4><i class="fa-solid fa-lightbulb"></i> Developer Insight</h4>
                <p>Always avoid using heavy external font stylesheets inside the head tag. Use Next.js <code>next/font</code> to automatically inline font CSS files locally at build time.</p>
            </div>

            <h2>2. Interaction to Next Paint (INP) Queue Optimization</h2>
            <p>INP measures page responsiveness. Breaking long JavaScript tasks into smaller micro-tasks using <code>requestIdleCallback()</code> ensures the main thread stays responsive to user clicks and taps.</p>
        `,
        relatedIds: ["technical-seo-audit-checklist", "javascript-async-performance-patterns"]
    },
    {
        id: "technical-seo-audit-checklist",
        title: "The 2026 Technical SEO Audit Checklist for Enterprise Sites",
        category: "SEO",
        world: "GROW",
        tags: ["Technical SEO", "Crawl Budget", "Schema.org", "Google Search Console"],
        featured: false,
        readingTime: "12 min read",
        publishDate: "August 04, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-solid fa-gears",
        excerpt: "How to audit crawl budget bottlenecks, canonical tag loops, robots.txt directives, and JSON-LD structured data on large websites.",
        content: `
            <h2>Why Technical SEO Matters First</h2>
            <p>Great content cannot rank if Googlebot cannot crawl or index your site structure efficiently. Here is the step-by-step diagnostic checklist engineered for large-scale web platforms.</p>

            <div class="article-callout-box">
                <h4><i class="fa-solid fa-shield-halved"></i> Technical Audit Checklist</h4>
                <p>1. Check Google Search Console Indexation reports.<br>
                2. Audit XML sitemaps for 404 or redirected URLs.<br>
                3. Inspect self-referencing Canonical tags.<br>
                4. Validate JSON-LD Schema markup with Google Rich Results Test.</p>
            </div>

            <h2>Resolving Canonical & Crawl Budget Bottlenecks</h2>
            <p>Parameter-heavy URLs and faceted search filters can generate thousands of duplicate URL variations that waste Googlebot's crawl budget. Implementing self-referencing canonicals and parameter handling directives resolves indexation bloat.</p>
        `,
        relatedIds: ["core-web-vitals-react-nextjs", "local-seo-google-maps-3pack"]
    },
    {
        id: "local-seo-google-maps-3pack",
        title: "Dominating the Google Maps 3-Pack: A Local Business Playbook",
        category: "SEO",
        world: "GROW",
        tags: ["Local SEO", "Google Business Profile", "NAP Consistency", "Local Schema"],
        featured: false,
        readingTime: "6 min read",
        publishDate: "July 28, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-solid fa-location-dot",
        excerpt: "A tactical guide to optimizing Google Business Profiles, geotagging media, and building consistent NAP citations for local service dominance.",
        content: `
            <h2>The Local Map Pack Ranking Algorithm</h2>
            <p>Proximity, prominence, and relevance govern local map pack rankings. To secure a permanent spot in Google's local 3-Pack, local business owners must align their Google Business Profile data with website landing pages.</p>

            <h2>Injecting LocalBusiness JSON-LD Schema</h2>
            <p>Embedding structured Schema markup helps search engines connect your physical business address, service radius, and phone number directly to your website domain.</p>
        `,
        relatedIds: ["technical-seo-audit-checklist", "ecommerce-shopify-seo-architecture"]
    },
    {
        id: "javascript-async-performance-patterns",
        title: "Asynchronous JavaScript Performance & Hydration Patterns",
        category: "Web Development",
        world: "BUILD",
        tags: ["JavaScript", "Async/Await", "Performance", "Web APIs"],
        featured: false,
        readingTime: "9 min read",
        publishDate: "July 20, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-brands fa-js",
        excerpt: "Mastering non-blocking main thread execution, Web Workers, and IntersectionObserver lazy loading for zero-jank UIs.",
        content: `
            <h2>Non-Blocking JavaScript Execution</h2>
            <p>Executing heavy data processing or sorting algorithms directly on the main UI thread causes dropped frames and poor user experience. Web Workers and asynchronous event loops keep interfaces silky smooth.</p>
        `,
        relatedIds: ["core-web-vitals-react-nextjs"]
    },
    {
        id: "future-of-ai-and-web-development",
        title: "The Evolving Role of Developers in the Age of Autonomous AI",
        category: "General",
        world: "THINK",
        tags: ["Technology", "AI & Web", "Career Strategy", "Digital Culture"],
        featured: false,
        readingTime: "7 min read",
        publishDate: "July 15, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-solid fa-brain",
        excerpt: "Why understanding business logic, architecture, and user intent matters more than writing boilerplate code in modern web engineering.",
        content: `
            <h2>Beyond Code Syntax</h2>
            <p>AI tools can generate code snippets rapidly, but they cannot replace system architecture design, performance debugging, or solving real business problems. The future belongs to developers who bridge technical code with search intent and user conversion strategy.</p>
        `,
        relatedIds: ["core-web-vitals-react-nextjs"]
    },
    {
        id: "ecommerce-shopify-seo-architecture",
        title: "E-commerce Catalog Architecture & Faceted Navigation SEO",
        category: "SEO",
        world: "GROW",
        tags: ["E-commerce SEO", "Shopify", "Product Schema", "Faceted Navigation"],
        featured: false,
        readingTime: "10 min read",
        publishDate: "July 08, 2026",
        author: "Saimun Sabit",
        coverIcon: "fa-solid fa-cart-shopping",
        excerpt: "Preventing duplicate content indexation bloat while scaling product category rankings on Shopify and WooCommerce stores.",
        content: `
            <h2>Structuring E-commerce Collections</h2>
            <p>E-commerce stores often struggle with thin category pages and duplicate filter URLs. Restructuring collection hierarchies and injecting Offer JSON-LD schema increases organic search traffic and rich snippet placement.</p>
        `,
        relatedIds: ["technical-seo-audit-checklist", "local-seo-google-maps-3pack"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLivingHeroEcosystem();
    initBentoTiltPhysics();
    initMagneticButtons();
    initScrollStory();
    initLayeredCaseStudy();
    initSkillMapTree();
    initProofWall();
    initAboutCounterStats();
    initAboutTechNodePills();
    initAboutParallaxFloatingTags();
    initServicesSubservicesToggle();
    initServicesFaqAccordion();
    initPillarSmoothScroll();
    initCaseStudiesPage();
    initCertificationsPage();
    initBlogPage();
});

/* ==========================================================================
   01 — Navigation & Header
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById('site-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerBackdrop = document.getElementById('drawer-backdrop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    const openDrawer = () => {
        mobileDrawer?.classList.add('open');
        drawerBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileDrawer?.classList.remove('open');
        drawerBackdrop?.classList.remove('open');
        document.body.style.overflow = '';
    };

    mobileToggle?.addEventListener('click', openDrawer);
    drawerClose?.addEventListener('click', closeDrawer);
    drawerBackdrop?.addEventListener('click', closeDrawer);
}

/* Living Hero Ecosystem */
function initLivingHeroEcosystem() {
    const canvas = document.getElementById('living-hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener('resize', () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = Array.from({ length: 24 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(24, 60, 53, ${p.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* Bento Tilt Physics */
function initBentoTiltPhysics() {
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(1000px) rotateX(${-y / 30}deg) rotateY(${x / 30}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

/* Magnetic Buttons */
function initMagneticButtons() {
    const btns = document.querySelectorAll('.magnetic-btn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/* Scroll Story Reveal */
function initScrollStory() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

/* Layered Case Study Switcher */
function initLayeredCaseStudy() {
    const tabs = document.querySelectorAll('.layer-tab');
    const panels = document.querySelectorAll('.layer-panel');
    const urlBar = document.getElementById('layered-browser-url');

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            const layer = e.currentTarget.dataset.layer;
            e.currentTarget.classList.add('active');

            panels.forEach(panel => {
                panel.classList.toggle('active', panel.id === `layer-panel-${layer}`);
            });

            if (urlBar) {
                if (layer === 'website') urlBar.textContent = 'https://mindcaretherapy.com';
                else if (layer === 'seo') urlBar.textContent = 'https://mindcaretherapy.com/seo-telemetry';
                else if (layer === 'technical') urlBar.textContent = 'https://mindcaretherapy.com/pagespeed-audit';
            }
        });
    });
}

/* Skill Map Tree */
function initSkillMapTree() {
    const nodes = document.querySelectorAll('.tree-node');
    const title = document.getElementById('inspector-title');
    const desc = document.getElementById('inspector-desc');
    const tools = document.getElementById('inspector-tools');
    const cert = document.getElementById('inspector-cert');
    const tag = document.getElementById('inspector-tag');

    if (!nodes.length) return;

    const updateInspector = (key) => {
        const data = SKILL_MAP_DATA[key];
        if (!data) return;

        if (tag) tag.textContent = `SKILL NODE: ${key.toUpperCase()}`;
        if (title) title.textContent = data.title;
        if (desc) desc.textContent = data.desc;
        if (tools) {
            tools.innerHTML = data.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
        }
        if (cert) cert.textContent = data.cert;
    };

    nodes.forEach(node => {
        node.addEventListener('mouseenter', (e) => {
            nodes.forEach(n => n.classList.remove('active'));
            e.currentTarget.classList.add('active');
            updateInspector(e.currentTarget.dataset.skill);
        });

        node.addEventListener('click', (e) => {
            nodes.forEach(n => n.classList.remove('active'));
            e.currentTarget.classList.add('active');
            updateInspector(e.currentTarget.dataset.skill);
        });
    });

    if (nodes[0]) {
        nodes[0].classList.add('active');
        updateInspector('frontend');
    }
}

/* Proof Wall */
function initProofWall() {
    const tiles = document.querySelectorAll('.proof-tile');
    const display = document.getElementById('proof-detail-display');

    if (!tiles.length) return;

    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            tiles.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const detailText = e.currentTarget.dataset.detail;
            if (display) {
                display.innerHTML = `<p style="color: var(--accent-teal);">${detailText}</p>`;
            }
        });
    });
}

/* About Page Stats Counter */
function initAboutCounterStats() {
    const counters = document.querySelectorAll('.stat-number-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-target') || '0', 10);
                let current = 0;
                const increment = Math.ceil(endVal / 30);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= endVal) {
                        current = endVal;
                        clearInterval(timer);
                    }
                    target.textContent = current + '+';
                }, 40);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* About Tech Node Pills */
function initAboutTechNodePills() {
    const pills = document.querySelectorAll('.tech-node-pill');
    pills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
}

/* About Parallax Floating Tags */
function initAboutParallaxFloatingTags() {
    const tags = document.querySelectorAll('.hero-parallax-tag');
    if (!tags.length) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        tags.forEach((tag, idx) => {
            const factor = (idx + 1) * 0.5;
            tag.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });
}

/* Services Subservices Collapsible Accordion */
function initServicesSubservicesToggle() {
    const btns = document.querySelectorAll('.subservices-toggle-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.currentTarget.closest('.service-card-editorial');
            if (!card) return;
            const collapsible = card.querySelector('.subservices-collapsible');
            const icon = e.currentTarget.querySelector('i');
            
            if (collapsible) {
                collapsible.classList.toggle('open');
                if (collapsible.classList.contains('open')) {
                    if (icon) icon.className = 'fa-solid fa-chevron-up';
                } else {
                    if (icon) icon.className = 'fa-solid fa-chevron-down';
                }
            }
        });
    });
}

/* Services Page FAQ Accordion */
function initServicesFaqAccordion() {
    const items = document.querySelectorAll('.faq-card-item');
    items.forEach(item => {
        const question = item.querySelector('.faq-card-question');
        question?.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            items.forEach(i => i.classList.remove('open'));
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
}

/* Smooth Scroll to Service Pillars */
function initPillarSmoothScroll() {
    const jumpCards = document.querySelectorAll('.pillar-jump-card');
    jumpCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                const el = document.getElementById(targetId);
                el?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* Case Studies Interactive Engine */
function initCaseStudiesPage() {
    const gridContainer = document.getElementById('projects-dynamic-grid');
    const filterPills = document.querySelectorAll('.service-filter-pill');
    const activeFilterLabel = document.getElementById('active-filter-label');
    const activeCountBadge = document.getElementById('active-count-badge');
    const clearFilterBtn = document.getElementById('clear-filter-btn');
    const modal = document.getElementById('case-study-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!gridContainer) return;

    let currentFilter = 'All';

    function renderProjects(filter = 'All') {
        currentFilter = filter;
        gridContainer.innerHTML = '';

        const filtered = filter === 'All' 
            ? PROJECTS_DATA 
            : PROJECTS_DATA.filter(p => p.services.includes(filter));

        if (activeFilterLabel) activeFilterLabel.textContent = filter === 'All' ? 'All Services' : filter;
        if (activeCountBadge) activeCountBadge.textContent = `${filtered.length} Project${filtered.length === 1 ? '' : 's'}`;

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card-editorial reveal-on-scroll revealed';
            card.setAttribute('data-id', project.id);

            const serviceChipsHTML = project.services.slice(0, 4).map(s => 
                `<span class="project-tag-chip ${s === filter ? 'active-match' : ''}" data-service="${s}">${s}</span>`
            ).join('');

            card.innerHTML = `
                <div class="project-card-top">
                    <div class="project-card-icon"><i class="${project.coverIcon}"></i></div>
                    <span class="project-industry-pill"><i class="fa-solid fa-tag"></i> ${project.industry}</span>
                </div>
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-card-desc">${project.description}</p>
                <div class="project-tags-list mb-3">
                    ${serviceChipsHTML}
                </div>
                <div class="project-card-footer">
                    <span class="project-platform-badge"><i class="fa-solid fa-laptop-code"></i> ${project.platform}</span>
                    <button class="btn-view-case-study magnetic-btn" data-id="${project.id}">
                        View Case Study <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;

            gridContainer.appendChild(card);
        });

        gridContainer.querySelectorAll('.btn-view-case-study').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                openCaseStudyModal(id);
            });
        });

        gridContainer.querySelectorAll('.project-tag-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.stopPropagation();
                const serviceName = e.currentTarget.getAttribute('data-service');
                if (serviceName) applyFilter(serviceName);
            });
        });
    }

    function applyFilter(serviceName) {
        filterPills.forEach(pill => {
            const pillVal = pill.getAttribute('data-service');
            pill.classList.toggle('active', pillVal === serviceName);
        });
        renderProjects(serviceName);
    }

    filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const service = e.currentTarget.getAttribute('data-service');
            applyFilter(service);
        });
    });

    clearFilterBtn?.addEventListener('click', () => {
        applyFilter('All');
    });

    function openCaseStudyModal(projectId) {
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (!project || !modal) return;

        const modalTitle = document.getElementById('modal-project-title');
        const modalIndustry = document.getElementById('modal-project-industry');
        const modalType = document.getElementById('modal-project-type');
        const modalPlatform = document.getElementById('modal-project-platform');
        const modalChallenge = document.getElementById('modal-challenge-text');
        const modalApproach = document.getElementById('modal-approach-text');
        const modalDeliverables = document.getElementById('modal-deliverables-list');
        const modalTechList = document.getElementById('modal-tech-list');
        const modalResultsGrid = document.getElementById('modal-results-grid');
        const modalServicesTags = document.getElementById('modal-services-tags');
        const modalRelatedGrid = document.getElementById('modal-related-grid');

        if (modalTitle) modalTitle.textContent = project.title;
        if (modalIndustry) modalIndustry.textContent = project.industry;
        if (modalType) modalType.textContent = project.type;
        if (modalPlatform) modalPlatform.textContent = project.platform;
        if (modalChallenge) modalChallenge.textContent = project.challenge;
        if (modalApproach) modalApproach.textContent = project.approach;

        if (modalDeliverables) {
            modalDeliverables.innerHTML = project.deliverables.map(d => 
                `<li><i class="fa-solid fa-circle-check"></i> ${d}</li>`
            ).join('');
        }

        if (modalTechList) {
            modalTechList.innerHTML = project.technologies.map(t => 
                `<span class="tech-node-pill active">${t}</span>`
            ).join('');
        }

        if (modalResultsGrid) {
            modalResultsGrid.innerHTML = project.results.map(r => `
                <div class="modal-result-card">
                    <span class="result-metric-val">${r.value}</span>
                    <span class="result-metric-lbl">${r.label}</span>
                </div>
            `).join('');
        }

        if (modalServicesTags) {
            modalServicesTags.innerHTML = project.services.map(s => 
                `<button class="modal-service-btn" data-service="${s}">${s}</button>`
            ).join('');

            modalServicesTags.querySelectorAll('.modal-service-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const serviceToFilter = e.currentTarget.getAttribute('data-service');
                    closeCaseStudyModal();
                    if (serviceToFilter) applyFilter(serviceToFilter);
                });
            });
        }

        if (modalRelatedGrid) {
            const relatedProjects = PROJECTS_DATA.filter(p => project.relatedIds?.includes(p.id));
            modalRelatedGrid.innerHTML = relatedProjects.map(rel => `
                <div class="modal-related-card" data-id="${rel.id}">
                    <div class="related-card-head">
                        <i class="${rel.coverIcon}"></i>
                        <span class="related-industry">${rel.industry}</span>
                    </div>
                    <h4>${rel.title}</h4>
                    <span class="btn-text-link">View Case Study &rarr;</span>
                </div>
            `).join('');

            modalRelatedGrid.querySelectorAll('.modal-related-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const nextId = e.currentTarget.getAttribute('data-id');
                    openCaseStudyModal(nextId);
                });
            });
        }

        modal.classList.add('open');
        modalBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCaseStudyModal() {
        modal?.classList.remove('open');
        modalBackdrop?.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalCloseBtn?.addEventListener('click', closeCaseStudyModal);
    modalBackdrop?.addEventListener('click', closeCaseStudyModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) {
            closeCaseStudyModal();
        }
    });

    renderProjects('All');
}

/* Certifications Library Engine */
function initCertificationsPage() {
    const gridContainer = document.getElementById('certifications-dynamic-grid');
    const skillPills = document.querySelectorAll('.cert-skill-pill');
    const providerPills = document.querySelectorAll('.cert-provider-pill');
    const activeSkillLabel = document.getElementById('cert-active-skill-label');
    const activeCountBadge = document.getElementById('cert-active-count-badge');
    const clearFiltersBtn = document.getElementById('cert-clear-filters-btn');
    const statCertCount = document.getElementById('stat-cert-count');
    const statSkillCount = document.getElementById('stat-skill-count');
    const statPlatformCount = document.getElementById('stat-platform-count');

    const modal = document.getElementById('certificate-modal');
    const modalBackdrop = document.getElementById('cert-modal-backdrop');
    const modalCloseBtn = document.getElementById('cert-modal-close-btn');

    if (!gridContainer) return;

    let activeSkill = 'All';
    let activeProvider = 'All';

    const allSkillsSet = new Set(CERTIFICATIONS_DATA.flatMap(c => c.skills));
    const allPlatformsSet = new Set(CERTIFICATIONS_DATA.map(c => c.organization));

    if (statCertCount) statCertCount.textContent = `${CERTIFICATIONS_DATA.length}+`;
    if (statSkillCount) statSkillCount.textContent = `${allSkillsSet.size}+`;
    if (statPlatformCount) statPlatformCount.textContent = `${allPlatformsSet.size}+`;

    function renderCertifications() {
        gridContainer.innerHTML = '';

        let filtered = CERTIFICATIONS_DATA;

        if (activeSkill !== 'All') {
            filtered = filtered.filter(c => c.skillTag === activeSkill || c.skills.includes(activeSkill));
        }

        if (activeProvider !== 'All') {
            filtered = filtered.filter(c => c.organization === activeProvider);
        }

        const labelText = (activeSkill !== 'All' ? activeSkill : '') + (activeSkill !== 'All' && activeProvider !== 'All' ? ' · ' : '') + (activeProvider !== 'All' ? activeProvider : '');
        if (activeSkillLabel) activeSkillLabel.textContent = labelText || 'All Credentials';
        if (activeCountBadge) activeCountBadge.textContent = `${filtered.length} Certification${filtered.length === 1 ? '' : 's'}`;

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="empty-certs-box">
                    <i class="fa-solid fa-award"></i>
                    <h3>More Certifications Coming Soon</h3>
                    <p>I am continuously expanding my verified credentials. Try clearing your active filters to view all credentials.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card-editorial reveal-on-scroll revealed';
            card.setAttribute('data-id', cert.id);

            const skillBadgeHTML = `<span class="cert-skill-tag"><i class="fa-solid fa-circle-check"></i> ${cert.skillTag}</span>`;

            card.innerHTML = `
                <div class="cert-card-header">
                    <div class="cert-provider-badge"><i class="${cert.imageIcon}"></i> ${cert.organization}</div>
                    ${skillBadgeHTML}
                </div>
                <h3 class="cert-card-title">${cert.title}</h3>
                <p class="cert-card-desc">${cert.description}</p>
                <div class="cert-meta-row mb-3">
                    <span><i class="fa-solid fa-calendar-check"></i> Issued: ${cert.issueDate}</span>
                    <span><i class="fa-solid fa-shield-halved"></i> ID: ${cert.credentialId}</span>
                </div>
                <div class="cert-card-footer">
                    <span class="cert-verified-pill"><i class="fa-solid fa-circle-check"></i> Verified</span>
                    <button class="btn-view-cert magnetic-btn" data-id="${cert.id}">
                        View Certificate <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;

            gridContainer.appendChild(card);
        });

        gridContainer.querySelectorAll('.btn-view-cert').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                openCertificateModal(id);
            });
        });
    }

    skillPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            skillPills.forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeSkill = e.currentTarget.getAttribute('data-skill');
            renderCertifications();
        });
    });

    providerPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            providerPills.forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeProvider = e.currentTarget.getAttribute('data-provider');
            renderCertifications();
        });
    });

    clearFiltersBtn?.addEventListener('click', () => {
        skillPills.forEach(p => p.classList.remove('active'));
        providerPills.forEach(p => p.classList.remove('active'));
        if (skillPills[0]) skillPills[0].classList.add('active');
        if (providerPills[0]) providerPills[0].classList.add('active');
        activeSkill = 'All';
        activeProvider = 'All';
        renderCertifications();
    });

    function openCertificateModal(certId) {
        const cert = CERTIFICATIONS_DATA.find(c => c.id === certId);
        if (!cert || !modal) return;

        const modalTitle = document.getElementById('modal-cert-title');
        const modalOrg = document.getElementById('modal-cert-org');
        const modalTag = document.getElementById('modal-cert-tag');
        const modalDate = document.getElementById('modal-cert-date');
        const modalId = document.getElementById('modal-cert-id');
        const modalDesc = document.getElementById('modal-cert-desc');
        const modalSkills = document.getElementById('modal-cert-skills');
        const modalVerifyBtn = document.getElementById('modal-cert-verify-btn');
        const modalIcon = document.getElementById('modal-cert-icon');

        if (modalTitle) modalTitle.textContent = cert.title;
        if (modalOrg) modalOrg.textContent = cert.organization;
        if (modalTag) modalTag.textContent = cert.skillTag;
        if (modalDate) modalDate.textContent = cert.issueDate;
        if (modalId) modalId.textContent = cert.credentialId;
        if (modalDesc) modalDesc.textContent = cert.description;
        if (modalIcon) modalIcon.className = cert.imageIcon;

        if (modalSkills) {
            modalSkills.innerHTML = cert.skills.map(s => 
                `<span class="subservice-chip"><i class="fa-solid fa-check"></i> ${s}</span>`
            ).join('');
        }

        if (modalVerifyBtn && cert.credentialUrl) {
            modalVerifyBtn.href = cert.credentialUrl;
        }

        modal.classList.add('open');
        modalBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCertificateModal() {
        modal?.classList.remove('open');
        modalBackdrop?.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalCloseBtn?.addEventListener('click', closeCertificateModal);
    modalBackdrop?.addEventListener('click', closeCertificateModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) {
            closeCertificateModal();
        }
    });

    renderCertifications();
}

/* ==========================================================================
   09 — Digital Journal & Blog Engine (blog.html)
   ========================================================================== */
function initBlogPage() {
    const gridContainer = document.getElementById('blog-dynamic-grid');
    const searchInput = document.getElementById('blog-search-input');
    const categoryPills = document.querySelectorAll('.blog-category-pill');
    const activeCategoryLabel = document.getElementById('blog-active-category-label');
    const activeCountBadge = document.getElementById('blog-active-count-badge');
    const clearFiltersBtn = document.getElementById('blog-clear-filters-btn');

    const modal = document.getElementById('article-modal');
    const modalBackdrop = document.getElementById('article-modal-backdrop');
    const modalCloseBtn = document.getElementById('article-modal-close-btn');
    const progressBar = document.getElementById('reading-progress-bar');
    const modalContainer = modal?.querySelector('.modal-content-container');

    if (!gridContainer && !document.querySelector('body[data-page="blog"]')) return;

    let activeCategory = 'All';
    let searchQuery = '';

    // Bind Read Article buttons across the entire document (Cover Story, Static Sections & Dynamic Grid)
    function bindAllArticleButtons() {
        document.querySelectorAll('.btn-read-article').forEach(btn => {
            btn.removeEventListener('click', handleArticleButtonClick);
            btn.addEventListener('click', handleArticleButtonClick);
        });
    }

    function handleArticleButtonClick(e) {
        const id = e.currentTarget.getAttribute('data-id');
        if (id) openArticleModal(id);
    }

    // Filter Static & Dynamic Articles
    function filterAllArticles() {
        const query = searchQuery.trim().toLowerCase();
        let totalVisible = 0;

        // Filter all editorial cards in static sections & dynamic grid
        document.querySelectorAll('.blog-card-editorial').forEach(card => {
            const title = card.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.blog-card-desc')?.textContent.toLowerCase() || '';
            const isBuild = card.classList.contains('world-build');
            const isGrow = card.classList.contains('world-grow');
            const isThink = card.classList.contains('world-think');

            let matchesCategory = true;
            if (activeCategory === 'BUILD') matchesCategory = isBuild;
            else if (activeCategory === 'GROW') matchesCategory = isGrow;
            else if (activeCategory === 'THINK') matchesCategory = isThink;

            let matchesSearch = true;
            if (query !== '') {
                matchesSearch = title.includes(query) || desc.includes(query);
            }

            if (matchesCategory && matchesSearch) {
                card.style.display = '';
                totalVisible++;
            } else {
                card.style.display = 'none';
            }
        });

        // Also handle dynamic grid rendering
        if (gridContainer) {
            renderDynamicGrid(query);
        }

        if (activeCategoryLabel) activeCategoryLabel.textContent = activeCategory === 'All' ? 'All Articles' : activeCategory;
        if (activeCountBadge) activeCountBadge.textContent = `${totalVisible} Article${totalVisible === 1 ? '' : 's'}`;

        bindAllArticleButtons();
    }

    function renderDynamicGrid(query) {
        gridContainer.innerHTML = '';

        let filtered = BLOG_ARTICLES_DATA;

        if (activeCategory !== 'All') {
            filtered = filtered.filter(a => a.category === activeCategory || a.world === activeCategory);
        }

        if (query !== '') {
            filtered = filtered.filter(a => 
                a.title.toLowerCase().includes(query) ||
                a.excerpt.toLowerCase().includes(query) ||
                a.category.toLowerCase().includes(query) ||
                a.tags.some(t => t.toLowerCase().includes(query))
            );
        }

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="empty-certs-box">
                    <i class="fa-solid fa-newspaper"></i>
                    <h3>No Matching Articles</h3>
                    <p>Try searching for a different keyword or select another category.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(article => {
            const card = document.createElement('div');
            card.className = `blog-card-editorial world-${article.world.toLowerCase()} reveal-on-scroll revealed`;
            card.setAttribute('data-id', article.id);

            const tagsHTML = article.tags.map(t => `<span class="project-tag-chip">${t}</span>`).join('');

            card.innerHTML = `
                <div class="blog-card-header">
                    <span class="blog-world-badge world-${article.world.toLowerCase()}">${article.world} &middot; ${article.category}</span>
                    <span class="blog-reading-time"><i class="fa-regular fa-clock"></i> ${article.readingTime}</span>
                </div>
                <h3 class="blog-card-title">${article.title}</h3>
                <p class="blog-card-desc">${article.excerpt}</p>
                <div class="project-tags-list mb-3">
                    ${tagsHTML}
                </div>
                <div class="blog-card-footer">
                    <span class="blog-meta-date"><i class="fa-regular fa-calendar"></i> ${article.publishDate}</span>
                    <button class="btn-read-article magnetic-btn" data-id="${article.id}">
                        Read Article <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    }

    // Search Input Event Listener
    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterAllArticles();
    });

    // Category Pills Event Listener
    categoryPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            categoryPills.forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeCategory = e.currentTarget.getAttribute('data-category');
            filterAllArticles();
        });
    });

    // Clear Filters Event Listener
    clearFiltersBtn?.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        if (categoryPills[0]) categoryPills[0].classList.add('active');
        if (searchInput) searchInput.value = '';
        activeCategory = 'All';
        searchQuery = '';
        filterAllArticles();
    });

    // Open Article Modal Function
    function openArticleModal(articleId) {
        const article = BLOG_ARTICLES_DATA.find(a => a.id === articleId);
        if (!article || !modal) return;

        const modalTitle = document.getElementById('modal-article-title');
        const modalCategory = document.getElementById('modal-article-category');
        const modalAuthor = document.getElementById('modal-article-author');
        const modalDate = document.getElementById('modal-article-date');
        const modalTime = document.getElementById('modal-article-time');
        const modalBody = document.getElementById('modal-article-body');
        const modalRelatedGrid = document.getElementById('modal-article-related-grid');

        if (modalTitle) modalTitle.textContent = article.title;
        if (modalCategory) modalCategory.textContent = `${article.world} · ${article.category}`;
        if (modalAuthor) modalAuthor.textContent = article.author;
        if (modalDate) modalDate.textContent = article.publishDate;
        if (modalTime) modalTime.textContent = article.readingTime;
        if (modalBody) modalBody.innerHTML = article.content;

        if (modalRelatedGrid) {
            const related = BLOG_ARTICLES_DATA.filter(a => article.relatedIds?.includes(a.id));
            modalRelatedGrid.innerHTML = related.map(rel => `
                <div class="modal-related-card" data-id="${rel.id}">
                    <div class="related-card-head">
                        <i class="${rel.coverIcon}"></i>
                        <span>${rel.category}</span>
                    </div>
                    <h4>${rel.title}</h4>
                    <span class="btn-text-link">Read Article &rarr;</span>
                </div>
            `).join('');

            modalRelatedGrid.querySelectorAll('.modal-related-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const nextId = e.currentTarget.getAttribute('data-id');
                    openArticleModal(nextId);
                });
            });
        }

        modal.classList.add('open');
        modalBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';

        if (modalContainer) {
            modalContainer.scrollTop = 0;
            if (progressBar) progressBar.style.width = '0%';
        }
    }

    // Scroll Progress Bar Event inside Modal
    modalContainer?.addEventListener('scroll', () => {
        const scrollTop = modalContainer.scrollTop;
        const scrollHeight = modalContainer.scrollHeight - modalContainer.clientHeight;
        if (scrollHeight > 0 && progressBar) {
            const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
            progressBar.style.width = `${pct}%`;
        }
    });

    // Close Modal Function
    function closeArticleModal() {
        modal?.classList.remove('open');
        modalBackdrop?.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalCloseBtn?.addEventListener('click', closeArticleModal);
    modalBackdrop?.addEventListener('click', closeArticleModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) {
            closeArticleModal();
        }
    });

    filterAllArticles();
}
