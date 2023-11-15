# Vim 的模式

本章节将介绍 Vim 中的几种模式，之前的内容中可能已经提及到了一些，比如 Normal 模式、 Insert
模式以及 Visual 模式等。除了这些模式之外，Vim 还有一些其他的模式，比如 Visual-line 模式、
Command-line 模式、Ex 模式等等。这些模式的区别在于它们的用途不同，而且它们的按键映射也不同。

## Normal 模式

Normal 模式是 Vim 的默认模式，也是最常用的模式。在 Normal 模式下，按键的作用是 Vim 命令，比如
`h`、`j`、`k`、`l`、`w`、`b`、`0`、`$`、`gg`、`G`、`dd`、`yy`、`p`、`u` 等等。这些命令的
作用是移动光标、删除、复制、粘贴、撤销等等。这些按键已经在[第一章](file-one.md)中介绍过，大家可以
回顾一下。

## Insert 模式

Insert 模式是 Vim 中最常用的模式之一，它的作用是在文本中插入内容。在 Normal 模式下按 `i` 进入
Insert 模式，按 `Esc` 退出 Insert 模式。

进入 Insert 模式还可以通过按 `I`、`a`、`A`、`o`、`O`、`r`、`R` 等键来实现，这些按键的作用是在
当前光标位置的前面或后面插入内容，或者在当前行的上面或下面插入新的一行。

- `i` 在当前光标位置的前面插入内容
- `I` 在当前行的开头插入内容
- `a` 在当前光标位置的后面插入内容
- `A` 在当前行的结尾插入内容
- `o` 在当前行的下面插入新的一行
- `O` 在当前行的上面插入新的一行
- `r` 替换当前光标位置的字符
- `R` 从当前光标位置开始替换字符，直到按下 `Esc`

> 在当前文档中测试一下这些按键的作用吧。

## Visual 模式

Visual 模式是 Vim 中最常用的模式之一，它的作用是选择文本。在 Normal 模式下按 `v` 进入 Visual
模式，按 `j`、`k`、`h`、`l` 移动光标就可以进行文本选择（当然其他移动光标的操作也是支持的），按
`Esc` 退出 Visual 模式。

> 将光标停留在下面代码块的 `{` 或 `}` 上，按 `v` 进入 Visual 模式，然后按 `%` 选取整个代码块。

```javascript
const bio = () => {
  console.log('自由引導人民。');
  console.log('· Why so serious? ·');
};
```

除了按 `v` 进入 Visual 模式之外，还可以通过按 `V` 进入 Visual Line 模式，此时选取的是整行文本。
按 `Ctrl + v` 进入 Visual Block 模式，此时选取的是矩形区域的文本。

## Command-line 模式

在 Normal 模式下按 `:` 即可进入 Command-line 模式，按 `Esc` 退出 Command-line 模式。在
Command-line 模式下，可以执行一些 Vim 命令，比如 `:w`、`:q`、`:wq`、`:e`、`:set`、`:help`
等等。

具体的 Vim 命令可以参考[官方文档](https://vimhelp.org/#Command-line)。

## Ex 模式

在 Normal 模式下按 `Q` 即可进入 Ex 模式。在 Ex 模式下，可以执行一些 Vim 命令，比如 `w`、`q`、
`wq`、`e`、`set`、`help` 等等。输入命令后按 `Enter` 即可执行。

退出 Ex 模式可以通过执行 `vi` 命令来实现，或者直接 `q` 退出整个 Vim。

具体的 Vim 命令可以参考[官方文档](https://vimhelp.org/#Ex)。

## 其他模式

除了上面介绍的模式之外，Vim 还有一些其他的模式，比如 Replace 模式、Select 模式、Prompt 模式、
Terminal 模式等等。这些模式的用途不同，而且它们的按键映射也不同，这里就不一一介绍了。
