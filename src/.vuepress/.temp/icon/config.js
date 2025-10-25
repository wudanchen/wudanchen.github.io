import { hasGlobalComponent } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.22/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.115_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vuepress+bu_a991a029c6b2cafac0630bf77dac817e/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
