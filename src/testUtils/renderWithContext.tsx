import React, { ReactNode } from "react";

import { render, RenderResult } from "@testing-library/react";

import AppThemeProvider from "~/providers/AppThemeProvider";

export const renderWithContext = (children: ReactNode): RenderResult => {
  return render(<AppThemeProvider>{children}</AppThemeProvider>);
};
