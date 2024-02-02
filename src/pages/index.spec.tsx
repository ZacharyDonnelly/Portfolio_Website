import { render } from "@testing-library/react";
import React from "react";
import Homepage from "./";

describe("example page", () => {
  it("renders without errors", async () => {
    expect.assertions(0);

    render(<Homepage />);
  });
});
