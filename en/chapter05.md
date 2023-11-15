# Chapter 5: Splitting Windows and Tabs

## Splitting Windows and Tabs

You will often encounter situations where you need to edit the current document
with reference to another document (scenario: translation), or copy code from
another document to the current document (scenario: copying html element class
names to a css document). copy code from another document to the current
document (scenario: copying html element class names to a css document), this is
when you need to split the screen the most.

### Splitting

- `:split` abbreviation `:sp` or `Ctrl-w s` split up and down.
- `:vsplit` Abbreviation `:vs` or `Ctrl-w v` Split left and right.
- `:diffsplit` Abbreviation `:diffs` Diff mode opens a split screen and can be
  followed by {filename}.

### Window jumping

- `Ctrl-w w` Activate next window.
- `Ctrl-w j` Activates the next window.
- `Ctrl-w k` Activate the upper window.
- `Ctrl-w h` Activate left window
- `Ctrl-w l` activates the right window

### Move split screen

- `Ctrl-w l` Moves to rightmost window
- `Ctrl-w H` Moves to the leftmost side.
- `Ctrl-w K` Move to the top
- `Ctrl-w J` Move to the bottom

_Note: Case sensitive. Alternatively, you can move the bottom screen to the
right side for a top/bottom to left/right split screen conversion. _

### Screen zoom

- `Ctrl-w =` Average window size
- `Ctrl-w +` Increase height
- `Ctrl-w -` Reduce height
- `Ctrl-w _` Maximum height
- `Ctrl-w >` Increase width
- `Ctrl-w <` Reduce width
- `Ctrl-w |` Maximum width

> Practice! Practice! Practice!

## Tagged pages

The buffer mentioned in [Chapter 2](chapter02.md) and the split-screen operation
just mentioned are good for switching between a small number of files. I don't
think it's convenient to have more than 3 files, but tabs are better for
switching between multiple files.

### Create a tab

- `:tabnew` or `:tabedit` abbreviation `:tabe` opens a new tab.
- `Ctrl-w gf` opens a new tab with the name of the file at the current cursor
  position

Note: Both `:tabnew` and `:tabedit` can be followed by a <space><filename> to
open the specified file in a new tab. to open the specified file in a new tab,
and `:` can be followed by a number indicating the position of the new tab in
the list (starting from 0). \_

### Switch tabs

- `gt` or `:tabnext` Abbreviation `:tabn` Next tab (last one loops to first)
- `gT` or `:tabprevious` Abbreviation `:tabp` Previous tab (first one loops to
  last)
- `:tabrewind` abbreviation `:tabr` or `:tabfirst` abbreviation `:tabfir` to the
  first one
- `:tablast` abbreviation `:tabl` to the last tab

### Close a tab.

- `:tabclose` Abbreviation `:tabc` to close the current tab
- `:-tabc` Close previous tab
- `:+tabc` Close the next tab
- `:tabonly` abbreviation `:tabo` close other tabs

The [next chapter](chapter06.md) will cover block operations.
