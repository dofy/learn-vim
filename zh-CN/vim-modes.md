# Vim 的模式

Vim 的同一个按键在不同模式中会做不同的事。初学时不需要记住所有模式，只要先建立一
个循环：在 Normal 模式选择操作，需要输入文字时进入 Insert 模式，完成后按 `Esc`
回到 Normal 模式。

```text
Normal -- i/a/o 等 --> Insert
   ^                    |
   +------- Esc --------+
```

不确定自己在哪个模式时，按一下 `Esc` 通常是安全的起点。

## Normal 模式

Normal 模式是 Vim 的默认模式，也是组织其他操作的中心。在这个模式中，按键代表移动、
删除、复制、粘贴或撤销等命令，而不是输入文字。例如 `h`、`j`、`k`、`l` 移动光标，
`u` 撤销修改。这些操作将在[第一章](chapter01.md)开始介绍。

## Insert 模式

Insert 模式用来输入文字。在 Normal 模式中，可以从不同位置开始插入：

- `i` 在当前字符前开始插入
- `a` 在当前字符后开始插入
- `I` 在当前行第一个非空白字符前开始插入
- `A` 在当前行末尾开始插入
- `o` 在当前行下方新建一行
- `O` 在当前行上方新建一行

输入完成后按 `Esc` 返回 Normal 模式。`Ctrl-[` 也等同于 `Esc`。

## Visual 模式

Visual 模式先选择一段文本，再对选区执行删除、复制等操作：

- `v` 按字符选择
- `V` 按整行选择
- `Ctrl-v` 按矩形区域选择，即 Visual Block 模式

进入 Visual 模式后，仍可使用 Normal 模式的移动命令扩展选区，按 `Esc` 取消选择。

> 将光标停在下面代码块的 `{` 上，按 `v`，再按 `%` 选中到匹配的 `}`；按 `Esc`
> 取消。完成后确认自己已经回到 Normal 模式。

```javascript
const bio = () => {
  console.log('自由引導人民。');
  console.log('· Why so serious? ·');
};
```

## Command-line 模式

在 Normal 模式下按 `:` 进入 Command-line 模式，用来执行 `:w`、`:q`、`:e`、`:set`、
`:help` 等命令。输入完成后按 `Enter` 执行，按 `Esc` 取消。

遇到陌生命令时，可以执行 `:help <命令>`，例如 `:help :write`。Vim 自带的帮助比死记
完整命令表更可靠。

## 先练这个循环

> 确保在 Normal 模式，按 `i` 输入三个字符，再按 `Esc`；按 `u` 撤销；按 `Ctrl-r`
> 重做。最后再按一次 `Esc`。能清楚说出每一步所在的模式，就可以进入
> [第一章](chapter01.md)了。

Vim 还有 Replace、Select、Ex、Prompt、Terminal 等模式。需要用到时再通过 `:help`
学习即可，现在没必要背下来。
