import {FilterOption} from './filter-option';
import {FilterOptionType} from './filter-option-type.enum';

export class CheckBoxFilterOption extends FilterOption {

  private checked = false;

  constructor(
    name: string,
    propertyName: string,
    checked: boolean,
    required: boolean) {
    super(FilterOptionType.CheckBox, name, propertyName, required);
    this.checked = checked;
    this.value = (Object)(checked);
  }

    isChecked(): boolean {
      return this.checked;
    }

  applyFilter(items: object[]): object[] {
    if (!this.value) {
      return [];
    }
    return items.filter(i => {
      const checked: boolean = (this.value.toString() === 'true');
      return i[this.propertyName] === checked;
    });
  }

    hasValue(): boolean {
      return this.getValue() != null;
    }
}
