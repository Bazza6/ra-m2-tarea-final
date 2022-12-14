import React from "react";

export default function Icon({ src, size, alt }) {
  return <img src={src} width={size} height={size} alt={alt} />;
}

//src={`require('./assets/icons/cat.svg')`}
//alt={`${name} icon`}
