# Contributing to Learn VIM

Thanks for helping make this hands-on Vim tutorial clearer and more useful.
Contributions of corrections, examples, translations, and new lessons are
welcome.

## Before you start

- Search the existing issues and pull requests before opening a new one.
- For a substantial new chapter or structural change, open an issue first so
  the approach can be discussed.
- Keep each pull request focused on one topic.

## Make a contribution

1. Fork the repository and create a branch from `master`.
2. Edit the Markdown files in the relevant language directory: `en`, `zh-CN`,
   or `ja`.
3. Keep Vim commands exact and place commands in inline code or fenced code
   blocks. Check links and follow the formatting conventions in the existing
   chapters.
4. When changing lesson meaning or structure, update the other translations
   when possible. If you cannot, note which translations still need work in
   the pull request.
5. Preview the Markdown locally and try every command you changed in Vim. For
   behavior that may depend on user configuration, test with `vim -u NONE`.
6. Open a pull request describing what changed, why, and how you verified it.

Small fixes can be submitted directly as pull requests. For bug reports or
content suggestions, please open a
[GitHub issue](https://github.com/dofy/learn-vim/issues).

## License

By contributing, you agree that your contribution is made available under the
repository's [CC0 1.0 Universal license](LICENSE).
