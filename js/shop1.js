document.addEventListener("click", (e) => {
  document.querySelectorAll(".content").forEach(content => {
    if (!content.contains(e.target)) {
      content.classList.remove("visible");
    }
  });
});

document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.toggle("visible");
  });
});
