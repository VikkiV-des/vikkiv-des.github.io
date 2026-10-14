// Если в системе отключена анимация, фоновые видео стоят на паузе
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function syncVideos() {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    if (reduceMotion.matches) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  });
}
syncVideos();
reduceMotion.addEventListener("change", syncVideos);
