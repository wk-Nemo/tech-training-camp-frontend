s<template>
  <div class="main">
    <div class="main-toolbar">
      <div class="tool-left">
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe609;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addStrong"
          >&#xe606;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addItalic"
          >&#xe60d;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addQuote"
          >&#xe715;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addUrl"
          >&#xe701;</span>
        </div>
        <div class="iconbox">
          <span class="iconfont tool-icon">&#xe6f5;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addCode"
          >&#xe69f;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addUnorderList"
          >&#xe71a;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addOrderList"
          >&#xe6f0;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addLineThrough"
          >&#xeaf0;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addTask"
          >&#xe610;</span>
        </div>
        <div class="iconbox">
          <span
           class="iconfont tool-icon"
           @click="addForm"
          >&#xe667;</span>
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
import range from '../../../../static/js/range'
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
  methods: {
    addStrong: function () {
      // 判断光标位置,添加**
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      let len = str.length - 1
      // 判断第flag+1行是否已经斜体
      if (str[0] === '*' && str[1] === '*' && str[len] === '*' && str[len - 1] === '*') {
        arrays[flag] = str.slice(2, len - 1)
      } else {
        arrays[flag] = '**' + str + '**'
      }
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addItalic: function () {
      // 判断光标位置,添加**
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      let len = str.length - 1
      // 判断第flag+1行是否已经斜体
      if (str[0] === '*' && str[len] === '*') {
        arrays[flag] = str.slice(1, len)
      } else {
        arrays[flag] = '*' + str + '*'
      }
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addQuote: function () {
      // 判断光标位置
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      // 判断第flag+1行是否已经斜体
      arrays[flag] = '> ' + str
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addUrl: function () {
      // 判断光标位置
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      // 判断光标在第几行
      let arrayf = value.split('')
      // 判断第flag+1行是否已经斜体
      if (arrayf[position]) {
        arrayf.splice(position, 0, '[](url)')
      } else {
        arrayf[position] = '[](url)'
      }
      this.inputContent = arrayf.join('')
      range.setCaretPosition(dom, position)
    },
    addCode: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      // 判断第flag+1行是否已经斜体
      if (arrays[flag]) {
        arrays.splice(flag + 1, 0, '```js', '```')
      } else {
        arrays.splice(flag, 0, '```js', '```')
      }
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addUnorderList: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      // 判断第flag+1行是否已经斜体
      arrays[flag] = '- ' + str
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addOrderList: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      arrays[flag] = '1. ' + str
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addLineThrough: function () {
      // 判断光标位置,添加**
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      let str = arrays[flag]
      let len = str.length - 1
      // 判断第flag+1行是否已经斜体
      if (str[0] === '~' && str[1] === '~' && str[len] === '~' && str[len - 1] === '~') {
        arrays[flag] = str.slice(2, len - 1)
      } else {
        arrays[flag] = '~~' + str + '~~'
      }
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
    },
    addTask: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      // 判断光标在第几行
      let arrayf = value.split('')
      // 判断第flag+1行是否已经斜体
      if (arrayf[position]) {
        arrayf.splice(position, 0, '- [ ] ')
      } else {
        arrayf[position] = '- [ ] '
      }
      this.inputContent = arrayf.join('')
      range.setCaretPosition(dom, position)
    },
    addForm: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      // 判断第flag+1行是否已经斜体
      if (arrays[flag]) {
        arrays.splice(flag + 1, 0, '| 标题 |  |', '| --- | --- |', '|  |  |')
      } else {
        arrays.splice(flag, 0, '| 标题 |  |', '| --- | --- |', '|  |  |')
      }
      this.inputContent = arrays.join('\n')
      range.setCaretPosition(dom, position)
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
      // console.log(this.inputContent)
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
