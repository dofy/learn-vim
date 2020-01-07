# surround.vim

成对 添加、替换、删除 `引号`、`括号` 以及`XML 标签`

## 项目地址

https://github.com/tpope/vim-surround

## 安装

> 添加 `.vimrc` 配置

```vim
Plug 'tpope/vim-surround'
```

## 使用（翻译自官方文档）

先从最简单的例子开始。 在下面字符串内进行如下操作 `cs"'` （注意要在 `NOEMAL` 模式下进行）

    "Hello world!"

字符串将变成

    'Hello world!'

再继续操作 `cs'<q>` 使其变成

    <q>Hello world!</q>

将成对标签替换为 `"` 进行如下操作 `cst"`，字符串将变成

    "Hello world!"

`ds"` 将删除成对的 `"`

    Hello world!

现在把光标移动到 "Hello" 这个单词内, 键入 `ysiw]` （`iw` 是文本对象）

    [Hello] world!

接下来替换成大括号，并加上空格（使用 `}` 而不是 `{` 可以去掉空格）： `cs]{`

    { Hello } world!

现在把整行放入小括号内，使用 `yssb` 或 `yss)`

    ({ Hello } world!)

恢复到原始的字符串： `ds{ds)`

    Hello world!

将 Hello 嵌入斜体标签内： `ysiw<em>`

    <em>Hello</em> world!

最后，我们来试试 `VISUAL` 模式。 键入大写的 V （行 `VILUAL` 模式） 接下来是
`S<p class="important">`

    <p class="important">
      <em>Hello</em> world!
    </p>
