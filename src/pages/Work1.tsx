import React from 'react';
import { Label, Text } from '../components';
import { RotateCcw } from 'lucide-react'; // Adjust this if paths differ
//import "../import { RotateCcw } from 'lucide-react';styles/Work.css"; // Optional if you're doing custom styles
const FlipHint = () => (
  <div className="flip-hint">
    <RotateCcw size={24} />
    <span>Flip to explore</span>
  </div>
);

const Work1 = () => (
  <div className="page">
    <div className="page content">
      <h1>MY WORK</h1>

      <Label
        text="Prairie Circle - Community Event Platform"
        color="var(--sage)"
      />

      <Text>
        {
          'Prairie Circle is a platform designed to help newcomer communities explore and manage events in their city. This project features key functionalities tailored for unregistered users, registered users, and admins.'
        }
      </Text>
      <Text>{'Tech: React, Vite, PHP, MySQL'}</Text>
      <a
        href="https://github.com/bgiranzumrut/prairie_circle_cms.git"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub Repo
      </a>

      <FlipHint />
    </div>
  </div>
);

export default Work1;
