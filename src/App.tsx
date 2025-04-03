import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import Cover from './pages/Cover';
import BasicInfo from './pages/BasicInfo';
// Ensure Work1.tsx exists in the ./pages directory or rename this import to match the correct file name.
import Work1Image from './pages/Work1Image';
import Work1 from './pages/Work1';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';
import DeveloperSetup2 from './pages/DeveloperSetup2';

function App() {
  return (
    <HTMLFlipBook
      width={800}
      height={600}
      size="stretch"
      minWidth={320}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1536}
      flippingTime={600}
      showCover={false}
      mobileScrollSupport
      className="flipbook"
    >
      <div className="page">
        <Cover />
      </div>
      <div className="page">
        <BasicInfo />
      </div>

      <div className="page">
        <Work1Image />
      </div>
      <div className="page">
        <Work1 />
      </div>
      <div className="page">
        <Skills />
      </div>
      <div className="page">
        <Resources />
      </div>
      <div className="page">
        <DeveloperSetup />
      </div>
      <div className="page">
        <DeveloperSetup2 />
      </div>
    </HTMLFlipBook>
  );
}

export default App;
