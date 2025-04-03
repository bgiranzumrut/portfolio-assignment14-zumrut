import React from 'react';
import Text from '../components/Text/Text';
import { RotateCcw } from 'lucide-react';

const FlipHint = () => (
  <div className="flip-hint">
    <RotateCcw size={24} />
    <span>Flip to explore</span>
  </div>
);

const DeveloperSetup = () => (
  <div className="page">
    <div className="page content">
      <h1>Developer Setup</h1>

      <Text>
        <strong>Editor:</strong> Visual Studio Code (VSCode)
      </Text>

      <Text>
        <strong>Extensions:</strong> Prettier, ESLint, GitLens, Docker, Code
        Spell Checker, VSCode Icons
      </Text>

      <Text>
        <strong>Formatting & Linting:</strong> Prettier and ESLint are
        configured to ensure code consistency and quality. Auto-format on save
        is enabled for convenience.
      </Text>

      <Text>
        <strong>Theme & Fonts:</strong> Using <code>Fira Code</code> with
        ligatures for better code readability. Theme is set to a soft, minimal
        contrast scheme to reduce eye strain.
      </Text>

      <Text>
        <strong>Terminal:</strong> I use the integrated VSCode terminal with
        PowerShell (default on Windows) and Git Bash for running Node/Docker/Git
        commands.
      </Text>

      <FlipHint />
    </div>
  </div>
);

export default DeveloperSetup;
