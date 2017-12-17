## （1）初始化vue项目
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/001.png)

### 环境初始化
1. 安装node。[官网直达](https://nodejs.org/en/)
2. 安装淘宝npm镜像。 ```  npm install -g cnpm --registry=https://registry.npm.taobao.org ```
3. 安装vue脚手架vue-cli。 ``` npm install vue-cli -g ```

### 创建项目
1. 用vue-cli创建项目meituan ``` vue init webpack meituanwaimai ```
2. 创建过程中会提示输入项目名称，都直接按enter键，vue会自动使用默认的。
3. 创建过程中会提示是否需要vue-router、eslint、unit tests等，全部输入no。

### 安装依赖，启动项目
1. 切换到项目目录 ``` cd meituan ```
2. 安装依赖 ``` cnpm install ```
3. 启动运行 ``` cnpm run dev ```
4. 如果浏览器没有自动启动运行，请查看命令行输出的打印信息，把最后的网址拷贝到浏览器地址栏即可。我这里是 ``` http://localhost:8080 ```
5. 在浏览器中右键审查元素(检查按钮)打开chrome开发者工具,打开手机预览模式



---
---
---


## （2）实现底部tabbar
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/002.png)
### 新建一个tabbar.vue文件，让tabbar固定在页面底部，用flex布局实现3等份，并通过背景位置来正确显示每一项。

``` 
<template>
  <ul class="tab-bar">
    <li ><i class="icon-index"></i><span>首页</span></li>
    <li ><i class="icon-order"></i><span>订单</span></li>
    <li ><i class="icon-mine"></i><span>我的</span></li>
  </ul>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  text-align: center;
  border-top: 1px solid rgb(182, 182, 182);
  background-color: #fcfcfc;
  display: flex;
  flex-direction: row;
}
 li {
  flex: 1;
  color: #999;
}
i {
  display: block;
  width: 25px;
  height: 25px;
  margin: 3px auto;
  background: url('./tabbarBg.png') no-repeat;
  background-size: 25px auto;
}
span {
  display: block;
  font-size: 12px;
}
.icon-index {
  background-position: 0 -75px;
}
.icon-order {
  background-position: 0 -25px;
}
.icon-mine {
  background-position: 0 -125px;
}

</style> 
```
### 其它
1. 删除helloworld.vue 文件
2. 在app.vue中引入 tabbar.vue 并使用
3. 在main.js中引入css样式重置reset.css

---
---
---

## （3）使用vue-router实现路由功能，并加上选中高亮样式
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/003.png)

### 安装vue-router
``` cnpm install vue-router --save ```

### 书写vue-router的代码
> 本例的vue-router就是一个vue-router最简单的用法，把每个组件对应路径就好了。然后在main.js中引入它，然后绑定在vue实例中就可以了。

```
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/index'
import Order from '@/components/order/order'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      component: Index
    },

    // 订单
    {
      path: '/order',
      component: Order
    },
    // 我的
    {
      path: '/mine',
      component: Mine
    }
  ]
})

```
### 修改tabbar代码
> 选中样式会默认加上router-link-active样式，只要在这个样式中把选中图片替换掉就好(这里是改变图片位置)。
> 
> 把li替换成router-link，tag表示对应的标签，to表示点击它会router-view会显示的组件

```
<template>
  <ul class="tab-bar">
    <router-link tag="li" to="/index"><i class="icon-index"></i><span>首页</span></router-link>
    <router-link tag="li" to="/order"><i class="icon-order"></i><span>订单</span></router-link>
    <router-link tag="li" to="/mine"><i class="icon-mine"></i><span>我的</span></router-link>
  </ul>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  text-align: center;
  border-top: 1px solid rgb(182, 182, 182);
  background-color: #fcfcfc;
  display: flex;
  flex-direction: row;
}
 li {
  flex: 1;
  color: #999;
}
i {
  display: block;
  width: 25px;
  height: 25px;
  margin: 3px auto;
  background: url('./tabbarBg.png') no-repeat;
  background-size: 25px auto;
}
span {
  display: block;
  font-size: 12px;
}
.icon-index {
  background-position: 0 -75px;
}
.icon-order {
  background-position: 0 -25px;
}
.icon-mine {
  background-position: 0 -125px;
}
.router-link-active {
    color: #333;
}
.router-link-active .icon-index {
  background-position: 0 -50px;
}
.router-link-active .icon-order {
  background-position: 0 0px;
}
.router-link-active .icon-mine {
  background-position: 0 -100px;
}

</style>

```

