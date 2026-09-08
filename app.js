
const workouts={
"Ter":{title:"Inferiores A",desc:"Quadríceps + glúteos",warm:"8–10 min de esteira ou bicicleta",time:55,ex:[
["Agachamento goblet","Halter","2/3","10–12","90s","squat","Segure o halter junto ao peito. Desça levando o quadril para trás, joelhos alinhados aos pés, e suba controlando."],
["Leg press / máquina*","Máquina","2/3","10–12","90–120s","legpress","Costas apoiadas. Flexione os joelhos e empurre a plataforma sem travá-los no final."],
["Cadeira extensora*","Máquina","2/3","12–15","60–90s","legext","Alinhe o joelho ao eixo da máquina. Estenda as pernas sem impulso e retorne devagar."],
["Afundo parado","Halteres / corpo","2","8–10 cada","90s","lunge","Um pé à frente e outro atrás. Desça verticalmente e suba pelo pé da frente."],
["Abdução de quadril*","Máquina","2/3","12–15","60s","abduction","Afaste as pernas contra a resistência e retorne lentamente, sem embalo."],
["Elevação pélvica","Banco + halter","2/3","12–15","90s","hipthrust","Parte alta das costas no banco. Eleve o quadril contraindo os glúteos; evite arquear a lombar."],
["Panturrilha em pé","Halteres / corpo","2/3","15–20","60s","calf","Eleve os calcanhares, pause no alto e desça controladamente."]]},
"Qua":{title:"Superiores A",desc:"Costas + peito + braços + core",warm:"5–8 min de elíptico",time:50,ex:[
["Puxada alta","Polia alta","2/3","10–12","90s","pulldown","Puxe a barra em direção ao peito, levando os cotovelos para baixo. Não puxe atrás da cabeça."],
["Remada sentada","Polia","2/3","10–12","90s","row","Coluna neutra. Puxe a alça em direção ao abdômen e aproxime as escápulas."],
["Supino com halteres","Banco + halteres","2/3","10–12","90s","bench","Pés firmes no chão. Desça os halteres ao lado do peito e empurre para cima."],
["Desenvolvimento de ombros","Halteres","2","10–12","75–90s","shoulder","Sentada, empurre os halteres acima da cabeça sem arquear a lombar."],
["Elevação lateral","Halteres","2","12–15","60s","lateral","Eleve os braços lateralmente até uma altura confortável, sem impulso."],
["Rosca bíceps","Halteres","2","10–12","60s","curl","Cotovelos próximos ao corpo. Flexione os braços e desça lentamente."],
["Tríceps na polia","Polia alta","2","10–12","60s","triceps","Cotovelos junto ao corpo. Estenda os braços para baixo mantendo os ombros estáveis."],
["Prancha","Colchonete","2–3","20–30s","45–60s","plank","Mantenha o corpo alinhado e o abdômen ativo. Apoie os joelhos se necessário."]]},
"Sex":{title:"Inferiores B",desc:"Glúteos + posteriores",warm:"8–10 min de esteira ou bicicleta",time:55,ex:[
["Hip thrust","Banco + halter","2/3","10–12","90–120s","hipthrust","Eleve o quadril contraindo os glúteos e desça controladamente."],
["Stiff / romeno","Halteres","2/3","10–12","90–120s","rdl","Joelhos levemente flexionados. Leve o quadril para trás com os halteres próximos às pernas."],
["Agachamento sumô","Halter","2/3","10–12","90s","sumo","Pés mais afastados, pontas levemente para fora. Desça mantendo os joelhos na direção dos pés."],
["Flexora*","Máquina","2/3","12–15","60–90s","legcurl","Flexione os joelhos contra a resistência e retorne devagar."],
["Afundo reverso","Halteres / corpo","2","8–10 cada","90s","revlunge","Dê um passo para trás, desça controlando e volte pelo pé da frente."],
["Abdução de quadril*","Máquina","2/3","15","60s","abduction","Afaste as pernas de forma controlada e retorne sem deixar os pesos baterem."],
["Panturrilha","Halteres / corpo","2/3","15–20","60s","calf","Suba na ponta dos pés, pause e desça lentamente."]]},
"Sáb":{title:"Superiores B",desc:"Costas + peito + ombros + core",warm:"5–8 min de cardio leve",time:50,ex:[
["Remada unilateral","Banco + halter","2/3","10–12 cada","75–90s","onerow","Apoie uma mão e um joelho no banco. Puxe o halter em direção ao quadril sem girar o tronco."],
["Puxada alta","Polia alta","2/3","10–12","90s","pulldown","Puxe a barra ao peito com controle e retorne sem relaxar totalmente os ombros."],
["Supino inclinado","Banco + halteres","2/3","10–12","90s","incline","Banco moderadamente inclinado. Desça os halteres ao lado do peito e empurre para cima."],
["Elevação lateral","Halteres","2/3","12–15","60s","lateral","Eleve lateralmente até uma altura confortável e retorne devagar."],
["Rosca martelo","Halteres","2","10–12","60s","hammer","Palmas voltadas uma para a outra durante todo o movimento."],
["Tríceps na polia","Polia alta","2","10–12","60s","triceps","Estenda os cotovelos para baixo mantendo os braços estáveis."],
["Abdominal","Colchonete","2/3","12–15","45–60s","crunch","Eleve levemente o tronco aproximando as costelas da pelve, sem puxar o pescoço."],
["Prancha","Colchonete","2","20–40s","45–60s","plank","Abdômen e glúteos ativos; mantenha a coluna neutra."]]},
"Dom":{title:"Cardio + mobilidade",desc:"Recuperação ativa",warm:"5 min de caminhada leve",time:50,ex:[
["Cardio principal","Esteira / bike / elíptico","1","25–35 min","—","cardio","Ritmo moderado: respiração mais rápida, mas ainda conseguindo conversar em frases."],
["Desaceleração","Mesmo aparelho","1","5 min","—","walk","Reduza gradualmente o ritmo até a respiração ficar confortável."],
["Mobilidade","Sem equipamento","1","10–15 min","—","mobility","Movimentos confortáveis para tornozelos, quadris, coluna torácica e ombros."]]}
};

