import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => {
      const params: Record<string, string> = {
        title: "我们的纪念日",
        date: "2025-02-14",
        a: "小明",
        b: "小红",
        type: "恋爱纪念日",
      };
      return params[key] ?? null;
    },
  }),
}));

describe("Home Page", () => {
  it("renders the partner names", () => {
    render(<Home />);
    expect(screen.getByText("小明 & 小红")).toBeInTheDocument();
  });

  it("renders the anniversary type badge", () => {
    render(<Home />);
    expect(screen.getByText("恋爱纪念日")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Home />);
    expect(screen.getByText("我们的纪念日")).toBeInTheDocument();
  });

  it("renders the EverDate footer", () => {
    render(<Home />);
    expect(screen.getByText("EverDate")).toBeInTheDocument();
  });
});
