import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormGroupMessage } from 'src/app/ui/models/domains/form/form-group-message';


@Component({
  selector: 'custom-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() formGroup: FormGroup;
  abstractControl: AbstractControl;

  @Input() formGroupMessages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() name: string;
  @Input() iconStart: string;
  @Input() iconEnd: string;
  @Input() iconEndOnPress: () => void;
  @Input() iconEndTooltipText: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() alwaysValid: string;
  hasFocus: boolean;

  constructor() {}

  ngOnInit() {
    this.abstractControl = this.formGroup.get(this.name);
    this.formMessage = this.formGroupMessages.find(message => this.name === message.name);
  }

  changeFocus(focused: boolean) {
    this.hasFocus = focused;
  }

}
