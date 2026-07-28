# Japanese Tutorial Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a complete, internally navigable Japanese edition of every tutorial and plugin document in the repository.

**Architecture:** Mirror the `en/` file tree under `ja/`, using English as the structural baseline and Simplified Chinese to resolve ambiguous meaning. Keep executable commands, practice targets, filenames, and URLs stable while translating learner-facing prose and comments; validate the finished tree with repository-level structural and content checks.

**Tech Stack:** Markdown, Vim script, JavaScript practice fixture, Git, shell validation with `find`, `comm`, `rg`, and `git diff --check`

## Global Constraints

- The relative file set under `ja/` must exactly mirror `en/`.
- Use English structure and terminology as the baseline; compare Simplified Chinese for ambiguous passages.
- Translate prose, headings, learner instructions, and learner-facing code comments into natural Japanese.
- Preserve Vim commands, key names, placeholders, filenames, code behavior, URLs, and plugin names.
- Preserve blockquotes, code fences, command capitalization, punctuation, and every `gf` target.
- Express ambiguous search directions as the equivalent of "toward the end of the document" and "toward the beginning of the document."
- Recalculate every displayed or instructional line number only after Japanese formatting is stable.
- Do not modify existing English or Simplified Chinese tutorial content except their README language navigation.
- Do not add dependencies or generated build artifacts.

---

### Task 1: Japanese Entry Point and Language Navigation

**Files:**
- Create: `ja/README.md`
- Modify: `README.md`
- Modify: `en/README.md`
- Modify: `zh-CN/README.md`

**Interfaces:**
- Consumes: The existing language navigation and tutorial index conventions.
- Produces: A Japanese tutorial entry point and reciprocal language links used by every reader-facing entry page.

- [ ] **Step 1: Record the pre-change navigation and expected missing target**

Run:

```bash
test ! -e ja/README.md
rg -n 'English|简体中文' README.md en/README.md zh-CN/README.md
```

Expected: `ja/README.md` does not exist, and none of the three navigation rows links to it.

- [ ] **Step 2: Create the Japanese README**

Translate all learner-facing content from `en/README.md` into natural Japanese.
Keep its relative chapter/plugin links, reference definitions, images, Vim
commands, and shell commands unchanged except:

```markdown
[English](../en/README.md) | [简体中文](../zh-CN/README.md) | [日本語](README.md)
```

Use `cd learn-vim/ja` in the usage instructions. Include all eleven chapters and
all five plugin index/detail destinations.

- [ ] **Step 3: Add reciprocal Japanese navigation**

Use these destinations in the three existing README files while retaining their
existing flag and label style:

```text
README.md       -> ja/README.md
en/README.md    -> ../ja/README.md
zh-CN/README.md -> ../ja/README.md
```

Do not alter any other existing README prose.

- [ ] **Step 4: Verify navigation and index targets**

Run:

```bash
rg -n 'ja/README\.md|日本語' README.md en/README.md zh-CN/README.md ja/README.md
rg -o '\\]\\(([^)#]+\\.md)\\)' ja/README.md
```

Expected: all four entry points expose Japanese navigation, and the Japanese
index lists eleven chapters plus the mode and plugin documents.

- [ ] **Step 5: Commit the entry point**

```bash
git add README.md en/README.md zh-CN/README.md ja/README.md
git commit -m "docs: add Japanese tutorial entry point"
```

### Task 2: Core Chapters 1 Through 4

**Files:**
- Create: `ja/chapter01.md`
- Create: `ja/chapter02.md`
- Create: `ja/chapter03.md`
- Create: `ja/chapter04.md`
- Create: `ja/chapter04-demo.js`

**Interfaces:**
- Consumes: The Japanese terminology and navigation style established in `ja/README.md`.
- Produces: The introductory interactive learning path and the practice fixture used by Chapter 4.

- [ ] **Step 1: Confirm the source file set**

Run:

```bash
for path in chapter01.md chapter02.md chapter03.md chapter04.md chapter04-demo.js; do
  test -f "en/$path" && test -f "zh-CN/$path" && test ! -e "ja/$path"
done
```

Expected: both source languages contain all five files and Japanese targets do not yet exist.

- [ ] **Step 2: Translate Chapters 1 and 2**

Create complete Japanese translations that preserve all examples and exercise
structure. In Chapter 2, render the four directions explicitly:

