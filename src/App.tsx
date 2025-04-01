import { HTMLFlipBook } from 'react-pageflip';
import BasicInfo from './pages/BasicInfo';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';

export default function App() {
  return (
    <div className="App">
      {/* <HTMLFlipBook width={550} height={700}>


      </HTMLFlipBook> */}

      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

