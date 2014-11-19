Still Yet Another Snake Game
============================

Inspired by [Mary live-codes a JavaScript game from scratch](http://vimeo.com/105955605), I decided to spend my sick leave making another snake game. (See previous at [worm.kakspistenolla.com](http://worm.kakspistenolla.com).) I did spent quite a bit more than 30 minutes, but in my defence, I'm pretty sure Mary had a practise run before her public live coding session.

A version of the game can be found at [snake.kakspistenolla.com](http://snake.kakspistenolla.com). It's probably the latest version, but that isn't guaranteed.

Browser Support
---------------

Test coverage is only partial. Modern browsers supported.

[![browser support](https://ci.testling.com/nikcorg/snake.png)
](https://ci.testling.com/nikcorg/snake)

Playing the game
----------------

### Controls

The game starts when the page loads. Control the snake with your arrow keys. That's it.

The game speeds up over time, slowly but surely.

### Game Over

The game will end when any of the following is true

- you hit a wall
- you hit yourself
- you hit a playing area boundary

### The Pieces

- the pink longish (YMMV) thing with a red tip is your snake
- a dark orange square is an edible square worth 1 points
- a flashing square is a super square, worth anything between 50 and 300 points
- a dark green square is poisonous. It won't kill you (as long as you have a tail), but your tail will drop and turn into a wall, and your score will be reset to 0
- a black square is a wall

Each tick, there is a 0.05 % chance of a piece becoming poisoned, and a 0.02 % chance of a piece becoming a super square. A poisoned square will remain poisoned, a super square will return to normal after 15-45 seconds. A super square can also become poisoned at any time.

Missing in Action
-----------------

There is no high score list, not even a highest single score. It might be added tomorrow, or there might never be one. But it could go either way, depending on how carried away I will become.

Building
--------

Install [`browserify`](https://www.npmjs.org/package/browserify) and run `npm run build`. This will create the `static/bundle.js`.

### Preview

Install [`beefy`](https://www.npmjs.org/package/beefy) and run `npm run preview`. Open the address printed to your console in your browser. Prepend with `DEBUG=<namespace>` to enable debug output.
