export const initLanguageSwitcher = () => {
  const langLinks = document.querySelectorAll('.language__option');

  if (!langLinks.length) {
    return;
  }

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetLang = e.currentTarget.getAttribute('data-lang');
      const targetUrl = e.currentTarget.getAttribute('href');

      if (targetLang) {
        window.localStorage.setItem('preferredLang', targetLang);
      }

      document.body.style.transition = 'opacity 0.4s ease-out';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  });

  const savedLang = window.localStorage.getItem('preferredLang');
  const currentPath = window.location.pathname;

  // 🔥 Секретний соус: перевіряємо, чи ми ВЖЕ в англійській папці
  const isEnglishPage = currentPath.includes('/en/');

  // Якщо юзер обрав 'en' і зараз знаходиться на українській сторінці
  if (savedLang === 'en' && !isEnglishPage) {
    document.body.style.opacity = '0';
    window.location.replace('./en/index.html');
  }
};
