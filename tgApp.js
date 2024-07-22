const tg = window.Telegram.WebApp;
const themeParams = tg.themeParams;

tg.ready()

tg.expand()

if(tg.colorScheme === "dark"){
  themeParams.text_color = '#F8EDED'
}
else if(tg.colorScheme === "light"){
  themeParams.text_color = '#FF8225'
}
