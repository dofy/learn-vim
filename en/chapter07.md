# Chapter 7: Macros in Vim

A macro records a sequence of Normal-mode actions into a register and replays
it as needed. It fits tasks where every line needs the same steps but a Visual
Block edit is not convenient.

We will repeat the array exercise from the [previous chapter](chapter06.md),
this time with a macro.

> Search for `/^Mercury$`, press `qa` to record into register `a`, then perform
> `I' Esc A ', Esc j q`. Spaces only group the steps. Use `@@` on the next
> line, then `3@a` on the remaining three lines.

```javascript
var myArray = [
Mercury
Venus
Earth
Mars
Jupiter
];
```

Each item should now look like `'Mercury',`, with the cursor on the `];` line.

The command breaks down like this:

- `q` starts recording and `a` chooses the register; a-z are commonly used;
- `I' Esc A ', Esc j` adds characters at both ends and moves down one line;
- the second `q` stops recording;
- `@a` runs the macro, `@@` repeats the last-used macro, and a count repeats it.

## Designing reliable macros

- Perform one line manually first, verify it, undo, and then record.
- End the macro by moving to the next target so repetitions line up.
- Prefer relative actions such as `0`, `$`, `f<X>`, and text objects over fixed
  columns.
- Test once with `@a` before running `<N>@a`.
- Do not use an arbitrarily large count: the macro may edit following content.

Use `:reg a` to inspect the recorded keys. A macro is simply text stored in a
register, which is why recording begins by naming one.

> Run `:reg a`, find register `a`, and see whether you can recognize the
> recorded actions. To restart, press `u` until the original text is restored,
> then record again from the first item.

---

The fundamentals are now in place. The next chapters cover text objects,
registers, marks and jumps, and multi-file operations.

The [next chapter](chapter08.md) introduces text objects.
