js-survival guide
===============================

Towards the beginning of 2015 I read a great article by Allen Pike - [A JS framework on every table](http://www.allenpike.com/2015/javascript-framework-fatigue/). To quote my favourite section:

> For example, the most recent TodoMVC pull request, as of this writing, wants to add Riot.js 2.0. What is Riot.js 2.0, you ask? Apparently, it’s the second version of something called Riot.js, an app framework that’s like React.js, but better in some ways that are definitely important. “But wait,” you may ask, “didn’t React like just come out and isn’t even 1.0 yet? How can a thing based on it be 2.0 already?!” The answer, my friend, is JavaScript.

Brilliant stuff, yet sadly quite true!

I love JavaScript. I can remember the excitement of first learning Backbone and then the "aaah" moment when Angular, via it's magic dirty checking, made life so much simpler.

Then I had a child. I still love JavaScript, but I'm no longer quite so keen on the rate of change - a family to support increases the anxiety from "not keeping up".

For the remainder of 2015 I had Allen's article in the back of my mind. I was working for a client who's JavaScript application (we'll call it a semi-SPA) was only a couple of years old at most, implemented with Knockout and was already legacy. Yet moving to a new shiny framework would be painful in the extreme and viable from a business point-of-view, i.e. too expensive without first a significant ROI on the first version.

Most line-of-business applications have a core domain with code that is unique to that problem space. The rest is framework and plumbing boilerplate.

This repository is a proof-of-concept to see if a core domain can be extracted from frameworks. A simple rule - no framework code allowed in domain files!

Side effects should be a domain that is testable in isolation and portable between different frameworks - with some pain no doubt - but that's all part of the fun!