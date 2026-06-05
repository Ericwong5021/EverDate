export type AnniversaryType = "wedding" | "dating" | "birthday" | "other";

export interface Anniversary {
  id: string;
  date: string;
  partnerName: string;
  type: AnniversaryType;
  createdAt: string;
}

export const ANNIVERSARY_TYPE_LABELS: Record<AnniversaryType, string> = {
  wedding: "结婚纪念日",
  dating: "恋爱日",
  birthday: "生日",
  other: "其他",
};

export const ANNIVERSARY_TYPE_OPTIONS: { value: AnniversaryType; label: string }[] = [
  { value: "wedding", label: "结婚纪念日" },
  { value: "dating", label: "恋爱日" },
  { value: "birthday", label: "生日" },
  { value: "other", label: "其他" },
];
