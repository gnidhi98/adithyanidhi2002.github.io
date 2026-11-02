import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Linkedin, Mail, Menu, X, MoveUpRight, ChevronDown } from "lucide-react";

const profile = {
  name: "Adithya Nidhi",
  role: "International Marketing & Brand Management",
  location: "Malmö, Sweden",
  email: "adithyanidhi2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/adithyanidhi02",
  phone: "+46 793 51 30 69"
};

const impact = [
  { value: 20, suffix: "%", label: "rise in customer inquiries", note: "targeted campaigns" },
  { value: 7.4, prefix: "$", suffix: "M", label: "portfolio coordinated", note: "across functions" },
  { value: 100, suffix: "+", label: "buyer journeys", note: "managed end to end" }
];

const experience = [
  {
    period: "Aug 2026 — Present",
    place: "Freelance",
    title: "Digital Marketing & Web Designer",
    company: "Freelance",
    points: [
      "Digital Content & Marketing: Designed and executed organic Instagram marketing and content generation for niche brands, building targeted content and brand engagement.",
      "Web Development & Portfolio Design: Built, designed, and launched 5+ custom websites and professional portfolios, improving site loading speeds by 15% and boosting client inquiry rates.",
      "Content Strategy & Creation: Developed content marketing strategies, writing and producing high-converting multimedia assets across digital platforms.",
      "Client Management & Delivery: Managed end-to-end project lifecycles (scoping, requirements, timelines) across multiple concurrent clients, ensuring 100% on-time delivery and a 95% client satisfaction rate."
    ]
  },
  {
    period: "Jul 2023 — Aug 2025",
    place: "Trivandrum, India",
    title: "Assistant Brand Manager",
    company: "Heather Constructions",
    points: [
      "Analyzed customer trends and competitor pricing to launch targeted campaigns, contributing to a 20% increase in customer inquiries and faster phase-one sales.",
      "Managed end-to-end B2C buyer journeys for 100+ residential units while coordinating B2B partnerships and stakeholder communication.",
      "Synchronized cross-functional updates across internal divisions for a $7.4M real estate portfolio, reducing project-delivery communication delays by 17%."
    ]
  },
  {
    period: "Jan 2023 — Jul 2023",
    place: "Trivandrum, India",
    title: "Management Intern / Trainee",
    company: "Heather Constructions",
    points: [
      "Compiled four monthly executive management reports tracking asset utilization and marketing KPIs across two development projects.",
      "Conducted SWOT and market-gap analyses on five local competitors to support premium brand positioning.",
      "Coordinated cross-functional inputs from six departments to compile government tender reports for a public project valued up to $10M."
    ]
  }
];

const projects = [
  {
    number: "01",
    category: "Consulting",
    period: "Dec 2025 — Jan 2026",
    title: "Redefining Swedish retail stores as meal destinations",
    description: "Developed a strategic technology pathway to transform traditional Swedish grocery retailers into technologically augmented “meal destinations,” reframing the in-store experience around convenience and discovery.",
    tags: ["Retail strategy", "Technology", "Customer experience"]
  },
  {
    number: "02",
    category: "Leadership",
    period: "Mar 2025 — Jun 2025",
    title: "Brand strategy consulting project",
    description: "Led a five-person team through market research and brand strategy recommendations — coordinating task allocation, data analysis, report preparation, and presentation of findings.",
    tags: ["Brand strategy", "Research", "Team leadership"]
  },
  {
    number: "03",
    category: "Research",
    period: "Sep 2024 — Dec 2024",
    title: "Leadership & performance measurement",
    description: "Researched the role of leadership styles and performance-measurement systems in driving strategy implementation across four corporate case studies.",
    tags: ["Leadership", "Performance", "Strategy"]
  },
  {
    number: "04",
    category: "Market entry",
    period: "May 2024 — Jul 2024",
    title: "Trader Joe’s: a market-entry strategy for India",
    description: "Authored a market-entry strategy and financial feasibility study for adapting a $15B+ grocery brand to the Indian retail sector, covering positioning, format, and go-to-market sequencing.",
    tags: ["Market entry", "GTM", "Financial feasibility"]
  }
];

