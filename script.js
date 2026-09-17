document.documentElement.classList.add('js');
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Menü öffnen');menu.textContent='☰';}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');menu.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const solutions={
web:{code:'01 / DIGITAL EXPERIENCE',title:'Ihr nächster\ndigitaler Auftritt.',copy:'Von der Unternehmenswebsite bis zum Onlineshop: klar gestaltet, intuitiv bedienbar und passend zu Ihrer Marke.',tags:['Webdesign','Entwicklung','E-Commerce'],link:'#leistungen',label:'Web & Shops entdecken'},
it:{code:'02 / IT SOLUTIONS',title:'Damit Ihre Technik\nwieder mitspielt.',copy:'Unterstützung bei Software, Hardware, Netzwerken und Arbeitsplätzen. Wir schauen auf das Problem und besprechen die passende Lösung.',tags:['Software','Hardware','Netzwerke'],link:'#it-service',label:'IT-Unterstützung entdecken'},
brand:{code:'03 / BRAND IDENTITY',title:'Ihre Marke.\nUnverwechselbar.',copy:'Eine visuelle Identität, die zu Ihrem Unternehmen passt. Von Logo und Typografie bis zum konsistenten digitalen Auftritt.',tags:['Branding','Visual Design','Social Media'],link:'#leistungen',label:'Designleistungen entdecken'},
marketing:{code:'04 / DIGITAL REACH',title:'Sichtbar werden.\nMenschen erreichen.',copy:'Social Media, Inhalte und digitale Kampagnen – mit einer klaren Botschaft und einem Plan für Ihre Zielgruppe.',tags:['Social Media','SEO','Content'],link:'#leistungen',label:'Marketingleistungen entdecken'}
};
document.querySelectorAll('.solution').forEach(button=>button.addEventListener('click',()=>{
const value=solutions[button.dataset.solution];
document.querySelectorAll('.solution').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
document.getElementById('solution-code').textContent=value.code;
const title=document.getElementById('solution-title');title.replaceChildren();value.title.split('\n').forEach((line,i)=>{if(i)title.append(document.createElement('br'));title.append(document.createTextNode(line));});
document.getElementById('solution-copy').textContent=value.copy;
const tags=document.getElementById('solution-tags');tags.replaceChildren(...value.tags.map(t=>{const span=document.createElement('span');span.textContent=t;return span;}));
const link=document.getElementById('solution-link');link.href=value.link;link.replaceChildren(document.createTextNode(value.label+' '));const arrow=document.createElement('span');arrow.textContent='↗';link.append(arrow);
}));
const dialog=document.getElementById('project-dialog');
const projects={frenks:{title:'Frenks Ristorante',description:'Der digitale Auftritt unseres Partners in Mannheim: ein Einblick in Restaurant und Küche, Informationen für Gäste und der direkte Weg zur Tischreservierung.',features:['Restaurant','Webdesign','Reservierung'],image:'project-frenks.jpg',url:'https://frenks.de/',note:'Partnerprojekt · Frenks Ristorante, Mannheim'},delivery:{title:'Frenks Lieferservice',description:'Die Bestellseite von Frenks bringt Speisekarte, Produktkategorien und Online-Bestellung zusammen. Ein direkter Zugang zum Lieferservice des Restaurants.',features:['Lieferservice','Online-Bestellung','E-Commerce'],image:'project-delivery.jpg',url:'https://frenks-lieferung.de/',note:'Projekt für unseren Partner Frenks'},alpha:{title:'Alpha Autos',description:'Ein eigenes Projekt von Gezim Çela. Der Automotive-Auftritt verbindet eine markante visuelle Identität mit Fahrzeugpräsentation und Kontaktmöglichkeiten.',features:['Eigenes Projekt','Automotive','Webentwicklung'],image:'project-alpha.jpg',url:'https://alpha-autos.de/',note:'Eigenes Projekt von Gezim Çela · keine externe Kundenreferenz'},casa:{title:'Casa — A taste of Italy',description:'Eine warme, editorial geprägte Designrichtung für die Gastronomie. Großzügige Typografie, satte Burgundertöne und eine klare Hierarchie geben Atmosphäre und Angebot Raum.',features:['Gastronomie','Art Direction','Webdesign'],selector:'.restaurant'},forma:{title:'Forma — Less, but better',description:'Eine reduzierte Designrichtung für Lifestyle und E-Commerce. Klare Flächen, ruhige Farben und eine fokussierte Produktkommunikation schaffen einen Auftritt mit eigener Persönlichkeit.',features:['E-Commerce','Brand Experience','UI / UX'],selector:'.tech'}};
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];document.getElementById('dialog-title').textContent=p.title;document.getElementById('dialog-description').textContent=p.description;const preview=document.getElementById('dialog-preview');if(p.image){const image=document.createElement('img');image.src=p.image;image.alt='Website-Vorschau von '+p.title;image.className='dialog-project-image';preview.replaceChildren(image);}else{preview.replaceChildren(document.querySelector(p.selector).cloneNode(true));}document.getElementById('dialog-note').textContent=p.note||'Designstudie, keine Kundenreferenz.';const site=document.getElementById('dialog-site');site.hidden=!p.url;if(p.url)site.href=p.url;else site.removeAttribute('href');document.getElementById('dialog-features').replaceChildren(...p.features.map(t=>{const el=document.createElement('span');el.textContent=t;return el;}));dialog.showModal();document.body.style.overflow='hidden';}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});

