<template>
  <div class="seller-list-item" >
    <div class="left">
    	<span :class="{pingpai:item.type===2,xindian:item.type===1,hide:item.type===0}">{{item.type===1?"新店":"品牌"}}</span>
      <img :src="item.pic_url">
    </div>

  </div>
</template>

<script>
export default {
  components: {},
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
  methods: {},
  filters: {},
  computed: {},
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
  padding: 12.5px 0 12.5px 10px;
  overflow: hidden;
}
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

</style>