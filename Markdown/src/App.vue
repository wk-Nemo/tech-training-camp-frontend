<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  overflow-x: hidden;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
