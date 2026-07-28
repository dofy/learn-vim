# Airline とテーマ

Airline は Vim に見やすいステータスバーを表示します。美しい配色と組み合わせると、
作業がより楽しくなります。

## プロジェクト

- Airline https://github.com/vim-airline/vim-airline
- Airline Themes https://github.com/vim-airline/vim-airline-themes

## インストール

> `.vimrc` に設定を追加します。

```vim
" 二つのプラグインを同時にインストール
Plug 'vim-airline/vim-airline' | Plug 'vim-airline/vim-airline-themes'
```

> Vim で `:source ~/.vimrc` を実行し、設定ファイルを再読み込みします。
>
> `:PlugInstall` を実行して Airline と Airline Themes をインストールします。
>
> Airline を有効にするため、`.vimrc` に次の設定を追加します。

```vim
set laststatus=2 " ステータスバーを常に表示

" Airline
let g:airline#extensions#tabline#enabled=1 " タブバーを有効化
```

> 設定ファイルを再読み込みしてください。反映されない場合は Vim を再起動します。

Vim の下部にステータスバーが表示されます。通常は**現在のモード**、**現在の
ファイル**、**ファイルタイプ**、**文字エンコーディング**、**現在の列**などの
情報が含まれます。

Airline Themes もインストールしたため、次のようにスタイルを設定できます。

> `:AirlineTheme simple` で `simple` スタイルを適用するか、`.vimrc` に次の設定を
> 追加します。

```vim
let g:airline_theme='simple'
```

Airline Themes には多くのスタイルがあります。プロジェクトの
[Styles フォルダ](https://github.com/vim-airline/vim-airline-themes/tree/master/autoload/airline/themes)
にあるスタイルを適用できます。

詳しい説明と表示例は[プロジェクト](https://github.com/vim-airline/vim-airline)を
参照してください。
