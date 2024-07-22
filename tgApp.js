const tg = window.Telegram.WebApp;
const themeParams = tg.themeParams;

tg.ready()

tg.expand()

document.addEventListener("DOMContentLoaded", function() {
  if (themeParams.bg_color === '#ffffff') {
    document.documentElement.style.setProperty('--tg-theme-header-bg-color', 'yellow');
  } else if (themeParams.bg_color === '#000000') {
    document.documentElement.style.setProperty('--tg-theme-header-bg-color', 'red');
  }
});