import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CountrySearch from "./CountrySearch";
import axios from "axios";

vi.mock("axios");

describe("CountrySearch", () => {
  it("Has an input element", () => {
    render(<CountrySearch />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it("Calls axios when typing", async () => {
    const mockResponse = { data: [{ name: { common: "South Africa" } }] };
    axios.get = vi.fn().mockResolvedValueOnce(mockResponse);

    render(<CountrySearch />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "South Africa" },
    });

    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining("South Africa")
      )
    );
  });

  it("Shows the dropdown overlay with results", async () => {
    const mockResponse = {
      data: [
        { name: { common: "South Africa" } },
        { name: { common: "South Korea" } },
      ],
    };
    axios.get = vi.fn().mockResolvedValueOnce(mockResponse);

    render(<CountrySearch />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "South" },
    });

    await waitFor(() => {
      expect(screen.getByText(/South Africa/i)).toBeInTheDocument();
      expect(screen.getByText(/South Korea/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Add/i)).toHaveLength(2);
    });
  });
});
