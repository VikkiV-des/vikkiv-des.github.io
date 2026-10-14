// Кнопка со скрепкой копирует ссылку на кейс
const toast = document.createElement("div");
toast.className = "toast";
toast.setAttribute("role", "status");
document.body.append(toast);

let toastTimer;
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2000);
}

document.querySelectorAll("[data-copy-link]").forEach((button) => {
  button.addEventListener("click", async () => {
    const url = new URL(button.dataset.copyLink, location.href).href;
    try {
      await navigator.clipboard.writeText(url);
      showToast("Ссылка скопирована");
    } catch {
      prompt("Скопируйте ссылку:", url);
    }
  });
});

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
