# NERDTree

NERDTree is a file browsing plugin for Vim that allows you to open/close
directory trees and browse/open files with commands.

## Project address

https://github.com/scrooloose/nerdtree

## Installation

> Modify the `.vimrc` configuration by adding the following configuration after
> `call plug#begin()`.

`.vimrc` configuration, after `call plug#begin()` add the following
configuration Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }

_Note: For use of the Vim plugin manager, see [plugin.md](... /plugin.md#plugin
management)_

> Run Vim and execute the command `:PlugInstall`, you may get the following
> prompt:

```
1 Updated. Elapsed time: 6.008607 sec.
2 [===]
3
4 - Finishing ... Done!
5 - vim-github-dashboard: Already installed
6 - vim-easy-align: Already installed
7 - nerdtree: Resolving deltas: 100% (158/158), done.
```

## Using

If you see the above prompt, it means the plugin is installed successfully, you
can execute the following commands to control the directory tree.

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `:NERDTree`       | Open Directory Tree                       |
| `:NERDTreeClose`  | Close the tree                            |
| `:NERDTreeToggle` | open/close the catalog tree               |
| `:NERDTreeFind`   | Open the tree and locate the current file |

## Tips

### Binding shortcuts

Add the following configuration to `.vimrc`:

```vim
" NERDTree
map <C-n> :NERDTreeToggle<CR>
" map is the shortcut mapping command <C-n> defines the shortcut key, Ctrl-n.
" followed by the corresponding command and the enter key <CR>.
```

After reloading the `.vimrc` file, you can use `<Ctrl-n>` to open and close the
directory tree.

### Show hidden files

The NERDTree plugin does not show hidden files by default. There are two ways to
view hidden files:

1. Press `shift-i` after opening the tree to show hidden files, press it again
   to close the hidden files display.
2. Add the setting `let NERDTreeShowHidden=1` to `.vimrc` to show hidden files
   by default.
