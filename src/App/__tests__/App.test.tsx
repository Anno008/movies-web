import React from "react";

import { render, waitFor } from "@testing-library/react";

import App from "~/App";

describe("App tests", () => {
  it("Should render app", async () => {
    const { baseElement } = render(<App />);

    await waitFor(() => {
      expect(baseElement).toBeInTheDocument();
    });
  });
});