```markdown
- `*` カーソル位置の単語を文書の末尾方向に検索
- `#` カーソル位置の単語を文書の先頭方向に検索
- `/<search>` 指定した文字列を文書の末尾方向に検索
- `?<search>` 指定した文字列を文書の先頭方向に検索
```

Do not finalize the buffer-list line numbers during this step; mark no
placeholder in the file, but calculate them directly after all Japanese
wrapping in Step 4.

- [ ] **Step 3: Translate Chapters 3, 4, and the demo fixture**

Translate prose and learner-facing JavaScript comments. Preserve JavaScript
identifiers and behavior byte-for-byte apart from comments and practice text.
Keep `chapter04-demo.js` references suitable for `gf`.

- [ ] **Step 4: Recalculate Chapter 2 buffer line numbers**

Run:

```bash
nl -ba ja/chapter01.md | sed -n '1,120p'
nl -ba ja/chapter02.md | sed -n '1,140p'
```

Find the actual target lines represented by the Chapter 2 `:ls` example and
replace the displayed `line N` values with those final Japanese line numbers.
Re-run the command and manually confirm each number points to the described
target.

- [ ] **Step 5: Verify practice-file integrity**

Run:

```bash
rg -n 'chapter0[1-4]\\.md|chapter04-demo\\.js' ja/chapter0{1,2,3,4}.md
rg -n '^```' ja/chapter0{1,2,3,4}.md
node --check ja/chapter04-demo.js
git diff --check
```

Expected: referenced files exist, code-fence counts are even per file,
JavaScript syntax passes, and the diff has no whitespace errors.

- [ ] **Step 6: Commit core chapters**

```bash
git add ja/chapter01.md ja/chapter02.md ja/chapter03.md ja/chapter04.md ja/chapter04-demo.js
git commit -m "docs: translate Japanese chapters 1 through 4"
```

### Task 3: Chapters 5 Through 11

**Files:**
- Create: `ja/chapter05.md`
- Create: `ja/chapter06.md`
- Create: `ja/chapter07.md`
- Create: `ja/chapter08.md`
- Create: `ja/chapter09.md`
- Create: `ja/chapter10.md`
- Create: `ja/chapter11.md`

**Interfaces:**
- Consumes: The terminology and exercise formatting used in Japanese Chapters 1 through 4.
- Produces: The complete advanced chapter sequence, including navigation to related chapters and practice files.

- [ ] **Step 1: Confirm all advanced source chapters**

Run:

```bash
for number in 05 06 07 08 09 10 11; do
  test -f "en/chapter${number}.md" &&
  test -f "zh-CN/chapter${number}.md" &&
  test ! -e "ja/chapter${number}.md"
done
```

Expected: every source pair exists and no Japanese target exists.

- [ ] **Step 2: Translate Chapters 5 through 7**

Translate the complete documents while preserving split-window commands, tab
commands, visual-block examples, macro registers, literal keystrokes, and
cross-file targets.

- [ ] **Step 3: Translate Chapters 8 through 11**

Translate text-object, register, mark/jump, and multi-file search-and-replace
content. Preserve all quote/register syntax and glob patterns exactly. Keep
safety warnings prominent and natural in Japanese.

- [ ] **Step 4: Audit all explicit line references**

Run:

```bash
rg -n 'line [0-9]+|lines? [0-9]+|第 ?[0-9]+ ?行|[0-9]+ ?行目' ja/chapter{05,06,07,08,09,10,11}.md
```

For every match, use `nl -ba` on the containing file and verify or correct the
number against the final Japanese layout. Expected: every retained number
points to the intended practice target.

- [ ] **Step 5: Verify advanced chapters**

Run:

```bash
for path in ja/chapter{05,06,07,08,09,10,11}.md; do
  count=$(rg -c '^```' "$path" || true)
  test $((count % 2)) -eq 0
done
git diff --check
```

Expected: every file has balanced fenced code blocks and no whitespace errors.

- [ ] **Step 6: Commit advanced chapters**

```bash
git add ja/chapter05.md ja/chapter06.md ja/chapter07.md ja/chapter08.md ja/chapter09.md ja/chapter10.md ja/chapter11.md
git commit -m "docs: translate Japanese chapters 5 through 11"
```

### Task 4: Modes, Configuration, and Plugin Tutorials

**Files:**
- Create: `ja/vim-modes.md`
- Create: `ja/vim-plugin.md`
- Create: `ja/vimrc.vim`
- Create: `ja/plugins/index.md`
- Create: `ja/plugins/nerdtree.md`
- Create: `ja/plugins/easyalign.md`
- Create: `ja/plugins/airline.md`
- Create: `ja/plugins/surround.md`

**Interfaces:**
- Consumes: Japanese terminology from the chapter sequence and existing plugin/configuration commands.
- Produces: Complete Japanese supplementary documentation matching the English tree.

- [ ] **Step 1: Confirm the supplementary source set**

Run:

```bash
for path in vim-modes.md vim-plugin.md vimrc.vim plugins/index.md plugins/nerdtree.md plugins/easyalign.md plugins/airline.md plugins/surround.md; do
  test -f "en/$path" && test -f "zh-CN/$path" && test ! -e "ja/$path"
