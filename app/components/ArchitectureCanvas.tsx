'use client'

import { useState } from 'react'

const nodes = [
  { id: 'frontend', label: 'Frontend', sub: 'React · Next.js', x: '15%', y: '18%', icon: '▣' },
  { id: 'backend', label: 'Backend API', sub: 'Java · Spring Boot', x: '61%', y: '29%', icon: '⌘' },
  { id: 'data', label: 'Database', sub: 'MySQL · Redis', x: '20%', y: '67%', icon: '◉' },
  { id: 'ai', label: 'AI layer', sub: 'LLMs · RAG', x: '65%', y: '72%', icon: '✦' }
]

export function ArchitectureCanvas() {
  const [active, setActive] = useState('backend')
  const current = nodes.find(node => node.id === active) ?? nodes[1]
  return <div className="architecture" aria-label="Anil's technology stack">
    <svg viewBox="0 0 500 300" aria-hidden="true"><path d="M105 78 L320 110 L110 220 L330 230 L320 110" /><path d="M105 78 L330 230" /></svg>
    {nodes.map(node => <button key={node.id} className={`architecture__node ${active === node.id ? 'is-active' : ''}`} style={{ left: node.x, top: node.y }} onClick={() => setActive(node.id)} aria-label={`${node.label}: ${node.sub}`} title={`${node.label}: ${node.sub}`}><span aria-hidden="true">{node.icon}</span><b>{node.label}</b></button>)}
    <div className="architecture__readout"><span className="mono">selected /</span> {current.label.toLowerCase()} <em>{current.sub}</em></div>
  </div>
}
