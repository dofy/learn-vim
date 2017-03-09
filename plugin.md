# vim 插件

虽然 vim 已经提供了非常强大的功能，但如果有几款好用的插件辅佐，更能让你的工作事
半功倍。

## 安装插件

若要手动安装 vim 插件，需要完成如下步骤：

1. 创建 `.vim` 文件夹

  ```bash
  cd ~
  mkdir .vim
  ```

1. 在 `.vim` 文件夹中创建 `bundle` 文件夹

  ```bash
  cd .vim
  mkdir bundle
  ```

1. copy 或 clone 插件文件

  ```bash
  cd bundle
  git clone <repository-url>
  ```

  _注意：若插件没有 git 地址，也可以直接创建相关文件夹，并置一 `.vim` 文件于其中。_

1. 修改 `runtimepath`

  通过修改 `runtimepath` 属性，可以让 vim 找到你要加载的插件，要查看 `runtimepath`
  属性可用 `:set runtimepath` 命令

  启用新插件可在 `.vimrc` 中添加如下配置

  ```vim
  set runtimepath^=~/.vim/bundle/<folder>/
  " OR
  set runtimepath^=~/.vim/bundle/<name>.vim
  ```


## 插件管理

当你的插件越来越多，就需要一个管理器来管理 vim 插件了，市面上比较流行的插件管理
器有以下几款：

1. [vim-plug](https://github.com/junegunn/vim-plug)
1. [Vundle.vim](https://github.com/VundleVim/Vundle.vim)

我个人比较喜欢 vim-plug，下面就简单介绍一下这款管理器。

## vim-plug 介绍

### 项目地址

https://github.com/junegunn/vim-plug

### 安装

[下载 plug.vim](https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim)
文件，放入 `autoload` 文件夹中（一般该文件夹位于 `~/.vim/autoload/`）。

#### Unix

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

#### Neovim

```bash
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

#### Windows (PowerShell)

```bash
md ~\vimfiles\autoload
$uri = 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
(New-Object Net.WebClient).DownloadFile($uri, $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("~\vimfiles\autoload\plug.vim"))
```

### 配置

添加 `vim-plug` 的配置到 `~/.vimrc` 中：

1. 配置以 `call plug#begin()` 开始
1. 插件列表，以 `Plug` 命令开头
1. 用 `call plug#end()` 结束，以初始化插件系统
  - 这将会自动开启 `filetype plugin indent on` 和 `syntax enable`，如果不希望这
  样，你可以在该配置后重置你的设置，例如：`filetype indent off`, `syntax off`

#### Example

```vim
" 指定插件保存位置
call plug#begin('~/.vim/bundle')

" 注意要使用单引号

" 一些插件列表

" 如果插件在 GitHub 的地址是 https://github.com/junegunn/vim-easy-align
" 可以缩写成下面这样
Plug 'junegunn/vim-easy-align'

" 或者直接给定插件 git 地址
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" 多个 `Plug` 命令可以写在一行，用 `|` 符号分割
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" 更多配置详情查看官网介绍

" 初始化插件系统
call plug#end()
```

> 重启 vim 或重载 `.vimrc` 文件并执行 `:PlugInstall` 安装配置好的插件
>
> 重载命令是 `:source ~/.vimrc`

### 常用命令

| 命令 | 说明 |
|---|---|
| `PlugInstall [name ...] [#threads]` | 安装插件 |
| `PlugUpdate [name ...] [#threads]` | 安装或升级插件 |
| `PlugClean` | 清理插件 |
| `PlugUpgrade` | 升级 vim-plug |
| `PlugStatus` | 查看已安装插件的状态 |

_注意：更多命令查看官网介绍_

## 去哪里找插件

1. [GitHub](https://github.com) 上有很丰富的 vim 插件资源，可以通过 `vim plug`
关键字进行搜索[查看所有相关资源](https://github.com/search?utf8=%E2%9C%93&q=vim+plugin)
1. [Vim Scripts](http://www.vim.org/scripts/) vim 官方提供的脚本集合，注意里面除
   了插件，还有很多 vim 脚本
1. [Vim Awesome](http://vimawesome.com/) vim 插件推荐
1. [:best of Vim](http://www.bestofvim.com/plugin/) 常用插件推荐
1. 本教程也将在 [插件推荐](plugins/index.md) 中不定期更新一些优秀插件以及使用说明
