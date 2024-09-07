import { render } from "@testing-library/react";
import Footer from "./Footer";

// Smoke test
test("Footer renders without crashing", () => {
  render(<Footer />);
});

// Snapshot test
describe("Footer Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
