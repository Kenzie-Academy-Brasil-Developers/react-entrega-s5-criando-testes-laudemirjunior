import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers/";

const apiMock = new MockAdapter(api);

describe("Search Page", () => {
  apiMock.onGet("83209648").replyOnce(200, {});
  it("Should search for a Address", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByText("Buscar pelo CEP");

    fireEvent.change(input, { target: { value: 83209648 } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(input).toHaveValue(83209648);
    });
  });
});
