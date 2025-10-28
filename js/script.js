let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}
// 🌙 DARK MODE TOGGLE
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Simpan preferensi pengguna
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

// Set mode berdasarkan preferensi terakhir
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
});

// ⚡ SCROLL ANIMATION
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
