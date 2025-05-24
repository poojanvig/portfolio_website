// Navigation + external links + theme toggle
document.querySelectorAll('.social-button').forEach(btn => {
    btn.addEventListener('click', e => {
      const scrollTarget = btn.dataset.scroll;
      const externalUrl  = btn.dataset.open;
  
      if (scrollTarget) {
        if (scrollTarget === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(scrollTarget)
                  ?.scrollIntoView({ behavior: 'smooth' });
        }
      }
  
      if (externalUrl) {
        window.open(externalUrl, '_blank', 'noopener');
      }
    });
  });
  
  /* ----------  DARK-MODE TOGGLE  ---------- */
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  // Check for saved theme preference or use preferred color scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme or system preference
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }
  
  // Toggle theme on click
  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    
    // Toggle icon between sun and moon
    const icon = themeBtn.querySelector('i');
    if (isDark) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
