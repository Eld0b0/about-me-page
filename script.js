document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});

const factorA = document.getElementById("factor-a");
const factorB = document.getElementById("factor-b");
const calcResult = document.getElementById("calc-result");

function updateProduct() {
  const a = parseFloat(factorA.value);
  const b = parseFloat(factorB.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    calcResult.textContent = "Result: —";
    return;
  }

  const product = a * b;
  calcResult.textContent = `Result: ${Number(product.toFixed(6))}`;
}

[factorA, factorB].forEach((input) => input.addEventListener("input", updateProduct));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section").forEach((section) => observer.observe(section));
