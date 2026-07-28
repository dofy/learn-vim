# NERDTree

NERDTree は Vim のファイル閲覧プラグインです。コマンドでディレクトリツリーを
開閉し、ファイルを閲覧・表示できます。

## プロジェクト

https://github.com/preservim/nerdtree

## インストール

> `.vimrc` を編集し、`call plug#begin()` の後ろへ次の設定を追加します。

```vim
Plug 'preservim/nerdtree', { 'on': 'NERDTreeToggle' }
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
6 - vim-easy-align: Already installed
7 - nerdtree: Resolving deltas: 100% (158/158), done.
```

## 使い方

上のように表示されたらインストールは成功です。次のコマンドでディレクトリツリーを
操作できます。

| コマンド          | 説明                                     |
| ----------------- | ---------------------------------------- |
| `:NERDTree`       | ディレクトリツリーを開く                 |
| `:NERDTreeClose`  | ディレクトリツリーを閉じる               |
| `:NERDTreeToggle` | ディレクトリツリーの表示を切り替える     |
| `:NERDTreeFind`   | ツリーを開き、現在のファイルへ移動する   |

## ヒント

### ショートカットを割り当てる

`.vimrc` に次の設定を追加します。

```vim
" NERDTree
map <C-n> :NERDTreeToggle<CR>
" map はショートカットの割り当てコマンド
" <C-n> は Ctrl-n、後ろに実行するコマンドと Enter を表す <CR> を指定
```

`.vimrc` を再読み込みすると、`<Ctrl-n>` でディレクトリツリーを開閉できます。

### 隠しファイルを表示する

NERDTree はデフォルトで隠しファイルを表示しません。表示方法は二つあります。

1. ツリーを開いて `shift-i` を押す。もう一度押すと隠しファイルを非表示にする
2. `.vimrc` に `let NERDTreeShowHidden=1` を追加し、デフォルトで表示する
