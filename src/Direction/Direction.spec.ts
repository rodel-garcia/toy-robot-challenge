import { Command } from '../Controller';
import { Direction, DirectionEnum } from './Direction';

let direction: Direction;

describe('Direction', () => {
  describe('Initialize constructor with LEFT command facing NORTH', () => {
    it('should face WEST', () => {
      direction = new Direction(Command.LEFT, DirectionEnum.NORTH);
      expect(direction.direction).toEqual(DirectionEnum.WEST);
    });
  });
  describe('Initialize constructor with RIGHT command facing WEST', () => {
    it('should face WEST', () => {
      direction = new Direction(Command.RIGHT, DirectionEnum.WEST);
      expect(direction.direction).toEqual(DirectionEnum.NORTH);
    });
  });
});
