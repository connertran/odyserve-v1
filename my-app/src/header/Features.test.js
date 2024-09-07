import { render } from "@testing-library/react";
import Features from "./Features";

// Smoke test
test("Features renders without crashing", () => {
  render(<Features />);
});

// Snapshot test
describe("Features Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Features />);
    expect(asFragment()).toMatchSnapshot();
  });
});
