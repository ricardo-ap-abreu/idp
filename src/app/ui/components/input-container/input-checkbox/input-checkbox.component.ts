import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FormGroupMessage} from 'src/app/ui/models/domains/form/form-group-message';
import {FilterOption} from 'src/app/ui/models/domains/filters/filter-option';
import {CheckBoxFilterOption} from '../../../models/domains/filters/check-box-filter-option';

@Component({
  selector: 'custom-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent implements OnInit {

  @Input() formGroup: FormGroup;
  abstractControl: AbstractControl;

  @Input() formGroupMessages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() filter: CheckBoxFilterOption;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() alwaysValid: boolean;

  constructor() { }

  ngOnInit() {
    this.abstractControl = this.formGroup.get(this.name);
    this.formMessage = this.formGroupMessages.find(message => this.name === message.name);
    this.abstractControl.setValue(this.filter && this.filter.isChecked());
  }

  changeCheckbox() {
    if (this.filter) {
      const value = this.abstractControl.value;
      this.filter.setValue(value);
    }
  }

}