const capabilities = {
  "Strategy": ["Go-to-Market strategy", "Brand positioning", "Brand & marketing strategy", "Strategic thinking"],
  "Market": ["Market & consumer research", "Consumer behaviour analysis", "Trend analysis", "Data analysis & interpretation"],
  "Execution": ["Campaign management", "Stakeholder management", "Project management", "Budget & portfolio management"],
  "Communication": ["Strategic communications", "Cross-functional team leadership", "PowerPoint & Canva", "Excel (advanced)"],
  "Analytics": ["Google Analytics", "MS Office", "Performance reporting", "Structured business analysis"]
};

const education = [
  ["2025–26", "MSc International Marketing & Brand Management", "Lund University", "Lund, Sweden"],
  ["2024–25", "Master's in Business Administration", "O.P. Jindal Global University", "Sonipat, India"],
  ["2023–24", "Diploma in Operations Management", "Acharya Nagarjuna University", "Guntur, India"],
  ["2021–23", "Bachelor's in Botany", "University of Kerala", "Trivandrum, India"]
];

function FluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf, dpr, width, height;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const nodes = Array.from({ length: 85 }, (_, i) => ({
      angle: (i / 85) * Math.PI * 2 + Math.random() * 0.25,
      radius: 80 + Math.random() * 520,
      speed: 0.00015 + Math.random() * 0.00035,
      wobble: Math.random() * Math.PI * 2,
      size: 0.5 + Math.random() * 1.6
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = (e.clientX - r.left) / r.width;
      pointer.ty = (e.clientY - r.top) / r.height;
    };

    const draw = (time) => {
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;
      ctx.clearRect(0, 0, width, height);

      const cx = width * (0.5 + (pointer.x - 0.5) * 0.06);
      const cy = height * (0.5 + (pointer.y - 0.5) * 0.06);
      const maxR = Math.max(width, height) * 0.62;

      ctx.globalCompositeOperation = "screen";

      for (let j = 0; j < 11; j++) {
        ctx.beginPath();
        const phase = time * 0.00018 * (j % 2 ? -1 : 1) + j * 0.55;
        for (let k = 0; k <= 180; k++) {
          const t = k / 180;
          const a = t * Math.PI * 2 + phase;
          const rr = 90 + t * maxR * 0.82;
          const flow = Math.sin(a * 3.1 + time * 0.00035 + j) * 24;
          const pull = Math.sin(a - pointer.x * 5) * 34 * (1 - t);
          const x = cx + Math.cos(a) * (rr + flow + pull);
          const y = cy + Math.sin(a) * (rr * 0.48 + flow * 0.55) + Math.sin(t * 12 + phase) * 18;
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(214, 203, 175, ${0.035 + j * 0.004})`;
        ctx.lineWidth = 0.65 + (j % 3) * 0.2;
        ctx.stroke();
      }

      nodes.forEach((n, i) => {
        n.angle += n.speed * 10;
        const wobble = Math.sin(time * 0.0004 + n.wobble) * 20;
        const r = Math.min(n.radius, maxR) + wobble;
        const a = n.angle + Math.sin(time * 0.0002 + i) * 0.18;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.48;
        const distance = Math.hypot(x - pointer.x * width, y - pointer.y * height);
        const glow = Math.max(0, 1 - distance / 260);
        ctx.beginPath();
        ctx.arc(x, y, n.size + glow * 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 221, 198, ${0.10 + glow * 0.45})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", move);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas className="fluid-canvas" ref={canvasRef} aria-hidden="true" />;
}

function Headshot() {
  return (
    <div className="portrait-wrap">
      <div className="portrait-orbit orbit-a" />
      <div className="portrait-orbit orbit-b" />
      <div className="portrait">
        <img src="./headshot.png" alt="Adithya Nidhi professional headshot" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        <div className="portrait-placeholder">
          <span>AN</span>
          <small>HEADSHOT</small>
        </div>
      </div>
      <div className="portrait-caption">MALMÖ · SWEDEN</div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <main>
      <div className="grain" />
      <header className="nav">
        <button className="logo" onClick={() => scrollTo("home")}>AN<span>.</span></button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["experience", "work", "capabilities", "education"].map((x) => (
            <button key={x} onClick={() => scrollTo(x)}>{x}</button>
          ))}
          <button className="nav-contact" onClick={() => scrollTo("contact")}>Let’s talk <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero">
        <FluidCanvas />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> International Marketing & Brand Management</div>
            <h1>Ideas that<br /><em>move markets.</em></h1>
            <p className="hero-lede">Commercial thinking, with a strategic lens. I connect people, markets and brands to turn insight into meaningful business direction.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="./Adithya-Nidhi-CV.pdf" target="_blank" rel="noreferrer">View CV <Download size={16} /></a>
              <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16} /></a>
            </div>
          </div>
          <Headshot />
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("impact")}>Scroll to explore <ChevronDown size={16} /></button>
      </section>

      <section id="impact" className="impact section">
        <div className="section-label">01 / Impact</div>
        <div className="impact-intro">
          <h2>Strategy is only<br /><span>useful when it moves.</span></h2>
          <p>Two years translating market insight into brand strategy and commercial outcomes across B2C and B2B real estate marketing.</p>
        </div>
        <div className="impact-grid">
          {impact.map((item, i) => (
            <div className="impact-card" key={item.label}>
              <div className="impact-number"><span>{item.prefix}</span>{item.value}{item.suffix}</div>
              <div className="impact-label">{item.label}</div>
              <div className="impact-note">{item.note}</div>
              <span className="card-index">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section">
        <div className="section-label">02 / Experience</div>
        <div className="section-heading">
          <h2>Where insight<br /><em>became execution.</em></h2>
          <p>Commercial experience shaped by customer understanding, cross-functional coordination and structured decision-making.</p>
        </div>
        <div className="experience-list">
          {experience.map((job, i) => (
            <article className="experience-item" key={job.title}>
              <div className="experience-meta"><span>{job.period}</span><span>{job.place}</span></div>
              <div className="experience-main">
                <div>
                  <span className="role-no">0{i + 1}</span>
                  <h3>{job.title}</h3>
                  <div className="company">{job.company}</div>
                </div>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work section">
        <div className="section-label">03 / Selected work</div>
        <div className="section-heading">
          <h2>Selected<br /><em>strategic work.</em></h2>
          <p>Independent and academic projects connecting consumer research, brand strategy and market thinking.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <button className="project" key={project.number} onClick={() => setActiveProject(project)}>
              <span className="project-number">{project.number}</span>
              <div className="project-center">
                <div className="project-top"><span>{project.category}</span><span>{project.period}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <MoveUpRight className="project-arrow" />
            </button>
          ))}
        </div>
      </section>

      <section id="capabilities" className="capabilities section">
        <div className="section-label">04 / Capabilities</div>
        <div className="capability-layout">
          <div>
            <h2>A practical<br /><em>toolkit.</em></h2>
            <p>Built through consulting projects, internships and cross-functional roles across Sweden and India.</p>
          </div>
          <div className="capability-grid">
            {Object.entries(capabilities).map(([group, items]) => (
              <div className="capability-group" key={group}>
                <h4>{group}</h4>
                {items.map(item => <div className="capability-item" key={item}>{item}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education section">
        <div className="section-label">05 / Academic foundation</div>
        <div className="section-heading">
          <h2>Business thinking<br /><em>with range.</em></h2>
        </div>
        <div className="education-list">
          {education.map(([year, degree, school, place]) => (
            <div className="education-row" key={degree}>
              <span>{year}</span>
              <strong>{degree}</strong>
              <span>{school}</span>
              <span>{place}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <FluidCanvas />
        <div className="contact-content">
          <div className="section-label">06 / Next</div>
          <h2>Ready for the<br /><em>next challenge?</em></h2>
          <p>Open to opportunities across marketing, brand management, strategy, market research and growth-oriented roles.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a>
          <div className="contact-actions">
            <a href="./Adithya-Nidhi-CV.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download CV</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail size={16}/> Email</a>
          </div>
        </div>
        <footer>
          <span>© {new Date().getFullYear()} Adithya Nidhi</span>
          <span>International Marketing · Brand Strategy · Growth</span>
          <span>Malmö, Sweden</span>
        </footer>
      </section>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}><X /></button>
            <div className="project-top"><span>{activeProject.category}</span><span>{activeProject.period}</span></div>
            <span className="modal-number">{activeProject.number}</span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <div className="tags">{activeProject.tags.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;