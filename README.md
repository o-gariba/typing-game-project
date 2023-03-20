# Typing game

*stack:* react (and nodeJs)

*general idea:* User is a space ship, rocks are comming with different words attached, velocity and angles. 

As soon as we start typing, the app tries to match the letters I'm typing with words on screen (visually indicator for it). If we have a complete match, it means that the rock can be destroyed, vanishing from screen.

## *main functionalities*

- constant mapper from letters I type in my keyboard
- a match function to determine which rocks I'm trying to destroy
- a random rock generator, with words on it
- hit function to determine when I lose the game
- pause function

## *steps of development*

1. a way to know what Im typing
2. a random word generator (api)
3. a way to match what Im typing with a pre selected word
4. a way to match what Im typing with different words
5. introduce visual effects, like a ship with a numbe of lives and the rocks
6. find a way to determine when i got hit by a rock
7. measure the points Im making and wps score in certain period of time