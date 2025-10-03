// tombol dark mode
const darkToggle = document.createElement("button");
darkToggle.innerText = "🌙 Dark Mode";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "10px 15px";
darkToggle.style.background = "#1e3a8a";
darkToggle.style.color = "white";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "6px";
darkToggle.style.cursor = "pointer";
document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.innerText = "☀️ Light Mode";
  } else {
    darkToggle.innerText = "🌙 Dark Mode";
  }
});

// dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  body.dark-mode {
    background: #111827;
    color: #e5e7eb;
  }
  body.dark-mode nav {
    background: #0f172a;
  }
  body.dark-mode nav ul li a {
    color: #e5e7eb;
  }
  body.dark-mode nav ul li a:hover {
    color: #facc15;
  }
  body.dark-mode .hero {
    background: linear-gradient(135deg, #0f172a, #1e3a8a);
  }
  body.dark-mode section h2 {
    color: #facc15;
    border-color: #facc15;
  }
  body.dark-mode .contact-item {
    background: #1f2937;
    border: 1px solid #374151;
    color: #f9fafb;
  }
  body.dark-mode table {
    color: #f9fafb;
  }
  body.dark-mode th {
    background: #374151;
  }
  body.dark-mode tr:nth-child(even) {
    background: #1f2937;
  }
  body.dark-mode .highlight-today {
    background: #065f46 !important;
    color: #f9fafb !important;
  }
`;
document.head.appendChild(style);

// highlight hari ini
const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const today = new Date().getDay();
const todayName = days[today];

document.querySelectorAll("table tbody tr").forEach(row => {
  const dayCell = row.querySelector("td");
  if (dayCell && dayCell.innerText.includes(todayName)) {
    row.classList.add("highlight-today");
  }
});

// print
function printSchedule() {
  const schedule = document.getElementById("schedule").innerHTML;
  const original = document.body.innerHTML;

  document.body.innerHTML = schedule;
  window.print();
  document.body.innerHTML = original;
}

// tombol scroll ke atas
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





