// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-gemini-网页端显示-出了点问题-请稍后再试-了解详情",
      
        title: "Gemini 网页端显示 `出了点问题 请稍后再试。 了解详情`",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/Gemini-Issue/";
        
      },
    },{id: "post-latex-math-typesetting-guide",
      
        title: "LaTeX Math Typesetting Guide",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/LaTeX-Math-Typesetting-Guide/";
        
      },
    },{id: "post-shortcuts-cheat-sheet",
      
        title: "Shortcuts Cheat Sheet",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Shortcuts-Cheat-Sheet/";
        
      },
    },{id: "post-tmux-user-guides",
      
        title: "tmux User Guides",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/tmux-User-Guides/";
        
      },
    },{id: "post-rtx-5060-ti-安装-tensorflow",
      
        title: "RTX 5060 Ti 安装 TensorFlow",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/RTX-5060-Ti-Install-TensorFlow/";
        
      },
    },{id: "post-ubuntu-22-04-macos-monterey-主题",
      
        title: "Ubuntu 22.04 MacOS Monterey 主题",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/Ubuntu-22.04-MacOS-Monterey-Theme/";
        
      },
    },{id: "post-latex-workshop-配置信息",
      
        title: "LaTeX Workshop 配置信息",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/LaTeX-Workshop-Configuration/";
        
      },
    },{id: "post-向量-矩阵和张量的导数",
      
        title: "向量、矩阵和张量的导数",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/Vector-Matrix-and-Tensor-Derivatives/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%6E%67%72%66%78@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wangrfx", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/wangrfx", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
