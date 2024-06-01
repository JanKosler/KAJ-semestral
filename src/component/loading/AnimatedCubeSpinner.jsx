import React from 'react';
import './spin-cube.css'; // Ensure this points to the right CSS file
import { FcBearish, FcBullish, FcComboChart, FcDebt, FcDoughnutChart, FcNeutralTrading } from 'react-icons/fc';

const AnimatedCubeSpinner = () => {
  return (
    <div className="scene-container">
      <div className="cube">
        <div className="face front">
          <div className="icon">
            <FcBearish size={50} />
          </div>
        </div>
        <div className="face back">
          <div className="icon">
            <FcComboChart size={50} />
          </div>
        </div>
        <div className="face right">
          <div className="icon">
            <FcBullish size={50} />
          </div>
        </div>
        <div className="face left">
          <div className="icon">
            <FcDebt size={50} />
          </div>
        </div>
        <div className="face top">
          <div className="icon">
            <FcDoughnutChart size={50} />
          </div>
        </div>
        <div className="face bottom">
          <div className="icon">
            <FcNeutralTrading size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCubeSpinner;
