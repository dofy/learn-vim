# Vim 实操教程（Learn Vim）

以我个人学习 vim 的经验来看，通过看文档或看其他人操作其实是很难真正学会 vim 的，你必须在实际
应用中，进入真实场景才能逐渐熟悉并掌握相关命令。

因此，为了同时满足学习和操作的需求，项目中的文件都采用了 Markdown 格式，即可以当作说明文档来
阅读，也可以用 vim 打开文件进行实际操作（建议采用后者）。

## 如何使用

1. 进入控制台
1. clone 项目到本地
1. 进入项目文件夹
1. 执行命令 `vim file-one.md`

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

## 导航

### 基础操作

1. [光标的移动](file-one.md)
1. [打开文件、查找内容](file-two.md)
1. [文档的修改与保存](file-three.md)
1. [一些小技巧](file-four.md)
1. [分屏与标签页](file-five.md)
1. [块操作](file-six.md)
1. [vim 中的宏](file-seven.md)

### 附加内容

1. [vim 插件](plugin.md)
1. [插件推荐](plugins/index.md)
    1. [NERDTree](plugins/nerdtree.md)
    1. [EasyAlign](plugins/easyalign.md)
    1. [Airline & Themes](plugins/airline.md)

## Tips

- 教程中会有下一章或相关章节的导航，定位到文件名执行 `gf`（goto file）就可以打开相关文件
- 你可以随时打开相关章节查看，然后用 `:bp` 回到之前的文件（该命令会在[第二章](file-two.md)中讲到）
- 当你用 `:q` 或 `:qa` 退出教程时可能会收到文件未保存的错误提醒，试试在命令后面加上 `!`

## TODO

- [ ] vimdiff
- [ ] more settings
- [ ] other mode
- [x] [plugins](plugin.md)

## 推荐几个 vim 配置方案

  - [dofy / **7th-vim**](https://github.com/dofy/7th-vim)
  - [kepbod / **ivim**](https://github.com/kepbod/ivim)
  - [chxuan / **vimplus**](https://github.com/chxuan/vimplus)
  - [SpaceVim / **SpaceVim**](https://github.com/SpaceVim/SpaceVim)

## 推荐另外几个出色的 vim 教程

- 控制台运行 `vimtutor` 这是 vim 官方实操教程
- [简明 Vim 练级攻略](http://coolshell.cn/articles/5426.html) 很不错的入门教程
- [vim galore](https://github.com/mhinz/vim-galore) 更新频繁，vim 进阶必读
- [每日一Vim](http://liuzhijun.iteye.com/category/270228) 共 30 篇，内容比较全

## Cheatsheets

- http://www.nathael.org/Data/vi-vim-cheat-sheet.svg
- http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
- https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
- http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png

## 捐助
| 微信 | 支付宝 | Bitcoin |
| --- | --- | --- |
| ![微信支付][wechat] | ![支付宝支付][alipay] | ![Bitcoin][bitcoin] |

**再次感谢您的关注！如果爱，请分享。爱极客公园，爱 VIM！**

[wechat]: https://user-images.githubusercontent.com/344197/33651653-a02eb7be-daa1-11e7-9e09-82cfbeec2f98.png
[alipay]: https://user-images.githubusercontent.com/344197/33651835-2d494894-daa2-11e7-932f-06adb8795f15.png
[bitcoin]: https://user-images.githubusercontent.com/344197/33653103-d7863d68-daa6-11e7-9e74-f5d88954134e.png
