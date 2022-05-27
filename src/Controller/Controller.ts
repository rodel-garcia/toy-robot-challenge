import { Direction, DirectionEnum } from '../Direction';
import { Position } from '../Position';
import { Robot } from '../Robot';
import { Table } from '../Table';

export enum Command {
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
}

export class Controller {
  robot: Robot;
  table: Table;

  constructor(robot: Robot, table: Table) {
    this.robot = robot;
    this.table = table;
  }

  execute(command: string): void {
    const pattern = /^PLACE [0-4]+,[0-4]+,(NORTH|SOUTH|EAST|WEST)/;
    if (pattern.test(command)) {
      this.initializeRobot(command);
      return;
    }
    if (this.robot && !this.robot?.isInitialize) {
      this.executeCommand(command as Command);
    }
  }

  private initializeRobot(command: string): void {
    const args = command.split(',');
    const firstItem = args[0];
    const x = +firstItem[firstItem.length - 1];
    const y = +args[1];
    const direction = Object.values(DirectionEnum).indexOf(args[2]);
    this.robot = new Robot({ position: { x, y }, direction });
  }

  private executeCommand(command: Command) {
    const { direction } = this.robot;
    const position = new Position(this.robot, this.table);

    switch (command) {
      case Command.LEFT:
      case Command.RIGHT:
        this.robot.direction = new Direction(command, direction).direction;
        break;
      case Command.MOVE:
        position.move();
        this.robot.position = { x: position.x, y: position.y };
        break;
      case Command.REPORT:
        console.log(position.show() + '\n');
        break;
    }
  }
}
