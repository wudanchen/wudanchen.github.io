import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "wudcx",
  description: "wudcx blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
