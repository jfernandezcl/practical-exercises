import React from "react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  //test("should work", () => {
  // render(<App />);

  // expect(screen.getByText("Videojuegos")).toBeDefined();
  //});
  test("should add item and remove them", () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();
  });
});