const svgMap={
squat:`<svg viewBox="0 0 120 90"><circle cx="43" cy="19" r="7" fill="#5e7f67"/><path d="M43 26 L47 47 L34 63 M47 47 L62 62 M39 34 L58 35" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="57" y="29" width="10" height="12" rx="3" fill="#5e7f67"/><path d="M34 63 L22 80 M62 62 L72 79" stroke="#34463a" stroke-width="6" stroke-linecap="round"/></svg>`,
legpress:`<svg viewBox="0 0 120 90"><path d="M18 70 L46 34 L64 68 Z" fill="#dfeae1" stroke="#5e7f67" stroke-width="3"/><circle cx="45" cy="34" r="6" fill="#5e7f67"/><path d="M45 40 L55 54 L70 44 L90 29 M55 54 L68 69" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M88 17 L102 41" stroke="#5e7f67" stroke-width="7"/></svg>`,
legext:`<svg viewBox="0 0 120 90"><rect x="28" y="47" width="35" height="9" rx="4" fill="#dfeae1"/><circle cx="44" cy="27" r="7" fill="#5e7f67"/><path d="M44 34 L45 51 L62 54 L82 54" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="86" cy="54" r="7" fill="#5e7f67"/></svg>`,
lunge:`<svg viewBox="0 0 120 90"><circle cx="54" cy="17" r="7" fill="#5e7f67"/><path d="M54 24 L53 45 L35 63 L22 77 M53 45 L70 60 L91 62 M46 34 L66 36" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
abduction:`<svg viewBox="0 0 120 90"><rect x="40" y="42" width="40" height="10" rx="5" fill="#dfeae1"/><circle cx="60" cy="23" r="7" fill="#5e7f67"/><path d="M60 30 L60 48 M55 47 L35 69 M65 47 L86 69" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
hipthrust:`<svg viewBox="0 0 120 90"><rect x="17" y="45" width="36" height="10" rx="4" fill="#dfeae1"/><circle cx="50" cy="40" r="6" fill="#5e7f67"/><path d="M54 45 L72 43 L88 62 L98 76 M72 43 L78 64" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
calf:`<svg viewBox="0 0 120 90"><circle cx="60" cy="16" r="7" fill="#5e7f67"/><path d="M60 23 L60 49 L48 73 M60 49 L72 73 M48 73 L44 78 M72 73 L78 77" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
pulldown:`<svg viewBox="0 0 120 90"><path d="M25 12 H95" stroke="#5e7f67" stroke-width="5"/><circle cx="60" cy="29" r="7" fill="#5e7f67"/><path d="M60 36 L60 58 M60 40 L38 21 M60 40 L82 21 M60 58 L48 78 M60 58 L72 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
row:`<svg viewBox="0 0 120 90"><circle cx="48" cy="26" r="7" fill="#5e7f67"/><path d="M48 33 L56 52 L42 70 M56 52 L72 69 M53 40 L78 45" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M79 45 L103 45" stroke="#5e7f67" stroke-width="3"/></svg>`,
bench:`<svg viewBox="0 0 120 90"><rect x="20" y="57" width="75" height="8" rx="4" fill="#dfeae1"/><circle cx="38" cy="48" r="6" fill="#5e7f67"/><path d="M44 50 L67 52 M53 49 L47 30 M63 50 L70 29 M67 52 L84 65" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
shoulder:`<svg viewBox="0 0 120 90"><circle cx="60" cy="28" r="7" fill="#5e7f67"/><path d="M60 35 L60 58 M60 40 L42 23 M60 40 L78 23 M60 58 L50 78 M60 58 L70 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
lateral:`<svg viewBox="0 0 120 90"><circle cx="60" cy="24" r="7" fill="#5e7f67"/><path d="M60 31 L60 56 M60 38 L30 38 M60 38 L90 38 M60 56 L48 78 M60 56 L72 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
curl:`<svg viewBox="0 0 120 90"><circle cx="60" cy="23" r="7" fill="#5e7f67"/><path d="M60 30 L60 56 M60 38 L44 48 L39 36 M60 38 L76 48 L81 36 M60 56 L49 78 M60 56 L71 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
triceps:`<svg viewBox="0 0 120 90"><path d="M80 10 V38" stroke="#5e7f67" stroke-width="3"/><circle cx="56" cy="24" r="7" fill="#5e7f67"/><path d="M56 31 L56 56 M56 39 L72 39 L78 55 M56 56 L45 78 M56 56 L68 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
plank:`<svg viewBox="0 0 120 90"><circle cx="30" cy="45" r="6" fill="#5e7f67"/><path d="M36 47 L72 52 L96 58 M49 49 L38 65 M78 53 L88 68" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
rdl:`<svg viewBox="0 0 120 90"><circle cx="52" cy="20" r="7" fill="#5e7f67"/><path d="M52 27 L62 46 L82 55 M62 46 L53 76 M62 46 L73 76 M60 38 L78 55" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
sumo:`<svg viewBox="0 0 120 90"><circle cx="60" cy="18" r="7" fill="#5e7f67"/><path d="M60 25 L60 47 M60 34 L60 49 M60 47 L38 70 L25 78 M60 47 L82 70 L95 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="55" y="36" width="10" height="13" rx="3" fill="#5e7f67"/></svg>`,
legcurl:`<svg viewBox="0 0 120 90"><rect x="20" y="50" width="55" height="8" rx="4" fill="#dfeae1"/><circle cx="35" cy="42" r="6" fill="#5e7f67"/><path d="M41 45 L64 52 L82 42 M64 52 L79 66" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
revlunge:`<svg viewBox="0 0 120 90"><circle cx="56" cy="17" r="7" fill="#5e7f67"/><path d="M56 24 L56 45 L72 60 L92 75 M56 45 L40 61 L24 61" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
onerow:`<svg viewBox="0 0 120 90"><rect x="52" y="58" width="46" height="7" rx="3" fill="#dfeae1"/><circle cx="47" cy="28" r="7" fill="#5e7f67"/><path d="M47 35 L60 49 L80 54 M56 44 L38 54 L30 72 M60 49 L55 73" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
incline:`<svg viewBox="0 0 120 90"><path d="M25 65 L70 42" stroke="#dfeae1" stroke-width="10"/><circle cx="48" cy="51" r="6" fill="#5e7f67"/><path d="M54 49 L70 44 M58 47 L54 29 M66 45 L72 27 M70 44 L88 62" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
hammer:`<svg viewBox="0 0 120 90"><circle cx="60" cy="23" r="7" fill="#5e7f67"/><path d="M60 30 L60 56 M60 38 L45 50 M60 38 L75 50 M60 56 L49 78 M60 56 L71 78" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="39" y="48" width="8" height="13" rx="2" fill="#5e7f67"/><rect x="73" y="48" width="8" height="13" rx="2" fill="#5e7f67"/></svg>`,
crunch:`<svg viewBox="0 0 120 90"><circle cx="38" cy="44" r="6" fill="#5e7f67"/><path d="M44 46 Q58 39 70 52 M70 52 L86 69 M70 52 L55 69" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
cardio:`<svg viewBox="0 0 120 90"><circle cx="50" cy="20" r="7" fill="#5e7f67"/><path d="M50 27 L56 45 L40 60 L25 77 M56 45 L77 57 L93 75 M53 34 L73 29" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M15 80 H106" stroke="#5e7f67" stroke-width="4"/></svg>`,
walk:`<svg viewBox="0 0 120 90"><circle cx="56" cy="20" r="7" fill="#5e7f67"/><path d="M56 27 L56 48 L43 63 L34 78 M56 48 L71 61 L82 77 M54 35 L72 42" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
mobility:`<svg viewBox="0 0 120 90"><circle cx="60" cy="20" r="7" fill="#5e7f67"/><path d="M60 27 L60 53 M60 35 L35 24 M60 35 L85 24 M60 53 L42 76 M60 53 L78 76" stroke="#34463a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M28 18 Q20 30 29 39 M92 18 Q100 30 91 39" stroke="#5e7f67" stroke-width="3" fill="none"/></svg>`
};

let day=localStorage.getItem("day")||"Ter", timer=null, remain=90, view="treino";
const key=(d,i,s,t)=>`${t}_${d}_${i}_${s}`;

function seriesCount(text){let a=parseInt(text);return isNaN(a)?1:a}
function renderTabs(){const el=document.querySelector("#tabs");el.innerHTML="";Object.keys(workouts).forEach(d=>{let b=document.createElement("button");b.className="tab "+(d===day?"active":"");b.textContent=d;b.onclick=()=>{day=d;localStorage.setItem("day",d);render()};el.appendChild(b)})}

function render(){
 renderTabs(); renderWorkout(); renderHistory();
}
function renderWorkout(){
 const w=workouts[day]; document.querySelector("#heroTitle").textContent=w.title; document.querySelector("#heroDesc").textContent=w.desc;
 document.querySelector("#warm").textContent=w.warm; document.querySelector("#count").textContent=w.ex.length;document.querySelector("#mins").textContent="~"+w.time;
 const list=document.querySelector("#list"); list.innerHTML="";
 let completed=0;
 w.ex.forEach((e,i)=>{
   const done=localStorage.getItem(key(day,i,0,"exercise"))==="1"; if(done)completed++;
   const n=seriesCount(e[2]); let rows="";
   for(let s=1;s<=n;s++){
     const kg=localStorage.getItem(key(day,i,s,"kg"))||"", reps=localStorage.getItem(key(day,i,s,"reps"))||"", sd=localStorage.getItem(key(day,i,s,"done"))==="1";
     rows+=`<div class="seriesRow"><div class="n">${s}</div><input inputmode="decimal" placeholder="kg" value="${kg}" onchange="save('${day}',${i},${s},'kg',this.value)"><input inputmode="numeric" placeholder="reps" value="${reps}" onchange="save('${day}',${i},${s},'reps',this.value)"><button class="seriesDone ${sd?'on':''}" onclick="toggleSeries('${day}',${i},${s},${n})">${sd?'✓':'○'}</button></div>`;
   }
   let c=document.createElement("div"); c.className="exercise "+(done?"done":"");
   c.innerHTML=`<div class="exTop"><div class="illus">${svgMap[e[5]]||svgMap.mobility}</div><div class="exName"><h3>${e[0]}</h3><div class="small">${e[1]}</div></div><div class="check" onclick="toggleExercise('${day}',${i})">${done?'✓':''}</div></div>
   <div class="chips"><span class="chip">${e[2]} séries</span><span class="chip">${e[3]} reps</span><span class="chip">${e[4]} descanso</span></div>
   <div class="how">${e[6]}</div><div class="series">${rows}</div>
   <button class="action" onclick="startRest('${e[4]}')">▶ Iniciar descanso</button>`;
   list.appendChild(c);
 });
 let p=Math.round(completed/w.ex.length*100);document.querySelector("#pct").textContent=p+"%";document.querySelector("#bar").style.width=p+"%";
}
function save(d,i,s,t,v){localStorage.setItem(key(d,i,s,t),v)}
function toggleSeries(d,i,s,n){
 let k=key(d,i,s,"done"), on=localStorage.getItem(k)==="1";localStorage.setItem(k,on?"0":"1");
 if(!on){startTimer(90)}
 // auto-complete exercise if all sets done
 let all=true;for(let x=1;x<=n;x++) if(localStorage.getItem(key(d,i,x,"done"))!=="1") all=false;
 localStorage.setItem(key(d,i,0,"exercise"),all?"1":"0");renderWorkout();
}
function toggleExercise(d,i){let k=key(d,i,0,"exercise"),on=localStorage.getItem(k)==="1";localStorage.setItem(k,on?"0":"1");renderWorkout()}
function parseRest(txt){if(txt.includes("120"))return 120;if(txt.includes("90"))return 90;if(txt.includes("75"))return 75;if(txt.includes("60"))return 60;return 90}
function startRest(txt){startTimer(parseRest(txt))}
function startTimer(sec){clearInterval(timer);remain=sec;paint();timer=setInterval(()=>{remain--;paint();if(remain<=0){clearInterval(timer);navigator.vibrate?.([200,100,200])}},1000)}
function paint(){let m=Math.floor(remain/60),s=remain%60;document.querySelector("#timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")}
function resetTimer(){clearInterval(timer);remain=90;paint()}
function finishWorkout(){
 const w=workouts[day], rec={date:new Date().toISOString(),day,title:w.title,ex:w.ex.map((e,i)=>({name:e[0],sets:Array.from({length:seriesCount(e[2])},(_,j)=>({kg:localStorage.getItem(key(day,i,j+1,"kg"))||"",reps:localStorage.getItem(key(day,i,j+1,"reps"))||""}))}))};
 let h=JSON.parse(localStorage.getItem("history")||"[]");h.unshift(rec);localStorage.setItem("history",JSON.stringify(h.slice(0,50)));
 alert("Treino salvo no histórico."); renderHistory();
}
function renderHistory(){
 let h=JSON.parse(localStorage.getItem("history")||"[]"), box=document.querySelector("#history");box.innerHTML="";
 if(!h.length){box.innerHTML='<div class="note">Nenhum treino salvo ainda.</div>';return}
 h.slice(0,8).forEach(x=>{let d=new Date(x.date);box.innerHTML+=`<div class="historyItem"><div><b>${x.title}</b><div class="small">${d.toLocaleDateString('pt-BR')} • ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div></div><div>✓</div></div>`})
}
function clearWeek(){if(confirm("Limpar apenas as marcações de conclusão? Cargas e histórico serão mantidos.")){Object.keys(workouts).forEach(d=>workouts[d].ex.forEach((e,i)=>{localStorage.removeItem(key(d,i,0,"exercise"));for(let s=1;s<=seriesCount(e[2]);s++)localStorage.removeItem(key(d,i,s,"done"))}));renderWorkout()}}
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();window.installPrompt=e;document.querySelector("#installHint").classList.remove("hidden")});
async function installApp(){if(window.installPrompt){window.installPrompt.prompt();await window.installPrompt.userChoice}}
render();paint();
