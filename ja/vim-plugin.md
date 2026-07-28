# Vim プラグイン

Vim は標準でも非常に強力ですが、良質なプラグインをいくつか導入すると、さらに
効率よく作業できます。

## プラグインをインストールする

Vim プラグインを手動でインストールする場合は、次の手順を行います（手動
インストールは推奨しません。後述の[プラグイン管理](#プラグイン管理)を参照して
ください）。

1. `.vim` フォルダを作成

```bash
cd ~
mkdir .vim
```

2. `.vim` 内に `bundle` フォルダを作成

```bash
cd .vim
mkdir bundle
```

3. プラグインを `bundle` フォルダへコピーまたはクローン

```bash
cd bundle
git clone <repository-url>
```

_注意：プラグインに Git リポジトリがない場合は、対応するフォルダを直接作成し、
その中へ `.vim` ファイルを配置できます。_

4. `runtimepath` を編集

`runtimepath` を変更すると、Vim が読み込むプラグインを見つけられるようになります。
現在値は `:set runtimepath` で確認できます。

`.vimrc` に次の設定を追加して新しいプラグインを有効にします。

```vim
set runtimepath^=~/.vim/bundle/<folder>/
" または
set runtimepath^=~/.vim/bundle/<name>.vim
```

## プラグイン管理

プラグインが増えたら、プラグインマネージャーで管理します。代表的なものは次の
とおりです。

1. [vim-plug](https://github.com/junegunn/vim-plug)
1. [Vundle.vim](https://github.com/VundleVim/Vundle.vim)

ここでは作者が好んで使用している vim-plug を簡単に紹介します。

## vim-plug の紹介

### プロジェクト

https://github.com/junegunn/vim-plug

### インストール

[plug.vim をダウンロード](https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim)
し、`autoload` フォルダ（通常は `~/.vim/autoload/`）へ配置します。

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

### 設定

`~/.vimrc` に `vim-plug` の設定を追加します。

1. `call plug#begin()` で開始
1. `Plug` コマンドで始まるプラグイン一覧
1. `call plug#end()` で終了し、プラグインシステムを初期化

- この設定は `filetype plugin indent on` と `syntax enable` を自動的に有効化します。
  不要なら、この設定の後で `filetype indent off`、`syntax off` などを実行します。

#### 例

```vim
" プラグインの保存場所を指定
call plug#begin('~/.vim/bundle')

" シングルクォートを使用すること

" プラグイン一覧

" GitHub の URL が https://github.com/junegunn/vim-easy-align の場合
" 次のように記述
Plug 'junegunn/vim-easy-align'

" Git リポジトリの URL を直接指定することも可能
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" 1 行に複数の `Plug` コマンドを書く場合は `|` で区切る
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" 詳細な設定は公式サイトを参照

" プラグインシステムを初期化
call plug#end()
```

> Vim を再起動するか `.vimrc` を再読み込みし、`:PlugInstall` を実行して設定した
> プラグインをインストールします。
>
> 再読み込みコマンドは `:source ~/.vimrc` です。

### よく使うコマンド

| コマンド                            | 説明                         |
| ----------------------------------- | ---------------------------- |
| `PlugInstall [name ...] [#threads]` | プラグインをインストール     |
| `PlugUpdate [name ...] [#threads]`  | インストールまたは更新       |
| `PlugClean`                         | 不要なプラグインを削除       |
| `PlugUpgrade`                       | vim-plug を更新              |
| `PlugStatus`                        | インストール状態を表示       |

_注意：その他のコマンドは公式サイトを参照してください。_

## プラグインを探す場所

1. [GitHub](https://github.com) には多くの Vim プラグインがあります。`vim plug` で
   [関連リソースを検索](https://github.com/search?utf8=%E2%9C%93&q=vim+plugin)できます
1. [Vim Scripts](https://www.vim.org/scripts/) は Vim 公式のスクリプト集です。
   プラグイン以外の Vim スクリプトも含まれます
1. [Vim Awesome](https://vimawesome.com/) は Vim プラグインの紹介サイトです
1. このチュートリアルでも、優れたプラグインと使用方法を
   [おすすめプラグイン](plugins/index.md)へ随時追加します
