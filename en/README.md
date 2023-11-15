# Vim Hands-On Tutorial（Learning Vim）

[English](README.md) | [简体中文](../zh-CN/README.md)

## Intro

In my personal experience of learning Vim, it is very difficult to learn Vim by
reading documentation or watching other people operate it. You have to be in the
real world, in real scenarios, in order to familiarize yourself with the
commands and master them.

Therefore, in order to meet the needs of learning and operating at the same
time, all the files in the project are in Markdown format, which can be read as
an explanation document, and can also be opened in Vim. You can read it as an
explanatory document, and you can also use Vim to open the files for actual
operation (the latter is recommended).

## How to Use

1. clone project to local

```bash
git clone https://github.com/dofy/learn-vim.git
```

2. go to the project folder

```bash
cd learn-vim
```

3. open the file `file-one.md` in Vim

```bash
vim file-one.md
```

## Formatting Rules

```Markdown

## Major titles represent a large category

### Subtitles represent subcategories under this major category

Text without any formatting is normal description for reading purposes only.

> The text embedded in the quoted block is an instruction to operate, and you
> can follow what is mentioned in it
>
> Also operators or commands are included in symbols like `:w`.

The < and > in commands such as f<X> do not need to be typed, <X> represents a
variable, i.e. you can type fa or fb or fC

_Note: Commands are case-sensitive (matters requiring attention appear in
symbols such as the current line)_

```

> [!NOTE]
>
> If you already have your own `.vimrc` file (refer to
> [Chapter 4](file-four.md)) and have changed some of the defaults in it, it may
> cause some operations to not match the tutorial. In this case, you can run
> `Vim` with the following command:
>
> ```bash
> # Do not load the configuration file
> vim -u NONE
> # Load a specific configuration file
> vim -u <filename>
> ```

## Index

### Basic operations

1. [Cursor movement](file-one.md)
1. [Opening Files, Finding Content](file-two.md)
1. [Modify and save documents](file-three.md)
1. [Some tips](file-four.md)
1. [Split screen and tabs](file-five.md)
1. [Block operations](file-six.md)
1. [Macros in Vim](file-seven.md)

### Additional content

1. [Vim plugins](plugin.md)
1. [Plugin Recommendations](plugins/index.md)
   1. [NERDTree](plugins/nerdtree.md)
   1. [EasyAlign](plugins/easyalign.md)
   1. [Airline & Themes](plugins/airline.md)
   1. [surround.vim](plugins/surround.md)

> [!NOTE]
>
> - In the tutorials, you can navigate to the next chapter or related chapters,
>   and locate the file name to open it by executing `gf` (goto file). Related
>   files
> - You can always open the relevant chapter to view, and then use `:bp` to go
>   back to the previous file (this command will (This command is covered in
>   [Chapter 2](file-two.md)).
> - You may get a file not saved error when you exit the tutorial with `:q` or
>   `:qa`, try adding `!` to the end of the command!

## Recommend a few Vim configurations

- [dofy / **7th-vim**][7th-vim]
- [kepbod / **ivim**][kepbod]
- [chxuan / **vimplus**][chxuan]
- [SpaceVim / **SpaceVim**][spacevim]

## Recommends a couple of other excellent Vim tutorials

- Run `vimtutor` on the console. This is the official hands-on tutorial for Vim.
- [Concise Vim Practice Tips][coolshell] Great tutorial to get started!
- [Vim Galore][vimgalore] Frequently updated, a must read for Vim.
- [Daily Vim][liuzhijun] 30 articles, the content is more complete!
- [A book for learning the Vim editor][learnvim] Another Learn Vim (English)
- [Open Vim][openvim] Interactive Vim Tutorials
- [QuickRef.ME/vim][quickref] Vim cheatsheet

## Cheatsheets

> [Vim Cheat Sheet][cheatsheets1]

> [A Great Vim Cheat Sheet][cheatsheets2]

> [![003][cheatsheets3]][cheatsheets3]

> [![004][cheatsheets4]][cheatsheets4]

> [![005][cheatsheets5]][cheatsheets5]

**Thanks again for your interest! If you love, please share. Love life, love
VIM!**

[7th-vim]: https://github.com/dofy/7th-vim
[kepbod]: https://github.com/kepbod/ivim
[chxuan]: https://github.com/chxuan/vimplus
[spacevim]: https://github.com/SpaceVim/SpaceVim
[coolshell]: http://coolshell.cn/articles/5426.html
[vimgalore]: https://github.com/mhinz/vim-galore
[liuzhijun]: http://liuzhijun.iteye.com/category/270228
[learnvim]: https://github.com/iggredible/Learn-Vim
[openvim]: https://openvim.com/
[quickref]: https://quickref.me/vim
[cheatsheets1]: https://vim.rtorr.com/lang/zh_tw
[cheatsheets2]: https://vimsheet.com/
[cheatsheets3]: http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
[cheatsheets4]: https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
[cheatsheets5]:
  http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png
