<template>
  <div>
		<i class="starItem" :class="{half:(score<1 && score> 0),zero:(score <= 0)}"></i>
		<i class="starItem" :class="{half:(score<2 && score> 1),zero:(score <= 1)}"></i>
		<i class="starItem" :class="{half:(score<3 && score> 2),zero:(score <= 2)}"></i>
		<i class="starItem" :class="{half:(score<4 && score> 3),zero:(score <= 3)}"></i>
		<i class="starItem" :class="{half:(score<5 && score> 4),zero:(score <= 4)}"></i>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
  	score:{
  		type:Number,
  		default:0
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





</style>