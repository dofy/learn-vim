# Vim 実践チュートリアル（Learning Vim）

[English](../en/README.md) | [简体中文](../zh-CN/README.md) |
[日本語](README.md)

## はじめに

私自身の経験では、ドキュメントを読んだり他の人の操作を眺めたりするだけで Vim を
身につけるのは簡単ではありません。実際の環境と具体的な場面で操作し、コマンドに
慣れていく必要があります。

そこで本プロジェクトでは、学習と操作を同時に進められるよう、すべての教材を
Markdown ファイルとして用意しています。説明文として読むことも、Vim で直接開いて
実際に操作することもできます（後者をおすすめします）。

## 使い方

1. プロジェクトをローカルにクローンします。

```bash
git clone https://github.com/dofy/learn-vim.git
```

2. プロジェクトの日本語ディレクトリへ移動します。

```bash
cd learn-vim/ja
```

3. `chapter01.md` を Vim で開きます。

```bash
vim chapter01.md
```

## 表記ルール

```Markdown

## 大見出しは大きなカテゴリを表します

### 小見出しはそのカテゴリ内のサブカテゴリを表します

装飾のない文章は、読むための通常の説明文です。

> 引用ブロック内の文章は実際に行う操作です。書かれている内容に従って
> 操作してください。
>
> `:w` のように記号で囲まれたものは、演算子またはコマンドです。

f<X> のようなコマンドにある < と > は入力しません。<X> は変数を表すため、
fa、fb、fC などと入力できます。

_注意：コマンドでは大文字と小文字が区別されます（注意事項はこの行のように
記載します）。_

```

> [!NOTE]
>
> すでに自分の `.vimrc` を使用していて（[第 4 章](chapter04.md)を参照）、
> デフォルト設定を変更している場合、一部の操作がチュートリアルどおりにならない
> ことがあります。その場合は、次のコマンドで `Vim` を起動できます。
>
> ```bash
> # 設定ファイルを読み込まない
> vim -u NONE
> # 指定した設定ファイルを読み込む
> vim -u <filename>
> ```

## 目次

### 基本操作

1. [第 1 章：カーソルの移動](chapter01.md)
1. [第 2 章：ファイルを開く、内容を検索する](chapter02.md)
1. [第 3 章：文書の編集と保存](chapter03.md)
1. [第 4 章：便利なテクニック](chapter04.md)
1. [第 5 章：画面分割とタブ](chapter05.md)
1. [第 6 章：ブロック操作](chapter06.md)
1. [第 7 章：Vim のマクロ](chapter07.md)
1. [第 8 章：テキストオブジェクト](chapter08.md)
1. [第 9 章：レジスタとクリップボード](chapter09.md)
1. [第 10 章：マークとジャンプ](chapter10.md)
1. [第 11 章：複数ファイルの検索と置換](chapter11.md)

### 追加コンテンツ

1. [Vim のモード](vim-modes.md)
1. [Vim プラグイン](vim-plugin.md)
1. [おすすめプラグイン](plugins/index.md)
   1. [NERDTree](plugins/nerdtree.md)
   1. [EasyAlign](plugins/easyalign.md)
   1. [Airline とテーマ](plugins/airline.md)
   1. [surround.vim](plugins/surround.md)

> [!NOTE]
>
> - チュートリアル内では、次の章や関連する章へのファイル名にカーソルを置き、
>   `gf`（goto file）を実行して移動できます。
> - 関連する章を開いた後は、`:bp` で直前のファイルへ戻れます（このコマンドは
>   [第 2 章](chapter02.md)で扱います）。
> - `:q` や `:qa` で終了すると、ファイルが保存されていないというエラーが出る場合が
>   あります。そのときはコマンドの末尾に `!` を付けてみてください。

## おすすめの Vim 設定

- [dofy / **nvim**][nvim]（作者が現在使用している Neovim 設定）
- [dofy / **7th-vim**][7th-vim]
- [kepbod / **ivim**][kepbod]
- [chxuan / **vimplus**][chxuan]
- [SpaceVim / **SpaceVim**][spacevim]

## その他の優れた Vim チュートリアル

- コンソールで `vimtutor` を実行します。Vim 公式の実践チュートリアルです。
- [Concise Vim Practice Tips][coolshell] 入門に適したチュートリアルです。
- [Vim Galore][vimgalore] 頻繁に更新されている必読資料です。
- [Daily Vim][liuzhijun] 全 30 記事で、より幅広い内容を扱っています。
- [A book for learning the Vim editor][learnvim] もう一つの Learn Vim（英語）です。
- [Open Vim][openvim] インタラクティブな Vim チュートリアルです。
- [QuickRef.ME/vim][quickref] Vim のチートシートです。

## チートシート

> [Vim Cheat Sheet][cheatsheets1]

> [A Great Vim Cheat Sheet][cheatsheets2]

> [![003][cheatsheets3]][cheatsheets3]

> [![004][cheatsheets4]][cheatsheets4]

> [![005][cheatsheets5]][cheatsheets5]

**ご覧いただきありがとうございます。気に入ったら、ぜひ共有してください。
Love life, love VIM!**

[nvim]: https://github.com/dofy/nvim
[7th-vim]: https://github.com/dofy/7th-vim
[kepbod]: https://github.com/kepbod/ivim
[chxuan]: https://github.com/chxuan/vimplus
[spacevim]: https://github.com/SpaceVim/SpaceVim
[coolshell]: https://coolshell.cn/articles/5426.html
[vimgalore]: https://github.com/mhinz/vim-galore
[liuzhijun]: http://liuzhijun.ite.com/category/270228
[learnvim]: https://github.com/iggredible/Learn-Vim
[openvim]: https://openvim.com/
[quickref]: https://quickref.me/vim
[cheatsheets1]: https://vim.rtorr.com/lang/zh_tw
[cheatsheets2]: https://vimsheet.com/
[cheatsheets3]: https://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
[cheatsheets4]: https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
[cheatsheets5]:
  https://raw.githubusercontent.com/Michaelangel007/vim_cheat_sheet/master/vim_cheat_sheet_for_programmers_print_150dpi.png
