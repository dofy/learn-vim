# EasyAlign

EasyAlign は文字の位置を揃えるプラグインです。整然とした配置を好む人には
欠かせません。

## プロジェクト

https://github.com/junegunn/vim-easy-align

## インストール

> `.vimrc` を編集し、`call plug#begin()` の後ろへ次の設定を追加します。

```vim
Plug 'junegunn/vim-easy-align'
```

_注意：Vim プラグインマネージャーについては
[vim-plugin.md](../vim-plugin.md#プラグイン管理)を参照してください。_

> Vim を起動して `:PlugInstall` を実行します。次のような表示が出ます。

```
1 Updated. Elapsed time: 6.008607 sec.
2 [===]
3
4 - Finishing ... Done!
5 - vim-github-dashboard: Already installed
6 - nerdtree: Already installed
7 - vim-easy-align: Resolving deltas: 100% (136/136), done.
```

## 使い方

### 設定

> `.vimrc` に次の設定を追加します。

```vim
" EasyAlign
xmap ga <Plug>(EasyAlign) " ビジュアルモードのショートカット
nmap ga <Plug>(EasyAlign) " ノーマルモードのショートカット

" 独自の区切り記号を設定
let g:easy_align_delimiters = {
\ '>': { 'pattern': '>>\|=>\|>'  },
\ '/': {
\     'pattern':         '//\+\|/\*\|\*/',
\     'delimiter_align': 'l',
\     'ignore_groups':   ['!Comment'] },
\ ']': {
\     'pattern':       '[[\]]',
\     'left_margin':   0,
\     'right_margin':  0,
\     'stick_to_left': 0
\   },
\ ')': {
\     'pattern':       '[()]',
\     'left_margin':   0,
\     'right_margin':  0,
\     'stick_to_left': 0
\   },
\ 'd': {
\     'pattern':      ' \(\S\+\s*[;=]\)\@=',
\     'left_margin':  0,
\     'right_margin': 0
\   }
\ }
```

### 実験

> 次のコードで以下の操作を試してください。

```javascript
let a=1;// one
let  bcd=test=2; // two
let      longword=others= 'some content';// string
```

> 上のコードのいずれかの行にカーソルを置き、`gaip<Space>` を押します。
> 次の結果になります。

```javascript
let a=1;// one
let bcd=test=2; // two
let longword=others= 'some content';// string
```

> カーソルを動かさず `gaip=` を押すと、次の結果になります。

```javascript
let a        = 1;// one
let bcd      = test=2; // two
let longword = others= 'some content';// string
```

> カーソルを動かさず `u` を押し、続けて `gaip*=` を押すと、次の結果になります。

```javascript
let a        = 1;// one
let bcd      = test   = 2; // two
let longword = others = 'some content';// string
```

各キーの意味は次のとおりです。

- `gaip`
  - `ga` は `.vimrc` で定義した EasyAlign 起動用ショートカット
  - `ip` は操作範囲を指定します。任意の選択用移動コマンドを使用でき、`ip` は現在の
    段落を選択します。カーソルがコードの先頭行にあるなら、`ip` の代わりに `2j` も
    使用できます
  - コマンド領域に `:EasyAlign (_)` と表示され、区切り記号の入力待ちになります
  - `<Space>` を押すと最初の空白を基準に揃えます
- `gaip=`
  - 上と同様ですが、`=` を基準に揃えます
- `gaip*=`
  - 効果を確認する前に `u` で直前の操作を元に戻します
  - `=` の前にある `*` は対象を示す指定子です。正の数なら先頭から N 番目、負の数
    なら末尾から N 番目、アスタリスクならすべてを対象にします

> 上記の設定を追加済みなら、`gaip/` でコメント部分も揃えてみてください。
> 次のようになります。

```javascript
let a        = 1;                       // one
let bcd      = test   = 2;              // two
let longword = others = 'some content'; // string
```

### マッチ文字の説明

上で使った `<Space>` や `=` は、特定種類の文字を表すため EasyAlign で定義された
特殊なキーです。

| キー入力  | 用途 |
| --- | --- |
| `<Space>` | 空白に一致 |
| `=` | 等号を含む演算子（`=`、`==`、`!=`、`+=` など） |
| `:` | JSON や YAML 形式 |
| `.` | 複数行にまたがるドット記法の呼び出し |
| `,` | 複数行の引数リスト |
| `&` | [LaTeX の表](https://en.wikibooks.org/wiki/LaTeX/Tables)で `&` と `\\\` に一致 |
| `#` | Ruby/Python のコメント |
| `<Bar>` | Markdown の表 |

_注意：上の表にある `<Bar>` は `|` キーです。_

> 上の Markdown 表で `gaip*|` を実行し、列を揃えてください。

## ヒント

### 配置方向

区切り記号の入力待ちでコマンド領域に `:EasyAlign (_)` と表示されているとき、
`<Enter>` を押すたびに配置方向を切り替えられます。1 回押すと右揃えになり
`:EasyAlign[R] (_)`、もう 1 回押すと中央揃えになり `:EasyAlign[C] (_)`、
さらに押すとデフォルトの左揃えへ戻ります。

> 上の Markdown 表で `gaip<Enter><Enter>*|` を試してください。

### 正規表現によるマッチ

区切り記号の入力待ちで `<Ctrl-x>` を押すと正規表現モードに入ります。続けて
一致させたいパターンを入力できます。次のテキストを使います。

```
Lorem<-ipsum
dolor  <--sit
amet<=  consectetur <- adipiscing
elit<~~ sed <~ do
eiusmod<-= tempor<=- incididunt
ut <== labore
```

> `gaip*<Ctrl-x>` と入力して正規表現モードへ入り、続けて
> `<[-=~]*<Enter>` と入力します。次の結果になります。

```
Lorem    <- ipsum
dolor   <-- sit
amet     <= consectetur  <- adipiscing
elit    <~~ sed          <~ do
eiusmod <-= tempor      <=- incididunt
ut      <== labore
```

### その他の資料

詳しくは[プロジェクトページ](https://github.com/junegunn/vim-easy-align)の説明を
参照してください。
