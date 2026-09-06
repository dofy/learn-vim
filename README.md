# Vim Hands-On Tutorial (Learning Vi and Vims)

![GitHub Repo stars](https://img.shields.io/github/stars/dofy/learn-vim)
![GitHub](https://img.shields.io/github/license/dofy/learn-vim)
![GitHub contributors](https://img.shields.io/github/contributors/dofy/learn-vim)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/dofy/learn-vim)

[🇺🇸 English](en/README.md) | [🇨🇳 简体中文](zh-CN/README.md) |
[🇯🇵 日本語](ja/README.md)

## Intro

In my personal experience of learning Vim, it is very difficult to learn Vim by
reading documentation or watching other people operate it. You have to be in the
real world, in real scenarios, to familiarize yourself with the commands and
master them.

Therefore, to meet the needs of learning and operating at the same time, all the
files in the project are in Markdown format, which can be read as an explanation
document, and can also be opened in Vim. You can read it as an explanatory
document, and you can also use Vim to open the files for actual operation (the
latter is recommended).

## How to Use

1. clone project to local

```bash
git clone https://github.com/dofy/learn-vim.git
```

2. go to the project folder

```bash
cd learn-vim/en
```

3. open the file `chapter01.md` in Vim

```bash
vim chapter01.md
```

## Formatting Rules

```Markdown

## Major titles represent a large category

### Subtitles represent subcategories under this major category

Text without any formatting is a normal description for reading purposes only.

> The text embedded in the quoted block is an instruction to operate, and you
> can follow what is mentioned in it
>
> Also operators or commands are included in symbols like `:w`.

The < and > in commands such as f<X> do not need to be typed, <X> represents a
variable, i.e. you can type fa or fb or fC

_Note: Commands are case-sensitive (matters requiring attention appear in
symbols such as the current line)_

```

> [!NOTE]
>
> If you already have your own `.vimrc` file (refer to
> [Chapter 4](en/chapter04.md)) and have changed some of the defaults in it, it
> may cause some operations to not match the tutorial. In this case, you can run
> `Vim` with the following command:
>
> ```bash
> # Do not load the configuration file
> vim -u NONE
> # Load a specific configuration file
> vim -u <filename>
> ```

## Index

### Basic operations

1. [Chapter 1: Cursor Movement](en/chapter01.md)
1. [Chapter 2: Opening Files, Finding Content](en/chapter02.md)
1. [Chapter 3: Modify and Save Documents](en/chapter03.md)
1. [Chapter 4: Some Tips](en/chapter04.md)
1. [Chapter 5: Split Screen and Tabs](en/chapter05.md)
1. [Chapter 6: Block Operations](en/chapter06.md)
1. [Chapter 7: Macros in Vim](en/chapter07.md)
1. [Chapter 8: Text Objects](en/chapter08.md)
1. [Chapter 9: Registers and Clipboard](en/chapter09.md)
1. [Chapter 10: Marks and Jumps](en/chapter10.md)
1. [Chapter 11: Multi-file Search and Replace](en/chapter11.md)

### Additional content

1. [Vim Modes](en/vim-modes.md)
1. [Vim plugins](en/vim-plugin.md)
1. [Plugin Recommendations](en/plugins/index.md)
   1. [NERDTree](en/plugins/nerdtree.md)
   1. [EasyAlign](en/plugins/easyalign.md)
   1. [Airline & Themes](en/plugins/airline.md)
   1. [surround.vim](en/plugins/surround.md)

> [!NOTE]
>
> - In the tutorials, you can navigate to the next chapter or related chapters,
>   and locate the file name to open it by executing `gf` (goto file). Related
>   files
> - You can always open the relevant chapter to view, and then use `:bp` to go
>   back to the previous file (this command will (This command is covered in
>   [Chapter 2](en/chapter02.md)).
> - You may get a file not saved error when you exit the tutorial with `:q` or
>   `:qa`, try adding `!` to the end of the command!

## Recommend a few Vim configurations

- [dofy / **nvim**][nvim] (the author's current Neovim setup)
- [dofy / **7th-vim**][7th-vim]
- [kepbod / **ivim**][kepbod]
- [chxuan / **vimplus**][chxuan]
- [SpaceVim / **SpaceVim**][spacevim]

## Recommends a couple of other excellent Vim tutorials

- Run `vimtutor` on the console. This is the official hands-on tutorial for Vim.
- [Concise Vim Practice Tips][coolshell] Great tutorial to get started!
- [Vim Galore][vimgalore] Frequently updated, a must-read for Vim.
- [Daily Vim][liuzhijun] 30 articles, the content is more complete!
- [A book for learning the Vim editor][learnvim] Another Learn Vim (English)
- [Open Vim][openvim] Interactive Vim Tutorials
- [QuickRef.ME/vim][quickref] Vim cheatsheet

## Cheatsheets

> [Vim Cheat Sheet][cheatsheets1]

> [A Great Vim Cheat Sheet][cheatsheets2]

> [![003][cheatsheets3]][cheatsheets3]

> [![004][cheatsheets4]][cheatsheets4]

> [![005][cheatsheets5]][cheatsheets5]

## Star History

[![Star History Chart][star-history-chart]][star-history]

**Thanks again for your interest! If you love, please share. Love life, love
VIM!**

[nvim]: https://github.com/dofy/nvim
[7th-vim]: https://github.com/dofy/7th-vim
[kepbod]: https://github.com/kepbod/ivim
[chxuan]: https://github.com/chxuan/vimplus
[spacevim]: https://github.com/SpaceVim/SpaceVim
[coolshell]: https://coolshell.cn/articles/5426.html
[vimgalore]: https://github.com/mhinz/vim-galore
[liuzhijun]: http://liuzhijun.iteye.com/category/270228
[learnvim]: https://github.com/iggredible/Learn-Vim
[openvim]: https://openvim.com/
[quickref]: https://quickref.me/vim
[cheatsheets1]: https://vim.rtorr.com/lang/zh_tw
[cheatsheets2]: https://vimsheet.com/
[cheatsheets3]: https://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
[cheatsheets4]: https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
[cheatsheets5]:
  https://raw.githubusercontent.com/Michaelangel007/vim_cheat_sheet/master/vim_cheat_sheet_for_programmers_print_150dpi.png
[star-history]: https://star-history.com/#dofy/learn-vim&Date
[star-history-chart]:
  https://api.star-history.com/svg?repos=dofy/learn-vim&type=Date


## 🌐 Web Resources & Interactive Index
- [TRAIN DRIFT](https://thequizzone.pages.dev/train-drift.html)
- [CATEGORY ARENA255](https://learnquester.pages.dev/category-arena255.html)
- [TURNFIGHT COM UAP](https://studyplayings.pages.dev/turnfight-com-uap.html)
- [INDEX2](https://thelearnquester.web.app/index2.html)
- [SAMURAI LEGACY](https://studyplayings.pages.dev/samurai-legacy.html)
- [CATEGORY BIKE](https://studyplayings.pages.dev/category-bike.html)
- [SQUAD ASSEMBLER](https://studyplayings.pages.dev/squad-assembler.html)
- [CATEGORY COLLECT565](https://studyplayings.pages.dev/category-collect565.html)
- [LITTLE HERO KNIGHT](https://studyplayings.web.app/little-hero-knight.html)
- [CATEGORY SPOT THE DIFFERENCE6](https://studyplayings.pages.dev/category-spot-the-difference6.html)
- [CATEGORY RPG GAMES](https://studyplayings.pages.dev/category-rpg-games.html)
- [ASMR MAKEOVER MAKEUP STUDIO](https://studyplayings.pages.dev/asmr-makeover-makeup-studio.html)
- [OFFICE BRAWL ROOM SMASH](https://studyplayings.web.app/office-brawl-room-smash.html)
- [2 PLAYER GAMES KIDS KITCHEN](https://studyplayings.pages.dev/2-player-games-kids-kitchen.html)
- [UNPUZZLE MASTER](https://studyplayings.web.app/unpuzzle-master.html)
- [CATEGORY DRESS UP 3](https://quizverses.github.io/category-dress-up-3.html)
- [WARFRONT](https://studyquests.github.io/warfront.html)
- [MURDER STONE AGE](https://studyplaying.github.io/murder-stone-age.html)
- [CATEGORY ANIMAL](https://studyquesthub.web.app/category-animal.html)
- [INDEX4](https://studyquesthub.web.app/index4.html)
- [JUMP BALL CLASSIC](https://studyplaying.github.io/jump-ball-classic.html)
- [CLOAK MASTER SHOOTER RUN](https://studyplaying.github.io/cloak-master-shooter-run.html)
- [PANDA MAHJONG CLASSIC](https://studyplayings.pages.dev/panda-mahjong-classic.html)
- [PUZZLE LINES AND KNOTS 1](https://studyplayings.pages.dev/puzzle-lines-and-knots-1.html)
- [GLADIATORS MERGE AND FIGHT](https://studyplayings.pages.dev/gladiators-merge-and-fight.html)
- [SWEETSU TILE PUZZLE](https://studyplayings.pages.dev/sweetsu-tile-puzzle.html)
- [CUTE CRAFT LAB](https://studyplaying.github.io/cute-craft-lab.html)
- [SORTSTORE](https://studyplaying.github.io/sortstore.html)
- [ZOMBIE ARENA 2 FURY ROAD](https://studyplaying.github.io/zombie-arena-2-fury-road.html)
- [CATEGORY EDUCATIONAL25](https://studyplayings.pages.dev/category-educational25.html)
- [MINI GRAND THEFT CITY](https://studyplayings.web.app/mini-grand-theft-city.html)
- [COLOR IT IN 3D](https://studyplaying.github.io/color-it-in-3d.html)
- [SORCERER MAHJONG MARVELS](https://studyquesthub.web.app/sorcerer-mahjong-marvels.html)
- [SOLAR SMASH](https://studyplayings.pages.dev/solar-smash.html)
- [CATEGORY PUZZLE 3](https://studyplayings.pages.dev/category-puzzle-3.html)
- [CATEGORY MATCH 3 2](https://studyplayings.pages.dev/category-match-3-2.html)
- [BALL AND GIRLFRIEND](https://studyplaying.github.io/ball-and-girlfriend.html)
- [ROYAL GARDEN MATCH 2](https://studyplayings.web.app/royal-garden-match-2.html)
- [MICKEY RUN ADVENTURE GAME](https://studyquesthub.web.app/mickey-run-adventure-game.html)
- [CATEGORY RACING DRIVING 2](https://studyplayings.pages.dev/category-racing-driving-2.html)
- [IDLE MONEY FACTORY](https://studyplaying.github.io/idle-money-factory.html)
- [CANDY CARVER](https://studyplaying.github.io/candy-carver.html)
- [SOLITAIRE MAHJONG FARM 2](https://studyplaying.github.io/solitaire-mahjong-farm-2.html)
- [ENCHANTED EASTER ADVENTURE](https://studyplayings.web.app/enchanted-easter-adventure.html)
- [CATEGORY MAHJONG](https://studyplaying.github.io/category-mahjong.html)
- [MINE FPS SHOOTER NOOB ARENA](https://studyplayings.web.app/mine-fps-shooter-noob-arena.html)
- [SPELUNKING](https://theskillquest.pages.dev/spelunking.html)
- [CITYIDLE](https://thequizzone.pages.dev/cityidle.html)
- [CATEGORY QUIZ40](https://studyplayings.pages.dev/category-quiz40.html)
- [PIXEL BLAST](https://studyplayings.web.app/pixel-blast.html)
- [CATEGORY STICKMAN 2](https://studyquesthub.web.app/category-stickman-2.html)
- [ROYAL JEWELS MATCH](https://studyquesthub.web.app/royal-jewels-match.html)
- [KALULU TANHULU ASMR MUKBANG](https://themindplay.pages.dev/kalulu-tanhulu-asmr-mukbang.html)
- [CATEGORY QUIZ](https://studyplaying.github.io/category-quiz.html)
- [CATEGORY MOUSE1 707](https://themindplaying.web.app/category-mouse1-707.html)
- [FASHIONISTA CHRISTMAS EVE PARTY](https://themindplaying.web.app/fashionista-christmas-eve-party.html)
- [HUMAN EVOLUTION RUN](https://themindplay.pages.dev/human-evolution-run.html)
- [AYLA WORLD PRINCESS LIFE](https://studyplaying.github.io/ayla-world-princess-life.html)
- [MR LONG LEGS](https://studyplaying.github.io/mr-long-legs.html)
- [CATEGORY ALIEN34](https://themindplaying.web.app/category-alien34.html)
- [GEOMETRY DASH JUMP](https://themindplaying.web.app/geometry-dash-jump.html)
- [QUIZ 10 SECONDS MATH](https://studyplayings.web.app/quiz-10-seconds-math.html)
- [FAMILY TREE EMOJI](https://studyquesthub.web.app/family-tree-emoji.html)
- [ASSOCIATION CONNECT WORD](https://themindplaying.web.app/association-connect-word.html)
- [MARBLE SORT](https://studyplaying.github.io/marble-sort.html)
- [GIANT CROWD IO HOUSE CAPTURE](https://themindplaying.web.app/giant-crowd-io-house-capture.html)
- [RED STICKMAN VS CRAFTMANS](https://studyplaying.github.io/red-stickman-vs-craftmans.html)
- [MY FARM EMPIRE](https://studyplaying.github.io/my-farm-empire.html)
- [DOODLE DINO RUN](https://studyplayings.web.app/doodle-dino-run.html)
- [WORDS FROM WORDS](https://themindplay.pages.dev/words-from-words.html)
- [MONEY CHASER CITY PARKOUR GAME](https://studyplaying.github.io/money-chaser-city-parkour-game.html)
- [HEXA PUZZLE](https://themindplay.pages.dev/hexa-puzzle.html)
- [SPIN SPIN](https://studyplayings.pages.dev/spin-spin.html)
- [BUBBLE SHOOTER GO](https://studyplayings.web.app/bubble-shooter-go.html)
- [COLOR DODGE](https://themindplay.pages.dev/color-dodge.html)
- [WORLDCRAFT 3](https://studyplaying.github.io/worldcraft-3.html)
- [ISOMETRIC ESCAPE](https://themindplay.pages.dev/isometric-escape.html)
- [RACCOON RETAIL](https://themindplay.pages.dev/raccoon-retail.html)
- [ARMY FIGHT 3D](https://themindskillplayplay.pages.dev/army-fight-3d.html)
- [TOWER DEFENDERS](https://studyplayings.pages.dev/tower-defenders.html)
- [CATEGORY TOP DOWN251](https://themindskillplayplay.pages.dev/category-top-down251.html)
- [CUPHEAD](https://studyplaying.github.io/cuphead.html)
- [CATEGORY CASUAL 10](https://themindskillplayplay.pages.dev/category-casual-10.html)
- [NAUTILUS SPACESHIP ESCAPE](https://studyplaying.github.io/nautilus-spaceship-escape.html)
- [NOOB JAILBREAK 2](https://studyplayings.web.app/noob-jailbreak-2.html)
- [SORTING CANDY FACTORY](https://skillplay.github.io/sorting-candy-factory.html)
- [INDEX10](https://studyquesthub.web.app/index10.html)
- [CATEGORY BATTLE CATEGORY](https://themindplays.pages.dev/category-battle-category.html)
- [CATEGORY QUIZ](https://themindskillplayplay.pages.dev/category-quiz.html)
- [INDEX19](https://iskillplay.web.app/index19.html)
- [HIDDEN OBJECT ROOMS EXPLORATION](https://studyplaying.github.io/hidden-object-rooms-exploration.html)
- [SOLITAIRE SUMMER KLONDIKE](https://themindplay.pages.dev/solitaire-summer-klondike.html)
- [MINE SLASH](https://skillplay.github.io/mine-slash.html)
- [CATEGORY CASUAL 2](https://studyplayings.pages.dev/category-casual-2.html)
- [CATEGORY THINKY 2](https://studyquesthub.web.app/category-thinky-2.html)
- [STICKMAN CHOOSING ACTIONS](https://themindplay.pages.dev/stickman-choosing-actions.html)
- [MERMAIDCORE AESTHETICS](https://studyquesthub.web.app/mermaidcore-aesthetics.html)
- [TAP IT AWAY 3D](https://studyquesthub.web.app/tap-it-away-3d.html)
- [MAZE ESCAPE TOILET RUSH](https://themindplay.pages.dev/maze-escape-toilet-rush.html)
- [DUMMIES WORLD CUP](https://studyplayings.pages.dev/dummies-world-cup.html)
- [CATEGORY POOL 2](https://studyplayings.pages.dev/category-pool-2.html)
- [BURGER EMPIRE](https://studyquesthub.web.app/burger-empire.html)
- [DOT BY DOT](https://studyplayings.pages.dev/dot-by-dot.html)
- [BRAINROT MOB CLASH 3D](https://skillplay.github.io/brainrot-mob-clash-3d.html)
- [CATEGORY DIRT BIKE18](https://themindplays.pages.dev/category-dirt-bike18.html)
- [TAP BLOCK PUZZLE SMASH GAME](https://studyplaying.github.io/tap-block-puzzle-smash-game.html)
- [WATER SORT COLLECTIONS](https://studyplaying.github.io/water-sort-collections.html)
- [SNOW BALL RACING MUTLIPLAYER](https://themindplaying.web.app/snow-ball-racing-mutliplayer.html)
- [CHAIN CUBE 2048 3D MERGE GAME](https://themindplays.pages.dev/chain-cube-2048-3d-merge-game.html)
- [CATEGORY BASKETBALL 3](https://themindplays.pages.dev/category-basketball-3.html)
- [BALLOON POP FRENZY](https://studyplayings.web.app/balloon-pop-frenzy.html)
- [NG FLOW LINES](https://skillplay.github.io/ng-flow-lines.html)
- [INDEX24](https://themindskillplayplay.pages.dev/index24.html)
- [SPIDER SOLITAIRE 2 SUITS](https://studyquesthub.web.app/spider-solitaire-2-suits.html)
- [INDEX17](https://studyplayings.pages.dev/index17.html)
- [PAWS OFF MY CLUES](https://studyplaying.github.io/paws-off-my-clues.html)
- [TRIAL XTREME](https://skillplay.github.io/trial-xtreme.html)
- [CATEGORY SHOOTER 3](https://themindplays.pages.dev/category-shooter-3.html)
- [MINICRAFT WINTERBLOCK](https://themindplay.pages.dev/minicraft-winterblock.html)
- [GUNFU STICKMAN 2](https://iskillquest.pages.dev/gunfu-stickman-2.html)
- [DIGITAL CIRCUS RUN](https://studyplayings.pages.dev/digital-circus-run.html)
- [KIDS SUPERMARKET](https://studyquesthub.web.app/kids-supermarket.html)
- [ENERGY SUPERMAN 3D](https://theskillquest.pages.dev/energy-superman-3d.html)
- [CATEGORY WATER39](https://themindplays.pages.dev/category-water39.html)
- [GIRLS FUN NAIL SALON](https://studyplayings.web.app/girls-fun-nail-salon.html)
- [CATEGORY PUZZLE 2](https://themindplay.github.io/category-puzzle-2.html)
- [CATEGORY LOGIC538](https://themindplay.pages.dev/category-logic538.html)
- [PIRATE PARADISE](https://studyquesthub.web.app/pirate-paradise.html)
- [OIL DIGGING](https://studyplayings.pages.dev/oil-digging.html)
- [MATCH 3 DREAM ROOM](https://studyplaying.github.io/match-3-dream-room.html)
