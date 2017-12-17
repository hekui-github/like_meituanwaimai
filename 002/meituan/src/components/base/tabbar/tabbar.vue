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