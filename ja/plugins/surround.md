# surround.vim

`引用符`、`括弧`、`XML タグ`を対にして追加、置換、削除します。

## プロジェクト

https://github.com/tpope/vim-surround

## インストール

> `.vimrc` に次の設定を追加します。

```vim
Plug 'tpope/vim-surround'
```

## 使い方（公式ドキュメントより）

surround.vim は、丸括弧、角括弧、引用符、XML タグなど、テキストを囲む記号を
扱います。囲みを対のまま簡単に削除、変更、追加できるマッピングを提供します。

例を見るのが一番分かりやすいでしょう。次のテキスト内で `cs"'` を押します。

    "Hello world!"

次のように変わります。

    'Hello world!'

続けて `cs'<q>` を押します。

    <q>Hello world!</q>

`cst"` を押すと最初の形へ戻ります。

    "Hello world!"

区切り記号を完全に削除するには `ds"` を押します。

    Hello world!

"Hello" にカーソルを置き、`ysiw]` を押します（`iw` はテキストオブジェクトです）。

    [Hello] world!

波括弧に変更して空白を加えます（空白を加えない場合は `{` の代わりに `}`）。
`cs]{` を押します。

    { Hello } world!

`yssb` または `yss)` で行全体を丸括弧で囲みます。

    ({ Hello } world!)

`ds{ds)` で元のテキストへ戻します。

    Hello world!

hello を強調するには `ysiw<em>` を押します。

    <em>Hello</em> world!

最後にビジュアルモードを試します。大文字の `V`（行ビジュアルモード）を押し、
続けて `S<p class="important">` を入力します。

    <p class="important">
      <em>Hello</em> world!
    </p>

このプラグインは HTML と XML の編集に非常に強力です。タグの対を同時に追加、変更、
削除する作業が簡単になります。

[repeat.vim](https://github.com/tpope/vim-repeat)をインストールすると、`ds`、`cs`、
`yss` に対して `.` コマンドを使用できます。
