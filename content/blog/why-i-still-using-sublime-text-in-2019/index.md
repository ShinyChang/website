---
date: 2019-02-13T00:00:00.000Z
title: Why I still using Sublime Text in 2019
description: I have been used Sublime Text in MacOS and Windows for over 6 years, which still is a fantastic editor even in 2019. In the past years, I tried lots of famous IDEs (Atom, VSCode, and WebStorm), none of suitable with me. I will introduce some advanced skills of Sublime Text and why I choose it in this post.
---

I have been used [Sublime Text](https://www.sublimetext.com/) in MacOS and Windows for over 6 years, which still is a fantastic editor even in 2019. In the past years, I tried lots of famous IDEs ([Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), and [WebStorm](https://www.jetbrains.com/webstorm/)), none of suitable with me. I will introduce some advanced skills of Sublime Text and why I choose it in this post.

## Pro Tips

### Goto Definition… (F12)

Sublime Text’s Goto Definition is faster than other IDEs, which does not only jump to the same file but also jump to other files.

![Put your cursor on the target and press **F12** will go to definition](./images/1rVVTry_sm8imCUiS7sD0mA.gif)_Put your cursor on the target and press **F12** will go to definition_

### Goto Symbol in Project (Cmd + Shift + R)

This is useful when you remember the Symbol (class/function/property) but not actually know where is it. First, you have to “Cmd + Shift + R”, second you have to type keywords.

![Press “Cmd + Shift + R” and the type keywords to search](./images/1a2ojgMSDqJEbFjpOK6DJlw.gif)_Press “Cmd + Shift + R” and the type keywords to search_

If you are filtering the method/property it will have the second filter for you jumping between files. (just like “Cmd + P” with scope)

![](./images/1hzq13ywHvSYWSpXXI0PyUw.gif)

### Project

Most of the people do not use **project** feature when using Sublime Text. This is very important if you have to context switch between projects. You can create a project by drag-drop folder or “Project &gt; Add folder to Project”, then “Project &gt; Save Project As…”.

![Add folder to project](./images/1F0JytL1HhpVGqH9SFd4I6g.gif)_Add folder to project_

You can press “Cmd + Ctrl + P” to switch project in seconds.

![Switch project by press “Cmd + Ctrl + P” and type keywords](./images/1F1eLpPPzlwrHzVJ-s0o9Ng.gif)_Switch project by press “Cmd + Ctrl + P” and type keywords_

### Paste from history (Cmd + K + V)

Sublime will remember your clipboard history, this is very useful if you are doing some heavy copy-paste task.

![Press “Cmd + K + V” can preview the clipboard from history](./images/18IkMeZLRYbKI2DapTTg1lg.png)_Press “Cmd + K + V” can preview the clipboard from history_

### Paste and indent (Cmd + Shift + V)

Remember this can save time because you don’t spend the time to indent after pasting. You can keep focusing on what you want to do.

![Press “Cmd + Shift + V” can paste with indent](./images/1fdNl-jOZuTyRfcESbORshQ.gif)_Press “Cmd + Shift + V” can paste with indent_

### Rember your syntax

Sometimes you may have some custom file extension (e.g. _jsx)_. Or you’d like to enhance the syntax (e.g. from* JavaScript* into _JavaScript (babel)_). The current syntax will display at the right bottom of the status bar.

![JavaScript (Babel) is the current syntax](./images/1Sq7H1S4sSYDO2wTVa4mblg.png)_JavaScript (Babel) is the current syntax_

You can press it and choose “Open all with current extension as…” and then pick what you want. After that, sublime will set the syntax what you pick when you open the same extension of the file next time.

![](./images/17rRuL3Yw65O0qtm-zMvCnA.png)

### Soft undo (Cmd + U)

Undo required the change of the file, soft undo does not require. Sublime will remember your cursor change in the background. Sometimes you may need press F12 to see the detail of function and then back to original position.

![](./images/10WbRHRbhfVUFF36BPG72_g.gif)

### Select all matched of current selection (Cmd + Ctrl + G)

Press “Cmd + D” can select next matched of the current selection. What if you have to select all matched? Maybe you will press “Cmd + D” until all selected. It’s okay lah because there was no big difference. It just like paste with indent, can save you time.

![](./images/1NBui4E8rQUXHwKyVbg3uKQ.gif)

What if some of the match I don’t want to change? No problem! You can press “Cmd + K + D” to skip current selection and select next match.

![](./images/1YZaFSDM18lS-tEEmPTxaOg.gif)

### Split into lines (Cmd + Shift + L)

It’s super useful for string manipulation. First, you have to select multiple lines. Second, press “Cmd + Shift + L” to change the cursor from 1 to many.

![](./images/1YADB8OlyXYMnR1Y_T_pS5g.gif)

### Don’t Save (Cmd + D)

“Enter” will save the file, “Esc” will cancel the action, “Cmd + D” will close without saving.

![](./images/1-XE0FutphyVCvSFYuWLKqw.png)

### Save all (Ctrl + Alt + Shift + S)

I have to say this is the one of hardest shortcut in sublime. It’s useful after you replaced strings across files.

![](./images/1x0FEpQ8CIm8Bhzb1avzY1Q.gif)

If it’s too hard for you, please remember you can choose from the toolbar

![](./images/1qGIZqndsvqtnIUWHzve9dw.png)

Above pro tips all are native support of sublime. I’m not listing down all the tips in this post because there are too many. But you can ask any questions in this post and I will reply it. As same as other IDEs, sublime also can install extensions (package) to enhance it. This will be another part.

## Why I choose Sublime Text?

First is because of **speed**, open sublime usually immediately. Other IDEs usually took a few seconds. Maybe you will think this is unfair, IDE does lots of things in the background causing the boot time increased. But, Sublime can do almost all the things what frontend engineer needs. So I think this is fair.

Second is because of **shortcut**, I already master in the sublime. Switching to other IDEs (e.g. VSCode) is a big challenge. Of course, there has some extension for key-mapping, but still cannot 100% cover.

Sublime is perfect? No, it doesn’t! I will choose IDE if I have to code with some compile required language (e.g. flutter). Also, sublime does not natively support console and git.
