import React, { FC, memo, MouseEventHandler, RefObject } from "react";
import { IconAt } from "@tabler/icons";
interface iProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  element: RefObject<HTMLElement>;
}
const AtSender: FC<iProps> = ({ element, onClick }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const selection = getSelection();
    console.log(selection, selection.getRangeAt(0));
    onClick?.(event);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-gray-500 hover:text-black"
    >
      <IconAt size={20} stroke={1.5} />
    </button>
  );
};
export default memo(AtSender);

// 表情点击事
function test() {
  // 获取编辑框对象
  var edit = document.getElementById("edit");
  // 获取输入框对象
  var emojiInput = document.getElementById("emojiInput");
  // 编辑框设置焦点
  edit.focus();
  // 获取选定对象
  var selection = getSelection();
  // 判断是否有最后光标对象存在
  if (lastEditRange) {
    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
    selection.removeAllRanges();
    selection.addRange(lastEditRange);
  }
  // 判断选定对象范围是编辑框还是文本节点
  if (selection.anchorNode.nodeName != "#text") {
    // 如果是编辑框范围。则创建表情文本节点进行插入
    var emojiText = document.createTextNode(emojiInput.value);

    if (edit.childNodes.length > 0) {
      // 如果文本框的子元素大于0，则表示有其他元素，则按照位置插入表情节点
      for (var i = 0; i < edit.childNodes.length; i++) {
        if (i == selection.anchorOffset) {
          edit.insertBefore(emojiText, edit.childNodes[i]);
        }
      }
    } else {
      // 否则直接插入一个表情元素
      edit.appendChild(emojiText);
    }
    // 创建新的光标对象
    var range = document.createRange();
    // 光标对象的范围界定为新建的表情节点
    range.selectNodeContents(emojiText);
    // 光标位置定位在表情节点的最大长度
    range.setStart(emojiText, emojiText.length);
    // 使光标开始和光标结束重叠
    range.collapse(true);
    // 清除选定对象的所有光标对象
    selection.removeAllRanges();
    // 插入新的光标对象
    selection.addRange(range);
  } else {
    // 如果是文本节点则先获取光标对象
    var range = selection.getRangeAt(0);
    // 获取光标对象的范围界定对象，一般就是textNode对象
    var textNode = range.startContainer;
    // 获取光标位置
    var rangeStartOffset = range.startOffset;
    // 文本节点在光标位置处插入新的表情内容
    textNode.insertData(rangeStartOffset, emojiInput.value);
    // 光标移动到到原来的位置加上新内容的长度
    range.setStart(textNode, rangeStartOffset + emojiInput.value.length);
    // 光标开始和光标结束重叠
    range.collapse(true);
    // 清除选定对象的所有光标对象
    selection.removeAllRanges();
    // 插入新的光标对象
    selection.addRange(range);
  }
  // 无论如何都要记录最后光标对象
  lastEditRange = selection.getRangeAt(0);
}
