## 常见问题汇总
**1. CSS Module 和 Vue <style> 的 scoped 属性有啥异同？**

这是个相当好的问题，看的仔细的同学发现项目中都使用的是 CSS Module，没有提 scoped 属性。在这里给大家做下总结：

- 相同点

  两者都是为了解决 CSS 类名相互干扰的问题，也就是大家常说的“作用域”问题。使用两种方案都可以达到类似效果，但是两者的区别也很明显。

- 不同点

  1. CSS Module 是所有组件化框架都支持的技术方案，他不属于某个框架的私有属性。而 scoped 是 Vue 框架的私有属性。
  2. CSS Module 的工作原理直白的讲就是把一个类名做 md5 ，然后在引用的时候直接使用 md5 字符串，进而保证相同的类名根据不同的路径和组件名称得到不同的 md5 值，保证了最终的类名隔离。而 scoped 的做法是做命名空间限制，也就是说每个组件就是一个命名空间，每个命名空间拥有不同的类名（md5）,然后每个下面的类名都会挂在这个命名空间下进而达到隔离。
  3. 对于父组件声明的类名，在子组件内，CSS Module 是不处理的，想用必须显示调用类名($style.类名)，而使用了 scoped 的因为是命名空间的方式，所以子组件依然有效。

大家如有疑问欢迎补充。

**2. 为啥我们的项目中没有用到 render 函数？**

虽然 Vue 在高版本中借鉴了 React 的写法支持了 render 函数，但是大多数项目不需要这样做。关于 render 函数请先看官方的解释 [render函数](https://cn.vuejs.org/v2/guide/render-function.html)。

在此也给大家做下较容易理解的解释：

- Vue 可以使用 template 或者 render 函数管理 HTML 内容，而 template 是常规的做法，因为 render 对开发者的要求比较高，需要对 Vue 的 API 非常了解，不然弄巧成拙。
- 使用 template 所见即所得，再结合预编译工具更容易开发和调试、用最简单的方式完成任务不是很好吗？也更适合团队的需要。
---
### 问题
- vue双向数据绑定原理
> vue采用的是数据劫持结合发布者-订阅者模式的方法，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调
> 首先我们为每个vue属性用Object.defineProperty()实现数据劫持，为每个属性分配一个订阅者集合的管理数组dep；然后在编译的时候在该属性的数组dep中添加订阅者，v-model会添加一个订阅者，{{}}也会，v-bind也会，只要用到该属性的指令理论上都会，接着为input会添加监听事件，修改值就会为该属性赋值，触发该属性的set方法，在set方法内通知订阅者数组dep，订阅者数组循环调用各订阅者的update方法更新视图。
- 前端项目为什么用webpack？
> webpack最核心的功能是打包，使用webpack进行打包，既可以保留单个模块的可维护性，又可以减少http请求，减少页面加载时间，从而增加页面显示速度，让整个应用体验更好！
- webpack dev server实现原理
```
1, dev server其实是借助了express开启了一个服务器，然后设置两个路由的出口，
2, webpack output的出口：默认是 / ，可以通过devServer的字段 publicPath 设置

所以，我可以看出，webpack output其实就是Express的一个router对象，webpack根据入口文件观察相关的文件，并在它们发生变化的时候，重新编译打包，并输出到router对象上，这样我们就可以访问该router拿到最新的资源，不过这个资源是放在内存上的，并不是文件系统上。

3，网页和webpack-dev-server是通过websocket协议互联的。当监听到文件变化的时候，会通过websocket通知网页调用reload接口刷新页面。
```
- rem,em区别
> rem是相对于HTML根元素的字体大小的相对单位，em是相对于父元素字体大小的相对单位
- 当在浏览器输入域名时发生了什么
> 简单来讲：浏览器在通过域名通过dns服务器找到你的服务器外网ip,将http请求发送到你的服务器，在tcp3次握手之后（http下面是tcp/ip），通过tcp协议开始传输数据，你的服务器得到请求后，开始提供服务，接收参数，之后返回你的应答给浏览器，浏览器再通过content-type来解析你返回的内容，呈现给用户。
- 前端路由原理
```
1, 前端路由就是一个前端不同页面的状态管理器，可以不用向后台发送请求，而直接通过前端技术实现多个页面切换的效果
2， HTML5的History API为浏览器的全局history对象增加的扩展方法。一般用来解决ajax请求无法通过回退按钮回到请求前状态的问题。

```
---
**3. Atom 常用插件**

1. Emmet，用来快速生成HTML片段，比如输入ul>li*3可以快速生成

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

[详细地址](https://atom.io/packages/emmet)，[Emmet教程](https://docs.emmet.io/cheat-sheet/)

2. Snippets， 用来处理代码片段的模板输出，[详细地址](https://atom.io/packages/snippets)
3. Tree View，文件浏览器，[详细地址](https://atom.io/packages/tree-view)
4. file icons，文件识别图标，使用这个插件会让你的编辑器显示对应的图标，[详细地址](https://atom.io/packages/file-icons)
5. language-javascript-jsx，jsx语法高亮 ，[详细地址](https://atom.io/packages/language-javascript-jsx)
6. language-vue，vue语法高亮，[详细地址](https://atom.io/packages/language-vue)
7. linter-eslint，eslint插件，[详细地址](https://atom.io/packages/linter-eslint)
8. vue-snippets，vue代码片段，[详细地址](https://atom.io/packages/vue-snippets)
9. pigments，颜色显示器，[详细地址](https://atom.io/packages/pigments)

---
## 精彩推荐

### 手记推荐

- [前端成长必经之路：项目设计之美](https://www.imooc.com/article/22808)
- [前端跳槽面试那些事儿](https://www.imooc.com/article/20010)
- [前端工程师是时候学习ES6了](https://www.imooc.com/article/17720)


### 博客推荐

- [深入学习CSS属性中的百分比](https://segmentfault.com/a/1190000010425830)
- [web开源测试工具-siege](https://segmentfault.com/a/1190000009635163)
- [Web如何防止XSS攻击](https://segmentfault.com/a/1190000007752362)
- [video.js源码分析](https://segmentfault.com/a/1190000007131342)
- [聊聊Ajax那些事儿](https://segmentfault.com/a/1190000006669043)
- [Document.write知多少](https://segmentfault.com/a/1190000006197157)
