// 重载
interface Padding {
  top: number
  left: number
  right: number
  bottom: number
}

function padding(value: number)
function padding(left: number, right: number)
function padding(left: number, right?: number, top?: number, bottom?: number): Padding {
  return {
    top: top ?? left,
    right: right ?? left,
    left: left ?? left,
    bottom: bottom ?? left
  }
}


// 声明
type PaddingFn = {
  (left: number): Padding;
  (left: number, right: number): Padding;
}