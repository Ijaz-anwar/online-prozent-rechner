import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';
import './CalculatorDirectory.css';

export default function CalculatorDirectory({
  title = 'Percentage Calculators Directory',
  subtitle = 'Choose from our comprehensive suite of precision percentage tools:'
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Basic Math', 'Growth & Trends', 'Financial & Pricing', 'Reverse Math', 'Statistics & Analysis'];

  // Filter tools based on category and search query
  const filteredTools = calculatorsConfig.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.formula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="calc-directory-section" aria-label="Calculators Directory">
      <div className="directory-header-row">
        <div>
          <h2 className="directory-main-title">{title}</h2>
          {subtitle && <p className="directory-main-subtitle">{subtitle}</p>}
        </div>

        {/* Search Bar */}
        <div className="directory-search-box">
          <Search size={18} className="search-icon" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search calculator (e.g. increase, discount)..."
            className="directory-search-input"
            aria-label="Search calculators"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="directory-filter-bar" role="tablist" aria-label="Calculator Categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`directory-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Calculator Cards Grid */}
      <div className="directory-cards-grid">
        {filteredTools.length === 0 ? (
          <div className="directory-empty-search card">
            <p>No calculators matched "<strong>{searchQuery}</strong>".</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              style={{ marginTop: '0.75rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredTools.map((tool) => {
            const ToolIcon = tool.icon;
            return (
              <article key={tool.id} className="directory-tool-card card animate-fade-in">
                <div className="card-top-header">
                  <div className="tool-icon-wrapper" aria-hidden="true">
                    <ToolIcon size={20} />
                  </div>
                  <span className="badge badge-blue">{tool.badge || tool.category}</span>
                </div>

                <div className="card-content-area">
                  <h3 className="card-tool-name">{tool.name}</h3>
                  <p className="card-tool-desc">{tool.description}</p>
                </div>

                <div className="card-formula-preview">
                  <code>{tool.formula}</code>
                </div>

                <div className="card-bottom-actions">
                  <Link
                    to={`/${tool.slug}`}
                    className="btn btn-primary calculate-btn"
                    aria-label={`Calculate with ${tool.name}`}
                  >
                    <span>Calculate</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
