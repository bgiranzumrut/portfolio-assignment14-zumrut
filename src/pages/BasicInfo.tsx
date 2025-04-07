import React from 'react';
import Text from '../components/Text/Text';
import Label from '../components/Label/Label';
import { RotateCcw } from 'lucide-react';

const FlipHint = () => (
  <div className="flip-hint">
    <RotateCcw size={24} />
    <span>Flip to explore</span>
  </div>
);

const BasicInfo = () => (
  <div className="page">
    <div className="page content">
      <h1>Hello, I’m Busra</h1>
      <Label text="Welcome to my developer portfolio." />
      <Text>
        This portfolio site highlights my progress, hands-on projects, and
        growth as a full stack developer student.
      </Text>
      <Text>Each page presents a snapshot of what I’ve built and learned.</Text>
      <Text>Thank you for flipping through!</Text>
      <div style={{ marginTop: '1rem' }}>
        <Text>📍 Winnipeg, Manitoba</Text>
        <Text>🌐 github.com/bgiranzumrut</Text>
      </div>

      {/* Add Flip Hint at the bottom */}
      <FlipHint />
    </div>
  </div>
);

export default BasicInfo;
