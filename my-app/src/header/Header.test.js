import { render, waitFor } from "@testing-library/react";
import Header from "./Header";

// Smoke test
test("Header renders without crashing", () => {
  render(<Header />);
});

// Snapshot test
test("Header matches snapshot", async () => {
  const { asFragment, getByText } = render(<Header />);
  // Wait for the data to be fetched and component to be updated
  await waitFor(() => {
    expect(getByText(/Transforming Lessons/i)).toBeInTheDocument();
  });

  expect(asFragment()).toMatchSnapshot();
});
