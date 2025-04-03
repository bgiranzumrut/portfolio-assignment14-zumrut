import React from 'react';
import Text from '../components/Text/Text';
import { RotateCcw } from 'lucide-react';

const FlipHint = () => (
  <div className="flip-hint">
    <RotateCcw size={24} />
    <span>Flip to explore</span>
  </div>
);

const Skills = () => (
  <div className="page">
    <div className="page content">
      <h1>Skills</h1>
      <Text>
        I have developed skills in full stack development through hands-on
        projects using:
      </Text>
      <ul>
        <li>
          <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, PHP,
          SQL, Java, Rails
        </li>
        <li>
          <strong>Frameworks:</strong> React, Vite, Node.js, Ruby on the Rails
        </li>
        <li>
          <strong>Tools:</strong> VSCode, Git, GitHub, Docker, ESLint, Prettier
        </li>
        <li>
          <strong>CI/CD: </strong>GitHub Actions
        </li>
      </ul>

      <FlipHint />
    </div>
  </div>
);

export default Skills;
