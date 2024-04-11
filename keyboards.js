import { Markup } from "telegraf/markup";

export const getMainMenu = () => {
  return Markup.keyboard([
    ["Мои задачи", "Добавить задачу"],
    ["Смотивируй меня"],
  ])
    .resize()
    .extra();
};
