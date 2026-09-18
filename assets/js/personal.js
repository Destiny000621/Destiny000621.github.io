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

// Previews start only after Play demo is clicked and pause outside the viewport.
// The user's pause choice persists across scrolling.
for (const video of document.querySelectorAll(".project-demo")) {
  const button = video.parentElement.querySelector(".demo-toggle");
  if (!button || !("IntersectionObserver" in window)) continue;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let wantsPlayback = false;
  let inView = false;
  video.muted = true;
  video.controls = false;
  button.hidden = false;

  const updateButton = () => {
    button.textContent = video.paused ? "Play demo" : "Pause demo";
  };
  const syncPlayback = () => {
    if (inView && !document.hidden && wantsPlayback) {
      video.play().catch(updateButton);
    } else {
      video.pause();
    }
  };
  button.addEventListener("click", () => {
    wantsPlayback = video.paused;
    syncPlayback();
  });
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("error", () => {
    button.hidden = true;
    video.controls = true;
  });
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncPlayback();
  }, { threshold: 0.15 }).observe(video);
  document.addEventListener("visibilitychange", syncPlayback);
  reducedMotion.addEventListener("change", event => {
    if (event.matches) {
      wantsPlayback = false;
      syncPlayback();
    }
  });
}
