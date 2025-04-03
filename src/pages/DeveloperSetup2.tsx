import React from 'react';
import Text from '../components/Text/Text';

const DeveloperSetup2 = () => (
  <div className="page">
    <div className="page content">
      <Text>
        <strong>Editor Settings (Key Features):</strong>
        <ul>
          <li>
            <code>editor.formatOnSave</code>: true
          </li>
          <li>
            <code>editor.fontFamily</code>: Fira Code, monospace
          </li>
          <li>
            <code>editor.fontLigatures</code>: true
          </li>
          <li>
            <code>workbench.iconTheme</code>: vscode-icons
          </li>
          <li>
            <code>editor.tabSize</code>: 2
          </li>
        </ul>
      </Text>

      <Text>
        <strong>Version Control:</strong> Git with GitHub, managed via GitLens
        and built-in source control.
      </Text>
      <p className="flip-hint">Thank you!</p>
    </div>
  </div>
);

export default DeveloperSetup2;
