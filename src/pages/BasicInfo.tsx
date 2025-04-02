import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const BasicInfo = () => (
  <div className="page">
    <div className="page content">
      <h1>Hello, I’m Busra</h1>
      <Label text="Welcome to my developer portfolio." />
      <Text>
        This interactive magazine-style site highlights my progress, hands-on projects, and growth as a full stack developer student.
      </Text>
      <Text>
        Each page presents a snapshot of what I’ve built — from component libraries to Dockerized apps.
      </Text>
      <Text>
        I care deeply about building accessible and ethical tech solutions. Thank you for flipping through!
      </Text>
      <div style={{ marginTop: '1rem' }}>
        <Text>📍 Winnipeg, MB</Text>
        <Text>📧 busragiran@example.com</Text>
        <Text>🌐 github.com/bgiranzumrut</Text>
      </div>
    </div>
  </div>
);

export default BasicInfo;