import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PageWrapper from "./PageWrapper";

it("renders without crashing", () => {
  const container = document.createElement("container");
  render(<PageWrapper />, container);
  unmountComponentAtNode(container);
});
