# Vim Plugins

Although Vim already provides very powerful features, but if you have a few good
plug-ins to complement, more can make your work twice as fast.

虽然 Vim 已经提供了非常强大的功能，但如果有几款好用的插件辅佐，更能让你的工作事
半功倍。

## Install Plugins

If you want to install Vim plugins manually, you need to complete the following
steps (it is not recommended to install manually, please refer to the
[Plugin Management](#plugin-management) content below):

1. Create the `.vim` folder

```bash
cd ~
mkdir .vim
```

2. Create the `bundle` folder in the `.vim` folder

```bash
cd .vim
mkdir bundle
```

3. copy or clone the plugin to the `bundle` folder

```bash
cd bundle
git clone <repository-url>
```

_Note: If the plugin does not have a git address, you can also create the
relevant folder directly and place a `.vim` file in it._

4. Edit `runtimepath`

By modifying the `runtimepath` property, you can let Vim find the plugin you
want to load. To view the `runtimepath` property, you can use the
`:set runtimepath` command

You can enable new plugins by adding the following configuration to `.vimrc`

```vim
set runtimepath^=~/.vim/bundle/<folder>/
" OR
set runtimepath^=~/.vim/bundle/<name>.vim
```

## Plugin Management

When you have more and more plugins, you need a manager to manage Vim plugins.
There are several popular plugin managers:

1. [vim-plug](https://github.com/junegunn/vim-plug)
1. [Vundle.vim](https://github.com/VundleVim/Vundle.vim)

I personally prefer vim-plug, and I will briefly introduce this manager below.

## vim-plug Introduction

### Project Address

https://github.com/junegunn/vim-plug

### Install

[Download plug.vim](https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim),
and put it in the `autoload` folder (usually this folder is located in
`~/.vim/autoload/`).

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

#### Windows（PowerShell）

```bash
md ~\vimfiles\autoload
$uri = 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
(New-Object Net.WebClient).DownloadFile($uri, $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("~\vimfiles\autoload\plug.vim"))
```

### Configuration

Add the `vim-plug` configuration to `~/.vimrc`:

1. The configuration starts with `call plug#begin()`
1. Plugin list, starting with the `Plug` command
1. End with `call plug#end()` to initialize the plugin system

- This will automatically enable `filetype plugin indent on` and
  `syntax enable`. If you don't want this, you can reset your settings after
  this configuration, for example: `filetype indent off`, `syntax off`

#### Example

```vim
" define the location to save plugins
call plug#begin('~/.vim/bundle')

" Note that single quotes should be used

" Some plugin list

" If the plugin's GitHub address is https://github.com/junegunn/vim-easy-align
" Then you can write like this
Plug 'junegunn/vim-easy-align'

" Or directly give the plugin git address
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Use `|` to separate multiple `Plug` commands in one line
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" More configuration details can be found on the official website

" Initialize the plugin system
call plug#end()
```

> Restart Vim or reload `.vimrc` and execute `:PlugInstall` to install the
> configured plugin
>
> The reload command is `:source ~/.vimrc`

### Common Commands

| Command                             | Description          |
| ----------------------------------- | -------------------- |
| `PlugInstall [name ...] [#threads]` | Install plugin       |
| `PlugUpdate [name ...] [#threads]`  | Install or upgrade   |
| `PlugClean`                         | Clean plugin         |
| `PlugUpgrade`                       | Upgrade vim-plug     |
| `PlugStatus`                        | View installed state |

_Note: For more commands, see the official website_

## Where to Find Plugins

1. There are a lot of Vim plugin resources on [GitHub](https://github.com), you
   can search by `vim plug` keyword to
   [view all related resources](https://github.com/search?utf8=%E2%9C%93&q=vim+plugin)
1. [Vim Scripts](http://www.vim.org/scripts/) Vim official script collection,
   pay attention to there are many Vim scripts in addition to plugins
1. [Vim Awesome](http://vimawesome.com/) Vim plugin recommendation
1. This tutorial will also update some excellent plugins and usage instructions
   from time to time in [Plugin Recommendations](plugins/index.md)
