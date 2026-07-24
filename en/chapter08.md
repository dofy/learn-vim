# Chapter 8: Text Objects

So far, when you delete, modify, or copy, the target has been either a character
(`x`), a whole line (`dd`), or a range you carved out with motion commands
(`d$`, `dw`). But at work what we usually think is "change the string inside
these quotes" or "delete the content inside this pair of brackets", not "let me
count how many characters there are".

This is where one of Vim's most delightful features comes in — Text Objects.

## What is a text object

A text object is not a command, but a kind of "target". It must follow an
operator (`d` delete, `c` change, `y` yank, `v` select) to describe "which
structured chunk of text to operate on".

Text objects are always two letters. The first letter is the scope modifier:

- `i` means inner — only the content inside the object
- `a` means around — including the surrounding symbols/whitespace

The second letter is the object type (word, quotes, brackets, etc., see below).

_Note: A text object does not depend on where exactly the cursor sits within the
object — it just needs to be **somewhere inside** the object. For example, with
the cursor anywhere between the quotes, `ci"` changes the whole quoted content._

## Common text objects

### Word

- `iw` a word (excluding surrounding whitespace)
- `aw` a word (including whitespace on one side)

### Quotes

- `i"` `i'` `` i` `` the content inside the quotes
- `a"` `a'` `` a` `` including the quotes themselves

### Brackets

- `i(` or `ib` inside parentheses
- `i[` inside square brackets
- `i{` or `iB` inside curly braces
- `a(` `a[` `a{` including the brackets themselves

### Tags (HTML/XML)

- `it` the content inside a tag pair, e.g. between `<a>` and `</a>`
- `at` including the tags themselves

### Paragraph and sentence

- `ip` / `ap` a paragraph
- `is` / `as` a sentence

## Combining with operators

The real power of text objects comes from combining them with operators — it
reads almost like a sentence:

- `ciw` change inner word — change the current word
- `di"` delete inner quotes — delete the content inside the quotes
- `ya(` yank around parens — copy the whole chunk including parentheses
- `vi{` visually select inner braces — select the content inside curly braces
- `dap` delete a paragraph — delete the whole paragraph
- `cit` change inner tag — change the text inside a tag

_Tips: The mnemonic is simple — "verb + i/a + object". For example, "I want to
change (c) the inner (i) word (w)" is `ciw`._

> Practice with the code below. Move the cursor to different positions and try
> `ci"` to change a string, `ci(` to change arguments, `di{` to empty a function
> body, `cit` (inside a tag), and so on. Made a mistake? Just `u` to undo.

```javascript
const greeting = "hello world";
const user = { name: "seven", age: 18, tags: ["vim", "editor"] };

function render(title, content) {
  return `<div class="card"><h1>${title}</h1><p>${content}</p></div>`;
}
```

> Try these combinations and feel the difference:
>
> - With the cursor on `hello world`, how do `ci"` and `ca"` differ?
> - With the cursor inside `{ name... }`, what about `di{` versus `da{`?
> - With the cursor inside `["vim", "editor"]`, what does `vi[` select?

Once you master text objects, you'll find yourself pressing fewer keys yet
editing more precisely. This is the watershed between "knowing Vim" and "enjoying
Vim".

[Next Chapter](chapter09.md) introduces Vim's registers and clipboard.
