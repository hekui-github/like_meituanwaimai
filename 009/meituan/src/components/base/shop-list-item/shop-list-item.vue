<template>
  <div class="seller-list-item" >
    <div class="left">
    	<span :class="{pingpai:item.type===2,xindian:item.type===1,hide:item.type===0}">{{item.type===1?"新店":"品牌"}}</span>
      <img :src="item.pic_url">
    </div>

    <div class="content">
      <div class="name">{{item.name}}</div>
      <div class="mid">
       <star class="fl star" :score="item.wm_poi_score"></star>
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


  </div>
</template>

<script>
 import star from '@/components/base/star/star'


export default {
  components: {
    star
  },
  data () {
    return {}
  },
  props: {
  	item:{
  		type:Object,
  		default:{}
  	}
  },
  watch: {},
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
  filters: {},
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
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style scoped>
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
.mid .star {
  margin-top: 3px;
  width: 70px;
  height: 10px;
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

</style>