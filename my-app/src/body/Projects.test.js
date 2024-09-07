import { render, waitFor } from "@testing-library/react";
import Projects from "./Projects";

// Smoke test
test("Projects render without crashing", () => {
  render(<Projects />);
});

// Snapshot test
describe("Projects Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
  });
});
