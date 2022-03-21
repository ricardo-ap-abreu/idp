import { FilterOption } from './filter-option';
import { ComboBoxFilterOption } from './combobox-filter-option.model';
import { Item } from '../item/item';
import { DateFilterOption } from './date-filter-option';
import { CheckBoxFilterOption } from './check-box-filter-option';
import { TextFilterOption } from './text-filter-option';
import { NumberFilterOption } from './number-filter-option';

export class FilterOptionFactory {

    createOptionText(name: string, placeholder: string, propertyName: string, required: boolean = false): FilterOption {
      return new TextFilterOption(placeholder, name, propertyName, required);
    }

    createOptionDate(name: string, propertyName: string, required: boolean = false): FilterOption {
        return new DateFilterOption(name, propertyName, required);
    }

    createOptionComboBox(defaultValues: Array<Item>, name: string, propertyName: string, required: boolean = false): FilterOption {
        return new ComboBoxFilterOption(defaultValues, name, propertyName, required);
    }

    createOptionCheckBox(name: string, propertyName: string, checked: boolean = false, required: boolean = false): FilterOption {
        return new CheckBoxFilterOption(name, propertyName, checked, required);
    }

    createOptionNumber(name: string, placeholder: string, propertyName: string, required: boolean = false): FilterOption {
        return new NumberFilterOption(name, propertyName, required);
    }
}
