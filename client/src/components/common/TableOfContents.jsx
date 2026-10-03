import React from 'react';
import { ListTree, ArrowRight } from 'lucide-react';
import './TableOfContents.css';

export default function TableOfContents({
  title = 'Table of Contents',
  items = []
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="toc-container card" aria-label="Table of contents">
      <div className="toc-header">
        <ListTree size={18} className="toc-icon" />
        <span className="toc-title">{title}</span>
      </div>

      <ul className="toc-list">
        {items.map((item, idx) => (
          <li key={idx} className="toc-item">
            <a href={item.href || `#${item.id}`} className="toc-link">
              <ArrowRight size={13} className="toc-arrow" />
              <span>{item.label || item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
