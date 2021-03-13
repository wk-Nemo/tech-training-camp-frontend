<template>
  <div class="main">
    <div class="main-toolbar">
      <div class="tool-left">
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe609;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe606;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe60d;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe715;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe701;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe6f5;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe69f;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe71a;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe6f0;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe610;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xeaf0;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe667;</span>
        </div>
      </div>
      <div class="tool-right"></div>
    </div>
    <div class="main-body">
      <div class="bytemd-editor"></div>
      <div class="bytemd-preview"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 88.6%;
  .main-toolbar{
    height: 35px;
    border-bottom: 1px solid #ddd;
    .tool-left{
      line-height: 35px;
      display: flex;
      .iconbox{
        margin: 0 15px;
        height: 20px;
      }
      .tool-icon{
        line-height: 35px;
        font-size: 20px;
      }
      .tool-icon:hover{
        background: #e1e4e8;
        cursor: pointer;
      }
    }
  }
  .main-body{
    width: 100%;
    height: 100%;
    display: flex;
    .bytemd-editor{
      width: 50%;
      height: 100%;
      background: rgb(248,249,250);
      border-right: 1px solid #ddd;
    }
    .bytemd-preview{
      width: 50%;
      height: 100%;
    }
  }
}
</style>
