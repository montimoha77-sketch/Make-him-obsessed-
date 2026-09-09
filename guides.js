// Master list of all free guides — edit titles/hrefs here and every page's
// switcher menu updates automatically.
const GUIDES = [
  { id: 'texts',        title: '5 "Innocent" Texts That Keep Him Thinking About You', href: 'guide-1-texts.html' },
  { id: 'pullback',      title: 'The "Pull-Back" Protocol', href: 'guide-2-pullback.html' },
  { id: 'conversation',  title: '3 Conversation Starters That Build Connection', href: 'guide-3-conversation.html' },
  { id: 'signs',         title: "7 Hidden Signs He's Falling for You + Red Flags", href: 'guide-4-signs.html' },
  { id: 'blueprint',     title: 'The Attraction Blueprint: 3 Psychological Triggers', href: 'guide-5-blueprint.html' },
  { id: 'ghosted',       title: 'Why He Ghosted: 4 Early Dating Mistakes', href: 'guide-6-ghosted.html' },
  { id: 'highvalue',     title: 'The High-Value Woman Checklist', href: 'guide-7-highvalue.html' }
];

// Builds the dropdown menu contents and highlights whichever guide is
// currently open. Call with the current page's id, e.g. buildGuideMenu('texts').
function buildGuideMenu(currentId){
  const menu = document.getElementById('guideMenu');
  if(!menu) return;
  let html = '<a href="free-guides.html" class="guide-menu-item">📚 All Guides</a><div class="guide-menu-divider"></div>';
  GUIDES.forEach(g => {
    const active = g.id === currentId ? ' active' : '';
    html += '<a href="' + g.href + '" class="guide-menu-item' + active + '">' + g.title + '</a>';
  });
  menu.innerHTML = html;
}

function toggleGuideMenu(){
  const menu = document.getElementById('guideMenu');
  if(menu) menu.classList.toggle('open');
}

// Close the dropdown when tapping/clicking anywhere outside it.
document.addEventListener('click', function(e){
  const wrap = document.getElementById('guideSwitch');
  const menu = document.getElementById('guideMenu');
  if(wrap && menu && !wrap.contains(e.target)) menu.classList.remove('open');
});
