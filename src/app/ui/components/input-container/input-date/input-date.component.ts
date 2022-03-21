import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormGroupMessage } from '../../../models/domains/form/form-group-message';
import * as moment from 'moment';

@Component({
  selector: 'custom-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent implements OnInit {

  @Input() formGroup: FormGroup;
  abstractControl: AbstractControl;

  @Input() formGroupMessages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() name: string;
  @Input() placeholder: string;
  @Input() displayFormat: string;
  @Input() outputFormat: string;
  @Input() alwaysValid: string;

  constructor() { }

  ngOnInit() {
    this.abstractControl = this.formGroup.get(this.name);
    this.formMessage = this.formGroupMessages.find(message => this.name === message.name);
    this.abstractControl.setValue(moment(this.abstractControl.value).toISOString());
  }

  formatDate() {
    const formatDate = moment(this.abstractControl.value, this.outputFormat).format(this.outputFormat).trim();
    this.abstractControl.setValue(formatDate);
  }

}
