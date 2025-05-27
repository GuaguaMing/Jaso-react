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

document.addEventListener("DOMContentLoaded", function () {
  const likeBtns = document.querySelectorAll(".like-btn");

  likeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
    });
  });
});



function scrollProducts(direction) {
  const track = document.querySelector('.carousel-track');
  const scrollAmount = track.clientWidth; // 一次滑動一整行（4 個卡片）

  if (direction === 'left') {
    track.scrollLeft -= scrollAmount;
  } else {
    track.scrollLeft += scrollAmount;
  }
}
