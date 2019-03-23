import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import MenuExample from "./MenuExample";

describe("MenuExample", () => {
  test("renders a menu from a list", () => {
    const { getByText } = render(<MenuExample />);
    expect(getByText(/Review/i)).toBeInTheDocument();
    expect(getByText(/Upcoming Events/i)).toBeInTheDocument();
    expect(getByText(/Editorials/i)).toBeInTheDocument();
  });
});
