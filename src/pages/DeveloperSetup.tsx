// DeveloperSetup.tsx
import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const DeveloperSetup = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Label text=" Developer Setup" />

      <div style={{ marginTop: '1rem' }}>
        <Text color="#555">
          VSCode Setup: I use the Prettier and ESLint extensions to maintain consistent code formatting and catch errors early.
        </Text>
        <Text color="#555">
          Terminal Setup: I use the integrated VSCode terminal with PowerShell on Windows. I also occasionally use Git Bash for Git commands.
        </Text>
        <Text color="#555">
          Preferred Font: Fira Code with ligatures for improved readability.
        </Text>
      </div>
    </div>
  );
};

export default DeveloperSetup;
