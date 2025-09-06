var posts=["2025/08/08/第一期：关于如何下载 HailinMusicPlayer 以及安装使用指南/","2025/08/08/第五期：重磅升级！全新「海林影视」闪亮登场/","2025/08/08/第四期：HailinTV-网站进阶指南/","2025/08/08/第二期：HailinMusicPlayer 使用指南/","2025/08/08/第三期：海林影视影视聚合网站使用指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };