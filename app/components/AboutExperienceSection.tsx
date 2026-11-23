const experiences = [
  {
    number: '01',
    date: '11.2021 — 07.2025',
    role: 'Java Full Stack Developer',
    company: 'Webearn Solutions Pvt. Ltd.'
  },
  {
    number: '02',
    date: '08.2025 — present',
    role: 'Full Stack Developer (Trainer)',
    company: 'Softcrayons Tech Solutions Pvt. Ltd.'
  }
]

export function AboutExperienceSection() {
  return <section className="about-experience section-grid" id="about">
    <div className="section-index mono">01 / about + journey</div>
    <div className="about-experience__content">
      <div className="about-experience__intro">
        <div className="about-experience__story">
          <p className="eyebrow">A little about my journey</p>
          <h2>About <span className="accent">me.</span></h2>
          <p className="about-experience__lead">I&apos;m Anil Kumar, a Full Stack Developer and trainer passionate about building practical software and helping aspiring developers grow. With 4+ years of experience, I build with Java and modern full-stack technologies, develop AI-powered applications, and train developers in Java and Python Full Stack Development.</p>
          <p className="about-experience__signature mono">Developer <span>×</span> Educator</p>
        </div>
        <div className="about-experience__profile">
          <span className="profile-orbit profile-orbit--one" /><span className="profile-orbit profile-orbit--two" />
          <span className="profile-pulse profile-pulse--one" /><span className="profile-pulse profile-pulse--two" />
          <p className="eyebrow">Developer × Educator</p>
          <strong>Code in motion.<br /><span>Knowledge in motion.</span></strong>
          <div className="profile-tags"><span>Java</span><span>Mern</span><span>Python</span><span>Full Stack</span><span>Generative AI</span></div>
        </div>
      </div>
      <div className="achievement-grid"><article><strong>300<span>+</span></strong><p>Students taught</p></article><article><strong>200<span>+</span></strong><p>Students placed</p></article><article><strong>30<span>+</span></strong><p>Companies</p></article></div>
      <span id="experience" className="about-experience__anchor" />
      <div className="about-experience__journey">
        <div className="section-heading"><p className="eyebrow">Professional experience</p><h2>The path so <span className="accent">far.</span></h2><p>Real-world engineering, full-stack delivery, and practical teaching brought together in one journey.</p></div>
        <div className="experience-cards">
          <article className="experience-card experience-card--webearn" tabIndex={0}><div className="experience-card__inner">
            <ExperienceFace type="webearn" experience={experiences[0]} />
            <div className="experience-card__face experience-card__back"><span className="experience-card__number mono">01 / role</span><p className="eyebrow">Webearn journey</p><h3>Building across the stack.</h3><p>From backend systems and REST APIs to database integrations and complete web application experiences.</p><div className="tag-row"><span>Java</span><span>APIs</span><span>Databases</span></div></div>
          </div></article>
          <article className="experience-card experience-card--softcrayons"><div className="experience-card__inner">
            <ExperienceFace type="softcrayons" experience={experiences[1]} />
            <div className="experience-card__face experience-card__back"><span className="experience-card__number mono">02 / role</span><p className="eyebrow">Softcrayons journey</p><h3>Developer × Trainer.</h3><p>Working across software development and technical training, teaching Java, Python, and MERN full-stack development.</p><div className="tag-row"><span>Developer</span><span>Trainer</span><span>Mentoring</span></div></div>
          </div><div className="trainer-topics" aria-label="Training areas"><article><span>01</span><strong>Java Full Stack</strong><small>Development</small></article><article><span>02</span><strong>Python Full Stack</strong><small>Development</small></article><article><span>03</span><strong>MERN Full Stack</strong><small>Development</small></article></div></article>
        </div>
      </div>
    </div>
  </section>
}

function ExperienceFace({ type, experience }: { type: 'webearn' | 'softcrayons'; experience: typeof experiences[number] }) {
  return <div className="experience-card__face experience-card__front">
    <span className="experience-card__number mono">{experience.number}</span><p className="mono timeline__date">{experience.date}</p><h3>{experience.role}</h3><h4>{experience.company}</h4>
    {type === 'webearn' ? <><p>Building practical backend systems, REST APIs, database integrations, and full-stack application experiences.</p><div className="tag-row"><span>Java</span><span>Spring Boot</span><span>Full-stack</span></div><span className="experience-card__hint mono">hover to flip ↗</span></> : <><div className="experience-roles"><div className="experience-role experience-role--developer"><span className="experience-role__label mono">01 / role</span><h4>Java Full Stack Developer</h4><p>Building modern applications across Java backend services, frontend interfaces, APIs, and databases.</p><div className="tag-row"><span>Java</span><span>React</span><span>Systems</span></div></div><div className="experience-role experience-role--trainer" tabIndex={0}><span className="experience-role__label mono">02 / role · hover</span><h4>Full Stack Development Trainer</h4><p>Training learners in Java, Python, and MERN full-stack development through practical projects.</p></div></div><span className="experience-card__hint mono">choose a role · trainer to explore</span></>}
  </div>
}
