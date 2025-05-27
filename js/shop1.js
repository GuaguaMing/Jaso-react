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
  let start = track.scrollLeft;
  let end = direction === 'left' ? start - scrollAmount : start + scrollAmount;
  let startTime = null;

  // 動畫過渡函式
  function smoothScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    let newScrollLeft = easeInOut(progress, start, end - start, 500); // 500 毫秒的過渡時間

    track.scrollLeft = newScrollLeft;

    if (progress < 500) { // 過渡還沒結束
      requestAnimationFrame(smoothScroll);
    } else {
      track.scrollLeft = end; // 確保完全對齊目標
    }
  }

  // easeInOut 過渡效果
  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  // 開始動畫
  requestAnimationFrame(smoothScroll);
}
