/* 为了完成快捷设置按钮功能的辅助函数 */

// 定位到光标的位置
function getCursortPosition(textDom) {
  var cursorPos = 0;
  if (document.selection) {
      // IE Support
      textDom.focus();
      var selectRange = document.selection.createRange();
      selectRange.moveStart('character', -textDom.value.length);
      cursorPos = selectRange.text.length;
  } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support
      cursorPos = textDom.selectionStart;
  }
  return cursorPos;
}

// 设置光标位置
function setCaretPosition(textDom, pos) {
  if (textDom.setSelectionRange) {
      // IE Support
      textDom.focus();
      textDom.setSelectionRange(pos, pos);
  } else if (textDom.createTextRange) {
      // Firefox support
      var range = textDom.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
  }
}

// 光标后插文本
function insertAfterText(textDom, value) {
  var selectRange;
  if (document.selection) {
      // IE Support
      textDom.focus();
      selectRange = document.selection.createRange();
      selectRange.text = value;
      textDom.focus();
  } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support
      var startPos = textDom.selectionStart;
      var endPos = textDom.selectionEnd;
      var scrollTop = textDom.scrollTop;
      textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length);
      textDom.focus();
      textDom.selectionStart = startPos + value.length;
      textDom.selectionEnd = startPos + value.length;
      textDom.scrollTop = scrollTop;
  } else {
      textDom.value += value;
      textDom.focus();
  }
}

export default {
  getCursortPosition,
  setCaretPosition
}