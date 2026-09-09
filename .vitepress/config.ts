import { defineConfig, type DefaultTheme } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(__dirname, '..')

// Read the first markdown H1 of a file to use as the sidebar/label text,
// so labels stay in sync with the tutorial content instead of being hardcoded.
function title(rel: string, fallback: string): string {
  try {
    const src = fs.readFileSync(path.join(root, rel), 'utf-8')
    const m = src.match(/^#\s+(.+?)\s*$/m)
    if (m) return m[1].replace(/[（(].*?[)）]\s*$/, '').trim()
  } catch {}
  return fallback
}

// Ordered chapter list mirrors each locale's README index.
const chapters = Array.from(
  { length: 11 },
  (_, i) => `chapter${String(i + 1).padStart(2, '0')}`
)
const plugins = ['nerdtree', 'easyalign', 'airline', 'surround']

function sidebar(locale: string): DefaultTheme.SidebarItem[] {
  const base = locale ? `/${locale}/` : '/'
  const rel = locale ? `${locale}/` : ''
  return [
    {
      text: title(`${rel}README.md`, 'Home'),
      link: base,
    },
    {
      text: 'Basic',
      items: chapters.map((c) => ({
        text: title(`${rel}${c}.md`, c),
        link: `${base}${c}`,
      })),
    },
    {
      text: 'More',
      items: [
        {
          text: title(`${rel}vim-modes.md`, 'Vim Modes'),
          link: `${base}vim-modes`,
        },
        {
          text: title(`${rel}vim-plugin.md`, 'Vim Plugins'),
          link: `${base}vim-plugin`,
        },
        {
          text: title(`${rel}plugins/index.md`, 'Plugins'),
          link: `${base}plugins/`,
          items: plugins.map((p) => ({
            text: title(`${rel}plugins/${p}.md`, p),
            link: `${base}plugins/${p}`,
          })),
        },
      ],
    },
  ]
}

const repo = 'https://github.com/dofy/learn-vim'

export default defineConfig({
  title: 'Learn Vim',
  description: 'A hands-on, multilingual Vim tutorial you read and practice in Vim.',
  lang: 'en',
  cleanUrls: true,
  // The .md files are authored for reading inside Vim (with `gf` navigation),
  // so their cross-links are intentionally file-relative; don't fail the build on them.
  ignoreDeadLinks: true,
  markdown: {
    // The tutorials contain bare angle-bracket notation in prose, e.g.
    // `<space><filename>` or `f<X>`. VitePress renders Markdown through Vue, which
    // otherwise treats those as unclosed HTML/component tags and fails the build.
    // Escaping `<`/`>` inside plain text tokens keeps the source .md files untouched
    // while making them safe to compile. Code spans/blocks use different tokens and
    // are left alone.
    config(md) {
      const escapeAngles = (tokens: any[]) => {
        for (const t of tokens) {
          // Bare notation like `<space>` or `<X>` is parsed either as a plain
          // text token or, because it looks like a tag, as an html_inline token.
          // Both must be neutralized so Vue doesn't treat them as components.
          if (t.type === 'text' || t.type === 'html_inline') {
            t.content = t.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
            if (t.type === 'html_inline') t.type = 'text'
          } else if (t.children) {
            escapeAngles(t.children)
          }
        }
      }
      md.core.ruler.push('escape_bare_angles', (state) => {
        for (const tok of state.tokens) {
          if (tok.type === 'inline' && tok.children) escapeAngles(tok.children)
        }
      })
    },
  },
  // Only the tutorial content is part of the site.
  srcExclude: [
    'README.md',
    'CLAUDE.md',
    'LICENSE',
    '**/vimrc.vim',
    '**/*-demo.js',
  ],
  rewrites: {
    'en/README.md': 'en/index.md',
    'zh-CN/README.md': 'zh-CN/index.md',
    'ja/README.md': 'ja/index.md',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: repo }],
    search: { provider: 'local' },
  },
  locales: {
    root: {
      label: '🌐 Language',
      lang: 'en',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/en/' }],
        sidebar: { '/en/': sidebar('en') },
        editLink: { pattern: `${repo}/edit/main/:path` },
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: [{ text: '指南', link: '/zh-CN/' }],
        sidebar: { '/zh-CN/': sidebar('zh-CN') },
        editLink: { pattern: `${repo}/edit/main/:path`, text: '在 GitHub 上编辑' },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '本页目录' },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [{ text: 'ガイド', link: '/ja/' }],
        sidebar: { '/ja/': sidebar('ja') },
        editLink: { pattern: `${repo}/edit/main/:path`, text: 'GitHub で編集' },
        docFooter: { prev: '前へ', next: '次へ' },
        outline: { label: 'このページの内容' },
      },
    },
  },
})
