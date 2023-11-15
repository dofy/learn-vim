# Vim 实操教程（Learning Vim）

[English](../en/README.md) | [简体中文](README.md)

## 引言

以我个人学习 Vim 的经验来看，通过看文档或看其他人操作其实是很难真正学会 Vim 的，
你必须在实际应用中，进入真实场景才能逐渐熟悉并掌握相关命令。

因此，为了同时满足学习和操作的需求，项目中的文件都采用了 Markdown 格式，既可以当
作说明文档来阅读，也可以用 Vim 打开文件进行实际操作（建议采用后者）。

## 如何使用

1. 进入控制台
2. clone 项目到本地

```bash
git clone https://github.com/dofy/learn-vim.git
```

3. 进入项目文件夹

```bash
cd learn-vim
```

4. 用 Vim 打开文件 `file-one.md`

```bash
vim file-one.md
```

## 排版规范

```Markdown
## 大标题表示一大类

### 小标题表示该大类下的小分类

没有任何格式的文本为正常描述，只有阅读功能。

> 嵌入到引用块中的文本为操作指示，你可以按照里面提到的内容进行操作
>
> 同时操作符或命令会包含在类似 `:w` 的符号中

命令中形如 f<X> 中的 < 和 > 不需要打出来，<X> 代表一个变量，即你可以打 fa 或 fb 亦或 fC

_注意：命令区分大小写（需要注意的事项会出现在当前行这样的符号中）_
```

> **Note**
>
> 如果你已经有了自己的 `.vimrc` 文件 (参考 [第四章](file-four.md)) 并在其中修改
> 了一些默认设置，那么可能导致某些操作与教程不符。如遇此情况，你可以用下面的命令
> 来运行 `Vim`：
>
> ```bash
> # 不加载配置文件
> vim -u NONE
> # 加载特定配置文件
> vim -u <filename>
> ```

## 导航

### 基础操作

1. [光标的移动](file-one.md)
1. [打开文件、查找内容](file-two.md)
1. [文档的修改与保存](file-three.md)
1. [一些小技巧](file-four.md)
1. [分屏与标签页](file-five.md)
1. [块操作](file-six.md)
1. [Vim 中的宏](file-seven.md)
1. [Vim 的模式](file-modes.md)

### 附加内容

1. [Vim 插件](plugin.md)
1. [插件推荐](plugins/index.md)
   1. [NERDTree](plugins/nerdtree.md)
   1. [EasyAlign](plugins/easyalign.md)
   1. [Airline & Themes](plugins/airline.md)
   1. [surround.vim](plugins/surround.md)

> **Note**
>
> - 教程中会有下一章或相关章节的导航，定位到文件名执行 `gf`（goto file）就可以打
>   开相关文件
> - 你可以随时打开相关章节查看，然后用 `:bp` 回到之前的文件（该命令会
>   在[第二章](file-two.md)中讲到）
> - 当你用 `:q` 或 `:qa` 退出教程时可能会收到文件未保存的错误提醒，试试在命令后
>   面加上 `!`

## TODO

- [ ] vimdiff
- [ ] more settings
- [x] other mode
- [ ] text object
- [x] [plugins](plugin.md)

## 推荐几个 Vim 配置方案

- [dofy / **7th-vim**][7th-vim]
- [kepbod / **ivim**][kepbod]
- [chxuan / **vimplus**][chxuan]
- [SpaceVim / **SpaceVim**][spacevim]

## 推荐另外几个出色的 Vim 教程

- 控制台运行 `vimtutor` 这是 Vim 官方实操教程
- [简明 Vim 练级攻略][coolshell] 很不错的入门教程
- [Vim Galore][vimgalore] 更新频繁，Vim 进阶必读
- [每日一 Vim][liuzhijun] 共 30 篇，内容比较全
- [Vim 教程网][vimjc] 一个女生维护的 Vim 中文教程网站，持续更新中
- [A book for learning the Vim editor][learnvim] 另一个 Learn Vim （英语）
- [Open Vim][openvim] 交互式 Vim 教程
- [QuickRef.ME/vim][quickref] Vim cheatsheet

## Cheatsheets

> [Vim Cheat Sheet][cheatsheets1]

> [A Great Vim Cheat Sheet][cheatsheets2]

> [![003][cheatsheets3]][cheatsheets3]

> [![004][cheatsheets4]][cheatsheets4]

**再次感谢您的关注！如果爱，请分享。爱生活，爱 VIM！**

[7th-vim]: https://github.com/dofy/7th-vim
[kepbod]: https://github.com/kepbod/ivim
[chxuan]: https://github.com/chxuan/vimplus
[spacevim]: https://github.com/SpaceVim/SpaceVim
[coolshell]: http://coolshell.cn/articles/5426.html
[vimgalore]: https://github.com/mhinz/vim-galore
[liuzhijun]: http://liuzhijun.iteye.com/category/270228
[vimjc]: https://vimjc.com
[learnvim]: https://github.com/iggredible/Learn-Vim
[openvim]: https://openvim.com/
[quickref]: https://quickref.me/vim
[cheatsheets1]: https://vim.rtorr.com/lang/zh_tw
[cheatsheets2]: https://vimsheet.com/
[cheatsheets3]: http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
[cheatsheets4]: https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
