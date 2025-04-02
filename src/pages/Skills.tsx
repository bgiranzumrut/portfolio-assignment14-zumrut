import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const Skills = () => (
  <div className="page">
    <div className="page content">
      <Label text="Skills" />
      <Text>
        I have developed skills in full stack development through hands-on projects using:
      </Text>
      <ul>
        <li>Languages: HTML, CSS, JavaScript, TypeScript, PHP, SQL, Java (basic)</li>
        <li>Frameworks: React, Vite, Node.js</li>
        <li>Tools: VSCode, Git, GitHub, Docker, ESLint, Prettier</li>
        <li>CI/CD: GitHub Actions</li>
      </ul>
    </div>
  </div>
);

export default Skills;