import { render } from "@testing-library/react";
import Calendly from "./Calendly";

// Smoke test
test("Calendly renders without crashing", () => {
  render(<Calendly />);
});

// Snapshot test
describe("Calendly Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Calendly />);
    expect(asFragment()).toMatchSnapshot();
  });
});
