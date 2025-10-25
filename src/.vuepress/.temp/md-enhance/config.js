import CodeDemo from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.9_078c5f78b6e7df01e49936c2d2e29535/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.9_078c5f78b6e7df01e49936c2d2e29535/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
