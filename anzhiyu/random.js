var posts=["2025/08/04/这是另一篇新的博文/","2025/08/05/这是一篇凑数博文/","2025/08/03/这是一篇新的博文/","2025/08/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };