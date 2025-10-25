import { CodeTabs } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.115_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_e9fffbd243c5fbb39346f7e39d9a986b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.115_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_e9fffbd243c5fbb39346f7e39d9a986b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.115_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_e9fffbd243c5fbb39346f7e39d9a986b/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
