import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the title", () => {
    render(<Home />);
    expect(screen.getByText("EverDate")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Home />);
    expect(screen.getByText("让每个纪念日都不被遗忘")).toBeInTheDocument();
  });
});
