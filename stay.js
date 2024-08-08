
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


const GeeksForGeeks=setInterval(()=>{
   let selectors = `.cookie-text,
    [class*="avp"],
    [class*="commercial"],
    video,
    [id*="google_ads"],
    .widget-area`;
  if(location.host!='www.geeksforgeeks.org'){return;}
  if(!document.querySelector('[geeks4style]')){
    let s = document.createElement('style');
    s.innerText = `
    ${selectors}
    {
      display:none;
      visibility:hidden;
      opacity:0;
    }
    `;
    s.setAttribute('geeks4style',true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
},100);

const Medium=setInterval(()=>{
   let selectors = `asdfasdf`;
  if(location.host!='medium.com'){return;}
  if(!document.querySelector('[medium4style]')){
    let s = document.createElement('style');
    s.innerText = `
    ${selectors}
    {
      display:none;
      visibility:hidden;
      opacity:0;
    }
    `;
    s.setAttribute('medium4style',true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
  document?.querySelector?.('[data-testid="close-button"]')?.click?.();
},100);

const w3schools=setInterval(()=>{
   let selectors = `[id*="adngin"]
   `;
  if(location.host!='www.w3schools.com'){return;}
  if(!document.querySelector('[w3schools4style]')){
    let s = document.createElement('style');
    s.innerText = `
    ${selectors}
    {
      display:none;
      visibility:hidden;
      opacity:0;
    }
    `;
    s.setAttribute('w3schools4style',true);
    document.body.appendChild(s);
  }
  [...document.querySelectorAll(selectors)].forEach(x=>x?.remove?.());
},100);
