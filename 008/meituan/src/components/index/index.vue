<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="slider">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in swipeData" :key="item.pic">
          <img :src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 种类 -->
    <div class="types">
      <types-item v-for="item in types" :icon="item.icon" :title="item.title" :key="item.title"></types-item>
    </div>
    
    <!-- 周边商铺 -->
    <div class="nearby">
      <shop-list-item v-for="item in shopList" :item= "item" :key="item.id"></shop-list-item>
    </div>

  </div>
</template>

<script>
 import typesItem from '@/components/base/types-item/types-item'
 import shopListItem from '@/components/base/shop-list-item/shop-list-item'

export default {
  components: {
    typesItem,
    shopListItem
  },
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
      ],
      shopList: [
            {
                "id": 1000,//id
                "type":1,//1代表新店、2代表品牌店、0代表都不是
                "name": "你的名字",//店名
                "delivery_type": 1,//1代表美团专送，0代表不是
                "pic_url": "http://p0.meituan.net/0.84.63/xianfu/54c60749841a6612df373dc259e8da73108176.jpg",//图片地址
                "avg_delivery_time": 30,//平均送达时间
                "delivery_distance": 2032,//平均送达距离(单位为米，超过一千米要转化成千米)
                "min_price": 25,//起送价
                "delivery_price": 3.5,//配送费
                "wm_poi_score": 4.7,//评分
                "month_sale_num": 33,//月售
                "shop_discount": {
                    "code":1,//是否能领代金券
                    "dis_money":[2]//返回的代金券(多张)
                },
                "shop_return_price": {
                    "code":0,//是否返券
                    "min_price":25,//返券起始价格
                    "dis_money":1//商家返券数
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
                "average_price":25,//平均
                "delivery_price": 3,//配送费
                "wm_poi_score": 4.2,//评分
                "month_sale_num": 3857,//月售
                "shop_discount": {
                    "code":1,//是否能领代金券
                    "dis_money":[1,5,10]//返回的代金券(多张)
                },
                "shop_return_price": {
                    "code":1,//是否返券
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
            },
            {
                "id": 1003,//id
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
                "id": 1004,//id
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
                "id": 1005,//id
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
            },
            {
                "id": 1006,//id
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
                "id": 1007,//id
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
                "id": 1008,//id
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
            },
            {
                "id": 1009,//id
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
                "id": 1010,//id
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
                "id": 1011,//id
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
    }
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
.index {
  /*height: 100%;*/
  background-color: #fff;
}
/*轮播图*/
.slider {
  height: 170px;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
}
.slider img {
  width: 100%;
}
/*外卖类型*/
.types {
  overflow: hidden;
  padding-bottom: 20px;
  background-color: #fff
}

/*附近商家*/
.nearby {

}

</style>