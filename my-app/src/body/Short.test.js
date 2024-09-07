import { render, waitFor } from "@testing-library/react";
import Short from "./Short";

// Smoke test
test("Short render without crashing", () => {
  render(<Short />);
});

// Snapshot test
describe("Short Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Short />);
    expect(asFragment()).toMatchSnapshot();
  });
});
