(function(){
  var mode='auto';
  try { var saved=localStorage.getItem('zivag-theme'); if(['auto','light','dark'].indexOf(saved)!==-1)mode=saved; } catch(e){}
  var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme=mode==='auto'?(dark?'dark':'light'):mode;
  document.documentElement.dataset.theme=theme;
  document.documentElement.dataset.themeMode=mode;
  document.documentElement.style.colorScheme=theme;
  var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#080e18':'#f5f8fc';
})();
