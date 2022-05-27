import { DirectionEnum } from '../Direction';
import { IRobotOptions, Robot } from '../Robot';
import { Table } from '../Table';
import { Position } from './Position';

let table: Table;
let position: Position;
let robot: Robot;

describe('Position', () => {
  describe('Initialize constructor (OUTPUT: 0,0,NORTH)', () => {
    it('provide value for X axis', () => {
      position = getPosition(0, 0, DirectionEnum.NORTH);
      expect(position.x).toEqual(0);
    });
    it('provide value for Y axis', () => {
      expect(position.x).toEqual(0);
    });
  });
  describe('MOVE: execute from current position (OUTPUT: 0,0,NORTH)', () => {
    it('should go to upper row', () => {
      position.move();
      expect(position.y).toEqual(1);
    });
    it('should stay at current column', () => {
      expect(position.x).toEqual(0);
    });
  });
  describe('MOVE: execute from current position (OUTPUT: 4,4,SOUTH)', () => {
    it('should down to lower row', () => {
      position = getPosition(4, 4, DirectionEnum.SOUTH);
      position.move();
      expect(position.y).toEqual(3);
    });
    it('should stay at current column', () => {
      expect(position.x).toEqual(4);
    });
  });
  describe('MOVE: execute from current position (OUTPUT: 0,4,EAST)', () => {
    it('should stay at current row', () => {
      position = getPosition(0, 4, DirectionEnum.EAST);
      position.move();
      expect(position.y).toEqual(4);
    });
    it('should go to next column', () => {
      expect(position.x).toEqual(1);
    });
  });
  describe('MOVE: execute from current position (OUTPUT: 4,0,WEST)', () => {
    it('should stay at current row', () => {
      position = getPosition(4, 0, DirectionEnum.WEST);
      position.move();
      expect(position.y).toEqual(0);
    });
    it('should go to next column', () => {
      expect(position.x).toEqual(3);
    });
  });
});

function getPosition(x: number, y: number, direction: DirectionEnum) {
  const robotOptions: IRobotOptions = { position: { x, y }, direction };
  robot = new Robot(robotOptions);
  table = new Table(5, 5);
  return new Position(robot, table);
}
