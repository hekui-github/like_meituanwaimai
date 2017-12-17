<template>
  <div id="app">

  	<router-view></router-view>

    <tabbar></tabbar>

  </div>
</template>

<script>
import tabbar from './components/base/tabbar/tabbar'

export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>

body {
  background-color: #ebebeb;
}

#app {
	height: 100%;
  font-family: Arial,Helvetica,sans-serif;

}
</style>
