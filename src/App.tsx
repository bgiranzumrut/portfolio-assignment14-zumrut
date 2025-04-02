import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import Cover from './pages/Cover';
import BasicInfo from './pages/BasicInfo';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';

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
        <Work />
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
    </HTMLFlipBook>
  );
}

export default App;
