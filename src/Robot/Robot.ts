import { DirectionEnum } from '../Direction';
import { IPosition } from '../Position';

export interface IRobotOptions {
  position: IPosition;
  direction: DirectionEnum;
  initialize?: boolean;
}

export class Robot {
  direction: DirectionEnum;
  position: IPosition;
  isInitialize: boolean;

  constructor(options: IRobotOptions) {
    this.position = options.position;
    this.direction = options.direction;
    this.isInitialize = options.initialize || false;
  }
}
