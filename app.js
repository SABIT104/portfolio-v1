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

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLivingHeroEcosystem();
    initBentoTiltPhysics();
    initMagneticButtons();
    initScrollStory();
    initLayeredCaseStudy();
    initSkillMapTree();
    initProofWall();
});

/* Navigation & Drawer */
function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const drawerClose = document.getElementById('drawer-close');

    const toggleMenu = (open) => {
        if (drawer) drawer.classList.toggle('open', open);
        if (backdrop) backdrop.classList.toggle('open', open);
    };

    if (mobileToggle) mobileToggle.addEventListener('click', () => toggleMenu(true));
    if (drawerClose) drawerClose.addEventListener('click', () => toggleMenu(false));
    if (backdrop) backdrop.addEventListener('click', () => toggleMenu(false));

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* 01 — Living Hero Ecosystem Engine */
function initLivingHeroEcosystem() {
    const pills = document.querySelectorAll('.eco-pill');
    const panels = document.querySelectorAll('.eco-stage-panel');
    const urlBar = document.getElementById('hero-browser-url');

    if (!pills.length) return;

    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            pills.forEach(p => p.classList.remove('active'));
            const stage = e.currentTarget.dataset.stage;
            e.currentTarget.classList.add('active');

            panels.forEach(panel => {
                panel.classList.toggle('active', panel.id === `stage-${stage}`);
            });

            if (urlBar) {
                urlBar.textContent = `saimunsabit.com/ecosystem/${stage}`;
            }
        });
    });
}

/* 02 — Bento & Card Hover Physics */
function initBentoTiltPhysics() {
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

/* Purposeful Motion: Magnetic CTA Buttons */
function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/* 03 — "From Code to Google" Scroll Story Controller */
function initScrollStory() {
    const steps = document.querySelectorAll('.story-step');
    if (!steps.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                steps.forEach(s => s.classList.remove('active'));
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.6 });

    steps.forEach(step => observer.observe(step));
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

    // Default trigger first node
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
