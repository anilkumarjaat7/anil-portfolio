'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArchitectureCanvas } from './ArchitectureCanvas'

const technologies = [
  { name: 'Java', icon: '/tech-icons/java.svg', className: 'tech-icon--java' },
  { name: 'Python', icon: '/tech-icons/python.svg', className: 'tech-icon--python' },
  { name: 'JavaScript', icon: '/tech-icons/javascript.svg', className: 'tech-icon--javascript' },
  { name: 'MySQL', icon: '/tech-icons/mysql.svg', className: 'tech-icon--mysql' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg', className: 'tech-icon--mongodb' },
  { name: 'Spring Boot', icon: '/tech-icons/spring.svg', className: 'tech-icon--spring' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg', className: 'tech-icon--next' },
  { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss.svg', className: 'tech-icon--tailwind' }
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let frame = 0
    const updateProgress = () => {
      frame = 0
      const bounds = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height * 0.72)))
      hero.style.setProperty('--hero-progress', progress.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateProgress)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero section-grid" id="top" ref={heroRef}>
      <div className="hero__copy reveal">
        <p className="eyebrow"><span className="status-dot" /> engineer. educator. builder.</p>
        <p className="hero__kicker mono">A human perspective on technology</p>
         <p className="hero__lede">I&apos;m Anil Kumar — a Java Full Stack Developer and technical trainer focused on practical web applications, backend systems, and exploring AI-powered software solutions.</p>
        <div className="actions">
          <a className="button button--primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button button--text" href="#about">About my journey <span>↓</span></a>
        </div>
        <div className="hero__meta">
          <span>Java full-stack engineer · technical trainer</span>
          <span className="line" />
          <span>India · IST</span>
        </div>
      </div>
      <div className="hero__visual reveal reveal--delay">
        <div className="hero__portrait">
          <Image src="/anil-portrait.png" alt="Anil Kumar at his desk" width={720} height={780} priority sizes="(max-width: 800px) 90vw, 48vw" />
          <div className="portrait-label mono">ANIL_KUMAR / 01</div>
        </div>
        <h1 className="hero__name">Anil <em>Kumar</em></h1>
        <div className="tech-icons" aria-label="Technologies Anil works with">
          {technologies.map(technology => (
            <div className={`tech-icon ${technology.className}`} key={technology.name} title={technology.name}>
              <img src={technology.icon} alt="" aria-hidden="true" />
              <small>{technology.name}</small>
            </div>
          ))}
        </div>
        <ArchitectureCanvas />
        <div className="orbit orbit--one" /><div className="orbit orbit--two" />
      </div>
      <a className="hero__scroll mono" href="#about"><span>↓</span> scroll to discover</a>
    </section>
  )
}