### 其它
> 在reset.css中把html、body高度设置为100%，把app组件的高度也设置为100%就能全屏高度



---
---
---

## （4）引入mint-ui，为首页加入轮播图
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/004.png)

### 安装mint-ui
 ``` cnpm install mint-ui --save ```
 
### 在main.js中引入mint-ui 
```
 	import MintUI from 'mint-ui'
	import 'mint-ui/lib/style.css'
	Vue.use(MintUI)
```
	
### 在index.vue中使用轮播图组件 mt-swipe
```
<div class="slider">
  <mt-swipe :auto="3000">
    <mt-swipe-item v-for="item in swipeData" :key="item.pic">
      <img :src="item.pic">
    </mt-swipe-item>
  </mt-swipe>
</div>
    
data () {
    return {
      swipeData: [
        {pic: require('./img/swipe/1.jpg')},
        {pic: require('./img/swipe/2.jpg')}
      ],
    }
}
	
.slider {
  height: 170px;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
}
.slider img {
  width: 100%;
}
	
```



## （5）添加外卖分类栏
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/005.png)

### 添加分类的数据，并把轮播图多余的数据注释掉

```
data () {
    return {
      swipeData: [
        {
          pic: require('./img/swipe/1.png')
        },
        // {
        //   pic: require('./img/swipe/1.png')
        // }
      ],
      types:[
        {
          icon: require('./img/types/ms.png'),
          title: '美食'
        },
        {
          icon: require('./img/types/mtcs.png'),
          title: '美团超市'
        },
        {
          icon: require('./img/types/sxgs.png'),
          title: '生鲜果蔬'
        },
        {
          icon: require('./img/types/tdyp.png'),
          title: '甜点饮品'
        },
        {
          icon: require('./img/types/mtzs.png'),
          title: '美团专送'
        },
        {
          icon: require('./img/types/zcyx.png'),
          title: '正餐优选'
        },
        {
          icon: require('./img/types/kcxc.png'),
          title: '快餐小吃'
        },
        {
          icon: require('./img/types/hbps.png'),
          title: '汉堡披萨'
        }
      ]
    }
  }

```

### 新建type-item.vue 

```
<template>
  <div class="types-item">
		<img src="../../index/img/types/hbps.png" >
		<span>汉堡披萨</span>
  </div>
</template>


<style scoped>
.types-item {
	float: left;
	width: 25%;
	padding-top: 14px;
}
.types-item img {
  display: block;
	width: 50px;
	margin: 0 auto 12px;
}
.types-item span {
	display: block;
	font-size: 14px;
	line-height: 14px;
	text-align: center;
	color: #2f2f2f;
}

</style>

```

### 在index.vue 中引入type-item.vue 并使用

```
<!-- 种类 -->
<div class="types">
  <types-item ></types-item>
  <types-item ></types-item>
  <types-item ></types-item>
  <types-item ></types-item>

  <types-item ></types-item>
  <types-item ></types-item>
  <types-item ></types-item>
  <types-item ></types-item>
</div>

import typesItem from '@/components/base/types-item/types-item'

```
### 其它
> 引入.vue文件时使用的@是在webpack.base.conf.js文件的alias位置配置的，在需要写路径时都可以在这里配置绝对路劲的简写方式

## (6)正确显示分类栏
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/006.png)

### 用正确的数据填充分类的内容

```
index.vue
<div class="types">
  <types-item v-for="item in types" :icon="item.icon" 
  :title="item.title" :key="item.title"></types-item>
</div>

types-item.vue
<template>
  <div class="types-item">
		<img :src="icon" >
		<span v-text="title"></span>
  </div>
</template>

props: {
	icon:{
	  type:String,
	  default:''
	},
	title:{
	  type:String,
	  default:''
	}
},
```

