import { DateFilterOption } from './date-filter-option';

describe('DateFilterOption', () => {
  it('should create an instance', () => {
    expect(new DateFilterOption('My date filter', 'dateFilter')).toBeTruthy();
  });
});
