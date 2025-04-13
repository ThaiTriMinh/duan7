// Preloader
window.onload = () => {
  document.getElementById('loader').style.display = 'none';
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Scroll Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['JavaScript', 'Python', 'Java', 'C++'],
    datasets: [{
      label: 'Programming Languages Popularity',
      data: [60, 15, 10, 15],
      backgroundColor: ['#f39c12', '#2980b9', '#8e44ad', '#2ecc71'],
      borderColor: ['#d35400', '#1f618d', '#6c3483', '#27ae60'],
      borderWidth: 1
    }]
  }
});
