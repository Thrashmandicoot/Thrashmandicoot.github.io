---
layout: post
title: Git vs Github
tags: git github version-control
categories: musings
---
<div class="toc"></div>

#Git

In the world of school supplies, Git acts like your notebook(repository). Each page(file) of this notebook would contain writing(code).

##Making Changes

To this notebook you can add new pages, remove them, and modify them (git add file). You can modify as much as you want, but before those changes are official, you must commit specifically what you changed. If you added a page(file) for instance you may write your commit message like this (git commit) ex: 'Add page to notebook'.

##Tracking History

Once you've commited a few changes to your notebook, you can peruse every change you've ever made (as long as it's commited). Which makes it quite a bit better than a notebook because it tracks individual changes to particular pages you've been working on. This means if you made a mistake when you erased some notes, never fear, as long as it's commited, you can get it back and reset (git reset) that particular file back. You can also jump back many commits if you went down a path that didn't quite work out.

##Permanence

While you may have a lot of changes in your personal notebook, the problem exists in the fact that you could lose your notebook. It's also not very useful, when working with others, if those people can't access your notebook without you there. Enter Github.

#Github

Github is an online storage for your programs. Github makes an exact copy of your local notebook(repository), and stores those changes online so that you, and others, can pull those copies and work on them when needed. This makes collaborating on projects easy. Github typically acts as a 'master' copy of your program.

#Takeaways

Remember when working with Git, it's simply allowing you to track program changes on your local machine and commit those changes when you're ready. You can go through the change history of your files and push your changes online when you're ready to store them. This concludes my post on Git vs Github.
