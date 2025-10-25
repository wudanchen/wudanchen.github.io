import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0_25485a46d96e500241a91492ac3c7106/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.115_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_81d444e11599aa063c9807a34ef65c73/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/home/wdc/mycode/vue_blog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.96_markdown-it@14.1.0_sass-embedded@1.93.2_sass@1.93.2_vue_c533a43aeef01e596a6249ff6978099f/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
