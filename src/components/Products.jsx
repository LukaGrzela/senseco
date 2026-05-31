import { useState } from 'react'
import PluginModal from './PluginModal'
import './Products.css'

export default function Products() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedPlugin, setSelectedPlugin] = useState(null)

  const industries = ['All', 'Military/Defense', 'Public Safety', 'Industrial']

  const plugins = [
    {
      id: 1,
      name: 'SENTINEL',
      description: 'Real-time surveillance and threat detection',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Advanced surveillance capabilities with AI-powered threat detection for comprehensive security operations.',
      useCases: ['Border monitoring', 'Site security', 'Threat assessment']
    },
    {
      id: 2,
      name: 'SCOUT',
      description: 'Intelligent reconnaissance and area mapping',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'High-precision reconnaissance with real-time mapping and intelligence gathering capabilities.',
      useCases: ['Area surveillance', 'Threat assessment', 'Tactical planning']
    },
    {
      id: 3,
      name: 'WATCHMAN',
      description: 'Perimeter security and intrusion detection',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Continuous perimeter monitoring with AI-driven intrusion detection and automated alerts.',
      useCases: ['Perimeter monitoring', 'Access control', 'Security patrols']
    },
    {
      id: 4,
      name: 'RESPONDER',
      description: 'Emergency response and incident management',
      industries: ['Public Safety', 'Industrial'],
      longDescription: 'Optimized for emergency responders to manage incidents efficiently and safely.',
      useCases: ['Emergency response', 'Incident assessment', 'Casualty management']
    },
    {
      id: 5,
      name: 'PATHFINDER',
      description: 'Route optimization and navigation',
      industries: ['Military/Defense', 'Industrial'],
      longDescription: 'Advanced navigation and pathfinding for mission-critical operations in complex terrain.',
      useCases: ['Route planning', 'Terrain analysis', 'Mission optimization']
    },
    {
      id: 6,
      name: 'FORENSIC',
      description: 'Evidence collection and digital forensics',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Comprehensive forensic analysis and evidence collection for investigative purposes.',
      useCases: ['Crime scene analysis', 'Evidence collection', 'Investigation support']
    },
    {
      id: 7,
      name: 'AIRWATCH',
      description: 'Aerial monitoring and surveillance',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Professional-grade aerial monitoring with advanced tracking and analysis capabilities.',
      useCases: ['Aerial surveillance', 'Target tracking', 'Asset monitoring']
    },
    {
      id: 8,
      name: 'NAVIGATOR',
      description: 'GPS-independent navigation system',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Reliable navigation system that operates independently of GPS signals.',
      useCases: ['Indoor navigation', 'GPS-denied operations', 'Autonomous missions']
    },
    {
      id: 9,
      name: 'INSPECTOR',
      description: 'Industrial inspection and analysis',
      industries: ['Industrial'],
      longDescription: 'Specialized tool for detailed industrial inspections with automated defect detection.',
      useCases: ['Infrastructure inspection', 'Quality control', 'Maintenance planning']
    },
    {
      id: 10,
      name: 'FLEETMIND',
      description: 'Multi-drone coordination and control',
      industries: ['Military/Defense', 'Public Safety', 'Industrial'],
      longDescription: 'Intelligent coordination system for managing multiple drones simultaneously.',
      useCases: ['Fleet management', 'Coordinated operations', 'Swarm control']
    },
    {
      id: 11,
      name: 'TRACER',
      description: 'Target tracking and identification',
      industries: ['Public Safety'],
      longDescription: 'Advanced tracking system with real-time identification and prediction capabilities.',
      useCases: ['Target tracking', 'Person tracking', 'Vehicle pursuit']
    },
    {
      id: 12,
      name: 'AGRI',
      description: 'Agricultural monitoring and analysis',
      industries: ['Industrial'],
      longDescription: 'Specialized agricultural monitoring for crop health and land management.',
      useCases: ['Crop monitoring', 'Yield prediction', 'Resource planning']
    }
  ]

  const filteredPlugins = selectedIndustry === 'All'
    ? plugins
    : plugins.filter(plugin => plugin.industries.includes(selectedIndustry))

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Products by Industry</h2>

        <div className="filter-tabs">
          {industries.map((industry) => (
            <button
              key={industry}
              className={`filter-tab ${selectedIndustry === industry ? 'active' : ''}`}
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="plugins-grid">
          {filteredPlugins.map((plugin) => (
            <div key={plugin.id} className="plugin-card">
              <h3>{plugin.name}</h3>
              <p className="plugin-description">{plugin.description}</p>
              <div className="plugin-industries">
                {plugin.industries.map((industry) => (
                  <span key={industry} className="industry-badge">{industry}</span>
                ))}
              </div>
              <button
                className="btn-outline"
                onClick={() => setSelectedPlugin(plugin)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlugin && (
        <PluginModal
          plugin={selectedPlugin}
          onClose={() => setSelectedPlugin(null)}
        />
      )}
    </section>
  )
}
