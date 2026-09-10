# Chapter 6: Visual Block Editing

Visual Block mode selects a rectangle and edits the same column across several
lines. For example, turning plain lines into array items requires adding quotes
and commas to every line.

> Search for `/^apple$` in the block below and place the cursor on its `a`. Then
> press `Ctrl-v 4j $ A ', Esc`. Spaces only separate the steps; do not type them.

```javascript
var myArray = [
apple
banana
cherry
durian
elderberry
];
```

Here is what happened: `Ctrl-v` entered Visual Block mode, `4j` selected five
lines, `$` extended each selection to line end, and `A` appended text at the
right edge. While typing `',`, only the first line changed visibly; pressing
`Esc` applied the edit to every selected line.

> Search for `/^apple$` again and use `Ctrl-v 4j I ' Esc` to insert a quote at
> the start of all five lines. Each item should now look like `'apple',`. If the
> selection or text is wrong, one `u` undoes the entire block edit.

_Note: `I` and `A` are the most useful block-edit commands. Ordinary `i` and
`a` affect only the cursor position. With uneven line lengths, inspect the
selection before changing it._

Block editing fits regular column changes. When each line needs the same
multi-step sequence, a macro is usually a better tool.

Next, learn about [macros in Vim](chapter07.md).
