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

  // Peel: the client's request over the learner questions
  const peel = document.getElementById('peel');
  if (peel) {
    const s = peel.querySelector('.slider');
    const set = v => peel.style.setProperty('--cut', v + '%');
    s.addEventListener('input', () => set(s.value));
    set(s.value);
  }
}
