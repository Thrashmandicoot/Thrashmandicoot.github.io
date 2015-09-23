---
layout: post
title: What is an Algorithm
tags: algorithms linear-search ruby
categories: algorithms
---
<div class="toc"></div>

#What's an Algorithm?

An algorithm is simply a set of steps a computer takes to accomplish a particular task. An example of a human action that could resemble an algorithm could be walking.

##Human Example

Walking seems pretty simple to us, but to a computer, it would be a pretty complex action. Let us think of the steps involved.

1. Think of location you want to walk to (maybe subconsciously ;) )
2. Fall forward and catch yourself (walk) to your destination...
   - If I encounter a wall, navigate around it.
   - If there's dangerous stuff on the ground, avoid it.
   - If I get distracted by a friend, resume walking after convo
   - etc.
3. Reach destination and halt program

As you can see, there could be many steps in even the most mundane of human processes. To a computer, an algorithm is simply the set of steps you provide it to accomplish that task.

##Computer Example

Well, what about a real life computer example? Ok. Let's do it. Suppose we have a list of numbers and we want to find the correct number. We need to do a few things...

- First, we must declare a function
  - Input: A number we wish to find and a list of numbers
- Our function should go through each number until we find the correct number.
  - Output: "Found!" If number is found. "Not Found!" if it is not.

Let's code it out.

~~~ruby
def find_number_in_list(number, number_list)
  number_list.each do | list_number |
    return "Found!" if list_number == number
  end
  return "Not Found!"
end
~~~

I've decided for ruby in this example, as it is very readable. As you can see above. We have a method(function) called find_number_in_list, this takes in two arguments: number, and number_list.

This method then goes through each list_number inside number_list and returns the statement "Found!" if the list_number is equal to the number we wish to find.

If the number is not found, we simply return "Not Found!"

##Linear Search

The above is an example of linear search. We go through every element in a list until we find the correct one. This process is relatively easy to fulfill with smaller lists, but could get rather costly when using much much larger lists. It does demonstrate though, a series of steps to accomplish a task for a computer, which is what algorithms are all about.

#Conclusion
The takeway is that algorithms are a set of steps a program takes in order to accomplish a task. I'll be writing about more about algorithms, specific algorithms, and how to find out how to use the best algorithm for the job at hand (asymptotic analysis) in future posts. Thanks for reading!
