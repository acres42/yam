// src/scripts/initAOS.js
import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
  AOS.init({
    once: true,
    duration: 600,
    easing: "ease-out",
  });
}
