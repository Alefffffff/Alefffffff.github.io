// Decorative fish. Positions use document Y; only their bodies, not their
// swimming lanes, undulate. Native CSS stacking puts real content above fish.
(() => {
 const canvas=document.getElementById('fish');
 const ctx=canvas.getContext('2d');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fish=new Map();
 const spacing=310;
 let width=0,height=0,frame=0,last=0,time=0,visible=[];
 const random=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
 function getFish(index){
  if(!fish.has(index)){
   const size=48+random(index+7)*94;
   fish.set(index,{index,y:175+index*spacing+random(index+1)*65,size,
    x:random(index+2)*(width+size*2)-size,dir:random(index+3)>.5?1:-1,
    speed:13+random(index+4)*12,phase:random(index+5)*Math.PI*2,
    color:random(index+6)>.5?'#ce8951':'#ceab69',boost:0});
  }
  return fish.get(index);
 }
 function drawFish(f,y){
  ctx.save();ctx.translate(f.x,y);ctx.scale(f.dir*f.size/100,f.size/100);
  const phase=time*(f.boost>0?10:3.1)+f.phase;
  // The broad tail bends more than the head, like a travelling body wave.
  const bend=x=>Math.sin(phase-x*.075)*Math.pow((50-x)/100,1.5)*3.8;
  const move=(x,y)=>ctx.moveTo(x,y+bend(x));
  const line=(x,y)=>ctx.lineTo(x,y+bend(x));
  const curve=(a,b,c,d,e,f)=>ctx.bezierCurveTo(a,b+bend(a),c,d+bend(c),e,f+bend(e));
  ctx.beginPath();move(-49,-13);line(-35,-9);
  curve(-5,-16,24,-13,49,-6);line(48,0);
  curve(29,10,19,13,12,12);curve(-8,12,-24,6,-34,0);
  line(-50,14);ctx.closePath();
  ctx.moveTo(37,-3+bend(34));ctx.ellipse(34,-3+bend(34),3,2.6,0,0,Math.PI*2);
  ctx.globalAlpha=.65;ctx.fillStyle=f.color;ctx.fill('evenodd');ctx.restore();
 }
 function paint(dt=0){
  ctx.clearRect(0,0,width,height);visible=[];
  const scroll=Math.max(0,window.scrollY);
  const first=Math.max(0,Math.floor((scroll-250)/spacing));
  const end=Math.ceil((scroll+height)/spacing);
  for(let i=first;i<=end;i++){
   const f=getFish(i);
   f.x+=f.dir*f.speed*dt*(1+f.boost*6);
   f.boost=Math.max(0,f.boost-dt*.55);
   if(f.x>width+f.size)f.x=-f.size;
   if(f.x< -f.size)f.x=width+f.size;
   const y=f.y-scroll;
   if(y> -f.size&&y<height+f.size&&visible.length<5){drawFish(f,y);visible.push({f,y});}
  }
 }
 function tick(now){
  const dt=last?Math.min((now-last)/1000,.05):0;last=now;time+=dt;
  paint(dt);frame=requestAnimationFrame(tick);
 }
 function start(){cancelAnimationFrame(frame);last=0;paint();if(!reduced.matches&&!document.hidden)frame=requestAnimationFrame(tick);}
 function resize(){
  width=document.documentElement.clientWidth;height=innerHeight;
  const ratio=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
  ctx.setTransform(ratio,0,0,ratio,0,0);start();
 }
 addEventListener('scroll',()=>{if(reduced.matches)paint();},{passive:true});
 addEventListener('resize',resize);
 document.addEventListener('portfolio:render',()=>{fish.clear();start();});
 document.addEventListener('visibilitychange',start);
 document.addEventListener('pointerdown',event=>{
  if(event.button!==0||event.target.closest('a,button,summary,input,iframe,.media,.intro-card,.site-header'))return;
  const x=event.clientX,y=event.clientY;
  for(const item of visible){
   const f=item.f;
   if(Math.abs(x-f.x)<f.size*.53&&Math.abs(y-item.y)<Math.max(15,f.size*.19)){
    f.boost=1;
    if(reduced.matches){f.x+=f.dir*180;paint();}
    break;
   }
  }
 });
 reduced.addEventListener('change',start);resize();
})();
