console.log("working")
document.addEventListener("DOMContentLoaded", () => {
  const borders = document.querySelectorAll(".sub-arrangement-why-choose-us .train");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // start animation
        observer.unobserve(entry.target);      // stop observing so it never restarts
      }
    });
  }, { threshold: 0.5 }); // trigger when half visible

  borders.forEach(border => observer.observe(border));
});
