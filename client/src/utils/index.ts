import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export const formatDate = (date: string | Date, format = "YYYY年MM月DD日") => {
  return dayjs(date).format(format);
};

export const getDaysUntil = (date: string | Date) => {
  const target = dayjs(date);
  const now = dayjs();
  return target.diff(now, "day");
};

export const getCountdownParts = (date: string | Date) => {
  const target = dayjs(date);
  const now = dayjs();
  const diff = target.diff(now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const getAnniversaryTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    wedding: "结婚纪念日",
    dating: "恋爱纪念日",
    birthday: "生日",
    engagement: "订婚纪念日",
    "first-meet": "初次见面纪念日",
    other: "其他纪念日",
  };
  return labels[type] || type;
};

export const getAnniversaryTypeIcon = (type: string) => {
  const icons: Record<string, string> = {
    wedding: "💒",
    dating: "💕",
    birthday: "🎂",
    engagement: "💍",
    "first-meet": "✨",
    other: "🎉",
  };
  return icons[type] || "🎉";
};

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};
