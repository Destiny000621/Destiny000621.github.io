"use strict";

const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
let scheduled = false;
function updateNavigation() {
  const boundary = window.innerHeight * 0.38;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= boundary) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1);
  for (const link of links) {
    if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  scheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
