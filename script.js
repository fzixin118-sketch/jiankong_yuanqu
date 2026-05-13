const backTop = document.querySelector(".back-top");
const cockpitWrap = document.querySelector(".cockpit-wrap");

const syncBackTop = () => {
  backTop.classList.toggle("visible", window.scrollY > 520);
};

const syncCockpitScale = () => {
  if (!cockpitWrap) return;
  const scale = Math.min(1, cockpitWrap.clientWidth / 960);
  cockpitWrap.style.setProperty("--cockpit-scale", scale.toFixed(4));
};

window.addEventListener("scroll", syncBackTop, { passive: true });
window.addEventListener("resize", syncCockpitScale);

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

syncBackTop();
syncCockpitScale();
