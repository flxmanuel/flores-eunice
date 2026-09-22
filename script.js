'use strict';
// Flores originales en SVG. Cada dibujo tiene identificadores propios para sus degradados.
let drawingId = 0;
function floralSVG(arrangement = 'single') {
  const id = `flower-${drawingId++}`;
  const defs = `<defs><linearGradient id="${id}-petal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff2a0"/><stop offset=".45" stop-color="#f4c945"/><stop offset="1" stop-color="#b97c16"/></linearGradient><linearGradient id="${id}-lily" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#fff4b6"/><stop offset=".5" stop-color="#efca4f"/><stop offset="1" stop-color="#c98b20"/></linearGradient><linearGradient id="${id}-leaf"><stop stop-color="#293e20"/><stop offset=".5" stop-color="#77834a"/><stop offset="1" stop-color="#354321"/></linearGradient><radialGradient id="${id}-center"><stop stop-color="#59431b"/><stop offset=".65" stop-color="#987128"/><stop offset="1" stop-color="#e8b93d"/></radialGradient></defs>`;
  function flower(x,y,size,type,angle,delay){
    const stem = `<g class="stem-group" style="--delay:${delay}s"><path d="M210 425 Q${x+32} 330 ${x} ${y}" fill="none" stroke="#63713c" stroke-width="3"/><path d="M${(210+x)/2} 335 Q${x-75} 287 ${x-55} 265 Q${x+5} 278 ${(210+x)/2} 335" fill="url(#${id}-leaf)"/><path d="M${(210+x)/2+5} 351 Q${x+95} 312 ${x+78} 291 Q${x+34} 300 ${(210+x)/2+5} 351" fill="url(#${id}-leaf)"/></g>`;
    let petals='';
    if(type==='gerbera'){
      for(let ring=0;ring<2;ring++) for(let k=0;k<24;k++) petals+=`<path d="M-3 -9 C-13 -28 -10 -${ring?42:58} 0 -${ring?45:61} C10 -${ring?43:58} 13 -27 3 -9Z" fill="url(#${id}-petal)" stroke="#fce887" stroke-opacity=".25" stroke-width=".55" transform="rotate(${k*15+ring*7.5})"/>`;
      petals+=`<circle r="16" fill="url(#${id}-center)"/>`;
      for(let k=0;k<34;k++){const a=k*2.4,r=4+Math.sqrt(k)*1.7;petals+=`<circle cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" r="1.05" fill="${k%2?'#e9c75b':'#55411c'}"/>`;}
    } else {
      for(let k=0;k<6;k++)petals+=`<path d="M0 7 C-12 -2 -30 -37 -13 -62 Q-6 -76 0 -82 Q3 -56 16 -39 C27 -15 8 3 0 7Z" fill="url(#${id}-lily)" stroke="#ffeaa0" stroke-opacity=".5" stroke-width=".7" transform="rotate(${k*60})"/><path d="M0 0 Q-5 -35 0 -70" fill="none" stroke="#b18a2b" stroke-opacity=".4" transform="rotate(${k*60})"/>`;
      for(let k=0;k<6;k++)petals+=`<path d="M0 3 Q${k*4-10} -8 ${k*7-17} -${20+k%3*5}" stroke="#b49131" stroke-width="1.5" fill="none"/><ellipse cx="${k*7-17}" cy="-${20+k%3*5}" rx="2.2" ry="4" fill="#89602c" transform="rotate(${k*6-18} ${k*7-17} -${20+k%3*5})"/>`;
    }
    return `${arrangement==='bouquet'?'':stem}<g transform="translate(${x} ${y}) rotate(${angle}) scale(${size})"><g class="flower-head" style="--delay:${delay}s">${petals}</g></g>`;
  }
  let content='';
  if(arrangement==='single') content=flower(210,170,1.03,'gerbera',-12,0);
  else {
    content=flower(124,172,.66,'lily',-28,.2)+flower(287,169,.73,'lily',22,.5)+flower(204,128,.72,'gerbera',-9,.8)+flower(83,236,.6,'gerbera',-28,.1)+flower(323,235,.59,'gerbera',26,.4)+flower(163,242,.77,'gerbera',-14,.7)+flower(253,251,.62,'lily',20,1);
    if(arrangement==='bouquet') {
      // Ramo envuelto inspirado en la referencia: papel satinado, volumen floral,
      // pequeñas flores blancas y un lazo largo. Todo es SVG original y ligero.
      const paper = `<defs>
        <linearGradient id="${id}-paper" x1="0" y1="0" x2="1" y2=".7"><stop stop-color="#a57b3f"/><stop offset=".24" stop-color="#ead6a4"/><stop offset=".47" stop-color="#f9edcc"/><stop offset=".7" stop-color="#d4b478"/><stop offset="1" stop-color="#94703d"/></linearGradient>
        <linearGradient id="${id}-fold"><stop stop-color="#f6e8c4"/><stop offset=".45" stop-color="#c6a166"/><stop offset=".65" stop-color="#f2dfac"/><stop offset="1" stop-color="#b0874b"/></linearGradient>
        <linearGradient id="${id}-ribbon"><stop stop-color="#a87f39"/><stop offset=".3" stop-color="#ffedb4"/><stop offset=".6" stop-color="#e1bf70"/><stop offset="1" stop-color="#b08a44"/></linearGradient>
      </defs>
      <path d="M78 25L229 45L216 435L65 221Z" fill="url(#${id}-paper)"/>
      <path d="M205 38L345 21L360 214L222 433Z" fill="url(#${id}-fold)"/>
      <path d="M17 110L87 76L194 419L50 274Z" fill="url(#${id}-paper)"/>
      <path d="M328 97L402 126L373 292L228 425Z" fill="url(#${id}-paper)"/>
      <path d="M74 31L94 228M223 48L219 311M342 29L310 232M22 115L79 279M393 134L341 285" stroke="#fff3d2" stroke-opacity=".45" fill="none"/>`;
      let greenery='';
      for(let i=0;i<13;i++) {
        const x=58+i*25, y=145+(i%4)*39;
        greenery+=`<path d="M210 459Q${x} 300 ${x} ${y}" stroke="#69784a" stroke-width="2" fill="none"/>
          <path d="M${x} ${y+65}Q${x-37} ${y+37} ${x-24} ${y+5}Q${x+5} ${y+21} ${x} ${y+65}" fill="url(#${id}-leaf)"/>`;
      }
      const flowers = [
        [107,128,.52,'lily',-32],[289,119,.55,'lily',22],
        [180,115,.47,'gerbera',-15],[242,149,.7,'gerbera',8],
        [111,184,.61,'gerbera',-20],[324,190,.47,'gerbera',18],
        [172,204,.59,'gerbera',14],[282,236,.59,'lily',-17],
        [72,249,.5,'gerbera',-25],[227,239,.53,'gerbera',0],
        [134,270,.62,'lily',-18],[186,285,.66,'gerbera',-8],
        [313,290,.45,'gerbera',16],[253,317,.57,'gerbera',13],
        [154,347,.48,'gerbera',-10],[207,361,.56,'gerbera',10]
      ];
      let blooms=flowers.map(([x,y,scale,type,angle])=>flower(x,y,scale,type,angle,0)).join('');
      let fillers='';
      for(const [cx,cy] of [[63,197],[338,239],[87,317],[284,168],[229,92],[304,345],[126,365],[212,311]]) {
        fillers+=`<path d="M210 412Q${cx+15} ${cy+45} ${cx} ${cy}" stroke="#788366" stroke-width="1" fill="none"/>`;
        for(let j=0;j<7;j++) {
          const x=cx+Math.cos(j*2.4)*Math.sqrt(j+1)*8, y=cy+Math.sin(j*2.4)*Math.sqrt(j+1)*10;
          fillers+=`<path d="M${cx} ${cy+27}L${x} ${y}" stroke="#8b9475" stroke-width=".7"/>`;
          for(let k=0;k<5;k++)fillers+=`<circle cx="${x+Math.cos(k*1.257)*2.2}" cy="${y+Math.sin(k*1.257)*2.2}" r="2.2" fill="${j%2?'#fff5d8':'#e8e5cc'}"/>`;
          fillers+=`<circle cx="${x}" cy="${y}" r="1.4" fill="#cbb66b"/>`;
        }
      }
      const front=`<path d="M26 283Q100 351 207 410L174 472L91 430Z" fill="url(#${id}-paper)"/>
        <path d="M393 294Q315 337 211 410L248 477L335 424Z" fill="url(#${id}-fold)"/>
        <path d="M43 305Q120 378 203 420M377 313Q300 380 219 420" stroke="#fff1cc" stroke-opacity=".6" fill="none"/>
        <path d="M198 418L171 498L216 486L232 502L225 423Z" fill="url(#${id}-paper)"/>
        <path d="M212 420C161 365 129 410 198 427C248 366 294 415 221 431" fill="none" stroke="#82622e" stroke-width="18"/>
        <path d="M212 418C161 363 131 408 199 425C248 364 292 413 221 429" fill="none" stroke="url(#${id}-ribbon)" stroke-width="14"/>
        <path d="M207 428Q165 463 177 503L189 491L201 506Q184 464 218 433M219 429Q241 456 240 485L253 478L262 487Q255 450 223 425" fill="url(#${id}-ribbon)"/>
        <ellipse cx="212" cy="424" rx="13" ry="11" fill="url(#${id}-ribbon)"/>`;
      content=paper+greenery+blooms+fillers+front;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${arrangement==='single'?'85 90 250 365':arrangement==='bouquet'?'0 0 420 520':'0 35 420 420'}" aria-hidden="true">${defs}${content}</svg>`;
}
document.querySelectorAll('[data-arrangement]').forEach(el=>{el.innerHTML=floralSVG(el.dataset.arrangement);});
const stars=document.querySelector('#stars');
for(let i=0;i<(innerWidth<700?25:42);i++){
  const star=document.createElement('i');star.className='star';star.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--duration:${3+Math.random()*5}s;--delay:-${Math.random()*8}s`;stars.append(star);
}

const $=selector=>document.querySelector(selector);
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const audio=$('#music');
const controls=$('#music-controls');
const particleLayer=$('#particles');
let started=false,particleTimer=null,petalsActive=false,resumeAfterVisibility=false;
let revealObserver;
if('IntersectionObserver' in window){
  document.body.classList.add('motion-ready');
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}
function scrollToElement(el){el.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});}
function updateAudioUI(){
  const playing=!audio.paused&&!audio.ended;
  controls.classList.toggle('playing',playing&&!audio.muted);
  $('#music-icon').textContent=playing?'Ⅱ':'▶';
  $('#music-toggle').setAttribute('aria-label',playing?'Pausar música':'Reanudar música');
  $('#music-toggle').title=playing?'Pausar música':'Reanudar música';
  $('#mute-toggle').textContent=audio.muted?'♩':'♪';
  $('#mute-toggle').setAttribute('aria-label',audio.muted?'Activar sonido':'Silenciar música');
  $('#mute-toggle').title=audio.muted?'Activar sonido':'Silenciar música';
  $('#mute-toggle').setAttribute('aria-pressed',String(audio.muted));
}
function playMusic(){
  // play() se invoca directamente desde el toque: necesario en Safari y Chrome móvil.
  const attempt=audio.play();
  if(attempt)attempt.catch(()=>{
    // Si el navegador bloquea el inicio, permite reintentar con otro toque.
    controls.hidden=Boolean(audio.error);
    updateAudioUI();
  });
}
audio.addEventListener('playing',()=>{controls.hidden=false;updateAudioUI();});
audio.addEventListener('pause',updateAudioUI);
audio.addEventListener('volumechange',updateAudioUI);
audio.addEventListener('error',()=>{controls.hidden=true;});
$('#music-toggle').addEventListener('click',()=>{if(audio.paused)playMusic();else audio.pause();});
$('#mute-toggle').addEventListener('click',()=>{audio.muted=!audio.muted;updateAudioUI();});
$('#volume').addEventListener('input',event=>{audio.volume=Number(event.target.value);audio.muted=audio.volume===0;updateAudioUI();});
// iOS gestiona el volumen multimedia desde los botones físicos del dispositivo.
if(/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))$('.volume-control').hidden=true;
// Una sola escena visible; el fondo y la música permanecen continuos.
const sceneIds=['welcome','garden','message','bouquet','letter-section','final'];
let currentScene='welcome', transitioning=false;
sceneIds.slice(1).forEach(id=>$('#'+id).hidden=true);
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function showScene(next){
  if(transitioning||next===currentScene||!sceneIds.includes(next))return false;
  transitioning=true;
  const outgoing=$('#'+currentScene), incoming=$('#'+next);
  outgoing.inert=true;
  outgoing.classList.add('scene-exit');
  await delay(reducedMotion.matches?0:240);
  outgoing.hidden=true;
  outgoing.classList.remove('scene-exit','scene-enter');
  outgoing.inert=false;
  $('#journey').hidden=next==='welcome';
  incoming.hidden=false;
  incoming.classList.add('scene-enter');
  currentScene=next;
  $('#scene-back').hidden=next==='welcome';
  window.scrollTo({top:0,behavior:'instant'});
  const focusTarget=incoming.querySelector('h1,h2,h3')||incoming;
  focusTarget.setAttribute('tabindex','-1');
  focusTarget.focus({preventScroll:true});
  await delay(reducedMotion.matches?0:420);
  incoming.classList.remove('scene-enter');
  transitioning=false;
  return true;
}
document.querySelectorAll('[data-next]').forEach(button=>{
  button.addEventListener('click',()=>showScene(button.dataset.next));
});
$('#scene-back').addEventListener('click',()=>{
  const previous=sceneIds[sceneIds.indexOf(currentScene)-1];
  if(previous)showScene(previous);
});
$('#start').addEventListener('click',()=>{
  if(transitioning)return;
  if(!started){
    started=true;audio.src='assets/audio/die-for-you.mp3';audio.volume=.55;
    playMusic();
  }
  showScene('garden');
});

function spawnParticle(celebration=false){
  if(reducedMotion.matches||document.hidden)return;
  const cap=innerWidth<700?11:19;
  if(particleLayer.childElementCount>=cap+(celebration?8:0))return;
  const p=document.createElement('div');p.className='particle';
  // Los pétalos se concentran en los lados para dejar libre el mensaje.
  const x=celebration?Math.random()*96:(Math.random()<.5?Math.random()*17:81+Math.random()*15);
  const choice=Math.random();
  p.style.cssText=`--x:${x}%;--size:${choice<.5?12+Math.random()*8:22+Math.random()*10}px;--fall:${celebration?4+Math.random()*3:10+Math.random()*7}s`;
  if(celebration&&choice<.5)p.innerHTML='<span>♡</span>';
  else if(choice<.55)p.innerHTML='<svg viewBox="0 0 24 32"><path d="M3 30C-5 8 9 0 20 1C25 14 18 25 3 30" fill="#e2bd56"/></svg>';
  else if(choice<.83){
    let petals='';for(let i=0;i<10;i++)petals+=`<ellipse cx="16" cy="7" rx="3" ry="7" fill="#eccb60" transform="rotate(${i*36} 16 16)"/>`;
    p.innerHTML=`<svg viewBox="0 0 32 32">${petals}<circle cx="16" cy="16" r="5" fill="#9b7028"/></svg>`;
  }else{
    let petals='';for(let i=0;i<6;i++)petals+=`<path d="M16 16Q4 7 16 0Q23 9 16 16" fill="#ebce71" transform="rotate(${i*60} 16 16)"/>`;
    p.innerHTML=`<svg viewBox="0 0 32 32">${petals}</svg>`;
  }
  p.addEventListener('animationend',event=>{if(event.target===p)p.remove();});particleLayer.append(p);
}
function syncParticles(){
  clearInterval(particleTimer);particleTimer=null;
  if(petalsActive&&!document.hidden&&!reducedMotion.matches)particleTimer=setInterval(()=>spawnParticle(),1700);
  if(reducedMotion.matches)particleLayer.replaceChildren();
}
if('IntersectionObserver' in window){
  const activeScenes=new Set();
  const sceneObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){if(entry.isIntersecting)activeScenes.add(entry.target);else activeScenes.delete(entry.target);}
    petalsActive=activeScenes.size>0;syncParticles();
  },{threshold:.08});
  ['#message','#bouquet','#letter-section','#final'].forEach(selector=>sceneObserver.observe($(selector)));
}
reducedMotion.addEventListener('change',syncParticles);
document.addEventListener('visibilitychange',()=>{
  document.body.classList.toggle('paused-motion',document.hidden);syncParticles();
  if(document.hidden){resumeAfterVisibility=!audio.paused;audio.pause();}
  else if(resumeAfterVisibility){resumeAfterVisibility=false;playMusic();}
});
$('#open-letter').addEventListener('click',()=>{
  const button=$('#open-letter');if(button.disabled)return;
  button.disabled=true;button.setAttribute('aria-expanded','true');$('#envelope').classList.add('open');
  setTimeout(()=>{
    $('#letter').hidden=false;$('#surprise-button').hidden=false;
    $('#letter-section').classList.add('opened');button.hidden=true;
    if(currentScene==='letter-section'){
      $('#letter-heading').focus({preventScroll:true});scrollToElement($('#letter'));
    }
  },reducedMotion.matches?0:1050);
});
$('#surprise-button').addEventListener('click',async()=>{
  if(transitioning)return;
  const button=$('#surprise-button');
  button.setAttribute('aria-expanded','true');
  $('#surprise').hidden=false;
  await showScene('final');
  for(let i=0;i<16;i++)setTimeout(()=>spawnParticle(true),i*110);
});
