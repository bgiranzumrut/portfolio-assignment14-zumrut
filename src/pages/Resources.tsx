import React from "react";
import Label from "../components/Label/Label";
import Text from "../components/Text/Text";

const Resources = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Label text="Resources" />

      <div style={{ marginTop: "1.5rem" }}>
        <Text>
           [React Docs](https://reactjs.org/docs/getting-started.html) - The official docs, always my go-to for fundamentals and advanced concepts.
        </Text>
        <Text>
           [Jest](https://jestjs.io/) - Used to write unit tests in my component library project.
        </Text>
        <Text>
           [Docker](https://docs.docker.com/) - Helped me understand how to package and ship this portfolio as a container.
        </Text>
        <Text>
           [Storybook](https://storybook.js.org/) - Helped me visualize and test UI components in isolation.
        </Text>
        <Text>
           [Vite](https://vitejs.dev/) - Made development faster and lighter than Create React App.
        </Text>
      </div>
    </div>
  );
};

export default Resources;
