import React from "react";

export default function Icon({ src, size, color }) {
  return <img src={src} fill={color} width={size} height={size} />;
}

//src={`require('./assets/icons/cat.svg')`}
//alt={`${name} icon`}
