import { FilterOption } from './filter-option';
import { Item } from '../item/item';
import { FilterOptionType } from './filter-option-type.enum';

export class ComboBoxFilterOption extends FilterOption {

    private defaultValues: Array<Item>;
    private selectedValue: Item;

    constructor(
        defaultValues: Array<Item>,
        name: string,
        propertyName: string,
        required: boolean) {
        super(FilterOptionType.ComboBox, name, propertyName, required);
        this.defaultValues = defaultValues;
        this.selectedValue = defaultValues[0];
    }

    getDefaultValues(): Array<Item> {
        return this.defaultValues;
    }

    getValue(): Object {
        return this.value;
    }

    applyFilter(items: Object[]): Object[] {
        if (!this.value) {
            return [];
        }
        return items.filter(i => {
            let maybeNumber = i[this.propertyName];
            let maybeValueNumber = parseInt(this.value.toString());
            if (!isNaN(maybeNumber) && maybeValueNumber) {
                return parseInt(maybeNumber) === maybeValueNumber;
            }
            return false;
        });
    }

    hasValue(): boolean {
        return this.getValue() != null
    }

    clear() {
        this.value = null;
    }
}
