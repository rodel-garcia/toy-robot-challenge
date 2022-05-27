import { DirectionEnum } from '../Direction';
import { IRobotOptions, Robot } from './Robot';

let robot: Robot;

beforeAll(() => {
  const robotOptions: IRobotOptions = { position: { x: 3, y: 3 }, direction: DirectionEnum.WEST, initialize: true };
  robot = new Robot(robotOptions);
});

describe('Robot', () => {
  describe('Initialize constructor', () => {
    it('must set "X" coordinate value', () => {
      expect(robot.position.x).toEqual(3);
    });
    it('must set "Y" coordinate value', () => {
      expect(robot.position.y).toEqual(3);
    });
    it('must set "Direction"  value', () => {
      expect(robot.direction).toEqual(DirectionEnum.WEST);
    });
  });
});
