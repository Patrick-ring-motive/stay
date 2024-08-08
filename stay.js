
setInterval(()=>{
  if(`${document?.title}`.includes('👾')){return;}
  (document??{}).title = `👾 ${document?.title}`;
},100);



const CodeWars = setInterval(()=>{
 if(location.host!='www.codewars.com'){return;}
         document.body.style.filter='hue-rotate(50deg)';
                document.querySelectorAll('[data-controller="solution-group"]:has([href*="JavaScripts"].font-semibold) [data-label="clever"]:not(.is-voted)').forEach(x=>x.click());
                document.querySelectorAll('[data-controller="solution-group"]:has([href*="TypeScripts"].font-semibold) [data-label="clever"]:not(.is-voted)').forEach(x=>x.click());
                document.querySelectorAll('.vote-assessment>li[data-value="1"]:not(.is-active) a.btn').forEach(x=>x.click());
},1000);

function hideSelection(name,selectors){
  if(location.host!=name){return;}
  const sname = name.replaceAll('.','');
  if(!document.querySelector(`[${sname}4style]`)){
    let s = document.createElement('style');
    s.innerText = `
    ${selectors}
    {
      display:none;
      visibility:hidden;
      opacity:0;
    }
    `;
    s.setAttribute(sname,true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
}

const GeeksForGeeks=setInterval(()=>{
   hideSelection(`.cookie-text,
    [class*="avp"],
    [class*="commercial"],
    video,
    [id*="google_ads"],
    .widget-area`,'www.geeksforgeeks.org');
},100);

const Medium=setInterval(()=>{
  document?.querySelector?.('[data-testid="close-button"]')?.click?.();
},100);

const w3schools=setInterval(()=>{
     hideSelection(`[id*="adngin"]`,'www.w3schools.com');
},100);
