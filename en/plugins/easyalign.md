# EasyAlign

EasyAlign is a plugin for doing character alignment that is nothing short of
OCD.

## Project address

https://github.com/junegunn/vim-easy-align

## Installation

> Modify `.vimrc` configuration, add the following configuration after
> `call plug#begin()`

```vim
Plug 'junegunn/vim-easy-align'
```

_Note: For use of the Vim plugin manager, see [plugin.md](../plugin.md#plugin
management)_

> Run Vim and execute the command `:PlugInstall`, you may get the following
> prompt:

```
1 Updated. Elapsed time: 6.008607 sec.
2 [===]
3
4 - Finishing ... Done!
5 - vim-github-dashboard: Already installed
6 - nerdtree: Already installed
7 - vim-easy-align: Resolving deltas: 100% (136/136), done.
```

## Usage

### Configuration

> Add `.vimrc` configuration as follows:

```vim
" EasyAlign
xmap ga <Plug>(EasyAlign) " The shortcut key in visual mode
nmap ga <Plug>(EasyAlign) " The shortcut key in normal mode

" Configure some custom symbols
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

### Experiment

> Try the following operations in the code below:

```javascript
let a = 1; // one
let bcd = (test = 2); // two
let longword = (others = "some content"); // string
```

> First locate the cursor to any sentence in the above code, press
> `gaip<Space>`, you should get the following results

```javascript
let a = 1; // one
let bcd = (test = 2); // two
let longword = (others = "some content"); // string
```

> Keep the cursor still, press `gaip=`, you should get the following results

```javascript
let a = 1; // one
let bcd = (test = 2); // two
let longword = (others = "some content"); // string
```

> Keep the cursor still, press `u`, then press `gaip*=`, you should get the
> following results

```javascript
let a = 1; // one
let bcd = (test = 2); // two
let longword = (others = "some content"); // string
```

The meaning of the keys is explained below:

- `gaip`
  - `ga` is the shortcut to enable EasyAlign, which we defined in the `.vimrc`
    configuration file.
  - `ip` defines the action area, which can be done with any select action
    command, `ip` selects the current paragraph, and if the cursor is on the
    first line of code, `2j` can be used instead of `.vimrc`. If the cursor is
    on the first line of code, you can use `2j` instead of `ip`.
  - At this point, the word `:EasyAlign (_)` will appear in the command area,
    indicating that it is waiting for matching input.
  - Press `<Space>` to align the first space.
- `gaip=`
  - Same as above, `=` is to align the `<equals sign>`.
- `gaip*=`
  - To see the effect, undo the previous operation with `u`.
  - The `=` preceded by `*` is a descriptor that can be a number, representing
    the first equals sign, or a negative number, representing the the
    penultimate number, or an asterisk for all.

> If you're sure you've changed the configuration as mentioned above, you can
> also try `gaip/` to align the comment section, and when executed, look at It
> will look like this

```javascript
let a = 1; // one
let bcd = (test = 2); // two
let longword = (others = "some content"); // string
```

### Explanation of Match Characters

The above mentioned `<Space>` `=` are special symbols defined in EasyAlign to
indicate a certain type of character. These symbols are defined in EasyAlign to
represent a certain type of character:

| Keystrokes | Scenario Description |
| --- | --- |
| `<Space>` | Match whitespace |
| `=` | Operators containing the equals sign (`=`, `==`, `! =`, `+=`, ...) |
| `:` | Applies to JSON or YAML formats |
| `.` | Apply to multi-line dot syntax calls |
| `,` | Apply to multi-line parameter lists |
| `&` | Format [LaTeX table](https://en.wikibooks.org/wiki/LaTeX/Tables) to match `&` and `\\\` |
| `#` | Apply alignment to Ruby/Python comments |
| `<Bar>` | Markdown tables |

_Note: The `<Bar>` key mentioned in the table above is the `|` key_.

> Try to align a markdown table by `gaip*|` in the above table.

## Tips

### Alignment method

When you are waiting for a match to be entered and `:EasyAlign (_)` appears in
the command area, you can press the `<Enter>` key to select the alignment
direction. Press once to switch to right alignment and display
`:EasyAlign[R] (_)`, press again to switch to center alignment and display
`:EasyAlign[R] (_)`, and press `<Enter>` to switch to center alignment and
display `:EasyAlign[R] (_)`. toggle to center alignment and display
`:EasyAlign[C] (_)`, then press again to switch back to the default left
alignment, and the display returns to its original state.

> Try `gaip<Enter><Enter>*|` in the markdown table above.

### Regular Matching

While waiting for a match to be typed, press the shortcut key `<Ctrl-x>` to
enter match mode, and then type in the matching feature you want. The special
combination can be matched by typing in the matching feature you need. See the
following text:

```
Lorem<-ipsum
dolor  <--sit
amet<=  consectetur <- adipiscing
elit<~~ sed <~ do
eiusmod<-= tempor<=- incididunt
ut <== labore
```

> Try typing `gaip*<Ctrl-x>`, then it enters the regular matching mode, continue
> typing `<[-=~]*<Enter>` and you will get the following result. The result is
> shown below.

```
Lorem    <- ipsum
dolor   <-- sit
amet     <= consectetur  <- adipiscing
elit    <~~ sed          <~ do
eiusmod <-= tempor      <=- incididunt
ut      <== labore
```

### More references

For more references, please refer to the introduction of
[project page](https://github.com/junegunn/vim-easy-align)
