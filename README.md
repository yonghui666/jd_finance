## 组件化思维与技巧之京东金融实战
本项目使用的是Vue(2.5.9)实现的组件化课程，侧重思维与方法的训练。在模块化方面不仅涉及常规的JS还有CSS，CSS的模块化使用Sass组织代码，将模块化设计做到极致。在构建部分采用webpack（3.10.0） 和 npm scripts独立完成，不依赖任何第三方的脚手架。
> 本次的小项目的亮点就是，解决了移动端适配的问题，和vue组件化的设计，组件先抽象，在具体，某个地方不一样的可以使用条件渲染，在配合插槽的方式，做出复用性更强的组件；
## vue京东项目-慕课网
### 组件设计原则
- 高内聚：组件本身的功能尽量写在组件内部，不要依赖其他组件
- 周期性迭代
- 先整体，在部分，在颗粒化
- 尽可能的抽象
---
### 小知识
- prerender预渲染优化SEO；-了解一下
- vue的props，v-slot，好好看看，
- 关于列表边框线的问题解决：1，border；2，伪元素：after；伪元素可以配合定位，放到想要的位置
- vue中出现，未定义就使用的变量，组件的错误，好好检查组件名，变量名等；属性绑定的是否声明了
---

### 注意事项
- webpack若找不到插件的css样式，可以在引入的时候加一个波浪符：如：`@import '~swiper/dist/css/swiper.css';`
---
### scss
- 嵌套；内部&代表父级，可以用于伪类样式；
- 定义变量语法：$变量名：值; 使用：color:$变量名
- 定义混入语法：@mixin 函数名(){样式}; 使用：@include 函数名;
```
	@mixin btn($size: 14px,$color: #fff,$bgcolor: #f04752,$padding:5px,$radius:5px){
	  padding:$padding;
	  background-color: $bgcolor;
	  border: 1px solid $bgcolor;
	  font-size: $size;
	  color: $color;
	  text-align: center;
	  line-height: 1;
	  display: inline-block;
	}
	调用：@include btn(传参)
```
---
### 常见问题
<a href="./issue.md" target="_blank">点击查看常见问题</a>