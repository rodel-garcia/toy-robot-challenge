# Toy Robot Challenge

## Table of contents:

- [Description](./README.md#description)
  - [Constraints](./README.md#constraints)
  - [Example Input and Output](./README.md#example-input-and-output)
  - [Deliverables](./README.md#deliverables)
- [Setup](./README.md#setup)
- [NPM Commands](./README.md#npm-commands)

## Description

- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

### Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- `PLACE` will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

  - The origin (0,0) can be considered to be the SOUTH WEST most corner.
  - It is required that the first command to the robot is a `PLACE` command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command.
  - The application should discard all commands in the sequence until a valid `PLACE` command has been executed.

- `MOVE` will move the toy robot one unit forward in the direction it is currently facing.
- `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- `REPORT` will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.
- It is not required to provide any graphical output showing the movement of the toy robot.
- The application should handle error states appropriately and be robust to user input.

### Constraints

- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.

### Example Input and Output:

#### Example A

    ```
    PLACE 0,0,NORTH
    MOVE
    REPORT
    OUTPUT: 0,1,NORTH
    ```

#### Example B

    ```
    PLACE 0,0,NORTH
    LEFT
    REPORT
    OUTPUT: 0,0,WEST
    ```

#### Example C

    ```
    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT
    OUTPUT: 3,3,NORTH
    ```

## Setup

1. Install [Nodejs](https://nodejs.org/en/) as necessary. This application is build **Nodejs v14.17.6**
2. Clone this repo:

   `git clone git@github.com:rodel-garcia/toy-robot-challenge.git`

3. Navigate to root of cloned directory, then install dependencies:

   `npm install`

That's it!

## NPM Commands

### Running the app:

`npm start`

### Running the build:

`npm run build`

This will build the app and output with `/dist` directory

### Running the tests:

`npm run test`

This will run the test in the console and produce `/coverage` directory to see graphical representation of the test
