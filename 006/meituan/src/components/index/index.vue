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

   

  </div>
</template>

<script>
 import typesItem from '@/components/base/types-item/types-item'

export default {
  components: {
    typesItem
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