const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
const themeSelect=document.getElementById('theme-select');
function applyTheme(mode,persist){
 if(!['auto','light','dark'].includes(mode))mode='auto';
 const theme=mode==='auto'?(systemTheme.matches?'dark':'light'):mode;
 document.documentElement.dataset.theme=theme;
 document.documentElement.dataset.themeMode=mode;
 document.documentElement.style.colorScheme=theme;
 themeSelect.value=mode;
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#080e18':'#f5f8fc';
 if(persist){try{localStorage.setItem('zivag-theme',mode);}catch(e){}}
}
applyTheme(document.documentElement.dataset.themeMode||'auto',false);
themeSelect.addEventListener('change',()=>applyTheme(themeSelect.value,true));
const systemThemeChanged=()=>{if(document.documentElement.dataset.themeMode==='auto')applyTheme('auto',false);};
if(systemTheme.addEventListener)systemTheme.addEventListener('change',systemThemeChanged);else systemTheme.addListener(systemThemeChanged);
window.addEventListener('storage',e=>{if(e.key==='zivag-theme')applyTheme(e.newValue||'auto',false);});
const motionButton=document.getElementById('motion-toggle');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let pausedMotion=false;
try{pausedMotion=localStorage.getItem('zivag-motion')==='paused';}catch(e){}
function applyMotion(){
 const paused=pausedMotion||reducedMotion.matches;
 document.documentElement.classList.toggle('motion-paused',paused);
 motionButton.disabled=reducedMotion.matches;
 motionButton.setAttribute('aria-pressed',String(paused));
 motionButton.textContent=reducedMotion.matches?'Bewegung reduziert':paused?'Animationen starten ▷':'Animationen pausieren Ⅱ';
}
motionButton.addEventListener('click',()=>{pausedMotion=!pausedMotion;try{localStorage.setItem('zivag-motion',pausedMotion?'paused':'active');}catch(e){}applyMotion();});
if(reducedMotion.addEventListener)reducedMotion.addEventListener('change',applyMotion);else reducedMotion.addListener(applyMotion);
applyMotion();
let scrollQueued=false;
const progress=document.querySelector('.reading-progress');
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)+')';scrollQueued=false;}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateProgress);}},{passive:true});
window.addEventListener('resize',()=>{updateProgress();if(window.innerWidth>1000)closeMenu();},{passive:true});
window.addEventListener('load',updateProgress,{once:true});
document.querySelectorAll('.solution').forEach(b=>b.addEventListener('click',()=>{const r=document.querySelector('.solution-result');r.classList.remove('changing');requestAnimationFrame(()=>r.classList.add('changing'));}));
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!menu.contains(e.target))closeMenu();});
