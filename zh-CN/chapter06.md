# 第六章：块操作

我们经常会遇到这种情况：某处有一个多行文本，我们要把他复制到代码中用来初始化一个
数组。 大部分时候我们会这么做：

- 写好数组声明；
- 把内容复制到中括号内（大概长成下面那段文本的样子）
- 然后行首加 `'` 行尾加 `',`，重复直到最后一行（想象一下这段文本有 50 行）

> 有了 Vim 块操作就不用这么麻烦了，按 `014gg`，然后跟着选中那一行的指示操作。

```javascript
var myArray = [
Ctrl-v 进入块操作，$ 到行尾，j 到下一行（做！）。
按 j 到下一行
下面还好多行，干脆来个 4j 多跳几行
https://www.yahaha.net
https://www.yahaha.net
以后看好行号再跳！现在按 A 插入，然后输入 <单引号><逗号><Esc> 完成第一步。
// Oops... 跳多了，没事，按 k 回到上一行
];
```

> 现在已经完成了第一步，还需要补前面的 `'`，按 `14gg` 回到那一行，再操作一次，但
> 是这次有三个地方要变化一下：
>
> 1. 第一行按 `$` 时改按 `0`，因为这次要在行首插入；
> 1. 末行按 `A` 时改按 `I`，块操作中 `A` 是字符后插入， `I` 是字符前插入；
> 1. 最后按 `<单引号><Esc>`。
>
> 最后再做些收尾工作，`19gg$x` 删掉最后一行结尾处的 `,`，然后 `14gg7==` 把代码缩
> 进一下。
>
> Done!

_注意：选择行首行尾的操作也可以在选择完要处理的内容之后执行，即
`Ctrl-v jjj$A',<Esc>`_

接下来我们说说 [Vim 中的宏](chapter07.md)。
