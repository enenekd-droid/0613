import React from 'react';

export default function MaterialIcon({
  name,
  size = 20,
  fill = 0,
  weight = 500,
  grade = 0,
  opticalSize,
  className = '',
  style,
  ...props
}) {
  const opsz = opticalSize ?? Math.max(20, Math.min(48, size));

  return (
    <span
      className={`material-symbols-rounded material-icon ${className}`.trim()}
      aria-hidden="true"
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
        ...style,
      }}
      {...props}
    >
      {name}
    </span>
  );
}
