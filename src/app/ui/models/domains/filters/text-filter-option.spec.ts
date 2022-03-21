import { TextFilterOption } from './text-filter-option';

describe('TextFilterOption', () => {
  it('should create an instance', () => {
    expect(new TextFilterOption('Input your text here', 'My text input', 'myTextInput')).toBeTruthy();
  });
});
