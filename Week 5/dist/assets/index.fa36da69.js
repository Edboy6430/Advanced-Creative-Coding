var x=Object.defineProperty;var v=(i,e,s)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var n=(i,e,s)=>(v(i,typeof e!="symbol"?e+"":e,s),s);import{C,G as u,P as b,T as A,g as f,a as d,A as I,S}from"./vendor.c67b1568.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};P();class F{constructor(e,s,a,t,o){n(this,"root",new C);n(this,"graphics",new u);n(this,"text");n(this,"fill",65280);n(this,"hoverFill",12541504);n(this,"clickFill",16711680);n(this,"width",200);n(this,"height",100);n(this,"radius",15);n(this,"position");n(this,"isOver",!1);n(this,"isPressed",!1);this.position=new b(e,s),this.width=a,this.height=t,this.graphics.interactive=!0,this.graphics.buttonMode=!0,this.graphics.on("pointerover",()=>{this.isOver=!0}),this.graphics.on("pointerout",()=>{this.isOver=!1}),this.graphics.on("pointerdown",()=>{this.isPressed=!0}),this.graphics.on("pointerup",()=>{this.isPressed=!1}),this.text=new A(o||""),this.text.anchor.set(.5,.5),this.root.addChild(this.graphics),this.root.addChild(this.text)}update(){this.root.position.set(this.position.x,this.position.y),this.graphics.clear(),this.isOver?this.graphics.beginFill(this.hoverFill):this.isPressed?this.graphics.beginFill(this.clickFill):this.graphics.beginFill(this.fill),this.graphics.drawRoundedRect(0,0,this.width,this.height,this.radius),this.text.position.set(this.width/2,this.height/2)}on(e,s){this.graphics.on(e,s)}}let m=f.timeline(),g=f.timeline(),h=[],c=[],y=[];const O=d.from("assets/Dull Blade.png"),W=d.from("assets/Silver Sword.png"),k=d.from("assets/Cool Steel.png"),E=d.from("assets/Sacrificial Sword.png"),B=d.from("assets/Skyward Blade.png"),w=[O,W,k,E,B],H=["0xA2A3A5","0x8CC4A4","0x88A6C2","0x9787B6","0xC5976D"];var r=new F(0,0,500,100,"Roll!");let l=new I({antialias:!0,backgroundColor:16119260});const L=async()=>{document.body.appendChild(l.view),document.body.style.margin="0",l.renderer.view.style.position="absolute",l.renderer.view.style.display="block",l.renderer.resize(window.innerWidth,window.innerHeight),r.position.x=innerWidth*.5/8,r.position.y=innerHeight*7/8,r.root.zIndex=100,r.on("pointerover",()=>{r.isOver=!0}),r.on("pointerout",()=>{r.isOver=!1}),r.on("pointerdown",()=>{r.isPressed=!0}),r.on("pointerup",()=>{r.isPressed=!1}),r.on("pointerdown",()=>{r.isPressed=!1}),l.stage.addChild(r.root),r.on("mousedown",function(i){z(),T()}),l.ticker.add(M)};function T(){for(let i=0;i<5;i++){const e=Math.floor(Math.random()*w.length),s=w[e],a=new S(s);a.x=-innerWidth,a.y=innerHeight/3,a.scale.x=1.5,a.scale.y=1.5,y.push(H[e]),c.push(a);const t=new u;t.x=-innerWidth,t.y=innerHeight/3,t.x+=150,t.y+=150,h.push(t),l.stage.addChild(t),l.stage.addChild(a)}h.forEach((i,e)=>{g.to(i,{x:(h.length-.1-e)*(innerWidth/6),duration:2.2},"-=1.60")}),c.forEach((i,e)=>{m.to(i,{x:(c.length-.5-e)*(innerWidth/6),duration:2},"-=1.50")})}function z(){h.forEach((i,e)=>{g.to(i,{y:0-400,duration:2},"-=1.50"),delete h[e]}),c.forEach((i,e)=>{m.to(i,{y:innerHeight+400,duration:2},"-=1.50"),delete c[e]})}function M(i){r.fill=16747109,r.update(),h.forEach((e,s)=>{e.clear(),e.beginFill(parseInt(y[s])),e.drawCircle(0,0,100),e.endFill()})}L();
