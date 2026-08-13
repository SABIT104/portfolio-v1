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

/* Master Case Studies Data Store (Many-to-Many Relationship with Services) */
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

    // Sticky Scroll Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Drawer Open/Close Controls
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

/* 02 — Living Hero Ecosystem */
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

/* 03 — Bento Tilt Physics */
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

/* Magnetic Button Feel */
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

/* 04 — Layered Case Study Switcher */
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

/* 05 — Live Skill Map Inspector */
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

/* 06 — Compact Proof Wall Inspector */
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

/* About Tech Node Pills Interaction */
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

/* ==========================================================================
   07 — Service-Wise Interactive Case Studies Engine (projects.html)
   ========================================================================== */
function initCaseStudiesPage() {
    const gridContainer = document.getElementById('projects-dynamic-grid');
    const filterPills = document.querySelectorAll('.service-filter-pill');
    const activeFilterLabel = document.getElementById('active-filter-label');
    const activeCountBadge = document.getElementById('active-count-badge');
    const clearFilterBtn = document.getElementById('clear-filter-btn');
    const modal = document.getElementById('case-study-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!gridContainer) return; // Only execute on projects.html

    let currentFilter = 'All';

    // Render Case Studies Cards
    function renderProjects(filter = 'All') {
        currentFilter = filter;
        gridContainer.innerHTML = '';

        const filtered = filter === 'All' 
            ? PROJECTS_DATA 
            : PROJECTS_DATA.filter(p => p.services.includes(filter));

        // Update Active Indicator Text & Count
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

        // Add Card Click Listeners for Modal Trigger
        gridContainer.querySelectorAll('.btn-view-case-study').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                openCaseStudyModal(id);
            });
        });

        // Add Clickable Service Chip Listeners inside Card
        gridContainer.querySelectorAll('.project-tag-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.stopPropagation();
                const serviceName = e.currentTarget.getAttribute('data-service');
                if (serviceName) applyFilter(serviceName);
            });
        });
    }

    // Apply Filter Function
    function applyFilter(serviceName) {
        filterPills.forEach(pill => {
            const pillVal = pill.getAttribute('data-service');
            pill.classList.toggle('active', pillVal === serviceName);
        });
        renderProjects(serviceName);
    }

    // Filter Pill Click Handlers
    filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const service = e.currentTarget.getAttribute('data-service');
            applyFilter(service);
        });
    });

    // Clear Filter Button Click
    clearFilterBtn?.addEventListener('click', () => {
        applyFilter('All');
    });

    // Open Case Study Modal
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

        // Deliverables Checklist
        if (modalDeliverables) {
            modalDeliverables.innerHTML = project.deliverables.map(d => 
                `<li><i class="fa-solid fa-circle-check"></i> ${d}</li>`
            ).join('');
        }

        // Tech Stack Pills
        if (modalTechList) {
            modalTechList.innerHTML = project.technologies.map(t => 
                `<span class="tech-node-pill active">${t}</span>`
            ).join('');
        }

        // Results Grid
        if (modalResultsGrid) {
            modalResultsGrid.innerHTML = project.results.map(r => `
                <div class="modal-result-card">
                    <span class="result-metric-val">${r.value}</span>
                    <span class="result-metric-lbl">${r.label}</span>
                </div>
            `).join('');
        }

        // Services Tags (Clicking a tag closes modal & filters by that service!)
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

        // Related Projects
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

        // Show Modal Overlay
        modal.classList.add('open');
        modalBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // Close Case Study Modal
    function closeCaseStudyModal() {
        modal?.classList.remove('open');
        modalBackdrop?.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalCloseBtn?.addEventListener('click', closeCaseStudyModal);
    modalBackdrop?.addEventListener('click', closeCaseStudyModal);

    // ESC Key Listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) {
            closeCaseStudyModal();
        }
    });

    // Initial Render
    renderProjects('All');
}
