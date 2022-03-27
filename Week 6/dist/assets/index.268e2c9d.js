import{S as x,a as L,P as z,W as C,b as V,c as W,B as R,M as h,d as g,T as U,R as F,e as k,G as B,f as E,g as G,C as j,V as y}from"./vendor.26817fab.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};H();var N=`precision mediump float;\r
\r
uniform float u_time;\r
\r
varying vec2 UV;\r
\r
void main(){\r
	UV = uv;\r
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);\r
	gl_Position = projectionMatrix*mvPosition;\r
}`,O=`precision mediump float;\r
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
}`;let n,c,l,T=new j,i,w,p,f,r,v;function A(){$(),I(),q()}function I(){w=new x,document.body.appendChild(w.dom)}function $(){c=new L,l=new z(75,window.innerWidth/window.innerHeight,.1,1e3),l.position.z=5,n=new C,n.shadowMap.enabled=!0,n.shadowMap.type=V,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);const s=.25;i=new W(16777215),i.position.set(-.5,.5,4),i.castShadow=!0,i.intensity=s,c.add(i);const o=i.clone();o.intensity=1-s,o.castShadow=!1,c.add(o);const d=1024,a=.5,e=500;i.shadow.mapSize.width=d,i.shadow.mapSize.height=d,i.shadow.camera.near=a,i.shadow.camera.far=e;const t=new R,u=new h({color:4548489});p=new g(t,u),p.castShadow=!0,new U().load("/resources/textures/uv_grid_opengl.jpg",function(m){m.wrapS=m.wrapT=F,m.anisotropy=n.capabilities.getMaxAnisotropy(),new k({map:m}),new B().setPath("/resources/models/").load("ice_cream_still_life.gltf",function(b){r=b.scene,r.scale.x=.01,r.scale.y=.01,r.scale.z=.01,r.position.y=-10,r.position.z=-20,c.add(r)})});const P=new E(6,6,1,1),M=new h({color:6710886}),_={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new y(800,800)},u_mouse:{type:"v2",value:new y}};v=new G({uniforms:_,vertexShader:N,fragmentShader:O}),f=new g(P,M),f.position.z=-.02,f.receiveShadow=!0,S()}function q(){window.addEventListener("resize",D,!1),window.addEventListener("keydown",s=>{const{key:o}=s;switch(o){case"e":const d=window.open("","Canvas Image"),{domElement:a}=n;n.render(c,l);const e=a.toDataURL();if(!d)return;d.document.write(`<img src='${e}' width='${a.width}' height='${a.height}'>`);break}})}function D(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function S(){requestAnimationFrame(()=>{S()});let s=T.getDelta();v.uniforms.u_time.value+=s,p.rotation.x+=.001,p.rotation.y+=1e-4,r!=null&&r.rotateY(.005),w&&w.update(),n.render(c,l)}A();
