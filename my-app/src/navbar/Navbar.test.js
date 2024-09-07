import { render, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";

// Smoke test
test("Navbar renders without crashing", () => {
  render(<Navbar />);
});

// Snapshot test
test("Navbar matches snapshot", async () => {
  const { asFragment, getAllByRole } = render(<Navbar />);
  // Wait for the data to be fetched and component to be updated
  await waitFor(() => {
    expect(getAllByRole("img").length).toBe(2);
  });

  expect(asFragment()).toMatchSnapshot();
});
