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
blockquote{
  color: #666;
  padding: 1px 23px;
  margin: 22px 0;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
}
code{
  font-size: 15px;
  line-height: 1.75;
  padding: 15px 12px;
  margin: 0;
  word-break: normal;
  display: block;
  overflow-x: auto;
  color: #333;
  background: #f8f8f8;
}
table{
  /* line-height: 1.75;
  font-weight: 400; */
  display: inline-block!important;
  font-size: 12px;
  width: auto;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #f6f6f6;
}
thead{
  background: #f6f6f6;
  color: #000;
  text-align: left;
}
tr{
  box-sizing: border-box;
  padding: 12px 7px;
}
th{
  padding: 12px 7px;
  line-height: 24px;
  min-width: 100px;
  min-height: 100px;
}
p{
  margin: 0 !important;
  padding: 0;
}
#app{
  height: 100%;
}
</style>
