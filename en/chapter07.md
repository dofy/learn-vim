# Chapter 7: Vim Macros

Macros are a more advanced topic in Vim (and any other editor). If you've
mastered the previous chapters, you're already a Vim master. So, let's take it
to the next level.

Do you remember the example of converting text to an array in the
[previous chapter](chapter06.md)? We'll do the same thing, but this time with
macros.

> `16gg` Jump to the start line where you're ready to start processing, follow
> the instructions, see the effect first and then explain.

```javascript
var myArray = [
Press qa to start recording the macro, and then press I<single quote><Esc>A<single quote><comma><Esc>jq7@a
Me too
Me too
Me too
Me too
Me too
Me too
Me too
];
```

OMG! What happened, did you get a cold sweat? The results of the previous two
block operations were completed in an instant, and finally a little finishing
work, remove the comma at the end of the last line, indent the collective, done!

Next, let's explain the operation just now:

- `q` is to start recording the macro, `a` is to give the macro recording
  process a storage location, which can be 0-9 or a-z;
- Then `I<single quote><Esc>A<single quote><comma><Esc>j` is the operation
  process of the entire macro you recorded this time, which means inserting a
  single quote at the beginning of the line, inserting a single quote and a
  comma at the end of the line, and jumping to the next line;
- Pressing `q` next ends this macro recording;
- `@` is to call up the macro, `a` is the name (storage location) of the macro
  to be called up, and the `7` in front of it should be clear, that is, to
  execute 7 times.

_Tips: `@@` calls up the last macro executed again._

---

All the frequently used and not so frequently used in these seven chapters
should have been covered. If you encounter any problems in Vim, or if you miss
any regular operations in the tutorial, please feel free to raise them in
[issues](../../issues), and I will do my best to answer them or improve them in
the tutorial.

**Thanks again for your interest! If you love, please share. Love life, love
VIM!**
