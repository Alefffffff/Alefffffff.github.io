/* Shore experiment 02.
 * Adapted from Eduardo Allegrini, "Sea Waves on the Beach Shore":
 * https://codepen.io/edalgrin/pen/jOMQJBK
 * Retains the segmented quadratic waves, foam/water passes, layered opacity,
 * and advancing/receding tide. Reworked as dependency-free, time-based Canvas
 * for a narrow vertical portfolio divider, with horizontal mobile separators.
 */
(() => {
  const canvas = document.getElementById('shore');
  const headerCanvas = document.getElementById('header-shore');
  const headerContext = headerCanvas.getContext('2d');
  const footer = document.querySelector('.site-footer');
  const footerCanvas = document.createElement('canvas');
  footerCanvas.id = 'footer-shore';
  footerCanvas.setAttribute('aria-hidden', 'true');
  footer.prepend(footerCanvas);
  const footerContext = footerCanvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const colors = { sand: '#eee8d8', sea: '#417183', foam: '#faf6e9', wet: '#d7d8c7' };
  let surfaces = [], frame = 0, elapsed = 0, previous = 0;
  const smooth = x => x * x * (3 - 2 * x);

  // Faster wash-in, a brief crest, then a longer withdrawal. Eased joins keep
  // the original back-and-forth motion continuous at either turning point.
  function tide(t) {
    const phase = (t % 15) / 15;
    if (phase < .38) return smooth(phase / .38);
    if (phase < .47) return 1;
    return 1 - smooth((phase - .47) / .53);
  }

  function surface(element, horizontal = false) {
    const rect = element.getBoundingClientRect();
    const width = horizontal ? rect.width : innerWidth;
    const height = horizontal ? 86 : innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    element.width = Math.round(width * ratio);
    element.height = Math.round(height * ratio);
    const ctx = element.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const layout = document.querySelector('.site-header').getBoundingClientRect();
    const split = mobile.matches ? width * .4 : layout.left + layout.width * .4;
    return { element, ctx, width, height, horizontal, split };
  }

  // Coordinates are shore-distance (x) and shore-length (y). On mobile, the
  // same drawing is transposed so water sits beneath the project heading.
  function fillWave(ctx, length, extent, center, amplitude, segments, drift, color, alpha = 1, stagger = 0) {
    const fragment = length / segments;
    const shift = stagger + Math.sin(drift) * fragment * .10;
    const firstY = -fragment * 2 + shift;
    ctx.beginPath();
    ctx.moveTo(center, firstY);
    for (let k = 1; k <= segments + 5; k++) {
      const y = firstY + k * fragment;
      const x = center + Math.sin(k * 1.8 + drift) * amplitude * .20;
      const bend = amplitude * (k % 2 ? 1 : -1);
      ctx.quadraticCurveTo(center + bend, y - fragment / 2, x, y);
    }
    ctx.lineTo(extent + 2, firstY + (segments + 5) * fragment);
    ctx.lineTo(extent + 2, firstY);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
  }

  function draw(s, time) {
    const { ctx, width, height, horizontal, split } = s;
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.fillStyle = colors.sand;
    ctx.fillRect(0, 0, width, height);
    if (horizontal) ctx.transform(0, 1, 1, 0, 0, 0);
    // Anchor vertical waves to document coordinates, so their bends travel
    // with the content. Whole 230px segments keep their shape stable when
    // scrolling or expanding a project's details.
    const scrollOffset = horizontal ? 0 : Math.max(0, window.scrollY);
    if (!horizontal) ctx.translate(0, -scrollOffset);
    const length = horizontal ? width : Math.ceil((height + scrollOffset) / 230) * 230;
    const extent = horizontal ? height : width;
    const scale = horizontal ? .62 : Math.min(1, width / 1100);
    // Keep the entire surf in the empty gutter, tied to the centered layout.
    const center = horizontal ? 22 : split - 52 * scale;
    const wash = tide(time);
    const front = center + (12 - 35 * wash) * scale;
    const amplitude = (27 + 7 * Math.sin(time * .24)) * scale;
    const drift = time * .17;
    const segments = horizontal ? Math.max(3, Math.round(length / 230)) : length / 230;

    // Wet sand remains visible behind the withdrawing surf, then fades.
    fillWave(ctx, length, extent, center - 21 * scale, amplitude * .9,
      segments, drift - .15, colors.wet, .26 + (1 - wash) * .27);

    // Like the source demo, each band has a foam pass followed by water.
    // Different spacing/curvature keeps the bands from reading as outlines.
    for (let j = 0; j < 4; j++) {
      const spacing = (17 + 1.5 * Math.sin(time * .27 + j)) * scale;
      const waveCenter = front + j * spacing + Math.sin(time * .20 + j * 1.7) * 3 * scale;
      const waveAmplitude = amplitude * (1 - j * .04);
      const foamWidth = (j === 0 ? 8 + 5 * wash : 3.5 - j * .6) * scale;
      const offset = time * [.17, -.12, .14, -.09][j] + j * 1.1;
      const stagger = j * 76 * scale + Math.sin(time * .13 + j * 1.7) * 30 * scale;
      fillWave(ctx, length, extent, waveCenter, waveAmplitude, segments,
        offset, colors.foam, j === 0 ? .94 : .22 - j * .025, stagger);
      fillWave(ctx, length, extent, waveCenter + foamWidth, waveAmplitude,
        segments, offset + .05, colors.sea, [.30, .42, .60, 1][j], stagger);
    }
    ctx.restore();
  }

  function paint() {
    for (const s of surfaces) {
      if (s.horizontal) {
        const bounds = s.element.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > innerHeight) continue;
      }
      draw(s, reduced.matches ? 5 : elapsed);
    }
    // Copy the same shoreline behind the sticky navigation, hiding content
    // beneath it without introducing a seam in the animated background.
    headerContext.clearRect(0, 0, headerCanvas.width, headerCanvas.height);
    headerContext.drawImage(canvas, 0, 0);
    footerContext.clearRect(0, 0, footerCanvas.width, footerCanvas.height);
    if (mobile.matches && document.body.classList.contains('collection-open')) {
      footerContext.fillStyle = colors.sea;
      footerContext.fillRect(0, 0, footerCanvas.width, footerCanvas.height);
    } else {
      footerContext.drawImage(canvas, 0, footerCanvas.height - canvas.height);
    }
  }
  function tick(now) {
    if (previous) elapsed += Math.min((now - previous) / 1000, .1);
    previous = now;
    paint();
    frame = requestAnimationFrame(tick);
  }
  function start() {
    cancelAnimationFrame(frame);
    previous = 0;
    paint();
    if (!reduced.matches && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function setup() {
    document.querySelectorAll('.project-shore').forEach(el => el.remove());
    surfaces = [surface(canvas)];
    headerCanvas.width = canvas.width;
    headerCanvas.style.width = document.documentElement.clientWidth + 'px';
    headerCanvas.style.left = -document.querySelector('.site-header').getBoundingClientRect().left + 'px';
    headerCanvas.height = Math.round(document.querySelector('.site-header').getBoundingClientRect().height * Math.min(devicePixelRatio || 1, 2));
    const footerRect = footer.getBoundingClientRect();
    footerCanvas.width = canvas.width;
    footerCanvas.height = Math.round(footerRect.height * Math.min(devicePixelRatio || 1, 2));
    footerCanvas.style.width = document.documentElement.clientWidth + 'px';
    footerCanvas.style.left = -footerRect.left + 'px';
    document.documentElement.style.setProperty('--footer-height', footerRect.height + 'px');
    if (mobile.matches) {
      document.querySelectorAll('.project-title').forEach(title => {
        const separator = document.createElement('canvas');
        separator.className = 'project-shore';
        separator.setAttribute('aria-hidden', 'true');
        title.append(separator);
        surfaces.push(surface(separator, true));
      });
    }
    start();
  }
  addEventListener('resize', setup);
  document.addEventListener('portfolio:render', setup);
  document.addEventListener('visibilitychange', start);
  reduced.addEventListener('change', start);
  // Newly visible mobile separators need a frame even with motion disabled.
  addEventListener('scroll', () => { if (reduced.matches) paint(); }, { passive: true });
  setup();
})();
