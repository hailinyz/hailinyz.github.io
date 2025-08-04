var posts=["undefined/这是另一篇新的博文/","undefined/这是一篇新的博文/","undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };