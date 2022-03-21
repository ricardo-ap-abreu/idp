import { FilterOption } from './filter-option';
import { FilterOptionType } from './filter-option-type.enum';

export class NumberFilterOption extends FilterOption {

    constructor(
        name: string,
        propertyName: string,
        required: boolean) {
        super(FilterOptionType.Number, name, propertyName, required);
    }

    applyFilter(items: any[]): any[] {
        if (!this.value) {
            return [];
        }
        return items.filter(i => {
          const maybeNumber = i[this.propertyName];
          const maybeValueNumber = parseInt(this.value.toString());
          if (!isNaN(maybeNumber) && maybeValueNumber) {
            return parseInt(maybeNumber) === maybeValueNumber;
          }
          return false;
        });
    }

}
