import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import "story.css";

addDecorator((stroyFn) => (
  <ThemeProvider theme={theme}>{stroyFn()}</ThemeProvider>
));

addParameters({
  options: {
    showRoutes: true,
  },
});
