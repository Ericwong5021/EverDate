import { EmailTemplate } from "@/types";

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "classic",
    name: "经典纪念",
    subject: "纪念日快乐",
    body: `亲爱的{name}，

今天是我们的纪念日，我想对你说：

感谢你一直以来的陪伴与支持。每一个与你共度的日子，都是我生命中最珍贵的回忆。

愿我们的爱情像美酒一样，越陈越香。

永远爱你的{sender}`,
    photos: [],
    scheduledAt: "",
    status: "pending",
  },
  {
    id: "romantic",
    name: "浪漫惊喜",
    subject: "特别的日子，特别的你",
    body: `亲爱的{name}，

在这个特别的日子里，我想告诉你：

你是我生命中最美的意外，是我每天醒来的动力。

愿我们的爱情永远甜蜜，愿每一个明天都比今天更美好。

期待与你共度更多美好时光。

爱你的{sender}`,
    photos: [],
    scheduledAt: "",
    status: "pending",
  },
  {
    id: "simple",
    name: "简约温馨",
    subject: "纪念日祝福",
    body: `{name}，

纪念日快乐！

感谢你出现在我的生命中。

{sender}`,
    photos: [],
    scheduledAt: "",
    status: "pending",
  },
  {
    id: "photo",
    name: "照片回忆",
    subject: "我们的回忆",
    body: `亲爱的{name}，

翻看这些照片，仿佛又回到了那些美好的时光。

每一张照片都记录着我们的故事，每一个瞬间都值得珍藏。

让我们继续创造更多美好的回忆。

爱你的{sender}`,
    photos: [],
    scheduledAt: "",
    status: "pending",
  },
];
