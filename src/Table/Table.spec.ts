import { Table } from './Table';

let table: Table;

beforeAll(() => {
  table = new Table(3, 2);
});

describe('Table', () => {
  describe('Initialize constructor', () => {
    it('set the table with 3 rows', () => {
      expect(table.height).toEqual(3);
    });
    it('set the table with 2 columns', () => {
      expect(table.width).toEqual(2);
    });
  });
});
