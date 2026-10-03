import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav" style={{ marginBottom: '1.5rem' }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.4rem',
        listStyle: 'none',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ChevronRight size={14} style={{ color: 'var(--text-subtle)' }} />
              {isLast || !item.path ? (
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} style={{ color: 'var(--text-muted)' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
