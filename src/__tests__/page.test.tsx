import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the title", () => {
    render(<Home />);
    expect(screen.getByText("EverDate 设计系统")).toBeInTheDocument();
  });

  it("renders the color section", () => {
    render(<Home />);
    expect(screen.getByText("色彩系统")).toBeInTheDocument();
  });
});
