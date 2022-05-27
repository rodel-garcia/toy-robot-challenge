import { createInterface, ReadLineOptions } from 'readline';
import { Controller } from './Controller';
import { DirectionEnum } from './Direction';
import { IRobotOptions, Robot } from './Robot';
import { Table } from './Table';

const robotOptions: IRobotOptions = { position: { x: 0, y: 0 }, direction: DirectionEnum.NORTH, initialize: true };
const robot = new Robot(robotOptions);
const table = new Table(5, 5);
const controller = new Controller(robot, table);

const options: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};
const readline = createInterface(options);

console.log('Initialize Robot with PLACE command: (PLACE <X-AXIS>,<Y-AXIS>,<FACE DIRECTION>)\n');

readline.prompt(true);
readline.on('line', (line: string) => {
  controller.execute(line);
  readline.prompt(true);
});
