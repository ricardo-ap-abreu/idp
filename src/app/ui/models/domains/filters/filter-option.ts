import {Item} from '../item/item';
import {FilterOptionType} from './filter-option-type.enum';

export interface IFilterOption {
  getDefaultValues(): Array<Item>;

  getName(): string;

  getType(): FilterOptionType;

  getPropertyName(): string;

  getValue(): object;

  setValue(value: object): void;

  hasValue(): boolean;

  getRequired(): boolean;

  validateRequired(): boolean;
}

export class FilterOption implements IFilterOption {

  protected value: string;
  protected propertyName: string;
  private filterOptionType: FilterOptionType;
  private name: string;
  private required = false;

  constructor(filterOptionType: FilterOptionType, name: string, propertyName: string, required: boolean) {
    this.filterOptionType = filterOptionType;
    this.name = name;
    this.propertyName = propertyName;
    this.required = required;
  }

  getName(): string {
    return this.name;
  }

  getType(): FilterOptionType {
    return this.filterOptionType;
  }

  getDefaultValues(): Array<Item> {
    return new Array<Item>();
  }

  getPropertyName(): string {
    return this.propertyName;
  }

  getValue(): any {
    return this.value;
  }

  setValue(value: any): void {
    this.value = value;
  }

  isComboBoxFilter(): boolean {
    return this.getType() === FilterOptionType.ComboBox;
  }

  isDateFilter(): boolean {
    return this.getType() === FilterOptionType.Date;
  }

  isTextFilter(): boolean {
    return this.getType() === FilterOptionType.Text;
  }

  isCheckFilter(): boolean {
    return this.getType() === FilterOptionType.CheckBox;
  }

  isNumberFilter(): boolean {
    return this.getType() === FilterOptionType.Number;
  }

  hasValue(): boolean {
    return !!this.getValue();
  }

  applyFilter(items: object[]): object[] {
    return items.filter(i => i[this.propertyName] === this.value);
  }

  clear() {
    this.value = null;
  }

  getRequired(): boolean {
    return this.required;
  }

  validateRequired(): boolean {
    return this.required && this.hasValue();
  }
}
