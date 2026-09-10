# Chapter 1: Cursor Movement

Welcome to Chapter 1, this chapter will learn simple cursor movement operations.

If you already have a certain foundation, this part can be skipped, directly `G`
to the end of the document according to the operation into the next chapter.

Before starting, press `Esc` to make sure you are in Normal mode. Motions are
not isolated shortcuts to memorize: later you will combine them with delete,
change, and copy operations. For now, focus on describing where to move.

## Move the cursor

### Unit level

- `h` left one character
- `j` line down
- `k` line up
- `l` right one character

### Word level

- `w` or `W` move right to the beginning of the word
- `e` or `E` move right to the end of the word
- `b` or `B` move left to the beginning of the word

_Note: Lowercase letters treat word characters as boundaries, uppercase letters
treat spaces as boundaries_

> Try to feel the various movements in the following character blocks!

```
This project's GitHub url is https://github.com/dofy/learn-vim
Please clone it to your local folder and open the first file which is
named chapter01.md via following command "vim chapter01.md"
and welcome to https://yahaha.net :)
```

> Start on `This` and use only word motions to reach `GitHub`, `https`, and
> `learn-vim`. If you overshoot, use `b` to go back. Notice how `w` and `W`
> behave differently inside a URL.

### Block level

- `gg` to the first line of the document
- `G` to the last line of the document
- `0` to the beginning of the line (column 1)
- `^` to the first non-whitespace character
- `$` to the end of the line
- `H` move to the top of the screen
- `M` move to the middle of the screen
- `L` move to the bottom of the screen
- `Ctrl-d` move down half a page
- `Ctrl-u` move up half a page
- `Ctrl-f` move down one page
- `Ctrl-b` move up one page
- `:<N>` or `<N>gg` jump to line N
- `:+<N>` or `<N>j` jump down N lines
- `:-<N>` or `<N>k` jump up N lines

_Note: A number N can be added before all commands, which means that the command
behind it is executed N times. For example, if you want to move down 3 lines,
you can use `:+3` or `3j` to achieve the same effect. In addition, there are
actually two commands above: one is executed immediately after typing, such as
`gg`; the other is to enter `:` first (there will be a `/` first), this type of
command needs to be executed after the input is completed. Press Enter, which is
the same in the following tutorials._

## Counts and motions

Most motions accept a count. Instead of pressing `j` ten times, estimate the
distance and use `10j`. You do not have to guess perfectly: `8j`, followed by a
small `j` or `k` adjustment, is usually faster.

- `3w` moves forward three words
- `5j` moves down five lines
- `2Ctrl-d` moves down two half-pages

> Use `5j` from this line and then `5k` to return. If you miss, `u` will not
> help: it undoes text changes, not cursor movement. Move back in the opposite
> direction instead.

> Now you can swim in the current file. When you are familiar with various
> movement operations, you can locate the current document to the last line by
> pressing `G` and enter the next chapter according to the prompt.
>
> Place the cursor anywhere in the file name behind it and press the keyboard
> `gf` to enter [Chapter 2](chapter02.md).
