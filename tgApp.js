const tg = window.Telegram.WebApp;
const themeParams = tg.themeParams;

tg.ready()

tg.expand()

if (tg.colorScheme === "dark") {
  document.documentElement.style.setProperty('--text-color', '#F8EDED');
} else if (tg.colorScheme === "light") {
  document.documentElement.style.setProperty('--text-color', '#FF8225');
}
