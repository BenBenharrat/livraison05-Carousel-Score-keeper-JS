# Carousel JS & Score Keeper

This is a project initially done for YesWeWeb and is just an exercice.


## Project Goals

The goals of this project are as follows :

+ Make an image carousel. 
    + Image is ordered as a list ("li").
    + Image switches with each click on the button.
    + Only with Vanilla JavaScript.
    + **Bonus** : With real images (not a plain color block).
    + Display the number of items (3 dots => 3 items) with focus on current item
    + Dark mode
+ Make a score keeper
    + 2 distinct counters (Player 1 & 2)
    + 3 buttons (Player 1 | Player 2 | reset)
    + Each click increment the corresponding counter
    + If maximum score reached => Green score & lock
    + Maximum score set by input
    + Vanilla JavaScript
    + **Bonus** : Add style to the page
    + Dark Mode.

## Phase 1 : Design

### Carousel 

First we add the `ul` with all its content that includes the `li` with the `img` inside. The `active` class is added to the first `li`, it will be the first image to show on the website.
Finally we add the next button to prepare the 'Next' feature. 

In the CSS we declare a `display: none` to hide all the `li` with `img` inside and we delcare a rule for the `.active` class with a `display: block`. 

First, we need to implement the 'Next picture' feature. To do that we need to first *target* all the `li` present in the `ul` so that we know all the available elements to switch to. Then we need to check if the element is either hidden or diplayed. Since we've already hidden every `li` in the `ul`, all we need to *check* is which element is displayed, *remove* it and *display* the element next to it (or the first one if there is no next element). 

### Score Keeper


