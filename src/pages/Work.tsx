// src/pages/Work.tsx
import Img from "../components/Img/Img";
import Text from "../components/Text/Text";
import Label from "../components/Label/Label";

const Work = () => {
  return (
    <div className="work-page" style={{ padding: "2rem", textAlign: "center" }}>
      <Label text="Work / Projects" />

      {/* Project 1 */}
      <div style={{ marginTop: "2rem" }}>
        <Img
          src="/assets/project1.jpg" // Put a sample image here later
          alt="Assignment 12 Component Library"
          width="300px"
          height="200px"
        />

        <Label text="Component Library - Assignment 13" />
        <Text>
          A reusable React component library styled with Styled Components and tested with Jest.
        </Text>
        <Text>
          Tech: React, TypeScript, Jest, Docker, GitHub Actions
        </Text>
        <a href="https://github.com/bgiranzumrut/UI-Component-Library_Assignment-13" target="_blank">
          GitHub Repo
        </a>
      </div>

      {/* Project 2 (Optional) */}
      {/* You can repeat this section for other course projects if you want */}
    </div>
  );
};

export default Work;
