import { render } from "@testing-library/react";
import Feature from "./Feature";

// Smoke test
test("Feature renders without crashing", () => {
  render(<Feature />);
});

// Snapshot test
describe("Feature Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Feature />);
    expect(asFragment()).toMatchSnapshot();
  });
});
