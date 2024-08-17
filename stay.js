
setInterval(()=>{
  if(`${document?.title}`.includes('👾')){return;}
  (document??{}).title = `👾 ${document?.title}`;
},100);

const wiki=setInterval(()=>{
  if(!~location.host.search(/wiki|pedia/i) && window == window.top){return;}
  [...document.querySelectorAll('video')].forEach(x=>x.remove());
},100);


const CodeWars = setInterval(()=>{
 if(location.host!='www.codewars.com'){return;}
         document.body.style.filter='hue-rotate(50deg)';
                document.querySelectorAll('[data-controller="solution-group"]:has([href*="JavaScripts"].font-semibold) [data-label="clever"]:not(.is-voted)').forEach(x=>x.click());
                document.querySelectorAll('[data-controller="solution-group"]:has([href*="TypeScripts"].font-semibold) [data-label="clever"]:not(.is-voted)').forEach(x=>x.click());
                document.querySelectorAll('.vote-assessment>li[data-value="1"]:not(.is-active) a.btn').forEach(x=>x.click());
},1000);

const googleAds = setInterval(()=>{
    let selectors = `[id*="google_ads"],
    [class*="google_ads"]`;
    if(!document.querySelector(`[googleads4style]`)){
    let s = document.createElement('style');
    s.innerText = `
    ${selectors}
    {
      display:none;
      visibility:hidden;
      opacity:0;
    }
    `;
    s.setAttribute(`googleads4style`,true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
  
},100);


function hideSelection(name,selectors){
  if(!~location.host.search(name)){return;}
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
    s.setAttribute(`${sname}4style`,true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
}

const GeeksForGeeks=setInterval(()=>{
   hideSelection('www.geeksforgeeks.org',`.cookie-text,
    [class*="avp"],
    [class*="commercial"],
    video,
    [id*="google_ads"],
    .widget-area`);
},100);

const Medium=setInterval(()=>{
  if(location.host!='medium.com'){return;}
  document?.querySelector?.('[data-testid="close-button"]')?.click?.();
},100);

const w3schools=setInterval(()=>{
     hideSelection('www.w3schools.com',`[id*="adngin"],
     .sidesection`);
},100);
