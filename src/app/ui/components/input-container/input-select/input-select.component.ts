import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../../models/domains/form/form-group-message';
import {Item} from '../../../models/domains/item/item';

@Component({
  selector: 'custom-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {

  @Input() formGroup: FormGroup;
  abstractControl: AbstractControl;

  @Input() formGroupMessages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() name: string;
  @Input() placeholder: string;
  @Input() items: Array<Item>;
  @Input() selected: Item;
  @Input() alwaysValid: string;

  constructor() { }

  ngOnInit() {
    this.abstractControl = this.formGroup.get(this.name);
    this.formMessage = this.formGroupMessages.find(message => this.name === message.name);
  }


}
