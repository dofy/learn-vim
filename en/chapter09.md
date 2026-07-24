# Chapter 9: Registers and Clipboard

In the previous chapters we mentioned the "Vim clipboard" over and over — for
example, `dd` stores the deleted content into the clipboard, and `yy` stores the
copied content into the clipboard. But have you ever run into this awkward
situation: you `yy` to copy a line, then casually `x` to delete a few characters,
and when you `p` to paste, what comes out is the characters you just deleted, not
the line!

The root cause is that Vim's "clipboard" is actually more than one — it has a
whole set of **Registers**. Once you understand registers, you truly gain control
over copy and paste.

## Viewing registers

- `:reg` or `:registers` view the contents of all registers
- `:reg a` view only the content of register `a`

> Run `:reg` first to take a look. You'll see a long list of registers starting
> with `"`. We'll go through them by category below.

## The unnamed register

`""` is the unnamed register, i.e. what we usually call the "default clipboard".
Every delete (`d`, `x`), change (`c`), or yank (`y`) that doesn't specify a
register writes here, and `p` / `P` paste from here by default.

This explains the awkward moment above: after `yy` you did `x`, `x` overwrote the
unnamed register, so `p` naturally pasted what `x` deleted.

## Named registers

`"a` through `"z` are 26 named registers. You can manually decide where content
goes and where it comes from, without interfering with each other.

- `"ayy` copy the current line into register `a`
- `"ap` paste from register `a`
- `"add` delete the current line and store it into register `a`

Using an uppercase letter **appends** instead of overwriting:

- `"Ayy` **append** the current line to the existing content of register `a`

_Tips: Back to the problem at the start — as long as you `"ayy` that line into
`a` first, you can `x` as much as you want in between, and finally `"ap` pastes it
back safely._

## The yank register

`"0` is the dedicated yank register. It holds **only** the content of the most
recent `y`, and is never polluted by `d` or `x`.

- `"0p` paste the most recently yanked (not deleted) content

This is another way to solve the opening problem: after `yy` delete whatever you
like, then use `"0p` to paste the copied line back.

## Special registers

Vim also has a batch of automatically-maintained read-only/special registers:

- `"+` the system clipboard (shared with other programs, common on macOS/Linux)
- `"*` the selection clipboard (X11 primary selection; on macOS basically the
  same as `"+`)
- `"%` the current file name
- `":` the last command-line command
- `".` the last inserted text
- `"/` the last search pattern
- `"-` the small delete register (deletes of less than one line)
- `"_` the black hole register, content written here is simply discarded
  (detailed below)

_Note: Whether `"+` is available depends on whether your Vim was compiled with
the `+clipboard` feature. Check with `:echo has('clipboard')`; a return of `1`
means it's supported._

### The black hole register

`"_` is very handy: when you want to delete something but **not overwrite** the
current clipboard, use `"_d`.

- `"_dd` delete the current line without affecting any register

## Using registers in insert mode

In insert mode, press `Ctrl-r` followed by a register name to insert the
register's content directly:

- `Ctrl-r a` insert the content of register `a`
- `Ctrl-r "` insert the unnamed register
- `Ctrl-r %` insert the current file name

> Practice register operations in the text below.

```
Line 1: use "ayy to copy me into register a
Line 2: use "byy to copy me into register b
Now randomly x a few characters to pollute the unnamed register
Below this line, paste with "ap and "bp separately — do they paste separately?
Also try: put the cursor on this line, "_dd to delete it, then p — is what pastes still the earlier x?
```

> If your Vim supports the system clipboard, try `"+yy` to copy a line, then
> switch to a browser or another editor and `Cmd/Ctrl-v` to paste. Does it work?

Registers are the foundation of efficient copy-paste in Vim. Once you've got
them, look back at the macros in [Chapter 7](chapter07.md): you'll see a macro is
really just a sequence of operations recorded into a register — it all connects.

[Next Chapter](chapter10.md) introduces marks and jumps.
