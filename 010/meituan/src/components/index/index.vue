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

     <!-- 横线分隔条 -->
    <cross-line></cross-line>
    
    <!-- 周边商铺 -->
    <div class="nearby">
      <div class="title-bar">
        <span>附近商家</span>
      </div>
      <shop-list-item v-for="item in shopList" :item= "item" :key="item.id"></shop-list-item>
      <div class="bottomFix"></div>
    </div>



  </div>
</template>

<script>
 import typesItem from '@/components/base/types-item/types-item'
 import shopListItem from '@/components/base/shop-list-item/shop-list-item'
 import CrossLine from '@/components/base/cross-line/cross-line'


export default {
  components: {
    typesItem,
    shopListItem,
    CrossLine
  },
  data () {
    return {
      swipeData: [
        {
          pic: 'http://xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg'
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
      shopList: []
    }
  },
  methods:{
    _initShopsData() {
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
    }
  },
  props: {},
  watch: {},
  filters: {},
  computed: {},
  created () {
  },
  mounted () {
    this._initShopsData()

  },
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
    height: 100%;
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
.bottomFix {
    height: 50px;
    background-color: transparent;
}

.title-bar {
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.title-bar span {
    display: inline-block;
    position: relative;
    font-weight: bold;
    color: #333;
}
.title-bar span:before {
    content: '';
    position: absolute;
    top: 20px;
    left: -45px;
    width: 30px;
    border-top: 1px solid #333;
    transform: scaleY(0.5);
}
.title-bar span:after {
    content: '';
    position: absolute;
    top: 20px;
    right: -43px;
    width: 30px;
    border-top: 1px solid #333;
    transform: scaleY(0.5);
}


</style>