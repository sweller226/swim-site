import React from 'react';
import { useTheme } from '@mui/material/styles';

interface WaveProps {
  height?: number;            // height in px
  opacityBack?: number;       // back wave opacity
  color?: string;             // color override (overrides theme)
  style?: React.CSSProperties;
  top?: boolean;              // position at top
  bottom?: boolean;           // position at bottom (auto flips)
}

const Wave: React.FC<WaveProps> = ({
  height = 220,
  opacityBack = 0.35,
  color,
  style = {},
  top,
  bottom,
}) => {
  const theme = useTheme();

  // Use color prop if provided, otherwise fallback to theme background
  const waveColor = color || theme.palette.background.default;

  // Automatically flip vertically if bottom is true
  const flipVertical = !!bottom;

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height: `${height}px`,
        pointerEvents: 'none',
        transform: flipVertical ? 'scaleY(-1)' : undefined,
        top: top ? 0 : undefined,
        bottom: bottom ? 0 : undefined,
        ...style,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,80 C150,140 350,0 600,60 C850,120 1050,20 1200,70 L1200,0 L0,0 Z"
          fill={waveColor}
          opacity={opacityBack}
        />
        <path
          d="M0,120 C200,40 400,140 700,90 C950,50 1100,130 1200,100 L1200,0 L0,0 Z"
          fill={waveColor}
        />
      </svg>
    </div>
  );
};

export default Wave;