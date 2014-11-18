Still yet another snake game
============================

Inspired by [Mary live-codes a JavaScript game from scratch](http://vimeo.com/105955605), I decided to spend my sick leave making another snake game. (See previous at [worm.kakspistenolla.com](http://worm.kakspistenolla.com).) I did spent quite a bit more than 30 minutes, but in my defense, I'm pretty sure Mary had a practise run before her public live coding session.

Playing the game
----------------

A version of the game can be found at [snake.kakspistenolla.com](http://snake.kakspistenolla.com).

The quickest way to test the game (locally) is using [`beefy`](http://didact.us/beefy/). Run `beefy main.js:bundle.js` and point your browser to the address echoed to your console.

### Controls

You control the snake with your arrow keys

### The pieces

- a green square is an edible square worth 1 points
- a red square is a poisoned square. It won't kill you, but your tail will be dropped, resetting your score to 0, and it will create a wall
- a flashing square is a super square, worth anything between 50 and 300 points

Each tick, there is a 0.05% chance of a piece becoming poisoned, and a 0.02% chance of a piece becoming a super square. A poisoned square will remain poisoned, a super square will return to normal after 15-45 seconds. A super square can also become poisoned at any time.

### Game over

The game will end if

- you hit yourself
- you hit the playing area boundaries
- you hit a wall created by eating a poisoned square
