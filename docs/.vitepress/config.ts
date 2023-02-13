export default  {
    
    title: "Lang UI Doc",
    description: "Round round round.",
    base: '/lang-ui-docs/',
    
    themeConfig: {
        logo: "/favicon.ico", // 对应docs/public中的图片。
        siteTitle: "Lang-UI",
        nav: [
            { text: "Home", link: "/" }, // 对应首页
            {
              text: "项目大纲",
              link: "/intro/teze", // 对应/foo/index.md
            },
            { text: "ToDos", link: "/todos" },
            {
                text: "下拉菜单",
                items: [
                  { text: "如何创建组件库", link: "/example/module" },
                  { text: "项目结构", link: "/work/struct" },
                  { text: "规范", link: "/guide" },
                ],
            },
        
        ],
        sidebar: [
            {
                text: '我们的目标是星辰大海',
                items: [
                    { text: "项目大纲", link: "/intro/teze" },
                    { text: "ToDos", link: "/todos" },
                    { text: "规范", link: "/guide" },
                ],
            },

            {
                text: '工作原理',
                items: [
                    { text: "项目结构", link: "/work/struct" },
                    { text: "模拟API", link: "/work/server" },
            
                ],
            },

            {
                text: '示例',
                items: [
                    { text: "如何创建组件库", link: "/example/module" },
                    { text: "项目结构", link: "/work/struct" },
                    { text: "ToDos", link: "/todos" },
                    { text: "规范", link: "/guide" },

                ],
            }
        ],

    },
};
