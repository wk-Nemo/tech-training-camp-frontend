<template>
  <div class="home">
    <HomeHeader class="header"></HomeHeader>
    <HomeMain class="main"></HomeMain>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeMain from './components/Main'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
}
</style>
