const publications = [
  {year:2026,tags:['genai','automation'],title:'Spec2Control: Automating PLC/DCS control-logic engineering from natural language requirements with LLMs — a multi-plant evaluation',authors:'Heiko Koziolek; Thilo Braun; Virendra Ashiwal; Sofia Linsbauer; Marthe Ahlgreen Hansen; Karoline Grotterud',venue:'IEEE/ACM 48th International Conference on Software Engineering: Software Engineering in Practice',pages:'566–577',url:'https://scholar.google.com/scholar?q=Spec2Control+Automating+PLC+DCS+control-logic+engineering'},
  {year:2025,tags:['genai','automation'],title:'DriveAIAgent: A Multi-Agent System for Industrial Drive Commissioning and Troubleshooting',authors:'Virendra Ashiwal; Marcus Ritter; Sebastian Palacio; Nicolai Schoch',venue:'IEEE 30th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://scholar.google.com/scholar?q=DriveAIAgent+Multi-Agent+System+Industrial+Drive+Commissioning',id:'pub-2025-driveai'},
  {year:2025,tags:['genai','automation'],title:'The “Engineering Data Funnel”: Knowledge-Enhanced, Agentic-AI-Based Data Processing for Automation Engineering',authors:'Nicolai Schoch; Mohamed Elsheikh; Mario Hoernicke; Nika Strem; Katharina Stark; Sebastian Palacio; Virendra Ashiwal',venue:'IFAC-PapersOnLine 59(25)',pages:'131–136',url:'https://scholar.google.com/scholar?q=Engineering+Data+Funnel+Knowledge-Enhanced+Agentic-AI'},
  {year:2025,tags:['genai','automation'],title:'IO-Automapper: Leveraging LLMs to Bind I/O Signal List Entries to Control Function Blocks in Industrial Automation',authors:'Heiko Koziolek; Virendra Ashiwal; Thilo Braun; Sofia Linsbauer',venue:'IEEE 30th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://scholar.google.com/scholar?q=IO-Automapper+Leveraging+LLMs'},
  {year:2025,tags:['automation'],title:'Identification and Evaluation of Pitfalls in the Migration from IEC 61131-3 to IEC 61499: A Review',authors:'Virendra Ashiwal; Oscar Miguel-Escrig; Bianca Wiesmayr; Alois Zoitl; Julio-Ariel Romero-Pérez',venue:'IEEE Open Journal of the Industrial Electronics Society 6',pages:'575–590',url:'https://scholar.google.com/scholar?q=Identification+evaluation+pitfalls+migration+IEC+61131-3+IEC+61499'},
  {year:2024,tags:['genai','automation'],title:'LLM-Based and Retrieval-Augmented Control Code Generation',authors:'Heiko Koziolek; Sten Grüner; Rhaban Hark; Virendra Ashiwal; Sofia Linsbauer; Nafise Eskandani',venue:'1st International Workshop on Large Language Models for Code (LLM4Code)',pages:'22–29',url:'https://scholar.google.com/scholar?q=LLM-based+retrieval-augmented+control+code+generation'},
  {year:2024,tags:['genai','automation'],title:'Automated Control Logic Test Case Generation Using Large Language Models',authors:'Heiko Koziolek; Virendra Ashiwal; Soumyadip Bandyopadhyay; Chandrika K. R.',venue:'IEEE 29th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://arxiv.org/abs/2405.01874'},
  {year:2024,tags:['security','genai'],title:'LLM-Based Vulnerability Sourcing from Unstructured Data',authors:'Virendra Ashiwal; Sören Finster; Abdallah Dawoud',venue:'IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)',pages:'634–641',url:'https://scholar.google.com/scholar?q=LLM-based+vulnerability+sourcing+unstructured+data'},
  {year:2024,tags:['security'],title:'Better Left Shift Security! Framework for Secure Software Development',authors:'Abdallah Dawoud; Sören Finster; Nicolas Coppik; Virendra Ashiwal',venue:'IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)',pages:'642–649',url:'https://scholar.google.com/scholar?q=Better+Left+Shift+Security+Framework+Secure+Software+Development'},
  {year:2024,tags:['automation'],title:'Comprehensive Framework for Facilitating the Deployment of Distributed On-Premise Analytics Applications in Resource-Constrained Environments',authors:'Nicolai Schoch; Pascal Becker; Virendra Ashiwal; Andrew Habib',venue:'IEEE 20th International Conference on Automation Science and Engineering (CASE)',pages:'1861–1868',url:'https://scholar.google.com/scholar?q=Comprehensive+Framework+Deployment+Distributed+On-Premise+Analytics'},
  {year:2023,tags:['genai','automation'],title:'ChatGPT for PLC/DCS Control Logic Generation',authors:'Heiko Koziolek; Sten Gruener; Virendra Ashiwal',venue:'IEEE 28th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://arxiv.org/abs/2305.15809'},
  {year:2023,tags:['automation'],title:'Run-Time Configuration of the IEC 61499-Based PLC-Service Bus via OPC UA',authors:'Mainak Majumder; Virendra Ashiwal; Alois Zoitl',venue:'IEEE 28th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–4',url:'https://scholar.google.com/scholar?q=Run-time+Configuration+IEC+61499+PLC-Service+Bus+OPC+UA'},
  {year:2022,tags:['automation'],title:'Apache Kafka as a Middleware to Support the PLC-Service Bus Architecture with IEC 61499',authors:'Virendra Ashiwal; Antonio M. Gutierrez; Konstantin Aschbacher; Alois Zoitl',venue:'European Conference on Software Architecture',pages:'62–74',url:'https://scholar.google.com/scholar?q=Apache+Kafka+middleware+PLC-service+bus+IEC+61499'},
  {year:2022,tags:['automation'],title:'Evaluation of Middleware Technologies for the PLC-Service Bus in IEC 61499',authors:'Virendra Ashiwal; Mainak Majumder; Alois Zoitl',venue:'IEEE 27th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–4',url:'https://scholar.google.com/scholar?q=Evaluation+middleware+technologies+PLC-service+bus+IEC+61499'},
  {year:2022,tags:['automation'],title:'Architectural Concepts for IEC 61499-Based Machine Controls: Beyond Normal Operation Handling',authors:'Lisa Sonnleithner; Bianca Wiesmayr; Virendra Ashiwal; Shubham Sharma; Alois Zoitl; Jörg Walter',venue:'IEEE 27th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://scholar.google.com/scholar?q=Architectural+concepts+IEC+61499+machine+controls'},
  {year:2022,tags:['automation'],title:'Implementing a PLC-Service Bus with IEC 61499',authors:'Virendra Ashiwal; Antonio M. Gutierrez; Alois Zoitl',venue:'IEEE 5th International Conference on Industrial Cyber-Physical Systems (ICPS)',pages:'1–7',url:'https://scholar.google.com/scholar?q=Implementing+PLC-Service+bus+IEC+61499'},
  {year:2022,tags:['automation'],title:'Using Modules to Manage the Content of IEC 61499 Type Libraries',authors:'Michael Oberlehner; Virendra Ashiwal; Alois Zoitl; James H. Christensen',venue:'IEEE 20th International Conference on Industrial Informatics (INDIN)',pages:'286–292',url:'https://scholar.google.com/scholar?q=Using+modules+manage+content+IEC+61499+type+libraries'},
  {year:2022,tags:['automation'],title:'Integración de FACTORY I/O y 4DIAC-FORTE para la Validación de Software de Control en la Norma IEC 61499',authors:'Andrés Tendero Vegas; Oscar Miguel Escrig; Julio Ariel Romero Pérez; Bianca Wiesmayr; Virendra Ashiwal; Alois Zoitl',venue:'XLIII Jornadas de Automática',pages:'949–955',url:'https://scholar.google.com/scholar?q=Integracion+FACTORY+IO+4DIAC-FORTE+IEC+61499'},
  {year:2021,tags:['automation'],title:'Messaging Interaction Patterns for a Service Bus Concept of PLC-Software',authors:'Virendra Ashiwal; Alois Zoitl',venue:'IEEE 26th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://scholar.google.com/scholar?q=Messaging+interaction+patterns+service+bus+PLC-software'},
  {year:2021,tags:['automation'],title:'IEC 61499 Distributed Design Patterns',authors:'Lisa Sonnleithner; Bianca Wiesmayr; Virendra Ashiwal; Alois Zoitl',venue:'IEEE 26th International Conference on Emerging Technologies and Factory Automation (ETFA)',pages:'1–8',url:'https://scholar.google.com/scholar?q=IEC+61499+distributed+design+patterns'},
  {year:2020,tags:['automation'],title:'A Service Bus Concept for Modular and Adaptable PLC-Software',authors:'Virendra Ashiwal; Alois Zoitl; Matthias Konnerth',venue:'IEEE 25th International Conference on Emerging Technologies and Factory Automation (ETFA), Vol. 1',pages:'22–29',url:'https://ieeexplore.ieee.org/document/9211908'}
];
const patents = [
  {year:2026,title:'System and Method Based on a Group of LLM-Based Agents for Generation and Enhancement of Engineering-Data-Funnel Outputs',inventors:'Nicolai Schoch; Mohamed Elsheikh; Virendra Ashiwal',number:'US 19/332,302'},
  {year:2025,title:'Method for Generating a Simulation Code to Test a Control Logic Code',inventors:'Heiko Koziolek; Nicolai Schoch; Sten Gruener; Ruomu Tan; Virendra Ashiwal; Reuben Borrison',number:'US 19/092,430'},
  {year:2025,title:'Method for Generating a Control Logic Code for Controlling an Automated Industrial Process',inventors:'Sten Gruener; Heiko Koziolek; Virendra Ashiwal',number:'US 19/086,527'},
  {year:2025,title:'Method for Providing One or More Surrogate Neural Networks for Execution on a Resource-Constrained Device',inventors:'Pascal Becker; Nicolai Schoch; Virendra Ashiwal',number:'US 19/085,187'},
  {year:2025,title:'Method for Obtaining an AI Agent, Methods for Usage of Said AI Agent, Control Apparatus, Automation System, Computer-Readable Medium, and Computer Program Product',inventors:'Virendra Ashiwal; Nicolai Schoch; Pascal Becker',number:'US 19/083,604'},
  {year:2025,title:'Method for Obtaining Domain-Informed ML/AI Model, Method for Analysing and/or Predicting Drive System and/or Drive Apparatus Behavior, Control Apparatus, Drive Application System, and Computer Program Product',inventors:'Chen Song; Virendra Ashiwal; Pascal Becker; Nicolai Schoch',number:'US 19/083,571'},
  {year:2025,title:'Formalized Drive Systems Information Representation for FAIR Data and Supported and Enhanced Analytics Development Facilitation',inventors:'Nicolai Schoch; Virendra Ashiwal; Pascal Becker',number:'US 19/082,378'}
];

