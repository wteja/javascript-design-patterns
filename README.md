# JavaScript Design Patterns

This repository contains the design patterns and implemented by JavaScript code.

## Design Patterns

Design patterns are the patterns of code or the solutions that have been used and tested that they can solve the common problem in software development.

### Keys to take away:

- Have been called as "Cataloged Solutions"
- Can be reused in many difference situations.
- Well documented.
- They are language for collaboration.

### Benefits of learning design patterns

- Write better code.
- Becoming a better programmer.
- Quickly solve problem with patterns that already used/tested several times.

### Design Patterns Essentials

- Pattern Name
- The Problem
- The Solution
- Consequences

### Design Patterns Categories

- Creational : Deal with object creattion and initialization.
- Structural : Deal with the ways objects can compose or put together.
- Behavioral : Define how one object react with one another.

## Anti-Patterns

They are bad solutions that cause the problems, and when we found it we can call "Bad code smell", and we need to fix it and make the code less stinky.

### Modify the prototype on an instance

```javascript
animal.__proto__.species = {};
```

### Syncing execution after initialization.

Since JavaScript only have single thread, synchronize operation might cause execution blocking.

```javascript
function listen() {
  fs.readFileSync("c:\\path\\to\\some\\file.json");
}
```

### Callback chaos

Use several nested callbacks, that can make confusion and difficult to debug and maintain. Imagine there are 100+ lines of code on each callback. That mess like the hell.

```javascript
readFile(readErr, () => {
    parseFile(parseErr, () => {
        writeFile(writeErr, () => {
            ...
        })
    });
})
```
