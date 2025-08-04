var posts=["wenzhang/这是另一篇新的博文/","wenzhang/这是一篇新的博文/","wenzhang/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };