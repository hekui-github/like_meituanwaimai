<template>
  <div class="types-item">
		<img :src="icon" >
		<span v-text="title"></span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
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