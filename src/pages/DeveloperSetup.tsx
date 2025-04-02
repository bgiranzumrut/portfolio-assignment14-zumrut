import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const DeveloperSetup = () => (
  <div className="page">
    <div className="page content">
      <Label text="Developer Setup" />
      <Text>
        I use VSCode with Prettier and ESLint extensions to maintain code quality.
      </Text>
      <Text>
        Terminal: Integrated VSCode terminal with PowerShell or Git Bash.
      </Text>
      <Text>
        Font: Fira Code with ligatures for improved readability.
      </Text>
    </div>
  </div>
);

export default DeveloperSetup;