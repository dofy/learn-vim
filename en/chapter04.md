# Chapter 4: Some Tips

## Simple setup of Vim

"Work well, must first sharpen his tools." Although Vim is very powerful, the
default configuration of Vim looks relatively simple. In order to meet our
development needs, we need to do some simple configuration to Vim.

- `:set number` display line number
- `:set relativenumber` display relative line number (this is very important,
  slowly experience)
- `:set hlsearch` search result highlight
- `:set autoindent` automatic indentation
- `:set smartindent` smart indentation
- `:set tabstop=4` set tab tab width to 4
- `:set softtabstop=4` set the width of the indentation when pressing `tab` to 4
- `:set shiftwidth=4` set the automatic indentation width to 4
- `:set expandtab` indent tab to space
- `:filetype on` open file type detection
- `:syntax on` open syntax highlighting

Here are the commands that you can use to set up Vim, but the parameters set in
this way only take effect before closing Vim this time. If you exit Vim and open
it again, the previous settings will be invalid.

If you want to take effect permanently, you need to modify an automatic
configuration file of Vim. The general file path is `/home/<user>/.vimrc` (Linux
system) or `/Users/<user>/.vimrc` (Mac OS system)

If not, create a new one. Take Mac OS system as an example:

> Execute the following command in the console, remember to press Enter at the
> end of each line

```bash
cd ~
vim .vimrc
```

> Now you have opened your Vim exclusive configuration file in Vim, copy the
> configuration mentioned above to your file, remember to delete the `:` at the
> beginning of each line
>
> After the modification is completed, execute `:wq` or `ZZ` to save and exit.
> When you enter Vim again, your configuration should take effect
>
> Of course, I have prepared a sample file [vimrc](vimrc.vim) for you. You can
> use it directly by executing `cp vimrc.vim ~/.vimrc`, and start Vim again or
> execute `:source ~/.vimrc` in Vim. Your configuration should take effect.

_**[AD]** Of course, you can also find a more complete configuration scheme in
another project maintained by me
[The 7th Vim](https://github.com/dofy/7th-vim)._

### Clear search highlight

In the configuration mentioned above, there is an option to highlight all search
results `:set hlsearch`, its function is when you execute `/`, `?`, `*` or `#`
search and highlight all matching results.

> If you have set this option, try executing `/set`

See the effect, the search results are clear at a glance, but this is sometimes
a kind of trouble, because the highlight does not think so, it will always
highlight, until you use `:set nohlsearch` to turn it off.

But this requires you to turn it on when you need it, and turn it off when you
don't need it. Is there a better solution? of course! See the ultimate answer
below:

> **Search for a string that does not exist**

Usually I use the command `/lfw` to clear the search highlight. One is because
the combination of `lfw` is generally not available (not applicable to this
document...), and the other is that the combination of these three letters is
more comfortable to press, and the fingers basically do not need to move (you
feel it).

## Repeat the last command

Vim has a special command `.`, you can use it to repeat the last command.

> Follow the instructions below to operate

```
Press dd to delete this line
Press . to repeat the delete operation
Press 2. to delete two more lines
This line is gone
Press p to paste it back
Press 3. to add 6 more lines
```

## Indentation

- `>>` indent the current line to the right
- `<<` indent the current line to the left

> On this line, press `3>>`, `<<` and `<G` in turn to see the effect
>
> Go to the soy sauce line

## Automatic typesetting

- `==` automatic typesetting of the current line
- `gg=G` automatic typesetting of the current document
- `<N>==` automatic typesetting for N lines starting from the current line
- `=<N>j` automatic typesetting for the current line and N lines below
- `=<N>k` automatic typesetting for the current line and N lines above

> In addition, you can also use the matching search mentioned in
> [Chapter 2](chapter02.md) to batch typeset the code block. Try using the `gf`
> command to open [chapter04-demo.js](chapter04-demo.js) according to the
> instructions in it.

If the smart indentation setting takes effect, you will see the same typesetting
effect as in [Chapter 2](chapter02.md).

The [next Chapter](chapter05.md) will introduce split screen and tab page.
