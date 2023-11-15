# Chapter 3: Modifying and Saving Files

## Modify the document

You have learned how to control the cursor, open files, switch files, and find
content in files. These operations are all performed in Vim's normal mode. Now,
it's time to enter another mode of Vim - insert mode, and learn how to modify
the file.

### Insert

- `i` insert before the current character
- `a` insert after the current character
- `I` insert at the beginning of the line
- `A` insert at the end of the line
- `o` insert in the next line
- `O` insert in the previous line

_Note: Any of the above commands will cause Vim to enter insert mode. After
entering this mode, the cursor will change, and the text you enter will appear
directly in the document. Press `Esc` or `Ctrl-[` or `Ctrl-C` to exit insert
mode._

### Delete (and save to Vim clipboard)

- `s` delete the current character and enter `INSERT` mode
- `S` delete the current line and save it to the Vim clipboard, and enter
  `INSERT` mode (equivalent to `cc`)
- `x` delete the current character, equivalent to `Delete` in insert mode
- `X` delete the previous character, equivalent to `Backspace` in insert mode
- `dd` delete the current line and save it to the Vim clipboard
- `d<X>` delete the specified content and save it to the Vim clipboard
- `cc` delete the current line and save it to the Vim clipboard, and enter
  `INSERT` mode
- `c<X>` delete the specified content and save it to the Vim clipboard, and
  enter

_Note: The `<X>` part is a description of the operation content. If you want to
delete a word, enter `dw` or `de`. If you want to copy the content from the
current position to the end of the line, enter `y$`. If you want to delete the
next 3 characters and insert them, enter `c3l`, and so on._

### Copy

- `yy` copy the current line to the Vim clipboard
- `y<X>` copy the specified content to the Vim clipboard

### Paste

- `p` paste after the current position
- `P` paste before the current position

### Merge

- `J` merge the current line with the next line

> Try copying and pasting in the text below

```
Delete this line
Paste below this line
Cut ABC and paste it in front of XYZ to make this part look like
Cut and paste it in front of ABC XYZ.
```

### Replace

- `r<X>` replace the current character with X
- `gu<X>` convert the specified text to lowercase
- `gU<X>` convert the specified text to uppercase
- `:%s/<search>/<replace>/` find the search content and replace it with the
  replace content

> Try changing the case of the following text

```
Change this line to UPPERCASE, THEN TO lowercase.
```

> There is a more interesting command `g~<X>`, first locate the cursor to the
> line of text above, execute `0g~$` to see what happened.

### Undo, Redo

- `u` undo
- `Ctrl-r` redo

### Save file

- `:w` save the current file
- `:wa` save all files
- `:wq` or `ZZ` save and exit
- `:q!` or `ZQ` force exit without saving
- `:saveas <new filename>` save the file as `<new filename>`
- `:w <new filename>` save a copy of the file as `<new filename>` and continue
  editing the original file

> You can try to save the current (perhaps already changed beyond recognition)
> file as a copy, and then continue learning the [next chapter](chapter04.md).