## (7)构造商铺列表数据，显示商铺图片
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/007.png)

### 商铺数据+详细注释
这里数据仅仅为3条，项目中复制了4分共12条数据，列表中需要需要对数据判断的几个地方：

1. 是否 品牌店、新店
2. 是否可 领取代金券、返商家券、开发票
3. 是否美团专送

```
shopList: [
    {
        "id": 1000,//id
        "type":1,//1代表新店、2代表品牌店、0代表都不是
        "name": "你的名字",//店名
        "delivery_type": 1,//1代表美团专送，0代表不是
        "pic_url": "http://p0.meituan.net/0.84.63/xianfu/54c60749841a6612df373dc259e8da73108176.jpg",//图片地址
        "avg_delivery_time": 30,//平均送达时间
        "delivery_distance": 2032,//平均送达距离(单位为米，超过一千米要转化成千米)
        "min_price": 20,//起送价
        "delivery_price": 3,//配送费
        "wm_poi_score": 4.7,//评分
        "month_sale_num": 33,//月售
        "shop_discount": {
            "code":0,//是否能领代金券
            "dis_money":[2,4]//返回的代金券(多张)
        },
        "shop_return_price": {
            "code":0,//是否返券
            "min_price":20,//返券起始价格
            "dis_money":4//商家返券数
        },
        "shop_return_invoice": {
            "code":0,//是否开发票
            "min_price":0,//开票起始价格
        },   
    },
    {
        "id": 1001,//id
        "type":0,//1代表新店、2代表品牌店、0代表都不是
        "name": "叫了个炸鸡(鼓楼店)",//店名
        "delivery_type": 1,//1代表美团专送，0代表不是
        "pic_url": "http://p0.meituan.net/0.84.63/xianfu/00b9386a556a39010186a609ce9289e370566.jpg",//图片地址
        "avg_delivery_time": 30,//平均送达时间
        "delivery_distance": 2502,//平均送达距离(单位为米，超过一千米要转化成千米)
        "min_price": 20,//起送价
        "delivery_price": 3,//配送费
        "wm_poi_score": 4.2,//评分
        "month_sale_num": 3857,//月售
        "shop_discount": {
            "code":1,//是否能领代金券
            "dis_money":[1,5,10]//返回的代金券(多张)
        },
        "shop_return_price": {
            "code":0,//是否返券
            "min_price":20,//返券起始价格
            "dis_money":1//商家返券数
        },
        "shop_return_invoice": {
            "code":0,//是否开发票
            "min_price":0,//开票起始价格
        },   
    },
    {
        "id": 1002,//id
        "type":2,//1代表新店、2代表品牌店、0代表都不是
        "name": "望湘园(南京国际广场店)",//店名
        "delivery_type": 0,//1代表美团专送，0代表不是
        "pic_url": "http://p1.meituan.net/0.84.63/xianfu/2d91e93c70f91696907f040392c4835f13918.jpg",//图片地址
        "avg_delivery_time": 30,//平均送达时间
        "delivery_distance": 889,//平均送达距离(单位为米，超过一千米要转化成千米)
        "min_price": 20,//起送价
        "delivery_price": 3.5,//配送费
        "wm_poi_score": 4.7,//评分
        "month_sale_num": 1435,//月售
        "shop_discount": {
            "code":0,//是否能领代金券
            "dis_money":[2,4]//返回的代金券(多张)
        },
        "shop_return_price": {
            "code":0,//是否返券
            "min_price":20,//返券起始价格
            "dis_money":4//商家返券数
        },
        "shop_return_invoice": {
            "code":1,//是否开发票
            "min_price":0,//开票起始价格
        },   
    }
]

```
### 简单显示店铺图片和标识

```
index.vue
<!-- 周边商铺 -->
<div class="nearby">
  <shop-list-item v-for="item in shopList" :item= "item"></shop-list-item>
</div>

shop-list-item.vue
<div class="seller-list-item" >
	<div class="left">
<span :class="{pingpai:item.type===2,xindian:item.type===1,hide:item.type===0}">{{item.type===1?"新店":"品牌"}}</span>
		<img :src="item.pic_url">
	</div>
</div>
```    
 
