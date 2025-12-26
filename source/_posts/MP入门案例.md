---
title: MP入门案例
cover: https://tc.hailin.ip-ddns.com/file/blog/1763570287688_MP封面.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2025-08-08 12:00:00
updated: 2025-08-14 16:06:00
tags:
 - 微服务
 - MyBatisPlus
 - Java
categories:
 - MyBatisPlus
keywords: 读书笔记,思考,成长
description: 分享最近读的一本书的感悟和思考
top: 
top_img:
comments: true
toc: true
toc_number: true
toc_style_simple: false
copyright: true
copyright_author: 海林小盆友
copyright_author_href: https://blog.anheyu.com/
copyright_url: https://hailinyz.github.io/
copyright_info: 本文采用 CC BY-NC-SA 4.0 许可协议
mathjax: false
katex: false
aplayer: false
highlight_shrink: false
aside: true
ai: false
---
<!-- <div class="video-container">[视频内嵌代码]</div>
<style>.video-container { position: relative; padding-top: 56.25%; } .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style> -->

# MP入门案例

## 为什么使用MP

**MP即==MyBatisPlus==**，可以对Mybatis进行改造，化繁为简。

``` java
public interface UserMapper {

    void saveUser(User user);
    
    void deleteUser(Long id);
    
    void updateUser(User user);
    
    User queryUserById(@Param("id") Long id);
    
    List<User> queryUserByIds(@Param("ids") List<Long> ids);
}
```

- 这些SQL语句对应的xml文件虽然不难，但是**繁琐**

## 怎么使用MP呢

1.  引入MP**依赖**
    MP官方提供了starter，其中集成了Mybatis和MP的所有功能，并且实现了自动装配的效果。
    因此我们可以用MybatisPlus代替Mybatis的starter:

``` xml
<!--MybatisPlus--> 
<dependency> 
    <groupId>com.baomidou</groupId> 
    <artifactId>mybatis-plus-boot-starter</artifactId> 
    <version>3.5.3.1</version> 
</dependency>
```

2.  定义Mapper
    自定义的Mapper继承MybatisPlus提供的BeanMapper接口：
    **注意：在继承的时候要注意实体类为你的实体类的类型，只有这样才知道你的增删改查操作的是哪个实体**

``` java
public interface UserMapper extends BaseMapper<User> {

}
```

继承之后这些方法就都可以直接用了
![700](MP%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B-media/54632977a3a8c3f5a2bb8158be71710a4a3c994d.png)
