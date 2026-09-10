# Vim Modes

The same key does different things in different Vim modes. You do not need to
memorize every mode. Start with one loop: choose actions in Normal mode, enter
Insert mode when you need to type, then press `Esc` to return to Normal mode.

```text
Normal -- i/a/o, etc. --> Insert
   ^                       |
   +--------- Esc ---------+
```

If you are unsure which mode you are in, pressing `Esc` is usually a safe start.

## Normal Mode

Normal mode is Vim's default and the center of its editing model. Keys perform
motions, deletions, copies, pastes, and undo rather than inserting text. For
example, `h`, `j`, `k`, and `l` move; `u` undoes a change. These commands begin
in [Chapter 1](chapter01.md).

## Insert Mode

Insert mode types text. From Normal mode, you can start at different positions:

- `i` before the current character
- `a` after the current character
- `I` before the first non-blank character on the line
- `A` at the end of the line
- `o` on a new line below
- `O` on a new line above

Press `Esc` when finished. `Ctrl-[` is equivalent to `Esc`.

## Visual Mode

Visual mode selects text before an operation such as deleting or copying:

- `v` selects by character
- `V` selects whole lines
- `Ctrl-v` selects a rectangle in Visual Block mode

Normal-mode motions extend the selection. Press `Esc` to cancel it.

> Put the cursor on `{` below, press `v`, then `%` to select through its
> matching `}`. Press `Esc` and confirm that you are back in Normal mode.

```javascript
const bio = () => {
  console.log("Liberty Leading the People.");
  console.log("· Why so serious? ·");
};
```

## Command-line Mode

Press `:` from Normal mode to enter Command-line mode. It runs commands such as
`:w`, `:q`, `:e`, `:set`, and `:help`. Press `Enter` to execute or `Esc` to
cancel.

For an unfamiliar command, use `:help <command>`, such as `:help :write`.
Learning to ask Vim's built-in help is more useful than memorizing a catalog.

## Practice the loop

> Start in Normal mode, press `i`, type three characters, and press `Esc`.
> Undo with `u`, redo with `Ctrl-r`, then press `Esc` once more. If you can name
> the mode at each step, continue to [Chapter 1](chapter01.md).

Vim also has Replace, Select, Ex, Prompt, and Terminal modes. Learn them through
`:help` when you need them; there is no reason to memorize them now.
