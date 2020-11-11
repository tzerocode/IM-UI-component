import React from "react";
import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const H1 = () => <Heading level={1}>这是标题1</Heading>;
export const H2 = () => <Heading level={2}>这是标题2</Heading>;
export const H3 = () => <Heading level={3}>这是标题3</Heading>;
export const H4 = () => <Heading level={4}>这是标题4</Heading>;
export const H5 = () => <Heading level={5}>这是标题5</Heading>;
export const H6 = () => <Heading level={6}>这是标题6</Heading>;
