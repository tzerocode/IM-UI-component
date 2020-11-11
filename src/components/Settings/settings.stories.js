import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => <Settings />;

export const WithoutDescription = () => (
  <SettingsItem label="这是一个没有描述的设置项" />
);

export const WithDescription = () => (
  <SettingsItem label="这是一个有描述的设置项" description="这是设置描述项" />
);

export const WithMenu = () => (
  <SettingsItem label="有子菜单的设置项目" type="menu" />
);
