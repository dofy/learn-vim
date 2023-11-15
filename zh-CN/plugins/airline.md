# Airline & Themes

Airline 可以在 Vim 中显示更友好的状态栏，再配以漂亮的配色，工作更开心。

## 项目地址

- Airline https://github.com/vim-airline/vim-airline
- Airline Themes https://github.com/vim-airline/vim-airline-themes

## 安装

> 添加 `.vimrc` 配置

```vim
" 同时安装两个插件
Plug 'vim-airline/vim-airline' | Plug 'vim-airline/vim-airline-themes'
```

> Vim 中执行 `:source ~/.vimrc` 重载配置文件
>
> 执行 `:PlugInstall` 安装 Airline 和 Aairline Themes 插件
>
> 在 `.vimrc` 中添加如下设置使 Airline 生效

```vim
set laststatus=2    " 始终显示状态栏

" Airline
let g:airline#extensions#tabline#enabled=1    " 开启 tab 栏
```

> 重载配置文件使之生效，如果没有效果可以尝试重启 Vim

现在你应该会看到 Vim 下方显示出了一条状态栏，显示信息一般会包含 **当前模式**，
**当前文件**，**文件类型**，**文件编码**以及**当前行列信息**。

因为我们同时安装了 Airline Themes 插件，所以可以通过如下方式设置 Airline 的样式。

> 执行 `:AirlineTheme simple` 应用 `simple` 样式，或者修改 `.vimrc` 文件，添加如
> 下配置：

```vim
let g:airline_theme='simple'
```

Airline Themes 包含了非常多的样式，具体可以参考该项目的
[样式文件夹](https://github.com/vim-airline/vim-airline-themes/tree/master/autoload/airline/themes)
其中所列的样式都可以应用。

更多细节和效果图可以参考[项目地址](https://github.com/vim-airline/vim-airline)。
