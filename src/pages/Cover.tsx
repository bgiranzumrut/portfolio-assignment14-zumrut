import React from 'react';
import Img from '../components/Img/Img';

const Cover = () => (
  <div className="page cover-full">
    <Img
      src="/assets/profile.jpg"
      alt="Busra Giran Zumrut Portrait"
      width="350px"
      height="auto"
      className="cover-image"
      borderRadius="50%"
    />
  </div>
);

export default Cover;
