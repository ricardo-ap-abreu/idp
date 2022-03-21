import { Sort } from './sort';
import { Direction } from '../paginator/direction.enum';

describe('Sort', () => {
  it('should create an instance', () => {
    expect(new Sort('name', Direction.Asc)).toBeTruthy();
  });
});
