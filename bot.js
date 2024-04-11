import TelegramBot from "node-telegram-bot-api";
import { PORT, TOKEN } from "./config.js";
import express from "express";
import { COMMANDS } from "./commands.js";
// const app = express();
// app.listen(PORT, () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
// });
const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});
bot.on("text", async (msg) => {
  try {
    if (msg.text.startsWith("/start")) {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

      if (msg.text.length > 6) {
        const refID = msg.text.slice(7);

        await bot.sendMessage(
          msg.chat.id,
          `Вы зашли по ссылке пользователя с ID ${refID}`
        );
      }
    } else if (msg.text == "/ref") {
      const React = require("react");

      const componentName = () => {
        return <div></div>;
      };

      module.exports = componentName;
      await bot.sendMessage(
        msg.chat.id,
        `${process.env.URL_TO_BOT}?start=${msg.from.id}`
      );
    } else if (msg.text == "/menu") {
      await bot.sendMessage(msg.chat.id, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ["⭐️ Картинка", "⭐️ Видео"],
            ["⭐️ Аудио", "⭐️ Голосовое сообщение"],
          ],
          resize_keyboard: true,
        },
      });
    } else if (msg.text == "/help") {
      await bot.sendMessage(msg.chat.id, `Раздел помощи`);
    } else if (msg.text == "❌ Закрыть меню") {
      await bot.sendMessage(msg.chat.id, "Меню закрыто", {
        reply_markup: {
          remove_keyboard: true,
        },
      });
    } else {
      await bot.sendMessage(msg.chat.id, msg.text);
    }
  } catch (error) {
    console.log(error);
  }
});
