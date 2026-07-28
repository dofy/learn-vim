# Japanese Support Design

## Goal

Add complete Japanese-language support to the Vim hands-on tutorial while
preserving the tutorial's interactive behavior. Japanese readers must be able to
follow every chapter, exercise, cross-file navigation, configuration example,
and plugin tutorial without falling back to another language.

## Scope

Create a `ja/` directory that mirrors the complete file set under `en/`:

- `README.md`
- `chapter01.md` through `chapter11.md`
- `vim-modes.md`
- `vim-plugin.md`
- `vimrc.vim`
- `chapter04-demo.js`
- `plugins/index.md`
- `plugins/nerdtree.md`
- `plugins/easyalign.md`
- `plugins/airline.md`
- `plugins/surround.md`

Update the language navigation in the root, English, and Simplified Chinese
README files so each entry point links to the Japanese README.

Existing English and Simplified Chinese tutorial content is otherwise out of
scope. Unrelated issues found while translating will be reported rather than
silently fixed on this branch.

## Translation Strategy

Use the English documents as the structural and terminology baseline, and
compare each passage with the Simplified Chinese source when the English meaning
is awkward or ambiguous. Write natural Japanese rather than transliterating
English or preserving Chinese sentence structure.

Keep Vim commands, key names, placeholders, filenames, code behavior, URLs, and
product or plugin names unchanged. Translate explanatory prose, headings,
instructions, code comments intended for learners, and navigation labels.

Search directions must use explicit wording equivalent to "toward the end of
the document" and "toward the beginning of the document" where abstract
forward/backward wording could be ambiguous.

## Interactive Exercise Integrity

The Markdown files are both documentation and live practice material. The
translation must preserve:

- blockquotes as actions for the reader to perform;
- code fences and example input as practice targets;
- filenames used by `gf`;
- command capitalization and punctuation;
- chapter-to-chapter and related-file navigation.

Japanese text wraps differently from English and Chinese. Any instruction,
sample output, or demonstration that contains a line number must be recalculated
against the final Japanese file rather than copied from a source language.
Line-number validation happens only after formatting is stable. This includes
embedded output such as the buffer list in Chapter 2 and any exercise that
directs the reader to a numbered line.

## Validation

Before completion:

1. Compare the relative file lists under `ja/` and `en/`; they must match.
2. Check that all relative Markdown links from the Japanese documents resolve.
3. Check chapter navigation and all `gf` filename targets.
4. Check that fenced code blocks are balanced.
5. Search for unexpected English or Chinese prose left in Japanese files,
   allowing commands, code, URLs, and proper names.
6. Recalculate and verify every line-number reference against the final files.
7. Run `git diff --check`.
8. Review the final diff to ensure existing non-navigation content in `en/` and
   `zh-CN/` was not changed.

## Delivery

Implement on `codex/add-japanese-support`. Keep the Japanese-support work
separate from the already pushed Issue #29 branch. Commit and push only when the
user explicitly requests those external Git actions.
