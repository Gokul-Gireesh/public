import{j as e,r as c}from"./index-D5vAqgif.js";const b=({size:s=64,streak:n=0})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:s,height:s,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"outerFlame",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF4500"}),e.jsx("stop",{offset:"100%",stopColor:"#FF8C00"})]}),e.jsxs("linearGradient",{id:"innerFlame",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF8C00"}),e.jsx("stop",{offset:"100%",stopColor:"#FFD700"})]}),e.jsxs("linearGradient",{id:"coreFlame",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFD700"}),e.jsx("stop",{offset:"100%",stopColor:"#FFFFFF"})]}),e.jsx("style",{children:`
          @keyframes flicker {
            0%, 100% { transform: scale(1) rotate(0deg); }
            20% { transform: scale(0.95, 1.05) rotate(-1deg); }
            40% { transform: scale(1.05, 0.95) rotate(1deg); }
            60% { transform: scale(0.98, 1.02) rotate(-0.5deg); }
            80% { transform: scale(1.02, 0.98) rotate(0.5deg); }
          }
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(-5px) scale(0.97); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.8; }
          }
          .flame {
            transform-origin: bottom center;
          }
          .outer {
            animation: flicker 1.2s infinite ease-in-out;
          }
          .inner {
            animation: flicker 0.8s infinite ease-in-out reverse;
            animation-delay: 0.1s;
          }
          .core {
            animation: floatUp 0.6s infinite ease-in-out;
          }
          .streak {
            font-family: monospace, Courier, 'new Courier';
            font-weight: 900;
            fill: #FFD700;
            filter: drop-shadow(0px 2px 3px rgba(139, 0, 0, 0.8));
            user-select: none;
          }
        `})]}),e.jsx("path",{className:"flame outer",fill:"url(#outerFlame)",d:"M50,90 C75,90 85,65 80,45 C75,25 55,5 50,5 C45,5 25,25 20,45 C15,65 25,90 50,90 Z"}),e.jsx("path",{className:"flame inner",fill:"url(#innerFlame)",d:"M50,85 C68,85 75,65 72,50 C68,35 55,18 50,18 C45,18 32,35 28,50 C25,65 32,85 50,85 Z"}),e.jsx("path",{className:"flame core",fill:"url(#coreFlame)",d:"M50,80 C60,80 65,65 62,55 C60,45 53,30 50,30 C47,30 40,45 38,55 C35,65 40,80 50,80 Z"}),e.jsx("text",{x:"50%",y:"72",textAnchor:"middle",dominantBaseline:"central",fontSize:"38",className:"streak",children:n})]}),y=()=>{const[s,n]=c.useState("math"),[f,x]=c.useState([]),[m,h]=c.useState({});c.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),c.useEffect(()=>{const t=localStorage.getItem(s),a=t?JSON.parse(t):[],l=JSON.parse(localStorage.getItem(`track_${s}`));h(l),x(a)},[s]);const r={wrapper:{padding:"20px",maxWidth:"500px",margin:"auto",fontFamily:"monospace, Courier, New"},tabBar:{display:"flex",borderBottom:"2px solid #eee",marginBottom:"20px",overflowX:"auto",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",scrollbarWidth:"none"},tab:t=>({padding:"10px 20px",cursor:"pointer",borderBottom:t?"3px solid #3b82f6":"none",fontWeight:t?"bold":"normal",fontSize:"14px",color:t?"#3b82f6":"#666",flexShrink:0}),list:{listStyle:"none",padding:0},item:t=>{const a=Math.round(191+63*t),l=Math.round(219+-41*t),g=Math.round(254+-76*t);return{display:"flex",justifyContent:"space-between",padding:"12px",fontSize:"14px",backgroundColor:`rgba(${a},${l},${g},0.3)`,borderBottom:"1px solid #f0f0f0"}},hint:{padding:"12px",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",marginBottom:"15px",textAlign:"center",backgroundColor:"#f8d7da",color:"#721c24",border:"1px solid #f5c6cb"},fab:{position:"fixed",bottom:"84px",right:"24px",backgroundColor:"transparent",borderRadius:"50%",width:"64px",height:"64px",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2,cursor:"pointer"}},i=Date.now(),d=f.filter((t,a)=>i-(t.timestamp??0)<=672*60*60*1e3/a),o={...m};o.timestamp??=i,o.streak??=0,o.last??=0,o.score??=0;const u=Math.floor(i/(1440*60*1e3)),p=i-o.timestamp;return p<0?(o.score=0,o.streak=0):u!==o.last&&p>1440*60*1e3&&(o.streak=0),e.jsxs("div",{style:r.wrapper,children:[e.jsxs("div",{style:r.tabBar,children:[e.jsx("div",{style:r.tab(s==="series"),onClick:()=>n("series"),children:"Series"}),e.jsx("div",{style:r.tab(s==="math"),onClick:()=>n("math"),children:"Math"}),e.jsx("div",{style:r.tab(s==="quadratic"),onClick:()=>n("quadratic"),children:"Quadratic"}),e.jsx("div",{style:r.tab(s==="expertMath"),onClick:()=>n("expertMath"),children:"Expert"})]}),e.jsxs("div",{style:r.hint,children:["Your Average Score is: ",o?.score?.toFixed(2)||0]}),e.jsx("ul",{style:r.list,children:d.length>0?d.map((t,a)=>{const l=Math.abs((i-(t.timestamp??0))/(24192e5/a));return e.jsxs("li",{style:r.item(l),children:[e.jsxs("span",{children:[a+1,". ",t.time||"oops"]}),e.jsx("span",{style:{fontWeight:"bold"},children:t.score}),e.jsx("span",{style:{fontWeight:"bold"},children:t.tag})]},a)}):e.jsxs("p",{style:{color:"#999",textAlign:"center"},children:["No data in ",s]})}),e.jsx("div",{style:r.fab,children:e.jsx(b,{size:54,streak:o?.streak||0})})]})};export{y as default};
