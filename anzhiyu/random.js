var posts=["2025/01/18/这是另一篇新的博文/","2025/01/17/这是一篇凑数博文/","2025/01/16/这是一篇新的博文/","2025/01/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };