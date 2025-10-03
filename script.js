// Dark Mode
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Highlight hari ini
const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const today = new Date().getDay();
const rows = document.querySelectorAll("#schedule table tr");

rows.forEach(row => {
  if (row.cells[0] && row.cells[0].innerText === days[today]) {
    row.classList.add("highlight");
  }
});

// Print hanya jadwal
function printSchedule() {
  window.print();
}

// Scroll to Top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
