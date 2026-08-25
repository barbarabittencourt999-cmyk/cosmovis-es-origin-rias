// ============ Starfield ============
(function buildStarfield() {
  const sf = document.querySelector('.starfield');
  if (!sf) return;
  const count = 120;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    const r3 = Math.random();
    const size = r3 > 0.92 ? 2.5 : r3 > 0.7 ? 1.5 : 1;
    s.style.cssText =
      `top:${(Math.random() * 100).toFixed(2)}%;` +
      `left:${(Math.random() * 100).toFixed(2)}%;` +
      `width:${size}px;height:${size}px;` +
      `animation-delay:${(Math.random() * 5).toFixed(2)}s;` +
      `animation-duration:${(3 + Math.random() * 5).toFixed(2)}s;`;
    sf.appendChild(s);
  }
})();

// ============ Nav toggle ============
(function nav() {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
})();

// ============ Constelações: filters + modal ============
(function constellations() {
  const grid = document.getElementById('const-grid');
  if (!grid) return;

  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cult = btn.dataset.filter;
      grid.querySelectorAll('.card').forEach(card => {
        const c = card.dataset.cultura;
        card.style.display = (cult === 'all' || c === cult) ? '' : 'none';
      });
    });
  });

  const backdrop = document.getElementById('modal-backdrop');
  const modal = document.getElementById('modal');
  if (!backdrop || !modal) return;
  grid.querySelectorAll('.card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      modal.querySelector('.m-img').src = card.dataset.img;
      modal.querySelector('.m-img').alt = card.dataset.nome;
      modal.querySelector('.m-tag').textContent = card.dataset.cultura;
      modal.querySelector('.m-title').textContent = card.dataset.nome;
      modal.querySelector('.m-eq').textContent = 'Equivalente: ' + card.dataset.equivalente;
      modal.querySelector('.m-desc').textContent = card.dataset.descricao;
      backdrop.classList.add('open');
    });
  });
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.classList.contains('modal-close')) {
      backdrop.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') backdrop.classList.remove('open');
  });
})();

// ============ Carousel (mitologia) ============
(function carousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const slides = track.children.length;
  let idx = 0;
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const update = () => { track.style.transform = `translateX(-${idx * 100}%)`; };
  prev.addEventListener('click', () => { idx = (idx - 1 + slides) % slides; update(); });
  next.addEventListener('click', () => { idx = (idx + 1) % slides; update(); });
})();

// ============ Accordion ============
(function accordion() {
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.addEventListener('click', () => {
      h.parentElement.classList.toggle('open');
    });
  });
})();
