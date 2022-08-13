"use strict";
const coordinatesTextBox = document.querySelector(".coordinates-text-box");
const targetGridX = document.querySelector(".target-gridX");
const targetGridY = document.querySelector(".target-gridY");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  coordinatesTextBox.style.top = 20 + mouseY + "px";
  coordinatesTextBox.style.left = 20 + mouseX + "px";
  coordinatesTextBox.innerHTML = `${e.clientX}px, ${e.clientY}px`;

  targetGridX.style.top = `${mouseY}px`;
  targetGridY.style.left = `${mouseX}px`;
});
