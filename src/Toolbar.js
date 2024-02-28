import React from 'react';
import AlertButton from './AlertButton'; 

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="First button clicked!">First Button</AlertButton>
      <AlertButton message="Second button clicked!">Second Button</AlertButton>
      <AlertButton message="Third button clicked!">Third Button</AlertButton>
      {/* Add more AlertButton components as needed */}
    </div>
  );
};

export default Toolbar;
