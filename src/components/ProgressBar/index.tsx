/**
 * ProgressBar component.
 */
import React from 'react';
import Color from 'color';
import { bgMidBlue, progressColor } from '../../theme';

export interface ProgressBarProps {
  value: number;
  color?: string;
  bgColor?: string;
  width?: number;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = progressColor,
  bgColor = Color(bgMidBlue).lighten(0.125).string(),
  width = 500,
  height = 3,
}) => {
  const containerStyles = {
    width,
    height,
    backgroundColor: bgColor,
    marginTop: '3px',
  };

  const fillerStyles = {
    height: '100%',
    width: `${value}%`,
    backgroundColor: color,
    transition: 'width 500ms ease',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
