import { hasGlobalComponent } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.96_sass-embedded@1.93.2_sass@1.93.2_vuepress@2.0.0-_7a62e2db31841b99889cd85f3789070a/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.96_sass-embedded@1.93.2_sass@1.93.2_vuepress@2.0.0-_7a62e2db31841b99889cd85f3789070a/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
