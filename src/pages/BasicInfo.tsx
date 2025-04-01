import Img from '../components/Img/Img';
import Text from '../components/Text/Text';
import Label from '../components/Label/Label';

const BasicInfo = () => {
  return (
    <div className="basic-info-page" style={{ padding: '2rem', textAlign: 'center' }}>
      <style>
        {`
          .profile-image {
            border-radius: 50%;
            margin-bottom: 1rem;
          }
        `}
      </style>
      <Img
        src="/assets/profile.jpg" // place your image in public/assets/profile.jpg
        alt="Busra Giran Zumrut Portrait"
        width="150px"
        height="150px"

      />

      <Label text="Hello, I'm Busra" />
      <Text>Full Stack Developer Student | Passionate about Accessibility...</Text>


      <div style={{ marginTop: '1rem' }}>
        <Text>Winnipeg, MB"</Text>
        <Text>busragiran@example.com</Text>
        <Text>github.com/bgiranzumrut</Text>
      </div>
    </div>
  );
};

export default BasicInfo;
