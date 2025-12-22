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
          description: "The code itself embodies a dialectic, and open source stands as the foundation of truth.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "It is a journey through the realm of code, where each line refines itself like an iterating function, debugging the errors of ignorance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Knowledge is not a mere algorithm to be solved, but a quest for truth.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "GeekFx is more than a name; it represents a passion for technology and growth. From &quot;F(eng)&quot; to &quot;X(ing),&quot; from &quot;Geek&quot; to &quot;Fx,&quot; it embodies a bold journey of continuous innovation and progress, reflecting an unyielding spirit of advancement in technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-rtx-5060-ti-安装-tensorflow",
      
        title: "RTX 5060 Ti 安装 TensorFlow",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/RTX-5060-Ti-%E5%AE%89%E8%A3%85-TensorFlow/";
        
      },
    },{id: "post-ubuntu-22-04-安装-mysql",
      
        title: "Ubuntu 22.04 安装 MySQL",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/Ubuntu-22.04-%E5%AE%89%E8%A3%85-MySQL/";
        
      },
    },{id: "post-ubuntu-22-04-macos-monterey-主题",
      
        title: "Ubuntu 22.04 MacOS Monterey 主题",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/Ubuntu-22.04-MacOS-Monterey-%E4%B8%BB%E9%A2%98/";
        
      },
    },{id: "post-casia-webmaskedface-模拟佩戴口罩人脸数据集",
      
        title: "CASIA-WebMaskedFace 模拟佩戴口罩人脸数据集",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/CASIA-WebMaskedFace-%E6%A8%A1%E6%8B%9F%E4%BD%A9%E6%88%B4%E5%8F%A3%E7%BD%A9%E4%BA%BA%E8%84%B8%E6%95%B0%E6%8D%AE%E9%9B%86/";
        
      },
    },{id: "post-latex-workshop-配置信息",
      
        title: "LaTeX Workshop 配置信息",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/LaTeX-Workshop-%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF/";
        
      },
    },{id: "post-关于linux下latex无法找到已安装字体的问题与解决",
      
        title: "关于Linux下LaTeX无法找到已安装字体的问题与解决",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E5%85%B3%E4%BA%8ELinux%E4%B8%8BLaTeX%E6%97%A0%E6%B3%95%E6%89%BE%E5%88%B0%E5%B7%B2%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93%E7%9A%84%E9%97%AE%E9%A2%98%E4%B8%8E%E8%A7%A3%E5%86%B3/";
        
      },
    },{id: "post-ubuntu-21-04-使用命令行分配静态ip地址",
      
        title: "Ubuntu 21.04 使用命令行分配静态IP地址",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/Ubuntu-21.04-%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%88%86%E9%85%8D%E9%9D%99%E6%80%81IP%E5%9C%B0%E5%9D%80/";
        
      },
    },{id: "post-批量下载youtube播放列表-playlist-视频-字幕",
      
        title: "批量下载YouTube播放列表（playlist）视频、字幕",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BDYouTube%E6%92%AD%E6%94%BE%E5%88%97%E8%A1%A8-playlist-%E8%A7%86%E9%A2%91-%E5%AD%97%E5%B9%95/";
        
      },
    },{id: "post-关于-rnn-循环神经网络的反向传播求导",
      
        title: "关于 RNN 循环神经网络的反向传播求导",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E5%85%B3%E4%BA%8E-RNN-%E5%BE%AA%E7%8E%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%9A%84%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD%E6%B1%82%E5%AF%BC/";
        
      },
    },{id: "post-向量-矩阵和张量的导数",
      
        title: "向量、矩阵和张量的导数",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E5%90%91%E9%87%8F-%E7%9F%A9%E9%98%B5%E5%92%8C%E5%BC%A0%E9%87%8F%E7%9A%84%E5%AF%BC%E6%95%B0/";
        
      },
    },{id: "post-关于-softmax-回归的反向传播求导数过程",
      
        title: "关于 Softmax 回归的反向传播求导数过程",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E5%85%B3%E4%BA%8E-Softmax-%E5%9B%9E%E5%BD%92%E7%9A%84%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD%E6%B1%82%E5%AF%BC%E6%95%B0%E8%BF%87%E7%A8%8B/";
        
      },
    },{id: "post-银行家算法-求所有安全序列",
      
        title: "银行家算法-求所有安全序列",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%95-%E6%B1%82%E6%89%80%E6%9C%89%E5%AE%89%E5%85%A8%E5%BA%8F%E5%88%97/";
        
      },
    },{id: "post-添加windows-10开机启动项-no-hyper-v",
      
        title: "添加Windows 10开机启动项：No Hyper-V",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E6%B7%BB%E5%8A%A0Windows-10%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8%E9%A1%B9-No-Hyper-V/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65%65%6B%6A%6B%66%78@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jkfx", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/geekfx", "_blank");
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
          window.open("https://telegram.me/geek_fx", "_blank");
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
