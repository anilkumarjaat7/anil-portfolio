import { projects, skills } from '../data/portfolioData'

export function ProjectsSection() {
  return <section className="projects section-grid" id="projects"><div className="section-index mono">03 / selected work</div><div className="projects__content"><div className="section-heading projects__heading"><p className="eyebrow">Systems with purpose</p><h2>Selected <span className="accent">work.</span></h2><p>Real-world application thinking, expressed through connected systems and useful interfaces.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-card--${project.tone} ${index === 0 ? 'project-card--featured' : ''}`} key={project.number}><div className="project-card__visual"><div className="window-bar"><span /><span /><span /><b className="mono">{project.number} / 03</b></div><div className="diagram-lines"><i /><i /><i /><strong>{index === 0 ? 'CONNECTED SYSTEM' : index === 1 ? 'LEARNING FLOW' : 'COMMERCE CORE'}</strong></div></div><div className="project-card__body"><p className="eyebrow">{project.type}</p><h3>{project.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}</h3><p>{project.detail}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>
}

export function SkillsSection() {
  return <section className="skills section-grid" id="skills"><div className="section-index mono">04 / toolkit</div><div className="skills__content"><div className="section-heading"><p className="eyebrow">A considered toolkit</p><h2>Tools for making <span className="accent">things work.</span></h2></div><div className="skills-grid">{skills.map(([category, ...items]) => <div className="skill-group" key={category}><p className="mono">{category}</p><div>{items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>
}

export function TeachingSection() {
  return <section className="teaching section-grid" id="teaching"><div className="section-index mono">05 / teaching</div><div className="teaching__content"><p className="eyebrow">Code · teach · repeat</p><h2>Clarity is a <span className="accent">technical skill.</span></h2><p className="teaching__copy">I share programming concepts in a practical, approachable way — connecting fundamentals to the kind of projects that make them stick.</p><div className="teaching__topics"><span>Java fundamentals</span><span>Spring Boot</span><span>Web application development</span><span>Project thinking</span></div></div></section>
}

export function DirectionSection() {
  return <section className="direction section-grid"><div className="section-index mono">06 / next</div><div className="direction__content"><p className="eyebrow">A direction, not a destination</p><h2>Growing toward <span className="accent">architecture.</span></h2><p>My long-term aspiration is to become a Senior Java Architect — deepening my practice in system design, microservices, cloud technologies, AI-powered applications, and technical knowledge sharing.</p><div className="direction__rail"><span>system design</span><span>microservices</span><span>cloud</span><span>AI applications</span></div></div></section>
}

export function ContactSection() {
  return <section className="contact section-grid" id="contact"><div className="section-index mono">07 / contact</div><div className="contact__content"><p className="eyebrow">Have a thoughtful problem to solve?</p><h2>Let&apos;s make something <span className="accent">useful.</span></h2><div className="contact__links"><a className="contact__email" href="https://github.com/anilkumarjaat7" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a className="contact__email" href="https://www.linkedin.com/in/anilkumarjaat" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div><p className="contact__note">For collaborations, engineering conversations, or a good discussion about building software.</p></div></section>
}

export function SiteFooter() {
  return <footer><span className="mono">ANIL.OS</span><span>Built with intent · © {new Date().getFullYear()} Anil Kumar</span><div><a href="https://github.com/anilkumarjaat7" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/anilkumarjaat" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
}
