import{_ as s,c as n,o as a,b as t}from"./app.389e78aa.js";const l="/lang-ui-docs/assets/jg.a6e21879.png",p="/lang-ui-docs/assets/xg.89fc2ac0.png",D=JSON.parse('{"title":"组件库的创建","description":"","frontmatter":{},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"组件全局注册","slug":"组件全局注册","link":"#组件全局注册","children":[]},{"level":2,"title":"组件封装","slug":"组件封装","link":"#组件封装","children":[]},{"level":2,"title":"组件的引用和演示。","slug":"组件的引用和演示。","link":"#组件的引用和演示。","children":[]},{"level":2,"title":"用到的插件 vite-plugin-md","slug":"用到的插件-vite-plugin-md","link":"#用到的插件-vite-plugin-md","children":[]}],"relativePath":"example/module.md"}'),e={name:"example/module.md"},o=t('<h1 id="组件库的创建" tabindex="-1">组件库的创建 <a class="header-anchor" href="#组件库的创建" aria-hidden="true">#</a></h1><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><p>我们首先在根目录下创建一个packages文件夹，这个文件夹将存放所有的组件的封装，全局注册方法，以及组件的引用演示。 目录结构如下 <img src="'+l+`" alt="Alt"> lbutton是组件的文件夹名字，在lbutton有几个文件,lbutton.vue是用来封装组件的具体文件，doc文件是用来存放封装好的组件的引用和演示。dome1.vue-demo6.vue是引用分装好点的组件,引用好之后就在doc.md集体演示。index.ts用来对封装好的组件进行全局注册。我们从全局注册开始看起</p><h2 id="组件全局注册" tabindex="-1">组件全局注册 <a class="header-anchor" href="#组件全局注册" aria-hidden="true">#</a></h2><p>首先我们在lbutton.vue中的script中定义好组件的名称，代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&quot;l-butotn&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>声明好名字后，在packages/index.ts中给组件注册全局,index.ts使我们自己创建的哦</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import lbutton from &#39;./lbutton/lbutton.vue&#39;;//引入lbutton.vue文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const allcom=[</span></span>
<span class="line"><span style="color:#A6ACCD;">	lbutton</span></span>
<span class="line"><span style="color:#A6ACCD;">] //定义数组接收导入的组件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const recom =function(app:App){</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(const allco of allcom){</span></span>
<span class="line"><span style="color:#A6ACCD;">		app.component(allco.name,allco)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}; //组件的全局注册写法</span></span>
<span class="line"><span style="color:#A6ACCD;">export {lbutton};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default recom; //最后将这些都导出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接下来是全局注册的最后一步,在main.ts中去使用他，完成组件的全局注册</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import alloc from &#39;../packages/index&#39;;//引入刚才的index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">const app=createApp(App);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(alloc);//使用use方法去调用他</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这一步完成之后我们的组件就可以在全局直接引用了。像这样.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;l-button &gt;默认按钮&lt;/l-button&gt; //l-button是我们在一开始的lbutton.vue中导出的名字</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="组件封装" tabindex="-1">组件封装 <a class="header-anchor" href="#组件封装" aria-hidden="true">#</a></h2><p>展示部分代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;div class=&quot;btncon&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;button :class=&quot;lclass&quot;&gt;&lt;slot&gt;&lt;span&gt;&lt;/span&gt;&lt;/slot&gt;&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在template中solt是插槽，在组件中经常要用到它，用法课参考vue官网:<a href="https://cn.vuejs.org/guide/components/slots.html#slots" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/components/slots.html#slots</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	import {computed,ref} from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	const props=defineProps({</span></span>
<span class="line"><span style="color:#A6ACCD;">		type:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			type:String,</span></span>
<span class="line"><span style="color:#A6ACCD;">			default:&quot;default&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		round:Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">		tsy:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			type:Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">			default:false</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		icon:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			type:Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">			default:false</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		sizes:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			type:String,</span></span>
<span class="line"><span style="color:#A6ACCD;">			default:&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		dis:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			type:Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">			default:false</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	});</span></span>
<span class="line"><span style="color:#A6ACCD;">	const lclass=computed(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">		return [</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;lbutton&quot;,\`lbutton-\${props.type}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">			props.round?&quot;lbutton-round&quot;:&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			props.tsy?\`lbutton-tsy\`:&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			props.icon?&quot;lbutton-icon&quot;:&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			\`lbutton-sizes-\${props.sizes}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">			props.dis?&quot;dis&quot;:&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		]</span></span>
<span class="line"><span style="color:#A6ACCD;">	});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	button{</span></span>
<span class="line"><span style="color:#A6ACCD;">		outline: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">		border: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">		background: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">		cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	.lbutton{</span></span>
<span class="line"><span style="color:#A6ACCD;">		padding: 2vh 3vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">		margin: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">		border-radius: 4px;</span></span>
<span class="line"><span style="color:#A6ACCD;">		border: 1px solid #f0f0f0;</span></span>
<span class="line"><span style="color:#A6ACCD;">		margin-left: 1vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;:hover,&amp;:focus{</span></span>
<span class="line"><span style="color:#A6ACCD;">			opacity: .8;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	.lbutton-success{</span></span>
<span class="line"><span style="color:#A6ACCD;">		color: white;</span></span>
<span class="line"><span style="color:#A6ACCD;">		background:$success;</span></span>
<span class="line"><span style="color:#A6ACCD;">		background-color:$success;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;.lbutton-tsy{</span></span>
<span class="line"><span style="color:#A6ACCD;">			border: 1px dashed $info;</span></span>
<span class="line"><span style="color:#A6ACCD;">			background-color: white;</span></span>
<span class="line"><span style="color:#A6ACCD;">			color: $success;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&amp;:hover{</span></span>
<span class="line"><span style="color:#A6ACCD;">				background-color: $success;</span></span>
<span class="line"><span style="color:#A6ACCD;">				color: white;</span></span>
<span class="line"><span style="color:#A6ACCD;">				opacity: .8;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		};</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;.lbutton-icon{</span></span>
<span class="line"><span style="color:#A6ACCD;">			width: 3vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">			height: 3vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">			padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">			border-radius:50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">			background-image: url(./btnimg/btnicon2.png);</span></span>
<span class="line"><span style="color:#A6ACCD;">			background-size: 1vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">			background-repeat: no-repeat;</span></span>
<span class="line"><span style="color:#A6ACCD;">			background-position:center;</span></span>
<span class="line"><span style="color:#A6ACCD;">		};</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;.lbutton-sizes-big{width: 12vw;height: 10vh;};</span></span>
<span class="line"><span style="color:#A6ACCD;">		&amp;.dis{cursor: not-allowed;opacity: .5;}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这是一部分代码。我们直接看组件演示。</p><h2 id="组件的引用和演示。" tabindex="-1">组件的引用和演示。 <a class="header-anchor" href="#组件的引用和演示。" aria-hidden="true">#</a></h2><p>我们在demo1.vue-demo6.vue中分别去引用不同功能的组件用法。 比如在demo1.vue中引用组件的基本用法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;default&quot;&gt;默认按钮&lt;/l-button&gt;//基本用法不同颜色的按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;success&quot;&gt;成功按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;primary&quot;&gt;主要按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;info&quot;&gt;信息按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;warning&quot;&gt;提醒按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;danger&quot;&gt;危险按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在demo2.vue中引入圆角按钮的用法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;default&quot; round&gt;默认按钮&lt;/l-button&gt; round属性对应圆角按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;success&quot; round&gt;成功按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;primary&quot; round&gt;主要按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;info&quot; round&gt;信息按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;warning&quot; round&gt;提醒按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;l-button type=&quot;danger&quot; round&gt;危险按钮&lt;/l-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后我们在doc.md中一起引入他们展示在页面上看效果，首先是引入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import demo1 from &#39;./demo1.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import demo2 from &#39;./demo1.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;demo1&gt;&lt;/demo1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;demo2&gt;&lt;/demo2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后我们看最终效果,<img src="`+p+'" alt="Alt"> 这样我们就完成了一个简单的button组件的封装了。</p><h2 id="用到的插件-vite-plugin-md" tabindex="-1">用到的插件 vite-plugin-md <a class="header-anchor" href="#用到的插件-vite-plugin-md" aria-hidden="true">#</a></h2><p>一个可以将md文件渲染成vue文件的插件，这个组件库的搭建中，我们用用它来集中演示组件，以及一些页面的渲染。</p>',29),c=[o];function i(r,C,A,u,d,y){return a(),n("div",null,c)}const m=s(e,[["render",i]]);export{D as __pageData,m as default};
