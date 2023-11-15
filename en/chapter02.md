# Chapter 2: Opening Files, Finding Content

## Open Files

Ha, now you have learned a way to open files in Vim, although this way is not
the most common, but it is the most direct, especially when your code includes a
certain file, the following introduces two other commonly used open methods.

### Open files in Vim

- `:e <filename>` open the file which named `<filename>`, if the file is not
  exists, it will create a new one
- `:Ex` open the directory tree in Vim, press `-` to enter the parent directory
  and press Enter to open the corresponding file

## Find

### Find content in document

- `*` find the word under the cursor and jump to the next
- `#` find the word under the cursor and jump to the previous
- `/<search>` find the specified string backward
- `?<search>` find the specified string forward
- `n` continue to find the next
- `N` continue to find the previous

_Note: `n` and `N` are directional. If you previously searched with `*`, `n`
will continue to search toward the end of the document, and `N` toward the
beginning of the document; conversely, if you search with `#`, `n` points to the
beginning and `N` points to the end of the document._

### Search in line

- `f<X>` Finds `X` on a line toward the end of the line and positions the cursor
  over the character `X`.`
- `t<X>` Finds `X` on a line toward the end of the line and positions the cursor
  over the character before `X`.
- `F<X>` Finds `X` on a line toward the beginning of the line and positions the
  cursor over the character `X`.
- `T<X>` Finds `X` on a line toward the beginning of the line and positions the
  cursor over the character after `X`.
- `;` Find the next character in the current direction
- `,` Find the previous character in the current direction

> There are several "Vim" words in the current document, you can try to use `*`
> and `#` to find and feel the directionality of `n` and `N`.
>
> And there are several "n" characters in the "Note" above, you can try to find
> them in the line and feel the directionality of `;` and `,`.

### Matching

In Vim, you can use `%` to match `(` and `)`, `[` and `]`, `{` and `}`. When the
cursor is on one of the symbols, press `%`, the cursor will jump to the other
symbol that matches it.

> Press `%` on the `()[]{}` characters in the following text to see the effect,
> and then press `n` to continue searching.

```javascript
const func = (win, doc) => {
  const SEVEN = ((1 + 2) * (3 + 4) * (5 - 6)) / 7;
  const YU = [1, 2, [[3, 4], 5, 6], 7];
  if (true) {
    return SEVEN;
  } else {
    return YU;
  }
};
```

[Next Chapter](chapter03.md) will introduce the modification of the document.
Before that, let's briefly introduce the buffer of Vim. Simply understand that
the buffer is the file history of the current Vim session.

> Now you should have two files in your buffer, you can use `:buffers` or `:ls`
> command to view, see the buffer list, probably like this:

```vim
:ls
  1 #h   "chapter01.md"                  line 47
  2 %a   "chapter02.md"                  line 1
Press ENTER or type command to continue
```

> Then, you can use the following commands to switch between buffers:
>
> - `:bn` open the next file in the buffer
> - `:bp` open the previous file in the buffer
> - `:b<N>` open the Nth file in the buffer
>
> Also you can use `:bdelete<N>` to delete the buffer you want to close, the
> abbreviation is `:bd<N>`.
>
> Of course, you can also use the `:Ex` command, select `chapter03.md` and open
> it, enter [Chapter 3](chapter03.md).
