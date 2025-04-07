import React from 'react';
import { RotateCcw } from 'lucide-react';

const resources = [
  {
    title: 'React Documentation',
    link: 'https://reactjs.org/docs/getting-started.html',
    desc: 'The official guide for building interactive UIs using components, hooks, and state management.',
  },
  {
    title: 'Jest Testing Framework',
    link: 'https://jestjs.io/docs/getting-started',
    desc: 'JavaScript testing framework used to test components and logic.',
  },
  {
    title: 'Storybook',
    link: 'https://storybook.js.org/docs/react/get-started/introduction',
    desc: 'Tool for building and browsing UI components in isolation. ',
  },
  {
    title: 'Docker Docs',
    link: 'https://docs.docker.com/get-started/',
    desc: 'Guide for containerizing and deploying applications.',
  },
  {
    title: 'ESLint',
    link: 'https://eslint.org/docs/latest/user-guide/getting-started',
    desc: 'Linting tool that helps maintain consistent code quality and formatting across the project.',
  },
  {
    title: 'Prettier',
    link: 'https://prettier.io/docs/en/index.html',
    desc: 'Code formatter integrated with ESLint for clean, consistent style.',
  },
];

const FlipHint = () => (
  <div className="flip-hint">
    <RotateCcw size={24} />
    <span>Flip to explore</span>
  </div>
);

const Resources = () => (
  <div className="page" style={{ position: 'relative' }}>
    <div className="page content">
      <h1>Resources</h1>
      <ul>
        {resources.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '1.2rem' }}>
            <>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--deep-sage)',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </a>{' '}
              – {item.desc}
            </>
          </li>
        ))}
      </ul>
      <FlipHint />
    </div>
  </div>
);

export default Resources;
