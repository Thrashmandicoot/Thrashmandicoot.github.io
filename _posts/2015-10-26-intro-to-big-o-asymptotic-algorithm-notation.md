---
layout: post
title: Intro to Big-O Asymptotic Algorithm Notation
tags: algorithms big-o big-theta big-omega asymptotic-notation
categories: algorithms
---
<div class="toc"></div>

# Introduction

Any developer who has fundamental experience programming can design an algorithm
to accomplish a task, but how do we know if it was the best design call? Enter
Asymptotic Notation. Big-O, Big-Omega, and Big-Theta are used in asymptotic
notation to understand the speed and efficiency of any given algorithm based
on that algorithms input size. Knowing the best and worst case scenarios 
for your design decisions is a valuable tool for any aspiring developer, so
we'll cover these concepts briefly.

# Big-O

Big-O is the 'upper bound' of algorithm run-time. Upper bound being the most
likely max time of an alorithm running. For example, say we wanted to to print
each item in an array of numbers like [1,2,3,4,5]. The way we would notate
the worst case would be Big-O(5) because we would be traversing 5 items in that
array, but how do we apply this to any array? Well, we know that any array will
contain up to 'N' elements, which would be Big-O(N), since N is consistent with
the size of the array, N would progress linearly in complexity, essentially
getting more difficult to do the more items that are in the array. It's easy
to print 1 item, but what about printing an array with 1 billion items?

# Big-Omega

Big-Omega is the 'lower bound' of algorithmic run-time, which also means that
it's also not used as much since it only represents best-case scenarios. For
example, in the example above, we use an array, the best case in an array is
that if the array size is 1, which means Big-Omega(1) would be the best case
for a defined array with 1 element. Knowing best-case isn't very effective
unless both the best and worst cases line-up or are the same, which brings
us to Big-Theta.

# Big-Theta

Big-Theta is known as a 'tight-bound' for algorithmic run-time, and is only
used when both the Big-O and Big-Omega are the same. A variable, for instance,
would be Big-Theta(1), because accessing it has at best 1 possibility and at
worst 1 possibility, since variables will only be assigned to be one thing.

# Conclusion

This concludes our brief introduction into asymptotic notation, and I hope you'll
join me in the future when we dig into specific algorithm designs and break them
down.