## （8）添加完整的商品列表
### 效果
![](http://oztmrq2zu.bkt.clouddn.com/008.png)

###主要是布局，然后根据穿过来的数据显示就好了，需要稍微注意下的点都在截图中标出来了
1. 需要判断是否显示的有新店、品牌店、是否可领券、是否支付后返券、是否开发票、是否美团转送
2. 需要对字符串处理的有可领的代金券(可能有多张)、店铺距离（超过1000m要用km显示）
3. 美团专送的左上角和右下角的三角形可以用border的实现
4. 在求代金券的最大值和最小值的时候用了es6的模式匹配

```
<div class="seller-list-item" >
    <div class="left">
    	<span :class="{pingpai:item.type===2,xindian:item.type===1,hide:item.type===0}">{{item.type===1?"新店":"品牌"}}</span>
      <img :src="item.pic_url">
    </div>

    <div class="content">
      <div class="name">{{item.name}}</div>
      <div class="mid">
        <span class="fl">* * * * *</span>
        <span class="count fl">月售{{ item.month_sale_num }}</span>
        <span class="distance fr">{{ distance }}</span>
        <span class="time fr">{{ item.avg_delivery_time }}分钟 |</span>
      </div>

      <div class="down">
        <span >起送 {{ item.min_price }} |</span>
        <span >配送 {{ item.delivery_price }} |</span>
        <!-- 数据中忘了平均消费价格，这里直接用起送价格数据代替 -->
        <span >人均 {{ item.min_price + 6 }}</span>

        <div class="zhuansong" v-show="item.delivery_type === 1">
          <span >美团专送</span>
        </div>
      </div>

      <ul class="activety">
        <li class="jian" v-show="item.shop_discount.code"><img src="./jian.png" ><span>{{replacePrice}}</span></li>
        <li class="fan" v-show="item.shop_return_price.code"><img src="./fan.png" ><span>{{"实际支付" + item.shop_return_price.min_price + "元返" + item.shop_return_price.dis_money +"元商家代金券"}}</span></li>
        <li class="fapiao" v-show="item.shop_return_invoice.code"><img src="./piao.png" ><span>{{"本店支持开发票，开票金额" + item.shop_return_invoice.min_price + "元起"}}</span></li>
      </ul>
    </div>                                 
  </div>

```

```
methods: {
    findMaxAndMin(arr) {
      var min = arr[0]
      var max = arr[0]
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i]
        }
        if (arr[i] < min) {
          min = arr[i]
        }
      }
      return {max,min}
    }
  },
computed: {
	// 距离km、m换算
	distance() {
	  if (this.item.delivery_distance > 1000) {
	    return (this.item.delivery_distance / 1000.0).toFixed(1) + 'km'
	  }else {
	    return this.item.delivery_distance + 'm'
	  }
	},
	// 代金券分一张和多张
	replacePrice () {
	  if (this.item.shop_discount.dis_money.length === 1) {
	      return "可领" + this.item.shop_discount.dis_money[0] +"元代金券"
	  }else {
	    let {max,min} = this.findMaxAndMin(this.item.shop_discount.dis_money)
	    return "可领" + min + "~" + max +"元代金券"
	  }
	}
},
```

```
.seller-list-item {
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  padding: 12.5px 0 12.5px 0;
  overflow: hidden;
  margin-left:10px;
  border-bottom: solid 1px #eee;
}
/*左侧图片*/
.left {
	position: relative;
  flex: 0 0 86px;
  width: 86px; 
}
.left span {
	display: inline-block;
	text-align: center;
	position: absolute;
	left: 0;
	top: 0;
	width: 28px;
	height: 14px;
	line-height: 14px;
	font-size: 12px;
	color: white;
}
span.hide {
	display: none;
}
span.pingpai {
	background-color: #ffa627;
}
span.xindian {
	background-color: #21c56c;
}
.left img {
	border:solid 1px #e4e4e4;
  display: block;
  width: 84px;
  height: 63px;
  margin: 0 auto;
}

/*右侧内容*/
.content {
  /*background-color: red;*/
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 10px;
}
.content .name {
  font-size: 17px;
  color: #333;
  overflow: hidden;
  font-weight: bold;
  overflow: hidden;
}
/*月售、送达时间、距离*/
.content .mid {
  flex: 1;
  margin-top: 7px;
  color: #666;
  font-size: 12px;
}
.mid .count {
  margin-left: 10px;
}
.mid .distance {
  margin-left: 5px;
  margin-top: 2px;
}
.mid .time {

}
/*起送配送人均*/
.down {
  flex: 1;
  margin-top: 7px;
  font-size: 13px;
  color: #656565;
}
.down .zhuansong {
  float: right;
  font-size: 13px;
  background-color: #ffd161;
  color: #333;
}
.zhuansong span {
  height: 15px;
  line-height: 15px;
  padding: 0 6px;
  display: inline-block;
  position: relative;
}

.zhuansong span::before,
.zhuansong span::after {
    content: '';
    position: absolute;
    border: 3px solid #fff;
    width: 0;
    height: 0;
    font-size: 0;
}

.zhuansong span::before {
  left: 0;
  top: 0;
  border-color: #fff #ffd161 #ffd161 #fff;
}
.zhuansong span::after {
  right: 0;
  bottom: 0;
  border-color: #ffd161 #fff  #fff #ffd161;
}



/*活动*/
.activety {
  flex: 1;
  margin-top: 7px;
  color: #898989;
  font-size: 12px;
  text-align: left;

}
.activety li {
  height: 17px;
  margin-bottom: 4px;
}

.activety li img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

.activety li span {
  vertical-align: middle;
  margin-left: 6px;
}

```

## 五角星组件和完善页面

### 效果
![](http://oztmrq2zu.bkt.clouddn.com/009.png)

### 评分星星组件
> 把星星分为全星、半星、和无星星三种，比如3.7分就是3个全星星、1个半星星、一个无星星

```
<div>
	<i class="starItem" :class="{half:(score<1 && score> 0),zero:(score <= 0)}"></i>
	<i class="starItem" :class="{half:(score<2 && score> 1),zero:(score <= 1)}"></i>
	<i class="starItem" :class="{half:(score<3 && score> 2),zero:(score <= 2)}"></i>
	<i class="starItem" :class="{half:(score<4 && score> 3),zero:(score <= 3)}"></i>
	<i class="starItem" :class="{half:(score<5 && score> 4),zero:(score <= 4)}"></i>
</div>

.starItem {
	background: url(./star.png) no-repeat;
  background-size: cover;
  width: 10px;
  height: 10px;
  float: left;
  margin-right: 4px;
  background-position: 0 0;
}
.half {
  background-position: -14px 0;
}
.zero {
  background-position: -28px 0;
}

```
### 其它
1. 跟商铺列表加上了头部 （注意头部左右两边的线是通过插入空内容加border实现的）
2. 在列表后面加了一个空的div，以免滑动到最底下出现部分被遮挡bug
3. 在商铺列表加了分割条

## mock首页数据

### 效果
![](http://oztmrq2zu.bkt.clouddn.com/009.png)

### 打开自动打开浏览器功能
> 新版vue-cli关闭了自动启动浏览器，可以通过吧build/config/index.js 中大概第18行的    autoOpenBrowser: false,改为true，然后重新启动npm run dev ，就能自动打开浏览器了

### mock首页数据
> 在webpack.dev.conf.js 中加入代码返回数据,webpack3内置了express,before方法的参数app就是express的实例对象

```
before(app) {
  var shops = require('../mock/shop.json')

  app.get('/api/shops', function(req, res) {
    res.json({
      code: 0,
      data: shops
    });
  });
}
``` 
> 安装axios,在main.js中引入axios

``` cnpm i axios --save ```

```
import axios from 'axios'
Vue.prototype.axios = axios
```

> 在index.vue中获取数据

```
this.axios.get('/api/shops',{
    params: {

    }
}).then(res =>{
    if (res.data.code === 0) {
        this.shopList = res.data.data
    }
}).catch(error => {
    console.log(error)
})
``` 

## 11






