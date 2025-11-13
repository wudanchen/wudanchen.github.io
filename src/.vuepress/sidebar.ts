import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "cmake 教程",
      icon: "laptop-code",
      prefix: "cmake/",
      link: "cmake/",
      children: "structure",
    },
    {
      text: "cpp 指南",
      icon: "file",
      prefix: "cpp_guide/",
      link: "cpp_guide/",
      children: "structure",
    },

    {
      text: "neovim 指南",
      icon: "file",
      prefix: "neovim/",
      link: "neovim/",
      children: "structure",
    },
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
