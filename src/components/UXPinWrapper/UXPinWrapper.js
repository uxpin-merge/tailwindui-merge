// eslint-disable-next-line no-unused-vars
import React from "react";
import '../../index.css';

export default function UXPinWrapper({ children }) {

  // Optional: Add the Inter font family https://tailwindui.com/documentation#requirements
  let font = document.createElement('link');
  font.setAttribute('href', 'https://rsms.me/inter/inter.css');
  font.setAttribute('rel', 'stylesheet');
  document.head.appendChild(font);

  return children;
}
