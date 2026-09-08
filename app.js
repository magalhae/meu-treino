
const workouts={
"Ter":{title:"Inferiores A",desc:"Quadríceps + glúteos",warm:"8–10 min de esteira ou bicicleta",time:55,ex:[
["Agachamento goblet","Halter","2/3","10–12","90s","squat","Segure o halter junto ao peito. Pés confortáveis, joelhos acompanhando a direção dos pés. Desça como se fosse sentar e suba sem perder o controle."],
["Leg press / máquina*","Máquina","2/3","10–12","90–120s","legpress","Mantenha lombar e quadril apoiados. Desça até uma amplitude confortável e empurre a plataforma sem travar os joelhos."],
["Cadeira extensora*","Máquina","2/3","12–15","60–90s","legext","Ajuste o eixo da máquina próximo ao joelho. Estenda as pernas sem impulso e retorne devagar."],
["Afundo parado","Halteres / corpo","2","8–10 cada","90s","lunge","Um pé à frente e outro atrás. Desça verticalmente, mantendo o tronco estável, e suba empurrando o chão com o pé da frente."],
["Abdução de quadril*","Máquina","2/3","12–15","60s","abduction","Afaste os joelhos contra a resistência e retorne lentamente, sem deixar o peso bater."],
["Elevação pélvica","Banco + halter","2/3","12–15","90s","hipthrust","Parte alta das costas apoiada. Eleve o quadril até alinhar tronco e coxas, contraindo glúteos sem hiperestender a lombar."],
["Panturrilha em pé","Halteres / corpo","2/3","15–20","60s","calf","Eleve os calcanhares, pause no alto e desça lentamente até sentir alongamento confortável."]]},
"Qua":{title:"Superiores A",desc:"Costas + peito + braços + core",warm:"5–8 min de elíptico",time:50,ex:[
["Puxada alta","Polia alta","2/3","10–12","90s","pulldown","Puxe a barra em direção à parte alta do peito, levando os cotovelos para baixo. Evite puxar atrás da cabeça."],
["Remada sentada","Polia","2/3","10–12","90s","row","Coluna neutra. Puxe a alça em direção ao abdômen e aproxime as escápulas sem encolher os ombros."],
["Supino com halteres","Banco + halteres","2/3","10–12","90s","bench","Pés firmes no chão. Desça os halteres ao lado do peito e empurre para cima mantendo punhos estáveis."],
["Desenvolvimento de ombros","Halteres","2","10–12","75–90s","shoulder","Sentada, empurre os halteres acima da cabeça sem arquear a lombar."],
["Elevação lateral","Halteres","2","12–15","60s","lateral","Eleve os braços lateralmente com cotovelos levemente flexionados. Pare antes de compensar com o tronco."],
["Rosca bíceps","Halteres","2","10–12","60s","curl","Mantenha cotovelos próximos ao corpo. Flexione os braços e desça lentamente."],
["Tríceps na polia","Polia alta","2","10–12","60s","triceps","Cotovelos junto ao corpo. Estenda os braços para baixo sem movimentar os ombros."],
["Prancha","Colchonete","2–3","20–30s","45–60s","plank","Mantenha cabeça, tronco e quadril alinhados. Se necessário, use apoio dos joelhos."]]},
"Sex":{title:"Inferiores B",desc:"Glúteos + posteriores",warm:"8–10 min de esteira ou bicicleta",time:55,ex:[
["Hip thrust","Banco + halter","2/3","10–12","90–120s","hipthrust","Eleve o quadril contraindo os glúteos e desça controladamente."],
["Stiff / romeno","Halteres","2/3","10–12","90–120s","rdl","Joelhos levemente flexionados. Leve o quadril para trás com os halteres próximos às pernas e coluna neutra."],
["Agachamento sumô","Halter","2/3","10–12","90s","sumo","Pés mais afastados e pontas levemente para fora. Desça mantendo joelhos na direção dos pés."],
["Flexora*","Máquina","2/3","12–15","60–90s","legcurl","Flexione os joelhos contra a resistência e retorne devagar, sem soltar o peso."],
["Afundo reverso","Halteres / corpo","2","8–10 cada","90s","revlunge","Dê um passo para trás, desça controlando e volte empurrando o chão com o pé da frente."],
["Abdução de quadril*","Máquina","2/3","15","60s","abduction","Afaste as pernas com controle e retorne lentamente."],
["Panturrilha","Halteres / corpo","2/3","15–20","60s","calf","Suba na ponta dos pés, pause no alto e desça lentamente."]]},
"Sáb":{title:"Superiores B",desc:"Costas + peito + ombros + core",warm:"5–8 min de cardio leve",time:50,ex:[
["Remada unilateral","Banco + halter","2/3","10–12 cada","75–90s","onerow","Apoie uma mão e um joelho no banco. Puxe o halter em direção ao quadril sem girar o tronco."],
["Puxada alta","Polia alta","2/3","10–12","90s","pulldown","Puxe a barra ao peito com controle e retorne sem relaxar totalmente os ombros."],
["Supino inclinado","Banco + halteres","2/3","10–12","90s","incline","Banco moderadamente inclinado. Desça os halteres ao lado do peito e empurre para cima."],
["Elevação lateral","Halteres","2/3","12–15","60s","lateral","Eleve lateralmente até uma altura confortável e retorne devagar."],
["Rosca martelo","Halteres","2","10–12","60s","hammer","Mantenha as palmas voltadas uma para a outra durante todo o movimento."],
["Tríceps na polia","Polia alta","2","10–12","60s","triceps","Estenda os cotovelos para baixo mantendo os braços estáveis."],
["Abdominal","Colchonete","2/3","12–15","45–60s","crunch","Eleve levemente o tronco aproximando as costelas da pelve, sem puxar o pescoço."],
["Prancha","Colchonete","2","20–40s","45–60s","plank","Abdômen e glúteos ativos; mantenha a coluna neutra."]]},
"Dom":{title:"Cardio + mobilidade",desc:"Recuperação ativa",warm:"5 min de caminhada leve",time:50,ex:[
["Cardio principal","Esteira / bike / elíptico","1","25–35 min","—","cardio","Ritmo moderado: respiração mais rápida, mas ainda conseguindo conversar em frases."],
["Desaceleração","Mesmo aparelho","1","5 min","—","walk","Reduza gradualmente o ritmo até a respiração ficar confortável."],
["Mobilidade","Sem equipamento","1","10–15 min","—","mobility","Movimentos confortáveis para tornozelos, quadris, coluna torácica e ombros."]]}
};

