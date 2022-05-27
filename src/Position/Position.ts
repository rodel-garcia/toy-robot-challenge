import { DirectionEnum } from '../Direction';
import { Robot } from '../Robot';
import { Table } from '../Table';

export interface IPosition {
  x: number;
  y: number;
}

export class Position {
  x: number;
  y: number;

  private table: Table;
  private robot: Robot;

  constructor(robot: Robot, table: Table) {
    this.x = robot.position.x;
    this.y = robot.position.y;
    this.table = table;
    this.robot = robot;
  }

  move() {
    switch (this.robot.direction) {
      case DirectionEnum.NORTH:
        this.y < this.table.height - 1 && ++this.y;
        break;
      case DirectionEnum.EAST:
        this.x < this.table.width - 1 && ++this.x;
        break;
      case DirectionEnum.SOUTH:
        this.y > 0 && --this.y;
        break;
      case DirectionEnum.WEST:
        this.x > 0 && --this.x;
        break;
    }
  }

  show() {
    return `OUTPUT: ${this.robot.position.x},${this.robot.position.y},${DirectionEnum[this.robot.direction]}`;
  }
}
