import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Cpu, Code2, DraftingCompass, Users, Menu, X, Github, Mail, ExternalLink, Plus, MoveUpRight, Sparkles, Radio, CircuitBoard } from "lucide-react";
import "./styles.css";

const projects = [
  {
    n: "01", type: "ROBOTICS / WEB", title: "A home base for the team",
    summary: "Designed and built the Robo Raiders team website from scratch to give our team a clearer digital presence.",
    tags: ["HTML", "CSS", "JavaScript", "Team storytelling"],
    visual: "browser", color: "blue"
  },
  {
    n: "02", type: "MECHANICAL DESIGN / CAD", title: "Mousetrap race car",
    summary: "Used CAD and mechanical-design skills in a mousetrap-powered race car project. Earned 1st place overall, with speed and accuracy evaluated as separate scoring categories.",
    tags: ["Onshape", "Revit", "CAD", "Iteration"],
    visual: "car", color: "orange"
  },
  {
    n: "03", type: "COMMUNITY / OUTREACH", title: "Make the team visible",
    summary: "Helped grow the robotics team's Instagram community to 600+ followers in one year through social content, outreach, and team storytelling.",
    tags: ["Social media", "Outreach", "Communication"],
    visual: "social", color: "pink"
  },
  {
    n: "04", type: "ONGOING RESEARCH / ACCESS", title: "Admissionary",
    summary: "An ongoing research project exploring how to help first-generation immigrant students and families navigate U.S. education systems and financial literacy.",
    tags: ["Research", "Education access", "Product thinking"],
    visual: "research", color: "green"
  }
];

