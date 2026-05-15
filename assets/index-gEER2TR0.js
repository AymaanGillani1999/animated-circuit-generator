(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const g=[{id:"vertical-trace",name:"Vertical Trace",viewBox:"0 0 126 577",width:150,markup:`<g transform="translate(31, 380) scale(-1, 1) translate(-31, -380) translate(0, 194)">
  <path d="M-2.3,370.2c-1.6,0.6-2.7,2-2.7,3.8c0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.8-1.1-3.2-2.7-3.8v-49.6l13.5-13.5v-94.3l13.5-13.5V13.8c1.6-0.6,2.7-2,2.7-3.8c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.8,1.1,3.2,2.7,3.8v184.3l-13.5,13.5V306l-13.5,13.5V370.2z"/>
  <path d="M30.2,226c0-2.2-1.8-4-4.1-4s-4.1,1.8-4.1,4c0,1.8,1.2,3.2,2.8,3.8v77.4l13.8,13.4v22.5c-1.6,0.6-2.8,2-2.8,3.8c0,2.2,1.8,4,4.1,4s4.1-1.8,4.1-4c0-1.8-1.2-3.2-2.8-3.8v-23.6l-13.8-13.4v-76.3C29.1,229.3,30.2,227.8,30.2,226"/>
</g>`},{id:"horizontal-bus",name:"Horizontal Bus",viewBox:"0 0 139 96.5",width:220,markup:`<g transform="translate(87, 30.5) scale(-1, 1) rotate(-180) translate(-87, -30.5) translate(41, 15)">
  <path d="M91.9,28.5c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6c-0.6,0-1.1,0.1-1.6,0.4l-10.1-9.9H43.8l-9.4-9.2c0.2-0.5,0.4-1,0.4-1.5c0-2-1.6-3.6-3.6-3.6s-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6c0.6,0,1.1-0.1,1.6-0.4l10.1,9.9h36.4l9.4,9.2c-0.2,0.5-0.4,1-0.4,1.5C88.2,26.9,89.8,28.5,91.9,28.5"/>
  <path d="M64.4,26.1c0.5,1.4,1.8,2.4,3.4,2.4c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6c-1.6,0-2.9,1-3.4,2.4H31.9L10.4,2.6c0.2-0.5,0.4-1,0.4-1.5c0-2-1.6-3.6-3.6-3.6S3.6-0.9,3.6,1.1s1.6,3.6,3.6,3.6c0.6,0,1.1-0.1,1.6-0.4L31,26.1L64.4,26.1L64.4,26.1z"/>
</g>`},{id:"branch",name:"Branch",viewBox:"0 0 180 220",width:190,markup:`<path d="M90 10v38l-24 24v34l-28 28v54"/>
<path d="M90 48h44l22 22v58"/>
<path d="M66 106h46l18 18v54"/>
<path d="M38 134H14"/>
<path d="M156 128h16"/>
<circle class="node" cx="90" cy="10" r="5"/>
<circle class="node" cx="38" cy="188" r="5"/>
<circle class="node" cx="156" cy="128" r="5"/>
<circle class="node" cx="130" cy="178" r="5"/>
<circle class="node" cx="14" cy="134" r="4"/>
<circle class="node" cx="172" cy="128" r="4"/>`},{id:"grid",name:"Grid",viewBox:"0 0 240 160",width:260,markup:`<path d="M20 24h54l18 18h54l18-18h56"/>
<path d="M20 80h38l22-22h46l22 22h72"/>
<path d="M20 136h60l18-18h42l18 18h62"/>
<path d="M74 24v34"/>
<path d="M146 42v76"/>
<path d="M98 118v18"/>
<path d="M180 24v112"/>
<circle class="node" cx="20" cy="24" r="4"/>
<circle class="node" cx="220" cy="24" r="4"/>
<circle class="node" cx="20" cy="80" r="4"/>
<circle class="node" cx="220" cy="80" r="4"/>
<circle class="node" cx="20" cy="136" r="4"/>
<circle class="node" cx="220" cy="136" r="4"/>
<circle class="node" cx="146" cy="80" r="5"/>
<circle class="node" cx="180" cy="80" r="5"/>`},{id:"chip",name:"Chip",viewBox:"0 0 220 220",width:250,markup:`<rect x="70" y="70" width="80" height="80" rx="10"/>
<path d="M70 90H34l-18-18"/>
<path d="M70 110H24"/>
<path d="M70 130H34l-18 18"/>
<path d="M150 90h36l18-18"/>
<path d="M150 110h46"/>
<path d="M150 130h36l18 18"/>
<path d="M90 70V34L72 16"/>
<path d="M110 70V22"/>
<path d="M130 70V34l18-18"/>
<path d="M90 150v36l-18 18"/>
<path d="M110 150v48"/>
<path d="M130 150v36l18 18"/>
<circle class="node" cx="16" cy="72" r="4"/>
<circle class="node" cx="24" cy="110" r="4"/>
<circle class="node" cx="16" cy="148" r="4"/>
<circle class="node" cx="204" cy="72" r="4"/>
<circle class="node" cx="196" cy="110" r="4"/>
<circle class="node" cx="204" cy="148" r="4"/>
<circle class="node" cx="72" cy="16" r="4"/>
<circle class="node" cx="110" cy="22" r="4"/>
<circle class="node" cx="148" cy="16" r="4"/>
<circle class="node" cx="72" cy="204" r="4"/>
<circle class="node" cx="110" cy="198" r="4"/>
<circle class="node" cx="148" cy="204" r="4"/>`},{id:"radial",name:"Radial",viewBox:"0 0 220 220",width:250,markup:`<circle class="node" cx="110" cy="110" r="18"/>
<path d="M110 92V28"/>
<path d="M110 128v64"/>
<path d="M92 110H28"/>
<path d="M128 110h64"/>
<path d="M98 98L52 52"/>
<path d="M122 98l46-46"/>
<path d="M98 122l-46 46"/>
<path d="M122 122l46 46"/>
<path d="M110 28l18-18h36"/>
<path d="M192 110l16-16"/>
<path d="M110 192l-18 18H56"/>
<circle class="node" cx="164" cy="10" r="4"/>
<circle class="node" cx="52" cy="52" r="4"/>
<circle class="node" cx="168" cy="52" r="4"/>
<circle class="node" cx="28" cy="110" r="4"/>
<circle class="node" cx="208" cy="94" r="4"/>
<circle class="node" cx="52" cy="168" r="4"/>
<circle class="node" cx="168" cy="168" r="4"/>
<circle class="node" cx="56" cy="210" r="4"/>`},{id:"zigzag",name:"Zigzag",viewBox:"0 0 180 260",width:190,markup:`<path d="M28 18h54l22 22v32L78 98v38l32 32v54"/>
<path d="M104 72h34l20 20v54l-24 24v46"/>
<path d="M78 136H36l-18 18v64"/>
<path d="M110 168h28"/>
<path d="M82 18V6"/>
<circle class="node" cx="28" cy="18" r="4"/>
<circle class="node" cx="82" cy="6" r="4"/>
<circle class="node" cx="158" cy="92" r="4"/>
<circle class="node" cx="18" cy="218" r="4"/>
<circle class="node" cx="110" cy="222" r="5"/>
<circle class="node" cx="134" cy="216" r="5"/>
<circle class="node" cx="138" cy="168" r="4"/>`},{id:"stack",name:"Stack",viewBox:"0 0 200 260",width:210,markup:`<path d="M56 22v36l20 20v36l-20 20v44l24 24v36"/>
<path d="M112 22v54l28 28v40l-28 28v66"/>
<path d="M56 58h56"/>
<path d="M76 114h64"/>
<path d="M56 178h56"/>
<path d="M80 202h78l20 20"/>
<path d="M140 104h38"/>
<circle class="node" cx="56" cy="22" r="4"/>
<circle class="node" cx="112" cy="22" r="4"/>
<circle class="node" cx="178" cy="104" r="4"/>
<circle class="node" cx="80" cy="238" r="5"/>
<circle class="node" cx="112" cy="238" r="5"/>
<circle class="node" cx="178" cy="222" r="4"/>`}],m=[{id:"motherboard",name:"Motherboard",viewBox:"0 0 280 220",width:300,markup:`<rect x="96" y="62" width="88" height="88" rx="12"/>
<rect x="120" y="86" width="40" height="40" rx="6"/>
<path d="M96 78H42L22 58"/>
<path d="M96 106H22"/>
<path d="M96 134H46l-24 24"/>
<path d="M184 78h54l20-20"/>
<path d="M184 106h74"/>
<path d="M184 134h50l24 24"/>
<path d="M116 62V24"/>
<path d="M140 62V18"/>
<path d="M164 62V24"/>
<path d="M116 150v42"/>
<path d="M140 150v52"/>
<path d="M164 150v42"/>
<circle class="node" cx="22" cy="58" r="4"/>
<circle class="node" cx="22" cy="106" r="4"/>
<circle class="node" cx="22" cy="158" r="4"/>
<circle class="node" cx="258" cy="58" r="4"/>
<circle class="node" cx="258" cy="106" r="4"/>
<circle class="node" cx="258" cy="158" r="4"/>
<circle class="node" cx="116" cy="24" r="4"/>
<circle class="node" cx="140" cy="18" r="4"/>
<circle class="node" cx="164" cy="24" r="4"/>
<circle class="node" cx="116" cy="192" r="4"/>
<circle class="node" cx="140" cy="202" r="4"/>
<circle class="node" cx="164" cy="192" r="4"/>`},{id:"data-lanes",name:"Data Lanes",viewBox:"0 0 300 140",width:320,markup:`<path d="M18 24h66l18 18h86l18-18h76"/>
<path d="M18 52h92l20 20h152"/>
<path d="M18 80h76l24-24h48l24 24h92"/>
<path d="M18 108h116l18-18h130"/>
<path d="M84 24v84"/>
<path d="M188 24v84"/>
<circle class="node" cx="18" cy="24" r="4"/>
<circle class="node" cx="282" cy="24" r="4"/>
<circle class="node" cx="18" cy="52" r="4"/>
<circle class="node" cx="282" cy="52" r="4"/>
<circle class="node" cx="18" cy="80" r="4"/>
<circle class="node" cx="282" cy="80" r="4"/>
<circle class="node" cx="18" cy="108" r="4"/>
<circle class="node" cx="282" cy="108" r="4"/>
<circle class="node" cx="150" cy="72" r="5"/>`},{id:"edge-frame",name:"Edge Frame",viewBox:"0 0 280 220",width:300,markup:`<path d="M32 34h72l20 20h32l20-20h72"/>
<path d="M248 34v56l-22 22v74"/>
<path d="M32 34v56l22 22v74"/>
<path d="M54 112h58l18-18h20l18 18h58"/>
<path d="M32 186h72l20-20h32l20 20h72"/>
<path d="M140 54v112"/>
<circle class="node" cx="32" cy="34" r="4"/>
<circle class="node" cx="248" cy="34" r="4"/>
<circle class="node" cx="32" cy="186" r="4"/>
<circle class="node" cx="248" cy="186" r="4"/>
<circle class="node" cx="140" cy="54" r="5"/>
<circle class="node" cx="140" cy="166" r="5"/>
<circle class="node" cx="54" cy="112" r="4"/>
<circle class="node" cx="226" cy="112" r="4"/>`},{id:"connector",name:"Connector",viewBox:"0 0 300 190",width:320,markup:`<rect x="36" y="58" width="72" height="74" rx="10"/>
<rect x="192" y="58" width="72" height="74" rx="10"/>
<path d="M108 76h84"/>
<path d="M108 95h84"/>
<path d="M108 114h84"/>
<path d="M72 58V28h54"/>
<path d="M72 132v30h54"/>
<path d="M228 58V28h-54"/>
<path d="M228 132v30h-54"/>
<circle class="node" cx="36" cy="76" r="4"/>
<circle class="node" cx="36" cy="95" r="4"/>
<circle class="node" cx="36" cy="114" r="4"/>
<circle class="node" cx="264" cy="76" r="4"/>
<circle class="node" cx="264" cy="95" r="4"/>
<circle class="node" cx="264" cy="114" r="4"/>
<circle class="node" cx="126" cy="28" r="4"/>
<circle class="node" cx="126" cy="162" r="4"/>
<circle class="node" cx="174" cy="28" r="4"/>
<circle class="node" cx="174" cy="162" r="4"/>`},{id:"maze",name:"Maze",viewBox:"0 0 260 220",width:280,markup:`<path d="M24 34h74v38H62v38h84V72h54V34h36"/>
<path d="M24 184h54v-38h50v-36h84v36h24"/>
<path d="M98 34v-18"/>
<path d="M200 34V16"/>
<path d="M78 184v18"/>
<path d="M212 146v56"/>
<path d="M146 110v74"/>
<circle class="node" cx="24" cy="34" r="4"/>
<circle class="node" cx="236" cy="34" r="4"/>
<circle class="node" cx="24" cy="184" r="4"/>
<circle class="node" cx="236" cy="146" r="4"/>
<circle class="node" cx="98" cy="16" r="4"/>
<circle class="node" cx="200" cy="16" r="4"/>
<circle class="node" cx="78" cy="202" r="4"/>
<circle class="node" cx="212" cy="202" r="4"/>
<circle class="node" cx="146" cy="184" r="5"/>`}],v=[{id:"hex-core",name:"Hex Core",viewBox:"0 0 260 240",width:280,markup:`<path d="M130 34l76 44v88l-76 44-76-44V78z"/>
<path d="M130 34v70"/>
<path d="M54 78l76 44 76-44"/>
<path d="M54 166l76-44 76 44"/>
<path d="M130 122v88"/>
<path d="M130 122H24"/>
<path d="M130 122h106"/>
<circle class="node" cx="130" cy="34" r="5"/>
<circle class="node" cx="54" cy="78" r="5"/>
<circle class="node" cx="206" cy="78" r="5"/>
<circle class="node" cx="54" cy="166" r="5"/>
<circle class="node" cx="206" cy="166" r="5"/>
<circle class="node" cx="130" cy="210" r="5"/>
<circle class="node" cx="130" cy="122" r="8"/>
<circle class="node" cx="24" cy="122" r="4"/>
<circle class="node" cx="236" cy="122" r="4"/>`},{id:"neural-mesh",name:"Neural Mesh",viewBox:"0 0 280 210",width:300,markup:`<path d="M44 44L112 86l72-48 52 42"/>
<path d="M44 44l48 104 92-20 52 38"/>
<path d="M112 86l-20 62"/>
<path d="M112 86l72 42"/>
<path d="M184 38v90"/>
<path d="M236 80l-52 48"/>
<path d="M92 148l-48 18"/>
<path d="M92 148l76 32"/>
<path d="M184 128l-16 52"/>
<circle class="node" cx="44" cy="44" r="6"/>
<circle class="node" cx="112" cy="86" r="7"/>
<circle class="node" cx="184" cy="38" r="5"/>
<circle class="node" cx="236" cy="80" r="6"/>
<circle class="node" cx="92" cy="148" r="7"/>
<circle class="node" cx="184" cy="128" r="7"/>
<circle class="node" cx="44" cy="166" r="5"/>
<circle class="node" cx="168" cy="180" r="5"/>
<circle class="node" cx="236" cy="166" r="5"/>`},{id:"orbit-bus",name:"Orbit Bus",viewBox:"0 0 260 260",width:280,markup:`<circle class="node" cx="130" cy="130" r="20"/>
<path d="M130 48a82 82 0 1 1 0 164a82 82 0 1 1 0-164"/>
<path d="M72 72l116 116"/>
<path d="M188 72L72 188"/>
<path d="M130 28v20"/>
<path d="M130 212v20"/>
<path d="M28 130h20"/>
<path d="M212 130h20"/>
<path d="M130 110V62"/>
<path d="M150 130h48"/>
<path d="M130 150v48"/>
<path d="M110 130H62"/>
<circle class="node" cx="130" cy="28" r="4"/>
<circle class="node" cx="232" cy="130" r="4"/>
<circle class="node" cx="130" cy="232" r="4"/>
<circle class="node" cx="28" cy="130" r="4"/>
<circle class="node" cx="72" cy="72" r="4"/>
<circle class="node" cx="188" cy="72" r="4"/>
<circle class="node" cx="188" cy="188" r="4"/>
<circle class="node" cx="72" cy="188" r="4"/>`},{id:"terminal-tree",name:"Terminal Tree",viewBox:"0 0 260 280",width:270,markup:`<path d="M130 24v46"/>
<path d="M130 70L74 126v54"/>
<path d="M130 70l56 56v54"/>
<path d="M74 126H36v74"/>
<path d="M74 126h38v92"/>
<path d="M186 126h38v74"/>
<path d="M186 126h-38v92"/>
<path d="M112 218H72"/>
<path d="M148 218h40"/>
<circle class="node" cx="130" cy="24" r="5"/>
<circle class="node" cx="130" cy="70" r="7"/>
<circle class="node" cx="74" cy="126" r="6"/>
<circle class="node" cx="186" cy="126" r="6"/>
<circle class="node" cx="36" cy="200" r="4"/>
<circle class="node" cx="112" cy="218" r="5"/>
<circle class="node" cx="148" cy="218" r="5"/>
<circle class="node" cx="224" cy="200" r="4"/>
<circle class="node" cx="72" cy="218" r="4"/>
<circle class="node" cx="188" cy="218" r="4"/>`}],M=[{id:"antenna-array",name:"Antenna Array",viewBox:"0 0 240 240",width:260,markup:`<path d="M120 202V118"/>
<path d="M120 118L54 52"/>
<path d="M120 118l66-66"/>
<path d="M120 118H32"/>
<path d="M120 118h88"/>
<path d="M78 76c-18 22-18 62 0 84"/>
<path d="M162 76c18 22 18 62 0 84"/>
<path d="M54 52c-34 44-34 92 0 136"/>
<path d="M186 52c34 44 34 92 0 136"/>
<circle class="node" cx="120" cy="118" r="9"/>
<circle class="node" cx="54" cy="52" r="4"/>
<circle class="node" cx="186" cy="52" r="4"/>
<circle class="node" cx="32" cy="118" r="4"/>
<circle class="node" cx="208" cy="118" r="4"/>
<circle class="node" cx="120" cy="202" r="5"/>`},{id:"waveform",name:"Waveform",viewBox:"0 0 300 160",width:320,markup:`<polyline points="16,82 44,82 58,42 84,122 110,42 136,122 162,42 188,122 214,82 284,82"/>
<path d="M44 82V32h50"/>
<path d="M214 82v46h54"/>
<path d="M136 122v24"/>
<path d="M188 122v24"/>
<circle class="node" cx="16" cy="82" r="4"/>
<circle class="node" cx="284" cy="82" r="4"/>
<circle class="node" cx="94" cy="32" r="4"/>
<circle class="node" cx="268" cy="128" r="4"/>
<circle class="node" cx="136" cy="146" r="4"/>
<circle class="node" cx="188" cy="146" r="4"/>`},{id:"serpentine",name:"Serpentine",viewBox:"0 0 220 300",width:230,markup:`<path d="M46 24h92c28 0 42 14 42 38s-14 38-42 38H82c-28 0-42 14-42 38s14 38 42 38h58c28 0 42 14 42 38s-14 38-42 38H52"/>
<path d="M82 100v28"/>
<path d="M140 176v28"/>
<path d="M110 24V8"/>
<path d="M110 252v32"/>
<circle class="node" cx="46" cy="24" r="4"/>
<circle class="node" cx="180" cy="62" r="5"/>
<circle class="node" cx="40" cy="138" r="5"/>
<circle class="node" cx="182" cy="214" r="5"/>
<circle class="node" cx="52" cy="252" r="4"/>
<circle class="node" cx="110" cy="8" r="4"/>
<circle class="node" cx="110" cy="284" r="4"/>`}],h=[{id:"core",label:"Core traces",description:"General-purpose traces, branches, grids, chips, and stacks.",circuits:g},{id:"boards",label:"Boards and connectors",description:"Dense boards, lanes, frames, connectors, and maze-like routing.",circuits:m},{id:"networks",label:"Networks",description:"Mesh, orbit, hex, and tree structures for distributed systems visuals.",circuits:v},{id:"signals",label:"Signals",description:"Waveforms, antennas, and flowing signal-oriented shapes.",circuits:M}],u=h.flatMap(t=>t.circuits),c={source:"preset",circuitId:u[0].id,animationMode:"flow",animationDirection:"normal",speed:5,dash:150,stroke:2,glow:8,stagger:.16,scale:100,circuitColor:"#3f7cff",opacity:1,lineCap:"round",lineJoin:"round",nodeFill:"background",backgroundMode:"solid",backgroundPattern:"none",backgroundColor:"#0b111b",backgroundAlt:"#18243b",stagePadding:52,customSvg:""},e={stageWrap:document.querySelector("#stageWrap"),stage:document.querySelector("#stage"),circuitSelect:document.querySelector("#circuitSelect"),sourceButtons:[...document.querySelectorAll("[data-source]")],customSvgField:document.querySelector("#customSvgField"),customSvg:document.querySelector("#customSvg"),validationMessage:document.querySelector("#validationMessage"),animationMode:document.querySelector("#animationMode"),animationDirection:document.querySelector("#animationDirection"),speed:document.querySelector("#speed"),dash:document.querySelector("#dash"),stroke:document.querySelector("#stroke"),glow:document.querySelector("#glow"),stagger:document.querySelector("#stagger"),scale:document.querySelector("#scale"),circuitColor:document.querySelector("#circuitColor"),opacity:document.querySelector("#opacity"),lineCap:document.querySelector("#lineCap"),lineJoin:document.querySelector("#lineJoin"),nodeFill:document.querySelector("#nodeFill"),backgroundMode:document.querySelector("#backgroundMode"),backgroundPattern:document.querySelector("#backgroundPattern"),backgroundColor:document.querySelector("#backgroundColor"),backgroundAlt:document.querySelector("#backgroundAlt"),stagePadding:document.querySelector("#stagePadding"),speedValue:document.querySelector("#speedValue"),dashValue:document.querySelector("#dashValue"),strokeValue:document.querySelector("#strokeValue"),glowValue:document.querySelector("#glowValue"),staggerValue:document.querySelector("#staggerValue"),scaleValue:document.querySelector("#scaleValue"),opacityValue:document.querySelector("#opacityValue"),paddingValue:document.querySelector("#paddingValue"),svgOutput:document.querySelector("#svgOutput"),cssOutput:document.querySelector("#cssOutput"),embedOutput:document.querySelector("#embedOutput"),aiOutput:document.querySelector("#aiOutput"),copyButtons:[...document.querySelectorAll("[data-copy]")]};function f(){e.circuitSelect.innerHTML=h.map(t=>`<optgroup label="${t.label}">
${t.circuits.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
</optgroup>`).join(""),i(e.circuitSelect,"circuitId"),i(e.animationMode,"animationMode"),i(e.animationDirection,"animationDirection"),i(e.speed,"speed",Number),i(e.dash,"dash",Number),i(e.stroke,"stroke",Number),i(e.glow,"glow",Number),i(e.stagger,"stagger",Number),i(e.scale,"scale",Number),i(e.circuitColor,"circuitColor"),i(e.opacity,"opacity",Number),i(e.lineCap,"lineCap"),i(e.lineJoin,"lineJoin"),i(e.nodeFill,"nodeFill"),i(e.backgroundMode,"backgroundMode"),i(e.backgroundPattern,"backgroundPattern"),i(e.backgroundColor,"backgroundColor"),i(e.backgroundAlt,"backgroundAlt"),i(e.stagePadding,"stagePadding",Number),e.sourceButtons.forEach(t=>{t.addEventListener("click",()=>{c.source=t.dataset.source,d()})}),e.customSvg.addEventListener("input",t=>{c.customSvg=t.target.value,d()}),e.copyButtons.forEach(t=>{t.addEventListener("click",async()=>{const r=P(t.dataset.copy);await L(r);const a=t.textContent;t.textContent="Copied",window.setTimeout(()=>{t.textContent=a},1200)})}),d()}function i(t,r,a=o=>o){t.addEventListener("input",o=>{c[r]=a(o.target.value),d()})}function b(){return u.find(t=>t.id===c.circuitId)??u[0]}function k(){if(c.source==="custom"){const r=y(c.customSvg);return r.ok?r.svg:null}const t=b();return`<svg class="animated-circuit circuit-${c.animationMode}" viewBox="${t.viewBox}" role="img" aria-label="${B(t.name)} animated circuit" style="width:${t.width}px">
${t.markup}
</svg>`}function y(t){if(!t.trim())return{ok:!1,message:"Paste an SVG to preview and export it."};const a=new DOMParser().parseFromString(t,"image/svg+xml"),o=a.querySelector("parsererror"),n=a.querySelector("svg");return o||!n?{ok:!1,message:"That does not look like valid SVG markup yet."}:(n.classList.add("animated-circuit",`circuit-${c.animationMode}`),n.setAttribute("role","img"),n.setAttribute("aria-label","Custom animated circuit"),{ok:!0,svg:n.outerHTML})}function d(){const t=k(),r=c.source==="custom"?y(c.customSvg):{ok:!0,message:""};e.sourceButtons.forEach(l=>{l.classList.toggle("active",l.dataset.source===c.source)}),e.customSvgField.classList.toggle("visible",c.source==="custom"),e.validationMessage.textContent=r.ok?"":r.message,e.validationMessage.classList.toggle("visible",!r.ok),C(),V(),e.stage.innerHTML=t??'<p class="empty-preview">Paste a valid SVG to see it animate.</p>';const a=e.stage.querySelector("svg");a&&(a.classList.remove("circuit-flow","circuit-pulse","circuit-draw","circuit-shimmer","circuit-paused"),a.classList.add("animated-circuit",`circuit-${c.animationMode}`),a.style.width=`${Math.max(120,c.scale*2.4)}px`,w(a));const o=$(),n=t??"",s=`<style>
${o}
</style>
<div class="circuit-surface circuit-pattern-${c.backgroundPattern}">
${n}
</div>`;e.svgOutput.textContent=n,e.cssOutput.textContent=o,e.embedOutput.textContent=s,e.aiOutput.textContent=q(n,o)}function w(t){[...t.querySelectorAll("path, circle, rect, polyline, line")].forEach((a,o)=>{const n=S(a),s=Math.max(8,Math.min(n*.32,c.dash)),l=Math.max(n,c.dash*4),p=l+s;a.style.setProperty("--trace-length",n.toFixed(2)),a.style.setProperty("--trace-dash",s.toFixed(2)),a.style.setProperty("--trace-gap",l.toFixed(2)),a.style.setProperty("--trace-start",p.toFixed(2)),a.style.setProperty("--trace-end",`-${p.toFixed(2)}`),a.style.setProperty("--trace-delay",`${o*-c.stagger}s`)})}function S(t){if(typeof t.getTotalLength=="function")try{return Math.max(t.getTotalLength(),1)}catch{return c.dash}return c.dash}function C(){e.speedValue.textContent=`${c.speed.toFixed(1)}s`,e.dashValue.textContent=`${c.dash}px`,e.strokeValue.textContent=`${c.stroke.toFixed(2)}px`,e.glowValue.textContent=`${c.glow}px`,e.staggerValue.textContent=`${c.stagger.toFixed(2)}s`,e.scaleValue.textContent=`${c.scale}%`,e.opacityValue.textContent=`${Math.round(c.opacity*100)}%`,e.paddingValue.textContent=`${c.stagePadding}px`}function V(){const t=c.backgroundMode==="gradient"?`linear-gradient(135deg, ${c.backgroundColor}, ${c.backgroundAlt})`:c.backgroundColor;e.stageWrap.style.setProperty("--preview-background",t),e.stageWrap.style.setProperty("--preview-padding",`${c.stagePadding}px`),e.stageWrap.dataset.pattern=c.backgroundPattern,e.stage.style.setProperty("--circuit-color",c.circuitColor),e.stage.style.setProperty("--circuit-bg",c.backgroundColor),e.stage.style.setProperty("--circuit-bg-alt",c.backgroundAlt),e.stage.style.setProperty("--circuit-speed",`${c.speed}s`),e.stage.style.setProperty("--circuit-stroke",`${c.stroke}px`),e.stage.style.setProperty("--circuit-glow",`${c.glow}px`),e.stage.style.setProperty("--circuit-dash",c.dash),e.stage.style.setProperty("--circuit-opacity",c.opacity),e.stage.style.setProperty("--circuit-linecap",c.lineCap),e.stage.style.setProperty("--circuit-linejoin",c.lineJoin),e.stage.style.setProperty("--circuit-node-fill",x()),e.stage.style.setProperty("--circuit-direction",c.animationDirection)}function $(){const t=c.backgroundMode==="gradient"?"linear-gradient(135deg, var(--circuit-bg), var(--circuit-bg-alt))":"var(--circuit-bg)";return`.circuit-surface {
  --circuit-color: ${c.circuitColor};
  --circuit-bg: ${c.backgroundColor};
  --circuit-bg-alt: ${c.backgroundAlt};
  --circuit-speed: ${c.speed}s;
  --circuit-stroke: ${c.stroke}px;
  --circuit-glow: ${c.glow}px;
  --circuit-dash: ${c.dash};
  --circuit-opacity: ${c.opacity};
  --circuit-linecap: ${c.lineCap};
  --circuit-linejoin: ${c.lineJoin};
  --circuit-node-fill: ${x()};
  --circuit-direction: ${c.animationDirection};
  --circuit-padding: ${c.stagePadding}px;
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  padding: var(--circuit-padding);
  overflow: hidden;
  background: ${t};
}

.circuit-surface::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  content: "";
  opacity: 0;
  pointer-events: none;
}

.circuit-pattern-grid::before {
  opacity: 0.32;
  background-image:
    linear-gradient(rgb(120 205 255 / 16%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(120 205 255 / 16%) 1px, transparent 1px);
  background-size: 28px 28px;
}

.circuit-pattern-scanlines::before {
  opacity: 0.24;
  background-image: linear-gradient(transparent 0 72%, rgb(120 205 255 / 18%) 72% 100%);
  background-size: 100% 9px;
}

.circuit-pattern-dots::before {
  opacity: 0.28;
  background-image: radial-gradient(circle, rgb(120 205 255 / 22%) 1px, transparent 1.6px);
  background-size: 18px 18px;
}

.animated-circuit {
  overflow: visible;
}

.animated-circuit path,
.animated-circuit circle,
.animated-circuit rect,
.animated-circuit polyline,
.animated-circuit line {
  fill: none;
  stroke: var(--circuit-color);
  stroke-width: var(--circuit-stroke);
  stroke-linecap: var(--circuit-linecap);
  stroke-linejoin: var(--circuit-linejoin);
  opacity: var(--circuit-opacity);
  stroke-dasharray: var(--trace-dash, var(--circuit-dash)) var(--trace-gap, 600);
  stroke-dashoffset: var(--trace-start, 600);
  filter: drop-shadow(0 0 var(--circuit-glow) var(--circuit-color));
  animation: circuit-flow var(--circuit-speed) linear infinite;
  animation-delay: var(--trace-delay, 0s);
  animation-direction: var(--circuit-direction);
}

.animated-circuit .node {
  fill: var(--circuit-node-fill);
}

.circuit-pulse path,
.circuit-pulse circle,
.circuit-pulse rect,
.circuit-pulse polyline,
.circuit-pulse line {
  animation-name: circuit-pulse;
}

.circuit-draw path,
.circuit-draw circle,
.circuit-draw rect,
.circuit-draw polyline,
.circuit-draw line {
  animation-name: circuit-draw;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  stroke-dasharray: var(--trace-length, 600);
}

.circuit-shimmer path,
.circuit-shimmer circle,
.circuit-shimmer rect,
.circuit-shimmer polyline,
.circuit-shimmer line {
  animation-name: circuit-shimmer;
}

.circuit-paused path,
.circuit-paused circle,
.circuit-paused rect,
.circuit-paused polyline,
.circuit-paused line {
  animation-play-state: paused;
}

@keyframes circuit-flow {
  0% { stroke-dashoffset: var(--trace-start, 600); opacity: 0.25; }
  18% { opacity: 1; }
  100% { stroke-dashoffset: var(--trace-end, -600); opacity: 0.6; }
}

@keyframes circuit-pulse {
  0%, 100% { opacity: 0.55; filter: drop-shadow(0 0 calc(var(--circuit-glow) * 0.5) var(--circuit-color)); }
  50% { opacity: 1; filter: drop-shadow(0 0 calc(var(--circuit-glow) * 1.6) var(--circuit-color)); }
}

@keyframes circuit-draw {
  0% { stroke-dashoffset: var(--trace-length, 600); opacity: 0.4; }
  70%, 100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes circuit-shimmer {
  0% { stroke-dashoffset: var(--trace-start, 600); opacity: 0.65; }
  40% { opacity: 1; }
  100% { stroke-dashoffset: var(--trace-end, -600); opacity: 0.65; }
}`}function x(){return c.nodeFill==="color"?"var(--circuit-color)":c.nodeFill==="transparent"?"transparent":"var(--circuit-bg)"}function q(t,r){return`Implement this animated SVG circuit in my project.

Requirements:
1. Add the CSS exactly once, preferably in the component stylesheet or global CSS file.
2. Add the SVG where the animated circuit should appear.
3. Keep the classes "animated-circuit" and "circuit-${c.animationMode}" on the SVG.
4. Customize the CSS variables on a wrapper with class "circuit-surface" when changing color, speed, stroke, glow, dash, or background.
5. Preserve the MIT license notice if you redistribute this snippet as part of a template or library.

CSS:
${r}

SVG:
${t}`}function P(t){return{svg:e.svgOutput.textContent,css:e.cssOutput.textContent,embed:e.embedOutput.textContent,ai:e.aiOutput.textContent}[t]??""}async function L(t){if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t);return}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly",""),r.style.position="fixed",r.style.left="-999px",document.body.append(r),r.select(),document.execCommand("copy"),r.remove()}function B(t){return t.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}f();