const esc=s=>s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const highlightName=s=>esc(s).replace(/Virendra Ashiwal/g,'<strong>Virendra Ashiwal</strong>');
const selectedTitles=new Set([
  'Spec2Control: Automating PLC/DCS control-logic engineering from natural language requirements with LLMs — a multi-plant evaluation',
  'DriveAIAgent: A Multi-Agent System for Industrial Drive Commissioning and Troubleshooting',
  'Identification and Evaluation of Pitfalls in the Migration from IEC 61131-3 to IEC 61499: A Review',
  'LLM-Based and Retrieval-Augmented Control Code Generation',
  'Automated Control Logic Test Case Generation Using Large Language Models',
  'Apache Kafka as a Middleware to Support the PLC-Service Bus Architecture with IEC 61499'
]);
const list=document.querySelector('[data-publication-list]');
const search=document.querySelector('#publication-search');
const searchWrap=document.querySelector('[data-search-wrap]');
const count=document.querySelector('[data-result-count]');
const empty=document.querySelector('[data-empty]');
const toggleAll=document.querySelector('[data-toggle-all]');
let showAll=false;
function renderPublications(){
  const q=search.value.trim().toLowerCase();
  const base=showAll?publications:publications.filter(p=>selectedTitles.has(p.title));
  const visible=base.filter(p=>`${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(q));
  list.innerHTML=visible.map(p=>`<article class="publication-item" ${p.id?`id="${p.id}"`:''}><span class="pub-year">${p.year}</span><div><h3>${esc(p.title)}</h3><p class="authors">${highlightName(p.authors)}</p><p class="venue">${esc(p.venue)} / ${esc(p.pages)}</p></div><a class="pub-link" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(p.title)}">↗</a></article>`).join('');
  count.textContent=visible.length;
  empty.hidden=visible.length!==0;
  toggleAll.textContent=showAll?'[ SHOW SELECTED ]':'[ SHOW ALL 21 ]';
  searchWrap.hidden=!showAll;
}
toggleAll.addEventListener('click',()=>{showAll=!showAll;search.value='';renderPublications();toggleAll.focus()});
search.addEventListener('input',renderPublications);
document.querySelector('[data-clear-filter]').addEventListener('click',()=>{search.value='';renderPublications();search.focus()});
const patentList=document.querySelector('[data-patent-list]');
patentList.innerHTML=patents.map((p,i)=>{const query=encodeURIComponent(`"${p.title}"`);return `<article><span class="record-id">P/${String(i+1).padStart(2,'0')}</span><div><h3>${esc(p.title)}</h3><p>${highlightName(p.inventors)}</p><small>${esc(p.number)} / ${p.year}</small></div><a href="https://patents.google.com/?q=${query}" target="_blank" rel="noopener noreferrer" aria-label="Search for ${esc(p.title)}">↗</a></article>`}).join('');

