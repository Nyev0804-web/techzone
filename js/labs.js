'use strict';
// Slideshow: tự chuyển slide, có nút trước/sau và dot điều hướng.
(() => {
  const root = document.querySelector('#featureSlider');
  if (!root) return;
  const slides = [...root.querySelectorAll('.feature-slide')];
  const dots = [...root.querySelectorAll('[data-slide]')];
  let current = 0;
  let timer;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => { dot.classList.toggle('is-active', i === current); dot.setAttribute('aria-pressed', String(i === current)); });
  }
  function restart() { clearInterval(timer); timer = setInterval(() => show(current + 1), 5500); }
  root.querySelector('#slidePrev').addEventListener('click', () => { show(current - 1); restart(); });
  root.querySelector('#slideNext').addEventListener('click', () => { show(current + 1); restart(); });
  dots.forEach(dot => dot.addEventListener('click', () => { show(Number(dot.dataset.slide)); restart(); }));
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  show(0); restart();
})();
// Chat/help widget: liên kết nhanh trong giao diện, chưa kết nối backend.
(() => {
  const toggle = document.querySelector('#chatToggle');
  const panel = document.querySelector('#chatPanel');
  const close = document.querySelector('#chatClose');
  if (!toggle || !panel || !close) return;
  function setOpen(open) {
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '?';
  }
  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  close.addEventListener('click', () => setOpen(false));
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
})();
// Web Share API nếu trình duyệt hỗ trợ; fallback copy URL.
(() => {
  const button = document.querySelector('#shareSiteBtn');
  const message = document.querySelector('#shareMessage');
  if (!button || !message) return;
  button.addEventListener('click', async () => {
    const shareData = { title: 'TechZone', text: 'Khám phá website demo phụ kiện công nghệ TechZone.', url: location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(location.href); message.textContent = 'Đã sao chép liên kết website.'; }
      else { message.textContent = 'Bạn có thể sao chép địa chỉ trang web trên thanh trình duyệt để chia sẻ.'; }
    } catch (error) {
      if (error?.name !== 'AbortError') message.textContent = 'Không thể chia sẻ tự động. Hãy sao chép địa chỉ trang web để chia sẻ.';
    }
  });
})();
