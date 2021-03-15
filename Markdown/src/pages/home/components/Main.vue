<template>
  <div class="main">
    <div class="main-toolbar">
      <div class="tool-left">
        <div class="iconbox title">
          <span class="iconfont tool-icon">&#xe609;</span>
          <div class="title-list">
            <div
              class="title-item"
              @click="addH1"
            >H1一级标签</div>
            <div
             class="title-item"
             @click="addH2"
            >H2二级标签</div>
            <div
             class="title-item"
             @click="addH3"
            >H3三级标签</div>
            <div
             class="title-item"
             @click="addH4"
            >H4四级标签</div>
            <div
             class="title-item"
             @click="addH5"
            >H5五级标签</div>
            <div
             class="title-item"
             @click="addH6"
            >H6六级标签</div>
          </div>
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
          <span
           class="iconfont tool-icon"
           @click="addImg"
          >&#xe6f5;</span>
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
    addH1: function () {
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
      arrays[flag] = '# ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
    },
    addH2: function () {
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
      arrays[flag] = '## ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 3)
      })
    },
    addH3: function () {
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
      arrays[flag] = '### ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 4)
      })
    },
    addH4: function () {
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
      arrays[flag] = '#### ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 5)
      })
    },
    addH5: function () {
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
      arrays[flag] = '##### ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 6)
      })
    },
    addH6: function () {
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
      arrays[flag] = '###### ' + str
      this.inputContent = arrays.join('\n')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 7)
      })
    },
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
      console.log('ok')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 1)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 1)
      })
    },
    addImg: function () {
      // 判断光标位置
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      // 判断光标在第几行
      let arrayf = value.split('')
      // 判断第flag+1行是否已经斜体
      if (arrayf[position]) {
        arrayf.splice(position, 0, '![](url)')
      } else {
        arrayf[position] = '![](url)'
      }
      this.inputContent = arrayf.join('')
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
    },
    addCode: function () {
      let dom = document.querySelector('.editor')
      let value = dom.value
      let position = range.getCursortPosition(dom)
      let flag = 0
      let ex = 0
      // 判断光标在第几行
      let arrayf = value.split('')
      for (let i = 0; i < position; i++) {
        if (arrayf[i] === '\n' && i !== position) flag++
      }
      for (let i = position; i < arrayf.length; i++) {
        if (arrayf[i] === '\n' || i === arrayf.length - 1) {
          ex = i - position + 1
          break
        }
      }
      // 初始话第二个数组
      let arrays = value.split('\n')
      if (arrays[flag]) {
        arrays.splice(flag + 1, 0, '```js', '```')
      } else {
        arrays.splice(flag, 0, '```js', '```')
      }
      this.inputContent = arrays.join('\n')
      position = position + ex + 5
      console.log(position)
      this.$nextTick(() => {
        range.setCaretPosition(dom, position)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
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
      this.$nextTick(() => {
        range.setCaretPosition(dom, position + 2)
      })
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.inputContent, {
        sanitize: true
      })
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
        height: 36px;
        position: relative;
        .title-list{
          display: none;
          position: absolute;
          top: 35px;
          left: 0;
          width: 95px;
          height: 150px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 5px;
          text-align: center;
          background: white;
          border: 1px solid #c9cdd4;
          .title-item{
            padding: 0;
            line-height: 25px
          }
          .title-item:hover{
            cursor: pointer;
            background: #c9cdd4;
          }
        }
        .title-list:hover{
          display: block;
        }
      }
      .iconbox:hover{
        .title-list{
          display: block;
        }
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