const views=[...document.querySelectorAll('[data-view]')];
const routes=[...document.querySelectorAll('[data-route]')];
const menu=document.querySelector('[data-menu-toggle]');
const sidebar=document.querySelector('#sidebar');
const scrim=document.querySelector('[data-scrim]');
function closeMenu(){sidebar.classList.remove('open');scrim.classList.remove('open');menu.setAttribute('aria-expanded','false')}
function openRoute(){
  const requested=location.hash.slice(1)||'home';
  const target=views.some(v=>v.dataset.view===requested)?requested:'home';
  views.forEach(v=>v.hidden=v.dataset.view!==target);
  routes.forEach(a=>{const active=a.dataset.route===target;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  document.title=`${target==='home'?'Dr. Virendra Ashiwal':target[0].toUpperCase()+target.slice(1)+' — Virendra Ashiwal'}`;
  closeMenu();
  window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  const heading=document.querySelector(`[data-view="${target}"] h2`);if(heading)heading.focus?.({preventScroll:true});
}
window.addEventListener('hashchange',openRoute);
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';sidebar.classList.toggle('open',!open);scrim.classList.toggle('open',!open);menu.setAttribute('aria-expanded',String(!open))});
scrim.addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

(function(){const t=document.querySelector('[data-theme-toggle]'),r=document.documentElement;let d=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';r.dataset.theme=d;t.addEventListener('click',()=>{d=d==='dark'?'light':'dark';r.dataset.theme=d;t.setAttribute('aria-label',`Switch to ${d==='dark'?'light':'dark'} mode`)})})();
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',async()=>{try{const response=await fetch(button.dataset.download);const blob=await response.blob();const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=button.dataset.filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}catch{window.open(button.dataset.download,'_blank')}}));
document.querySelector('[data-year]').textContent=new Date().getFullYear();
renderPublications();openRoute();
