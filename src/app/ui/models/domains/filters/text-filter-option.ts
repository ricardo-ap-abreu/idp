import {FilterOption} from './filter-option';
import {FilterOptionType} from './filter-option-type.enum';

export class TextFilterOption extends FilterOption {

    private placeHolder: string;

    constructor(
      placeHolder: string,
      name: string,
      propertyName: string,
      required: boolean) {
        super(FilterOptionType.Text, name, propertyName, required);
        this.placeHolder = placeHolder;
    }

  applyFilter(items: any[]): any[] {
    return items.filter(i => i[this.propertyName].toString().includes(this.value));
  }

    getPlaceholder(): string {
        return this.placeHolder;
    }
}
