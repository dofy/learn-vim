# Chapter 6: Block Operations

We often come across a situation where we have a multi-line text somewhere and
we want to copy it into our code to initialize an array of array. Most of the
time we do this:

- Write the array declaration;
- copy the contents into parentheses (roughly the length of the text below)
- Then add `'` at the beginning of the line, `',` at the end of the line, and
  repeat until the last line (imagine 50 lines of text).

> With Vim, you don't have to do this, just press `17gg` and follow the
> instructions for the selected line.

```javascript
const myArray = [
Ctrl-v to enter block operation, $ to the end of the line, j to the next line (do it!).
Press j to the next line
There are many lines below, so let's jump a few more lines with 4j
https://www.yahaha.net
https://www.yahaha.net
Look at the line number later and jump! Now press A to insert, then enter <single quote><comma><Esc> to complete the first step.
// Oops... Jump too much, no problem, press k to go back to the previous line
];
```

> Now that you've completed the first step, you still need to add the leading
> `'`, press `17gg` to go back to that line and do it again, but this time
> there are three things to change:
>
> 1. press `0` instead of `$` on the first line, because this time you want
>    to insert at the beginning of the line;
> 1. when pressing `A` at the end of the last line, press `I` instead, because
>    in block operations `A` inserts after the character and `I` inserts before
>    the character;
> 1. press `<single quote><Esc>` at the end.
>
> Finally, to finish up, `22gg$x` deletes `,` at the end of the last line, and
> then `17gg7==` indents the code a bit.
>
> Done!

_Note: Selecting the beginning and end of a line can also be done after
selecting what to work with, i.e. `Ctrl-v jjj$A',<Esc>`_

Next we talk about [macros in Vim](chapter07.md).
