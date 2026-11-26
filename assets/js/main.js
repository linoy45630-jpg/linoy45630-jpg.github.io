{
  // Mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Gallery filter
  const filterBtns = document.querySelectorAll('.filters .pill');
  const works = document.querySelectorAll('.work');
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filterBtns.forEach(b => b.setAttribute('aria-pressed', b === btn));
    works.forEach(w => { w.hidden = !(cat === 'all' || w.dataset.cat.split(' ').includes(cat)); });
  }));

  // Reveal sliders: drag the handle to uncover the layer underneath
  document.querySelectorAll('.peel').forEach(peel => {
    const s = peel.querySelector('.slider');
    const set = v => peel.style.setProperty('--cut', v + '%');
    s.addEventListener('input', () => set(s.value));
    set(s.value);
  });

  // Respect reduced motion: don't autoplay gameplay clips
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); });
  }

  // YouTube: show the video's opening frame, load the player only on click
  document.querySelectorAll('button.yt').forEach(b => b.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.id + '?autoplay=1&rel=0';
    f.title = b.getAttribute('aria-label');
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    const wrap = document.createElement('div');
    wrap.className = 'pic video';
    wrap.appendChild(f);
    b.replaceWith(wrap);
  }));
}
