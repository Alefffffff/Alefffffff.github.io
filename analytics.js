/* Only the published portfolio sends analytics. No persistent visitor ID is added. */
(() => {
  if (location.hostname !== 'alefffffff.github.io') return;
  const category = () => ['projects', 'artworks', 'other'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'about';
  let page = category();
  let since = performance.now();
  let visible = document.visibilityState === 'visible';
  let pendingSeconds = 0;
  const queue = [];
  function send(name, data = {}, section = page) {
    const payload = { name, data: { category: section, language: document.documentElement.lang, ...data }, url: '/#' + section, title: document.title };
    if (!window.umami) { if (queue.length < 100) queue.push(payload); return; }
    deliver(payload);
  }
  function deliver(payload) {
    try { Promise.resolve(window.umami.track(props => ({ ...props, ...payload }))).catch(() => {}); } catch (_) { /* Analytics must never interrupt the portfolio. */ }
  }
  function flushTime() {
    const now = performance.now();
    if (visible) pendingSeconds += (now - since) / 1000;
    since = now;
    if (pendingSeconds >= 1) {
      const seconds = Math.floor(pendingSeconds);
      pendingSeconds -= seconds;
      send('active_time', { seconds });
    }
  }
  document.addEventListener('portfolio:render', () => {
    const next = category();
    if (next === page) return;
    flushTime();
    pendingSeconds = 0;
    page = next;
    send(undefined);
  });
  document.addEventListener('visibilitychange', () => {
    flushTime();
    visible = document.visibilityState === 'visible';
  });
  window.addEventListener('pagehide', () => { flushTime(); visible = false; });
  window.addEventListener('pageshow', () => { since = performance.now(); visible = document.visibilityState === 'visible'; });
  setInterval(flushTime, 30000);
  document.addEventListener('click', event => {
    const target = event.target.closest('summary, a, .launch-game');
    if (!target) return;
    const project = target.closest('.project')?.dataset.project;
    if (target.matches('summary')) {
      if (!target.parentElement.open) send('more_open', { project });
    } else if (target.matches('.launch-game')) {
      send('game_play', { project });
    } else if (target.matches('a') && !target.getAttribute('href')?.startsWith('#')) {
      const url = new URL(target.href);
      send(project ? 'project_link' : 'site_link', {
        ...(project ? { project } : {}), label: target.textContent.trim(),
        destination: url.origin + url.pathname, download: target.hasAttribute('download')
      });
    }
  }, true);
  send(undefined);
  const script = document.createElement('script');
  script.src = 'https://cloud.umami.is/script.js';
  script.defer = true;
  script.dataset.websiteId = 'ac44db76-b3d5-4489-b339-eab007e06219';
  script.dataset.autoTrack = 'false';
  script.dataset.domains = 'alefffffff.github.io';
  script.onload = () => { if (window.umami) queue.splice(0).forEach(deliver); };
  document.head.append(script);
})();
