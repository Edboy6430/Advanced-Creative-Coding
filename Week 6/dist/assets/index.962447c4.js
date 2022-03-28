import{S as z,a as T,P as V,W,b as R,c as U,d as j,D as F,T as y,R as v,M as S,G as b,C as I,V as x}from"./vendor.40b58dc4.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function m(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=m(e);fetch(e.href,n)}};k();var A=`precision mediump float;\r
\r
uniform float u_time;\r
\r
varying vec2 UV;\r
\r
void main(){\r
	UV = uv;\r
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);\r
	gl_Position = projectionMatrix*mvPosition;\r
}`,E=`precision mediump float;\r
\r
uniform vec2 u_resolution;\r
uniform float u_time;\r
\r
varying vec2 UV;\r
\r
void main(void){\r
	vec2 position = UV * 2. - 1.;\r
	\r
	float red = abs( \r
		sin(position.x * position.y + u_time / 5.)\r
	);\r
	float green = abs( \r
		sin(position.x * position.y + u_time / 4.) \r
	);\r
	float blue = abs( \r
		sin(position.x * position.y + u_time / 3.) \r
	);\r
\r
	gl_FragColor=vec4(UV.x, UV.y, 0., 1.0);\r
}`;let i,c,w,D=new I,o,g,a,s,l,L;function H(){O(),N(),G()}function N(){g=new z,document.body.appendChild(g.dom)}function O(){c=new T,w=new V(75,window.innerWidth/window.innerHeight,.1,1e3),w.position.z=5,i=new W,i.shadowMap.enabled=!0,i.shadowMap.type=R,i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const p=.25;o=new U(16777215),o.position.set(-.5,.5,4),o.castShadow=!0,o.intensity=p,c.add(o);const r=o.clone();r.intensity=1-p,r.castShadow=!1,c.add(r);const m=1024,d=.5,e=500;o.shadow.mapSize.width=m,o.shadow.mapSize.height=m,o.shadow.camera.near=d,o.shadow.camera.far=e;const n={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new x(800,800)},u_mouse:{type:"v2",value:new x}};L=new j({uniforms:n,vertexShader:A,fragmentShader:E,side:F});let u,M,_;new y().load("../resources/textures/pistachio.jpg",function(t){t.wrapS=t.wrapT=v,t.anisotropy=i.capabilities.getMaxAnisotropy(),u=new S({map:t}),new b().setPath("../resources/models/").load("ice_cream_left.gltf",function(f){a=f.scene,a.traverse(h=>{h.material=u}),a.scale.set(.01,.01,.01),a.position.x=-5,a.position.y=-2.5,a.rotation.y=-50,c.add(a)})}),new y().load("../resources/textures/snowcone.jpg",function(t){t.wrapS=t.wrapT=v,t.anisotropy=i.capabilities.getMaxAnisotropy(),M=new S({map:t}),new b().setPath("../resources/models/").load("ice_cream_middle.gltf",function(f){s=f.scene,s.traverse(h=>{h.material=M}),s.scale.set(.004,.004,.004),s.position.x=0,s.position.y=-2.5,s.rotation.x-=.1,c.add(s)})}),new y().load("../resources/textures/strawberry.jpg",function(t){t.wrapS=t.wrapT=v,t.anisotropy=i.capabilities.getMaxAnisotropy(),_=new S({map:t}),new b().setPath("../resources/models/").load("ice_cream_right.gltf",function(f){l=f.scene,l.traverse(h=>{h.material=_}),l.scale.set(.0045,.0045,.0045),l.position.x=2.5,l.position.y=-2.5,c.add(l)})}),C()}function G(){window.addEventListener("resize",$,!1),window.addEventListener("keydown",p=>{const{key:r}=p;switch(r){case"e":const m=window.open("","Canvas Image"),{domElement:d}=i;i.render(c,w);const e=d.toDataURL();if(!m)return;m.document.write(`<img src='${e}' width='${d.width}' height='${d.height}'>`);break}})}function $(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function C(){requestAnimationFrame(()=>{C()});let p=D.getDelta();L.uniforms.u_time.value+=p,a!=null&&(a.rotation.z+=.001),s!=null&&(s.rotation.x+=.001),l!=null&&(l.rotation.y+=.001),g&&g.update(),i.render(c,w)}H();
