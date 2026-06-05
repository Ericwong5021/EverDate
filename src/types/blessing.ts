export type BlessingStyle = "romantic" | "warm" | "humorous" | "literary" | "minimal";

export interface BlessingRequest {
  story: string;
  style: BlessingStyle;
}

export interface BlessingResponse {
  blessing: string;
  style: BlessingStyle;
}

export const BLESSING_STYLE_LABELS: Record<BlessingStyle, string> = {
  romantic: "浪漫",
  warm: "温馨",
  humorous: "幽默",
  literary: "文艺",
  minimal: "简约",
};

export const BLESSING_STYLE_OPTIONS: {
  value: BlessingStyle;
  label: string;
  description: string;
}[] = [
  { value: "romantic", label: "浪漫", description: "深情款款，充满爱意" },
  { value: "warm", label: "温馨", description: "温暖人心，感人至深" },
  { value: "humorous", label: "幽默", description: "轻松有趣，欢笑相伴" },
  { value: "literary", label: "文艺", description: "诗意盎然，文采斐然" },
  { value: "minimal", label: "简约", description: "简洁真挚，言简意赅" },
];
