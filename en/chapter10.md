# Chapter 10: Marks and Jumps

When writing code you often hit this scenario: you're editing near the top of a
file, then suddenly want to jump to the bottom to check a function definition,
and after reading it you realize "wait, where was I again?". Or you flip back and
forth between several files and get more and more lost.

Vim provides a whole set of mechanisms for "remembering positions and jumping
back quickly" — Marks and the Jumplist — letting you travel freely within large
files and across multiple files.

## Marks

A mark gives a position a name, so you can jump back to it anytime.

- `m<X>` set a mark named X at the current cursor position (X is a-z or A-Z)
- `` `<X> `` jump to the **exact position** of mark X (line + column)
- `'<X>` jump to the **start of the line** containing mark X
- `:marks` view all marks

Lowercase marks (a-z) are valid **within the current file**; uppercase marks
(A-Z) are **global** and can jump across files.

_Note: `` ` `` (backtick) jumps to the exact line and column, while `'`
(single quote) only jumps to the start of the line — don't mix them up. Uppercase
global marks are great for marking a few places you visit often, e.g. marking
your config file entry as `C`._

> Press `ma` at the current position to set a mark, then `G` to jump to the
> bottom of the file and wander around, then press `` `a `` to see whether you
> land back exactly where you were.

## Automatic marks

Vim maintains a few special marks automatically, without you setting them:

- `` `. `` jump to the position of the **last change**
- `` `" `` jump to the **position where you last left the file** (useful when
  reopening a file)
- ``  ` ` `` jump to the position **before the last jump** (two backticks, i.e.
  "back to where I was before I jumped")
- `` `[ `` / `` `] `` the start/end of the last yanked or pasted text

_Tips: `` `. `` is incredibly useful — no matter where you scroll, it takes you
right back to the last place you edited so you can keep working._

## The jumplist

"Big jump" operations like `G`, `gg`, `/search`, `n`, `` `<X> ``, and `gf` are
all recorded by Vim into the jumplist, and you can move backward and forward
through that history.

- `Ctrl-o` jump back to the previous position (older)
- `Ctrl-i` or `Tab` go forward to the next position (newer)
- `:jumps` view the jumplist

_Note: Consecutive small movements like `j` and `k` are not recorded into the
jumplist — only "leaping" movements are. This is exactly what you want: the
jumplist records "the few key places I've been", not every tiny step._

> In this file, `/marks` to jump up, then `G` to the bottom, then press `Ctrl-o`
> a few times to feel yourself walking back along your trail; then `Ctrl-i` to
> walk forward again.

## The changelist

The jumplist records "places you've been"; the changelist specifically records
"places you've changed".

- `g;` jump to the previous change position
- `g,` jump to the next change position
- `:changes` view the changelist

After making several edits in a large file, `g;` lets you retrace your changes
one by one — much faster than scrolling around to find them.

> Make a few edits at different spots in this file (remember to `u` undo them
> afterwards), then press `g;` to jump along the change history.

Marks and jumps let you "leave a trail" through your code. Next, let's expand our
view from a single file to the whole project.

[Next Chapter](chapter11.md) introduces multi-file search and replace.
