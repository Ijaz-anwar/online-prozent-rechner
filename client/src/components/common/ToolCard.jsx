import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import './ToolCard.css';

export default function ToolCard({
  title,
  subtitle,
  description,
  path,
  badge,
  icon: Icon = Calculator,
  tag = 'Calculator'
}) {
  return (
    <Link to={path} className="tool-card-box card" aria-label={`Open ${title}`}>
      <div className="tool-card-top-row">
        <div className="tool-card-icon-wrap">
          <Icon size={20} />
        </div>
        {badge && <span className="badge badge-blue">{badge}</span>}
      </div>

      <div className="tool-card-body">
        <h3 className="tool-card-title">{title}</h3>
        {subtitle && <p className="tool-card-subtitle">{subtitle}</p>}
        {description && <p className="tool-card-description">{description}</p>}
      </div>

      <div className="tool-card-action-row">
        <span className="tool-card-action-text">Use {tag}</span>
        <ArrowRight size={16} className="tool-card-arrow" />
      </div>
    </Link>
  );
}
