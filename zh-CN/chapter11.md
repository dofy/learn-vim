# 第十一章：多文件搜索与替换

[第三章](chapter03.md)里我们学过 `:%s/foo/bar/g`，它能把当前文件里的 `foo` 全换成
`bar`。但真实项目里更常见的需求是："把整个项目里的 `foo` 全改成 `bar`"，这时候单
文件的 `:%s` 就力不从心了。

这一章我们把搜索替换的范围从"一个文件"扩展到"一堆文件"。

## 多文件查找

- `:vimgrep /pattern/ file...` 在指定文件中查找 pattern，结果放入 quickfix 列表
- `:vimgrep /pattern/g **/*.js` 在当前目录及所有子目录的 `.js` 文件中查找
- `:grep pattern file...` 调用外部 grep 程序查找（更快，但依赖系统 grep）

`**` 表示递归匹配所有子目录，`*.js` 匹配指定后缀，两者组合就是"所有层级的 js 文件"。

_注意：`:vimgrep` 是 Vim 内置实现，跨平台但较慢；`:grep` 借助外部工具（可通过
`grepprg` 配置成 `rg`、`ag` 等更快的搜索器）。文件多时优先用 `:grep`。_

## quickfix 列表

上面的查找结果会存进一个叫 **quickfix** 的列表，它是 Vim 里贯穿多文件操作的核心。

- `:copen` 打开 quickfix 窗口（列出所有匹配项，回车可跳到对应位置）
- `:cclose` 关闭 quickfix 窗口
- `:cnext` 缩写 `:cn` 跳到下一个匹配
- `:cprev` 缩写 `:cp` 跳到上一个匹配
- `:cfirst` / `:clast` 跳到第一个 / 最后一个匹配
- `:cc <N>` 跳到第 N 个匹配

> 试试对本教程目录自身搜索（只读，安全）：先确保 Vim 的工作目录在 `zh-CN/`，执行
> `:vimgrep /Vim/g *.md`，然后 `:copen` 看看列表，用 `:cn` / `:cp` 在匹配间跳转。

## 批量替换

有了 quickfix 列表，就能对**列表里的每个文件**批量执行命令了。

- `:cdo {cmd}` 对 quickfix 列表中的**每一项**执行 cmd
- `:cfdo {cmd}` 对 quickfix 列表中的**每个文件**执行 cmd

典型的跨文件替换套路是"先 vimgrep 搜出来，再 cdo 替换"：

```vim
:vimgrep /foo/g **/*.js
:cdo s/foo/bar/g | update
```

- 第一行把所有含 `foo` 的位置搜进 quickfix
- 第二行对每一项执行替换，`| update` 表示替换后顺便保存该文件

_注意：`s/foo/bar/g` 后面的 `| update` 很关键，否则改动只在内存里、没写盘。如果想
逐个确认，把 `g` 换成 `gc`（confirm），Vim 会在每处替换前问你。_

## 参数列表 argument list

除了 quickfix，Vim 还有一个"参数列表"，适合明确指定要处理的一组文件。

- `:args **/*.js` 把匹配的文件加入参数列表
- `:args` 查看当前参数列表
- `:argdo {cmd}` 对参数列表中的每个文件执行 cmd

例如全项目替换也可以这样：

```vim
:args **/*.js
:argdo %s/foo/bar/g | update
```

`:argdo` 和 `:cdo` 的区别在于作用范围：`:argdo` 针对"你指定的文件集"，`:cdo` 针对
"上次搜索命中的具体位置"。

> 练习建议：在一个**练习用的临时目录**里试 `:cdo` / `:argdo` 的批量替换，别拿正经
> 项目直接练手。改之前先 `git commit` 或备份，Vim 的批量替换是真的会全改的。

---

至此，从光标移动到多文件批量操作，这十一章覆盖了日常工作中高频用到的绝大部分 Vim
技能。如果 Vim 中遇到了什么问题，或者教程中遗漏了什么常规操作，欢迎在
[issues](../../issues) 中提出来，我会尽我所能给予回答或完善到教程中。

**再次感谢您的关注！如果爱，请分享。爱生活，爱 VIM！**