const P="#34463a", G="#5e7f67", L="#dfeae1";
const human=(x,y,pose)=> {
  // compact start/end stick figure generator
  if(pose==="stand") return `<circle cx="${x}" cy="${y}" r="5" fill="${G}"/><path d="M${x} ${y+6}v18 M${x} ${y+12}l-11 7 M${x} ${y+12}l11 7 M${x} ${y+24}l-9 17 M${x} ${y+24}l9 17" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  if(pose==="squat") return `<circle cx="${x}" cy="${y}" r="5" fill="${G}"/><path d="M${x} ${y+6}l2 17 M${x+2} ${y+23}l-13 11-9 10 M${x+2} ${y+23}l14 10 10 11 M${x} ${y+12}l11 2" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="${x+10}" y="${y+8}" width="7" height="9" rx="2" fill="${G}"/>`;
  if(pose==="hinge") return `<circle cx="${x}" cy="${y}" r="5" fill="${G}"/><path d="M${x} ${y+6}l11 17 18 7 M${x+11} ${y+23}l-4 20 M${x+11} ${y+23}l10 20 M${x+7} ${y+15}l14 15" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  return "";
};
const twoFrame=(a,b,label1="INÍCIO",label2="FINAL")=>`<svg viewBox="0 0 130 92">
<text x="7" y="10" font-size="7" fill="#718077">${label1}</text><text x="76" y="10" font-size="7" fill="#718077">${label2}</text>
<line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5" stroke-width="1"/>
${a}${b}</svg>`;

