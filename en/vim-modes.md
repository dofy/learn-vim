# Vim Modes

In this chapter, we will introduce several modes in Vim. Some of them have been
mentioned in the previous chapters, such as Normal mode, Insert mode and Visual
mode. In addition to these modes, Vim also has some other modes, such as
Visual-line mode, Command-line mode, Ex mode and so on. The difference between
these modes is that they have different purposes and different key mappings.

## Normal Mode

Normal Mode is the default mode in Vim, and it is also the most commonly used
mode. In Normal mode, the function of keys is Vim commands, such as `h`, `j`,
`k`, `l`, `w`, `b`, `0`, `$`, `gg`, `G`, `dd`, `yy`, `p`, `u` and so on. The
function of these commands is to move the cursor, delete, copy, paste, undo and
so on. These keys have been introduced in [Chapter 1](chapter01.md), you can
review them.

## Insert Mode

INsert mode is one of the most commonly used modes in Vim, and its function is
to insert content into the text. Press `i` in Normal mode to enter Insert mode,
and press `Esc` to exit Insert mode.

You also can enter Insert mode by pressing `I`, `a`, `A`, `o`, `O`, `r`, `R` and
so on. The function of these keys is to insert content before or after the
current cursor position, or insert a new line above or below the current line.

- `i` insert content before the current cursor position
- `I` insert content at the beginning of the current line
- `a` insert content after the current cursor position
- `A` insert content at the end of the current line
- `o` insert a new line below the current line
- `O` insert a new line above the current line
- `r` replace the character at the current cursor position
- `R` replace characters from the current cursor position until `Esc` is pressed

> Test these keys in the current document.

## Visual Mode

Visual Mode is one of the most commonly used modes in Vim, and its function is
to select text. Press `v` in Normal mode to enter Visual mode, and press `j`,
`k`, `h`, `l` to move the cursor to select text (of course, other cursor
movement operations are also supported), and press `Esc` to exit Visual mode.

> Place the cursor on the `{` or `}` of the code block below, press `v` to enter
> Visual mode, and then press `%` to select the entire code block.

```javascript
const bio = () => {
  console.log("自由引導人民。");
  console.log("· Why so serious? ·");
};
```

Except for entering Visual mode by pressing `v`, you can also enter Visual Line
mode by pressing `V`, and then select the entire line of text. Press `Ctrl + v`
to enter Visual Block mode, and then select the text in the rectangular area.

## Command-line Mode

Press `:` in Normal mode to enter Command-line mode, and press `Esc` to exit
Command-line mode. In Command-line mode, you can execute some Vim commands, such
as `:w`, `:q`, `:wq`, `:e`, `:set`, `:help` and so on.

You can refer to the [official documentation](https://vimhelp.org/#Command-line)

## Ex Mode

Press `Q` in Normal mode to enter Ex mode. In Ex mode, you can execute some Vim
commands, such as `w`, `q`, `wq`, `e`, `set`, `help` and so on. Press `Enter` to
execute the command.

You can exit Ex mode by executing the `vi` command, or by pressing `q` to exit
the entire Vim.

You can refer to the [official documentation](https://vimhelp.org/#Ex) for more
Vim commands.

## Other Modes

Except for the modes mentioned above, Vim also has some other modes, such as
Replace mode, Select mode, Prompt mode, Terminal mode and so on. These modes
have different purposes, and their key mappings are also different, so they are
not introduced one by one here.
