(this["webpackJsonpthreejs-react-random-rooms"]=this["webpackJsonpthreejs-react-random-rooms"]||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(27),a(4)),s=a(3),l=(a(16),a(6)),m=r.a.createContext();function u(e){var t=e.children,a=Object(n.useState)((function(){return new l.World})),o=Object(s.a)(a,1)[0];return Object(n.useEffect)((function(){o.broadphase=new l.NaiveBroadphase,o.solver.iterations=10,o.gravity.set(0,0,-25)}),[o]),Object(i.c)((function(){return o.step(1/60)})),r.a.createElement(m.Provider,{value:o,children:t})}a(5);var h=function(e){var t=e.position,a=e.size,n=e.opacity;return r.a.createElement("mesh",{position:t,alp:!0,castShadow:!0,receiveShadow:!0},r.a.createElement("boxGeometry",{attach:"geometry",args:[a,a,a]}),r.a.createElement("meshNormalMaterial",{attach:"material",opacity:n,transparent:!0}))},d=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=(t[0],t[1],Object(i.d)().camera);a.fov=45,a.aspect=window.innerWidth/window.innerHeight,a.near=.1,a.far=1e3,a.up.set(0,0,1),a.position.set(6,7,12);for(var o=[],c=0;c<6;c++)for(var l=0;l<6;l++)for(var m=0;m<6;m++){var d=Math.floor(100*Math.random())%3?0:1;o.push(r.a.createElement(h,{key:""+c+l+m,position:[c,l,m],size:.98,opacity:d}))}return r.a.createElement(u,null,o)},f=a(21);Object(i.b)({OrbitControls:f.a});var p=function(){var e=Object(n.useRef)(),t=Object(i.d)(),a=t.camera,o=t.gl;return Object(i.c)((function(){return e.current&&e.current.update()})),r.a.createElement("orbitControls",{ref:e,args:[a,o.domElement],enableRotate:!0,enablePan:!1,maxDistance:100,minDistance:5,minPolarAngle:Math.PI/6,maxPolarAngle:Math.PI/2})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(i.a,{className:"main",shadowMap:!0},r.a.createElement("ambientLight",{intensity:.5}),r.a.createElement(d,null),r.a.createElement(p,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.92c66d2f.chunk.js.map