function Sketch({ type }) {
  if (type === "browser") return <div className="browser-art">
    <div className="browser-top"><span/><span/><span/><i>roboraiders.team</i></div>
    <div className="browser-content"><small>BUILD. TEST. REPEAT.</small><b>ROBO<br/>RAIDERS<span>↗</span></b><div className="browser-line"/><div className="browser-mini"><span>DESIGN</span><span>BUILD</span><span>COMPETE</span></div></div>
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
  </div>;
  if (type === "car") return <div className="car-art">
    <div className="car-label">MECHANICAL STUDY / 01</div>
    <svg viewBox="0 0 500 240" role="img" aria-label="Abstract technical line drawing of a small race car">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M58 156 L103 145 L146 105 L247 99 L302 132 L390 141 L426 158 L420 177 L75 177 Z"/>
        <path d="M151 106 L173 145 L294 145 L247 100"/>
        <path d="M173 145 L140 165 M294 145 L322 164 M102 145 L104 176 M390 141 L387 176"/>
        <circle cx="137" cy="177" r="25"/><circle cx="137" cy="177" r="10"/>
        <circle cx="363" cy="177" r="25"/><circle cx="363" cy="177" r="10"/>
        <path d="M199 101 L206 70 L259 70 L274 101 M207 70 L220 50 L247 50 L259 70"/>
        <path d="M219 50 L226 30 L239 30 L247 50"/>
        <path d="M80 198 H420 M92 207 H168 M327 207 H404" strokeDasharray="5 8" opacity=".55"/>
        <path d="M103 145 L83 125 L52 125 M390 141 L412 118 L447 118" strokeDasharray="3 5" opacity=".7"/>
      </g>
      <g fill="currentColor" fontFamily="DM Mono" fontSize="10"><text x="20" y="116">CHASSIS</text><text x="402" y="108">AXLE</text><text x="205" y="20">POWER UNIT</text></g>
    </svg>
    <div className="car-stamp"><span>1ST</span><small>PLACE<br/>OVERALL</small></div>
    <div className="measure measure-a">01 — DESIGN</div><div className="measure measure-b">02 — TEST</div>
  </div>;
  if (type === "social") return <div className="social-art">
    <div className="social-phone"><div className="phone-notch"/><div className="social-header"><b>ROBO RAIDERS</b><span>•••</span></div><div className="social-photo"><div className="robot-shape"><span/><i/><b/></div><small>BUILD SEASON / 2026</small></div><div className="social-actions">♡　↗　▱</div><div className="social-copy"><b>600+ FOLLOWERS</b><p>More than a robot.<br/>A whole community.</p></div></div>
    <div className="follower-burst">+<br/>600</div><div className="starburst">✳</div>
  </div>;
  return <div className="research-art">
    <div className="research-grid"/>
    <div className="research-sheet"><div className="sheet-kicker">FIELD NOTES / 001</div><div className="sheet-title">ACCESS<br/>SHOULD BE<br/><em>DESIGNED.</em></div><div className="sheet-rule"/><div className="sheet-lines"><span/><span/><span/></div><div className="sheet-node node-one">EDUCATION</div><div className="sheet-node node-two">FINANCIAL LITERACY</div><div className="sheet-node node-three">OPPORTUNITY</div><div className="sheet-connect"/></div>
    <div className="ongoing-tag"><span className="pulse"/> ONGOING RESEARCH</div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const filters = ["All", "Engineering", "Software", "Community", "Research"];
  const visibleProjects = projects.filter(p => active === "All" ||
    (active === "Engineering" && p.n === "02") ||
    (active === "Software" && p.n === "01") ||
    (active === "Community" && p.n === "03") ||
    (active === "Research" && p.n === "04"));
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="top-strip"><span><span className="status-dot"/> OPEN TO BUILDING WHAT'S NEXT</span><span>JASRINA'S BUILDER'S LOG <b>↘</b> 2026</span></div>
    <header className="nav-wrap">
      <a className="wordmark" href="#home" onClick={closeMenu}><span className="mark">B<span>.</span></span><span>BUILDER'S<br/>LOG</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
        <a href="#about" onClick={closeMenu}>About <span>02</span></a>
        <a href="#toolkit" onClick={closeMenu}>Toolkit <span>03</span></a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> ENGINEERING × SOFTWARE × PEOPLE</div>
          <h1>I like making<br/><span className="outline-text">ideas</span> <span className="italic-word">work.</span></h1>
          <p className="hero-deck">A student builder exploring the space between robotics, digital products, and the communities that make technology matter.</p>
          <div className="hero-actions"><a className="button-primary" href="#work">Explore selected work <ArrowDownRight size={17}/></a><a className="text-link" href="#about">A little about me <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span>BASED IN TEXAS</span><span>ALWAYS IN BUILD MODE <span className="asterisk">✳</span></span></div>
        </div>
        <div className="hero-art" aria-label="Abstract technical illustration">
          <div className="art-topline"><span>FIG. 01</span><span>IDEA → PROTOTYPE</span></div>
          <div className="blue-disc"><div className="disc-inner"><div className="disc-center"><Cpu size={38}/></div><div className="disc-ring ring-1"/><div className="disc-ring ring-2"/><div className="disc-cross cross-a"/><div className="disc-cross cross-b"/><span className="disc-label label-a">INPUT</span><span className="disc-label label-b">ITERATE</span><span className="disc-label label-c">OUTPUT</span></div></div>
          <div className="orbit-note note-a"><span className="note-dot"/> HARDWARE</div><div className="orbit-note note-b"><span className="note-dot"/> HUMAN-CENTERED</div>
          <div className="hero-sticker"><span>CURIOUS<br/>BY DESIGN</span><Sparkles size={20}/></div>
          <div className="hero-art-footer"><span>DRAWING NO. 001</span><span>NOT TO SCALE</span></div>
        </div>
        <div className="hero-side-note">DESIGN / BUILD / LEARN / REPEAT</div>
      </section>

      <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">
        {Array.from({length:2}).map((_,i)=><React.Fragment key={i}><span>ROBOTICS</span><i>✳</i><span>CAD & MECHANICAL DESIGN</span><i>✳</i><span>SOFTWARE</span><i>✳</i><span>COMMUNITY</span><i>✳</i><span>PRODUCT THINKING</span><i>✳</i></React.Fragment>)}
      </div></div>

      <section className="work-section section-pad" id="work">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> THE WORKBENCH</div><h2>Selected <span>work.</span></h2></div><p>A few projects that show how I think, build, and bring people along.</p></div>
        <div className="filter-row">{filters.map(f=><button key={f} className={active===f?"filter active":"filter"} onClick={()=>setActive(f)}>{f}<span>{f==="All"?"04":f==="Engineering"?"01":f==="Software"?"01":f==="Community"?"01":"01"}</span></button>)}</div>
        <div className="project-grid">{visibleProjects.map(p=><article className={`project-card ${p.color}`} key={p.n}>
          <div className="project-visual"><Sketch type={p.visual}/><span className="project-index">{p.n} / 04</span></div>
          <div className="project-body"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.summary}</p>
            <div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <button className="details-toggle" onClick={()=>setExpanded(expanded===p.n?null:p.n)}>{expanded===p.n?"Less detail":"Project notes"} {expanded===p.n?<X size={15}/>:<Plus size={15}/>}</button>
            {expanded===p.n&&<div className="project-details">{p.n==="01"?"Role: designed and developed the team website. Add a live link and screenshots of the real site before publishing.":p.n==="02"?"Result: 1st place overall. Speed and accuracy were separate scoring categories. Add photos of the actual car and CAD model to make the design process visible.":p.n==="03"?"Impact: helped the team build an online presence reaching 600+ followers in one year. Add a sample post, video, or analytics screenshot if available.":"Status: ongoing research. This is a concept and research project, not a launched app. Add research questions, interviews, or early wireframes as the work develops."}</div>}
          </div>
        </article>)}</div>
        <div className="work-footnote"><span>↳</span> PROJECTS ARE WORK IN PROGRESS. PROCESS MATTERS AS MUCH AS THE FINISH.</div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-stamp">A HUMAN<br/>BEHIND THE<br/>HARDWARE <span>↘</span></div>
        <div className="about-main"><div className="eyebrow"><span className="eyebrow-line"/> NOT JUST A TOOLKIT</div><h2>Tech is better<br/>when more people<br/><em>can shape it.</em></h2></div>
        <div className="about-copy"><p className="about-lead">My name is Jasrina Sabharwal, and I'm a high school student who likes the mix of creativity and problem-solving that happens when you build something real.</p><p>Robotics has given me a place to experiment with hardware, work through design challenges, and help a team communicate what we're making. Software and web development let me turn ideas into useful experiences. Leadership and outreach remind me that great technology only goes so far if people can't find it, understand it, or feel welcome using it.</p><p>I'm excited to keep learning how tools like modern electronics-design platforms can make building more accessible to student makers.</p><div className="about-signoff">CURIOUS MIND. PRACTICAL BUILDER. <span>✳</span></div></div>
      </section>

      <section className="leadership-section section-pad">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW I SHOW UP</div><h2>Build with<br/><span>people.</span></h2></div><p>Engineering isn't only the thing on the table. It's also the people, communication, and momentum around it.</p></div>
        <div className="leadership-grid">
          <div className="lead-card lead-dark"><div className="lead-icon"><Users/></div><div className="lead-num">01 / LEADERSHIP</div><h3>Robo Raiders<br/>FTC Robotics</h3><p>Robotics treasurer and upcoming captain across three school robotics teams, with experience in outreach, sponsor communication, social media, and hardware work.</p><span className="lead-mark">TEAM FIRST ↗</span></div>
          <div className="lead-card lead-lime"><div className="lead-icon"><Radio/></div><div className="lead-num">02 / CHANGEMAKING</div><h3>Girls Empowerment<br/>Network</h3><p>Selected as a paid Youth Ambassador Council Leader for the 2026–2027 cohort, with a focus on changemaking and helping young people turn ideas into action.</p><span className="lead-mark">MAKE SPACE ↗</span></div>
          <div className="lead-card lead-paper"><div className="lead-icon"><Code2/></div><div className="lead-num">03 / PEER LEARNING</div><h3>Girls Who Code</h3><p>Membership Chair, helping make club meetings more welcoming for students who are new to coding and technology.</p><span className="lead-mark">LEARN TOGETHER ↗</span></div>
        </div>
      </section>

      <section className="toolkit-section section-pad" id="toolkit">
        <div className="toolkit-head"><div className="eyebrow"><span className="eyebrow-line"/> CURRENT TOOLKIT</div><h2>What I bring<br/><span>to the bench.</span></h2><p>A growing set of tools, with room to learn more.</p></div>
        <div className="toolkit-list">
          <div className="toolkit-item"><div className="toolkit-icon"><DraftingCompass/></div><div><h3>Design & engineering</h3><p>Onshape · Revit · CAD modeling · FTC hardware experience · mechanical design</p></div><span className="toolkit-num">01</span></div>
          <div className="toolkit-item"><div className="toolkit-icon"><Code2/></div><div><h3>Code & digital products</h3><p>Java · Python · Swift · HTML · CSS · JavaScript · SwiftUI / Xcode</p></div><span className="toolkit-num">02</span></div>
          <div className="toolkit-item"><div className="toolkit-icon"><CircuitBoard/></div><div><h3>Learning in public</h3><p>Interested in electronics design, PCB workflows, and tools that help student makers go from concept to prototype.</p></div><span className="toolkit-num">03</span></div>
          <div className="toolkit-item"><div className="toolkit-icon"><Users/></div><div><h3>Community & communication</h3><p>Team outreach · sponsor communication · social media · website building · student engagement</p></div><span className="toolkit-num">04</span></div>
        </div>
      </section>

      <section className="protoflow-section section-pad">
        <div className="protoflow-visual"><div className="pf-grid"/><div className="pf-board"><div className="board-chip"><Cpu size={34}/><span>PROTO<br/>TYPE</span></div>{Array.from({length:8}).map((_,i)=><span className={`board-trace trace-${i+1}`} key={i}/>) }<span className="board-pin pin-a"/><span className="board-pin pin-b"/><span className="board-pin pin-c"/><span className="board-pin pin-d"/></div><div className="pf-corner">FROM IDEA<br/>TO CIRCUIT</div></div>
        <div className="protoflow-copy"><div className="eyebrow"><span className="eyebrow-line"/> WHY PROTOFLOW</div><h2>Make the next<br/>builder feel<br/><em>like they belong.</em></h2><p>I know what it's like to learn by building with a student robotics team: figuring things out, sharing discoveries, and making the work visible to others. I'd bring that perspective to helping more students discover electronics design tools, try them out, and see themselves as people who can create technology.</p><p className="protoflow-note"><Sparkles size={17}/> I'm ready to learn the PCB side deeply and help other students get started, too.</p></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-top"><div className="eyebrow"><span className="eyebrow-line"/> END OF PAGE / START OF SOMETHING</div><span className="contact-index">LET'S MAKE SOMETHING USEFUL.</span></div>
        <h2>Have a project<br/>in <em>mind?</em></h2>
        <p>I'd love to connect about student robotics, design tools, and making technology easier to explore.</p>
        <a className="contact-email" href="mailto:jasrina.sabharwal@gmail.com">jasrina.sabharwal@gmail.com <ArrowUpRight/></a>
        <div className="contact-bottom"><span>© 2026 / JASRINA'S BUILDER'S LOG</span><a href="#home">BACK TO TOP ↑</a><span>MADE WITH CURIOSITY <b>✳</b></span></div>
      </section>
    </main>
    <footer><span>BUILT TO BE EDITED.</span><span>JASRINA SABHARWAL.</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);