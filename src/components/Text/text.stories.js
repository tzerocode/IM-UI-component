import React from "react";
import Text from ".";

export default {
  title: "排版/Text",
  component: Text,
};

export const Default = () => <Text>默认</Text>;

export const Sencondary = () => <Text type="secondary">次要文本</Text>;

export const medium = () => <Text size="medium">medium 大小文本</Text>;

export const LargeAndBold = () => (
  <Text size="large" bold>
    large 大小文本，加粗
  </Text>
);
