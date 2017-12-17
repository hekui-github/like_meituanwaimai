<template>
  <div id="app">
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
  font-family: Arial,Helvetica,sans-serif;

}
</style>
