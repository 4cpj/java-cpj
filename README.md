# React-cpj

> 一个基于Next.js的react技术栈PC博客

> 项目github地址:[https://github.com/4cpj/react-cpj]

> 如果觉得做得还不错 , 或者项目源码对您有帮助 , 希望您小抬右手到右上角点一个star , 您的支持是作者长期更新维护的动力^_^


## 起步
> npm install

> npm run dev


## 目录
```
|
| |
| |—— action
| |    |____ index.js redux中Action
| |
| |—— components 展示组件
| |    |____ HeaderBar : 头部
| |    |____ Search : 搜索
| |    |____ Button : 按钮
| |
| |—— Containers 容器
| |    |____ app.js : 销毁mixin
| |
| |—— page
| |    |____ _document.js : 全局的头部信息
| |    |____ index.js : 首页
| |    |____ me.js : 用户信息
| |
| |—— reducers
| |    |____ index.js rootReducer
| |    |____ userInfoReducer.js  用户的Reducer
| |—— static
| |    |____ 存放图片，字体库
| |—— initialState.js : 初始化的State
| |—— store.js : store
|
|__ server.js : node服务

```

建议在chrome浏览器的移动端模式下浏览
