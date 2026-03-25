# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual Vim hands-on tutorial repository. All content is in Markdown format — files serve dual purpose: readable documentation and actual files to practice Vim commands on.

## Repository Structure

```
learn-vim/
├── zh-CN/          # Simplified Chinese tutorial
│   ├── chapter01–07.md
│   ├── vim-modes.md
│   ├── vim-plugin.md
│   ├── vimrc.vim   # Sample .vimrc configuration
│   └── plugins/    # Plugin-specific tutorials (NERDTree, EasyAlign, Airline, surround.vim)
└── en/             # English tutorial (mirrors zh-CN structure)
```

Both language directories are structurally identical. `chapter04-demo.js` exists in both as a practice file for the tips chapter.

## Content Conventions

- `## Major titles` = top-level category
- `### Subtitles` = subcategory
- Plain text = description only (not interactive)
- `> Blockquote` = actionable instruction for the reader to perform in Vim
- Commands in backticks like `:w` — angle brackets like `<X>` denote variables, not literal characters
- All commands are case-sensitive

## Editing Guidelines

- Keep `zh-CN/` and `en/` in sync — changes to one language should be mirrored to the other
- Chapter files contain navigation links using filenames (readers use `gf` in Vim to follow them); keep filenames stable
- The `vimrc.vim` file is a reference configuration, not executed by the tutorial itself
