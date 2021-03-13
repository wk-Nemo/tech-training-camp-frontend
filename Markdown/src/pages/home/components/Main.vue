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
      <div class="bytemd-editor">
        <textarea
         class="editor"
         v-model="inputContent"
        ></textarea>
      </div>
      <div
       class="bytemd-preview"
       v-html="compiledMarkdown"
      >
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
  // highlight: function(code) {
  //     return hljs.highlightAuto(code).value
  // }
})

export default {
  name: 'HomeMain',
  data () {
    return {
      inputContent: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.inputContent, {
        sanitize: true
      })
    }
  },
  watch: {
    inputContent: function () {
      console.log(marked(this.inputContent, {
        sanitize: true
      }))
    }
  }
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
    overflow: hidden;
    .bytemd-editor{
      width: 50%;
      height: 100%;
      padding: 20px;
      background: rgb(248,249,250);
      border-right: 1px solid #ddd;
      .editor{
        font-size: 17px;
        background: rgb(248,249,250);
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        line-height:1.5;
        font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
        vertical-align:middle;
        overflow: auto;
        resize: vertical;
        outline: 0 none;
        border: none;
      }
    }
    .bytemd-preview{
      width: 50%;
      height: 100%;
      padding: 20px;
    }
  }
}
</style>
