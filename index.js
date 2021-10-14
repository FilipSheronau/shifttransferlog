const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '2076724821:AAFwn0eGkHjXXLmtSime-Ty--zuXSOdZV_E';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const img = "./img/dog.jfif";
  bot.sendPhoto(chatId, img);  
  console.log(msg);
});


