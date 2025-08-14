var posts=["2025/08/08/第一期：关于如何下载 HailinMusicPlayer 以及安装使用指南/","2025/08/08/第二期：HailinMusicPlayer 使用指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };