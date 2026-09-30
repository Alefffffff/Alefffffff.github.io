const main = document.querySelector('main');
const escapeHTML = str => String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const video = (id,title,poster) => `<figure class="media video" data-video="${id}" data-title="${escapeHTML(title)}">${poster?`<img src="${poster}" alt="${escapeHTML(title)} video cover" loading="lazy">`:''}<button class="play-video" type="button" aria-label="Play ${escapeHTML(title)}"><span class="play-icon" aria-hidden="true">▷</span><span>Play ${escapeHTML(title)}</span></button></figure><a class="video-fallback" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>`;
const image = (src,title) => `<figure class="media"><img src="${src}" alt="${escapeHTML(title)}" loading="lazy"></figure>`;
const external = (url,label)=>`<a class="source-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const formatCopy = text => escapeHTML(translate(text)).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
function project(p,i){
 const primary=p.placeholder?'<div class="media placeholder"><span>EECS 494</span><strong>Zelda</strong><small>Gameplay preview coming soon</small></div>':p.video?video(p.video,p.title,p.poster||p.images?.[0]):image(p.images[0],p.title);
 const extraImages=(p.images||[]).slice(p.video?0:1);
 return `<article class="project"><div class="project-title"><div class="project-title-inner"><span class="project-number">${String(i+1).padStart(2,'0')} /</span><h2>${escapeHTML(p.title)}</h2><p class="project-subtitle">${escapeHTML(p.subtitle)}</p><div class="tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></div></div><div class="project-content">${primary}<p class="description">${p.description.split("\n\n").map(formatCopy).join('</p><p class="description">')}${p.bodyLink?`<br>${external(p.bodyLink,p.bodyLinkLabel)}`:''}</p><details><summary aria-label="More about ${escapeHTML(p.title)}"><span>More...</span></summary><div class="detail-body"><p>${escapeHTML(p.detail)}</p><template>${extraImages.map(s=>image(s,p.title+' — additional view')).join('')}${(p.extraVideos||[]).map(v=>`<h3>${v.title}</h3>${video(v.id,v.title)}`).join('')}</template>${p.source?external(p.source,'View on ArtStation'):''}${p.link?external(p.link,p.linkLabel):''}</div></details></div></article>`;
}
function render(){
 const requested=location.hash.slice(1).toLowerCase();const page=Object.hasOwn(portfolio,requested)?requested:'about';
 document.body.classList.toggle('collection-open',page!=='about');
 document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page==='about'){
 main.innerHTML=`<section class="about-view appear" aria-label="About Alef"><span class="coast-note" aria-hidden="true">a little art, a little engineering.</span><div class="intro-card"><p class="eyebrow">Hello, I'm</p><div class="intro-scroll" tabindex="0" role="region" aria-label="Self introduction, scroll for more"><h1>Yuyang Liu.<br><em>Call me Alef.</em></h1><p class="intro-role">Game technical artist & 3D artist.</p><p>I work between art and game development — creating real-time shaders, building animation systems, and bringing 3D worlds to life.</p><p>Based in Ann Arbor, United States.</p><h2>A little about my work</h2><p>My projects span games, XR, character art, and real-time graphics. I enjoy connecting the visual side of a project with the systems that make it work.</p><p>Outside of 3D, I draw illustrations, fan art, and comics.</p><p class="about-contact">Email: lyy20031122@gmail.com<br>Phone: (734)-489-4327</p><a class="about-work-link" href="https://www.artstation.com/alefliu" target="_blank" rel="noopener noreferrer">Find my work on ArtStation</a><div class="about-links"><a href="https://www.linkedin.com/in/yuyang-alef-liu/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="assets/Yuyang-Alef-Liu-Resume.pdf" download="Yuyang-Alef-Liu-Resume.pdf">Download Resume</a></div></div><div class="intro-bottom"><a href="#projects">Explore my projects</a><span>Scroll inside to read more</span></div></div></section>`;
 }else{
 const copy={projects:['Projects','Games & interactive experiences. From short game jams to collaborative XR worlds.'],artworks:['Artworks','Real-time materials, animation systems, and the making of characters.'],other:['Other','Illustrations, fan art, and stories on a different canvas.']}[page];
 main.innerHTML=`<section class="appear" aria-label="${copy[0]}"><div class="collection-heading"><div class="heading-left"><p class="eyebrow">Selected work / ${String(portfolio[page].length).padStart(2,'0')}</p><h1>${copy[0]}.</h1></div><div class="heading-right">${copy[1]}</div></div>${portfolio[page].map(project).join('')}</section>`;
 main.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{const label=d.querySelector('summary span');originalText.set(label.firstChild,d.open?'Less...':'More...');if(d.open){const t=d.querySelector('template');if(t)t.replaceWith(t.content.cloneNode(true));}localize(d);}));
 }
 localize(document.body);
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 const languageButton=document.querySelector('.language-toggle');
 languageButton.setAttribute('aria-pressed',String(language==='zh'));
 languageButton.setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');
 document.title=`${translate(page==='about'?'About':page[0].toUpperCase()+page.slice(1))} — ${language==='zh'?'刘寓旸':'Alef Liu'}`;
 window.scrollTo({top:0,behavior:'instant'});
 document.dispatchEvent(new Event('portfolio:render'));
}
window.addEventListener('hashchange',render);render();
document.querySelector('.language-toggle').addEventListener('click',()=>{
 const scrollY=window.scrollY;
 const introScroll=main.querySelector('.intro-scroll')?.scrollTop||0;
 const openDetails=[...main.querySelectorAll('details')].map(d=>d.open);
 language=language==='en'?'zh':'en';
 try{localStorage.setItem('alef-language',language);}catch{}
 render();
 main.querySelectorAll('details').forEach((d,i)=>{d.open=openDetails[i]||false;});
 const intro=main.querySelector('.intro-scroll');if(intro)intro.scrollTop=introScroll;
 window.scrollTo({top:scrollY,behavior:'instant'});
});
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView();});
main.addEventListener('click',event=>{const button=event.target.closest('.play-video');if(!button)return;const figure=button.closest('[data-video]');const frame=document.createElement('iframe');frame.src=`https://www.youtube-nocookie.com/embed/${figure.dataset.video}?rel=0&autoplay=1`;frame.title=translate(figure.dataset.title+' — video demonstration');frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';figure.replaceChildren(frame);});
