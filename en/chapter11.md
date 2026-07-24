# Chapter 11: Multi-file Search and Replace

In [Chapter 3](chapter03.md) we learned `:%s/foo/bar/g`, which replaces every
`foo` with `bar` in the current file. But in real projects a more common need is
"replace every `foo` in the whole project with `bar`", and here the single-file
`:%s` falls short.

In this chapter we expand search and replace from "one file" to "a bunch of
files".

## Multi-file search

- `:vimgrep /pattern/ file...` search for pattern in the given files, results go
  into the quickfix list
- `:vimgrep /pattern/g **/*.js` search in `.js` files in the current directory
  and all subdirectories
- `:grep pattern file...` search using the external grep program (faster, but
  depends on the system grep)

`**` means recursively match all subdirectories, `*.js` matches the given
extension; combined they mean "js files at every level".

_Note: `:vimgrep` is Vim's built-in implementation — cross-platform but slower;
`:grep` relies on an external tool (you can set `grepprg` to a faster searcher
like `rg` or `ag`). When there are many files, prefer `:grep`._

## The quickfix list

The search results above are stored into a list called **quickfix**, which is the
core that runs through multi-file operations in Vim.

- `:copen` open the quickfix window (lists all matches; Enter jumps to the
  corresponding position)
- `:cclose` close the quickfix window
- `:cnext` abbreviated `:cn` jump to the next match
- `:cprev` abbreviated `:cp` jump to the previous match
- `:cfirst` / `:clast` jump to the first / last match
- `:cc <N>` jump to the Nth match

> Try searching this tutorial's own directory (read-only, safe): first make sure
> Vim's working directory is `en/`, run `:vimgrep /Vim/g *.md`, then `:copen` to
> see the list, and use `:cn` / `:cp` to jump between matches.

## Batch replace

With the quickfix list, you can batch-run a command against **each item in the
list**.

- `:cdo {cmd}` run cmd on **each entry** in the quickfix list
- `:cfdo {cmd}` run cmd on **each file** in the quickfix list

The typical cross-file replace pattern is "vimgrep first, then cdo to replace":

```vim
:vimgrep /foo/g **/*.js
:cdo s/foo/bar/g | update
```

- The first line searches all positions containing `foo` into quickfix
- The second line runs the replacement on each entry; `| update` saves the file
  afterwards

_Note: The `| update` after `s/foo/bar/g` is crucial, otherwise the changes only
live in memory and are never written to disk. If you want to confirm each one,
replace `g` with `gc` (confirm) and Vim will ask you before every replacement._

## The argument list

Besides quickfix, Vim has an "argument list", good for explicitly specifying a
set of files to process.

- `:args **/*.js` add matching files to the argument list
- `:args` view the current argument list
- `:argdo {cmd}` run cmd on each file in the argument list

For example, a project-wide replace can also be done like this:

```vim
:args **/*.js
:argdo %s/foo/bar/g | update
```

The difference between `:argdo` and `:cdo` is scope: `:argdo` targets "the file
set you specified", while `:cdo` targets "the specific positions matched by the
last search".

> Practice tip: try `:cdo` / `:argdo` batch replacement in a **throwaway temp
> directory**, don't practice directly on a real project. Before making changes,
> `git commit` or back up first — Vim's batch replace really does change
> everything.

---

That's it — from cursor movement to multi-file batch operations, these eleven
chapters cover the vast majority of Vim skills you'll use daily. If you run into
any problems with Vim, or the tutorial misses some common operation, feel free to
raise it in [issues](../../issues), and I'll do my best to answer or add it to
the tutorial.

**Thanks again for your interest! If you love, please share. Love life, love
VIM!**
