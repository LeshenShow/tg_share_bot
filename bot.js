import { Telegraf } from "telegraf";
import { TOKEN } from "./config";
const Tbot = new Telegraf(TOKEN);

Tbot.start((context) => {
  context.replyWithHTML(
    "Добро пожаловать в <b>to-do list</b>\n\n" +
      "Для добавления задачи необходимо ее <b>написать</b> и отправить боту"
  );
});
Tbot.launch();
