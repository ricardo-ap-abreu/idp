import { CheckBoxFilterOption } from './check-box-filter-option';

describe('CheckBoxFilterOption', () => {
  it('should create an instance', () => {
    expect(new CheckBoxFilterOption('My checkbox', 'myCheckbox')).toBeTruthy();
  });
});