const svgMap={
squat:twoFrame(human(31,24,"stand"),human(96,31,"squat")),
legpress:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">INÍCIO</text><text x="76" y="10" font-size="7" fill="#718077">EMPURRE</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><path d="M9 74 L29 39 L45 72 Z" fill="${L}"/><circle cx="28" cy="39" r="5" fill="${G}"/><path d="M28 44l9 13 12-9 10-10 M37 57l10 15" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M54 26l9 20" stroke="${G}" stroke-width="6"/><path d="M75 74 L95 39 L111 72 Z" fill="${L}"/><circle cx="94" cy="39" r="5" fill="${G}"/><path d="M94 44l9 13 16-19 M103 57l10 15" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M116 26l8 20" stroke="${G}" stroke-width="6"/></svg>`,
legext:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">DOBRADO</text><text x="76" y="10" font-size="7" fill="#718077">ESTENDIDO</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><rect x="10" y="51" width="30" height="7" rx="3" fill="${L}"/><circle cx="25" cy="35" r="5" fill="${G}"/><path d="M25 40v15l17 3 9 14" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="75" y="51" width="30" height="7" rx="3" fill="${L}"/><circle cx="90" cy="35" r="5" fill="${G}"/><path d="M90 40v15l18 3 15 0" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
lunge:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v18 M96 37l-10 7 M96 46l-12 12-11 10 M96 46l13 12 14 1" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
abduction:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">FECHADO</text><text x="76" y="10" font-size="7" fill="#718077">ABERTO</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><circle cx="31" cy="28" r="5" fill="${G}"/><path d="M31 34v19 M31 53l-8 18 M31 53l8 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="96" cy="28" r="5" fill="${G}"/><path d="M96 34v19 M96 53l-18 16 M96 53l18 16" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
hipthrust:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">BAIXO</text><text x="76" y="10" font-size="7" fill="#718077">ALTO</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><rect x="7" y="51" width="25" height="7" rx="3" fill="${L}"/><circle cx="31" cy="45" r="5" fill="${G}"/><path d="M36 48l15 9 10 15 M51 57l-3 16" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="72" y="51" width="25" height="7" rx="3" fill="${L}"/><circle cx="96" cy="45" r="5" fill="${G}"/><path d="M101 48l15 0 8 18 M116 48l-1 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
calf:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v22 M96 38l-10 7 M96 38l10 7 M96 50l-8 18 5 3 M96 50l8 18 5 3" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
pulldown:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">BRAÇOS ALTOS</text><text x="76" y="10" font-size="7" fill="#718077">PUXE</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><path d="M12 18h38" stroke="${G}" stroke-width="4"/><circle cx="31" cy="34" r="5" fill="${G}"/><path d="M31 40v21 M31 45L18 20 M31 45L44 20 M31 61l-8 16 M31 61l8 16" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M77 18h38" stroke="${G}" stroke-width="4"/><circle cx="96" cy="34" r="5" fill="${G}"/><path d="M96 40v21 M96 45L83 38 M96 45L109 38 M96 61l-8 16 M96 61l8 16" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
row:twoFrame(`<circle cx="31" cy="28" r="5" fill="${G}"/><path d="M31 34l7 17-11 17 M38 51l13 16 M34 41l19 4" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`,`<circle cx="96" cy="28" r="5" fill="${G}"/><path d="M96 34l7 17-11 17 M103 51l13 16 M99 41l11 4-10 0" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
bench:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">BAIXO</text><text x="76" y="10" font-size="7" fill="#718077">CIMA</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><rect x="8" y="59" width="48" height="7" rx="3" fill="${L}"/><circle cx="22" cy="51" r="5" fill="${G}"/><path d="M27 53h19 M32 51l-2-15 M43 52l3-15 M46 53l8 12" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="73" y="59" width="48" height="7" rx="3" fill="${L}"/><circle cx="87" cy="51" r="5" fill="${G}"/><path d="M92 53h19 M97 51l-2-25 M108 52l3-25 M111 53l8 12" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
shoulder:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v22 M96 38l-13-17 M96 38l13-17 M96 50l-8 18 M96 50l8 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
lateral:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">BAIXO</text><text x="76" y="10" font-size="7" fill="#718077">LATERAL</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/>${human(31,22,"stand")}<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v22 M96 38H78 M96 38h18 M96 50l-8 18 M96 50l8 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
curl:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v22 M96 38l-12 9 1-12 M96 38l12 9-1-12 M96 50l-8 18 M96 50l8 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
triceps:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v22 M96 38l10 4 4 15 M96 50l-8 18 M96 50l8 18" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
plank:`<svg viewBox="0 0 130 92"><text x="9" y="10" font-size="7" fill="#718077">CORPO ALINHADO</text><circle cx="30" cy="46" r="5" fill="${G}"/><path d="M35 48l39 6 25 6 M48 50l-10 17 M80 55l10 14" stroke="${P}" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
rdl:twoFrame(human(31,22,"stand"),human(93,22,"hinge")),
sumo:twoFrame(human(31,22,"stand"),human(96,31,"squat")),
legcurl:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">ESTENDIDO</text><text x="76" y="10" font-size="7" fill="#718077">FLEXIONE</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><rect x="9" y="53" width="42" height="7" rx="3" fill="${L}"/><circle cx="22" cy="46" r="5" fill="${G}"/><path d="M27 48l18 7 11 8" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="74" y="53" width="42" height="7" rx="3" fill="${L}"/><circle cx="87" cy="46" r="5" fill="${G}"/><path d="M92 48l18 7-2-16" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
revlunge:twoFrame(human(31,22,"stand"),`<circle cx="96" cy="22" r="5" fill="${G}"/><path d="M96 28v18 M96 46l13 12 13 9 M96 46L83 58 70 57" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
onerow:twoFrame(`<rect x="33" y="60" width="25" height="6" rx="3" fill="${L}"/><circle cx="25" cy="30" r="5" fill="${G}"/><path d="M25 35l12 13 17 6 M34 44l-12 12-7 14 M37 48l-2 22" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`,`<rect x="98" y="60" width="25" height="6" rx="3" fill="${L}"/><circle cx="90" cy="30" r="5" fill="${G}"/><path d="M90 35l12 13 10 1 M99 44l-12 12-7 14 M102 48l-2 22" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/>`),
incline:bench,
hammer:curl,
crunch:`<svg viewBox="0 0 130 92"><text x="7" y="10" font-size="7" fill="#718077">BAIXO</text><text x="76" y="10" font-size="7" fill="#718077">SUBA</text><line x1="65" y1="7" x2="65" y2="85" stroke="#e4eae5"/><circle cx="22" cy="49" r="5" fill="${G}"/><path d="M27 51q15-7 26 4 M53 55l8 14 M53 55l-12 14" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="91" cy="39" r="5" fill="${G}"/><path d="M96 42q11 2 17 13 M113 55l8 14 M113 55l-12 14" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
cardio:`<svg viewBox="0 0 130 92"><text x="9" y="10" font-size="7" fill="#718077">RITMO MODERADO</text><circle cx="52" cy="24" r="5" fill="${G}"/><path d="M52 30l5 16-13 12-12 15 M57 46l17 10 13 16 M55 36l16-5" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M16 78h100" stroke="${G}" stroke-width="4"/></svg>`,
walk:twoFrame(human(31,22,"stand"),human(96,22,"stand")),
mobility:`<svg viewBox="0 0 130 92"><text x="9" y="10" font-size="7" fill="#718077">MOVIMENTOS LEVES</text><circle cx="65" cy="23" r="5" fill="${G}"/><path d="M65 29v22 M65 37L42 26 M65 37l23-11 M65 51L49 73 M65 51l16 22" stroke="${P}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M35 21q-9 11 0 21 M95 21q9 11 0 21" stroke="${G}" stroke-width="3" fill="none"/></svg>`
};

let timer=null, remain=90, currentExercise=0;
const dayMap={0:"Dom",2:"Ter",3:"Qua",5:"Sex",6:"Sáb"};
const storedDay=localStorage.getItem("day");
let day=storedDay||dayMap[new Date().getDay()]||"Ter";
const key=(d,i,s,t)=>`${t}_${d}_${i}_${s}`;
const seriesCount=t=>{const m=String(t).match(/\d+/);return m?parseInt(m[0]):1};

function isStandalone(){return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone===true}
if(isStandalone()) document.body.classList.add("standalone");

function renderTabs(){
 const el=document.querySelector("#tabs");el.innerHTML="";
 Object.keys(workouts).forEach(d=>{
   const b=document.createElement("button"); b.className="tab "+(d===day?"active":""); b.textContent=d;
   b.onclick=()=>{day=d;localStorage.setItem("day",d);currentExercise=0;render()};
   el.appendChild(b)
 })
}
function getHistory(){try{return JSON.parse(localStorage.getItem("history")||"[]")}catch{return []}}
function lastFor(name){
 const h=getHistory();
 for(const rec of h){
   const found=(rec.ex||[]).find(x=>x.name===name);
   if(found){
     const valid=(found.sets||[]).filter(s=>s.kg||s.reps);
     if(valid.length){
       return valid.map((s,idx)=>`${s.kg||"—"} kg × ${s.reps||"—"}`).join(" · ");
     }
   }
 }
 return "";
}
function render(){
 renderTabs(); renderWorkout(); renderHistory();
}
function renderWorkout(){
 const w=workouts[day];
 document.querySelector("#heroTitle").textContent=w.title;
 document.querySelector("#heroDesc").textContent=w.desc;
 document.querySelector("#warm").textContent=w.warm;
 document.querySelector("#count").textContent=w.ex.length;
 document.querySelector("#mins").textContent="~"+w.time;
 const autoDay=dayMap[new Date().getDay()];
 document.querySelector("#today").textContent = autoDay===day ? "Treino de hoje" : "Treino selecionado";
 const list=document.querySelector("#list"); list.innerHTML="";
 let completed=0;
 w.ex.forEach((e,i)=>{
   const done=localStorage.getItem(key(day,i,0,"exercise"))==="1"; if(done)completed++;
   const n=seriesCount(e[2]); let rows="";
   for(let s=1;s<=n;s++){
     const kg=localStorage.getItem(key(day,i,s,"kg"))||"";
     const reps=localStorage.getItem(key(day,i,s,"reps"))||"";
     const sd=localStorage.getItem(key(day,i,s,"done"))==="1";
     rows+=`<div class="seriesRow">
       <div class="n">${s}</div>
       <input inputmode="decimal" aria-label="Carga série ${s}" placeholder="kg" value="${kg}" onchange="save('${day}',${i},${s},'kg',this.value)">
       <input inputmode="numeric" aria-label="Repetições série ${s}" placeholder="reps" value="${reps}" onchange="save('${day}',${i},${s},'reps',this.value)">
       <button class="seriesDone ${sd?'on':''}" onclick="toggleSeries('${day}',${i},${s},${n})">${sd?'✓':'○'}</button>
     </div>`;
   }
   const last=lastFor(e[0]);
   const c=document.createElement("div"); c.className="exercise "+(done?"done":""); c.id=`ex-${i}`;
   c.innerHTML=`<div class="exTop">
     <div class="illus">${svgMap[e[5]]||svgMap.mobility}</div>
     <div class="exName"><h3>${i+1}. ${e[0]}</h3><div class="small">${e[1]}</div></div>
     <div class="check" onclick="toggleExercise('${day}',${i})">${done?'✓':''}</div>
   </div>
   <div class="chips"><span class="chip">${e[2]} séries</span><span class="chip">${e[3]} reps</span><span class="chip">${e[4]} descanso</span></div>
   <div class="how">${e[6]}</div>
   ${last?`<div class="last"><b>Última vez:</b> ${last}</div>`:""}
   <div class="series">
     <div class="seriesHeader"><div></div><div>CARGA</div><div>REPS</div><div>OK</div></div>${rows}
   </div>
   <div class="actions">
     <button class="action alt" onclick="startRest('${e[4]}')">⏱ Descanso</button>
     <button class="action" onclick="nextExercise(${i})">${i===w.ex.length-1?"Finalizar":"Próximo →"}</button>
   </div>`;
   list.appendChild(c);
 });
 const p=Math.round(completed/w.ex.length*100);
 document.querySelector("#pct").textContent=p+"%"; document.querySelector("#bar").style.width=p+"%";
}
function save(d,i,s,t,v){localStorage.setItem(key(d,i,s,t),v)}
function toggleSeries(d,i,s,n){
 const k=key(d,i,s,"done"), on=localStorage.getItem(k)==="1";
 localStorage.setItem(k,on?"0":"1");
 if(!on) startTimer(90);
 let all=true;for(let x=1;x<=n;x++) if(localStorage.getItem(key(d,i,x,"done"))!=="1") all=false;
 localStorage.setItem(key(d,i,0,"exercise"),all?"1":"0"); renderWorkout();
}
function toggleExercise(d,i){
 const k=key(d,i,0,"exercise"),on=localStorage.getItem(k)==="1";
 localStorage.setItem(k,on?"0":"1"); renderWorkout()
}
function parseRest(txt){if(txt.includes("120"))return 120;if(txt.includes("90"))return 90;if(txt.includes("75"))return 75;if(txt.includes("60"))return 60;if(txt.includes("45"))return 45;return 90}
function startRest(txt){startTimer(parseRest(txt))}
function startTimer(sec){
 clearInterval(timer);remain=sec;paint();
 timer=setInterval(()=>{remain--;paint();if(remain<=0){clearInterval(timer);navigator.vibrate?.([200,100,200])}},1000)
}
function paint(){
 const m=Math.floor(remain/60),s=remain%60;
 document.querySelector("#timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")
}
function resetTimer(){clearInterval(timer);remain=90;paint()}
function toggleTimerSize(){document.querySelector(".timer").classList.toggle("compact")}
function nextExercise(i){
 const w=workouts[day];
 if(i>=w.ex.length-1){finishWorkout();return}
 currentExercise=i+1;
 document.querySelector(`#ex-${currentExercise}`)?.scrollIntoView({behavior:"smooth",block:"start"})
}
function finishWorkout(){
 const w=workouts[day];
 const rec={date:new Date().toISOString(),day,title:w.title,ex:w.ex.map((e,i)=>({
   name:e[0],sets:Array.from({length:seriesCount(e[2])},(_,j)=>({
     kg:localStorage.getItem(key(day,i,j+1,"kg"))||"",
     reps:localStorage.getItem(key(day,i,j+1,"reps"))||""
   }))
 }))};
 const h=getHistory(); h.unshift(rec); localStorage.setItem("history",JSON.stringify(h.slice(0,60)));
 alert("Treino salvo no histórico."); renderHistory(); renderWorkout()
}
function renderHistory(){
 const h=getHistory(),box=document.querySelector("#history");box.innerHTML="";
 if(!h.length){box.innerHTML='<div class="note">Nenhum treino salvo ainda.</div>';return}
 h.slice(0,8).forEach(x=>{
   const d=new Date(x.date);
   box.innerHTML+=`<div class="historyItem"><div><b>${x.title}</b><div class="small">${d.toLocaleDateString('pt-BR')} • ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div></div><div>✓</div></div>`
 })
}
function clearWeek(){
 if(confirm("Limpar apenas as marcações de conclusão? Cargas e histórico serão mantidos.")){
   Object.keys(workouts).forEach(d=>workouts[d].ex.forEach((e,i)=>{
     localStorage.removeItem(key(d,i,0,"exercise"));
     for(let s=1;s<=seriesCount(e[2]);s++)localStorage.removeItem(key(d,i,s,"done"))
   }));renderWorkout()
 }
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
      if ("caches" in window) {
        const names = await caches.keys();
        await Promise.all(names.map(n => caches.delete(n)));
      }
    } catch (e) {}
  });
}
render();paint();
