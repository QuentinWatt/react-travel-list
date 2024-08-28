import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  vi.mock("./components/navigation/Navigation", () => ({
    default: () => <div>Mocked Navigation</div>,
  }));

  vi.mock("./components/footer/Footer", () => ({
    default: () => <div>Mocked Footer</div>,
  }));

  it("Renders the app", () => {
    render(<App />);
    expect(screen.getByText(/Mocked Navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Footer/i)).toBeInTheDocument();
  });
});
