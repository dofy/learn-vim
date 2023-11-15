# Cursor Movement

Welcome to Chapter 1, this chapter will learn simple cursor movement operations.

If you already have a certain foundation, this part can be skipped, directly `G`
to the end of the document according to the operation into the next chapter.

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

_Note: All lowercase words are word boundaries with word boundaries, uppercase
letters with spaces as boundaries_

> Try to feel the various movements in the following character blocks!

```
This project's GitHub url is https://github.com/dofy/learn-vim
Please clone it to your local folder and open the first file which is
named chapter01.md via following command "vim chapter01.md"
and welcome to https://yahaha.net :)
```

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

> Now you can swim in the current file. When you are familiar with various
> movement operations, you can locate the current document to the last line by
> pressing `G` and enter the next chapter according to the prompt.
>
> Place the cursor anywhere in the file name behind it and press the keyboard
> `gf` to enter [Chapter 2](chapter02.md).
