import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const Work = () => (
  <div className="page">
    <div className="page content">
      <Label text="Work / Projects" />
      <Text>
        Component Library - Assignment 13
      </Text>
      <Text>
        A reusable React component library styled with Styled Components and tested with Jest.
      </Text>
      <Text>
        Tech: React, TypeScript, Jest, Docker, GitHub Actions
      </Text>
      <a href="https://github.com/bgiranzumrut/component-library" target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
    </div>
  </div>
);

export default Work;