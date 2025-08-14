var posts=["2025/08/08/第一期：关于如何安装使用HailinMusicPlayer指南/","2025/08/08/这是另一篇新的博文/","2025/08/07/这是一篇凑数博文/","2025/08/06/这是一篇新的博文/","2025/08/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };