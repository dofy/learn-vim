# EasyAlign

EasyAlign 是一款用来做字符对齐的插件，简直是强迫症患者的福音。

## 项目地址

https://github.com/junegunn/vim-easy-align

## 安装

> 修改 `.vimrc` 配置，在 `call plug#begin()` 后面添加如下配置

```vim
Plug 'junegunn/vim-easy-align'
```

_注意：vim 插件管理器的使用请参考[plugin.md](../plugin.md#插件管理)_

> 运行 vim 并执行命令 `:PlugInstall`, 可能会得到如下提示：
>
```
1 Updated. Elapsed time: 6.008607 sec.
2 [===]
3
4 - Finishing ... Done!
5 - vim-github-dashboard: Already installed
6 - nerdtree: Already installed
7 - vim-easy-align: Resolving deltas: 100% (136/136), done.
```

## 使用

### 配置

> 添加 `.vimrc` 配置如下：

```vim
" EasyAlign
xmap ga <Plug>(EasyAlign) " Visual 模式下快捷键
nmap ga <Plug>(EasyAlign) " Normal 模式下快捷键

" 配置一些自定义符号
let g:easy_align_delimiters = {
\ '>': { 'pattern': '>>\|=>\|>'  },
\ '/': {
\     'pattern':         '//\+\|/\*\|\*/',
\     'delimiter_align': 'l',
\     'ignore_groups':   ['!Comment'] },
\ ']': {
\     'pattern':       '[[\]]',
\     'left_margin':   0,
\     'right_margin':  0,
\     'stick_to_left': 0
\   },
\ ')': {
\     'pattern':       '[()]',
\     'left_margin':   0,
\     'right_margin':  0,
\     'stick_to_left': 0
\   },
\ 'd': {
\     'pattern':      ' \(\S\+\s*[;=]\)\@=',
\     'left_margin':  0,
\     'right_margin': 0
\   }
\ }
```

### 实验

> 在下面的代码中尝试如下操作：

```javascript
let a=1;// one
let  bcd=test=2; // two
let      longword=others= 'some content';// string
```

> 首先定位光标到上面代码中的任意一句，按 `gaip<Space>`，应该会得到
> 如下结果

```javascript
let a=1;// one
let bcd=test=2; // two
let longword=others= 'some content';// string
```

> 保持光标不动，按 `gaip=`，应该会得到如下结果

```javascript
let a        = 1;// one
let bcd      = test=2; // two
let longword = others= 'some content';// string
```

> 保持光标不动，按 `u`，再按 `gaip*=`，应该会得到如下结果

```javascript
let a        = 1;// one
let bcd      = test   = 2; // two
let longword = others = 'some content';// string
```

下面解释一下按键的意思：

- `gaip `
  - `ga` 是开启 EasyAlign 的快捷键，我们在 `.vimrc` 配置文件中定义的
  - `ip` 是定义操作区域，可以用任意选择操作命令完成，`ip` 是选择当前段落，如果光
  标在代码第一行，则可以用 `2j` 代替 `ip`
  - 此时命令区域会出现 `:EasyAlign (_)` 字样，表示等待匹配输入
  - 按下 `<Space>` 是要将第一个空格前后对齐
- `gaip=`
  - 意义同上，`=` 即将`<等号>`前后对齐
- `gaip*=`
  - 为了看到更明显的效果，先用 `u` 撤销了前面的操作
  - `=` 前面的  `*` 是一个描述符，可以是数字，代表第几个等号，也可以是负数，代表
  倒数第几个，也可以是星号，代表所有。

> 如果确定修改好了上面提到的配置，你还可以尝试 `gaip/` 来对齐注释部分，执行后看
> 上去会像下面这样

```javascript
let a        = 1;                       // one
let bcd      = test   = 2;              // two
let longword = others = 'some content'; // string
```

### 匹配符说明

上面提到的 `<Space>` `=` 都是 EasyAlign 中定义好的特殊符号，用来表示某一类特征符
，具体可以参考下表：

| 按键 | 使用场景说明 |
| --- | --- |
| `<Space>` | 匹配空白符  |
| `=` | 包含等号的操作符（`=`, `==`, `!=`, `+=`, ...） |
| `:` | 应用于 JSON 或 YAML 格式 |
| `.` | 应用于多行点语法调用 |
| `,` | 应用于多行参数列表 |
| `&` | 对 [LaTeX table](https://en.wikibooks.org/wiki/LaTeX/Tables) 进行格式化，匹配 `&` 和 `\\` |
| `#` | 应用于对 Ruby/Python 的注释的对齐 |
| `<Bar>` | Markdown 表格 |

_注意：上表中提到的 `<Bar>` 键即 `|` 键_

> 尝试在上表中按 `gaip*|` 对 markdown 表格进行对齐，按 `u` 撤销操作，再尝试一下
> `gaip<Enter><Enter>*|`

## Tips

### 对齐方式

在等待输入匹配符，命令区出现 `:EasyAlign (_)` 字样时，可以按  `<Enter>` 键选择对
齐方向，按一次切换为右对齐，显示 `:EasyAlign[R] (_)`，再按一次切换为居中对齐，显
示为 `:EasyAlign[C] (_)`，再按切换回默认的左对齐，显示也恢复原样。

### 正则匹配

在等待输入匹配符时，按快捷键 `<Ctrl-x>` 进入匹配模式，此时输入你需要的匹配特征正
则即可匹配特殊组合。参考下面的文字：

```
Lorem<-ipsum
dolor  <--sit
amet<=  consectetur <- adipiscing
elit<~~ sed <~ do
eiusmod<-= tempor<=- incididunt
ut <== labore
```

> 尝试输入 `gaip*<Ctrl-x>`，此时进入正则匹配模式，继续输入 `<[-=~]*<Enter>` 会得
> 到如下所示结果。

```
Lorem    <- ipsum
dolor   <-- sit
amet     <= consectetur  <- adipiscing
elit    <~~ sed          <~ do
eiusmod <-= tempor      <=- incididunt
ut      <== labore
```

### 更多参考

更多内容请参考[项目页](https://github.com/junegunn/vim-easy-align)的介绍
