# 基于 React-hooks 的项目开发

## 项目依赖使用
- react
- react-redux
- react-router-dom
- redux
- better-scroll
- http-proxy-middleware
- axios
- qs

## 项目视图说明
- 首页
- 登陆注册
- 作品详情
- 课程安排
- 讲师团队

## 项目目录
- node_modules —— 第三方依赖模块
- public —— 公共资源
- src
    - common —— 存放静态资源，例如 components、css、font、images...
    - router —— 路由信息
    - store  —— 仓库
    - views  —— 视图组件
    - app.js —— 组件入口
    - index.js —— 项目入口

## 项目问题总结
- better-scroll 异步请求图片导致不能拖到底部的问题、滚动穿透、阻止原生组件的默认行为。

1. 导致上拉拖动好几次的原因是： 图片请求过来之后到完整的渲染出来之后才会有一个完整的高度，但是 better-scroll 并没有重新加载尺寸。采取的措施是图片 onload 事件等待图片加载完之后调用 refresh 重新计算 better-scroll。

2. 导致滚动穿透原因是：移动端子滚动条滚动带动父级滚动条滚动问题。采取的措施是在页面滚动区域多套一层元素。

3. 使用 better-scroll 会导致阻止原生组件的默认行为，例如阻止移动端 click 事件、a 标签、button 按钮，采取的措施是，取消这些元素的默认行为都不会被阻止，click 改为 touch 事件。

## 讨论
欢迎分享共同做一个技术交流。