<template>
  <div class="header">
    <div class="head-left">
      <input
        class="header-input"
        type="text"
        placeholder="输入文章标题..."
      >
    </div>
    <div class="head-right"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ddd;
  .head-left{
    width: 70%;
    height: 100%;
    .header-input{
      margin: 0 0 0 15px;
      padding: 0;
      font-size: 24px;
      font-weight: 500;
      height: 100%;
      width: 100%;
      color: #1d2129;
      border: none;
      outline: none;
    }
  }
}
</style>
