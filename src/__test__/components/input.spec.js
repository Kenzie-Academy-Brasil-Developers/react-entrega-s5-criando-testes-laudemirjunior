import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "semantic-ui-react";

describe("input component", () => {
  test("should be able to render the input", () => {
    render(<Input placeholder="Insira o CEP" onChange={() => {}} />);
    expect(screen.getAllByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
