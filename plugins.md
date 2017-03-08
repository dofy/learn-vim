# vim 插件

## 插件安装与配置

## 去哪里找插件

## 插件管理器（vim-plug）

当你的插件越来越多，越来越难管理，那就是时候安装一个插件管理器插件来管理插件了😂

### 官网地址（github）

[https://github.com/junegunn/vim-plug](https://github.com/junegunn/vim-plug)

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
call plug#begin('~/.vim/plugged')

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

> 重启 vim 并执行 `:PlugInstall` 安装配置好的插件

_注意：更多命令查看官网介绍_
