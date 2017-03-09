# NERDTree

NERDTree 是 vim 中的文件浏览插件，可以通过命令打开/关闭目录树并浏览/打开文件。

## 项目地址

https://github.com/scrooloose/nerdtree

## 安装

> 修改 `.vimrc` 配置，在 `call plug#begin()` 后面添加如下配置

```vim
Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }
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
6 - vim-easy-align: Already installed
7 - nerdtree: Resolving deltas: 100% (158/158), done.
```

## 使用

看到上面的提示说明插件安装成功，可以执行下面的命令来控制目录树了。

| 命令 | 说明 |
|---|---|
| `:NERDTree` | 打开目录树 |
| `:NERDTreeClose` | 关闭目录树 |
| `:NERDTreeToggle` | 打开/关闭目录树 |
| `:NERDTreeFind` | 打开目录树并定位到当前文件 |

## Tips

### 绑定快捷键

在 `.vimrc` 中添加如下配置：

```vim
" NERDTree
map <C-n> :NERDTreeToggle<CR>
" map 是快捷键映射命令
" <C-n> 定义了快捷键，表示 Ctrl-n
" 后面是对应的命令以及回车键 <CR>
```

重载 `.vimrc` 文件后，就可以用 `<Ctrl-n>` 来打开或关闭目录树了。

### 显示隐藏文件

NERDTree 插件默认是不显示隐藏文件的，有两种方式可以查看隐藏文件：

1. 打开目录树后按 `shift-i` 显示隐藏文件，再次按下，关闭显示隐藏文件
2. 在 `.vimrc` 中添加设置 `let NERDTreeShowHidden=1` 可在打开时默认显示隐藏文件
