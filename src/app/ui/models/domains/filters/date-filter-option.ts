import {FilterOption} from './filter-option';
import {FilterOptionType} from './filter-option-type.enum';


export class DateFilterOption extends FilterOption {
    dateValue: string;
    timeValue: string;

    constructor(
        name: string,
        propertyName: string,
        required: boolean) {
        super(FilterOptionType.Date, name, propertyName, required);
    }

  applyFilter(items: any[]): any[] {
    if (!this.value) {
      return [];
    }
    return items.filter(i => {
      const dateValue = i[this.propertyName];
      const filterValue = new Date(this.value.toString());
      if (filterValue) {
        return dateValue === filterValue;
      }
      return false;
    });
    }

    clear() {
        this.dateValue = null;
        this.timeValue = null;
    }
}
