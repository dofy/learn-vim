# 第五章：分屏与标签页

## 窗口分屏

工作中经常会遇到这种情况，就是需要参照其他文档编辑当前文档（场景：翻译），或者从
另外一个文档 copy 代码到当前文档（场景：复制 html 元素类名到 css 文档），这时候
就是你最需要分屏的时候。

### 分屏方式

- `:split` 缩写 `:sp` or `Ctrl-w s` 上下分屏
- `:vsplit` 缩写 `:vs` or `Ctrl-w v` 左右分屏
- `:diffsplit` 缩写 `:diffs` diff 模式打开一个分屏，后面可以加上 {filename}

### 窗口跳转

- `Ctrl-w w` 激活下一个窗口
- `Ctrl-w j` 激活下方窗口
- `Ctrl-w k` 激活上方窗口
- `Ctrl-w h` 激活左侧窗口
- `Ctrl-w l` 激活右侧窗口

### 移动分屏

- `Ctrl-w L` 移动到最右侧
- `Ctrl-w H` 移动到最左侧
- `Ctrl-w K` 移动到顶部
- `Ctrl-w J` 移动到底部

_注意：区分大小写。另外，可以将底部的屏幕移动到右侧，实现上下分屏到左右分屏的转
换。_

### 屏幕缩放

- `Ctrl-w =` 平均窗口尺寸
- `Ctrl-w +` 增加高度
- `Ctrl-w -` 缩减高度
- `Ctrl-w _` 最大高度
- `Ctrl-w >` 增加宽度
- `Ctrl-w <` 缩减宽度
- `Ctrl-w |` 最大宽度

> 实践！实践！实践！

## 标签页

[第二章](chapter02.md)中提到过的 buffer 和刚刚讲到的分屏操作都很适合在少量文件之
间进行切换，文件超过 3 个我觉得就不方便了，而标签页则更适合多文件之间的切换。

### 创建标签页

- `:tabnew` or `:tabedit` 缩写 `:tabe` 打开新标签页
- `Ctrl-w gf` 在新标签页中打开当前光标所在位置的文件名

_注意：`:tabnew` 和 `:tabedit` 后面都可以跟一个 <空格><文件名> 用以在新标签页中
打开指定文件，还可以在 `:` 后面加一个数字，指出新标签页在列表中的位置（从 0 开始
）。_

### 切换标签页

- `gt` or `:tabnext` 缩写 `:tabn` 下一个标签页（最后一个会循环到第一个）
- `gT` or `:tabprevious` 缩写 `:tabp` 上一个标签页（第一个会循环到最后一个）
- `:tabrewind` 缩写 `:tabr` or `:tabfirst` 缩写 `:tabfir` 到第一个
- `:tablast` 缩写 `:tabl` 到最后一个标签页

### 关闭标签页

- `:tabclose` 缩写 `:tabc` 关闭当前标签页
- `:-tabc` 关闭上一个标签页
- `:+tabc` 关闭下一个标签页
- `:tabonly` 缩写 `:tabo` 关闭其他标签页

[下一章](chapter06.md)将介绍块操作。
