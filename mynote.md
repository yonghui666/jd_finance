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