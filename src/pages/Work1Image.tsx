import React from 'react';
import { Img } from '../components'; // Adjust this if paths differ
//import "../styles/Work.css"; // Optional if you're doing custom styles

const Work1Image = () => {
  return (
    <div className="page cover-full">
      <Img
        src="/assets/prairie-circle.png"
        alt="Screenshot of Prairie Circle"
        borderRadius="12px"
        width="100%"
      />
    </div>
  );
};

export default Work1Image;
