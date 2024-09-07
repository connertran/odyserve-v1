import { render, waitFor } from "@testing-library/react";
import App from "./App";

// Smoke test
test("App renders without crashing", () => {
  render(<App />);
});
