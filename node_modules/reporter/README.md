# node-reporter

The node-reporter package is designed to assist you with responding to events that occur within your application, and providing some uniform process handling.

<a href="http://travis-ci.org/#!/DamonOehlman/node-reporter"><img src="https://secure.travis-ci.org/DamonOehlman/node-reporter.png" alt="Build Status"></a>

Consider that you have a particular object that generates events, and those events might generate particular command-line output (as one example).  While it is simple enough to wire up handlers to generate the appropriate output for a handler for the one object, if you have multiple objects that generate similar events then this becomes a tedious task.  This is where reporter comes in.

## Example Usage

The following shows a simple example of using the reporter.  In this example, we create a simple EventEmitter that will emit events, and we use this to emit a `click` event.  

Prior to this, though we setup a reporter and have it watch the target object and add a rule to handle the click case.

```js
var events = require('events'),
    reporter = require('reporter'),
    target = new events.EventEmitter();

// make the reporter watch the target
reporter.watch(target);

// add some rules to the reporter to handle click events
reporter.addRules({
    click: function() {
        console.log('A click happened');
    }
});

// tell the target to emit a click event
target.emit('click');
```

## Installation

```
npm install reporter
```