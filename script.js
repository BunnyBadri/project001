// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// SCROLL TOP
const scrollBtn = document.getElementById("scrollTop");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";

  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