done
```

Expected: every source pair exists and every Japanese target is absent.

- [ ] **Step 2: Translate Vim modes, plugin overview, and vimrc**

Translate prose and learner-facing Vim script comments. Preserve option names,
mapping syntax, plugin declarations, commands, and configuration behavior.

- [ ] **Step 3: Translate all plugin documents**

Translate the index plus NERDTree, EasyAlign, Airline, and surround.vim
tutorials. Preserve plugin names, GitHub URLs, install snippets, mappings,
alignment examples, and surround targets exactly.

- [ ] **Step 4: Audit supplementary line references and code fences**

Run:

```bash
rg -n 'line [0-9]+|lines? [0-9]+|第 ?[0-9]+ ?行|[0-9]+ ?行目' ja/vim-modes.md ja/vim-plugin.md ja/plugins
for path in ja/vim-modes.md ja/vim-plugin.md ja/plugins/*.md; do
  count=$(rg -c '^```' "$path" || true)
  test $((count % 2)) -eq 0
done
```

For every line-number match, verify it with `nl -ba`. Expected: references are
accurate and all fences are balanced.

- [ ] **Step 5: Verify configuration equivalence**

Run:

```bash
diff -u \
  <(sed 's/[[:space:]]*\".*$//' en/vimrc.vim) \
  <(sed 's/[[:space:]]*\".*$//' ja/vimrc.vim)
```

Expected: no differences after comments are removed.

- [ ] **Step 6: Commit supplementary tutorials**

```bash
git add ja/vim-modes.md ja/vim-plugin.md ja/vimrc.vim ja/plugins
git commit -m "docs: translate Japanese Vim and plugin guides"
```

### Task 5: Repository-Level Japanese Edition Validation

**Files:**
- Modify only if validation exposes a defect: `ja/**`, `README.md`, `en/README.md`, `zh-CN/README.md`

**Interfaces:**
- Consumes: Every Japanese document from Tasks 1 through 4.
- Produces: A structurally complete and verified Japanese edition ready for review.

- [ ] **Step 1: Compare English and Japanese file trees**

Run:

```bash
comm -3 \
  <(cd en && find . -type f | sort) \
  <(cd ja && find . -type f | sort)
```

Expected: no output.

- [ ] **Step 2: Validate all local Markdown links**

Run:

```bash
for source in ja/*.md ja/plugins/*.md; do
  while IFS= read -r target; do
    resolved="$(cd "$(dirname "$source")" && pwd)/${target%%#*}"
    test -e "$resolved" || {
      echo "$source -> $target"
      exit 1
    }
  done < <(rg -o '\\]\\(([^)#]+\\.md(?:#[^)]+)?)\\)' "$source" |
    sed -E 's/^.*\\]\\(([^)]+)\\)$/\\1/')
done
```

Expected: no output and exit status 0.

- [ ] **Step 3: Check fences, line numbers, and language residue**

Run:

```bash
for path in ja/*.md ja/plugins/*.md; do
  count=$(rg -c '^```' "$path" || true)
  test $((count % 2)) -eq 0 || echo "unbalanced: $path"
done
rg -n 'line [0-9]+|lines? [0-9]+|第 ?[0-9]+ ?行|[0-9]+ ?行目' ja
rg -n '[一-龥]' ja
```

Expected: no unbalanced files. Review every line-number match against `nl -ba`.
Review CJK matches manually because Japanese legitimately uses kanji; remove
only text that is clearly untranslated Chinese. Also manually review unexpected
full English sentences while allowing code, commands, URLs, and proper names.

- [ ] **Step 4: Confirm existing-language scope**

Run:

```bash
git diff master...HEAD -- README.md en/README.md zh-CN/README.md
git diff --check
git status --short --branch
```

Expected: existing-language files contain navigation-only changes, the diff has
no whitespace errors, and the working tree contains only intentional fixes from
validation.

- [ ] **Step 5: Apply and commit validation fixes if needed**

If any validation step required corrections:

```bash
git add ja README.md en/README.md zh-CN/README.md
git commit -m "docs: validate Japanese tutorial navigation"
```

If no correction was needed, do not create an empty commit.

- [ ] **Step 6: Prepare handoff**

Run:

```bash
git log --oneline master..HEAD
git status --short --branch
```

Expected: the design plus Japanese implementation commits are present, and the
working tree is clean. Do not push this branch until explicitly requested.
