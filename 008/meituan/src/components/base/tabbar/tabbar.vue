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