export const initLanguageSwitcher = () => {
  const langLinks = document.querySelectorAll('.language__option');

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetLang = e.target.getAttribute('data-lang');
      const targetUrl = e.target.getAttribute('href');

      window.localStorage.setItem('preferredLang', targetLang);

      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  });

  const savedLang = window.localStorage.getItem('preferredLang');
  const currentPath = window.location.pathname;

  const isIndexPage = currentPath === '/' || currentPath.includes('index.html');

  if (savedLang === 'en' && isIndexPage) {
    window.location.replace('/en.html');
  }
};
