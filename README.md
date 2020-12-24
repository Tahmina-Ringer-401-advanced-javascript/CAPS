# CAPS

by Tahmina Ringer

## Links/Resources

- [GitHub PR](https://github.com/Tahmina-Ringer-401-advanced-javascript/CAPS/commit/ec01fc8c580741f006c9830239be3725a7663833)

1. First building phase of the CAPS system, writen in Node.js. This first build is to set up a system of events and handlers.
2. Second building phase of the CAPS system, writed in Node.js. We refactored the code to a Socket.io event listener network. The core fuctionality of the app remained the same.
3. Third building phase of the CAPS system, writen in node.js. I refactored the code to include a order queue that vendors can connect to and send and receive information related to events.

`npm i` faker, dotenv, jest, socket.io, socket.io.client.

## Setup

- **.env Requirements**
PORT=3000

## Running the App

- Open three terminal windows and run in this order.
  1. In the first run `node caps-brain.js`
  2. In the second run `node acme-widgets.js`
  3. In the third run `node flowers.js`
  4. In the forth run `node driver.js`

### Test

- run command `npm test`

## UML

- created with AWW - A Web Whiteboard
- Day 1 [UML1](UML.png)
- Day 2 [UML2](UML2.png)
- Day 3 [UML3](UML3.png)
