# Airline & Themes

Airline displays a more user-friendly status bar in Vim, and with a nice color scheme, it's a lot more fun to work with.

## Project address

- Airline https://github.com/vim-airline/vim-airline
- Airline Themes https://github.com/vim-airline/vim-airline-themes

## Installation

> Add `.vimrc` configuration.

```vim
" Install both plugins at the same time
Plug 'vim-airline/vim-airline' | Plug 'vim-airline/vim-airline-themes'
```

> Execute `:source ~/.vimrc` in Vim to reload the config file.
>
> Execute `:PlugInstall` to install the Airline and Aairline Themes plugins.
>
> Add the following setting to `.vimrc` to make Airline effective.

``vim
set laststatus=2 " Always show status bar

" Airline
let g:airline#extensions#tabline#enabled=1 " enable tab bar
```

> Reload the config file to make it work, if that doesn't work try restarting Vim

You should now see a status bar displayed underneath Vim, displaying information that will typically contain **Current Mode**, **Current File**, **Current File**, **Current File**, **Current File**, and **Current File**.
**Current File**, **File Type**, **File Encoding**, and **Current Column Information**.

Since we also have the Airline Themes plugin installed, we can set the Airline style as follows.

> Execute `:AirlineTheme simple` to apply the `simple` style, or modify the `.vimrc` file to add a file like
> The following configuration:

```vim
let g:airline_theme='simple'
```

Airline Themes contains a large number of styles, which can be found in the project's
[Styles folder](https://github.com/vim-airline/vim-airline-themes/tree/master/autoload/airline/themes)
The styles listed there can be applied.

For more details and renderings, please refer to the [project address](https://github.com/vim-airline/vim-airline).
