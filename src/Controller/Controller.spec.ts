import { DirectionEnum } from '../Direction';
import { IRobotOptions, Robot } from '../Robot';
import { Table } from '../Table';
import { Command, Controller } from './Controller';

const VALID_PLACE_COMMAND = 'PLACE 4,3,SOUTH';
const INVALID_PLACE_COMMAND = 'PLACE 5,0,ABC';

let controller: Controller;
let table: Table;
let robot: Robot;

beforeAll(() => {
  const robotOptions: IRobotOptions = { position: { x: 0, y: 0 }, direction: DirectionEnum.NORTH, initialize: true };
  robot = new Robot(robotOptions);
  table = new Table(5, 5);
  controller = new Controller(robot, table);
});

describe('Controller', () => {
  describe(`PLACE: execute with invalid command (${INVALID_PLACE_COMMAND})`, () => {
    it('initilize the robot and does nothing', () => {
      controller.execute(INVALID_PLACE_COMMAND);
      expect(controller.robot.isInitialize).toBe(true);
    });
  });
  describe(`PLACE: execute with valid command (${VALID_PLACE_COMMAND})`, () => {
    it('initilize x position with "4"', () => {
      controller.execute(VALID_PLACE_COMMAND);
      expect(controller.robot.position.x).toEqual(4);
    });
    it('initilize y position with "3"', () => {
      expect(controller.robot.position.y).toEqual(3);
    });
    it('initilize direction at "SOUTH"', () => {
      expect(controller.robot.direction).toEqual(DirectionEnum.SOUTH);
    });
  });
  describe(`MOVE: execute from previous position (OUTPUT: 4,3,SOUTH)`, () => {
    it('stay at current column', () => {
      controller.execute(Command.MOVE);
      expect(controller.robot.position.x).toEqual(4);
    });
    it('move one step below', () => {
      expect(controller.robot.position.y).toEqual(2);
    });
  });
  describe(`LEFT: execute from previous position (OUTPUT: 4,2,SOUTH)`, () => {
    it('stay at current position', () => {
      controller.execute(Command.LEFT);
      expect(controller.robot.position.x).toEqual(4);
      expect(controller.robot.position.y).toEqual(2);
    });
    it('turn left facing EAST', () => {
      expect(controller.robot.direction).toEqual(DirectionEnum.EAST);
    });
  });
  describe(`RIGHT: execute from previous position (OUTPUT: 4,2,EAST)`, () => {
    it('stay at current position', () => {
      controller.execute(Command.RIGHT);
      expect(controller.robot.position.x).toEqual(4);
      expect(controller.robot.position.y).toEqual(2);
    });
    it('turn right facing SOUTH again', () => {
      expect(controller.robot.direction).toEqual(DirectionEnum.SOUTH);
    });
  });
  describe(`REPORT: execute from previous position (OUTPUT: 4,2,EAST)`, () => {
    it('stay at current position', () => {
      controller.execute(Command.REPORT);
      expect(controller.robot.position.x).toEqual(4);
      expect(controller.robot.position.y).toEqual(2);
    });
    it('turn right facing SOUTH again', () => {
      console.log = jest.fn();
      controller.execute(Command.REPORT);
      expect(console.log).toHaveBeenCalledWith('OUTPUT: 4,2,SOUTH\n');
    });
  });
  describe(`BORDER: execute from previous position (OUTPUT: 4,2,SOUTH)`, () => {
    it('stay at current position, and turn left', () => {
      controller.execute(Command.LEFT);
    });
    it('should retain current position after MOVE command', () => {
      controller.execute(Command.MOVE);
      expect(controller.robot.position.x).toEqual(4);
      expect(controller.robot.position.y).toEqual(2);
    });
  });
});
