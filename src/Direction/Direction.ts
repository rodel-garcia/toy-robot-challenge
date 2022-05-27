import { Command } from '../Controller';

export enum DirectionEnum {
  'NORTH',
  'EAST',
  'SOUTH',
  'WEST',
}

export class Direction {
  direction: DirectionEnum;

  constructor(command: Command, currentDirection: DirectionEnum) {
    let direction = currentDirection;
    if (command === Command.LEFT) {
      direction = currentDirection === DirectionEnum.NORTH ? DirectionEnum.WEST : currentDirection - 1;
    }
    if (command === Command.RIGHT) {
      direction = currentDirection === DirectionEnum.WEST ? DirectionEnum.NORTH : currentDirection + 1;
    }
    this.direction = direction;
  }
}
