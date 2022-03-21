import { FilterOption } from "./filter-option";
import { FilterOptionType } from './filter-option-type.enum';

describe('FilterOption', () => {
  it('should create an instance', () => {
    expect(new FilterOption(FilterOptionType.Text, 'My sample filter', 'mySampleFilter')).toBeTruthy();
  });
});
